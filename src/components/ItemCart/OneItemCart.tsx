import Image from "next/image";
import { apiRequest } from "@/services/services";
import { useDispatch } from "react-redux";
import { deleteItemToCart } from "@/actions";
import { store } from "@/store";
const OneItemCart = ({item}:any) =>{
    console.log(item)
    const dispath = useDispatch()
    const myLoader = ({ src, width, quality }:any) => {
        return `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`
      }
    let deleteItem = (itemId:any) =>{
        dispath(deleteItemToCart(itemId))
        
    }
    
    
    return(
        <li className="w-full p-[4px]  flex justify-between items-center bg-slate-600 bg-opacity-90">
           <Image
                className="img  border-2"
                loader={myLoader}
                src={item.objItem.images[0]}
                alt="Picture of the author"
                width={50}
                height={50}
            />
            <h4 className="nameItem">{item.objItem.title}</h4>
            <h3 className="pice">{item.piecesPurchased}{item.objItem.typeAmount === 'грамм' ? ' грамм' : ' шт'}</h3>
            <p className="price">{item.itemPrice}</p>
            <button onClick={()=>deleteItem(item.objItem.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-red-700 bg-slate-400 shadow-md">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>



                
        </li>
    )
}

export default OneItemCart;