import React, { useState, useEffect } from 'react';
import WebtoonListItem from './WebtoonListItem';
import Filter from './Filter';
import Sort from './Sort';
import { NavLink } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import './TopHeader.css'
import TopCate from './TopCate'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const MainView = () => {
  const [active, setActive] = useState(null);

  const [webtoons, setWebtoons] = useState([
    {id:1, name: "상수리 나무 아래", img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:2, name: "참아주세요 대공", img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:3, name: "흑막 용을 키우게 되었다", img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:4, name: "황금숲",img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:5, name: "목린", img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:6, name: "공작님의 말씀을 거역하면", img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:7, name: "품격을 배반한다.", img: "https://img.ridicdn.net/cover/4766000064/small#1"},
    {id:8, name: "에반젤린의 검", img: "https://img.ridicdn.net/cover/4766000064/small#1"}
  ]);
  const [loading, setLoading] = useState(true);
  const [filteredWebtoons, setFilteredWebtoons] = useState([]);
  const [sort, setSort] = useState('popular');

  useEffect(() => {
    const fetchWebtoons = async () => {
      const response = await fetch('/api/webtoons');
      const data = await response.json();
      setWebtoons(data);
      setLoading(false);
    };
    fetchWebtoons();
  }, []);

  useEffect(() => {
    const filtered = webtoons.filter((webtoon) => webtoon.genre === 'romance');
    setFilteredWebtoons(filtered);
  }, [webtoons]);

  useEffect(() => {
    const sorted = filteredWebtoons.sort((a, b) => {
      if (sort === 'popular') {
        return b.likes - a.likes;
      } else if (sort === 'date') {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      }
    });
    setFilteredWebtoons(sorted);
  }, [sort, filteredWebtoons]);

  return (
    <div>
      <TopHeader></TopHeader>
      {/* <Filter /> */}
      <TopCate />
  

      <div className="top_cate01">
        <ul>
          <li><NavLink to="/webtoon"> 웹툰 </NavLink></li>
          <li><NavLink to="/webtoon"> 만화 </NavLink></li>
        </ul>
        <ul>
          <li> 전체 카테고리 </li>
        </ul>
      </div>
      <div className="top_cate02">
      <ul>
          <li><NavLink to="/"> 추천 </NavLink></li>
          <li><NavLink to="/best"> 로맨스 </NavLink></li>
          <li><NavLink to="/best"> BL  </NavLink></li>
        </ul>
      </div>
      <div className="swiper_class">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://active.ridibooks.com/ridibooks_banner/1681694966385_MjMwNDA1.jpg"/></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      
      <ul className="top_cate03">
        <li>
          <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> N </div>
              <p classNmae="inline"> 신작 </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> Hello </div>
              <p classNmae="inline"> 이벤트 </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> Hello </div>
              <p classNmae="inline"> 리디ONLY </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> Hello </div>
              <p classNmae="inline"> 리디무 </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> Hello </div>
              <p classNmae="inline"> 이달의 신작 </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> Hello </div>
              <p classNmae="inline"> 위클리 쿠폰 </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> Hello </div>
              <p classNmae="inline"> 19+ </p> 
            </NavLink> 
           </div>
        </li>
        <li>
        <div className="ct03_so" style={{ display :"inline" }}>
            <NavLink to="/">
              <div> 완전판 </div>
              <p classNmae="inline"> 리디완전판 </p> 
            </NavLink> 
           </div>
        </li>
        </ul>

      <section>
        <div>
          <h1> 실시간 랭킹 </h1>
          <div>
            <ul className="date_now_book">
              {webtoons.map((v)=> (
                <li key={v.id}>
                    <div style={{display:"inline-block"}}><img src={v.img} />
                      <div style={{display:"inline-block", position: "absolute"}}> 
                      <div style={{width:"50px", display:"flex"}}>{v.id}</div>

                      <p>{v.name}</p>
                      <p> 내용 </p>
                      </div> 
                    </div>
         
                </li>
                ))}

                {/* <li> 
                  <img src="" />
                  <h3> 상수리 나무 아래 </h3>
                  <p> 서말 외 3명 4화 무료 </p>
                  <p> 4.9점(37,769)</p>
                </li>
                <li> 
                  <img src="" />
                  <h3> 상수리 나무 아래 </h3>
                  <p> 서말 외 3명 4화 무료 </p>
                  <p> 4.9점(37,769)</p>
                </li>
                <li> 
                  <img src="" />
                  <h3> 상수리 나무 아래 </h3>
                  <p> 서말 외 3명 4화 무료 </p>
                  <p> 4.9점(37,769)</p>
                </li>
                <li> 
                  <img src="" />
                  <h3> 상수리 나무 아래 </h3>
                  <p> 서말 외 3명 4화 무료 </p>
                  <p> 4.9점(37,769)</p>
                </li>
                <li> 
                  <img src="" />
                  <h3> 상수리 나무 아래 </h3>
                  <p> 서말 외 3명 4화 무료 </p>
                  <p> 4.9점(37,769)</p>
                </li> */}
            </ul>
          </div>  
        </div>
      </section>

      <section>
        <div>
          <h1> 요일 연재 </h1>
          <div > 
            <ul className="date_now_book">
              <li><NavLink to="/Mons"> 월 </NavLink></li>
              <li><NavLink to="/Twos"> 화 </NavLink></li>
              <li><NavLink to="/Wend"> 수 </NavLink></li>
              <li><NavLink to="/Thurs"> 목 </NavLink></li>
              <li><NavLink to="/Fri"> 금 </NavLink></li>
            </ul>
          </div>  
        </div>
      </section>


      <Sort sort={sort} setSort={setSort} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredWebtoons.map((webtoon) => (
            <WebtoonListItem key={webtoon.id} webtoon={webtoon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainView;
