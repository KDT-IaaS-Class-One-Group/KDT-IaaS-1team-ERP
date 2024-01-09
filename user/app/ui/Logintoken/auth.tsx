// lib/auth.ts
import { verify } from 'jsonwebtoken';

const secretKey = 'your-secret-key'; // 실제 사용하는 secretKey로 변경

const getUserFromToken = async (token: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve((decoded as { username: string }).username);
      }
    });
  });
};

export { getUserFromToken };
