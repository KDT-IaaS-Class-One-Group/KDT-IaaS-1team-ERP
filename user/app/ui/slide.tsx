'use client'

// 'react' 모듈에서 필요한 함수 및 상태 변수들을 가져옵니다.
import React, { useState } from 'react';

export default function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const images = [
    '/image1.jpg', // 이미지 파일명과 경로에 맞게 수정하세요
    '/image2.jpg',
    '/image3.jpg',
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-lvw relative overflow-hidden">
      <button className="bg-transparent absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-4xl bg-white p-2 h-52 " onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className="bg-transparent absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-4xl bg-white p-2 h-52 " onClick={handleNextSlide}>
        &gt;
      </button>
      <div className="flex text-center transition-transform duration-300 ease-in-out" style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index} className="w-screen h-80" style={{ backgroundImage: `url(${getRandomImage()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {`Slide ${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
}