import { useRouteError } from "react-router-dom";

const Error=()=>{
    const errData = useRouteError();
    return (
        <div className="common-page-container">
            <h1>Oops!!!!</h1>
            <h3>Something Went Wrong!!!!</h3>
            <div>{`${errData?.status} ${errData?.data}`}</div>
        </div>
    )
}
export default Error;