import { useEffect, useRef } from "react";
import ObserverSingleton from '../IntersectionObserverSingleton'

const LazyComponent = ({ type, ...props}) => {
    const lazyRef = useRef(null);
    useEffect(() => {
        if(lazyRef.current){
          ObserverSingleton.observe(lazyRef.current);
        }   
    },[lazyRef.current])

    // const Component = LAZY_ELEMENT[type];
    return <img ref={lazyRef} {...props} />
}

export default LazyComponent;