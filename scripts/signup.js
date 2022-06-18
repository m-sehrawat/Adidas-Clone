function signup(e) {
    e.preventDefault();

    let myform = document.getElementById("myform");
    let name = myform.n.value;
    let email = myform.e.value;
    let mobile = myform.m.value;
    let password = myform.p.value;
    //console.log("data:", name, email, password);
    var correctchar = /^[A-Za-z]+$/;

    //  var indexwithat = email.indexOf("@");
    // var indexwithdott = email.lastIndexOf(".");
    if (name.length < 3) {
        alert("Please enter your name correctly");
    } else if (!name.match(correctchar)) {
        alert("Please enter correct name");
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



    } else if (password.length < 8) {
        alert("enter 8 length of password ");



    } else if (password.search(/[0-9]/) == -1) {
        alert("password contain alteast one number");



    } else if (password.search(/[a-z]/) == -1) {
        alert("password contain alteast one lower case character");



    } else if (password.search(/[A-Z]/) == -1) {
        alert("password contain alteast one UPPER CASE case character");



    } else if (password.search(/[!\@\#\%\^\&\(\)\_\+\.\,\:\;]/) == -1) {
        alert("password contain alteast one special character");



    } else {
        if (localStorage.getItem('users') === null) {

            localStorage.setItem("users", JSON.stringify([]))
        }
        var user = {
            name,
            email,
            mobile,
            password
        };
        let arr = JSON.parse(localStorage.getItem("users"));
        arr.push(user);
        localStorage.setItem("users", JSON.stringify(arr));
        // window.location.href = "adidas_checkOutPage.html";
        alert("Registered successfully");
        window.location.href = "adidas_checkOutPage.html";
        // window.location.href = "shippinglogin.html";
        document.getElementById("n").value = "";
        document.getElementById("e").value = "";
        document.getElementById("m").value = "";
        document.getElementById("p").value = "";
    }
}
