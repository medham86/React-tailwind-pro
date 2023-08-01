
const StayProductive = () => {
  return (
    <section className="pb-[200px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
            <div >
                <img src="/src/assets/images/illustration-stay-productive.png" alt="stay-img" className="w-[500px] h-fit"/>
            </div>
            <div className="text-white">
                <h4 className="text-[35px] font-medium leading-[50px]">Stay productive , 
                    <br/>
                    where ever you are
                </h4 >
                <div className="text-sm font-normal my-[15px] tracking-[0.8px]">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, debitis!</p>
                <p className="py-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, non?</p>
                </div>
                
                <a href="/" className="text-primary  border-b-2 border-primary pb-[5px] flex items-center w-fit hover:text-[#42b0d1] transition-all duration-200]">See how Flyo work
                    <img src="/src/assets/images/icon-arrow.svg" alt="arrow-image" className="w-[30px] h-[30px] object-contain ml-[5px] animate-moveRight" />
                </a>
            </div>
        </div>
       
    </section>
  )
}

export default StayProductive
