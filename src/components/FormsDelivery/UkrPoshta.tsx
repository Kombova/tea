const UkrPoshta = () =>{
    return(
        <div id="down" className=" h-[1000px]  mt-[20px] ">
                    <h5 className="w-[200px] ml-auto mr-auto border-2 text-center text-yellow-500 font-bold ">Укрпошта</h5>
                    <div className=" max-w-[900px] h-[700px] pl-[20px] pr-[20px] pt-[30px] pb-[30px] ml-auto mr-auto mt-[20px] flex flex-col justify-around items-center border-2 rounded-lg">
                        <input className="styleOfDeliveryForms" type="text" placeholder="Місто"/>
                        <input className="styleOfDeliveryForms" type="text" placeholder="Індекс"/>
                        <input className="styleOfDeliveryForms" type="text" placeholder="Ім'я"/>
                        <input className="styleOfDeliveryForms" type="text" placeholder="Прізвище"/>
                        <input className="styleOfDeliveryForms" type="text" placeholder="По батькові"/>
                        <input className="styleOfDeliveryForms" type="text" placeholder="Телефон"/>
                        <input className="styleOfDeliveryForms" type="text" placeholder="ел.пошта"/>
                        <button className="styleOfDeliveryButtons">Отправить</button>
                    </div>

                </div>
    )
}
export default UkrPoshta;