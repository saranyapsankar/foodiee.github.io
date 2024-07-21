const HelpSupport = (props)=> {
    const { name, location, address } = props?.companyData;
    return (
        <div className="d-flex-col info-card">
            <h4>Name: {name}</h4>
            <div>Location: {location}</div>
            <p>Contact: {address}</p>
        </div>
    )
}
export default HelpSupport;