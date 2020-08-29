window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll(",sound");
    const pads= document.querySelectorAll(",pads div");
    const visual = document.querySelectorAll(',visual');
    const colors = [
      "red";
      "greenyellow";
      "hotpink";
      "indigo";
      "lightblue";
     "lightgoldenrodyellow";

    ];


    ///Lets get going with sounds
    pads.forEach((pad,index) =>{
      pad.addEventListener('click',function(){
          sounds[index].currentTime = 0; 
         sounds[index].play();



         createBubbles(index);
      }); 
    });

    ///Create a func that make bubble
    const createBubbles = (index) => {
      const bubble= document.createElement("div");
      visual.appendchild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = "jump is ease";
         visual.removeChild(this)
    }
});








