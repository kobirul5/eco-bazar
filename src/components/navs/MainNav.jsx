import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart, FaSearch } from "react-icons/fa";

export default function MainNav() {
    return (
        <div className="container pt-2 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <button className="text-3xl font-bold text-green-900">EcoBazar</button>
                </div>
                <div className="navbar-center">
                    <a className="relative">
                        <input type="text"  className="input input-bordered rounded-r-none w-full max-w-xs border-r-0" />
                        <FaSearch className="absolute top-4 left-4 "/>
                    </a>
                    <button className="btn rounded-l-none bg-green-700 border-l-0 border-green-700 hover:border-green-400 hover:bg-green-400 text-white">Search</button>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-ghost btn-circle text-3xl">
                        <FaRegHeart />
                    </button>
                    <p className="text-2xl">|</p>
                    <div className="flex  text-3xl justify-center items-center">
                        <div className="flex relative text-center">
                            <p className="absolute -top-1 -right-1 bg-green-700 rounded-full w-5 h-5 text-sm font-semibold text-white">4</p>
                            <p className="">  <HiOutlineShoppingBag></HiOutlineShoppingBag></p>
                        </div>
                    </div>
                        <div className="flex  flex-col  text-xs">
                            <p className="">Shopping Cart</p>
                            <p className="text-[16px] font-semibold "> 57$</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
