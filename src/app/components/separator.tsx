export default function Separator() {
  return (
    <div className="w-full h-20 flex items-center justify-center absolute bottom-0 left-0 shadow-lg border-b-4 border-yellow-300">
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C480,50 960,0 1440,50 L1440,50 L0,50 Z" fill="#fdcc1b" />
      </svg>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 opacity-30 blur-sm"></div>
    </div>
  );
}
