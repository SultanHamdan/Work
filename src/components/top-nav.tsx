import { FunctionComponent } from "react";
import "./top-nav.css";

const TopNav: FunctionComponent = () => {
  return (
    <header className="top-nav">
      <div className="top-nav-child" />
      <img className="chevrondown-icon" alt="" />
      <img className="chevrondown-icon1" alt="" />
      <div className="top-nav-item" />
      <img className="chevrondown-icon2" alt="" />
      <div className="top-nav-inner" />
      <div className="line-div" />
      <div className="top-nav-child1" />
      <div className="top-nav-child2" />
      <div className="frame-div">
        <div className="button-parent">
          <div className="button">
            <div className="home-parent">
              <div className="home">Home</div>
              <div className="title-for-children" />
            </div>
            <div className="orders">Orders</div>
            <div className="integrations">Integrations</div>
            <div className="tracking-page-parent">
              <div className="tracking-page">Tracking Page</div>
              <img
                className="chevrondown-icon3"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="partner-with-us">Partner with Us</div>
          </div>
          <div className="star-facts">
            <div className="chart-parent">
              <button className="chart">
                <img className="search-icon" alt="" src="/search.svg" />
                <div className="search">Search</div>
              </button>
              <div className="logos" />
            </div>
            <div className="button1">
              <img
                className="person-icon"
                loading="eager"
                alt=""
                src="/person.svg"
              />
              <div className="account">Account</div>
            </div>
            <div className="button2">
              <img
                className="settings-icon"
                loading="eager"
                alt=""
                src="/settings.svg"
              />
              <div className="settings">Settings</div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-nav-child3" />
      <div className="text" />
    </header>
  );
};

export default TopNav;
