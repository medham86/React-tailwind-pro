import { Fragment } from "react"
import Landing from "../Components/Landing"
import Features from "../Components/Features"
import StayProductive from "../Components/StayProductive"
import Testimonials from "../Components/Testimonials"
import Getstarted from "../Components/Getstarted"


const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials/>
      <Getstarted/>
    </Fragment>
  )
}

export default Home
