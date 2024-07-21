import { useDispatch } from "react-redux";
import { CDN_URL, STAR_IMG_URL } from "../../assets/constant";
import { addItem } from "../../assets/cartSlice";
const ResMenuItemContent = (props) => {
  const menuList = props?.itemList || [];

  const dispatch = useDispatch();
  const handleAddItem = (e)=>{
    //dispatch action
    dispatch(addItem(e))
  }
  return (
    <div className="d-flex-col ">
      {menuList?.map((menuSec) => (
        <div
          className="d-flex card-details h-auto min-h-10"
          key={menuSec?.card?.info?.id}
        >
          <div className="d-flex-col w-10/12 justify-start h-5/6">
            <div className="d-flex-col pb-3">
              <span className="text-lg font-bold ">
                {menuSec?.card?.info?.name}
              </span>
              <span className="font-bold">
                $
                {menuSec?.card?.info?.price
                  ? menuSec?.card?.info?.price / 100
                  : menuSec?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            {menuSec?.card?.info?.ratings?.aggregatedRating?.rating && (
              <div className="flex">
                <img className="size-4" src={STAR_IMG_URL} />
                <span>
                  {menuSec?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
              </div>
            )}

            <span>{menuSec?.card?.info?.description}</span>
          </div>
          <div className="flex-col relative w-2/12 ">
            <img
              className="cui-image size-32 min-w-32 rounded-md shadow-lg"
              src={CDN_URL + menuSec?.card?.info?.imageId}
            />
            <button className="px-5 py-1 w-auto text-center bg-white rounded-md text-green-700 shadow-lg absolute -bottom-3 left-6"
            onClick={()=>handleAddItem(menuSec)}>
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResMenuItemContent;
