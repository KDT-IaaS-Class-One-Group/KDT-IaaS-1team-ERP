"use client";

import React from "react";

const Footer = () => {
  const companyInfo = {
    name: "DYABYA",
    phoneNumber: "010-1234-5678",
    email: "DYABYA@green.com",
    address: "대전광역시 서구 대덕대로 182 오라클빌딩 305호",
    businessNumber: "123-45-67890",
  };
  return (
    <div className="footer-button-container bg-gray-200 p-4 rounded-md flex items-center">
      <div>
        <img src="logo.png" alt="logo" className="mr-4" />
        <p className="text-xl mb-2 mr-4">이용약관 | 개인정보처리방침 | 상호 : DYABYA</p>
      </div>
  
      <div className="flex flex-col ml-auto"> 
          <p className="text-xl mb-2 mr-4">사업자 등록 번호: {companyInfo.businessNumber}</p>
          <p className="text-xl mb-2 mr-4">전화번호: {companyInfo.phoneNumber}</p>
  
          <p className="text-xl mb-2 mr-10">이메일: {companyInfo.email}</p>
          <p className="text-xl mb-2 mr-10">주소: {companyInfo.address}</p>
      </div>
    </div>
  );
  }  

export default Footer;
