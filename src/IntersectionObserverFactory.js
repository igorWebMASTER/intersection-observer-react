const IntersectionFactory = (entry) =>{
    const { dataset } = entry || {};

    if(dataset.src){
        // ImageObserver(entry
        entry.src = entry.dataset.src;
        return;
    }

    if(dataset.iframe){
        // iframeObserver(entry);
        console.log("", entry);
        entry.firstChild.src = entry.dataset.iframe;
        return
    }
}

export default IntersectionFactory;