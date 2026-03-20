
    let backgroundimg = document.querySelector(".landing_page");

    // if (backgroundimg) { // Check if the element was found
    //     //(backgroundimg);

    //     let changingBackgroundimg = setInterval(() => {
    //         let imgNum = Math.floor(Math.random() * 4) ; // Assuming images are pc1.jpg to pc6.jpg
    //         backgroundimg.style.backgroundImage = `url(./imgs/pc${imgNum}.jpg)`; // Correct assignment
    //         //(`Setting background to pc${imgNum}.jpg`);
    //     }, 3000);
    // } else {
    //     console.error("Element with class 'landing_page' not found.");
    // }
    // START opeing setting box  
let settingBotton = document.querySelector(".letspin");
let thegear = document.querySelector(".fa-gear");
let settingBox = document.querySelector(".setting-box");

settingBotton.onclick = function () {
    settingBox.classList.toggle("opened");
    thegear.classList.toggle("fa-spin");
}
//swich color
let colorLi = document.querySelectorAll(".color-list li");
colorLi.forEach(li => {
    
    li.addEventListener("click", (e) => { 
        
        let newColor =li.getAttribute("color");
        //(newColor);
        document.documentElement.style.setProperty('--actColor', newColor);
        localStorage.setItem("actcolor", newColor);
        // Remove active class and border from previously active item (if any)
        const prev = document.querySelector('.color-list .active');
        document.querySelector(".aboutDiscrption img").style.fillter  ="hue-rotate(153deg)";
        if (prev) {
            prev.classList.remove('active');
            prev.style.border = 'none';
            prev.style.transition = '0.4s';
            prev.style.width ='20px';
        }

        // Set this item active and give it a visible border
        li.classList.add('active');
        li.style.transition = '0.4s';
        li.style.border = '1px solid white';
        li.style.width ='45px'

        
        
    })});
   
//check if there is color in local storage
if( localStorage.getItem("actcolor") !== null){
 document.documentElement.style.setProperty('--actColor', localStorage.getItem("actcolor"));
}
   //( localStorage.getItem("actcolor")); 
// END opeing setting box

// start change background option
let yes = document.querySelector(".ulContenr .yes");
let no = document.querySelector(".ulContenr .no");
let imgNum=0;

let changingBackgroundimg = null;
function yesClicked(yes,no){
     //("yes clicked");
   yes.style.width ="100px";
     no.style.width ="52.45px";
    yes.style.backgroundColor ="rgb(217 208 208)";
    no.style.backgroundColor ="rgb(238 238 238)";
    let changingBackgroundimg;
}
yes.addEventListener("click", () => {
    localStorage.setItem("backgroundOption","yes");
    yesClicked(yes,no);
    let backgroundimg = document.querySelector(".landing_page");    
    changingBackgroundimg = setInterval(() => {
        let i=-1;
         let ran;
         imgNum = ()=>{
            i=ran;
             ran = Math.floor(Math.random() * 4) ; 
                localStorage.setItem("bgimgnum",ran);
            return( ran === i ? i+1:ran) ;} ; 
                
        //(`THE BGN${imgNum()}`);
        backgroundimg.style.backgroundImage = `url(./imgs/pc${imgNum()}.jpg)`; // Correct assignment
        //(`Setting background to pc${imgNum}.jpg`);
    }, 3000);
    
});

function noClicked(yes,no){
     no.style.width ="100px";
     yes.style.width ="52.45px";
    no.style.backgroundColor ="rgb(217 208 208)";
    yes.style.backgroundColor ="rgb(238 238 238)";
}
no.addEventListener("click", () => {
    localStorage.setItem("backgroundOption","no");
     noClicked(yes,no);
    //("no clicked");
    
        clearInterval(changingBackgroundimg);
    
    //(changingBackgroundimg);
});

function checkifclicked(){
    if(localStorage.getItem("backgroundOption") === "no"){
        let bgn = localStorage.getItem("bgimgnum");
         backgroundimg.style.backgroundImage = `url(./imgs/pc${bgn}.jpg)`;
        return;}
        else
        yes.click();

}
checkifclicked();

// end change background option



// start skills section animation (scroll)
let ourSkills = document.querySelector(".backGroundColorr");
let html1 = document.querySelectorAll(".SkillsRows span");

//(html1);
window.onscroll = function () {
    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    let windowHeight = this.innerHeight;
    let skillsOuterHeight = ourSkills.offsetHeight;
    //(`skillsOffsetTop is : ${skillsOffsetTop}`);
    //(`window.scrollY is : ${window.scrollY}`);
    // let ra = window.scrollY >= skillsOffsetTop+skillsOuterHeight-windowHeight-300 ;
    //(ra);
    
    
    //(html1[0],html1[1],html1[2]);
    if (window.scrollY >= skillsOffsetTop+skillsOuterHeight-windowHeight -300) {
        //("scrolled");


        html1[0].classList.add("htmlScrl");
        html1[1].classList.add("cssScrl");
        html1[2].classList.add("jsScrl");

}
else{
    html1[0].classList.remove("htmlScrl");
    html1[1].classList.remove("cssScrl");
    html1[2].classList.remove("jsScrl");
}

}
// end skills section animation
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// start out gallery
let gallerySection = document.querySelector(".our-gallery");
let myimgs=document.querySelectorAll(".img-box img");
//document.body.append(myimgs)
myimgs.forEach(imgs=>{
    imgs.addEventListener("click", (e)=>{
        //create overlay element
        
            let popUp = document.createElement("div")
            popUp.className= "popUp";
            document.body.appendChild(popUp);
                console.log(popUp);
                

            let overlay = document.createElement("div");
            overlay.className = "overlay";
            popUp.appendChild(overlay);
           
             //add the alt of the img as a title
            let imgTitle = document.createElement("h3");
            //add class for the title 
            imgTitle.className='pic-title';
            let titleText = document.createTextNode(`${imgs.alt}`);
            imgTitle.innerText=titleText.textContent;
            overlay.appendChild(imgTitle);
            let img = document.createElement("img");
            img.className="imgSelected";
            console.log(`${imgs.src}`);
            img.src=`${imgs.src}`;
            overlay.appendChild(img);
           
             
            //create close button
            let closeButton = document.createElement("span");
            closeButton.className="close-button";
            closeButton.innerText="X";
            overlay.appendChild(closeButton);
            console.log(closeButton);
            closeButton.onclick= ()=>{
                popUp.remove();
            }
            
           

    })});
        //create overlay element

        
// end out gallery
// start nav 
     let mylinks= document.querySelectorAll("a");   
    let mybulits= document.querySelectorAll(".boulit");
    let myNav= document.querySelector(".nav-contener");
    console.log(myNav);

    function goto(secroller){
    
    secroller.forEach(item =>{
        item.addEventListener("click", (e)=>{
                let section = item.dataset.section;
                console.log(section);
                let shwo = document.querySelector(section);
                shwo.scrollIntoView({
                        behavior: 'smooth'
                    });

    })})
}
 goto(mylinks);
   goto(mybulits);
   let yesNav = document.querySelector(".showBoulits .yes");
console.log(yesNav);
let noNav = document.querySelector(".showBoulits .no");
yesNav.onclick=()=>{
    myNav.style.display ="block";
yesClicked(yesNav,noNav);};
noNav.onclick=()=>{
    myNav.style.display ="none";
    noClicked(yesNav,noNav);
    
}

// END nav
// start reset option
   let reset = document.querySelector(".reset");
   reset.onclick = ()=>{
    localStorage.clear();
    window.location.reload();
   }
// end reset option
//start the links showing in the @media 
    let listshow = document.querySelector(".links");
    let linksClicked = document.querySelector(".toglle-menu");
    let n =1;
    linksClicked.addEventListener("click",(e)=>{
        n++;
        if(n%2===0){
        linksClicked.classList.add("arrow");
        listshow.classList.add("linksClicked");
            }
           else{
            linksClicked.classList.remove("arrow");
        listshow.classList.remove("linksClicked");
           }
    });
//end the links showing in the @media 

