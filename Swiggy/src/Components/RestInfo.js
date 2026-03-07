export default function RestInfo({restData}){
    return(
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
                <p>{"₹"+ ("defaultPrice" in restData ? (restData?.defaultPrice/100) : (restData?.price/100))}</p>

                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 100 100">
                        {/*Green circular background*/}
                        <circle cx="50" cy="50" r="45" fill="green" />

                        {/* White star */}
                        <polygon points="50,15 61,38 85,38 66,55 73,80 50,65 27,80 34,55 15,38 39,38" fill="white" />
                    </svg>
                    <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                    <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                </div>
                <p>
                    {restData?.description}
                </p>  
            </div>
            <div className="w-[20%] relative">
                <img className="w-full h-26 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
                <button className="absolute bottom-0.5 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">ADD</button>
            </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )
}