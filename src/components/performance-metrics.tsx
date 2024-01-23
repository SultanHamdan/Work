import { FunctionComponent } from "react";
import "./performance-metrics.css";

const PerformanceMetrics: FunctionComponent = () => {
  return (
    <div className="performance-metrics">
      <div className="performance-metrics-child" />
      <div className="button-group2">
        <h2 className="instant-dive-into">
          Instant Dive into Your Performance Metrics
        </h2>
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <button className="lifetime-wrapper">
            <div className="lifetime">Lifetime</div>
          </button>
          <button className="last-week-wrapper">
            <div className="last-week">Last Week</div>
          </button>
          <button className="last-month-wrapper">
            <div className="last-month">Last Month</div>
          </button>
          <button className="last-year-wrapper">
            <div className="last-year">Last Year</div>
          </button>
          <button className="customize-time-line-parent">
            <div className="customize-time-line">Customize Time Line</div>
            <img className="calendar-icon" alt="" src="/calendar.svg" />
          </button>
        </div>
        <div className="card-parent">
          <div className="card2">
            <div className="shipment">
              <div className="card-header-parent">
                <div className="card-header">
                  <div className="shipment-updates-parent">
                    <div className="shipment-updates">Shipment Updates</div>
                    <div className="total-orders">Total Orders : 394</div>
                  </div>
                </div>
                <div className="card-header-wrapper">
                  <div className="card-header1">
                    <button className="delivered-wrapper">
                      <div className="delivered">Delivered</div>
                    </button>
                    <button className="out-for-delivery-wrapper">
                      <div className="out-for-delivery">Out for delivery</div>
                    </button>
                    <button className="intransit-wrapper">
                      <div className="intransit">Intransit</div>
                    </button>
                    <button className="pending-wrapper">
                      <div className="pending">Pending</div>
                    </button>
                    <input
                      className="card-header-child"
                      placeholder="Exception"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="group1">
                  <img
                    className="vector-icon"
                    loading="eager"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="div">40</div>
                </div>
                <div className="group2">
                  <img className="vector-icon1" alt="" src="/vector-3.svg" />
                  <div className="div1">40</div>
                </div>
                <div className="group3">
                  <img className="vector-icon2" alt="" src="/oneonone.svg" />
                  <div className="div2">40</div>
                </div>
                <div className="group4">
                  <img className="vector-icon3" alt="" src="/vector-1.svg" />
                  <div className="div3">10</div>
                </div>
                <div className="group5">
                  <img className="vector-icon4" alt="" src="/vector-4.svg" />
                  <div className="div4">40</div>
                </div>
              </div>
              <div className="legend">
                <div className="frame-container">
                  <div className="vector-parent">
                    <img
                      className="frame-child"
                      loading="eager"
                      alt=""
                      src="/rectangle-34.svg"
                    />
                    <div className="exception">Exception</div>
                  </div>
                  <div className="vector-group">
                    <img
                      className="frame-item"
                      alt=""
                      src="/rectangle-34-1.svg"
                    />
                    <div className="intransit1">Intransit</div>
                  </div>
                  <div className="vector-container">
                    <img
                      className="frame-inner"
                      alt=""
                      src="/rectangle-34-2.svg"
                    />
                    <div className="pending1">Pending</div>
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="vector-parent1">
                    <img
                      className="rectangle-icon"
                      alt=""
                      src="/rectangle-34-3.svg"
                    />
                    <div className="delivered1">Delivered</div>
                  </div>
                  <div className="vector-parent2">
                    <img
                      className="frame-child1"
                      alt=""
                      src="/rectangle-34-4.svg"
                    />
                    <div className="out-for-delivery1">Out for delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="facts">
              <div className="heading2">
                <div className="star-facts-about">
                  Star Facts about your orders!!!
                </div>
                <div className="there-are-8-shipments-that-hav-parent">
                  <div className="there-are-8-container">
                    <p className="there-are-8">
                      There are 8 shipments that have been in out for delivery
                      for more than 3 days.
                    </p>
                    <p className="blank-line">&nbsp;</p>
                    <p className="there-are-5">
                      There are 5 shipments in exception right now
                    </p>
                    <p className="blank-line1">&nbsp;</p>
                    <p className="the-maximum-chargebacks">
                      The maximum chargebacks are from Miami.
                    </p>
                  </div>
                  <div className="button-group3">
                    <div className="button-22">
                      <img className="icon-wrapper-for-auto-layout8" alt="" />
                      <div className="label4">Copy Link</div>
                      <img className="icon-wrapper-for-auto-layout9" alt="" />
                    </div>
                    <button className="button-12">
                      <img className="icon-wrapper-for-auto-layout10" alt="" />
                      <div className="label5">Check Orders Page</div>
                      <img className="icon-wrapper-for-auto-layout11" alt="" />
                    </button>
                  </div>
                </div>
                <div className="line-chart" />
              </div>
              <div className="x-axis-label" />
            </div>
          </div>
          <div className="card4">
            <div className="tp-views">
              <div className="heading3">
                <div className="tracking-page-views">
                  Tracking Page Views Vs Orders
                </div>
                <div className="understand-user-engagement">
                  Understand user engagement patterns and optimize your tracking
                  page for enhanced customer experiences.
                </div>
              </div>
              <div className="chart-group">
                <div className="chart1">
                  <div className="chart-inner">
                    <div className="orders-parent">
                      <div className="orders1">Orders</div>
                      <b className="b">80</b>
                      <img
                        className="order-icon"
                        loading="eager"
                        alt=""
                        src="/order.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="chart2">
                  <div className="tracking-page-views-parent">
                    <div className="tracking-page-views1">{`Tracking Page Views                                  `}</div>
                    <b className="b1">44</b>
                    <img
                      className="view-icon"
                      loading="eager"
                      alt=""
                      src="/view.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
