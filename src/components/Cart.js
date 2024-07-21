import { useSelector, useDispatch } from "react-redux";
import "../assets/resto.css";
import { clearCart, removeItem, addItem } from "../assets/cartSlice";

const Cart = () => {
   //subscribing to read store
   const cartItems = useSelector((store)=> store.cart.items);

   const dispatch = useDispatch();
   const handleClearCart = ()=>{
     //dispatch action
     dispatch(clearCart())
   }
   const handleClearItem = (item)=>{
    //dispatch action
    dispatch(removeItem(item))
  }
  const handleAddItem = (item)=>{
    //dispatch action
    dispatch(addItem(item))
  }
    let total = 0;
   return (
    <div className="body common-page-container w-9/12 mx-auto mt-5">
      {cartItems?.length ===0 ? <div>
<h2 className="font-bold my-20"> No items in cart</h2>
      </div> : 
      <div className="d-flex-col ">
       <div className="flex justify-between mb-10">
       <h1 className="text-2xl font-bold ">Cart</h1>
       <button className="bg-gray-50 p-1 rounded-lg border"
       onClick={()=>handleClearCart()}>Clear cart</button>
       </div>
       
      {cartItems?.map((menuSec) => {
        {total +=  menuSec?.card?.info?.price
          ? menuSec?.card?.info?.price / 100 * (menuSec.count || 1)
          : menuSec?.card?.info?.defaultPrice / 100 * (menuSec.count || 1);}
       return (
        <div
          className="d-flex h-auto min-h-10 bg-gray-100 p-5 rounded-lg -my-1"
          key={menuSec?.card?.info?.id}
        >
          <div className="d-flex-col w-full justify-start h-5/6">
            <div className="d-flex justify-between pb-1">
              <span className="text-mb font-bold ">
                {menuSec?.card?.info?.name}
              </span>
              <div className="flex justify-around w-1/3">
              
              <div className="bg-gray-200 rounded-md h-6 text-xs">
              <button className="w-9 rounded-sm hover:cursor-pointer h-6 bg-gray-300 mr-2"
              onClick={()=>handleClearItem(menuSec?.card?.info?.id)}>➖</button>
              {menuSec?.count ?? 1}
              <button className="w-9 rounded-sm hover:cursor-pointer h-6 bg-gray-300 ml-2 size-2"
              onClick={()=>handleAddItem(menuSec)}>➕</button>
              </div>
              <span className="font-bold">
                $
                {menuSec?.card?.info?.price
                  ? menuSec?.card?.info?.price / 100 * (menuSec.count || 1)
                  : menuSec?.card?.info?.defaultPrice / 100 * (menuSec.count || 1)}
              </span>
              {/* <button className="w-5 rounded-sm hover:cursor-pointer "
              onClick={()=>handleClearItem(menuSec?.card?.info?.id)}>❎</button> */}
              </div>
             
            </div>
          </div>
          
        </div>
      )})}
      <div className="flex border-t justify-between font-bold h-auto min-h-10 bg-gray-100 p-5 rounded-b-lg -my-1 pr-0">
        <span>Total :</span>
        <span className="w-2/12">${total} </span>
      </div>
    </div>}
      
    </div>
  );
};
export default Cart;
