// "use client";

// import { useState, useEffect } from "react";
// import React from "react";
// import { decode } from 'js-base64'


// const getUsernameSomehow = () => {
//   const token = localStorage.getItem("token");
  
//   if (token) {
//     try {
//       const payload = token.split('.')[1];
//       const decodedPayload = decode(payload);
//       const payloadObject = JSON.parse(decodedPayload);
//       return payloadObject.username
//     } catch (error) {
//       console.error("Error parsing token:", error);
//     }
//   }

//   return null;
// };


// interface item {
//   titleKey: string;
//   content: string;
//   title: string;
//   username: string;
//   password: string;
// }

// export default function Page() {
//   const [data, setData] = useState<item>({
//     titleKey : "",
//     content: "",
//     title: "",
//     username: "",
//     password: "",
//   });

//   const [titleKey, setTitleKey] = useState<number>();
//   const [showContent, setShowContent] = useState(false); // 추가: 컨텐츠를 보여줄지 여부 상태
//   const [titles, setTitles] = useState([]);
//   const [username, setUsername] = useState<string>("");

//   useEffect(() => {
  
//     const handleAddToCart = async () => {
//       const username = getUsernameSomehow();
  
//       if (!username || titleKey === null) {
//         alert('로그인이 필요합니다.')
//         console.error('유저명을 찾을 수 없습니다.');
//         return;
//       }
      
//     }


//     fetch("/mypage/board") // 적절한 API 경로를 사용하여 데이터를 가져옵니다.
//       .then((response) => response.json())
//       .then((titles) => {
//         setTitles(titles);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);


//   const handleTitleClick = (
//     title: string,
//     content: string,
//     password: string
//   ) => {
//     const enteredPassword = prompt("암호를 입력하세요:");

//     if (enteredPassword === password) {
//       setData({ ...data, title: title, content: content });
//       setShowContent(true);
//     } else {
//       alert("잘못된 암호입니다.");
//     }
//   };

//   const handleGoToWritingPage = () => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       window.location.href = "/mypage/writing";
//     } else {
//       alert("로그인이 필요합니다. 로그인 후 다시 시도해주세요.");
//     }
//   };


// return (
//   <div className="container mx-auto my-4 p-4 bg-gray-100">
//     <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
//       {titles.map((item: item, index: number) => (
//         <p
//           key={index}
//           onClick={() => handleTitleClick(item.title, item.content, item.password)}
//           className="cursor-pointer text-blue-500 hover:underline"
//         >
//           글 번호: {item.titleKey} 글 제목: {item.title} , 작성자:{item.username}
//         </p>
//       ))}
//       <p className="mt-4">사용자 ID: {username}</p>
//       <button
//         onClick={handleGoToWritingPage}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Go to Writing Page
//       </button>
//       {showContent && <p className="mt-4">내용 : {data.content}</p>}
//     </div>
//   </div>
// );
//       }