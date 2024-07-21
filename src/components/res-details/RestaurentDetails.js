import Shimmer from "../Shimmer";
import { Link, useParams } from "react-router-dom";
import ResSummary from './ResSummary';
import ResDeals from './ResDeals';
import ResMenuContent from './ResMenuContent'
import "../../assets/resto.css";
import setRestDetails from '../../assets/setRestDetails'
import {useState} from 'react';

const RestaurentDetails = (props) => {
  const [showIndex, setShowIndex] = useState(null);
  const param = useParams();
  const restDetails = setRestDetails(param?.resId)
  
  if (restDetails === null) return <Shimmer />;
  const {
    name,
    city,
    costForTwoMessage,
    cuisines,
    message,
    avgRatingString,
    totalRatingsString,
    areaName,
    sla,
    feeDetails,
    isOpen,
  } = restDetails?.cards[2]?.card?.card?.info;
  const {offers} = restDetails?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
  const {REGULAR} = restDetails?.cards[4]?.groupedCard?.cardGroupMap;
  const menuSections = REGULAR?.cards;
const filteredSection = menuSections?.reduce((acc, sec) => {
  if (sec?.card?.card?.itemCards?.length > 0) {
    acc.push(sec.card.card);
  }
  return acc;
}, []);
console.log(filteredSection);
  const resSummaryObject = { 
    city,
    costForTwoMessage,
    cuisines,
    message,
    avgRatingString,
    totalRatingsString,
    areaName,
    deliveryTime : sla?.slaString,
    footerMessage: feeDetails?.message
  }
  return (
    <div className="body res-details">
      <span className="bread-crumb">
        <Link to="">Home</Link> / {name}{" "}
      </span>
      <h2 className="font-bold">{name}</h2>
     <ResSummary summaryObject={resSummaryObject}/>
     <h4 className="font-bold pb-2">Deals for you</h4>
     <ResDeals dealInfo={offers}/>
     <h2 className="font-bold pb-2">Menu</h2>
     {
      filteredSection?.map((menuSection, index) => (
        <ResMenuContent key={index} 
        menuSection={menuSection}
        showIndex={index ===showIndex ? true : false}
        setShowIndex={()=> {
          index ===showIndex ? setShowIndex(null) : setShowIndex(index)
        }}
        />
      ))
     }
     
    </div>
  );
};

export default RestaurentDetails;
