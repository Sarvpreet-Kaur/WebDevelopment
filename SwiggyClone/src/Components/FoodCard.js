export default function FoodCard({foodData}){
    return (
        <>
        <a href={foodData?.action?.link} className="w-40">
            <img className="w-40 h-50 object-cover rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        </>
    )
}