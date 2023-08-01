import { useState } from "react"
import Testimonial from "./Testimonial"

const Testimonials = () => {

    const [testData , setTestData] = useState([{

            id:1,
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quas ut accusamus vitae omnis recusandae vero deleniti ipsam quod. Eaque.",
            image:"profile-1.jpg",
            position:"Founder & CEO , Huddle",
            name:'Medhat'},
        {
            id:2,
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quas ut accusamus vitae omnis recusandae vero deleniti ipsam quod. Eaque.",
            image:"profile-2.jpg",
            position:"Founder & CEO , Huddle",
            name:'Medhat'},
        {
            id:3,
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quas ut accusamus vitae omnis recusandae vero deleniti ipsam quod. Eaque.",
            image:"profile-3.jpg",
            position:"Founder & CEO , Huddle",
            name:'Medhat'},

    ])
  return (
    <section className="pb-350px">
        <div className="container relative">
            <div className="absolute left-[20px] top-[-30px]">
                    <img src="/src/assets/images/bg-quotes.png" alt="quote" />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]  relative z-10">
                
                {
                    testData.map((item)=>(

                        <Testimonial key={item.id} id={item.id} desc={item.desc} image={item.image} position={item.position} name={item.name}  />
                    ))
                }

            </div>
        </div>
        
    </section>
  )
}

export default Testimonials
