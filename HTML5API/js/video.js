var updateInterval = 5000;
var frameWidth = 100;
var frameHeight = 75;

var frameRows = 4;
var frameColumns = 4;
var frameGrid = frameRows * frameColumns;

var frameCount = 0;

var InterValId;
var videoStarted = false;


function updateFrame(){
    var video1 = document.getElementById("movies");
    var MyCanvas = document.getElementById("timeLine");
    var ctx1 = MyCanvas.getContext('2d');

    var framePosition = frameCount % frameGrid;
    var frameX = (framePosition % frameColumns) * frameWidth;
    var frameY = (Math.floor(framePosition/frameRows)) *frameHeight;

    ctx1.drawImage(video1,0,0,400,300,frameX,frameY,frameWidth,frameHeight);

    frameCount++;

    var c = document.getElementById("text");
}

function startVideo() {
    if (videoStarted) {
        return;
    }
    videoStarted = true;

    updateFrame();

    InterValId = setInterval(updateFrame, updateInterval);


    var timeline = document.getElementById("timeLine");
    timeline.onclick = function (evt) {
        var offX = evt.layerX - timeline.offsetLeft;
        var offY = evt.layerY - timeline.offsetTop;

        var clickedFrame = Math.floor(offY / frameHeight) * frameRows;
        clickedFrame += Math.floor(offX / frameWidth);

        var seekedFrame = ((Math.floor(frameCount / frameGrid)) * frameGrid) + clickedFrame;
        if (clickedFrame > (frameCount % 16)) {
            seekedFrame -= frameGrid;

            if (seekedFrame < 0) {
                return;
            }
        }

        var video = document.getElementById("movies");
        video.currentTime = seekedFrame * updateInterval / 1000;

        frameCount = seekedFrame;
    }
}

function stopTimeLine(){
    clearInterval(InterValId);
}

function playTineLine(){
    InterValId = setInterval(updateFrame,updateInterval);
}
/**
 * Created by air on 15/3/5.
 */
