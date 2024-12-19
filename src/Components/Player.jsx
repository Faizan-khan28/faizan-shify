import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuHardDriveDownload } from "react-icons/lu";
import VolumeController from "./VolumeController";
import { useState } from "react";
export default function Player() {
  const [isvolumecontrollerVisible, setIsvolumecontrollerVisible] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
      <input
        type="range"
        name="progress"
        id="progress"
        value={0}
        min={0}
        max={100}
        step="0.1"
        className="w-full h-[5px]"
      />
      <div className="flex justify-between items-center mb-3 px-3">
        {/* first div */}
        <div className="flex justify-start gap-3 items-center lg:w-[30vw]">
          <img
            className="rounded-lg"
            src="https://c.sop.saavncdn.com/Imagine-Dragons-20240826053547-500x500.jpg"
            alt="songpic"
            width={55}
          />
          <div className=" hidden lg:block">
            <span className="text-white font-semibold">Faizan Bhai</span>
            <p className=" text-xs text-white">Lorem ipsum dolor, sit amet</p>
          </div>
        </div>

        {/* second div */}
        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] items-center">
          <BiRepeat className="text-white cursor-pointer" />
          <IoMdSkipBackward className="text-white  cursor-pointer" />
          <FaPlay className="text-white cursor-pointer" />
          <IoMdSkipForward className="text-white  cursor-pointer" />
          <PiShuffleBold className="text-white cursor-pointer" />
        </div>

        {/* third div */}
        <div
          className="flex justify-end items-center gap-3"
          onMouseEnter={()=> setIsvolumecontrollerVisible(true)}
          onMouseOut={()=> setIsvolumecontrollerVisible(false)}
        >
          <LuHardDriveDownload className="text-white  text-2xl lg:text-3xl cursor-pointer" />
          <HiSpeakerWave className="text-white  text-2xl lg:text-3xl cursor-pointer hidden lg:block" />
          <VolumeController
            isvolumecontrollerVisible={isvolumecontrollerVisible}
          />
        </div>
      </div>
    </div>
  );
}
