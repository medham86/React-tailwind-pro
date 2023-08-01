
const Getstarted = () => {
  return (
    <section className="py-[150px]">

        <div className="container text-white relative">
          <div className="bg-[#1B2230] absolute left-[50%] translate-x-[-50%]  rounded-[5px] element-center flex-col w-[865px] min-h-[275px] max-w-full text-center p-[30px]">
            <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get Early access today</h3>
            <p className="w-[620px]  mx-auto max-w-full mb-30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem non itaque veritatis autem in totam mollitia? Architecto quia cumque recusandae.</p>
            <form className="w-full flex justify-between items-center flex-wrap my-[15px] md:px-[60px] gap-[30px]">
                <input type="email" placeholder="Example@email.com" className="w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none font-medium text-black"/>
                <button type="submit" className="w-full md:w-[200px] h-[50px]  bg-[#40BED1] hover:bg-[#16DFF4] rounded-[30px] transition-all duration-200" >Get Started from here</button>
            </form>
          </div>
        </div>
    </section>
      )
}

export default Getstarted
