import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-3 border-none lg:border px-2 bg-gradient-to-r  from-indigo-700 via-purple-500 to-pink-500 fixed top-0 right-0 left-0 z-20 ">
      {/* first div */}
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto lg:mx-0">
        <div className="flex justify-between items-center gap-2 mr-4">
          <img src="/logo.png" alt="logo" width={37} />
          <Link href="/" className=" text-white font-extrabold text-lg">
            Faizan-shify🎧
          </Link>
        </div>

        <div className="flex gap-5 text-[24px] lg:text-[15px] text-white font-semibold h-full cursor-pointer ">
          <li className=" list-none">Music</li>
          <li className=" list-none">Podcasts</li>
          <li className=" list-none">Go Pro</li>
        </div>
      </div>

      {/* second div */}
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="seacrh for songs"
          className="border outline-none py-2 w-[40vw] rounded-full text-center text-black"
        />
      </div>

      {/* third div */}
      <div className=" hidden lg:flex justify-between items-center gap-4 ">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-[14px]  text-white font-semibold">
              Music Languages
            </span>
            <span className="text-[12px] text-white">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-xl text-white mt-2" />
        </div>
        <div className="flex text-[15px] gap-5 text-white font-semibold">
          <li className=" list-none">Log In</li>
          <li className=" list-none">Sign Up</li>
        </div>
      </div>
    </nav>
  );
}
