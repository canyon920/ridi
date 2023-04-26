import { NavLink } from "react-router-dom"

export default function TopHeader(){
    return (
  <div class="TOP-PARENT">
    <ul id="TOP-HEADER" className="top_header">
        <li><NavLink to="/webtoon"> 웹툰 /만화 </NavLink></li>
        <li><NavLink to="/webtoon"> 웹소설 </NavLink></li>
        <li><NavLink to="/webtoon"> 도서 </NavLink></li>
        <li><NavLink to="/webtoon"> 셀렉트 </NavLink></li> 
    </ul>
    <ul className="top_header">
        <li className="top_inRight"><NavLink to="/webtoon"> 회원가입 </NavLink></li> 
        <li><NavLink to="/webtoon"> 로그인 </NavLink></li> 
    </ul>
  </div>
  )  
}

