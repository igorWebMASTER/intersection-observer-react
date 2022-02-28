import IntersectionFactory from "./IntersectionObserverFactory";

const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.5, 1],
}
  
const onObserve = (entries, observer) => {
    entries.forEach(({ isIntersecting, target}) => {
      // a partir daqui tomar uma ação para quando o elemento
      // interceder o root
        if(isIntersecting){
           IntersectionFactory(target);
        //    target.src = target.dataset.src;
           observer.unobserve(target);
        }
    });
} 
  
  // retorna observe e unobserve
 export default new IntersectionObserver(onObserve, defaultOptions);