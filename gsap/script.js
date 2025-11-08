// gsap.from(".container",{
//      x:1000,
//      y:200,
//     duration :1,
//     delay : 2,
//     backgroundColor : "red",
//     borderRadius : "30%",
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
    
// })

// gsap.to(".container1",{
//      x:1000,
//      y:200,
//     duration :1,
//     delay : 2,
//     backgroundColor : "red",
//     borderRadius : "30%",
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
   
// })

// gsap.from("h1",{
//     color:"orange",
//     duration : 2,
//     delay : 3,
//     y:-40,
//     opacity:0,
//     stagger:1 
// })

// gsap.from("h2",{
//     color:"orange",
//     duration : 2,
//     delay : 3,
//     opacity:0,
//     y:-40,
//     stagger:1 
// })

var tl = gsap.timeline()

tl.from(".nav h1",{
   y:-30,
   opacity:0,
   duration:1,
   delay:0.5
})

var tl = gsap.timeline()

tl.from("p",{
   y:-30,
   opacity:0,
   duration:1,
   stagger:0.3,
})

tl.from(".img1",{
    y:20,
    opacity:0,
    duration:1,
    delay:0.5,
    scale:0.5,
    rotate:360
})

gsap.from("#page2>h1",{
    x:-800,
    y:300,
     rotate:265,
     scrollTrigger:"#page2>h1"
})
gsap.from("#page2>img",{
     x:800,
     y:400,
     rotate:360,
     scale:0.5,
     duration:1,
     opacity:0,
     scrollTrigger:"#page2>img"
     })

      gsap.from("#page3 img",{
        x:800,
        delay:1,
        duration:2,
        repeat:-1,
        opacity:0,
        scrollTrigger:"#page3 img",
    })

