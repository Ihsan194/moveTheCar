const car = document.getElementById('carImage');
let carPosition = 50; // Car's starting position (percentage)

const moveCar = (e) => {
    const isRight = e.code === "ArrowRight";
    const isLeft = e.code === "ArrowLeft";

    if (isRight && carPosition < 65) { 
        carPosition += 5;
    }
    if (isLeft && carPosition > 40) { 
        carPosition -= 5;
    }

    car.style.left = carPosition + "%";
};

document.addEventListener('keydown', moveCar);
