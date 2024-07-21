import { useEffect, useState } from "react";

const Company = (props)=> {
    const { title, description, mission } = props?.aboutData;
    const [count] = useState([0]);
    const [count1] = useState([1]);
    useEffect(()=>{
        const timer = setInterval(()=> {
            //console.log('i\'ll be logged in every second')
        }, 1000)
        return ()=> {
           clearInterval(timer);
        }
    }
    ,[count])

    return (
        <div className="d-flex-col info-card no-border">
            <h4>{title} - (from  functional component)</h4>
            <div>{description}</div>
            <p>{mission}</p>


            <b>Count : {count}, {count1}</b>
        </div>
    )
}
export default Company;