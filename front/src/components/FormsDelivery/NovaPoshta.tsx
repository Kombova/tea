import { validationDeliveryForm } from "@/logic/Validation/ValidationDeliveryForm"
import { useEffect, useState } from "react";

const NovaPoshta = () =>{
    const[nameError,setNameErr]=useState<string>('');
    const[sureNameError,setSureNameErr]=useState<string>('');
    const[patronimicError,setPatronimicErr]=useState<string>('');
        
        let chekName=(e:any)=>{
            let target = e.target;
            if(validationDeliveryForm(target.value,'onlyWord') === false){
                target.style.border='2px solid red'
                setNameErr(target.placeholder)
            }else {
                target.style.border='2px solid green'
                setNameErr('')
            }
        }
        let chekSureName=(e:any)=>{
            let target = e.target;
            if(validationDeliveryForm(target.value,'onlyWord') === false){
                target.style.border='2px solid red'
                setSureNameErr(target.placeholder)
            }else {
                target.style.border='2px solid green'
                setSureNameErr('')
            }
        }
        let chekPatronymic=(e:any)=>{
            let target = e.target;
            if(validationDeliveryForm(target.value,'onlyWord') === false){
                target.style.border='2px solid red'
                setPatronimicErr(target.placeholder)
            }else {
                target.style.border='2px solid green'
                setPatronimicErr('')
            }
        }
            
        
    
    return(
        <div id="down" className=" h-[1000px]  mt-[20px] ">
                    <h5 className="w-[200px] ml-auto mr-auto border-2 text-center text-red-600 font-bold ">Нова пошта</h5>
                    <ul className=" max-w-[900px] h-[700px] pl-[20px] pr-[20px] pt-[30px] pb-[30px] ml-auto mr-auto mt-[20px] flex flex-col justify-around items-center border-2 rounded-lg relative">
                        <li>
                            <input className="styleOfDeliveryForms" type="text" placeholder="Місто"/>

                        </li>
                        <li>
                            <input className="styleOfDeliveryForms" type="text" placeholder="Відділення"/>

                        </li>
                        <li className="relative">
                            <input className="styleOfDeliveryForms" type="text" placeholder="Ім'я" onChange={(e)=>chekName(e)}/>
                            {nameError === "Ім'я" ? <p className="absolute right-[10px] bottom-[0px]  text-[10px] text-[red]">{"Ім'я складається лише з букв=)"}</p> : null}
                        </li>
                        <li className="relative">
                            <input className="styleOfDeliveryForms" type="text" placeholder="Прізвище" onChange={(e)=>chekSureName(e)} />
                            {sureNameError === "Прізвище" ? <p className="absolute right-[10px] bottom-[0px]  text-[10px] text-[red]">{"Прізвище складається лише з букв=)"}</p> : null}
                        </li>
                        <li className="relative">
                            <input className="styleOfDeliveryForms" type="text" placeholder="По батькові" onChange={(e)=>chekPatronymic(e)}  />
                            {patronimicError === "По батькові" ? <p className="absolute right-[10px] bottom-[0px]  text-[10px] text-[red]">{"По батькові складається лише з букв=)"}</p> : null}
                        </li>
                        <li>
                            <input className="styleOfDeliveryForms" type="tel" placeholder="Телефон"/>

                        </li>
                        <li>
                            <input className="styleOfDeliveryForms" type="email" placeholder="ел.пошта" />

                        </li>
                        <li>
                            <button className="styleOfDeliveryButtons">Отправить</button>
                        </li>

                        
                        
                          
                    </ul>

                </div>
    )
}
export default NovaPoshta;