import Image from "next/image";
import { start } from "repl";

import novaPoshta_icon from './npLogo.png';
import ukrPoshta_icon from './Ukrposhta-ua.svg.png';
import manualPoshta_icon from './mapPoint.png'
import { useEffect, useState } from "react";

const DeliveryRender = () =>{
// Обработка кликов
    const[vision,setVision] = useState('');
    useEffect(()=>{
        console.log(vision)
    },[vision]);

            const map =(<div id="down" className="map mt-[20px] " >
                        <iframe className="w-[1400px] h-[800px] border-4 border-cyan-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.9645622900193!2d36.15768552458085!3d49.98636062173905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1bfc4caf2a5%3A0x1db2782fb68bcdd2!2z0YPQuy4g0KHQtdGA0LPQtdGPINCR0L7RgNC30LXQvdC60L4sIDgsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1677152052871!5m2!1sru!2sua"    loading="lazy" ></iframe>
                    </div>);
            const novaPsohta = (
                
                <div id="down" className=" h-[1000px]  mt-[20px] ">
                    <h5 className="w-[200px] ml-auto mr-auto border-2 text-center text-red-600 font-bold ">Нова пошта</h5>
                    <div className=" max-w-[900px] h-[700px] pl-[20px] pr-[20px] pt-[30px] pb-[30px] ml-auto mr-auto mt-[20px] flex flex-col justify-around items-center border-2 rounded-lg">
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Місто"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Відділення"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Ім'я"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Прізвище"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="По батькові"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Телефон"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="ел.пошта"/>
                        <button className="w-[500px] h-[60px] border-2 bg-green-700  rounded-lg text-center max-[530px]:w-[300px]">Отправить</button>
                    </div>

                </div>

                

            );

            const ukrPoshta =(
               
                <div id="down" className=" h-[1000px]  mt-[20px] ">
                    <h5 className="w-[200px] ml-auto mr-auto border-2 text-center text-yellow-500 font-bold ">Укрпошта</h5>
                    <div className=" max-w-[900px] h-[700px] pl-[20px] pr-[20px] pt-[30px] pb-[30px] ml-auto mr-auto mt-[20px] flex flex-col justify-around items-center border-2 rounded-lg">
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Місто"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Індекс"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Ім'я"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Прізвище"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="По батькові"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="Телефон"/>
                        <input className="w-[500px] h-[60px] border-2 bg-slate-200  rounded-lg text-center max-[530px]:w-[300px]" type="text" placeholder="ел.пошта"/>
                        <button className="w-[500px] h-[60px] border-2 bg-green-700  rounded-lg text-center max-[530px]:w-[300px]">Отправить</button>
                    </div>

                </div>
            );
              
                
                
               
            
    return(
    <div className=' shadow-sm'> 
        <div className=' max-w-7xl mx-auto '>
            
            <h2 className="  max-w-[600px] h-[60px] border-b-2 ml-auto mr-auto mt-[20px] text-[60px] text-center max-[600px]:hidden">Доставка та оплата</h2>
            <h3 className=" max-w-80 mt-[20px] ml-auto mr-auto pb-[20px] text-[20px] text-center border-b-2">- Варіанти доставки -</h3>

            <ul className="mt-[20px] flex flex-wrap justify-center items-center gap-4 ">
               <li onClick={(e)=>setVision('novaPoshta')}>
                   <a href="#down">
                    <button  className="border-2 rounded-[20px] hover:bg-slate-200 focus:bg-slate-200 h-[210px] w-[220px]">
                        <Image  src={novaPoshta_icon} alt='NovaPoshta' placeholder="blur" width={200} />
                    </button>
                   </a>
               </li>
               <li  onClick={(e)=>setVision('ukrPoshta')} >
                <a href="#down">
                    <button className="border-2 rounded-[20px] hover:bg-slate-200 focus:bg-slate-200 h-[210px] w-[220px] pl-[5px] ">
                        <Image   src={ukrPoshta_icon} alt='NovaPoshta' placeholder="blur" width={200}  />
                    </button>
                </a>
               </li>
            </ul>
                    <h4 className="w-[200px] mt-[20px] ml-auto mr-auto text-center">- Самовивіз -</h4>
                    <button onClick={(e)=>setVision('map')} className="w-[220px] h-[200px] mt-[20px] ml-auto mr-auto pl-[20px] border-2 rounded-[20px] hover:bg-slate-200  block ">
                        <Image src={manualPoshta_icon} alt='NovaPoshta' placeholder="blur" width={180} height={180}/>
                    </button>
                    
                    {(vision == 'map') ? map : (vision == 'novaPoshta') ? novaPsohta : (vision == 'ukrPoshta') ? ukrPoshta : null }
                   
        </div>
    </div>
    )
}

export default DeliveryRender; 