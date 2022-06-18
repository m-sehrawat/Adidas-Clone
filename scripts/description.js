

var productDescriptionContainer = document.getElementById("productDescription");
var imageBoxContainer = document.getElementById("imageBox");
var descriptionBoxContainer = document.getElementById("descriptionBox");
var specificationBoxContainer = document.getElementById("specificationBox");

var productDescriptionArr = JSON.parse(localStorage.getItem("productDetails"));

function showProducts(d) {

    d.forEach(function (product) {
        // empty the container
        productDescriptionContainer.innerHTML = null;
        imageBoxContainer.innerHTML = null;
        descriptionBoxContainer.innerHTML = null;
        specificationBoxContainer.innerHTML = null;

        // product image details
        var imgOne = document.createElement("img");
        imgOne.src = product.img[0];
        imgOne.setAttribute("class", "productImg");
        imageBoxContainer.append(imgOne);

        var imgNavBtnDiv = document.createElement("div");
        imgNavBtnDiv.setAttribute("class", "imgNavigationBtns");

        var prevBtn = document.createElement("div");
        // prevBtn.textContent = "Prev";
        prevBtn.setAttribute("class", "prev");
        prevBtn.onclick = function () {
            showPrevImg(product, imgOne);
        }

        var nextBtn = document.createElement("div");
        // nextBtn.textContent = "Next";
        nextBtn.setAttribute("class", "next");
        nextBtn.onclick = function () {
            showNextImg(product, imgOne);
        }

        imgNavBtnDiv.append(prevBtn, nextBtn);

        //previous and next button icons
        var prevBtnIcon = document.createElement("img");
        prevBtnIcon.src = "https://cdn-icons-png.flaticon.com/512/507/507257.png";
        prevBtnIcon.setAttribute("class", "BtnIcon");

        prevBtn.append(prevBtnIcon);

        var nextBtnIcon = document.createElement("img");
        nextBtnIcon.src = "https://cdn-icons-png.flaticon.com/512/271/271226.png";
        nextBtnIcon.setAttribute("class", "BtnIcon");

        nextBtn.append(nextBtnIcon);

        //product description Box - heading
        var productHeading = document.createElement("div");
        productHeading.textContent = product.name;
        productHeading.setAttribute("class", "productHeading");
        //product description Box - color details
        var productColor = document.createElement("div");
        productColor.textContent = product.color;
        productColor.setAttribute("class", "productColors");
        //product description Box - price details
        var productPrice = document.createElement("div");
        productPrice.textContent = "₹ " + product.price + ".00";
        productPrice.setAttribute("class", "productPrice");
        //product description Box - size label
        var priceLabel = document.createElement("div");
        priceLabel.textContent = "(Inclusive of all taxes)";
        priceLabel.setAttribute("class", "productPriceLabel");
        //product description Box - size details
        var productSizeBtnLabel = document.createElement("div");
        productSizeBtnLabel.textContent = "Select size";
        productSizeBtnLabel.setAttribute("class", "sizeLabel");
        //product description Box - size button
        var productSizeBtnOne = document.createElement("button");
        productSizeBtnOne.setAttribute("class", "sizeButton");
        productSizeBtnOne.style.marginLeft = "5%";
        productSizeBtnOne.textContent = product.size[0];
        productSizeBtnOne.onclick = function () {
            selectSize(productSizeBtnOne, productSizeBtnTwo,
                productSizeBtnThree, productSizeBtnFour);
        }
        //product description Box - size button
        var productSizeBtnTwo = document.createElement("button");
        productSizeBtnTwo.setAttribute("class", "sizeButton");
        productSizeBtnTwo.textContent = product.size[1];
        productSizeBtnTwo.onclick = function () {
            selectSize(productSizeBtnTwo, productSizeBtnOne,
                productSizeBtnThree, productSizeBtnFour);
        }
        //product description Box - size button
        var productSizeBtnThree = document.createElement("button");
        productSizeBtnThree.setAttribute("class", "sizeButton");
        productSizeBtnThree.textContent = product.size[2];
        productSizeBtnThree.onclick = function () {
            selectSize(productSizeBtnThree, productSizeBtnOne,
                productSizeBtnTwo, productSizeBtnFour);
        }
        //product description Box - size button
        var productSizeBtnFour = document.createElement("button");
        productSizeBtnFour.setAttribute("class", "sizeButton");
        productSizeBtnFour.textContent = product.size[3];
        productSizeBtnFour.onclick = function () {
            selectSize(productSizeBtnFour, productSizeBtnOne,
                productSizeBtnTwo, productSizeBtnThree);
        }
        var sizeError = document.createElement("div");
        sizeError.textContent = "Please select your size";
        sizeError.setAttribute("class", "sizeerror");
        //product description Box - Add to cart
        var productAddtoCartBtn = document.createElement("button");
        productAddtoCartBtn.textContent = "ADD TO BAG";
        productAddtoCartBtn.setAttribute("class", "addtoCartBtn");
        productAddtoCartBtn.onclick = function () {
            addtocart(product, sizeError);
        }
        //product description Box - Buy now
        var productBuyNowBtn = document.createElement("button");
        productBuyNowBtn.textContent = "BUY NOW";
        productBuyNowBtn.setAttribute("class", "addtoCartBtn");
        productBuyNowBtn.style.marginTop = "15px";
        productBuyNowBtn.onclick = function () {
            buyNow(sizeError);
        }
        //product description Box - Add to cart details
        var shippingDetail = document.createElement("div");
        shippingDetail.textContent = "FREE SHIPPING FOR ALL ORDERS";
        shippingDetail.setAttribute("class", "shippingDet");
        //product description Box - Add to cart details
        var returnDetail = document.createElement("div");
        returnDetail.textContent = "FREE RETURNS";
        returnDetail.setAttribute("class", "shippingDet");
        returnDetail.style.marginTop = "10px";

        descriptionBoxContainer.append(productHeading, productColor,
            productPrice, priceLabel, productSizeBtnLabel, productSizeBtnOne, productSizeBtnTwo, productSizeBtnThree,
            productSizeBtnFour, sizeError, productAddtoCartBtn, productBuyNowBtn, shippingDetail, returnDetail);
        //specification box - specification heading
        var specificationHeading = document.createElement("ul");
        specificationHeading.textContent = "SPECIFICATIONS";
        specificationHeading.setAttribute("class", "specHeading");
        //specification box - specification lists
        var specificationOne = document.createElement("li");
        specificationOne.setAttribute("class", "specLists");
        specificationOne.textContent = product.specifications[0];
        //specification box - specification lists
        var specificationTwo = document.createElement("li");
        specificationTwo.setAttribute("class", "specLists");
        specificationTwo.textContent = product.specifications[1];
        //specification box - specification lists
        var specificationThree = document.createElement("li");
        specificationThree.setAttribute("class", "specLists");
        specificationThree.textContent = product.specifications[2];
        //specification box - specification lists
        var specificationFour = document.createElement("li");
        specificationFour.setAttribute("class", "specLists");
        specificationFour.textContent = product.specifications[3];
        //specification box - specification table
        var specificationTable = document.createElement("table");
        specificationTable.setAttribute("class", "tableDet");
        //specification box - specification table row 1
        var specificationRowOne = document.createElement("tr");

        var specificationRowOnetd1 = document.createElement("td");
        specificationRowOnetd1.setAttribute("class", "tablerows");
        specificationRowOnetd1.style.backgroundColor = "black";
        specificationRowOnetd1.style.color = "white";

        specificationRowOnetd1.textContent = product.details[0];

        var specificationRowOnetd2 = document.createElement("td");
        specificationRowOnetd2.setAttribute("class", "tablerows");
        specificationRowOnetd2.style.backgroundColor = "black";
        specificationRowOnetd2.style.color = "white";
        specificationRowOnetd2.textContent = product.details[1];

        specificationRowOne.append(specificationRowOnetd1, specificationRowOnetd2);
        //specification box - specification table row 1
        var specificationRowTwo = document.createElement("tr");

        var specificationRowTwotd1 = document.createElement("td");
        specificationRowTwotd1.setAttribute("class", "tablerows");
        specificationRowTwotd1.textContent = product.details[2];

        var specificationRowTwotd2 = document.createElement("td");
        specificationRowTwotd2.setAttribute("class", "tablerows");
        specificationRowTwotd2.textContent = product.details[3];

        specificationRowTwo.append(specificationRowTwotd1, specificationRowTwotd2);
        //specification box - specification table row 1
        var specificationRowThree = document.createElement("tr");

        var specificationRowThreetd1 = document.createElement("td");
        specificationRowThreetd1.setAttribute("class", "tablerows");
        specificationRowThreetd1.textContent = product.details[4];

        var specificationRowThreetd2 = document.createElement("td");
        specificationRowThreetd2.setAttribute("class", "tablerows");
        specificationRowThreetd2.textContent = product.details[5];

        specificationRowThree.append(specificationRowThreetd1, specificationRowThreetd2);
        //specification box - specification table row 1
        var specificationRowFour = document.createElement("tr");

        var specificationRowFourtd1 = document.createElement("td");
        specificationRowFourtd1.setAttribute("class", "tablerows");
        specificationRowFourtd1.textContent = product.details[6];

        var specificationRowFourtd2 = document.createElement("td");
        specificationRowFourtd2.setAttribute("class", "tablerows");
        specificationRowFourtd2.textContent = product.details[7];

        specificationRowFour.append(specificationRowFourtd1, specificationRowFourtd2);
        specificationTable.append(specificationRowOne, specificationRowTwo, specificationRowThree, specificationRowFour);

        specificationBoxContainer.append(specificationHeading, specificationOne, specificationTwo, specificationThree, specificationFour, specificationTable);

        productDescriptionContainer.append(imgNavBtnDiv, imageBoxContainer, descriptionBoxContainer, specificationBoxContainer);

    });
}

showProducts(productDescriptionArr);

//select size function
var btnCount = 0;
function selectSize(p, a, b, c) {

    p.setAttribute("class", "sizeButtonClicked");
    a.setAttribute("class", "sizeButton");
    b.setAttribute("class", "sizeButton");
    c.setAttribute("class", "sizeButton");

    var sizeArr = productDescriptionArr.filter(function (el) {
        // if(el.size == p.textContent){
        el.size = p.textContent;
        // console.log(el.size);
        btnCount++;
        // }
    });

    showProducts(sizeArr);
}

//add to cart function
if (localStorage.getItem("adidasCart") === null) {
    localStorage.setItem("adidasCart", JSON.stringify([]));
}

function addtocart(p, s) {

    if (btnCount == 0) {
        s.style.color = "red";
    }

    let flag = true;
    var arrProducts = JSON.parse(localStorage.getItem("adidasCart"));

    if (arrProducts.length == 0 && btnCount > 0) {
        arrProducts.push(p);
        alert("Your Product has been succesfully added to Cart.");
        localStorage.setItem("adidasCart", JSON.stringify(arrProducts));
    }

    else if (arrProducts.length > 0 && btnCount > 0) {

        for (let i = 0; i < arrProducts.length; i++) {
            if (arrProducts[i].name == p.name) {
                flag = false;
                break;
            }
        }

        if (flag == false) {
            alert("The product is already added to Cart.");
        }
        else {
            arrProducts.push(p);
            alert("Your Product has been succesfully added to Cart.");
            localStorage.setItem("adidasCart", JSON.stringify(arrProducts));
        }

    }

}

function buyNow(s) {

    if (btnCount == 0) {
        s.style.color = "red";
    }

    if (btnCount > 0) {
        window.location.href = "Newcart.html";
    }

}

var imgIndCount = 1;

function showNextImg(product, img) {

    if (imgIndCount == product.img.length) {
        imgIndCount = 1;
    }

    img.src = product.img[imgIndCount];
    imgIndCount++;
}

function showPrevImg(product, img) {

    if (imgIndCount < 1) {
        imgIndCount = 1;
    }

    imgIndCount--;
    img.src = product.img[imgIndCount];

}
