export default function DineCard({ RestData }) {
    const info = RestData?.info;
    const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/" + info?.mediaFiles?.[0]?.url;

    const mainOffer = info?.offerInfoV3?.vendorOffer?.title || info?.vendorOffer?.otherOffersInfo?.[0]?.title;

    return (
        <div className="w-[320px] flex-none group cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href={RestData.cta.link}>
                
                {/* Card Container */}
                <div className="bg-white rounded-2xl overflow-hidden transition duration-300 group-hover:scale-[1.02] group-hover:shadow-xl shadow-md">
                
                    {/* Image Section */}
                    <div className="relative">
                        <img className="w-full h-50 object-cover" src={imageUrl} alt={info?.name} />

                        {/* GIRF Ribbon */}
                        {info?.ribbon?.[0]?.text && (
                        <div className="absolute top-3 left-3 bg-linear-to-r from-pink-600 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {info.ribbon[0].text}
                        </div>
                        )}

                        {/* Rating Badge */}
                        {info?.rating?.value && (
                        <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold shadow z-10">
                            ⭐ {info.rating.value}
                        </div>
                        )}

                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/70 to-transparent"></div>

                        {/* Offer Overlay */}
                        {mainOffer && (
                        <div className="absolute bottom-3 left-3 bg-white text-orange-600 text-sm font-bold px-3 py-1 rounded-lg shadow">
                            {mainOffer}
                        </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-4 space-y-1">
                        <h2 className="text-lg font-semibold truncate"> {info?.name} </h2>

                        <p className="text-sm text-gray-500 truncate"> {info?.cuisines?.join(", ")} </p>

                        <p className="text-sm text-gray-500"> {info?.locality} • {info?.locationInfo?.distanceString} </p>

                        <p className="text-sm font-medium text-gray-700"> {info?.costForTwo} </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {info?.vendorHighlights?.map((item, index) => (
                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600" > {item.title} </span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}