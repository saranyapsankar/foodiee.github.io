import { useEffect, useState } from "react"

const setOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", (e) => {
            setOnlineStatus(false)
          });
          
          window.addEventListener("online", (e) => {
            setOnlineStatus(true)
          });
    }, [])
    return onlineStatus;
}
export default setOnlineStatus;