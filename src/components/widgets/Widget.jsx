import '/Users/shashikumarezhil/Documents/admindashboard/src/components/widgets/widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { ShoppingBagOutlined } from '@mui/icons-material';

const Widget = ({type}) => {

  let data;


  const amount =100
  const diff =20
    switch(type){
      case "user":
        data ={
        title:"USERS",
        isMoney: false,
        link:"see all users",
        icon:
          <PersonOutlineIcon className='icon'/>
        };
        break;

        case "user":
          data ={
          title:"USERS",
          isMoney: false,
          link:"see all users",
          icon:
            <PersonOutlineIcon className='icon'/>
          };
          break;

          case "order":
            data ={
            title:"USERS",
            isMoney: false,
            link:"View all users",
            icon:
              <ShoppingBagOutlined className='icon'/>
            };
            break;


            case "earning":
              data ={
              title:"EARNINGS",
              isMoney: false,
              link:"View net earningss",
              icon:
                <MonetizationOnIcon className='icon'/>
              };
              break;

              case "balance":
                data ={
                title:"BALANCE",
                isMoney: false,
                link:"see all users",
                icon:
                  <AccountBalanceWalletIcon className='icon'/>
                };
                break;
        default:
          break;
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
