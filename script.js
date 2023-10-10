let inp=document.querySelector("#name");
let set=document.querySelector("#name-set");
let p=document.querySelector(".p");
let body=document.querySelector("body");
set.addEventListener("click",function(){
    // let item=document.createElement("h3");
    let item=document.querySelector("h3");
    if(inp.value==""){
        alert("Enter Your Nick Name Please!");
        return false;
    }
    item.innerText=`Hii ${inp.value} 👋 , I'm your day planner So.. just click on me and plan your day with me !!`
    item.classList.add("color");
    // p.appendChild(item);
    inp.value="";
    // let btn=document.createElement("button");
    let btn=document.querySelector("#billuButton");
    btn.classList.add("button")
    // p.appendChild(btn);
    btn.addEventListener('click',function(){
            location.href="task.html";
            console.log("clicked");      
    });
});
