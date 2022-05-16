//Lets the pages load as you scroll rather than all being visible at once
const scrollLoad = () => {
    const sections = document.getElementsByTagName("section");
    for(let i=0; i<sections.length; i++) {
        if(window.getComputedStyle(sections[i])["opacity"] ==0) {
            if(sections[i].getBoundingClientRect()["top"] <= 500) {
                sections[i].style.opacity = 1;
                sections[i].style.transform = "none";
                return;
            } 
        }else if(sections.length-1 == i) {
            window.removeEventListener("scroll",scrollLoad);
            window.removeEventListener("DOMContentLoaded",scrollLoad);
        }
    }
    
}
window.addEventListener("DOMContentLoaded",scrollLoad);
window.addEventListener("scroll",scrollLoad);