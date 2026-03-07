import { useState } from "react";
import RestInfo from "./RestInfo";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function MenuCard({ menuItems }) {

    const [isOpen, setIsOpen] = useState(false);

    if ("categories" in menuItems) {
        return (
            <div className="w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>

                {menuItems?.categories?.map((items) => (
                    <MenuCard key={items?.title} menuItems={items} />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full">

            {/* Header */}
            <div className="flex justify-between w-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>

                <p className="text-2xl font-bold">{menuItems.title}</p>

                {isOpen ? 
                    <MdKeyboardArrowUp size={24}/> : 
                    <MdKeyboardArrowDown size={24}/>
                }
            </div>

            {/* Dropdown Content */}
            {isOpen && (
                <div>
                    {menuItems?.itemCards?.map((items) => (
                        <RestInfo
                            key={items?.card?.info?.id}
                            restData={items?.card?.info}
                        />
                    ))}
                </div>
            )}

            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>

        </div>
    );
}