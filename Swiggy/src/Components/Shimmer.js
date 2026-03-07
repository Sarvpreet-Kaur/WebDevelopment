export default function Shimmer() {
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
        {Array(12)
            .fill("")
            .map((_, i) => (
            <div key={i} className="w-70 mb-2">

                <div className="relative overflow-hidden w-70 h-45 rounded-xl bg-gray-200">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] 
                bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
                </div>

                <div className="w-[95%] mx-auto mt-3 space-y-2">
                <div className="relative overflow-hidden h-6 bg-gray-200">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] 
                    bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
                </div>

                <div className="relative overflow-hidden h-6 bg-gray-200">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] 
                    bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
                </div>

                <div className="relative overflow-hidden h-6 bg-gray-200">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] 
                    bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
                </div>
                </div>

            </div>
            ))}
        </div>
    );
}