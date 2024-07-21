import { CDN_URL } from '../assets/constant';

const Cuisines = (props) => {
    const { imageId } = props?.cuisineData;
    return (
      <div className="cui-card flex flex-col pr-4 h-40">
        <img className="cui-image size-32 min-w-32" src={ CDN_URL + imageId}/>
      </div>
    )
}

export default Cuisines;