import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate , useParams} from 'react-router-dom';
import './card.scss'
const Card = ({type})=> {
  let data;
  const getIdFromUrl = () => {
    const urlParts = window.location.pathname.split('/');
    return urlParts[urlParts.length - 1]; // Assuming id is the last part of the URL
  };
  const id = getIdFromUrl();
  const navigate = useNavigate();
  switch(type){
    case "Students":
      data={
        title:"Students",
        link:"See details",
        icon:<PersonOutlineIcon className='icon'
        style={{color:"purple", backgroundColor:"#80008033"}}/>,
        count:"30",
        path: "/students"
      }
      break
    case "Achievement":
      data={
        title:"Achievement",
        isMoney:false,
        link:"See details",
        icon:<ListOutlinedIcon className='icon'
        style={{color:"green", backgroundColor:"#00800033"}}/>,
        count:"30",
        path: "/students"
      }
      break
    case "Request":
      data={
        title:"Request",
        isMoney:false,
        link:"See details",
        icon:<PersonOutlineIcon className='icon'  
        style={{color:"goldenrod", backgroundColor:"#daa52033"}}/>,
        count:"40",

      }
      break
    case "Waiting":
      data={
        title:"Waiting",
        isMoney:false,
        link:"See details",
        icon:<ListOutlinedIcon className='icon' 
        style={{color:"crimson", backgroundColor:"#ff000033"}}/>,
        count:"50",
        path: "/students"
      }
      break
    case "Batch":
      data={
        title:"Batch",
        isMoney:false,
        link:"See details",
        icon:<GroupsOutlinedIcon className='icon' 
        style={{color:"crimson", backgroundColor:"#ff000033"}}/>,
        count:"25",
        path: "/students"
      }
      break
    case "Bonafide":
      data={
        title:"Apply for Bonafide",
        isMoney:false,
        link:"See details",
        icon:<DescriptionOutlinedIcon className='icon' 
        style={{color:"crimson", backgroundColor:"#ff000033"}}/>,
        path: "/students"
      }
      break
    case "Post":
      data={
        title:"Post",
        isMoney:false,
        link:"See details",
        icon:<DescriptionOutlinedIcon className='icon' 
        style={{color:"crimson", backgroundColor:"#ff000033"}}/>,
        path: `/achievement_form/${id}` 
      }
      break
    case "Get":
      data={
        title:"Get",
        isMoney:false,
        link:"See details",
        icon:<DescriptionOutlinedIcon className='icon' 
        style={{color:"green", backgroundColor:"#00800033"}}/>,
        path: `/showdata/${id}`
      }
      break
      case "Apply-Bonafide":
      data={
        title:"Apply for Bonafide",
        isMoney:false,
        link:"See details",
        icon:<DescriptionOutlinedIcon className='icon' 
        style={{color:"goldenrod", backgroundColor:"#daa52033"}}/>,
        path:`/applyBonafie/${id}`
      }
      break
    default:
      break;
  }

  const handleClick = () => {
    if (data.path) {
      navigate(data.path); // Navigate to the path defined for the type
    }
  };
  
  return (
    <div className='card' onClick={handleClick}>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.count}</span>
        <span className='link'>{data.link} </span>
      </div>
      <div className='right'>
        <div className='percent'>
          <KeyboardArrowDownOutlinedIcon/>
          30%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Card
