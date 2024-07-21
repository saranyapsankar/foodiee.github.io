const ResDeals = (props) => {
  const {dealInfo} = props;
  return (
    <div className="deals-container d-flex">
      {
      dealInfo?.map((deal) => (
        <div className="deal-card d-flex" key={deal?.info?.offerIds[0]}>
            <img src="https://www.iconbunny.com/media/catalog/product/1/0/1072.7-discount-icon-iconbunny.jpg?width=50&store=icons&image-type=small_image"></img>
          <div className="d-flex-col">
          <h3>{deal?.info?.header}</h3>
          <span>{deal?.info?.couponCode}</span>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default ResDeals;
