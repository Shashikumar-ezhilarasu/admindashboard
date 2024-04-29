import "/Users/shashikumarezhil/Documents/admindashboard/src/components/sidebar/featured/featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Featured = () => {
  return (
    <div className="featured">
     
      <div className="top">
        <h1 div className="title">Total revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value ={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">previous transcation processing .last payments not included</p>

        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <ArrowDropDownIcon fontSize="small"/>
                    <div className="resultAmount">$12.4k</div>
                </div>

            </div>

            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize="small"/>
                    <div className="resultAmount">$12.4k</div>
                </div>

            </div>

            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize="small"/>
                    <div className="resultAmount">$12.4k</div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
