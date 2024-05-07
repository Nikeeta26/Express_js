let button = document.querySelectorAll("button");
for(let btn of button)
    {
        btn.addEventListener("click",function(){
            console.log("button was click");
        });
    }