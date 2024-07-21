import { STAR_IMG_URL, CDN_URL } from '../assets/constant';
import { useContext } from 'react';
import UserContext from '../assets/UserContext';
const RestaurentCard = (props) => {
    const {name, cloudinaryImageId, avgRating, sla, cuisines} = props?.restData?.info;
    return (
      <div className="res-card">
        <img className="res-image" src={ CDN_URL + cloudinaryImageId}/>
        <div className="res-card-body">{name}</div>
        <div className="card-footer">
          <img src={ STAR_IMG_URL }/> 
          <span>{avgRating}</span>
          <span>•</span>
          <span style={{fontStyle:"italic"}}>{sla.slaString}</span>
        </div>
        <span className="res-card-body cui">{cuisines.join(', ')}</span>
      </div>
    )
}
//higher order component
export const extendedRestoCard = (RestaurentCard) => {
  const { loggedInUser } = useContext(UserContext);
  return (props)=>{
    return (
      <div className='relative'>
        <span className='px-2 -m-1 absolute z-10 bg-green-400 text-white rounded-lg'>Promoted by {loggedInUser}</span>
        <RestaurentCard {...props}/>
      </div>
      
    )
  }
}

export default RestaurentCard;