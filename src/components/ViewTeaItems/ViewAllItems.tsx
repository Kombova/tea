import ShowOneItem from "./ShowOneItem";
import { apiRequest } from "@/services/services";
import { useEffect, useState } from "react";
import IItem from "@/Interface/IItem";
import loading_gif from '../../../public/loading2.gif';
import Image from "next/image";

let viewAllItems:any;
const ViewAllItems = () =>{
    const[connectingArrDB,setConnectingArrDB]=useState<IItem[]>([]);
    useEffect(()=>{
        retrieveDataFromTheDatabase()
    },[]);
    let data;
    async function retrieveDataFromTheDatabase(){
        data = await apiRequest.getAllItems();
        viewAllItems = data.map((item) => {
            return <ShowOneItem key={item.id} objItem={item} />;
        })
        setConnectingArrDB(data)    
    }
   

    
    return(
        <div className=" w-full"> 
            <ul className=" max-w-[1440px] pt-[20px] pb-[20px] mx-auto flex flex-wrap gap-2 justify-center items-center border-2">  
                {connectingArrDB.length == 0 ? <Image src={loading_gif} className='w-full' alt="Picture of the author" width={300} height={200} quality={100}/> : viewAllItems}
            </ul>
        </div>
        
        
    )
}
export default ViewAllItems;