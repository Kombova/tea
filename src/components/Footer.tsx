import { useState } from "react";
import Image from "next/image";
import { apiRequest } from "@/services/services";


const Footer = () =>{    

    return(
        <footer className=" w-full h-[200px] bg-hunter-green">
            
            
            <ul className="max-w-[1440px] min-h-[200px] mx-auto border-2 flex">
                <li>
                    
                    <a className="phone flex mb-3" href="tel:+3 800 24324 543 534">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <p className='block ml-1 text-[white]'>+3 800 24324 543 534</p>
                    </a>
                    
                    <a className=" flex" href="mailto:ayacserNehuy@trahaysy.huya">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        <p className="text-[white] ml-2">asdfes@tsefse.hsef</p>
                    </a>
                </li>
                <li>
                        {/* <a href={Url_instagram}><img src={instaLogo} alt="instagram"/></a>
                        <a href={Url_instagram}><img src={telegramLogo} alt="telegram"/></a>
                        <a href={Url_instagram}><img src={viberLogo} alt="viber"/></a> */}
                </li>

            </ul>
            
        </footer>
    )
}

export default Footer;