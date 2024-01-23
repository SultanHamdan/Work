import { FunctionComponent } from "react";
import Card from "./card";
import "./FrameLeft.css";

const FrameLeft: FunctionComponent = () => {
  return (
    <div className="frame-left">
      <Card
        alertTriangle="pending_I1:1634;111040:86421;394:9939"
        orderQuotaPending="Order Sync Successful!"
        yourOrderQuotaIsAboutToEn="Your order details from the last 30 days have been successfully synced. Check them out now!"
        iconWrapperForAutoLayout="pending_I1:1634;111040:86421;385:8972;108782:3999;108641:35268"
        iconWrapperForAutoLayout1="pending_I1:1634;111040:86421;385:8972;108782:3999;108641:35272"
        iconWrapperForAutoLayout2="pending_I1:1634;111040:86421;385:8972;108782:3991;108656:36508"
        labelPlaceholder="Explore Your Orders"
        iconWrapperForAutoLayout3="pending_I1:1634;111040:86421;385:8972;108782:3991;108656:36511"
        alertTriangleIcon={false}
        brandTitleTextBackgroundColor="#fff"
        labelColor="#4a4a4a"
        button1Color="#4a4a4a"
        propWidth="139px"
        propMinWidth="71px"
        propRight="-139px"
        propLeft="139px"
      />
      <Card
        alertTriangle="/alerttriangle.svg"
        orderQuotaPending="Customize Customer Notification"
        yourOrderQuotaIsAboutToEn="Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers"
        iconWrapperForAutoLayout="pending_I1:1633;111040:86421;385:8972;108782:3999;108641:35268"
        iconWrapperForAutoLayout1="pending_I1:1633;111040:86421;385:8972;108782:3999;108641:35272"
        iconWrapperForAutoLayout2="pending_I1:1633;111040:86421;385:8972;108782:3991;108656:36508"
        labelPlaceholder="Configure Notifications"
        iconWrapperForAutoLayout3="pending_I1:1633;111040:86421;385:8972;108782:3991;108656:36511"
        alertTriangleIcon
        brandTitleTextBackgroundColor="#fff8db"
        labelColor="#5e4200"
        button1Color="#5e4200"
        propWidth="157px"
        propMinWidth="81px"
        propRight="-157px"
        propLeft="157px"
      />
      <div className="card1">
        <div className="tracking-link">
          <div className="heading1">
            <div className="info-parent">
              <img
                className="info-icon"
                loading="eager"
                alt=""
                src="/info.svg"
              />
              <div className="your-tracking-link">
                Your Tracking Link has been generated
              </div>
            </div>
            <div className="include-the-link-container">
              <span>
                <span>{`Include the `}</span>
                <a
                  className="link"
                  href="https://50d72d-5.myshopify.com/tools/tracking."
                  target="_blank"
                >
                  <span className="link1">Link</span>
                </a>
                <span> to Your Store's Navigation Menu.</span>
              </span>
            </div>
          </div>
          <div className="button-group1">
            <button className="button-21">
              <img className="icon-wrapper-for-auto-layout4" alt="" />
              <div className="label2">Copy Link</div>
              <img className="icon-wrapper-for-auto-layout5" alt="" />
            </button>
            <div className="button-11">
              <img className="icon-wrapper-for-auto-layout6" alt="" />
              <input
                className="label3"
                placeholder="Go To Navigation Menu"
                type="text"
              />
              <img className="icon-wrapper-for-auto-layout7" alt="" />
              <div className="button-shine1">
                <div className="shine1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameLeft;
