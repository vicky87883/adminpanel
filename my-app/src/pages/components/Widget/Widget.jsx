import React from 'react'
import "./Widget.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Widget = ({type}) => {
  return (
    <div>
      <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">232122</span>
            <span className="link">See all Users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                20%
            </div>
            <PersonOutlineOutlinedIcon className="icon"/>
        </div>
      </div>
    </div>
  )
}

export default Widget
