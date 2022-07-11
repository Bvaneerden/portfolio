import { images, imageNames } from '../Images'
import '../Public/spinner.css';
import Wheel from './Wheel.js';

function Home() {
  return (
    <div>
       <img src={images.profilepic} alt="" />
      {/* <Wheel></Wheel> */}
    </div>
  )
}

export default Home;


// function Home() {
//   return (
//   <div>
//     <img src={images.profilepic} alt="" />


//   </div>
//   )
// }