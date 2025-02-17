"use client"
import { useState } from "react"

export default function Price() {
  const [price, setPrice] = useState(50)
  const handleOnChange = (e)=>{
    setPrice(e.target.value);
  }

  return (
    <div className="flex flex-col gap-3"> 
      <h3 className="font-bold text-xl">Price</h3>
      <div>
        <input type="range" min={0} max="100" value={price} onChange={handleOnChange} className="range range-success  " />
      </div>
      <div>
        <p>price: {price}</p>
      </div>
    </div>
  )
}
