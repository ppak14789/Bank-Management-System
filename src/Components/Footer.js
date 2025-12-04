import React from 'react'
import Logo from '../Asets/Logo.png'
import Qr from '../Asets/QrCode.webp'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <footer className="container-fluid d-flex align-items-center p-4" style={{border:"1px solid black",justifyContent:"space-between"}}>
        <div className='footer-logo' style={{width:"100px" , height:"100px"}}>
           <img src={Logo} width={300} height={100} style={{borderRadius:"20px"}}/>
         </div>
          <div style={{ display: "flex", gap: "20px", fontSize: "30px" }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"35px"}}>
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"35px"}}>
        <FaInstagram />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"35px"}}>
        <FaYoutube />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"35px"}}>
        <FaLinkedin />
      </a>
    </div>

         <div className='qrcode d-flex align-items-center ms-3 ' style={{}}>
        <img src={Qr}/>
        <div className='p-2'>
             <h3>Swastik Bank Of India </h3>
             <a href='#'  style={{textDecoration:"none" , color:"black"}}> https://www.swastik.com</a>

        </div>
         </div>
        

     
    </footer>
    <div className='p-2 d-flex justify-content-center' >
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