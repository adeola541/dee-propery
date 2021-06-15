
document.getElementById("row-content").style.width = "200px";
document.getElementById("row-content").style.height = "200px";
document.getElementById("row-content").style.backgroundColor = "white";

document.getElementById("text").style.color = "white";
document.getElementById("text").style.textAlign = "center";
document.getElementById("text").style.justifyContent = "center";



document.getElementById("row-content").addEventListener("mouseover",  ()=>{
    document.getElementById("text").style.opacity = "0.9";
    document.getElementById("text").style.top = "10px";
    document.getElementById("row-content").style.backgroundColor = "crimson";

});

document.getElementById("row-content").addEventListener("mouseout",  ()=>{
    document.getElementById("text").style.opacity = "0";
    document.getElementById("row-content").style.backgroundColor = "white";

   

});


