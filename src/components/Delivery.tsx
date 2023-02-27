import { useState } from "react";
import Image from "next/image";

import NovaPoshta from "./FormsDelivery/NovaPoshta";
import UkrPoshta from "./FormsDelivery/UkrPoshta";

import novaPoshta_icon from '../../public/npLogo.png';
import ukrPoshta_icon from '../../public/Ukrposhta-ua.svg.png';
import manualPoshta_icon from '../../public/mapPoint.png';

const DeliveryRender = () =>{
    const[click,setClick] = useState <string> ('');
    const map =(<div id="down" className="map mt-[20px] flex " >
                    <iframe className="w-full h-[400px] mx-5 border-4 border-cyan-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.9645622900193!2d36.15768552458085!3d49.98636062173905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1bfc4caf2a5%3A0x1db2782fb68bcdd2!2z0YPQuy4g0KHQtdGA0LPQtdGPINCR0L7RgNC30LXQvdC60L4sIDgsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1677152052871!5m2!1sru!2sua"    loading="lazy" ></iframe>
                </div>);        
                        
    return(
    <div className=' shadow-sm mt-[40px] mb-[20px]'> 
        <div className=' max-w-7xl mx-auto '>
            
            <h2 className="  max-w-[600px] h-[60px] border-b-2 ml-auto mr-auto mt-[20px] text-[60px] text-center max-[600px]:hidden font-[Lobster]">Доставка та оплата</h2>
            <h3 className=" max-w-80 mt-[20px] ml-auto mr-auto pb-[20px] text-[20px] text-center border-b-2 font-[Shantell Sans]">- Варіанти доставки -</h3>

            <ul className="mt-[20px] flex flex-wrap justify-center items-center gap-4 ">
               <li onClick={(e)=>setClick('novaPoshta')}>
                   <a href="#down">
                    <button  className="border-2 rounded-[20px] hover:bg-slate-200 focus:bg-slate-200 h-[210px] w-[220px]">
                        <Image  src={novaPoshta_icon} alt='NovaPoshta' placeholder="blur" width={200} />
                    </button>
                   </a>
               </li>
               <li  onClick={(e)=>setClick('ukrPoshta')} >
                <a href="#down">
                    <button className="border-2 rounded-[20px] hover:bg-slate-200 focus:bg-slate-200 h-[210px] w-[220px] pl-[5px] ">
                        <Image   src={ukrPoshta_icon} alt='NovaPoshta' placeholder="blur" width={200}  />
                    </button>
                </a>
               </li>
            </ul>
                    <h4 className="w-[200px] mt-[20px]  ml-auto mr-auto text-center">- Самовивіз -</h4>
                    <button onClick={(e)=>setClick('map')} className="w-[220px] h-[200px] mt-[20px] ml-auto mr-auto pl-[20px] border-2 rounded-[20px] hover:bg-slate-200  block ">
                        <Image src={manualPoshta_icon} alt='NovaPoshta' placeholder="blur" width={180} height={180}/>
                    </button>
{/* ------------------------------Вывод верстки при клике------------------------------------------  */}
                    {(click == 'map') ? map : (click == 'novaPoshta') ? <NovaPoshta/> : (click == 'ukrPoshta') ? <UkrPoshta/> : null }
                   
        </div>
    </div>
    )
}

export default DeliveryRender; 