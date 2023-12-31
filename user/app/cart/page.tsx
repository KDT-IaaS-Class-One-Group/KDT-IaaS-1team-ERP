'use client'

import { useEffect, useState } from 'react';
import base64, { decode } from "js-base64";

const getUsernameSomehow = () => {
  const token = localStorage.getItem("token");
  
  if (token) {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = decode(payload);
      const payloadObject = JSON.parse(decodedPayload);
      return payloadObject.username
    } catch (error) {
      console.error("Error parsing token:", error);
    }
  }

  return null;
};

interface CartItem{
  productName:string
  price : number
  adddate: string
  cartItemId: number;
  cartKey:number
}


export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCartItems, setSelectedCartItems] = useState<number[]>([]);


  useEffect(() => {
    const username = getUsernameSomehow();

    if (!username) {
      console.error('사용자명을 찾을 수 없습니다.');
      return;
    }

    fetch(`/userCart?username=${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('장바구니 데이터를 가져오는데 실패했습니다.');
      }
      return response.json();
    })
    .then((data) => {
      setCartItems(data);
    })
    .catch((error) => {
      console.error('Error fetching user cart:', error);
    });
}, []);

    const handleCheckboxChange = (index: number) => {
      const selectedIndex = selectedCartItems.indexOf(index);
      if (selectedIndex === -1) {
        setSelectedCartItems([...selectedCartItems, index]);
      } else {
        const updatedSelected = selectedCartItems.filter((item) => item !== index);
        setSelectedCartItems(updatedSelected);
      }
    };

    const handleDelete = async () => {
      try {
        const deleteRequests = selectedCartItems.map((index) => {
          const cartItemId = cartItems[index].cartKey;
          console.log('DELETE 요청 URL:', `/deleteCartItem/${cartItemId}`);
          console.log('DELETE 요청 데이터:', { cartItemId }); // 데이터 확인을 위해 출력
          return fetch(`/deleteCartItem/${cartItemId}`, {
            method: 'DELETE',
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('장바구니 항목 삭제에 실패했습니다.');
            }
            return response.json();
          });
        });

    const deleteResults = await Promise.all(deleteRequests);

    // 삭제 요청 결과 확인
    const isDeleteSuccess = deleteResults.every((result) => result.message === '장바구니 항목이 성공적으로 삭제되었습니다.');

    if (isDeleteSuccess) {
      // 삭제 성공 시 화면 갱신
      const updatedCartItems = cartItems.filter((_, index) => !selectedCartItems.includes(index));
      setCartItems(updatedCartItems);
      setSelectedCartItems([]);
    } else {
      throw new Error('일부 장바구니 항목이 삭제되지 않았습니다.');
    }
  } catch (error) {
    console.error('Error deleting cart items:', error);
  }
};


  return (
    <div>
      <h1>장바구니</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedCartItems.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            <p>상품명: {item.productName}</p>
            <p>가격: {item.price}</p>
            <p>추가일시: {item.adddate}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>장바구니 삭제</button>
    </div>
  );
}