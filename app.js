var button = document.getElementById("theme")
var body = document.body


console.log(body.classList)

//on Click
button.onclick = ()=>{
    if(body.classList == "light"){
         body.classList.replace("light","dark");
    }else{
        body.classList.replace("dark","light");
    }
}
