import {dineoutRestaurants}from './../Utils/DineData';
import DineCard from './DineCard';

export default function DineOption(){
    return(
        <div className='w-[80%] mx-auto mt-20'>
            <h1 className="text-3xl font-bold md-6">Discover best restaurants on Dineout</h1>

            <div className='flex flec-nowrap overflow-x-auto mt-5 gap-4'>
                {
                    dineoutRestaurants.map((RestData)=><DineCard key = {RestData?.info?.id}  RestData={RestData}></DineCard>)
                }
            </div>
        </div>
    )
}