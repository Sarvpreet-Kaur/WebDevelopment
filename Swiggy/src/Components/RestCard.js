
export default function RestCard({restInfo}){
    
    return (
        <div className="max-w-70 mv-2 transform transition duration-200 hover:scale-95">
            <img className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
            <div className="w-[95%] mx-auto mt-3">
                <div className="font-bold text-xl truncate">{restInfo?.info?.name}</div>
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 100 100">
                        {/*Green circular background*/}
                        <circle cx="50" cy="50" r="45" fill="green" />

                        {/* White star */}
                        <polygon points="50,15 61,38 85,38 66,55 73,80 50,65 27,80 34,55 15,38 39,38" fill="white" />
                    </svg>
                    <span className="text-lg">{restInfo?.info?.avgRating}</span>
                    <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
                </div>
                <div className="text-gray-600 text-xl mt-1 truncate">{restInfo?.info?.cuisines.join(" ")}</div>
            </div>
        </div>
    )
}