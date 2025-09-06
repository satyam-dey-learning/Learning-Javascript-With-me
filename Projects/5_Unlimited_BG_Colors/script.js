// Generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

const startChangingColor = function () {
    document.body.style.backgroundColor = randomColor()
}

let colorChange;

document.querySelector("#start").addEventListener("click", function () {
    if(!colorChange){
        colorChange = setInterval(startChangingColor,1000)
    }
});

document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(colorChange);
    console.log("Stopped");
    colorChange = null;
});
