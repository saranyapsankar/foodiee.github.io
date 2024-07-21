import RestaurentCard, {extendedRestoCard} from "./RestaurentCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import Cuisines from "./Cuisines";
import { Link } from "react-router-dom";
import setAllRestList from "../assets/setAllRestList";
import setOnlineStatus from '../assets/setOnlineStatus'
import UserContext from "../assets/UserContext";

const Body = () => {
  //react state variable
  const [searchText, setSearchText] = useState("");
  const onlineStatus = setOnlineStatus();
  const RestoCardWithPromoLabel = extendedRestoCard(RestaurentCard);
  const { loggedInUser , setUserInfo} = useContext(UserContext)
 //custom hook
  const {deliverableResList, restaurantsList, filteredDelResList, cuisinesList, setFilteredDelResList} = setAllRestList();
  console.log(cuisinesList)
  if(!onlineStatus) return (
    <div className="body main-content">
      <h2>Seems like you are offline, please check your internet connection..</h2>
    </div>
  )
  return deliverableResList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body main-content flex flex-col p-5">
      <div className="flex justify-between w-6/12 place-items-center">
      <div className="search flex my-2">
        <input
          className="w-100 border-2 p-3"
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={(arg) => {
            setSearchText(arg?.target?.value);
          }}
        />
        <button
           className="bg-green-500 border-solid border-2 rounded-sm text-white border-green-500 px-1 "
          onClick={() => {
            const filteredrestList = deliverableResList?.filter((item) =>
              item.info.name?.toLowerCase()?.includes(searchText?.toLowerCase())
            );
            setFilteredDelResList(filteredrestList);
          }}
        >
          Search
        </button> 
      </div>
      <div className="flex gap-3">
        <label className="text-green-700 italic font-semibold">Username :</label>
        <input className="border-green-700 border rounded-sm px-3 text-lime-900 bg-slate-100" value={loggedInUser}
        onChange={(e)=>{
          setUserInfo(e?.target.value)
        }}/>
        </div>
      </div>
      
      <h3>What's on your mind?</h3>
      <div className="cuisines-scroller">
        {console.log(cuisinesList)}
        {cuisinesList?.map((cuisineItem) => (
          <Cuisines key={cuisineItem?.id} cuisineData={cuisineItem} />
        ))}
      </div>

      <hr></hr>
      <h3>Top restaurant chains in Bangalore</h3>
      <div className="res-container scroller">
        {restaurantsList?.map((restoItem) => (
          <Link className="res-main-link"
          to={"./restaurent/" + restoItem?.info?.id}
          key={restoItem?.info?.id}
        >
          {/* <RestaurentCard key={restoItem?.info?.id} restData={restoItem} /> */}
          {restoItem?.info?.veg ? 
              <RestoCardWithPromoLabel key={restoItem?.info?.id}  restData={restoItem} />:
              <RestaurentCard key={restoItem?.info?.id} restData={restoItem} />}
        </Link>
        ))}
      </div>
      <hr></hr>
      <h3>Restaurants with online food delivery in Bangalore</h3>
      <div className="res-container">
        {filteredDelResList?.length === 0 ? (
          <div>No Results found...</div>
        ) : (
          
          filteredDelResList?.map((restoItem) => (
            <Link className="res-main-link"
              to={"./restaurent/" + restoItem?.info?.id}
              key={restoItem?.info?.id}
            >
            {restoItem?.info?.veg ? 
              <RestoCardWithPromoLabel restData={restoItem} />:
              <RestaurentCard restData={restoItem} />}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
