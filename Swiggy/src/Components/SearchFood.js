import { useState, useEffect } from "react"
import { useParams } from "react-router"
import RestInfo from './RestInfo';
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../Store/menuSlicer";

export default function SearchFood(){

    const {id} = useParams();

    const dispatch = useDispatch()
    const cached = useSelector(state=>state.menuSlice.restaurantMenus[id])

    const [food, setFood] = useState("")
    const [restData, setRestData] = useState([]);

    useEffect(()=>{

        if(cached){
            setRestData(cached)
            return;
        }

        async function fetchData() {     
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData?.filter((items)=> 'title' in items?.card?.card)
            setRestData(filterData);

            dispatch(setMenu({
                restaurantId: id,
                menu: filterData
            }));
        }

        fetchData();
    },[id, cached])

    // extracting food items
    const allItems = restData.flatMap((section)=>{
        const card = section?.card?.card;

        if(card?.itemCards){
            return card.itemCards;
        }

        if(card?.categories){
            return card.categories.flatMap(c => c.itemCards || []);
        }

        return [];
    });
    //search filter
    const filtered = allItems.filter((item)=>item?.card?.info?.name?.toLowerCase().includes(food.toLowerCase()))

    return (
        <div className="w-[80%] mx-auto mt-20">
            <input 
                className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
                placeholder="Search you favorite"
                onChange={(e)=>setFood(e.target.value)}
                >
            </input>
            <div className="mt-10">
                {
                    filtered.map((item, index)=>
                        <RestInfo key={item?.card?.info?.id + index} restData={item?.card?.info}></RestInfo>
                    )
                }
            </div>
        </div>
    )
}