// var name1 = window.prompt("What do you want to name Child 1?");
// var name2 = window.prompt("What do you want to name Child 2?");
// var name3 = window.prompt("What do you want to name Child 3?");
// var name4 = window.prompt("What do you want to name Child 4?");
// var name5 = window.prompt("What do you want to name Child 5?");

// document.write("Child 1:" + name1 );
// document.write("Child 2:" + name2 );
// document.write("Child 3:" + name3 );
// document.write("Child 4:" + name4 );
// document.write("Child 5:" + name5 );

let introduction = 'There are currently 13,687 orphans living in an orphanage in South Korea. Adoption is a legal system that helps children who do not have parents or can no longer protect them, find new parents and help them grow healthy in the family framework.';
let instruction = 'Press "M" to give sunlight to the children, and "N" to give treats to the children. Drag the children to each corresponding house so they can have a secure home.'

let img_sun;
let img_cloud;

let img_grass;
let grass_size = 1400;

let face_size = 90;

let face_smile1;
let face_frown1;
let face_with_candy1;

let face_smile2;
let face_frown2;
let face_with_candy2;

let face_smile3;
let face_frown3;
let face_with_candy3;

let face_smile4;
let face_frown4;
let face_with_candy4;

let face_smile5;
let face_frown5;
let face_with_candy5;

let img_house;
let house_size = 220;

let child3 = {
    hasSun: false,
    hasCandy: false,
    houseInside: false,
    clicked: false,
    x: 355,
    y: 250
}

let child1 = {
    hasSun: false,
    hasCandy: false,
    houseInside: false,
    clicked: false,
    x: 505,
    y: 250
}

let child4 = {
    hasSun: false,
    hasCandy: false,
    houseInside: false,
    clicked: false,
    x: 655,
    y: 250
}

let child2 = {
    hasSun: false,
    hasCandy: false,
    houseInside: false,
    clicked: false,
    x: 805,
    y: 250
}

let child5 = {
    hasSun: false,
    hasCandy: false,
    houseInside: false,
    clicked: false,
    x: 955,
    y: 250
}

let house1 = {
    x: 90,
    y: 550
}

let house2 = {
    x: 340,
    y: 550
}

let house3 = {
    x: 590,
    y: 550
}

let house4 = {
    x: 840,
    y: 550
}

let house5 = {
    x: 1090,
    y: 550
}

let grass = {
    x: 0,
    y: -578
}

let arrayChildren = [
    child1,
    child2,
    child3,
    child4,
    child5
]

let arrayHouses = [
    house1,
    house2,
    house3,
    house4,
    house5
]

function preload() {
    face_smile1 = loadImage("face_smile1.png");
    face_frown1 = loadImage("face_frown1.png");
    face_with_candy1 = loadImage("face_with_candy1.png");

    face_smile2 = loadImage("face_smile2.png");
    face_frown2 = loadImage("face_frown2.png");
    face_with_candy2 = loadImage("face_with_candy2.png");

    face_smile3 = loadImage("face_smile3.png");
    face_frown3 = loadImage("face_frown3.png");
    face_with_candy3 = loadImage("face_with_candy3.png");

    face_smile4 = loadImage("face_smile4.png");
    face_frown4 = loadImage("face_frown4.png");
    face_with_candy4 = loadImage("face_with_candy4.png");

    face_smile5 = loadImage("face_smile5.png");
    face_frown5 = loadImage("face_frown5.png");
    face_with_candy5 = loadImage("face_with_candy5.png");

    img_house1 = loadImage("house_with_window1.png");
    img_house2 = loadImage("house_with_window2.png");
    img_house3 = loadImage("house_with_window3.png");
    img_house4 = loadImage("house_with_window4.png");
    img_house5 = loadImage("house_with_window5.png");

    img_grass = loadImage("grass-15.png")
    img_sun = loadImage("sun.png")
    img_cloud= loadImage("cloud.png")
}

function setup() {
    createCanvas(1400, 800); // 16: 9
    frameRate(30);
    textSize(30);
}
  

function draw() {

    background(182, 219, 255);

    if (keyIsPressed === true && key == 'm') {
        child1.hasCandy = true;
        child2.hasCandy = true;
        child3.hasCandy = true;
        child4.hasCandy = true;
        child5.hasCandy = true;
    } else {
        child1.hasCandy = false;
        child2.hasCandy = false;
        child3.hasCandy = false;
        child4.hasCandy = false;
        child5.hasCandy = false;
    }

    if (keyIsPressed === true && key == 'n') {
        image(img_sun, -120, -120, 450, 450);
        child1.hasSun = true;
        child2.hasSun = true;
        child3.hasSun = true;
        child4.hasSun = true;
        child5.hasSun = true;
    } else {
        child1.hasSun = false;
        child2.hasSun = false;
        child3.hasSun = false;
        child4.hasSun = false;
        child5.hasSun = false;
    }

    // let fontHairline;
    // function preload() {
    //     fontHairline = loadFont('TestKarbon-Hairline.otf');
    // }

    image(img_cloud, 1000, 80, 300, 150);
    drawGrass(grass);

    textAlign(CENTER, TOP);
    textSize(16);
    // textFont(fontHairline, 14);
    text(introduction, 360, 20, 700, 700);

    text(instruction, 360, 90, 700, 700);

    drawChild1(child1);
    drawChild2(child2);
    drawChild3(child3);
    drawChild4(child4);
    drawChild5(child5);

    drawHouse1(house1);
    drawHouse2(house2);
    drawHouse3(house3);
    drawHouse4(house4);
    drawHouse5(house5);

    checkInsideHouse();

    // if (child1.houseInside == true) {
    //     drawChild1(child1);
    //     drawHouse(house1);
    // } else { 
    //     drawHouse(house1);
    //     drawChild1(child1);
    // }

    // if (child2.houseInside == true) {
    //     drawChild2(child2);
    //     drawHouse(house2);
    // } else {
    //     drawHouse(house2);
    //     drawChild2(child2);
    // }

    // if (child3.houseInside == true) {
    //     drawChild3(child3);
    //     drawHouse(house3);
    // } else {
    //     drawHouse(house3);
    //     drawChild3(child3);
    // }

    // if (child4.houseInside == true) {
    //     drawChild4(child4);
    //     drawHouse(house4);
    // } else {
    //     drawHouse(house4);
    //     drawChild4(child4);
    // }

    // if (child5.houseInside == true) {
    //     drawChild5(child5);
    //     drawHouse(house5);
    // } else {
    //     drawHouse(house5);
    //     drawChild5(child5);
    // }



}



function checkInsideHouse() {
    // for (let i = 0; i < 5; i++) {
    //     for (let j = 0; j < 5; j++) {
    //         abc(arrayChildren[i], arrayHouses[j]);
    //     }
    // }

    // if (
    //     (child1.x + face_size/2) > (house1.x) &&
    //     (child1.x + face_size/2) < (house1.x + house_size) &&
    //     (child1.y + face_size/2) > (house1.y) &&
    //     (child1.y + face_size/2) < (house1.y + house_size)
    // ) {
    //     child1.houseInside = true;
    // } else {
    //     child1.houseInside = false;
    // }

    checkInsideChildHouse(child1, house1);
    checkInsideChildHouse(child2, house2);
    checkInsideChildHouse(child3, house3);
    checkInsideChildHouse(child4, house4);
    checkInsideChildHouse(child5, house5);

    // console.log("Child1 inside: " + child1.houseInside);
    // console.log("Child2 inside: " + child2.houseInside);
    // console.log("Child3 inside: " + child3.houseInside);
    // console.log("Child4 inside: " + child4.houseInside);
    // console.log("Child5 inside: " + child5.houseInside);
}


function checkInsideChildHouse(child, house) {
    if (
        (child.x + face_size/2) > (house.x) &&
        (child.x + face_size/2) < (house.x + house_size) &&
        (child.y + face_size/2) > (house.y) &&
        (child.y + face_size/2) < (house.y + house_size)
    ) {
        child.houseInside = true;
    } else {
        child.houseInside = false;
    }

}



function drawHouse1(house1) {
    image(img_house1, house1.x, house1.y, house_size, house_size);
}

function drawHouse2(house2) {
    image(img_house2, house2.x, house2.y, house_size, house_size);
}

function drawHouse3(house3) {
    image(img_house3, house3.x, house3.y, house_size, house_size);
}

function drawHouse4(house4) {
    image(img_house4, house4.x, house4.y, house_size, house_size);
}

function drawHouse5(house5) {
    image(img_house5, house5.x, house5.y, house_size, house_size);
}

function drawGrass(grass) {
    image(img_grass, grass.x, grass.y, grass_size, grass_size);
}


// function drawChild(child) {
//     if (child.clicked == true) {
//         image(face_smile, child.x, child.y, face_size, face_size);
//     } else {
//         image(face_frown, child.x, child.y, face_size, face_size);
//     }
// }

function drawChild1(child1) {
    if (child1.hasCandy == true) {
        image(face_with_candy1, child1.x, child1.y, face_size, face_size);
    } else if (child1.clicked == true 
        || child1.houseInside == true 
        || child1.hasSun == true) {
        image(face_smile1, child1.x, child1.y, face_size, face_size);
    }  else {
        image(face_frown1, child1.x, child1.y, face_size, face_size);
    }

}

function drawChild2(child2) {
    if (child2.hasCandy == true) {
        image(face_with_candy2, child2.x, child2.y, face_size, face_size);
    } else if (child2.clicked == true 
        || child2.houseInside == true
        || child2.hasSun == true) {
        image(face_smile2, child2.x, child2.y, face_size, face_size);
    } else {
        image(face_frown2, child2.x, child2.y, face_size, face_size);
    }
}

function drawChild3(child3) {
    if (child3.hasCandy == true) {
        image(face_with_candy3, child3.x, child3.y, face_size, face_size);
    } else if (child3.clicked == true 
        || child3.houseInside == true
        || child3.hasSun == true) {
        image(face_smile3, child3.x, child3.y, face_size, face_size);
    }  else {
        image(face_frown3, child3.x, child3.y, face_size, face_size);
    }
}

function drawChild4(child4) {
    if (child4.hasCandy == true) {
        image(face_with_candy4, child4.x, child4.y, face_size, face_size);
    } else if (child4.clicked == true 
        || child4.houseInside == true 
        || child4.hasSun == true) {
        image(face_smile4, child4.x, child4.y, face_size, face_size);
    } else {
        image(face_frown4, child4.x, child4.y, face_size, face_size);
    }
}

function drawChild5(child5) {
    if (child5.hasCandy == true) {
        image(face_with_candy5, child5.x, child5.y, face_size, face_size);
    } else if (child5.clicked == true 
        || child5.houseInside == true
        || child5.hasSun == true) {
        image(face_smile5, child5.x, child5.y, face_size, face_size);
    } else {
        image(face_frown5, child5.x, child5.y, face_size, face_size);
    }
}

function checkInside(child) {
    if (child.x < mouseX 
            && mouseX < (child.x + face_size)
            && child.y < mouseY
            && mouseY < (child.y + face_size)
        ) {
        child.clicked = true;
    } else {
        child.clicked = false;
    }
}

function mousePressed() {
    console.log("mouse:" + mouseX + ", " + mouseY);
    checkInside(child1);
    checkInside(child2);
    checkInside(child3);
    checkInside(child4);
    checkInside(child5);
}

function moveChild(child) {
    if (child.clicked == true) {
        child.x = mouseX;
        child.y = mouseY;
    } 
}

function mouseDragged() {
    moveChild(child1);
    moveChild(child2);
    moveChild(child3);
    moveChild(child4);
    moveChild(child5);
}

function mouseReleased() {
    child1.clicked = false;
    child2.clicked = false;
    child3.clicked = false;
    child4.clicked = false;
    child5.clicked = false;
}

