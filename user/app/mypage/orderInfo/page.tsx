'use client'

import React, { useState, useEffect } from 'react';
import { decode } from 'js-base64'

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



// 주문 목록을 나타내는 인터페이스
interface Order {
  orderKey: number;
  username: string;
  productName:string;
  customer: string;
  receiver: string;
  phoneNumber: string;
  address: string;
  price: number;
}



export function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const username = getUsernameSomehow();

    if (!username) {
      console.error('사용자명을 찾을 수 없습니다.');
      return;
    }

    fetch(`/orders?username=${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('주문정보 데이터를 가져오는데 실패했습니다.');
      }
      return response.json();
    })
    .then((data) => {
      setOrders(data);
    })
    .catch((error) => {
      console.error('Error fetching user cart:', error);
    });
}, []);




  return (
    <div>
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>ProductName</th>
            <th>Customer</th>
            <th>Receiver</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderKey}>
              <td>{order.username}</td>
              <td>{order.productName}</td>
              <td>{order.customer}</td>
              <td>{order.receiver}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.address}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;