import { useState } from "react" ;
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'


const Footer = () => {

  const [contact , setContact] = useState([
    {icon : "icon-phone.svg" , text : "+201091997475"},
    {icon : "icon-email.svg" , text : "Example@flyo.com"}
  ])

  const [links , setLinks] = useState([

    'About Us' , 'Contact Us' , 'Jobs' , 'Terms' , 'Press' , 'Privacy' , 'Blog'

  ])

  const [socialIcon , setSocialIcons] = useState([
     'facebook','twitter','instgram'
  ])

  return (
    <section className="text-white bg-[#0C1524] pt-[320px] md:pt-[200px] pb-[150px]">
      <div className="container">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo" className="object-contain w-[175px] h-[64px]"/>
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row  gap-[15px]">
        <div className="flex justify-between  gap-[15px] items-start w-[340px] max-w-full">
          <img src="/src/assets/images/icon-location.svg" alt="location" />
          <p className="font-normal text-sm  tracking-[0.8px]"> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  </p>
        </div>
        <div>
          {
            contact.map((item)=>(
              <div key={item.text} className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0">
                <img src={`/src/assets/images/${item.icon}`} alt="phone" 
                className="w-[18px] h-[18px] object-contain"/>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-[15px]">
            {
              links.map((link)=>(
                  <li key={link}>
                  <a href={`/${link.toLowerCase()}`}  className="hover:text-primary transition-colors duration-200 text-base">{link}</a>
           </li>
                ))
              }
        </ul>
        <ul className="flex gap-[15px] w-full justify-center md:w-auto">
              {socialIcon.map((icon)=>(
            <li key={icon}>
                <a href="" className="group" >
                  <div className="w-[30px] h-[30px] element-center  border border-white rounded-full">
                    {
                      icon ==='facebook'? <FaFacebookF className="hover:text-primary  transition-colors duration-200"/> : icon === 'twitter'?<FaTwitter className="hover:text-primary  transition-colors duration-200"/>:<FaInstagram className="hover:text-primary  transition-colors duration-200"/>
                    }
                  </div>
                </a>
            </li>
            ))}
        </ul>
        </div>
        
      </div>
    </section>
  )
}

export default Footer
