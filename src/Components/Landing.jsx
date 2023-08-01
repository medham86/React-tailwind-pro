
const Landing = () => {
  return (
    <section className="bg-secondary">
        <div className="container">
            <div className="element-center flex-col pt-[200px]">
                <div className=" w-[600px] max-w-full">
                    <img src="/src/assets/images/illustration-intro.png" alt="landing-image" className="w-full h-fit" />
                </div>
                <div className="text-center text-white mt-5 py-5">
                    <h1 className="text-[30px] md:text-[40px] font-semibold mb-2">
                        All your Files in one more secure location 
                        <br />
                        accessible anywhere.
                    </h1>
                    <p className=" text-lg font-normal px-[15px] md:w-[600px] max-w-full" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, aperiam! Lorem, 
                        ipsum dolor sit amet  </p>
        
                </div >
                <a href="/" className="btn  w-[200px] h-[40px] rounded-[30px]  element-center text-xl font-medium text-white">Get Started</a>
                
            </div>
           
        </div>
        <div className="w-full h-[100px]">
            <img src="/src/assets/images/bg-curvy-desktop.svg" alt="img" className="w-full h-full"/>
        </div>
    </section>
  )
}

export default Landing
