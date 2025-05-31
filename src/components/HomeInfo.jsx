import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'> {text} </p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText} <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContext = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I'm
      <span className='font-semibold mx-2 text-white'>Saptarsi</span>
      👋
      <br />
      A Software Engineer from India, WB
    </h1>
  ),
  2: (
    <InfoBox text='Upgraded myself by picking up many skills along the way'
      link="/about"
      btnText="Learn more" />
  ),
  3: (
    <InfoBox text='Build multiple projects leading to success over the due course of time. Curious about the impact?'
      link="/projects"
      btnText="Visit my Portfolio " />
  ),
  4: (
    <InfoBox text="Need a project done or looking for a dev? I'm just a keystroke away"
      link="/contact"
      btnText="Let's talk" />
  )
}


const HomeInfo = ({ currentStage }) => {
  return renderContext[currentStage] || null
}


export default HomeInfo;
