import React from 'react';
import Footer from '../Footer/Footer';

import MainPageImg from './img/MainPageImg.png';
import NotificationIcon from './img/NotificationIcon.png';
import GiftBoxIcon from './img/GiftBoxIcon.png';
import Top100Icon from './img/Top100Icon.png';
import WishListIcon from './img/WishListIcon.png';

function MainPage() {
    return (
        <div
            style={{
                width: '100%',
                margin: '3rem auto',
                fontFamily: 'NeoDunggeunmo'
        }}>
        <a href='/search'>
            <img
                src={MainPageImg}
                alt='MainPageImg'
                style={{
                    width: '90%',
                    marginLeft: '20px'
            }}></img>
          </a>
            <a>
                <div
                    style={{
                        backgroundColor: '#D9D9D9',
                        width: '100%',
                        height: '50px',
                        marginTop: '10px',
                        display: 'inline-flex'
                    }}>
                    <img
                        src={NotificationIcon}
                        alt='NotificationIcon'
                        style={{
                            width: '30px',
                            margin: '10px'
                        }}></img>
                    <p
                        style={{
                            margin: '15px 0px 15px 0px',
                            fontSize: '18px'
                        }}>이번 주 HOT 신상 선물 세트가 왔다!</p>
          </div>
        </a>
        <div
          style={{ width: '100%', backgroundColor: '#D9D9D9', height: '250px', marginTop: '26px', display: 'flex', alignContent: 'space-evenly', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          <a>
            <div style={{ width: '171px', height: '86px', backgroundColor: '#FAD993', borderRadius: '20px', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <img src={GiftBoxIcon} style={{ width: '40px'}}></img>
              <p style={{fontSize: '20px'}}>선물함</p>
            </div>
          </a>
          <a>
            <div style={{ width: '171px', height: '86px', backgroundColor: '#FAD993', borderRadius: '20px', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <img src={WishListIcon} style={{ width: '52px'}}></img>
              <p style={{fontSize: '20px'}}>위시리스트</p>
            </div>
          </a>
          <a>
            <div style={{ width: '171px', height: '86px', backgroundColor: '#FAD993', borderRadius: '20px', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <img src={Top100Icon} style={{ width: '40px'}}></img>
              <p style={{fontSize: '20px'}}>인기선물</p>
            </div>
          </a>
          <a>
            <div style={{ width: '171px', height: '86px', backgroundColor: '#FAD993', borderRadius: '20px', display: 'inline-flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <img src={WishListIcon} style={{ width: '52px'}}></img>
              <p style={{ fontSize: '20px', textAlign: 'center' }}>친구<br />위시리스트</p>
            </div>
          </a>
        </div>
        <div>
          <p style={{fontSize: '20px', textAlign: 'center'}}>회원님을 위한 인기 신상</p>
        </div>
        <hr />
        <div>
          <p style={{fontSize: '20px', textAlign: 'center'}}>회원님이 좋아할만한 선물</p>
        </div>
            <Footer/>
        </div>
    )
}

export default MainPage