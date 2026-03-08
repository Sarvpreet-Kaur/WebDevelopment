import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../Store/menuSlicer";

export default function RestaurantMenu(){
    let {id} = useParams();
    console.log(id);

    const dispatch = useDispatch()
    const cached = useSelector(state=>state.menuSlice.restaurantMenus[id])

    const [restData, setRestData] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(()=>{

        if(cached){
            setRestData(cached)
            return;
        }

        async function fetchData(){
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData?.filter((items)=>'title' in items?.card.card) || []
            setRestData(filterData);

            dispatch(setMenu({
                restaurantId: id,
                menu: filterData
            }));
        }


        fetchData();
    }, [id, cached])

    return(
        <div>   
            <div className="w-[80%] mx-auto mt-20 mb-20">
                <Link to={`/city/delhi/${id}/search`}>
                    <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
                </Link>
            </div>  
            <div className="w-[80%] mx-auto mt-20 mb-20 flex gap-6">
                <button onClick={()=>setSelected( selected=='veg'?null: 'veg')}
                    className="w-16 h-8 bg-gray-200 rounded-full flex items-center p-1">
                        <div className="relative w-16 h-6">

                            {/* Slider bar (below) */}
                            <div className={`absolute top-1/2 left-0 w-12 h-2 -translate-y-1/2 rounded-2xl transition-all duration-300 ease-in-out
                                ${selected === "veg" ? "bg-green-500" : "bg-white"}`}></div>

                            {/* Slider knob with icon */}
                            <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 ease-in-out
                                ${selected === "veg" ? "translate-x-8" : "translate-x-0"}`}
                            >
                                {/* Veg icon */}
                                <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                </div>
                            </div>

                        </div>
                        
                        
                </button>

                <button onClick={()=>setSelected( selected=='nonveg'?null: 'nonveg')}
                    className="w-16 h-8 bg-gray-200 rounded-full flex items-center p-1">

                        <div className="relative w-16 h-6 cursor-pointer">

                            {/* Slider bar */}
                            <div className={`absolute top-1/2 left-0 w-12 h-2 -translate-y-1/2 rounded-2xl transition-all duration-300 ease-in-out
                                    ${selected === "nonveg" ? "bg-red-500" : "bg-white"}`}></div>

                            {/* Knob */}
                            <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 ease-in-out
                                    ${selected === "nonveg" ? "translate-x-8" : "translate-x-0"}`}>

                            {/* Non-veg icon */}
                            <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-r-4 border-b-[7px] border-l-transparent border-r-transparent border-b-red-600"></div>
                            </div>

                        </div>
                    </div>
                        
                        
                </button>
            </div>
            <div className="w-[80%] mx-auto mt-20">
                {
                    restData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
                }
            </div>
        </div>
    )
}