
import '/Users/shashikumarezhil/Documents/admindashboard/src/components/navbar/navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import avatar from '/Users/shashikumarezhil/Documents/admindashboard/src/assests/Meiphoto.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <TranslateIcon className ="icon"/>
            English
          </div>
          <div className="item">
            <NightsStayIcon className ="icon"/>
            
          </div>
          <div className="item">
            <ZoomInMapIcon className ="icon"/>
            
          </div>
          <div className="item">
            <NotificationsActiveIcon className ="icon"/>
            <div className="counter">1</div>
            
          </div>
          <div className="item">
            <ChatBubbleIcon className ="icon"/>
            <div className="counter">1</div>
            
          </div>
          <div className="item">
            <ListIcon className ="icon"/>
            
          </div>
          <div className="item">
            <img src={avatar} alt="" className ="avatar" />
            
          </div>
         

        </div>

       </div>
      
    </div>
  )
}

export default Navbar
