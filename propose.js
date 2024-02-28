const cursor=document.querySelector(".cursor");
const imageChanger=document.querySelector(".img");
const changerButton=document.querySelector(".yes");
const OFFSET=100;
const DIS=20;
const evilButton=document.getElementById("no");

window.addEventListener("mousemove",(e)=>{
    let x=e.clientX;
    let y=e.clientY;

    cursor.animate({
        left:x+DIS+"px",
        top: y+DIS+"px"
    },{duration:1500,fill:"forwards"})
});

changerButton.onclick=()=>{
    console.log("hii");
     imageChanger.innerHTML=`<img src="./images/hi.gif" id="imgChange" alt="" />`
}

// evilButton.addEventListener("click",()=>{
//     alert("you can know leave !");
//     window.close();
// })

document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y=e.pageY;
    const buttonBox=evilButton.getBoundingClientRect(); // evilButton.getBoundingClientRect() give x  y position and height and width of evilbutton
   const horizontalDistance=distanceFromCenter(buttonBox.x,x,buttonBox.width);
   const verticalDistance=distanceFromCenter(buttonBox.y,y,buttonBox.height);
   const horizontalOffset= buttonBox.width/2+OFFSET; // this is the distance how close you go to the button
   const verticalOffset= buttonBox.height/2+OFFSET ;// this is the distance how close you go to the button

   if(Math.abs(horizontalDistance)<=horizontalOffset&& Math.abs(verticalDistance)<=verticalOffset){
    setButtonPosition( 
        buttonBox.x + horizontalOffset/horizontalDistance*10,
        buttonBox.y +verticalOffset/verticalDistance*10
    )
   }
})

const setButtonPosition=(left,top)=>{
    const windowBox=document.body.getBoundingClientRect();
    const buttonBox=evilButton.getBoundingClientRect();

    if(distanceFromCenter(left,windowBox.left,buttonBox.width)<0){
        left= windowBox.right - buttonBox.width -OFFSET;
    }
    if(distanceFromCenter(left,windowBox.right,buttonBox.width)>0){
        left= windowBox.left+OFFSET;
    }
    if(distanceFromCenter(top,windowBox.top,buttonBox.height)<0){
        top= windowBox.bottom-buttonBox.height-OFFSET;
    }
    if(distanceFromCenter(top,windowBox.bottom,buttonBox.height)>0){
        top= windowBox.top+OFFSET;
    }
    
      evilButton.style.left=`${left}px`,
      evilButton.style.top=`${top}px`,
      console.log("left = " ,left,"top=",top);
}

const distanceFromCenter=(boxPosition,mousePosition,boxSize)=>{
      return boxPosition - mousePosition + boxSize/2;   // this function measure the cursor distance from center of the button
}


