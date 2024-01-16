"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import base64, { decode } from "js-base64";

const getUsernameSomehow = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = decode(payload);
      const payloadObject = JSON.parse(decodedPayload);
      return payloadObject.username;
    } catch (error) {
      console.error("Error parsing token:", error);
    }
  }

  return null;
};

export default function Purchase() {
  const username = getUsernameSomehow();
  const [productsInfo, setProductsInfo] = useState<
    { name: string; price: number; productKey: number }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    if (params.productName && params.price) {
      const productList = params.productName.split(",");
      const productKeyList = params.productKey.split(",");
      const priceList = params.price
        .split(",")
        .map((price: string) => parseInt(price, 10));

      const productsWithPrices = productList.map((productName, index) => ({
        name: productName,
        price: priceList[index],
        productKey: parseInt(productKeyList[index], 10),
      }));

      const totalPriceSum = priceList.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      );

      setProductsInfo(productsWithPrices);
      setTotalPrice(totalPriceSum);
    }
  }, [searchParams]);

  const ProductNames = productsInfo.map((product) => product.name).join(",");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username: username,
      customer: e.currentTarget.customer.value,
      receiver: e.currentTarget.receiver.value,
      phoneNumber: e.currentTarget.phoneNumber.value,
      address: e.currentTarget.address.value,
      price: totalPrice,
      productName: ProductNames,
      productKey: productsInfo.map((product) => product.productKey).join(","),
    };

    try {
      const response = await fetch("/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("주문이 성공적으로 생성되었습니다.");
        alert("주문 완료");
        window.location.href = "/";
      } else {
        console.error("주문 생성 실패");
        alert("잔액이 부족합니다");
      }
    } catch (error) {
      console.error("주문 생성 중 에러:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-96 mx-auto mt-10 p-8 bg-gray-100 rounded-md">
      <h1 className="text-3xl font-bold mb-4">주문하기</h1>
      <p className="text-lg mb-2">배송정보</p>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="customer" className="text-sm">
            주문고객
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 text-base rounded-md"
            type="text"
            name="customer"
            id="customer"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="receiver" className="text-sm">
            받는 분
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 text-base rounded-md"
            type="text"
            name="receiver"
            id="receiver"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-sm">
            휴대폰번호
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 text-base rounded-md"
            type="text"
            name="phoneNumber"
            id="phone"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="text-sm">
            배송주소
          </label>
          <input
            className="w-full border border-gray-300 px-3 py-2 text-base rounded-md"
            type="text"
            name="address"
            id="address"
            required
          />
        </div>
        <div className="mb-4 bg-white p-4 rounded-md">
          <input type="hidden" name="price" value={totalPrice} />
          <input type="hidden" name="username" value={username} />
          <input type="hidden" name="productName" value={ProductNames} />
          <input
            type="hidden"
            name="productKey"
            value={productsInfo.map((product) => product.productKey).join(",")}
          />
          <p className="text-base font-bold mb-2">선택한 상품 목록 :</p>
          <div className="list-disc pl-6 mb-2">
            {productsInfo.map((product, index) => (
              <div key={index} className="flex justify-between">
                <span>{product.name}</span>
                <span>{product.price}원</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl mb-2">총 가격 : {totalPrice}원</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            결제하기
          </button>
        </div>
      </form>
    </div>
  );
}
