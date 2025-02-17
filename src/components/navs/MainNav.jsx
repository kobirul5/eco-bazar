import { HiOutlineShoppingBag } from "react-icons/hi";
import {  FaRegHeart } from "react-icons/fa";

export default function MainNav() {
    return (
        <div className="container ">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                <button className="text-3xl font-bold text-green-900">EcoBazar</button>
                </div>
                <div className="navbar-center">
                    <a className="">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </a>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-ghost btn-circle text-3xl">
                       <FaRegHeart/>
                    </button>
                    <p className="text-2xl">|</p>
                    <button className="flex relative text-3xl">
                        <p className="absolute -top-1 -right-1 bg-green-700 rounded-full w-5 h-5 text-sm font-semibold text-white">4</p>
                  <p className="">  <HiOutlineShoppingBag></HiOutlineShoppingBag></p>
                    </button>
                </div>
            </div>
        </div>
    )
}
