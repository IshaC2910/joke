let j="the whole world seems like a joke to me....and i know it's not that funny as it seems to be...";
let jb=document.getElementById("joke-button");
let jd=document.getElementById("display");
jb.addEventListener("click",function (){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response=>response.json())
    .then(data=>jd.textContent=(data.setup+" "+data.punchline))
    
});


