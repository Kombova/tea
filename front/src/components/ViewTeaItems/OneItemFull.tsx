import Image from "next/image";
import { apiRequest } from "@/services/services";
import { useSelector } from "react-redux";
import { store } from "@/store";
import { itemId } from "./ShowOneItem";

let arrImg
const OneItemFull = ({item}) =>{
    const{id,title,images,amount,type,typeamount,descr}=item;
    console.log(item)
    
    const myLoader = ({ src, width, quality }:any) => {
        return `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`
      }
     arrImg = images.map((item:string)=>{
       return (
            <div key={id} className='imgSlider'>
                <Image
                className="img mx-auto mt-1 border-2"
                loader={myLoader}
                src={item}
                alt="Picture of the author"
                width={200}
                height={100}                    
                /> 
            </div>
                )
    })
    return(
        <div className=" w-full">
            <div className="h-screen max-w-[1440px] pt-[20px] pb-[20px] mx-auto flex flex-wrap gap-2 justify-center items-center border-2 bg-slate-300">
                <ul className="h-[500px] w-full flex border-2">
                    <li className="w-1/2">
                        <div>{arrImg[0]}</div>
                        <div className=" flex border-2 overflow-hidden">
                            {arrImg.filter((item)=> item != arrImg[0])}
                        </div>
                    </li>
                    <li className="inf control w-1/2 border-2 p-[5px]">
                        <h5 className=" w-full text-center">{title}</h5>
                        <h4 className="w-full text-left">{type}</h4>
                        <p className="w-full">{descr}</p>
                    </li>
                </ul>
                
            </div>

        </div>
    )
}
export default OneItemFull;