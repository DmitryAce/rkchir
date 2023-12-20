var player = new Playerjs(
    {
    id:"player",
    file: "video/intro.mp4",
    poster: "img/events/video.png"
    });


AOS.init(
    {
        once:true
    }
);

var rellax = new Rellax('.rellax', {
    speed: -1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
var scrollL = document.querySelector("#ScrlL");
var scrollR = document.querySelector("#ScrlR");

scrollL.onclick = () => 
{
    document.querySelector('#timeline').scrollLeft -= 359 + 76;
}

scrollR.onclick = () => 
{
    document.querySelector('#timeline').scrollLeft += 359 + 76;
}

