export default function AutoFareTicket() {
  return (
    <div
      className="relative bg-white shadow-xl max-w-md mx-auto my-10 text-center w-[360px] text-black"
      style={{
        clipPath:
          "polygon(0% 4px, 6px 0%, 12px 6px, 18px 0%, 24px 6px, 30px 0%, 36px 6px, 42px 0%, 48px 6px, 54px 0%, 60px 6px, 66px 0%, 72px 6px, 78px 0%, 84px 6px, 90px 0%, 96px 6px, 102px 0%, 108px 6px, 114px 0%, 120px 6px, 126px 0%, 132px 6px, 138px 0%, 144px 6px, 150px 0%, 156px 6px, 162px 0%, 168px 6px, 174px 0%, 180px 6px, 186px 0%, 192px 6px, 198px 0%, 204px 6px, 210px 0%, 216px 6px, 222px 0%, 228px 6px, 234px 0%, 240px 6px, 246px 0%, 252px 6px, 258px 0%, 264px 6px, 270px 0%, 276px 6px, 282px 0%, 288px 6px, 294px 0%, 300px 6px, 306px 0%, 312px 6px, 318px 0%, 324px 6px, 330px 0%, 336px 6px, 342px 0%, 348px 6px, 354px 0%, 360px 6px, 366px 0%, 372px 6px, 378px 0%, 384px 6px, 100% 4px, 100% calc(100% - 4px), 384px calc(100% - 6px), 378px 100%, 372px calc(100% - 6px), 366px 100%, 360px calc(100% - 6px), 354px 100%, 348px calc(100% - 6px), 342px 100%, 336px calc(100% - 6px), 330px 100%, 324px calc(100% - 6px), 318px 100%, 312px calc(100% - 6px), 306px 100%, 300px calc(100% - 6px), 294px 100%, 288px calc(100% - 6px), 282px 100%, 276px calc(100% - 6px), 270px 100%, 264px calc(100% - 6px), 258px 100%, 252px calc(100% - 6px), 246px 100%, 240px calc(100% - 6px), 234px 100%, 228px calc(100% - 6px), 222px 100%, 216px calc(100% - 6px), 210px 100%, 204px calc(100% - 6px), 198px 100%, 192px calc(100% - 6px), 186px 100%, 180px calc(100% - 6px), 174px 100%, 168px calc(100% - 6px), 162px 100%, 156px calc(100% - 6px), 150px 100%, 144px calc(100% - 6px), 138px 100%, 132px calc(100% - 6px), 126px 100%, 120px calc(100% - 6px), 114px 100%, 108px calc(100% - 6px), 102px 100%, 96px calc(100% - 6px), 90px 100%, 84px calc(100% - 6px), 78px 100%, 72px calc(100% - 6px), 66px 100%, 60px calc(100% - 6px), 54px 100%, 48px calc(100% - 6px), 42px 100%, 36px calc(100% - 6px), 30px 100%, 24px calc(100% - 6px), 18px 100%, 12px calc(100% - 6px), 6px 100%, 0% calc(100% - 4px))",
      }}
    >
      {/* Ticket content */}
      <div className="p-6 pt-4 pb-4 bg-white relative z-10">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm text-gray-500">18 Jul 2025, 11:14 pm</p>
          <p className="text-sm text-gray-500">#FT828D</p>
        </div>

        <h2 className="text-2xl font-bold mt-2 mb-6 tracking-wide">
          AUTO FARE
        </h2>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-base">Minimum Fare</span>
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <span className="text-xs text-gray-500">?</span>
            </div>
          </div>
          <span className="text-base font-medium">₹30.00</span>
        </div>

        <div className="text-left mb-4">
          <p className="text-sm text-gray-500">1.5 KM</p>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold">Total Fare</span>
          <span className="text-lg font-bold">₹30.00</span>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Use <span className="underline">SitInShade.com</span> to avoid
          sunlight while travelling!
        </p>
      </div>
    </div>
  );
}
