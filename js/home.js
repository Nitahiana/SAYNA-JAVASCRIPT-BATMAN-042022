let menu = document.querySelectorAll("li");

menu.forEach(function(li){
    li.addEventListener("mouseover",()=>{
        li.style.textDecoration = "underline";
        li.style.textDecorationColor= "white";
        li.style.fontWeight ="bold";
        li
    });
})

