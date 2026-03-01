export default function GroceryCard({groceryData}){
    return (
        <div className="flex-none w-40">
        <a href={groceryData?.action?.link} className="shrink-0 mr-5">
            <img className="w-40 h-50 object-cover rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId}></img>
        </a>
        <h1 className="text-xl text-center">{groceryData?.action?.text}</h1>
        </div>
    )
}