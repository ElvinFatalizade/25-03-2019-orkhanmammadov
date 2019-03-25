/*var age = 16;
var city = "Baku";
var isMarried = true;

var capital = "",
    price = 0;

var age2 = 24;

if (age >= 18) {
    console.log("Kece biler");
} else {
    console.log("Kece bilmez");
}

var examResult = 62;

if (examResult <= 40) {
    console.log("kesildiniz");
} else if (examResult >= 41 && examResult <= 60) {
    console.log("cc");
} else if (examResult >= 61 && examResult <= 80) {
    console.log("bb");
} else {
    console.log("aa");
}

var season = -12;

switch (season) {
    case 1: //season==1
        console.log("dekabr,yanvar,fevral");
        break;
    case 2:
        console.log("mart,aprel,may");
        break;
    case 3:
        console.log("iyun,iyul,avgust");
        break;
    case 4:
        console.log("sen,okt,nov");
        break;
    default:
        console.log("fesili duzgun yazin");
        break;
}*/


// var price = 49,
//     change = -10;

// if (change < 0) {
//     change *= -1;
//     var resultPrice = price - (price * change / 100);

//     console.log(resultPrice);
// } else {
//     var resultPrice = price + (price * change / 100);

//     console.log(resultPrice);
// }

function isNumber(value) {
    if (typeof (value) == 'number') {
        return true;
    }

    return false;
}


function calcPriceChange(price, change) {
    if (!isNumber(price)) {
        return false;
    }

    if (!isNumber(change)) {
        return false;
    }

    if (change < 0) {
        change *= -1;
        return price - (price * change / 100);
    }

    return price + (price * change / 100);
}

var price1 = calcPriceChange(49, -10);

// console.log(price1);

var price2 = calcPriceChange(80, 10);

// console.log(price2);
var price6 = calcPriceChange(100, -5);