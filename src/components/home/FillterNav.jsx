import { FaFilter } from "react-icons/fa";

export default function FillterNav() {
    return (
        <div class=" container mx-auto py-4 bg-white grid grid-cols-12">
            {/* <!-- Filter Section --> */}
            <div class="flex items-center justify-between col-span-3">
                <div class="flex items-center space-x-2 py-2 px-6 btn rounded-full bg-green-500 hover:bg-green-500 text-white">
                    <span class="text-lg font-semibold">Filter</span>
                    <span><FaFilter/></span>
                </div>
            </div>

            <div className=" col-span-9 flex justify-between items-center">
                {/* <!-- Sort by Section --> */}
                <div class="flex items-center justify-between">
                    <span class="text-gray-600 mr-2">Sort by:</span>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-green-500">
                            <option>Latest</option>
                            <option>Oldest</option>
                            <option>Popular</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <!-- Results Count --> */}
                <div class="text-center">
                    <span class="text-gray-800 font-medium">52 Results Found</span>
                </div>
            </div>
        </div>
    )
}
