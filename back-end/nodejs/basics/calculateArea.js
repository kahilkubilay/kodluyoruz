const r = process.argv.slice(2) * 1
const pi = 3.14

const calculateCircleArea = (radius) => {
    return parseFloat((pi * radius * radius).toFixed(2))
}

let area = calculateCircleArea(r)

console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)