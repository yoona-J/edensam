import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import { isBrowser } from "react-device-detect";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import MainPage from "./views/MainPage/MainPage.js";
import MyMailboxPage from "./views/MyMailboxPage/MyMailboxPage.js";
import SearchFriendPage from "./views/SearchFriendPage/SearchFriendPage.js";
import FriendMailboxPage from "./views/FriendMailboxPage/FriendMailboxPage.js";
import MailingPage from "./views/MailingPage/MailingPage.js";
import MakeMailboxPage from "./views/MakeMailboxPage/MakeMailboxPage.js";
import RecommendListPage from "./views/RecommendListPage/RecommendListPage.js";
//
import ItemListPage from "./views/ItemListPage/ItemListPage.js";
//
import MyWishlistPage from "./views/MyWishlistPage/MyWishlistPage.js";
import FriendWishlistPage from "./views/FriendWishlistPage/FriendWishlistPage.js";
import ItemDetailPage from "./views/ItemDetailPage/ItemDetailPage.js";
//
import PaymentPage from "./views/PaymentPage/PaymentPage.js";
//무통장
import passinfo from "./views/PaymentPage/withoutpassbook/info.js";
import passdone from "./views/PaymentPage/withoutpassbook/done.js";
//
import AddressPage from "./views/AddressPage/AddressPage.js";
//
import NavBar from "./views/NavBar/NavBar";
import ExitPage from "./views/ExitPage/ExitPage.js";
import RetakePage from "./views/RetakePage/RetakePage.js";
import LogoutPage from "./views/LogoutPage/LogoutPage";
import MyGiftBox from "./views/MyGiftBox/MyGiftBox";

import AdminPage from "./views/UploadAdminPage/UploadAdminPage.js";

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
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/exit" component={Auth(ExitPage, true)} />
          <Route exact path="/retake" component={Auth(RetakePage, false)} />
          <Route exact path="/logout" component={Auth(LogoutPage, true)} />
          <Route exact path="/main" component={Auth(MainPage, true)} />
          <Route
            exact
            path="/mailbox/:UserId"
            component={Auth(MyMailboxPage, true)}
          />
          <Route
            exact
            path="/mailbox/:UserId/create"
            component={Auth(MakeMailboxPage, true)}
          />
          <Route
            exact
            path="/search"
            component={Auth(SearchFriendPage, true)}
          />
          <Route
            exact
            path="/mailbox/friend/:FriendId"
            component={Auth(FriendMailboxPage, true)}
          />
          <Route
            exact
            path="/mailbox/friend/:FriendId/mailing"
            component={Auth(MailingPage, true)}
          />
          <Route
            exact
            path="/mailbox/:UserId/create"
            component={Auth(MakeMailboxPage, true)}
          />
          <Route
            exact
            path="/wish/:UserId"
            component={Auth(MyWishlistPage, true)}
          />
          <Route
            exact
            path="/wish/friend"
            component={Auth(FriendWishlistPage, true)}
          />
          <Route exact path="/product" component={Auth(ItemListPage, true)} />
          <Route
            exact
            path="/product/:productId"
            component={Auth(ItemDetailPage, true)}
          />

          <Route exact path="/payment" component={Auth(PaymentPage, true)} />

          {/* 무통장입금 */}

          <Route exact path="/passinfo" component={Auth(passinfo, true)} />
          <Route exact path="/passdone" component={Auth(passdone, true)} />

          <Route exact path="/address" component={Auth(AddressPage, true)} />
          {/* <Route
            exact path="/mywishlist"
            component={Auth(MyWishlistPage, true)}
          /> */}

          <Route
            exact
            path="/gift/recommend"
            component={Auth(RecommendListPage, true)}
          />

          <Route exact path="/gift/:UserId" component={Auth(MyGiftBox, true)} />

          <Route exact path="/admin/upload" component={Auth(AdminPage, null)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
