export default function VolumeController({ isvolumecontrollerVisible }) {
  return (
    <div
      className={`w-[80px] absolute -rotate-90 bottom-20 -right-3 shadow-md rounded-lg bg-white ${
        isvolumecontrollerVisible ? "" : "hidden"
      }`}
    >
      <input
        type="range"
        value={0}
        min={0}
        max={100}
        step="0.1"
        className="h-[5px]"
      />
    </div>
  );
}
