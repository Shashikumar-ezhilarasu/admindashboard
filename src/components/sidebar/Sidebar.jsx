import '/Users/shashikumarezhil/Documents/admindashboard/src/components/sidebar/sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top"><Link to="/" style={{ textDecoration: "none" }}>
            <span className='logo'>myAdmin</span>
            </Link>
            </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>

                <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                    <Person2Icon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                    <StoreIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>

                <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>
                </Link>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <StorageIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>

        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
      
    </div>
  )
}

export default Sidebar
