'use client'
 
 
export default function ReloadButton() {
  
  const handleClick = () =>{
    window.location.href='/'
  }

  return (
    <button type="button" onClick={handleClick}>
      <img src="/dyabya.png" alt="logo" />
      {/* DyaBya */}
    </button>
  )
}