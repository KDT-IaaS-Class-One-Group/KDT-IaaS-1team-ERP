"use client";

import React, { useState, useEffect, useCallback } from "react";

// 주문 정보를 나타내는 인터페이스 정의
interface Product {
  cateName: string;
  productName: string;
  price: string;
  stock: string;
  productKey: number;
}

// 한 페이지에 표시되는 상품 수
const pageSize = 10;

// 상품 목록 컴포넌트 정의
export default function List() {
  // 상품 목록 상태 변수 초기화
  const [products, setProducts] = useState<Product[]>([]);
  // 선택된 상품 목록 상태 변수 초기화
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  // 현재 페이지 상태 변수 초기화
  const [currentPage, setCurrentPage] = useState(1);
  // 검색어 상태 변수 초기화
  const [searchTerm, setSearchTerm] = useState("");
  // 페이지 정보 상태 변수 초기화
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    pageSize: 10,
    totalPages: 1,
  });

  // 상품 데이터를 가져오는 함수 정의
  const fetchData = useCallback(
    async (page: number, term: string = "") => {
      try {
        // API 엔드포인트 생성
        let apiUrl = `/product?page=${page}&pageSize=${pageSize}`;

        // 검색어가 있는 경우에는 API 엔드포인트에 추가
        if (term) {
          apiUrl += `&searchTerm=${term}`;
        }
        console.log(apiUrl)

        // 상품 데이터를 가져와 상태 변수에 설정
        const response = await fetch(apiUrl);
        const data = await response.json();

        setProducts(data.products);
        setPageInfo({ // 정보를 받기 위한 초기값
          currentPage: data.pageInfo.currentPage,
          pageSize: data.pageInfo.pageSize,
          totalPages: data.pageInfo.totalPages,
        });
      } catch (error) {
        console.error("상품 정보를 가져오는데 실패했습니다.", error);
      }
    },
    [] ); // useCallback 두번째 인자 : 빈 배열([]) = 효과가 한 번만 실행되도록 설정

  // 페이지 변경 핸들러
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (productKey: number) => {
    setSelectedProducts((prevSelected) => {
      const isSelected = prevSelected.includes(productKey);
      let updatedSelected: number[];

      if (isSelected) {
        // 이미 선택된 상품이면 제거
        updatedSelected = prevSelected.filter((key) => key !== productKey);
      } else {
        // 선택되지 않은 상품이면 추가
        updatedSelected = [...prevSelected, productKey];
      }

      return updatedSelected;
    });
  };

  // 상품 삭제 핸들러
  const handleDelete = async () => {
    try {
      if (selectedProducts.length === 0) {
        console.error("선택한 상품이 없습니다.");
        return;
      }

      // 선택된 상품들을 삭제하는 API 호출을 병렬로 실행
      const deleteRequests = selectedProducts.map((productKey) => {
        return fetch(`/deleteProduct/${productKey}`, {
          method: "DELETE",
        }).then((response) => {
          if (!response.ok) {
            throw new Error("상품 삭제에 실패했습니다.");
          }
          return response.json();
        });
      });

      // 병렬 실행한 결과를 기다림
      const deleteResults = await Promise.all(deleteRequests);

      // 모든 상품 삭제가 성공했는지 확인
      const isDeleteSuccess = deleteResults.every(
        (result) => result && result.message === "상품이 성공적으로 삭제되었습니다."
      );

      if (isDeleteSuccess) {
        // 삭제된 상품들을 제외하고 상품 목록을 업데이트
        const updatedProducts = products.filter(
          (product) => !selectedProducts.includes(product.productKey)
        );

        setProducts(updatedProducts);
        setSelectedProducts([]);

        // 삭제 후 currentPage를 1로 업데이트
        setCurrentPage(1);

        // 삭제 후 첫 페이지의 데이터를 가져옵니다.
        fetchData(1, searchTerm);
      } else {
        console.error("일부 상품이 삭제되지 않았습니다.", deleteResults);
        throw new Error("일부 상품이 삭제되지 않았습니다.");
      }
    } catch (error) {
      console.error("상품 삭제 중 오류 발생:", error);
    }
  };

  // 검색 버튼 클릭 시 실행되는 핸들러
  const handleSearch = () => {
    // 검색 버튼 클릭 시 첫 페이지의 데이터를 가져옵니다.
    setCurrentPage(1);
    fetchData(1, searchTerm);
  };

  // 검색어 입력이 변경될 때 자동으로 검색
  useEffect(() => {
    // 500 milliseconds 딜레이 후 검색 수행
    const searchTimer = setTimeout(() => {
      fetchData(1, searchTerm);
    }, 3000);

    // cleanup 함수: 이전 타이머를 제거하여 중복 호출 방지
    return () => clearTimeout(searchTimer);
  }, [searchTerm, fetchData]);

  // 초기 렌더링 시 첫 페이지의 데이터를 가져옵니다.
  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  // JSX 반환
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">상품 목록</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="상품명으로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md text-black px-10 py-2.5 mr-4"
        />
        <button
          className="bg-blue-500 text-white px-10 py-2.5 rounded-md mr-5"
          onClick={handleSearch}
        >
          검색
        </button>
        <button
          className="bg-blue-500 text-white px-10 py-2.5 rounded-md"
          onClick={handleDelete}
        >
          상품 삭제
        </button>
      </div>

      <table className="mt-4 border-collapse border w-full">
        <thead className="border-b-2 border-solid border-gray-200">
          <tr className="text-lg md:text-xl bg-gray-200">
            <th className="p-2 text-2xl text-center w-1/12 border-solid">
              선택
            </th>
            <th className="p-2 text-2xl text-center w-2/12">카테고리</th>
            <th className="p-2 text-2xl text-center w-3/12">상품명</th>
            <th className="p-2 text-2xl text-center w-2/12">가격</th>
            <th className="p-2 text-2xl text-center w-2/12">재고</th>
          </tr>
        </thead>
        <tbody className="py-4">
          {Array.isArray(products) &&
            products.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } text-base md:text-lg  px-4 py-4 rounded-md`}
                style={{ lineHeight: "2.5" }}
              >
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.productKey)}
                    onChange={() => handleCheckboxChange(product.productKey)}
                  />
                </td>
                <td className="text-center">{product.cateName}</td>
                <td className="text-center">{product.productName}</td>
                <td className="text-center">{product.price}원</td>
                <td className="text-center">{product.stock}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-center space-x-2 bottom-0 left-0 w-full bg-white p-4">
        {Array.from(
          { length: pageInfo.totalPages },
          (_, index) => index + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`w-10 h-10 px-2 border rounded ${
              pageNumber === pageInfo.currentPage
                ? "bg-blue-500 text-white"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
