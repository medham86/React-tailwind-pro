

const FeatureBox = ({icon,title,desc}) => {


  return (
    <div className="text-white element-center flex-col">
      <img src={`/src/assets/images/${icon}`} alt="icon-image" className="w-[80px] h-[80px] object-contain"/>
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="text-sm font-normal">{desc}</p>
    </div>
  )
}

export default FeatureBox ; 
