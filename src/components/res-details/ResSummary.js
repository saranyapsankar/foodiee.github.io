import { STAR_IMG_URL, DEL_ICON_URL} from "../../assets/constant";
import "../../assets/resto.css";

const ResSummary = (props) => {
  const {
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    deliveryTime,
    footerMessage
  } = props?.summaryObject;

  return (
    <div className="main-container">
      <div className="res-summary-info g-15">
        <div className="rating-info s">
          <img src={STAR_IMG_URL} />
          <span>
            {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
          </span>
        </div>

        <span className="cuis">{cuisines?.join(", ")}</span>
        <div className="d-flex del-loc-div g-15">
          <div className="d-flex-col item-align-center loc-main">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot"></div>
          </div>
          <div className="d-flex-col g-15 del-info">
            <div className="d-flex g-15">
              <span>Outlet</span>
              {areaName}
            </div>
            <span>{deliveryTime}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <img className="del-icon" src={DEL_ICON_URL} />
      <div className="summary-footer"dangerouslySetInnerHTML={{__html: footerMessage}} >
      </div>
      
      </div>
    </div>
  );
};
export default ResSummary;
