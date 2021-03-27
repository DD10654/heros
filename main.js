var canvas = new fabric.Canvas("myCanvas");

width = 30;
height = 30;
var player_object;
var block_object;

playerX = 100;
playerY = 100;

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        block_object = Img;
        block_object.scaleToWidth(width);
        block_object.scaleToHeight(height);
        block_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_object);
    })
}




window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

//For p and shift
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and Shift has been pressed together!");

        height = height + 10;
        width = width + 10;

        document.getElementById("height").innerHTML = height;
        document.getElementById("width").innerHTML = width;
    }
//For m and shift
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and Shift has been pressed together!");

        height = height - 10;
        width = width - 10;

        document.getElementById("height").innerHTML = height;
        document.getElementById("width").innerHTML = width;
    }
//For Up
    if (keyPressed == '38') {
        up();
        console.log("Up has been Pressed!");
    }
//For Down
    if (keyPressed == '40') {
        down();
        console.log("Down has been Pressed!");
    }
//For Left
    if (keyPressed == '37') {
        left();
        console.log("Left has been Pressed!");
    }
//For Right
    if (keyPressed == '39') {
        right();
        console.log("Right has been Pressed!");
    }
// Hulk's Face
if (keyPressed == '65') {
    newImage("hulk_face.png");

}

// Hulk's Body

if (keyPressed == '69') {
    newImage("hulk_body.png");
}

// Hulk's Left Hand

if (keyPressed == '66') {
    newImage("hulk_left_hand.png");
}

// Hulk's Right Hand

if (keyPressed == '67') {
    newImage("hulk_right_hand.png");
}
// Hulk's Legs

if (keyPressed == '68') {
    newImage("hulk_legs.png");
}

// ---
// ---
// ---

// Ironman's Face

if (keyPressed == '70') {
    newImage("ironman_face.png");
}

// Ironman's Body

if (keyPressed == '74') {
    newImage("ironman_body.png");
}

// Ironman's Left Hand

if (keyPressed == '71') {
    newImage("ironman_left_hand.png");
}

// Ironman's Right Hand

if (keyPressed == '72') {
    newImage("ironman_right_hand.png");
}

// Ironman's Legs

if (keyPressed == '73') {
    newImage("ironman_legs.png");
}

// ---
// ---
// ---

// Spiderman's Face

if (keyPressed == '75') {
    newImage("spiderman_face.png");
}

// Spiderman's Body

if (keyPressed == '79') {
    newImage("spiderman_body.png");
}

// Spiderman's Left Hand

if (keyPressed == '76') {
    newImage("spiderman_left_hand.png");
}

// Spiderman's Right Hand

if (keyPressed == '85') {
    newImage("spiderman_right_hand.png");
}

// Spiderman's Legs

if (keyPressed == '78') {
    newImage("spiderman_legs.png");
}

// ---
// ---
// ---

// Thor's Face 

if (keyPressed == '84') {
    newImage("thor_face.png");
}

//Mr America's Left Hand

if (keyPressed == '81') {
    newImage("captain_america_left_hand.png");
}

// Thor's Left Hand

if (keyPressed == '83') {
    newImage("thor_left_hand.png");
}

// Thor's Right Hand

if (keyPressed == '82') {
    newImage("thor_right_hand.png");
}
}

function up() {
    if (playerY >= 0) {
        playerY = playerY - height;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() {
    if (playerY < 500) {
        playerY = playerY + height;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - width;
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right() {
    if (playerX < 850) {
        playerX = playerX + width;
        canvas.remove(player_object);
        playerUpdate();
    }
}
