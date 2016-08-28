window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var Game = function() {
    var canvas = document.getElementById('gameCanvas'),
        ctx = canvas.getContext("2d"),
        background,
        scale,
        backgroundDy = 170,
        referenceX,
        referenceY,
        darkBackground = function () {
            ctx.fillStyle = 'rgb(0,0,0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        },
        roundRect = function (x, y, width, height) {
            var radius = {tl: 5, tr: 5, br: 5, bl: 5};
            ctx.beginPath();
            ctx.moveTo(x + radius.tl, y);
            ctx.lineTo(x + width - radius.tr, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
            ctx.lineTo(x + width, y + height - radius.br);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
            ctx.lineTo(x + radius.bl, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
            ctx.lineTo(x, y + radius.tl);
            ctx.quadraticCurveTo(x, y, x + radius.tl, y);
            ctx.closePath();
            ctx.lineWidth = 2;
            ctx.fill();
            ctx.stroke();
        },
        renderTextContainer = function (startingY, height) {
            ctx.strokeStyle = "rgb(246, 207, 20)";
            ctx.fillStyle = "rgba(0, 0, 0, 0)";
            var xPadding = 50;
            roundRect(referenceX+xPadding,
                startingY,
                background.width - xPadding*2,
                height);
            startingY+=5;
            xPadding+=5;
            height-=10;
            roundRect(referenceX+xPadding,
                startingY,
                background.width - xPadding*2,
                height);
        },
        renderText = function () {
            var startingY = referenceY + background.height + 80,
                height = 250;
            renderTextContainer(startingY,height);
            var dim = 30;
            ctx.font = "normal " + dim + "px Montserrat";
            ctx.fillStyle = "rgb(246, 207, 20)";
            ctx.fillText("TEST", referenceX, referenceY);
        },
        render = function() {
            ctx.clearRect(0,0,canvas.width, canvas.height);
            darkBackground();
            ctx.drawImage(background,referenceX,referenceY);
            ctx.save();
            ctx.scale(1,-1);
            ctx.globalAlpha = 0.2;
            ctx.drawImage(background,referenceX,-background.height*2-referenceY);
            ctx.restore();
            renderText();
        },
        update = function() {

        },
        loop = function() {
            render();
            update();
            requestAnimationFrame(loop);
        },
        adjustCanvas = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            referenceX = (canvas.width-background.width)/2;
            referenceY = (canvas.height-background.height)/2-backgroundDy;
        },
        init = function(image) {
            scale = 3;
            background = resize(image, scale);
            adjustCanvas();
        };
    return {
        init: init,
        loop: loop,
        adjustCanvas: adjustCanvas
    };
};

//---------------------------------
//  UTILITIES
//---------------------------------
// http://phoboslab.org/log/2012/09/drawing-pixels-is-hard
var resize = function( img, scale ) {
    // Takes an image and a scaling factor and returns the scaled image

    // The original image is drawn into an offscreen canvas of the same size
    // and copied, pixel by pixel into another offscreen canvas with the
    // new size.

    var widthScaled = img.width * scale;
    var heightScaled = img.height * scale;

    var orig = document.createElement('canvas');
    orig.width = img.width;
    orig.height = img.height;
    var origCtx = orig.getContext('2d');
    origCtx.drawImage(img, 0, 0);
    var origPixels = origCtx.getImageData(0, 0, img.width, img.height);

    var scaled = document.createElement('canvas');
    scaled.width = widthScaled;
    scaled.height = heightScaled;
    var scaledCtx = scaled.getContext('2d');
    var scaledPixels = scaledCtx.getImageData( 0, 0, widthScaled, heightScaled );

    for( var y = 0; y < heightScaled; y++ ) {
        for( var x = 0; x < widthScaled; x++ ) {
            var index = (Math.floor(y / scale) * img.width + Math.floor(x / scale)) * 4;
            var indexScaled = (y * widthScaled + x) * 4;
            scaledPixels.data[ indexScaled ] = origPixels.data[ index ];
            scaledPixels.data[ indexScaled+1 ] = origPixels.data[ index+1 ];
            scaledPixels.data[ indexScaled+2 ] = origPixels.data[ index+2 ];
            scaledPixels.data[ indexScaled+3 ] = origPixels.data[ index+3 ];
        }
    }
    scaledCtx.putImageData( scaledPixels, 0, 0 );
    return scaled;
};

function resize_canvas(){
    game.adjustCanvas();
}

var game = new Game(),
    gameImage = new Image();

gameImage.src = "./js13k_2016.png";
gameImage.onload = function () {
    game.init(gameImage);
    game.loop();
};

