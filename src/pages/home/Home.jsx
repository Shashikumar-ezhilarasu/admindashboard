
import Sidebar from "../../components/sidebar/Sidebar";
import "/Users/shashikumarezhil/Documents/admindashboard/src/pages/home/home.scss";
import Navbar from "../../components/navbar/Navbar"
import { Widgets } from "@mui/icons-material";
import Widget from "../../components/widgets/Widget";
const Home = () => {
  return (
    <div className='home'>
      
      <Sidebar />
      <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        <Widget  />
        <Widget  />
        <Widget  />
        <Widget  />
      </div>
      </div>
    </div>
  )
}

export default Home
