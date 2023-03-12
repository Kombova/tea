import { useState } from "react";
import { useSelector } from "react-redux";
import OneItemCart from "./OneItemCart";
import { store } from "@/store";
import Link from 'next/link'



let allItems=[]
const ItemCart = ({changeState}:any) =>{ 
    const ArrItems = useSelector(state => state.basketChenge.shopingArr)
    const countItems = useSelector(state => state.basketChenge.count)

    allItems = ArrItems.map((item:any)=>{
        return <OneItemCart key={item.id} item={item}/>  
    })
    let fullOrderPrice:number = 0;
    ArrItems.forEach(element => {
        fullOrderPrice += element.itemPrice
    });
    const exit=()=>{
        
        changeState(false)      
        document.body.style.overflowY='auto'
    }
    const orderDispatch = () =>{
        console.log(store.getState())
        changeState(false)
    }
    return(
        <div className="wrip  w-full h-full bg-slate-600 bg-opacity-60  absolute z-[1]  right-0 top-[0px]">
            <div className='cart w-[600px] max-[700px]:w-[300px] h-full p-2 mx-auto  bg-slate-200   absolute z-[1]  right-0 top-[0px] animate-slideLeft'>
                <div className=" flex mb-[20px] ">
                <button className="ml-0 mr-auto text-[40px] font-mono font-extrabold" onClick={()=>exit()}>{'<'}</button>
                <p className=" text-[30px]">Кошик</p>
                </div>
                <ul className="flex flex-col gap-2">
                    {allItems.length == 0 ?  <div><p className="w-[300px] mx-auto mt-5 text-[30px]">Поки ще тут пусто {`=)`}</p><img className="mx-auto" src="https://i.gifer.com/7VE.gif"/></div>: allItems} 
                </ul>
                {store.getState().basketChenge.shopingArr.length != 0 ?
                   <Link href='/order'>
                        <button className="w-[200px] h-[50px] mx-auto mt-2 bg-slate-600 block rounded-[40px]" onClick={()=> orderDispatch()}>{fullOrderPrice} грн</button> 
                   </Link> : null}
                
            </div>
            
        </div>
    )
}
export default ItemCart;