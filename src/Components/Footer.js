import React from 'react'
import Logo from '../Asets/logo.jpg'
import Qr from '../Asets/QrCode.webp'

const Footer = () => {
  return (
   <>
    <footer className="container-fluid d-flex align-items-center p-4" style={{border:"1px solid black"}}>
        <div className='footer-logo' style={{width:"100px" , height:"100px"}}>
           <img src={Logo} width={100} height={100} style={{borderRadius:"20px"}}/>
         </div>

         <div className='qrcode d-flex align-items-center ms-3 '>
        <img src={Qr}/>
        <div className='p-2'>
             <h3>Swastik Bank Of India </h3>
             <a href='#'  style={{textDecoration:"none" , color:"black"}}> https://www.swastik.com</a>

        </div>
       
         </div>
        

     
    </footer>
    <div className='p-2'>
        <p>
      © Copyright HDFC Bank Ltd. 2025

Cookie Policy
Terms & Conditions
Privacy
Consent Connect Portal
Website Usage Terms
Glossary

        </p>
    </div>

   
   </>
  )
}

export default Footer