'use client'

// 'react' 모듈에서 필요한 함수 및 상태 변수들을 가져옵니다.
import { useState } from 'react';


export default function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 인덱스 상태 변수
  const totalSlides = 2; // 전체 슬라이드 개수

  const handlePrevSlide = () => {
    // 이전 슬라이드로 이동 (첫 번째 슬라이드에서 더 왼쪽으로 이동하면 마지막 슬라이드로 이동)
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    // 다음 슬라이드로 이동 (마지막 슬라이드에서 더 오른쪽으로 이동하면 첫 번째 슬라이드로 이동)
    setCurrentSlide((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-lvw relative overflow-hidden">
      {/* 좌측 화살표 버튼 */}
      <button className="bg-transparent absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 h-52" onClick={handlePrevSlide}>
        <img src="/화살표.png" alt="이전 화살표" />
      </button>
  
      {/* 우측 화살표 버튼 */}
      <button className="bg-transparent absolute right-0 top-1/2 transform -translate-y-1/2 z-10  p-6 h-52" onClick={handleNextSlide}>
        <img src="/화살표2.png" alt="다음 화살표" />
      </button>
  
      {/* 슬라이드 내용 */}
      <div className="flex text-center transition-transform duration-300 ease-in-out" style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
        {/* 첫 번째 슬라이드 */}
        <div className="w-full">
          <img src="/add.jpeg" alt="add-image" className="w-full h-auto" />
        </div>
  
        {/* 두 번째 슬라이드 */}
        <div className="w-full">
          <img src="/add2.jpeg" alt="add2-image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
  }  