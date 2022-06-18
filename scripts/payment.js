
function topHeaderSlideShow() {

    let topHeader = document.getElementById("topHeader");

    let arrayLines = [
        "FREE DELIVERY FOR ALL ORDERS NOW",
        "FREE RETURNS",
        "SIGN UP & GET 15% OFF"
    ];

    let x = window.matchMedia("(max-width: 960px)")

    function showTextInHeader(x) {

        if (x.matches) {

            let p = document.createElement("p");
            p.textContent = arrayLines[0];
            p.setAttribute("class", "hearderSlideContent");
            topHeader.append(p);
            let c = 0;

            setInterval(function () {
                if (c == arrayLines.length) {
                    c = 0;
                }
                p.textContent = arrayLines[c];
                c++;

            }, 3000);
        }
    }
    showTextInHeader(x)
    x.addListener(showTextInHeader)
}
topHeaderSlideShow();

let cod = document.getElementById("codBtn");
let card = document.getElementById("cardBtn");
let cardDetails = document.getElementById("showCCOption");
let newCardDet = cardDetails.innerHTML;
let cardBox = document.getElementById("creditOptionBox");

function selectCod() {
    console.log("Working for cod");
    console.log(cardDetails.innerHTML);
    cardDetails.innerHTML = null;
    cardBox.style.height = "10%";
}

function showCredit() {
    console.log("Working for card");
    console.log(newCardDet);
    cardDetails.innerHTML = newCardDet;
    cardBox.style.height = "75%";
}

function checkNumbers(input, specialVal) {
    let inputNum = input.value;
    let flag = true;

    for (let i = 0; i < inputNum.length; i++) {
        if ((inputNum[i] == "0") || (inputNum[i] == "1") || (inputNum[i] == "2") || (inputNum[i] == "3")
            || (inputNum[i] == "4") || (inputNum[i] == "5") || (inputNum[i] == "6") || (inputNum[i] == "7")
            || (inputNum[i] == "8") || (inputNum[i] == "9") || (inputNum[i] == specialVal)) {
            continue;
        }
        else {
            flag = false;
            break;
        }
    }
    return flag;
}

function checkSlash(val) {
    let count = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] == "/") {
            count++;
        }
    }
    if (count == 1) {
        return true;
    }
    else if (count == 0 || count >= 2) {
        console.log(count);
        return false;
    }
}

function checkChar(val) {
    let correctchar = /^[A-Za-z]+$/;
    let charCount = 0;
    let spaceCount = 0;

    for (let i = 0; i < val.length; i++) {
        if (val[i].match(correctchar)) {
            charCount++;
        }
        if (val[i] == " ") {
            spaceCount++;
        }
    }

    if ((charCount != 0 && spaceCount != 0) || (charCount != 0 && spaceCount == 0)) {
        return true;
    }
    else if (charCount == 0 && spaceCount != 0) {
        return false;
    }
}

var cardNum = document.getElementById("cardNumber");
var cardNam = document.getElementById("cardName");
var monYear = document.getElementById("cardDate");
var cvvDet = document.getElementById("cvv");
var correctchar = /^[A-Za-z]+$/;

function payment() {

    if (cod.checked) {
        let interval = setTimeout(function () {
            alert("Your order has been placed succesfully. Happy Shopping!");
            window.location.href = "adidas_home_page.html";
        }, 2000);
    }

    if (card.checked) {

        if (cardNum.value == "" || cardNam.value == "" || monYear.value == "" || cvvDet.value == "") {
            alert("Please fill in all the details");
        }

        else if (cardNum.value.length != 19) {
            alert("Enter valid 16 digit Card Number");
        }

        else if (checkNumbers(cardNum, " ") == false) {
            alert("Enter valid Card number with numbers and spaces");
        }

        else if (checkChar(cardNam.value) == false) {
            alert("Enter valid name");
        }

        else if (monYear.value.length != 5) {
            alert("Enter valid 4 digit Expiry Date");
        }

        else if (checkNumbers(monYear, "/") == false) {
            alert("Enter valid Expiry Date");
        }

        else if (checkSlash(monYear.value) == false) {
            alert("Enter valid Expiry Date");
        }

        else if (cvvDet.value.length != 3) {
            alert("Enter three digit CVV number");
        }

        else {
            let interval = setTimeout(function () {
                alert("Your order has been placed succesfully. Happy Shopping!");
                window.location.href = "adidas_home_page.html";
            }, 2000);
        }

    }

}


let checkoutData = JSON.parse(localStorage.getItem("checkout"));
let key = checkoutData.length - 1;
let ti = checkoutData[key].totalItem;
let tp = checkoutData[key].totalPrice;

document.getElementById("item").textContent = ti + " " + "ITEM";
document.getElementById("delivery").textContent = checkoutData[key].delivery
document.getElementById("totalPrice1").textContent = "₹" + tp + ".00";

document.getElementById("totalPrice2").setAttribute("class", "orderSumTotalPrice");

if (checkoutData[key].delivery != "Free") {

    tp = tp + 50
    document.getElementById("totalPrice2").textContent = "₹" + tp + ".00";
}

else {
    document.getElementById("totalPrice2").textContent = "₹" + tp + ".00";
}


let DAR1 = JSON.parse(localStorage.getItem("DAR"))

let parent = document.getElementById("display")
parent.style = "margin-top :10% ; display :grid;gap :0px"

DAR1.forEach(function (product) {

    let div = document.createElement("div");
    div.setAttribute("class", "productDetails");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "productImgDiv");

    let image = document.createElement("img");
    image.src = product.img[3];
    image.style.width = "100%";

    div1.append(image);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "productDetailsDiv");

    let name = document.createElement("div");
    name.setAttribute("class", "productDetailsDesc");
    name.textContent = product.name;
    name.style.width = "100%";

    let color = document.createElement("div");
    color.setAttribute("class", "productDetailsDesc");
    color.textContent = "COLOR :" + product.color[0];

    let size = document.createElement("div");
    size.setAttribute("class", "productDetailsDesc");
    size.textContent = "SIZE : " + product.size;

    let price = document.createElement("div");
    price.setAttribute("class", "productDetailsDesc");
    price.textContent = "₹" + product.price;

    div2.append(name, color, size, price)

    div.append(div1, div2)

    parent.append(div)

});


let shippingDetails = JSON.parse(localStorage.getItem("shipping"));

console.log(shippingDetails);

function displayShipping() {

    let displayShippingDetails = document.getElementById("displayShippingDetails");

    let h3 = document.createElement("h3");
    h3.textContent = "DELIVERY ADDRESS";

    let name = document.createElement("p");
    name.textContent = shippingDetails[0].firstname + " " + shippingDetails[0].lastname;
    name.style = "font-size: 14px; color: #424242"

    let streetAddress = document.createElement("p");
    streetAddress.textContent = shippingDetails[0].street;
    streetAddress.style = "font-size: 14px; color: #424242"

    let cityAddress = document.createElement("p");
    cityAddress.textContent = shippingDetails[0].city + ", " + shippingDetails[0].state + ", " + shippingDetails[0].pincode;
    cityAddress.style = "font-size: 14px; color: #424242"

    displayShippingDetails.append(h3, name, streetAddress, cityAddress);

    displayShippingDetails.style = "border:1px solid #BDBDBD; margin: 10px 0px; padding: 10px"

}
displayShipping();
