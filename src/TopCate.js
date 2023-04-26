import React from 'react';
import { NavLink} from 'react-router-dom';
import {VscBell} from 'react-icons/vsc'
import { IconName } from "react-icons/bs";
import { BsCart2 ,BsBook,BsPeople } from 'react-icons/bs'
import './TopHeader.css'
export default function TopCate(){
  return (
    <div className="title_header">
      <ul className="title_ui">
        <li><NavLink to="/"> <h1> RIDI WEBTOON </h1></NavLink></li>
      </ul>
      <ul className="title_ui">
        <li className="title_header_rht"> <input placeholder="icon" className="cate_input" />  </li>
        <li style={{fontSize:"30px"}}><NavLink to="/"> <VscBell />  </NavLink></li>
        <li style={{fontSize:"30px"}}><NavLink to="/"> <BsCart2></BsCart2>  </NavLink></li>
        <li style={{fontSize:"30px"}}><NavLink to="/"> <BsBook></BsBook> </NavLink></li>
        <li style={{fontSize:"30px"}}><NavLink to="/"> <BsPeople></BsPeople></NavLink></li>
      </ul>
    </div>
   );
};
