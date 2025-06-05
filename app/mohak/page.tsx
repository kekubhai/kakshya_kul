import { QrCodeIcon } from "lucide-react";

const BadgeCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white flex items-center justify-center p-6">
      <div className="relative">
        {/* Badge Clip */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-16 h-10 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <div className="w-10 h-4 bg-gray-200 rounded-md shadow-inner" />
          </div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full shadow">
            <div className="w-2 h-2 bg-gray-500 rounded-full mx-auto mt-1"></div>
          </div>
        </div>

        {/* Card */}
        <div className="bg-black text-white rounded-2xl shadow-xl p-6 w-80 h-[430px] flex flex-col justify-between relative">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="text-5xl font-light tracking-wide">𝕏</div>
            <div className="text-sm text-gray-300 tracking-widest">LOWBIE</div>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-[10px] text-gray-400 mt-4">
            <div>
              <div className="mb-1">FOLLOWERS</div>
              <div className="text-white text-xs">266</div>
            </div>
            <div className="text-right">
              <div className="mb-1">JOINED</div>
              <div className="text-white text-xs">JANUARY 2025</div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-3" />

          {/* Username and Name */}
          <div>
            <div className="text-gray-400 text-xs">@jerkeyray</div>
            <div className="text-white text-sm mt-1">Aditya Srivastava</div>
          </div>

          {/* Bottom section */}
          <div className="flex justify-between items-end mt-4">
            {/* QR */}
            <div>
              <QrCodeIcon size={60} />
            </div>

            {/* Info */}
            <div className="text-right text-[10px] text-gray-400 space-y-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">ABOUT</div>
                <div>
                  Consummate Tinkerer <br />
                  CSE-28
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">LOCATION</div>
                <div>
                  Doofenshmirtz Evil <br />
                  Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;
