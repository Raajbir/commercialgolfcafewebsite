const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");
const bgtext = document.querySelector("#bg");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 10 + "px";
  blur.style.left = dets.x - 200 + "px";
  crsr.style.top = dets.y - 10 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border="1px solid white";
    crsr.style.backgroundColor="transparent";
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px";
    crsr.style.backgroundColor="rgb(145,181,8)";
  })
})


var cardAll = document.querySelectorAll(".card");
cardAll.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border="1px solid white";
    crsr.style.backgroundColor="transparent";
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px";
    crsr.style.backgroundColor="rgb(145,181,8)";
  })
})

var elemAll = document.querySelectorAll(".elem");
elemAll.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border="1px solid white";
    crsr.style.backgroundColor="transparent";
    bgtext.style.color="rgb(145,181,8)";
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px";
    crsr.style.backgroundColor="rgb(145,181,8)";
    bgtext.style.color="transparent";
  })
})

var footerAll = document.querySelectorAll(".footerelem");
footerAll.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border="1px solid white";
    crsr.style.backgroundColor="transparent";
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px";
    crsr.style.backgroundColor="rgb(145,181,8)";
  })
})


gsap.to("#nav", {
  backgroundColor: "#000",
  height: "120px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in",{
  y:90,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end: "top 65%",
    scrub:2
  }
});

gsap.from(".card",{
  scale:0.8,
  opacity:1,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 80%",
    end: "top 55%",
    scrub:2
  }
});

gsap.from("#colon1",{
  x:-70,
  y:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    bottom:"top 45%",
    scrub:3
  }
}
);

gsap.from("#colon2",{
  x:70,
  y:70,
  scrollTrigger:{
    trigger:"#colon2",
    scroller:"body",
    // markers:true, 
    start:"top 100%",
    bottom:"top 90%",
    scrub:3
  }
}
);

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:2
  }
})
