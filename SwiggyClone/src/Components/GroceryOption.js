import { useRef, useState, useEffect } from "react";
import { GroceryGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function GroceryOption(){
    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScrollPosition = ()=>{
        // actual dom element
        const el = scrollRef.current;

        //if at start - 0(user at beg.)
        const isAtStart = el.scrollLeft <=0;
        //visible area + scroll >= total width (user at end)
        const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth-1;

        setShowLeft(!isAtStart)
        setShowRight(!isAtEnd)
    }

    const scrollLeft = ()=> {
        scrollRef.current.scrollBy({
            left: -400, //move left by 400
            behavior: "smooth",
        });
    };

    const scrollRight = ()=> {
        scrollRef.current.scrollBy({
            left: 400, //move right by 400
            behavior: "smooth",
        });
    };

    useEffect(()=>{
        const el = scrollRef.current;
        checkScrollPosition();

        el.addEventListener("scroll", checkScrollPosition);
        return ()=> el.removeEventListener("scroll", checkScrollPosition);
    });

    return (
        
        <div className="w-[80%] container mx-auto mt-20 relative">
            <h1 className="text-2xl font-bold mb-6">
                Shop groceries on InstaMart
            </h1>

            <div className="relative">
                {/* Left Button */
                showLeft && (
                    <button
                    onClick={scrollLeft}
                    className="absolute left-[-25px] top-1/2 -translate-y-1/2
                    bg-white shadow-md rounded-full w-10 h-10 z-10
                    hover:scale-110 transition">
                    <ChevronLeft size={22} />
                    </button>
                )}

                {/* 

                When React sees: <div ref={scrollRef}>
                React automatically does: scrollRef.current = HTMLDivElement
                after the component mounts.

                So now:
                scrollRef.current is the real DOM node.

                Flow:
                useRef()
                    ↓
                scrollRef object created
                    ↓
                React renders <div ref={scrollRef}>
                    ↓
                React stores DOM element inside scrollRef.current
                    ↓
                You control scrolling using scrollRef.current */
                    
                <div ref = {scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar">
                    {
                        GroceryGridCard.map((groceryData)=>(<GroceryCard key={groceryData.id} groceryData= {groceryData}></GroceryCard>))
                    }
                </div>
                
                }

                {/* RIGHT BUTTON */
                showRight && (
                    <button
                    onClick={scrollRight}
                    className="absolute right-[-25px] top-1/2 -translate-y-1/2
                    bg-white shadow-md rounded-full w-10 h-10 z-10
                    hover:scale-110 transition">
                    <ChevronRight size={22} />
                    </button>
                )}
            </div>
        </div>
    )
}