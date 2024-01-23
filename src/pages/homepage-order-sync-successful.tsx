import { FunctionComponent } from "react";
import FrameLeft from "../components/FrameLeft";
import TopNav from "../components/top-nav";
import PerformanceMetrics from "../components/performance-metrics";
import MultilineInput from "../components/MultilineInput";
import "./homepage-order-sync-successful.css";

const HomepageOrderSyncSuccessful: FunctionComponent = () => {
  return (
    <div className="homepageorder-sync-successful">
      <section className="stats-for-orders-parent">
        <div className="stats-for-orders">
          <img
            className="bg-illustration-icon"
            alt=""
            src="/bg-illustration.svg"
          />
          <h2 className="welcome-john-mathew">Welcome, John Mathew!!</h2>
          <FrameLeft />
          <TopNav />
        </div>
        <PerformanceMetrics />
      </section>
      <MultilineInput />
    </div>
  );
};

export default HomepageOrderSyncSuccessful;
