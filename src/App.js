import React from 'react';
import MainView from './MainView';

const App = () => {
  return (
    <div>
      <MainView />
    </div>
  );
};

export default App;


// import "./App.css"
// import io from 'socket.io-client'
// import Header from "./components/Header";
// import { NavLink } from 'react-router-dom';
// // const socket = io.connect("https://localhost:3001"); 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'
// import { Autoplay } from 'swiper'; 
// import styled from "styled-components";

// const CustomSwiper = styled(Swiper)`
// 	border: 1px solid #000;
// 	background-color: #333333;
// 	color: #ffffff;
// `;

// export default function App(){
//     // const sendMessage = () => {
//     //   socket.emit("Send Message", {message: "Hello"})
//     // }
//     // const word = document.getElementsByClassName('word')
//     // word = document.createTextNode("HelloWorld")
//     return (
//         <div> 
//             <ul className="top-header">
//               <li> 웹툰/만화 </li>
//               <li> 웹소설 </li>
//               <li> 도서 </li>
//               <li> 셀렉트 </li>
//             </ul>
//            <hr /> 
//             <Header></Header>
        
//             <ul className="book-cate01">
//               <li> 웹툰 </li>
//               <li> 만화 </li>
//             </ul>
        
//             <CustomSwiper
//                 modules={[Autoplay]}
//                 autoplay={{
//                     delay: 5000,
//                 }}
//             >
// 		  	  <SwiperSlide>
//                 <img src="https://active.ridibooks.com/ridibooks_banner/1681798268945_MjMwNDEz.jpg" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="https://active.ridibooks.com/ridibooks_banner/1681798268945_MjMwNDEz.jpg" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="https://active.ridibooks.com/ridibooks_banner/1681798268945_MjMwNDEz.jpg" />
//               </SwiperSlide>
// 		    </CustomSwiper>

// v


           
// <ul id="header_navi">
//             <li>
//                   <NavLink to="/"> 
//                   <div className="header_nth">
//                     <div> asd </div>
//                   </div>
//                   <span> asdasd</span>
                
//                     </NavLink>
//               </li>
//               <li>
//                   <NavLink to="/"> 
//                   <div className="header_nth">
//                     <div> asd </div>
//                   </div>
//                   <span> asdasd</span>
                
//                     </NavLink>
//               </li>
//               <li>
//                   <NavLink to="/"> 
//                   <div className="header_nth">
//                     <div> asd </div>
//                   </div>
//                   <span> asdasd</span>
                
//                     </NavLink>
//               </li>
//               <li>
//                   <NavLink to="/"> 
//                     <div className="header_nth">
//                         <div> asd </div>
//                     </div>
//                     <span> asdasd</span>     
//                 </NavLink>
//               </li>
//             </ul>   

//             <ul>
//               <li><NavLink to='/webtoon'> 웹툰 </NavLink></li>
//               <li><NavLink to='/webtoon'> 만화 </NavLink></li>
//             </ul>

//             <h3> 실시간 랭킹 </h3>
//             <div>
//                 <h3> 용리 연재 </h3>
 
//             </div>

//             <div>
//                 <h3> 기다리면 무료로 시작해! </h3>
 
//             </div>

//             <div>
//                 <h3> 키워드로 검색하기 </h3>
 
//             </div>
//             <div>
//                 <h3> 베스트 </h3>

//             </div>
//             <div>
//                 <h3> 이벤트 보러가기 </h3>

//             </div>
//             <div>
//                 <h3> 전원 포인트로 착륙 #GTENT </h3>

//             </div>

//             <div>
//                 <h3> 오직 리디에서만!  </h3>

//             </div>

//             <div>
//                 <h3> 새로 나온 작품  </h3>

//             </div>

//             <div>
//                 <h3> 늘 짜릿한 신작 !#BL </h3>

//             </div>

//             <footer>
                
//             </footer>
//         </div>
//     )
// }


 

