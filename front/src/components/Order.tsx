import { useState } from "react";

const Order = () =>{
    const[pickRefresh,setPickRefresh]=useState('gecnj')
    let pickStatus = 'нечего';
    const pick = (e:any) =>{
        let target = e.target;
        switch (target.innerText) {
            case 'Нова пошта':
                pickStatus ='Нова пошта'
                
                setPickRefresh((e)=>'Нова пошта')
                console.log(pickRefresh)
                break;
            case 'Укрпошта':
                pickStatus ='Укрпошта'
                break;
            case 'Самовивіз':
                pickStatus ='Самовивіз'
                break;
        
            default:
                break;
        }
        

    }
    return(
        <div className='wrip max-w-[1440px] h-screen mx-auto bg-slate-600 bg-opacity-60'>
            <div className="max-w-[1300px] h-full mx-auto bg-slate-200">
                <h4 className="w-[500px] mx-auto text-center">Оберіть спосіб доставки</h4>
                {pickStatus !== 'Нова пшота' ? <p>{pickStatus}</p> : null }
                <ul className="flex justify-around">
                    <li>
                        <button onClick={(e)=>pick(e)}>Нова пошта</button>
                    </li>
                    <li>
                        <button onClick={(e)=>pick(e)}>Укрпошта</button> 
                    </li>
                    <li>
                        <button onClick={(e)=>pick(e)}>Самовивіз</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Order