import ResignButton from "../ui/mypage/resignbutton";
import UserInfo from "../ui/mypage/usernameinfo";
import OrderInfoButton from "../ui/mypage/orderInfoButton";

export default function MyPage() {
  return (
    <div className="flex w-lvw h-lvh p-8">
      {/* 왼쪽 영역 */}
      <div className="flex flex-col mr-8 w-1/4 h-3/5 border border-black p-4">
        <div className="mb-8 text-center bg-green-500 w-full h-full">
          {/* 첫 번째 div */}
          <UserInfo />
        </div>
        <div className="mb-8 text-center">
          {/* 두 번째 div */}
          {/* 연락처 표시 */}
          <p className="text-lg font-semibold">
            연락처:
            {/* {yourContactNumber} */}
          </p>
          {/* 이메일 표시 */}
          <p className="text-lg font-semibold">
            이메일:
            {/* {yourEmail} */}
          </p>
          {/* Resign 버튼 */}
          <ResignButton />
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex-1 bg-yellow-300 text-brown-800 p-8">
        <OrderInfoButton />
        {/* 두 컴포넌트 추가 */}
        <table className="w-full">
          <thead>
            <tr>
              {/* 찜 수량 */}
              <td className="border border-black p-2 text-center">
                <h2 className="text-4xl font-bold">0</h2>
              </td>
              {/* 주문 수량 */}
              <td className="border border-black p-2 text-center">
                <h2 className="text-4xl font-bold">0</h2>
              </td>
              {/* 배송 수량 */}
              <td className="border border-black p-2 text-center">
                <h2 className="text-4xl font-bold">0</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-black p-2">찜 수량</th>
              <th className="border border-black p-2">주문 수량</th>
              <th className="border border-black p-2">배송 수량</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
