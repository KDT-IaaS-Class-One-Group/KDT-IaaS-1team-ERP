'use client'

import { useEffect, useState } from 'react';
import { decode } from 'js-base64'



interface UserData {
  cash?: number;
}

export default function MyStatus(){
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState<UserData[]>([]);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = token.split('.')[1];
      const decodedPayload = decode(payload);
      const payloadObject = JSON.parse(decodedPayload);
      setUsername(payloadObject.username);
      }
    }, []);

    useEffect(() => {  
      if (!username) {
        return;
      }
  
      fetch(`/users?username=${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('주문정보 데이터를 가져오는데 실패했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [username]);
  
  
  if (!username) {
    return null; 
  }


  return (
    <div className="flex items-center mr-1">
      <img
      src="/사람.png"
      alt="User Avatar"
      className="w-6 h-6 object-cover rounded-full mr-2 overflow-hidden"
    />
      <p className="mr-1" style={{ fontSize: '1.4rem' }}>{username}</p>
      {/* <p className="ml-1 mr-3" style={{ fontSize: '1.0rem' }}>님</p> */}
      <img
      src="/cash.png"
      alt="User Avatar"
      className="w-6 h-6 object-cover rounded-full mr-2 overflow-hidden"
    />
      <p className="mr-1" style={{ fontSize: '1.4rem' }}>{userInfo.length > 0 ? userInfo[0].cash : '로딩 중...'} </p>
      {/* <p style={{ fontSize: '1.0rem' }}>원</p> */}
    </div>
  );
}