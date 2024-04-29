
import Sidebar from "../../components/sidebar/Sidebar";
import "/Users/shashikumarezhil/Documents/admindashboard/src/pages/home/home.scss";
import Navbar from "../../components/navbar/Navbar"
import { Widgets } from "@mui/icons-material";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/sidebar/featured/Featured";
import Chart from "../../components/sidebar/charts/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className='home'>
      
      <Sidebar />
      <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>

      <div className="charts">
        <Featured />
        <Chart />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest transcations</div>
        <Table />
      </div>
      </div>
    </div>
  )
}

export default Home
