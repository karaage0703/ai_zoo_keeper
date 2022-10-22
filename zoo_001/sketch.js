const images = [];
const position_x = [];
const position_y = [];
let count = 0;
let step = 20;
let fps = 4;

function preload() {
    table = loadTable('./images/info.csv', 'csv');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(fps);
    print(table.getRowCount() + ' total rows in table');

    background = loadImage('./nature_background.png');
    image(background, 0, 0, width, height);

    // load images
    for (let i = 0; i < table.getRowCount() ; i++) {
        images[i] = [];
        for (let j = 0; j < 4 ; j++) {
            const imageName = './images/' + table.get(i, 0) + '_' + nf(j, 1) + '.png';
            print(imageName)
            images[i][j] = loadImage(imageName);
        }
        position_x[i] = random(width);
        position_y[i] = random(height);
    }
    // print(images);
}

function draw() {
    count++;

    if (count > 3) {
        count = 0
    }

    clear();
    image(background, 0, 0, width, height);
    for (let i = 0; i < table.getRowCount() ; i++) {
        // image(images[i][count], position_x[i], position_y[i], 64, 64);
        image(images[i][count], position_x[i], position_y[i], width/10, width/10);
        position_x[i] += random(width/step) - width/step/2
        position_y[i] += random(height/step) - height/step/2
        if (position_x[i] < 0){
            position_x[i] += width
        }
        if (position_x[i] > width){
            position_x[i] -= width
        }

        if (position_y[i] < 0){
            position_y[i] += height
        }
        if (position_y[i] > height){
            position_y[i] -= height
        }
    }
}
