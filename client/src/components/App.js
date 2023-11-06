import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import { isBrowser } from "react-device-detect";

// pages for this product
import NavBar from "./views/NavBar/NavBar";


import LandingPage from "./views/LandingPage/LandingPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ExitPage from './views/ExitPage/ExitPage.js';
import LogoutPage from './views/LogoutPage/LogoutPage';

import MainPage from "./views/MainPage/MainPage.js";

import MyMailboxPage from "./views/MyMailboxPage/MyMailboxPage.js";
import MakeMailboxPage from "./views/MakeMailboxPage/MakeMailboxPage.js";
import DeleteMailboxPage from './views/DeleteMailboxPage/DeleteMailboxPage.js';
import DetailMailboxPage from './views/DetailMailboxPage/DetailMailboxPage.js';

import SearchFriendPage from "./views/SearchFriendPage/SearchFriendPage.js";
import FriendMailboxPage from "./views/FriendMailboxPage/FriendMailboxPage.js";

import MailingPage from "./views/MailingPage/MailingPage.js";
import DecoratePage from './views/MailingPage/DecoratePage.js';
import GiftProloguePage from './views/GiftProloguePage/GiftProloguePage.js';

import MailingSuccessPage from './views/MailingSuccessPage/MailingSuccessPage.js';

import RecommendListPage from "./views/RecommendListPage/RecommendListPage.js";
import TopItemListPage from "./views/TopItemListPage/TopItemListPage.js";
import MyWishlistPage from "./views/MyWishlistPage/MyWishlistPage.js";
import FriendWishlistPage from "./views/FriendWishlistPage/FriendWishlistPage.js";
import ItemDetailPage from "./views/ItemDetailPage/ItemDetailPage.js";
import PaymentPage from "./views/PaymentPage/PaymentPage.js";
import MyGiftBox from './views/MyGiftBox/MyGiftBox';

import AdminPage from './views/UploadAdminPage/UploadAdminPage.js'

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  if (isBrowser) {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "500px", height: "700px", margin: "5% auto" }}>
          <h1 style={{ fontSize: "30px", marginLeft: "60px" }}>
            모바일 환경에서 접속해주세요
          </h1>
          <p style={{ fontSize: "18px", marginLeft: "80px" }}>
            현재 모바일 환경에서만 지원하고 있어요
            <span role="img" aria-label="imogi">
              😢
            </span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)'}}>
        <Switch>
          {/* 로그인 */}
          <Route exact path="/" component={Auth(LandingPage, null)} />
          {/* 회원가입 */}
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          {/* 탈퇴 */}
          <Route exact path="/exit" component={Auth(ExitPage, true)} />
          {/* 로그아웃 */}
          <Route exact path="/logout" component={Auth(LogoutPage, true)} />

          {/* 메인 페이지 */}
          <Route exact path="/main" component={Auth(MainPage, true)} />

          {/* 내 편지함 */}
          <Route exact path="/mailbox/:UserId" component={Auth(MyMailboxPage, true)} />
          <Route exact path="/mailbox/:UserId/create" component={Auth(MakeMailboxPage, true)} />
          <Route exact path="/mailbox/:UserId/delete" component={Auth(DeleteMailboxPage, true)} />
          <Route exact path="/mailbox/:UserId/detail/:MailboxId" component={Auth(DetailMailboxPage, true)} />

          {/* 친구 검색 */}
          <Route exact path="/search" component={Auth(SearchFriendPage, true)} />
          
          {/* 친구 메일함 */}
          <Route exact path="/mailbox/friend/:FriendId" component={Auth(FriendMailboxPage, true)} />
          <Route exact path="/mailbox/friend/:FriendId/:MailboxId/mailing" component={Auth(MailingPage, true)} />
          <Route exact path="/mailbox/friend/:FriendId/:MailboxId/mailing/deco" component={Auth(DecoratePage, true)} />
          <Route exact path="/mailbox/friend/:FriendId/:MailboxId/mailing/gift" component={Auth(GiftProloguePage, true)} />

          {/* 메일 전송 완료 */}
          <Route exact path="/mailing/success" component={Auth(MailingSuccessPage, true)} />

          {/* 내 위시리스트 */}
          <Route exact path="/wish/:UserId" component={Auth(MyWishlistPage, true)} />

          {/* 친구 위시리스트 */}
          <Route exact path="/wish/friend/:friendId" component={Auth(FriendWishlistPage, true)} />

          {/* 상품 페이지 */}
          <Route exact path="/gift/detail" component={Auth(ItemDetailPage, true)} />
          <Route exact path="/gift/payment" component={Auth(PaymentPage, true)} />
          <Route exact path="/gift/recommend" component={Auth(RecommendListPage, true)} />
          <Route exact path="/gift/top" component={Auth(TopItemListPage, true)} />
          <Route exact path="/gift/:UserId" component={Auth(MyGiftBox, true)} />

          {/* 상품 업로드 - 어드민 페이지 */}
          <Route exact path="/admin/upload" component={Auth(AdminPage, null)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
