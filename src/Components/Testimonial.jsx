
const Testimonial = ({id,desc,image,position,name}) => {
  return (
    
        <div className="text-white bg-[#222A3D] rounded-[5px] p-[15px] shadow-[8px_8px_1px_8px_#1c202c]" >
            <p className=" mb-[10px]">{desc}</p>
            <div className="flex items-center gap-[15px]">
                <img src={`/src/assets/images/${image}`} alt="test-image" className="w-[60px] h-[60px] rounded-[50%] object-contain  "/>
                <div className="">
                    <h3 className="text-xl font-semibold ">{name}</h3>
                    <p className="text-sm font-normal">{position}</p>
                </div>
            </div>
        </div>
   
  )
}

export default Testimonial
