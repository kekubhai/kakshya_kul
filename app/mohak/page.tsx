
import QRCodePlaceholder from "./QRplace";

const BadgeCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
            {/* Badge holder clip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-lg">
                    <div className="w-12 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded-md mx-auto mt-1 shadow-inner"></div>
                </div>
                {/* Clip mechanism */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full shadow-md">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mx-auto mt-0.5"></div>
                </div>
            </div>
            {/* Card shadow and border */}
            <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-white p-1 rounded-2xl shadow-2xl">
                {/* Main card */}
                <div className="bg-gray-900 text-white rounded-xl p-8 w-80 h-96 relative overflow-hidden">
                    {/* X Logo and LOWBIE text */}
                    <div className="text-center mb-8 space-y-2">
                        <div className="text-6xl font-light">𝕏</div>
                        <div className="text-2xl font-light tracking-[0.3em] text-gray-300">LOWBIE</div>
                    </div>
                    {/* Stats section */}
                    <div className="flex justify-between items-center mb-8 text-xs">
                        <div className="space-y-1">
                            <div className="text-gray-500">FOLLOWERS</div>
                            <div className="text-white font-light">266</div>
                        </div>
                        <div className="text-right space-y-1">
                            <div className="text-gray-500">JOINED</div>
                            <div className="text-white font-light">JANUARY 2025</div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="w-full h-px bg-gray-700 mb-6"></div>
                    {/* Bio section */}
                    <div className="mb-6 space-y-2">
                        <div className="text-gray-500 text-xs">@lowbieray</div>
                        <div className="text-white text-lg font-light leading-relaxed">Aditya Srivastava</div>
                    </div>
                    {/* Bottom section with QR code */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        {/* QR Code */}
                        <div className="w-16 h-16">
                            <QRCodePlaceholder />
                        </div>
                        {/* Right side info */}
                        <div className="text-right text-xs space-y-4">
                            <div>
                                <div className="text-gray-500 mb-2">ABOUT</div>
                                <div className="text-gray-400 text-[10px] leading-relaxed">
                                    Consummate Tinkerer<br />
                                    Coder
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500 mb-1">LOCATION</div>
                                <div className="text-gray-400 text-[10px] leading-relaxed">
                                    Doorstepshirtz Evil<br />
                                    Inc.
                                </div>
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