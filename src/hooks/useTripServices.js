import { useEffect, useState } from "react"


const useTripServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-castle-90813.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // console.log(services);
    return services;
}

export default useTripServices;
