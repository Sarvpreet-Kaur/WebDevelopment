import { useSelector, useDispatch } from "react-redux";
import { IncrementItem, DecrementItem } from "../Store/cartSlicer";

export default function Checkout(){

    const dispatch = useDispatch();
    const items = useSelector(state => state.cartSlice.items);

    const total = items.reduce((sum,item)=>{
        const price = ("defaultPrice" in item ? item.defaultPrice : item.price)/100;
        return sum + price * item.quantity;
    },0)

    if(items.length === 0){
        return(
            <div className="w-full flex justify-center mt-24">
                <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
                    <p className="text-3xl font-semibold text-gray-600">
                        Your Cart is Empty 🛒
                    </p>
                </div>
            </div>
        )
    }

    return(
        <div className="w-full flex justify-center mt-16">

            <div className="w-[60%] bg-white shadow-xl rounded-2xl p-10">

                <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

                {
                    items.map(item => {

                        const price = ("defaultPrice" in item ? item.defaultPrice : item.price)/100;

                        return(
                            <div key={item.id} className="flex justify-between items-center border-b py-6">

                                {/* Food Info */}
                                <div className="flex gap-5 items-center w-[60%]">

                                    <img
                                        className="w-24 h-20 rounded-xl object-cover"
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.imageId}
                                    />

                                    <div>
                                        <p className="text-xl font-semibold">{item.name}</p>
                                        <p className="text-gray-600">₹{price}</p>
                                    </div>

                                </div>

                                {/* Quantity */}
                                <div className="flex items-center gap-4">

                                    <button
                                        className="border px-3 py-1 rounded text-xl"
                                        onClick={()=>dispatch(DecrementItem(item))}
                                    >
                                        -
                                    </button>

                                    <span className="text-xl">{item.quantity}</span>

                                    <button
                                        className="border px-3 py-1 rounded text-xl"
                                        onClick={()=>dispatch(IncrementItem(item))}
                                    >
                                        +
                                    </button>

                                </div>

                                {/* Item total */}
                                <div className="text-xl font-semibold">
                                    ₹{price * item.quantity}
                                </div>

                            </div>
                        )
                    })
                }

                {/* Total */}

                <div className="flex justify-between items-center mt-10 text-2xl font-bold">

                    <span>Total</span>
                    <span>₹{total}</span>

                </div>

                <button className="w-full mt-6 py-4 bg-[#ff5200] text-white text-xl rounded-xl hover:opacity-90">
                    Proceed to Payment
                </button>

            </div>

        </div>
    )
}