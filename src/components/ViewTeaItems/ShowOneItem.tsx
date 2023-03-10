import {  useState } from "react";
import Image from "next/image";
import { apiRequest } from "@/services/services";

import {addCountToCart,addItemToCart,changeItemToCart} from '../../actions'
import { useDispatch } from "react-redux";
import { store } from "@/store";
const ShowOneItem = ({objItem}:any) =>{
    const[amount,setAmount]=useState(objItem.stepAmount);
    const myLoader = ({ src, width, quality }:any) => {
        return `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`
      }
    const dispath = useDispatch()
// batton в зависимости от  typeAmount
    let itemPrice = amount * objItem.price
    function typeAmountButton(objItem:any){
        switch (objItem.typeAmount) {
            case 'грамм':
                if(objItem.arrSteps.length > 0){
                    let arrStepLayout = objItem.arrSteps.map((Step:string)=>{                    
                        return(<button key={Step} className="w-[70px]  border-2 rounded-[20px] text-[15px]" onClick={(e)=>addSpecificValue(e)}>+{Step}</button>                                                )
                    })
                    return arrStepLayout  
                }else{
                    return(<button className="w-[100px] border-2 rounded-[20px]" onClick={(e)=>addSpecificValue(e)}>+{objItem.stepAmount}</button>) // Кнопка грамм без массива шагов
                }
                break;
            default:
                break;
        }
    }
// Элементы управления значением количества товара  
    let plusAmount = (e:any) =>{
        let target =  e.target;
        
        setAmount((amount:number)=>+amount + +objItem.stepAmount)
    }
    let minusAmount = (e:any) =>{
        let target =  e.target;
        
        if(amount> 0){
            setAmount((amount:number)=>+amount - +objItem.stepAmount)
        }    
    }
    let handleChange = (e:any) =>{
        let target =  e.target;
        if(objItem.stepAmount == 1){
                     target.value > 0 && target.value.toString()[0] !== "0" ? setAmount(target.value) : setAmount(1) 
        }else return target.value > 0 && target.value.toString()[0] !== "0" ? setAmount(target.value) : setAmount(25)
        
    }
    let addSpecificValue = (e:any) =>{
        let target =  e.target;
        setAmount((amount:number)=>+amount + +target.textContent)
    }
    // Добавление в корзину
    let AddToCart = (e) =>{    
        
       let lengthShopingArr = store.getState().shopingArr.length;
       let purchasedItems;
       let bool;
       
       if(lengthShopingArr === 0){
            purchasedItems = {objItem, piecesPurchased: +amount, itemPrice: +itemPrice};
            dispath(addItemToCart(purchasedItems))
            dispath(addCountToCart()) 
       }else if(lengthShopingArr != 0){
            for (let index = 0; index < store.getState().shopingArr.length; index++) {
                const element = store.getState().shopingArr[index];
                    if(element.objItem.id === objItem.id){
                        dispath(changeItemToCart(objItem.id,+amount,itemPrice))
                        
                        bool=false
                        break
                    }
                     bool=true
            }
        if(bool === true){
            purchasedItems = {objItem, piecesPurchased: +amount, itemPrice: +itemPrice};
            dispath(addItemToCart(purchasedItems))
            dispath(addCountToCart()) 
            
        }
       }

    }
    return(
        <li className="w-[300px] h-[400px] border-2 text-center relative">
            <Image
                className="img mx-auto mt-1 border-2"
                loader={myLoader}
                src={objItem.images[0]}
                alt="Picture of the author"
                width={200}
                height={100}
            />
            <h4 className=" font-extrabold">{objItem.title}</h4>
            <h3 className="w-[100px] mx-auto mb-[10px] border-l-2 border-r-2 font-[Pacifico]">{objItem.type}</h3>
            <button className="w-[60px] border-2 rounded-l-[20px]" onClick={(e)=> minusAmount(e)}>-</button>
                <input className="w-[50px] mx-auto mb-[10px] border-t-2 border-b-2 text-center " placeholder={objItem.stepAmount} value={amount} onChange={(e)=>handleChange(e)} />

            <button className="w-[60px] border-2 rounded-r-[20px]" onClick={(e)=> plusAmount(e)}>+</button>
                <br/>
            <div className=" pl-[10px] pr-[10px] flex flex-wrap justify-center gap-1">{typeAmountButton(objItem)}</div>
            <div className="absolute border-2 right-1 bottom-8">{itemPrice} грн</div>
            <div className=" absolute right-0 bottom-0 pr-1 text-[13px]">{objItem.price} грн/{objItem.typeAmount}</div>
            <button className=" w-[170px] bg-hunter-green text-[white] border-2 rounded-[20px] text-[15px] absolute left-1 bottom-1" onMouseDown={(e)=>e.target.style.borderWidth='0px'} onMouseUp={(e)=>e.target.style.borderWidth='2px'} onClick={(e)=> AddToCart(e)}>Додати до корзини</button>
            
        </li>
    )
}

export default ShowOneItem;