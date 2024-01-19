import { useRouter } from 'next/navigation';

export default function PurchaseButton({ productName, price, quantity, productKey }: { productName: string, price: string, quantity:string, productKey: number | null }) {
  const router = useRouter();

  const handlePurchaseClick = () => {
    if (productKey !== null) {
      const token = localStorage.getItem('token');
      if (token) {
        router.push(`/productDetail/purchase?productName=${encodeURIComponent(productName)}&price=${encodeURIComponent(price)}&quantity=${encodeURIComponent(quantity)}&productKey=${encodeURIComponent(productKey.toString())}`);
      } else {
        alert('로그인이 필요합니다.');
      }
    } else {
      alert('상품 키가 유효하지 않습니다.');
    }
  };

  return (
    <div className="flex justify-center items-center bg-blue-500 w-40 h-12 rounded-md">
      <button onClick={handlePurchaseClick} className="text-white font-semibold text-lg">구매하기</button>
    </div>
  );}