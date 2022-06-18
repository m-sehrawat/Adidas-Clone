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


var reset = document.getElementById("reset");
reset.addEventListener("click", forget);

function forget() {
    window.location.href = "forgetpassword.html";
}

var signinbtn = document.getElementById("signinbtn");
signinbtn.addEventListener("click", signin);

function signin() {
    alert("Please login below");
    // document.getElementById("rename").innerHTML = "** please login here **";
    var el = document.getElementById("el").value;
    if (el == "") {
        document.getElementById("el").style.border = "1px solid red";

    }

}

function signinfun(e) {
    e.preventDefault();
    // let checklogin = document.getElementById("check");
    let myform = document.getElementById("myform");
    let email = myform.el.value;
    let password = myform.pass.value;
    //console.log("data:", name, email, password);
    let all_users = JSON.parse(localStorage.getItem("users"));



    var count = 0;
    for (i = 0; i < all_users.length; i++) {
        if (email === all_users[i].email && password === all_users[i].password) {
            alert("Login successful");
            document.getElementById("checklogin").textContent = "YOU ARE LOGGED IN";
            document.getElementById("rename").innerHTML = "";
            var newname = document.getElementById("el");
            newname.setAttribute("disabled", true);
            var newpass = document.getElementById("pass");
            newpass.setAttribute("disabled", true);
            break;


        } else {
            count++;

        }

    }
    if (count == all_users.length) {
        alert("Invalid users");
    }


}


function review(e1) {
    if (document.getElementById("checklogin").innerHTML !== "YOU ARE LOGGED IN") {
        alert("Please login first");
    }

    if (document.getElementById("checklogin").innerHTML === "YOU ARE LOGGED IN") {
        e1.preventDefault();
        let formone = document.getElementById("myformone");
        //let myformone = document.getElementById("myformone");
        let firstname = formone.fname.value;
        let lastname = formone.lname.value;
        let street = formone.street.value;
        let landmark = formone.landmark.value;
        let additional_info = formone.additional_info.value;
        let city = formone.city.value;
        let state = formone.state.value;
        let pincode = formone.pincode.value;
        let email = formone.email.value;
        let mobile = formone.mobile.value;
        // console.log("review data", firstname, lastname, street, landmark, additional_info, city, state, pincode, email, mobile);
        var correctchar = /^[A-Za-z]+$/;

        if (firstname.length < 3) {
            alert("Please enter correct name");
        } else if (!firstname.match(correctchar)) {
            alert("Please enter correct name");
        } else if (street.length < 2) {
            alert("Please enter valid street");
        } else if (city.length < 3) {
            alert("Please enter city name correctly");
        } else if (!(state === "Andhra Pradesh" || state === "Arunachal Pradesh" || state === "Bihar" || state === "Chhattisgarh" || state === "Goa" || state === "Haryana" ||
            state === "Jammu and Kashmir" || state === "Karnataka" || state === "Madhya Pradesh" || state === "Nagaland")) {
            alert("Please select your state");
        } else if (pincode.length < 6) {
            alert("enter 6 digit pincode");
        } else if (email.search(/[@]/) == -1) {
            alert("Email id contain @ character");



        } else if (email.indexOf('@') <= 0) {
            alert("invalid @ position");

        } else if (email.search(/[.]/) == -1) {
            alert("Email id contain . character");



        } else if (email.charAt(email.length - 4) != '.') {
            alert("invalid dott(.) position in email");

        } else if (mobile.length != 10) {
            alert("enter 10 digit mobile numbers");
        } else {
            if (localStorage.getItem("shipping") === null) {
                localStorage.setItem("shipping", JSON.stringify([]));
            }
            var address = {
                firstname,
                lastname,
                street,
                landmark,
                additional_info,
                city,
                state,
                pincode,
                email,
                mobile
            };
            let cart = JSON.parse(localStorage.getItem("shipping"));
            cart.push(address);
            localStorage.setItem("shipping", JSON.stringify(cart));
            alert("Shipping Address added Succesfully");
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("street").value = "";
            document.getElementById("landmark").value = "";
            document.getElementById("additional_info").value = "";
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
            document.getElementById("pincode").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mobile").value = "";
            window.location.href = "adidas_payment_page.html";
        }
    }

    //console.log(cart);
}


let checkoutData = JSON.parse(localStorage.getItem("checkout"));
let key = checkoutData.length - 1;
let ti = checkoutData[key].totalItem;
let tp = checkoutData[key].totalPrice;
// console.log("checkoutData--", checkoutData)
document.getElementById("item").textContent = ti + " " + "ITEM";
document.getElementById("delivery").textContent = checkoutData[key].delivery
document.getElementById("totalPrice1").textContent = "₹" + tp + ".00";
document.getElementById("totalPrice2").setAttribute("class", "orderSumTotalPrice");
if (checkoutData[key].delivery != "Free") {
    document.getElementById("delivery").textContent = checkoutData[key].delivery
    document.getElementById("totalPrice1").textContent = "₹" + tp;
    document.getElementById("totalPrice2").textContent = "₹" + tp;
} else {
    document.getElementById("totalPrice2").textContent = "₹" + tp;
}

// -----For order Details Part -----
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