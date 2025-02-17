import { CiLocationOn } from "react-icons/ci";

export default function Topnav() {
  return (
    <div className="bg-[#3f3f3f] p-4">
      <div className="container mx-auto flex justify-between items-center text-white/50">
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p>Store Location: Lincoin- 244, chicago, USA</p>
        </div>
        <div className="flex gap-2">
          <p>Eng</p>
          <p>USD</p>
          <p>|</p>
          <p>Sign In</p>
          <p>Sign Up</p>
        </div>
      </div>

    </div>
  )
}
