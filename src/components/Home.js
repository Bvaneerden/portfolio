import { images } from '../Images'
import '../Public/spinner.css';
// import Wheel from './tools/TestingFolder/Wheel.js';

function Home() {
  return (
    <div>
      <h1 className='hidden'>About me</h1>
      <h2>Software Engineer / Full Stack Developer / Osteopath</h2>
       <img src={images.other[8].image} alt="" />
       
      {/* <Wheel></Wheel> */}
    </div>
  )
}

export default Home


// function Home() {
//   return (
//   <div>
//     <img src={images.profilepic} alt="" />


//   </div>
//   )
// }