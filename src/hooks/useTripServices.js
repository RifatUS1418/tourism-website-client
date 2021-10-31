import { useEffect, useState } from "react"


const useTripServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // console.log(services);
    return services;
}

export default useTripServices;
