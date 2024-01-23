'use client'

import { useRouter } from "next/navigation"

export default function BackButton(){
  const router = useRouter();
  const handleReturn = () => {
    router.back();
  };
  return (
    <div className='flex justify-center items-center w-20 h-9'>
    <button onClick={handleReturn}
     className="text-[#767676] hover:font-bold text-2lg"
     >뒤로가기</button>
     </div>
  )
}