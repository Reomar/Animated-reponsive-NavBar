let button = document.getElementById("theme")
let body = document.body
let text = document.getElementById("bottonText")



//user color shceme
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
let userTheme

if(userPrefersDark){
    userTheme = "dark"
}else{
    userTheme = "light"
}


//appling theme from cach

const theme = localStorage.getItem("theme");
if(theme){
    body.classList.add(theme)
}else{
    body.classList.add(userTheme)
}

switch (theme || userTheme){
    case "light":
        text.innerHTML = "Let it Night!";
        break;
    case "dark":
        text.innerHTML = "Light it up!";
        break;
}


console.log(theme)
//on Click chnge theme
button.onclick = ()=>{
    if(body.classList == "light"){
         body.classList.replace("light","dark");
        localStorage.setItem("theme", "dark");
        text.innerHTML = "Light it up!"

    }else{
        body.classList.replace("dark","light");
       localStorage.setItem("theme", "light")
       text.innerHTML = "Let it Night!"
    }
}
