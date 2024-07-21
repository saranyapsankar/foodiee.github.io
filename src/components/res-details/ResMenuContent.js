import ResMenuItemContent from './ResMenuItemContent';
import {useState} from 'react';

const ResMenuContent = ({menuSection, showIndex, setShowIndex})=> {
   // const menuSection  = props?.menuSection || [];
    const menuList = menuSection?.itemCards;
    const [rotateCls, setRotateCls] = useState(null);
    return (
       <div className="res-menu-container bg-stone-50 rounded-lg">
        <div className='flex place-content-between h-10 my-1 pr-6 hover:cursor-pointer'
        onClick={()=>{
            const newRotatecls = !rotateCls ? 'rotate-180 ': null;
            setRotateCls(newRotatecls);
            console.log(showIndex)
            setShowIndex(!showIndex);
        }}>
        <h4 className="font-bold pb-2 my-auto">{menuSection?.title} ({menuList?.length})</h4>
        <img src='https://cdn-icons-png.flaticon.com/512/137/137621.png' className={'size-5 float-right my-auto '+rotateCls ?? ''}></img>
        </div>
         {showIndex && <ResMenuItemContent itemList={menuList}/>}
         <div className='h-6 bg-white'></div>
       </div> 
    )
}
export default ResMenuContent;