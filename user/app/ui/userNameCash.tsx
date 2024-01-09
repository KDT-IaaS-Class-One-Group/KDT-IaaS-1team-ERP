// pages/user/[userId].tsx
import { GetServerSideProps } from 'next';
import { getUserFromToken } from '../../lib/auth';

interface UserProfileProps {
  userData?: { name: string; cash: number };
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  return (
    <div>
      {userData ? (
        <p>{`'${userData.name}' 님 반갑습니다. cash: ${userData.cash}`}</p>
      ) : (
        <p>로컬 코인을 통한 로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

  if (!token) {
    return {
      props: {
        userData: null,
      },
    };
  }

  try {
    const username = await getUserFromToken(token);

    const apiUrl = `http://localhost:3001/user/${username}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      props: {
        userData: data,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      notFound: true,
    };
  }
};

export default UserProfile;
