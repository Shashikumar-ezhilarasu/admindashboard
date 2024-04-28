
import Sidebar from "../../components/sidebar/Sidebar";
import "/Users/shashikumarezhil/Documents/admindashboard/src/pages/home/home.scss";
import Navbar from "../../components/navbar/Navbar"
const Home = () => {
  return (
    <div className='home'>
      
      <Sidebar />
      <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        
      </div>
      </div>
    </div>
  )
}

export default Home
