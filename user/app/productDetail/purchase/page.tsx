"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import base64, { decode } from "js-base64";
import Addr, { IAddr } from "@/app/ui/addressSearch";

const getUsernameSomehow = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = decode(payload);
      const payloadObject = JSON.parse(decodedPayload);
      return payloadObject.username;
    } catch (error) {
      console.error("토큰 파싱 오류:", error);
    }
  }

  return null;
};

export default function Purchase() {
  const username = getUsernameSomehow();
  const [productsInfo, setProductsInfo] = useState<
    { name: string; price: number; productKey: number; quantity: number }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedAddress, setSelectedAddress] = useState<IAddr>({
    address: "",
    zonecode: "",
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    if (
      params.productName &&
      params.price &&
      params.productKey &&
      params.quantity
    ) {
      const productList = params.productName.split(",");
      const productKeyList = params.productKey.split(",");
      const priceList = params.price
        .split(",")
        .map((price: string) => parseInt(price, 10));
      const quantityList = params.quantity
        .split(",")
        .map((quantity: string) => parseInt(quantity, 10));

      const productsWithPrices = productList.map((productName, index) => ({
        name: productName,
        price: priceList[index],
        productKey: parseInt(productKeyList[index], 10),
        quantity: quantityList[index],
      }));

      const totalPriceSum = calculateTotalPrice(productsWithPrices);

      setProductsInfo(productsWithPrices);
      setTotalPrice(totalPriceSum);
    }
  }, [searchParams]);

  const handleIncrement = (index: number) => {
    setProductsInfo((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity + 1,
      };
      setTotalPrice(calculateTotalPrice(updatedProducts));
      return updatedProducts;
    });
  };

  const handleDecrement = (index: number) => {
    setProductsInfo((prevProducts) => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index].quantity > 1) {
        updatedProducts[index] = {
          ...updatedProducts[index],
          quantity: updatedProducts[index].quantity - 1,
        };
        setTotalPrice(calculateTotalPrice(updatedProducts));
      }
      return updatedProducts;
    });
  };

  const calculateTotalPrice = (
    products: { name: string; price: number; quantity: number }[]
  ) => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullAddress =
      `${selectedAddress.address} ${selectedAddress.detailedAddress}`.trim();
    const data = {
      username: username,
      customer: e.currentTarget.customer.value,
      receiver: e.currentTarget.receiver.value,
      phoneNumber: e.currentTarget.phoneNumber.value,
      address: fullAddress,
      price: totalPrice,
      productName: productsInfo.map((product) => product.name).join(","),
      productKey: productsInfo.map((product) => product.productKey).join(","),
      quantity: productsInfo.map((product) => product.quantity).join(","),
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

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 숫자와 - 외의 문자는 제거
    value = value.replace(/[^\d]/g, "");

    // 길이 제한
    if (value.length > 11) {
      value = value.slice(0, 11); // 11자리까지만 유지
    }

    // 원하는 형식으로 변환
    if (value.length >= 3 && value.length <= 7) {
      value = value.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    } else if (value.length > 7) {
      value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
    }

    // 직접 input 요소의 value 속성을 업데이트
    (e.target as HTMLInputElement).value = value;
  };

  const handleAddressSelect = (data: IAddr) => {
    setSelectedAddress(data);
  };

  const handleDetailedAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      detailedAddress: value,
    }));
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
          <div className="flex items-center">
            <input
              className="w-full border border-gray-300 px-3 py-2 text-base rounded-md"
              type="text"
              name="address"
              id="address"
              value={selectedAddress.address}
              required
              readOnly
            />
            <div className="ml-2"></div>
          </div>
        </div>
        <div className="mb-4 flex flex-col w-80 mt-1">
          <label htmlFor="addressDetail" className="text-sm">
            상세주소
          </label>
          <input
            className="border border-gray-300 px-3 py-2 text-base rounded-md"
            type="text"
            name="addressDetail"
            id="addressDetail"
            onChange={handleDetailedAddressChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <Addr onAddressSelect={handleAddressSelect} />
        </div>
        <br />
        <p>선택한 상품 목록:</p>
        <div className="w-full border border-gray-300 px-3 py-2 text-base rounded-md">
          <ul>
            {productsInfo.map((product, index) => (
              <li key={index}>
                <img src={`/${product.name}.png`} width={100} height={100} />
                {product.name}: {product.price * product.quantity}원 수량 :{" "}
                {product.quantity}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDecrement(index);
                  }}
                  disabled={product.quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleIncrement(index);
                  }}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
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
