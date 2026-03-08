import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader(){

    const counter = useSelector(state => state.cartSlice.count);

    return(
        <div className="w-full bg-[#ff5200] shadow-md sticky top-0 z-50">
            <div className="w-[80%] mx-auto py-4 flex justify-between items-center">

                {/* Logo */}
                <p className="text-white text-4xl font-bold tracking-wide cursor-pointer">
                    Swiggy
                </p>

                {/* Cart */}
                <Link to="/Checkout">
                    <div className="relative border border-white text-white py-2 px-6 rounded-2xl text-lg font-semibold hover:bg-white hover:text-[#ff5200] transition-all duration-300">

                        Cart

                        {/* Counter badge */}
                        {counter > 0 && (
                            <span className="absolute -top-2 -right-2 bg-white text-[#ff5200] text-sm font-bold px-2 py-0.5 rounded-full shadow">
                                {counter}
                            </span>
                        )}

                    </div>
                </Link>

            </div>
        </div>
    )
}