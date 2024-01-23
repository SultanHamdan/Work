import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./card.css";

type CardType = {
  alertTriangle?: string;
  orderQuotaPending?: string;
  yourOrderQuotaIsAboutToEn?: string;
  iconWrapperForAutoLayout?: string;
  iconWrapperForAutoLayout1?: string;
  iconWrapperForAutoLayout2?: string;
  labelPlaceholder?: string;
  iconWrapperForAutoLayout3?: string;
  alertTriangleIcon?: boolean;

  /** Style props */
  brandTitleTextBackgroundColor?: CSSProperties["backgroundColor"];
  labelColor?: CSSProperties["color"];
  button1Color?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
};

const Card: FunctionComponent<CardType> = ({
  alertTriangle,
  orderQuotaPending,
  yourOrderQuotaIsAboutToEn,
  iconWrapperForAutoLayout,
  iconWrapperForAutoLayout1,
  iconWrapperForAutoLayout2,
  labelPlaceholder,
  iconWrapperForAutoLayout3,
  alertTriangleIcon,
  brandTitleTextBackgroundColor,
  labelColor,
  button1Color,
  propWidth,
  propMinWidth,
  propRight,
  propLeft,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: brandTitleTextBackgroundColor,
    };
  }, [brandTitleTextBackgroundColor]);

  const orderQuotaPendingStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  const yourOrderQuotaStyle: CSSProperties = useMemo(() => {
    return {
      color: button1Color,
    };
  }, [button1Color]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const buttonShineStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className="card" style={cardStyle}>
      <div className="order-quota">
        <div className="heading">
          <div className="frame-right">
            {!alertTriangleIcon && (
              <img className="alerttriangle-icon" alt="" src={alertTriangle} />
            )}
            <div className="order-quota-pending" style={orderQuotaPendingStyle}>
              {orderQuotaPending}
            </div>
          </div>
          <div className="brand-title-text">
            <div className="your-order-quota" style={yourOrderQuotaStyle}>
              {yourOrderQuotaIsAboutToEn}
            </div>
          </div>
        </div>
        <div className="button-group">
          <div className="button-2">
            <img
              className="icon-wrapper-for-auto-layout"
              alt=""
              src={iconWrapperForAutoLayout}
            />
            <div className="label">Copy Link</div>
            <img
              className="icon-wrapper-for-auto-layout1"
              alt=""
              src={iconWrapperForAutoLayout1}
            />
          </div>
          <div className="button-1" style={button1Style}>
            <img
              className="icon-wrapper-for-auto-layout2"
              alt=""
              src={iconWrapperForAutoLayout2}
            />
            <input
              className="label1"
              placeholder={labelPlaceholder}
              type="text"
              style={labelStyle}
            />
            <img
              className="icon-wrapper-for-auto-layout3"
              alt=""
              src={iconWrapperForAutoLayout3}
            />
            <div className="button-shine" style={buttonShineStyle}>
              <div className="shine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
