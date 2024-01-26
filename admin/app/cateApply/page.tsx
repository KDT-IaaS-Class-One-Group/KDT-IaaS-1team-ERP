'use client'

import { useState, useRef } from 'react';
// 함수 컴포넌트에서 상태(state)를 관리
// 함수 컴포넌트에서 DOM 요소에 접근하거나, 컴포넌트 간에 값을 공유

// 카테고리 추가 컴포넌트
export default function CateApply() {
  // 상태 변수 초기화
  const [category, setCategory] = useState(''); // 카테고리명 상태 변수
  const [image, setImage] = useState<File | null>(null); // 이미지 파일 상태 변수
  const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 입력 필드의 ref

  // 폼 제출 핸들러
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    // FormData 생성
    const formData = new FormData();

    // 이미지가 존재하면 FormData에 추가
    if (image) {
      formData.append('image', image);
    }
    
    // 입력된 데이터를 FormData에 추가
    formData.append('category', category);

    try {
      // 카테고리 추가 API 호출
      const response = await fetch('/addCategory', {
        method: 'POST',
        body: formData,
      });

      // 응답이 성공적이면 알림
      if (response.ok) {
        alert('카테고리 추가 성공');
      } else {
        alert('이미 존재하는 카테고리 명입니다');
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생', error);
    }

    // 입력값 초기화
    setCategory('');
    setImage(null);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (event: any) => {
    const selectedImage = event.target.files[0]; // 선택된 이미지 파일
    setImage(selectedImage); // 이미지 상태 변수 업데이트
  };

  // JSX 반환
  return (
    <div className='w-screen'>
      <h1 className="text-3xl font-bold mb-6">카테고리 추가</h1>
      <form
        className="flex flex-col max-w-md mx-auto my-8 md:my-3 w-full md:w-3/4"
        onSubmit={handleSubmit}
      >
        {/* 이미지 업로드 입력 */}
        <div className="mb-4">
          <label className="text-2xl font-bold" style={{ lineHeight: "2" }}>
            이미지 업로드 :
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 w-full max-w-md"
              ref={fileInputRef}
            />
          </label>
        </div>
        {/* 카테고리명 입력 */}
        <div className="mb-4">
          <label className="text-2xl font-bold" style={{ lineHeight: "2" }}>
            카테고리명 :
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-b outline-none pl-2 w-full border border-gray-300"
            />
          </label>
        </div>
        {/* 등록 버튼 */}
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-md text-xl"
          type="submit"
        >
          등록
        </button>
      </form>
    </div>
  );
}
