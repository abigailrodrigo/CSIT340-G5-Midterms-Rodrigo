export default function Hero({ onStar, onDownload, onReport, onReset }) {
  return (
    <div>
      <header className="px-20 pt-8 text-center">
        <h2 className="text-7xl font-bold">Build pages faster.</h2>
        <p className="mt-5 text-2xl text-[#000000]">An open-source component kit for React.</p>
      </header>

      <div className="flex justify-center gap-4 py-6">
        <button onClick={onStar} className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]">Star</button>
        <button onClick={onDownload} className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]">Download</button>
        <button onClick={onReport} className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]">Report issue</button>
        <button onClick={onReset} className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold">Reset</button>
      </div>
    </div>
  );
}