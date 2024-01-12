"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  validateName,
  validateUsername,
  validatePassword,
  validateEmail,
  validatePhoneNumber,
  validateAddress,
} from "../ui/validation";

export default function SignUp() {
  const initialFormData = {
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  };

  const initialValidation = {
    isValidName: true,
    isValidUsername: true,
    isValidPassword: true,
    isValidEmail: true,
    isValidAddress: true,
    isValidPhoneNumber: true,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [validation, setValidation] = useState(initialValidation);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setValidation({
      ...validation,
      ["isValid" + name.charAt(0).toUpperCase() + name.slice(1)]: true,
    });
  };

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, username, password, email, phoneNumber, address } = formData;
    const isNameValid = validateName(name);
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);
    const isEmailValid = validateEmail(email);
    const isAddressValid = validateAddress(address);
    const isPhoneNumberValid = validatePhoneNumber(phoneNumber);

    setValidation({
      isValidName: isNameValid,
      isValidUsername: isUsernameValid,
      isValidPassword: isPasswordValid,
      isValidEmail: isEmailValid,
      isValidPhoneNumber: isPhoneNumberValid,
      isValidAddress: isAddressValid,
    });

    if (
      !(
        isNameValid &&
        isUsernameValid &&
        isPasswordValid &&
        isEmailValid &&
        isPhoneNumberValid
      )
    ) {
      return;
    }

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          email,
          address,
          phoneNumber,
        }),
      });

      if (response.ok) {
        alert("회원가입이 완료되었습니다");
        window.location.href = "/";
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10 text-3xl font-bold">회원가입 페이지</h1>
      <form className="w-full max-w-md" onSubmit={handleJoin}>
        <div className="mb-4">
          <input
            className={`w-full border p-2 ${
              !validation.isValidName ? "border-red-500" : "border-black"
            }`}
            type="text"
            value={formData.name}
            name="name"
            placeholder="이름"
            onChange={handleInputChange}
            // required //! 활성화 시 사용자 오류 미출력
          />
          {!validation.isValidName && (
            <p className="text-red-500 text-xs">이름을 확인하세요</p>
          )}
        </div>
        <div className="mb-4">
          <input
            className={`w-full border p-2 ${
              !validation.isValidUsername ? "border-red-500" : "border-black"
            }`}
            type="text"
            value={formData.username}
            name="username"
            placeholder="아이디"
            onChange={handleInputChange}
            // required //! 활성화 시 사용자 오류 미출력
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
          >
            중복조회
          </button>
          {!validation.isValidUsername && (
            <p className="text-red-500 text-xs">
              6~12글자, 영문, 숫자로 작성하세요 (특수문자 제한)
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            className={`w-full border p-2 ${
              !validation.isValidPassword ? "border-red-500" : "border-black"
            }`}
            type="text"
            value={formData.password}
            name="password"
            placeholder="비밀번호"
            onChange={handleInputChange}
            // required //! 활성화 시 사용자 오류 미출력
          />
          {!validation.isValidPassword && (
            <p className="text-red-500 text-xs">
              8~20글자, 영문, 숫자, 특수문자로 작성하세요
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            className={`w-full border p-2 ${
              !validation.isValidEmail ? "border-red-500" : "border-black"
            }`}
            type="text"
            value={formData.email}
            name="email"
            placeholder="이메일"
            onChange={handleInputChange}
            // required //! 활성화 시 사용자 오류 미출력
          />
          {!validation.isValidEmail && (
            <p className="text-red-500 text-xs">
              이메일을 다시 확인 후 입력해주세요
            </p>
          )}
        </div>
        <div className="mb-4">
          <input
            className={`w-full border p-2 ${
              !validation.isValidAddress ? "border-red-500" : "border-black"
            }`}
            type="text"
            value={formData.address}
            name="address"
            placeholder="주소"
            onChange={handleInputChange}
            // required //! 활성화 시 사용자 오류 미출력
          />
          {!validation.isValidAddress && (
            <p className="text-red-500 text-xs">주소를 정확하게 작성해주세요</p>
          )}
        </div>
        <div className="mb-4">
          <input
            className={`w-full border p-2 ${
              !validation.isValidPhoneNumber ? "border-red-500" : "border-black"
            }`}
            type="text"
            value={formData.phoneNumber}
            name="phoneNumber"
            placeholder="전화번호"
            onChange={handleInputChange}
            // required //! 활성화 시 사용자 오류 미출력
          />
          {!validation.isValidPhoneNumber && (
            <p className="text-red-500 text-xs">
              " - "를 사용하여 작성해주세요.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        >
          회원가입
        </button>
      </form>
      <Link className="mt-8" href="/login">
        로그인페이지로
      </Link>
    </div>
  );
}
