import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";

import MainPageImg from "./img/MainPageImg.png";
import NotificationIcon from "./img/NotificationIcon.png";
import GiftBoxIcon from "./img/GiftBoxIcon.png";
import ProductIcon from "./img/ProductIcon.png";
import WishListIcon from "./img/WishListIcon.png";
import HistoryIcon from './img/HistoryIcon.png'
import MyMailboxIcon from "./img/MyMailboxIcon.png";
import RightButton from "./img/RightButton.png"

import NewItem from "./Sections/NewItem";

function MainPage(props) {
    const [UserId, setUserId] = useState("");

    useEffect(() => {
        console.log(props.user.userData);
        if (props.user.userData !== undefined) {
            setUserId(props.user.userData);
        } else {
            console.log("nothing");
        }
    }, [props.user.userData]);

    console.log("uu", UserId._id);

    return (
        <div
            style={{
                width: "100%",
                margin: "3rem auto",
                fontFamily: "NeoDunggeunmo"
            }}>
            <a href="/search">
                <img
                    src={MainPageImg}
                    alt="MainPageImg"
                    style={{
                        width: "90%",
                        marginLeft: "20px"
                    }}></img>
            </a>
            <a
                href="/product"
                style={{
                    textDecorationLine: "none",
                    color: "#000"
                }}>
                <div
                    style={{
                        backgroundColor: "#F2F2F2",
                        width: "100%",
                        height: "132px",
                        marginTop: "24px",
                        display: "inline-flex"
                    }}>
                    <div
                        style={{
                            width: '90%',
                            height: '88px',
                            backgroundColor: '#FFE5AD',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            margin: '22px 25px 22px 24px'
                        }}>
                        <img
                            src={ProductIcon}
                            alt='ProductIcon'
                            style={{
                                width: '50px'
                            }}></img>
                        <div style={{ width: '150px', height: '60px', display: 'flex', flexDirection: 'column'}}>
                            <p
                                style={{
                                    fontSize: '20px',
                                    margin: 0
                                }}>마음을 전할 땐</p>
                            <p
                                style={{
                                    fontSize: '20px',
                                    margin: 0
                                }}>이든샘 선물하기</p>
                        </div>
                        <img src={RightButton} alt="RightButton" style={{ width: '22px' }}>
                        </img>
                    </div>
                </div>
            </a>
            <div
                style={{
                    width: '100%',
                    height: '120px',
                    display: 'flex',
                    alignContent: 'space-evenly',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    marginTop: '17px'
                }}>
                <a
                    href={`/gift/${UserId._id}`}
                    style={{
                        textDecorationLine: 'none',
                        color: '#000'
                    }}>
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#F2F2F2',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            boxShadow: '0px 4px 4px 0px #C4C4C4'
                        }}>
                        <img
                            src={GiftBoxIcon}
                            alt='GiftBoxIcon'
                            style={{
                                width: '34px'
                            }}></img>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: '15px',
                                textAlign: 'center'
                            }}>선물함</p>
                    </div>
                </a>
                <a
                    href='/history'
                    style={{
                        textDecorationLine: 'none',
                        color: '#000'
                    }}>
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#F2F2F2',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            boxShadow: '0px 4px 4px 0px #C4C4C4'
                        }}>
                        <img
                            src={HistoryIcon}
                            alt='HistoryIcon'
                            style={{
                                width: '34px'
                            }}></img>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: '15px',
                                textAlign: 'center'
                            }}>주문내역</p>
                    </div>
                </a>
                <a
                    href={`/wish/${UserId._id}`}
                    style={{
                        textDecorationLine: 'none',
                        color: '#000'
                    }}>
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#F2F2F2',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            boxShadow: '0px 4px 4px 0px #C4C4C4',
                            marginLeft: '5px'
                        }}>
                        <img
                            src={WishListIcon}
                            alt='WishListIcon'
                            style={{
                                width: '27px'
                            }}></img>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: '15px',
                                textAlign: 'center'
                            }}>위시리스트</p>
                    </div>
                </a>
                <a
                    href={`/mailbox/${UserId._id}`}
                    style={{
                        textDecorationLine: 'none',
                        color: '#000'
                    }}>
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#F2F2F2',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            boxShadow: '0px 4px 4px 0px #C4C4C4'
                        }}>
                        <img
                            src={MyMailboxIcon}
                            alt='MyMailboxIcon'
                            style={{
                                width: '34px'
                            }}></img>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: '15px',
                                textAlign: 'center'
                            }}>편지함</p>
                    </div>
                </a>
            </div>
            <div style={{ width: '100%', height: '83px', backgroundColor: '#F2F2F2'}}>
                <a
                    href="/product/652fd0d39d7e2765d42ad519"
                    style={{
                        textDecorationLine: "none",
                        color: "#000"
                    }}>
                    <div
                        style={{
                            backgroundColor: "#FFF1EF",
                            width: "100%",
                            height: "50px",
                            marginTop: "17px",
                            display: "inline-flex"
                        }}>
                        <img
                            src={NotificationIcon}
                            alt="NotificationIcon"
                            style={{
                                width: "30px",
                                margin: "10px"
                            }}></img>
                        <p
                            style={{
                                margin: "13px 0px 15px 0px",
                                fontSize: "18px",
                                fontFamily: "Pretendard-Regular"
                            }}>
                            이번 주 HOT 신상 선물 세트가 왔다!
                        </p>
                    </div>
                </a>
            </div>
            <div>
                <NewItem/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainPage;
