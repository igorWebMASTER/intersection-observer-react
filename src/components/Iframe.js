/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import ObserverSingleton from '../IntersectionObserverSingleton'

const LazyComponent = ({ src, ...props}) => {
    const lazyRef = useRef(null);
    useEffect(() => {
        if(lazyRef.current){
          ObserverSingleton.observe(lazyRef.current);
        }   
    },[lazyRef.current])

    return (
        <div ref={lazyRef} data-iframe={src}>
            <iframe  {...props} />
        </div>
    )
}

export default LazyComponent;