import { useState } from "react";
import RestInfo from "./RestInfo";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function MenuCard({ menuItems, foodSelected }) {

    const [isOpen, setIsOpen] = useState(true);

    if ("categories" in menuItems) {
        return (
            <div className="w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>

                {menuItems?.categories?.map((items) => (
                    <MenuCard
                        key={items?.title}
                        menuItems={items}
                        foodSelected={foodSelected}
                    />
                ))}
            </div>
        );
    }

    if (!isOpen) {
        return (
            <div className="w-full">
                <div
                    className="flex justify-between w-full cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <p className="text-2xl font-bold">{menuItems.title}</p>
                    <button
                        className="text-5xl font-bold mr-20"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <MdKeyboardArrowUp size={24} />
                        ) : (
                            <MdKeyboardArrowDown size={24} />
                        )}
                    </button>
                </div>
                <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
        );
    }

    let items = menuItems?.itemCards || [];

    if (foodSelected === "veg") {
        items = items.filter((food) => food?.card?.info?.isVeg === 1);
    }

    if (foodSelected === "nonveg") {
        items = items.filter((food) => !("isVeg" in food?.card?.info));
    }

    return (
        <div className="w-full">

            <div
                className="flex justify-between w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <button
                    className="text-5xl font-bold mr-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <MdKeyboardArrowUp size={24} />
                    ) : (
                        <MdKeyboardArrowDown size={24} />
                    )}
                </button>
            </div>

            <div>
                {items.map((items, index) => (
                    <RestInfo
                        key={items?.card?.info?.id + index}
                        restData={items?.card?.info}
                    />
                ))}
            </div>

            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>

        </div>
    );
}