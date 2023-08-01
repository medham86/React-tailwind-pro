import { useState } from "react"
import FeatureBox from "./FeatureBox"


const Features = () => {

    const [items,setItems] = useState([
        {icon:"icon-access-anywhere.svg",title:"Access your files anywhere",desc:" Lorem ipsum dolor sit amet consectetur adipisicing."},
        {icon:"icon-security.svg",title:"Security you can trust",desc:" Lorem ipsum dolor sit amet consectetur adipisicing."},
        {icon:"icon-collaboration.svg",title:"Real-time-collabration",desc:" Lorem ipsum dolor sit amet consectetur adipisicing."},
        {icon:"icon-any-file.svg",title:"Store any files of types",desc:" Lorem ipsum dolor sit amet consectetur adipisicing."},

    ])
  return (
    <section className="pb-[200px]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
                {

                items.map((item)=>(

                <FeatureBox key={item.title} icon={item.icon} title={item.title} desc={item.desc}/>

                ))}
                    
            </div>
           
            
        </div>
    </section>
  )
}

export default Features
