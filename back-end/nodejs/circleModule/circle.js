const circleArea = (radius) => {
    let pi = 3.14;

    return parseFloat((pi * radius * radius).toFixed(2))
}

const circleCircumference = (radius) => {
    let pi = 3.14;

    return parseFloat((2 * pi * radius).toFixed(2));
}

export {
    circleArea, 
    circleCircumference
}