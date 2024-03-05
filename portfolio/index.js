const text = document.querySelector(".text")

const textLoad = ()=>{
    setTimeout(() => {
        text.textContent = "Front End Developer";
    }, 0);
}

textLoad();

let layer = document.querySelector(".layer")
let layers = document.querySelector(".layers")
let layerss = document.querySelector(".layerss")

let up=()=>{
    layer.style.display="block"   
}
let down=()=>{
    layer.style.display="none"
}

let ups=()=>{
    layers.style.display="block"   
}
let downs=()=>{
    layers.style.display="none"
}
let upss=()=>{
    layerss.style.display="block"   
}
let downss=()=>{
    layerss.style.display="none"
}


