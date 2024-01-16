import ResignButton from "../ui/mypage/resignbutton";
import UserInfo from "../ui/mypage/usernameinfo";
import OrderInfoButton from "../ui/mypage/orderInfoButton";

export default function MyPage() {
  return (
    <div className="flex w-lvw h-lvh p-8">
      {/* 왼쪽 영역 */}
      <div className="flex flex-col mr-8 w-1/4 h-3/5 border border-black p-4">
        <div className="mb-4">
          {/* 연락처 표시 */}
          <p className="text-lg font-semibold">
            연락처:
            {/* {yourContactNumber} */}
          </p>
        </div>
        <div className="mb-4">
          {/* 이메일 표시 */}
          <p className="text-lg font-semibold">
            이메일:
            {/* {yourEmail} */}
          </p>
        </div>
        <div>
          {/* Resign 버튼 */}
          <ResignButton />
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex-1 bg-yellow-300 text-brown-800 p-8">
        {/* 두 컴포넌트 추가 */}
        <UserInfo />
        <OrderInfoButton />
      </div>
    </div>
  );
}
