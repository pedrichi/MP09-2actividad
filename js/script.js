var video = document.querySelector('.videoTutorial');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');
console.log(video);
function togglePlayPause(){
    if(video.paused){
        btn.className = "pause";
        video.play();
    }
    else{
        btn.className = "play";
        video.pause();
    }
}
btn.onclick = function(){
    togglePlayPause();
}
video.addEventListener("timeupdate", function(){
    var juicePos= video.currentTime/ video.duration;
    juice.style.width= juicePos * 100 + "%";
    if(video.ended){
        btn.className = "play";
    }
})