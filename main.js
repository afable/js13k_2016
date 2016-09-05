window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
var letters = {
    'A': [
        [, 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1]
    ],
    'B': [
        [1, 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, 1]
    ],
    'C': [
        [1, 1, 1],
        [1],
        [1],
        [1],
        [1, 1, 1]
    ],
    'D': [
        [1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1]
    ],
    'E': [
        [1, 1, 1],
        [1],
        [1, 1, 1],
        [1],
        [1, 1, 1]
    ],
    'F': [
        [1, 1, 1],
        [1],
        [1, 1],
        [1],
        [1]
    ],
    'G': [
        [, 1, 1],
        [1],
        [1, , 1, 1],
        [1, , , 1],
        [, 1, 1]
    ],
    'H': [
        [1, , 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, , 1]
    ],
    'I': [
        [1, 1, 1],
        [, 1],
        [, 1],
        [, 1],
        [1, 1, 1]
    ],
    'J': [
        [1, 1, 1],
        [, , 1],
        [, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'K': [
        [1, , , 1],
        [1, , 1],
        [1, 1],
        [1, , 1],
        [1, , , 1]
    ],
    'L': [
        [1],
        [1],
        [1],
        [1],
        [1, 1, 1]
    ],
    'M': [
        [1, 1, 1, 1, 1],
        [1, , 1, , 1],
        [1, , 1, , 1],
        [1, , , , 1],
        [1, , , , 1]
    ],
    'N': [
        [1, , , 1],
        [1, 1, , 1],
        [1, , 1, 1],
        [1, , , 1],
        [1, , , 1]
    ],
    'O': [
        [1, 1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'P': [
        [1, 1, 1],
        [1, , 1],
        [1, 1, 1],
        [1],
        [1]
    ],
    'Q': [
        [0, 1, 1],
        [1, , , 1],
        [1, , , 1],
        [1, , 1, 1],
        [1, 1, 1, 1]
    ],
    'R': [
        [1, 1],
        [1, , 1],
        [1, , 1],
        [1, 1],
        [1, , 1]
    ],
    'S': [
        [1, 1, 1],
        [1],
        [1, 1, 1],
        [, , 1],
        [1, 1, 1]
    ],
    'T': [
        [1, 1, 1],
        [, 1],
        [, 1],
        [, 1],
        [, 1]
    ],
    'U': [
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'V': [
        [1, , , , 1],
        [1, , , , 1],
        [, 1, , 1],
        [, 1, , 1],
        [, , 1]
    ],
    'W': [
        [1, , , , 1],
        [1, , 1, , 1],
        [1, , 1, , 1],
        [1, , 1, , 1],
        [1, 1, 1, 1, 1]
    ],
    'X': [
        [1, , , , 1],
        [, 1, , 1],
        [, , 1],
        [, 1, , 1],
        [1, , , , 1]
    ],
    'Y': [
        [1, , 1],
        [1, , 1],
        [, 1],
        [, 1],
        [, 1]
    ],
    'Z': [
        [1, 1, 1, 1, 1],
        [, , , 1],
        [, , 1],
        [, 1],
        [1, 1, 1, 1, 1]
    ],
    '0': [
        [1, 1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    '1': [
        [, 1],
        [, 1],
        [, 1],
        [, 1],
        [, 1]
    ],
    '2': [
        [1, 1, 1],
        [, , 1],
        [1, 1, 1],
        [1, ,],
        [1, 1, 1]
    ],
    '3': [
        [1, 1, 1],
        [, , 1],
        [, 1, 1],
        [, , 1],
        [1, 1, 1]
    ],
    '4': [
        [1, , 1],
        [1, , 1],
        [1, 1, 1],
        [, , 1],
        [, , 1]
    ],
    '5': [
        [1, 1, 1],
        [1, ,],
        [1, 1, 1],
        [, , 1],
        [1, 1, 1]
    ],
    '6': [
        [1, 1, 1],
        [1, ,],
        [1, 1, 1],
        [1, , 1],
        [1, 1, 1]
    ],
    ' ': [
        [, ,],
        [, ,],
        [, ,],
        [, ,],
        [, ,]
    ],
    '?': [
        [1, 1, 1],
        [, , 1],
        [, 1, 1],
        [, 1,],
        [],
        [, 1,]
    ],
    ':': [
        [],
        [, 1,],
        [],
        [, 1,],
        [],
        []
    ],
    '.': [
        [],
        [, ,],
        [],
        [, ,],
        [, 1,],
        []
    ],
    '!': [
        [,1,],
        [, 1,],
        [,1],
        [, ,],
        [, 1,],
        [,,]
    ],
    '[': [
        [1, 1, ],
        [1, , ],
        [1, , ],
        [1, , ],
        [1, 1, ]
    ],
    ']': [
        [, 1, 1],
        [, , 1],
        [, , 1],
        [, , 1],
        [, 1, 1]
    ],
    '>': [
        [, 1,],
        [,1 , 1],
        [, 1,1 ,1],
        [, 1, 1],
        [, 1,]
    ]
};

var Story = function () {
    var dialog,
        current,
        started,
        defaultColor = 'rgb(0, 207, 20)',
        dc = 'rgb(153, 153, 255)',
        ic = 'rgb(204, 255, 229)',
        nc = 'rgb(246, 207, 20)',
        ac = 'rgb(153, 255, 153)',
        init = function () {
            dialog = {
                // PRESENTATION
                "presentation": {
                    "t":"      The spear of time",
                    "n":"thursday1",
                    "c": nc,
                },
                "thursday1":{
                    "t":"It is thursday.",
                    "n":"thursday2",
                    "c": nc,
                },
                "thursday2":{
                    "t":"In my experience nothing good happens on Thursdays.",
                    "n":"today_shame",
                    "c": nc
                },
                "today_shame":{
                    "t":"A shame it has to be done today or it may not happen again.",
                    "n":"item_list",
                    "c": nc
                },
                "item_list":{
                    "t":"Went through a lot of trouble to gather the items, but I am ready.",
                    "n":"obtained_items",
                    "c": nc
                },
                "obtained_items":{
                    "t":"Obtained: The list. Amulet of protection. Book of incantations. Spear of time.",
                    "n":"q1",
                    "c": ic
                },
                "q1":{
                    "t":"Use Item:",
                    "a":[
                        {"t": "Read list", "n":"q1.list"},
                        {"t": "Use Amulet", "n":"q1.nothing"},
                        {"t": "Read Incantation", "n":"q1.nothing"},
                        {"t": "Use spear", "n":"q1.spear"},
                    ],
                    "c": nc
                },
                "q1.nothing":{
                    "t":"Is not the time to use this.",
                    "n":"q1",
                    "c": nc
                },

                // Q1 spear
                "q1.spear":{
                    "t":"You use the spear to pierce your heart.",
                    "n":"q1.spear.death",
                    "c": ic,
                    "s": "clear"
                },
                "q1.spear.death":{
                    "t":"Death: Fool, It was not your time, but nothing escapes me.",
                    "n":"q1.spear.death2",
                    "c": dc
                },
                "q1.spear.death2":{
                    "t":"Death: [ sings ]",
                    "n":"q1.spear.song",
                    "c": dc
                },
                "q1.spear.song":{
                    "t":"You hear the song calling your soul, separating it from your body.",
                    "n":"q1.spear.dies",
                    "c": nc
                },
                "q1.spear.dies":{
                    "t":"You died.",
                    "n":"q1.q1",
                    "c": nc
                },

                "q1.q1":{
                    "t":"The spear grants you another chance:",
                    "a":[
                        {"t": "Try again", "n":"thursday1"},
                    ],
                    "c": nc
                },

                // Q1 List
                "q1.list":{
                    "t":"Alex Anderson 11:13 pm. The bus stop at 34th street.",
                    "n":"travel",
                    "c": ic
                },
                "travel":{
                    "t":"Let's go.",
                    "n":"watching",
                    "c": nc,
                    "s": "start"
                },

                // BUS TOP
                "watching":{
                    "t":"There they are. Both on time, which is unfortunate for Alex. I will stay far from sight for now.",
                    "n":"d_presents",
                    "c": nc
                },
                "d_presents":{
                    "t":"Death: I was expecting you Alex. your life hangs by a thread. Your time is short.",
                    "n":"a_asks",
                    "c": dc
                },
                "a_asks":{
                    "t":"Alex: Who are you? How do you know my name?",
                    "n":"d_who",
                    "c": ac
                },
                "d_who":{
                    "t":"Death: I am Death. The Grim Reaper. And your time is up.",
                    "n":"n_usual",
                    "c": dc
                },

                "n_usual":{
                    "t":"Probably Alex is begging for more time. But nothing escapes death.",
                    "n":"n_ready",
                    "c": nc
                },
                "n_ready":{
                    "t":"I should get ready.",
                    "n":"q2",
                    "c": nc
                },

                "q2":{
                    "t":"Use Item:",
                    "a":[
                        {"t": "Use amulet", "n":"q2.amulet"},
                        {"t": "Read Incantation", "n":"q2.incantation"},
                        {"t": "Use spear", "n":"q1.spear"},
                    ],
                    "c": nc
                },

                // Q2 Amulet
                "q2.amulet":{
                    "t":"This should stop Death.",
                    "n":"q2.amulet.shout",
                    "c": nc
                },
                "q2.amulet.shout":{
                    "t":"Death! It is your time that is up.",
                    "n":"q2.amulet.a",
                    "c": nc
                },
                "q2.amulet.a":{
                    "t":"Alex: ... [ confused ]",
                    "n":"q2.amulet.d",
                    "c": ac
                },
                "q2.amulet.d":{
                    "t":"Death: It is not you who I want. you are not on the list yet.",
                    "n":"q2.amulet.d.song",
                    "c": dc
                },
                "q2.amulet.d.song":{
                    "t":"Death: [ sings ]",
                    "n":"q2.amulet.d.song2",
                    "c": dc,
                    "s": "clear"
                },
                "q2.amulet.d.song2":{
                    "t":"You see Alex drop to the floor. And Death vanishes.",
                    "n":"q2.amulet.death",
                    "c": nc
                },
                "q2.amulet.death":{
                    "t":"Not again...",
                    "n":"q2.amulet.death.item",
                    "c": nc
                },
                "q2.amulet.death.item":{
                    "t":"Use Item:",
                    "a":[
                        {"t": "Use spear", "n":"q1.spear"},
                    ],
                    "c": nc
                },

                // Q2 Incantation
                "q2.incantation":{
                    "t":"You open the book and read the first incantation.",
                    "n":"q2.incantation2",
                    "c": ic
                },
                "q2.incantation2":{
                    "t":"Alex and Death are frozen in place.",
                    "n":"q2.incantation2.d",
                    "c": nc
                },

                "q2.incantation2.d":{
                    "t":"The spell is not holding and Death will be free soon.",
                    "n":"q3",
                    "c": nc
                },

                // Q3
                "q3":{
                    "t":"Bought a bit of time. I can use an Item:",
                    "a":[
                        {"t": "Use amulet", "n":"q3.items.amulet"},
                        {"t": "Read Incantation", "n":"q2.incantation"},
                        {"t": "Use spear", "n":"q1.spear"},
                    ],
                    "c": nc
                },
                "q3.items.amulet":{
                    "t":"This should stop Death.",
                    "n":"q3.items2",
                    "c": nc
                },
                "q3.items2":{
                    "t":"Use Item:",
                    "a":[
                        {"t": "Use spear", "n":"q3.items2.spear"},
                    ],
                    "c": nc
                },
                "q3.items2.spear":{
                    "t":"You use the spear to pierce your heart.",
                    "n":"q3.items2.spear2",
                    "c": ic
                },
                "q3.items2.spear2":{
                    "t":"Death: ...[ Tries to move ]",
                    "n":"q3.items2.spear3",
                    "c": dc
                },
                "q3.items2.spear3":{
                    "t":"The amulet absorbs your soul.",
                    "n":"q3.items2.spear4",
                    "c": ic
                },
                "q3.items2.spear4":{
                    "t":"Death breaks the spell.",
                    "n":"q3.items2.spear5",
                    "c": nc
                },

                "q3.items2.spear5":{
                    "t":"Death: [ sings ]",
                    "n":"q3.items2.spear6",
                    "c": dc
                },
                "q3.items2.spear6":{
                    "t":"Nothing happens.",
                    "n":"q3.items2.spear7",
                    "c": nc
                },
                "q3.items2.spear7":{
                    "t":"Death: [ confused ] [ sings again]",
                    "n":"q3.items2.spear8",
                    "c": dc
                },
                "q3.items2.spear8":{
                    "t":"Nothing happens again.",
                    "n":"q3.items2.spear9",
                    "c": nc
                },
                "q3.items2.spear9":{
                    "t":"You take out the spear from your heart.",
                    "n":"q4",
                    "c": nc
                },

                // Q4
                "q4":{
                    "t":"With the Spear in hand there is one more thing to do",
                    "a":[
                        {"t": "Kill Death", "n":"q4.kill"}
                    ],
                    "c": nc
                },

                "q4.kill":{
                    "t":"You pierce Death and it banishes leaving just the robes and the scythe.",
                    "n":"q4.kill2",
                    "c": nc,
                    "s": "clear"
                },

                "q4.kill2":{
                    "t":"The robes float and wrap your body. you pick up the scythe.",
                    "n":"q4.kill3",
                    "c": nc,
                },

                "q4.kill3":{
                    "t":"Sorry Alex, but your life hangs by a thread. Your time is short.",
                    "n":"q4.kill4",
                    "c": nc,
                },
                "q4.kill4":{
                    "t":"           [ sings ]",
                    "n":"q4.kill.end",
                    "c": nc,
                },
                "q4.kill.end":{
                    "t":"            The end",
                    "n":"q4.kill.end",
                    "c": nc,
                }
            };
            current = dialog["presentation"];
            started = false;
        },
        currentDescription = function () {
            return current["t"];
        },
        next = function (x,y) {
            if (isQuestion()) {
                var answers = current["a"];
                for(var i = 0; i < answers.length; i++) {
                    var answer = answers[i];
                    if ("bb" in answer) {
                        var bb = answer["bb"];
                        if( bb.x1 <= x && x <= bb.x2 && bb.y1 <= y && y <= bb.y2 ) {
                            current = dialog[answer["n"]];
                            break;
                        }
                    }
                }
            } else {
                if ("s" in current) {
                    if (current["s"] == "start") {
                        started = true;
                    } else if (current["s"] == "clear") {
                        started = false;
                    }
                }
                current = dialog[current["n"]];

            }
        },
        isQuestion = function () {
            if ("n" in current) {
                return false;
            } else if ("a" in current) {
                return true;
            }

            return false;
        },
        answers = function () {
            if (isQuestion()) {
                return current["a"];
            }
        },
        displayBackground = function () {
            if (started) {
                return true;
            } else {
                return false;
            }
        },
        color = function () {
            if ("c" in current) {
                return current["c"];
            }

            return defaultColor;
        };
    return {
        init: init,
        next: next,
        currentDescription: currentDescription,
        isQuestion: isQuestion,
        answers: answers,
        displayBackground: displayBackground,
        color: color
    };
};

var Game = function () {
    var canvas = document.getElementById('gameCanvas'),
        ctx = canvas.getContext("2d"),
        story,
        background,
        scale,
        backgroundDy = 170,
        referenceX,
        referenceY,
        regularColor = 'rgb(246, 207, 20)',
        selectedColor = 'rgb(255, 255, 153)',
        mouseX,
        mouseY,
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
        drawText = function (string, size, dx, dy, color) {
            ctx.fillStyle = color;
            var needed = [];
            string = string.toUpperCase();
            for (var i = 0; i < string.length; i++) {
                var letter = letters[string.charAt(i)];
                if (letter) {
                    needed.push(letter);
                }
            }
            var currX = dx;
            for (i = 0; i < needed.length; i++) {
                letter = needed[i];
                var currY = dy;
                var addX = 0;
                for (var y = 0; y < letter.length; y++) {
                    var row = letter[y];
                    for (var x = 0; x < row.length; x++) {
                        if (row[x]) {
                            ctx.fillRect(currX + x * size, currY, size+1, size);
                        }
                    }
                    addX = Math.max(addX, row.length * size);
                    currY += size;
                }
                currX += size + addX;
            }

        },
        renderTextContainer = function (xPadding, startingY, height, width, color) {
            ctx.strokeStyle = color;
            ctx.fillStyle = "rgba(0, 0, 0, 0)";
            roundRect(referenceX + xPadding,
                startingY,
                width,
                height);
            startingY += 5;
            xPadding += 5;
            height -= 10;
            roundRect(referenceX + xPadding,
                startingY,
                width-10,
                height);
        },
        multilines = function (text, maxCharsPerLine) {
            var lines = [];
            var tokens = text.split(" ");
            var line = "";
            for (var i = 0; i < tokens.length; i++) {
                var currentLength = line.length;
                if ((currentLength + tokens[i].length) <= maxCharsPerLine) {
                    line += tokens[i] + " ";
                    if (i == tokens.length-1) {
                        lines.push(line);
                    }
                } else {
                    lines.push(line);
                    line = tokens[i] + " ";
                    if (i == tokens.length-1) {
                        lines.push(line);
                    }
                }
            }
            return lines;
        },
        renderText = function () {
            var startingY = referenceY + background.height + 80,
                xPadding = 50,
                containerWidth = background.width - xPadding * 2,
                dim = 6,
                startingTextY = startingY + 20,
                textPadding = xPadding + 30,
                maxCharsPerLine = (containerWidth -textPadding )/ (dim*4)+3,
                lineOffset = dim * 6;

            var text = story.currentDescription();
            var lines = multilines(text, maxCharsPerLine);
            var color = story.color();
            renderTextContainer(xPadding,startingY, (lines.length +1) * lineOffset, containerWidth, color);
            ctx.lineWidth = 1;
            var currentOffset = 0;

            // Draw description
            for (var i = 0; i < lines.length; i++) {
                var bb = {
                    x1: referenceX+textPadding,
                    y1: startingTextY + currentOffset,
                    x2: referenceX+textPadding + containerWidth,
                    y2: startingTextY + currentOffset + lineOffset};

                drawText(lines[i], dim, bb.x1, bb.y1, color);
                currentOffset += lineOffset;
            }

            currentOffset += lineOffset;

            if (story.isQuestion()) {
                story.answers().forEach(function (e) {
                    var lines = multilines("> " + e["t"], maxCharsPerLine);
                    var bb = {
                        x1: referenceX+textPadding,
                        y1: startingTextY + currentOffset,
                        x2: referenceX+textPadding + containerWidth,
                        y2: startingTextY + currentOffset + (lines.length * lineOffset)
                    };
                    e["bb"] = bb;
                    // debug
                    // ctx.fillRect(bb.x1, bb.y1, bb.x2-bb.x1, bb.y2-bb.y1);
                    var y = bb.y1;
                    for (var i = 0; i < lines.length; i++) {
                        if( bb.x1 <= mouseX && mouseX <= bb.x2 && bb.y1 <= mouseY && mouseY <= bb.y2 ) {
                            color = selectedColor;
                            ctx.strokeStyle = selectedColor;
                        } else {
                            color = regularColor;
                            ctx.strokeStyle = regularColor;
                        }

                        drawText(lines[i], dim, bb.x1, y, color);
                        currentOffset += lineOffset;
                        y += lineOffset;
                    }
                    currentOffset += lineOffset/2;
                });
            }
        },
        render = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            darkBackground();
            if (story.displayBackground()) {
                ctx.drawImage(background, referenceX, referenceY);
                ctx.save();
                ctx.scale(1, -1);
                ctx.globalAlpha = 0.2;
                ctx.drawImage(background, referenceX, -background.height * 2 - referenceY);
                ctx.restore();
            }
            renderText();
        },
        update = function () {

        },
        loop = function () {
            render();
            update();
            requestAnimationFrame(loop);
        },
        adjustCanvas = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            referenceX = (canvas.width - background.width) / 2;
            referenceY = (canvas.height - background.height) / 2 - backgroundDy;
        },
        getMousePos = function (canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        },
        init = function (image) {
            story = new Story();
            story.init();

            scale = 3;
            background = resize(image, scale);
            adjustCanvas();
            canvas.addEventListener('mousemove', function(e) {
                var mousePos = getMousePos(canvas, e);
                mouseX = mousePos.x;
                mouseY = mousePos.y;
            }, false);

            canvas.addEventListener('mousedown', function (e) {
                var mousePos = getMousePos(canvas, e);
                var message = 'Mouse click: ' + mousePos.x + ',' + mousePos.y;
                console.log(message);
                story.next(mousePos.x, mousePos.y);
            }, false);
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
var resize = function (img, scale) {
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
    var scaledPixels = scaledCtx.getImageData(0, 0, widthScaled, heightScaled);

    for (var y = 0; y < heightScaled; y++) {
        for (var x = 0; x < widthScaled; x++) {
            var index = (Math.floor(y / scale) * img.width + Math.floor(x / scale)) * 4;
            var indexScaled = (y * widthScaled + x) * 4;
            scaledPixels.data[indexScaled] = origPixels.data[index];
            scaledPixels.data[indexScaled + 1] = origPixels.data[index + 1];
            scaledPixels.data[indexScaled + 2] = origPixels.data[index + 2];
            scaledPixels.data[indexScaled + 3] = origPixels.data[index + 3];
        }
    }
    scaledCtx.putImageData(scaledPixels, 0, 0);
    return scaled;
};

function resize_canvas() {
    game.adjustCanvas();
}

var game = new Game(),
    gameImage = new Image();

gameImage.src = "./js13k_2016.png";
gameImage.onload = function () {
    game.init(gameImage);
    game.loop();
};

