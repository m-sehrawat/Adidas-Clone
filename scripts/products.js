import { productData } from "../constants/productData.js";

let data = productData;

let parent = document.getElementById("parent");

let newProductData = [];

let totalProductsCount = document.getElementById("totalProductsCount");
totalProductsCount.textContent = "[" + data.length + "]";

//Product display Function
function showProducts(d) {

    parent.innerHTML = null;

    d.forEach(function (product) {

        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.img[0];

        img.addEventListener("mouseenter", imageswitch);
        function imageswitch() {
            img.src = product.img[1];
        }

        img.addEventListener("mouseleave", imageback);
        function imageback() {
            img.src = product.img[0];
        }

        let price = document.createElement("p");
        price.textContent = "₹ " + product.price + ".00";
        price.setAttribute("class", "priceDisplay");

        let name = document.createElement("p");
        name.textContent = product.name;
        name.setAttribute("class", "nameSection");

        let category = document.createElement("p");
        category.textContent = product.category;
        category.setAttribute("class", "categorySection");


        let color = document.createElement("p");
        color.textContent = product.color.length + " colours";
        color.setAttribute("class", "colorSection");

        box.append(img, price, name, category, color);

        box.onclick = function () {
            productDetails(product)
        }

        parent.append(box);
    });
}
showProducts(data);

if (localStorage.getItem("productDetails") == null) {
    localStorage.setItem("productDetails", JSON.stringify([]));
}

//Local Storage data access Function
function productDetails(p) {

    var productPage = JSON.parse(localStorage.getItem("productDetails"));

    productPage = [];

    productPage.push(p);

    localStorage.setItem("productDetails", JSON.stringify(productPage));

    window.location.href = "adidas_productDescription.html";
}


//Clear Filter Function
// function clearFilter() {
//     delete newProductData;
//     location.reload();
// }

function showSortFilter(arr) {

    let priceFilter = document.getElementById("priceFilter");

    for (let i = 0; i < priceFilter.length; i++) {

        if (priceFilter.value == "low") {

            //Sort Low to High Function
            function sortLH() {
                let array = arr.sort((a, b) => a.price - b.price);
                showProducts(array);
            }
            sortLH();

        } else if (priceFilter.value == "high") {

            //Sort High to Low Function
            function sortHL() {
                let array = arr.sort((a, b) => b.price - a.price);
                showProducts(array);
            }
            sortHL();
        }
    }

}

//Price sort Function
function priceSortFilter() {

    if (newProductData.length != 0) {
        showSortFilter(newProductData);
    }
    else if (newProductData.length == 0) {
        showSortFilter(data);
    }

}

// Gender Filter Function
function showGender() {

    var gender = document.getElementById("genderFilter").value;

    for (let i = 0; i < gender.length; i++) {
        //Step-1: Check if the newProductData array is empty
        if (newProductData.length === 0) {

            if (gender == "men") {
                let genderArrayMen = data.filter(function (element) {
                    return (element.gender == "men");
                });
                newProductData = [...genderArrayMen];
                showProducts(genderArrayMen);
            }

            if (gender == "women") {
                let genderArrayWomen = data.filter(function (element) {
                    newProductData.push(element.gender == "women");
                    return (element.gender == "women");
                });
                newProductData = [...genderArrayWomen];
                showProducts(genderArrayWomen);
            }

            if (gender == "kids") {
                let genderArrayKids = data.filter(function (element) {
                    newProductData.push(element.gender == "kids");
                    return (element.gender == "kids");
                });
                newProductData = [...genderArrayKids];
                showProducts(genderArrayKids);
            }

        } else if (newProductData.length > 0) {

            if (gender == "men") {
                let genderArrayMen = newProductData.filter(function (element) {
                    return (element.gender == "men");
                });
                showProducts(genderArrayMen);
            }

            if (gender == "women") {
                let genderArrayWomen = newProductData.filter(function (element) {
                    return (element.gender == "women");
                });
                showProducts(genderArrayWomen);
            }

            if (gender == "kids") {
                let genderArrayKids = newProductData.filter(function (element) {
                    return (element.gender == "kids");
                });
                showProducts(genderArrayKids);
            }
        }
    }
}

// Division Filter Function
function showDivision() {

    var division = document.getElementById("divisionFilter").value;

    for (let i = 0; i < division.length; i++) {

        if (newProductData.length === 0) {

            if (division == "clothing") {
                let divisionClothing = data.filter(function (element) {
                    return (element.division == "clothing");
                });
                newProductData = [...divisionClothing];
                showProducts(divisionClothing);
            }

            if (division == "shoes") {
                let divisionShoes = data.filter(function (element) {
                    return (element.division == "shoes");
                });
                newProductData = [...divisionShoes];
                showProducts(divisionShoes);
            }

            if (division == "accessories") {
                let divisionAccessories = data.filter(function (element) {
                    return (element.division == "accessories");
                });
                newProductData = [...divisionAccessories];
                showProducts(divisionAccessories);
            }

        } else if (newProductData.length > 0) {

            if (division == "clothing") {
                let divisionClothing = newProductData.filter(function (element) {
                    return (element.division == "clothing");
                });
                showProducts(divisionClothing);
            }

            if (division == "shoes") {
                let divisionShoes = newProductData.filter(function (element) {
                    return (element.division == "shoes");
                });
                showProducts(divisionShoes);
            }

            if (division == "accessories") {
                let divisionAccessories = newProductData.filter(function (element) {
                    return (element.division == "accessories");
                });
                showProducts(divisionAccessories);
            }
        }
    }
}

// Product Type Filter Function
function showProductType() {

    var productType = document.getElementById("productType").value;

    for (let i = 0; i < productType.length; i++) {

        if (newProductData.length === 0) {

            if (productType == "sneakers") {
                let productTypeSneakers = data.filter(function (element) {
                    return (element.productType == "sneakers");
                });
                newProductData = [...productTypeSneakers];
                showProducts(productTypeSneakers);
            }

            if (productType == "football") {
                let productTypeFootball = data.filter(function (element) {
                    return (element.productType == "football");
                });
                newProductData = [...productTypeFootball];
                showProducts(productTypeFootball);
            }

            if (productType == "sportsShoes") {
                let productTypeSportsShoes = data.filter(function (element) {
                    return (element.productType == "sportsShoes");
                });
                newProductData = [...productTypeSportsShoes];
                showProducts(productTypeSportsShoes);
            }

            if (productType == "Tshirts") {
                let productTypeTshirts = data.filter(function (element) {
                    return (element.productType == "Tshirts");
                });
                newProductData = [...productTypeTshirts];
                showProducts(productTypeTshirts);
            }

            if (productType == "sportsWear") {
                let productTypeSportsWear = data.filter(function (element) {
                    return (element.productType == "sportsWear");
                });
                newProductData = [...productTypeSportsWear];
                showProducts(productTypeSportsWear);
            }

        } else if (newProductData.length > 0) {

            if (productType == "sneakers") {
                let productTypeSneakers = newProductData.filter(function (element) {
                    return (element.productType == "sneakers");
                });
                showProducts(productTypeSneakers);
            }

            if (productType == "football") {
                let productTypeFootball = newProductData.filter(function (element) {
                    return (element.productType == "football");
                });
                showProducts(productTypeFootball);
            }

            if (productType == "sportsShoes") {
                let productTypeSportsShoes = newProductData.filter(function (element) {
                    return (element.productType == "sportsShoes");
                });
                showProducts(productTypeSportsShoes);
            }

            if (productType == "Tshirts") {
                let productTypeTshirts = newProductData.filter(function (element) {
                    return (element.productType == "Tshirts");
                });
                showProducts(productTypeTshirts);
            }

            if (productType == "sportsWear") {
                let productTypeSportsWear = newProductData.filter(function (element) {
                    return (element.productType == "sportsWear");
                });
                showProducts(productTypeSportsWear);
            }
        }
    }
}


// Brand Filter Function
function showBrand() {

    var brand = document.getElementById("brand").value;

    for (let i = 0; i < brand.length; i++) {

        if (newProductData.length === 0) {

            if (brand == "performance") {
                let brandPerformance = data.filter(function (element) {
                    return (element.brand == "performance");
                });
                newProductData = [...brandPerformance];
                showProducts(brandPerformance);
            }

            if (brand == "originals") {
                let brandOriginals = data.filter(function (element) {
                    return (element.brand == "originals");
                });
                newProductData = [...brandOriginals];
                showProducts(brandOriginals);
            }

            if (brand == "sportsInspired") {
                let brandSportsInspired = data.filter(function (element) {
                    return (element.brand == "sportsInspired");
                });
                newProductData = [...brandSportsInspired];
                showProducts(brandSportsInspired);
            }

            if (brand == "sportsWear") {
                let brandSportsWear = data.filter(function (element) {
                    return (element.brand == "sportsWear");
                });
                newProductData = [...brandSportsWear];
                showProducts(brandSportsWear);
            }

        } else if (newProductData.length > 0) {

            if (brand == "performance") {
                let brandPerformance = newProductData.filter(function (element) {
                    return (element.brand == "performance");
                });
                showProducts(brandPerformance);
            }

            if (brand == "originals") {
                let brandOriginals = newProductData.filter(function (element) {
                    return (element.brand == "originals");
                });
                showProducts(brandOriginals);
            }

            if (brand == "sportsInspired") {
                let brandSportsInspired = newProductData.filter(function (element) {
                    return (element.brand == "sportsInspired");
                });
                showProducts(brandSportsInspired);
            }

            if (brand == "sportsWear") {
                let brandSportsWear = newProductData.filter(function (element) {
                    return (element.brand == "sportsWear");
                });
                showProducts(brandSportsWear);
            }

        }
    }
}

// Collection Filter Function
function showCollection() {

    var collection = document.getElementById("collection").value;

    for (let i = 0; i < collection.length; i++) {

        if (newProductData.length === 0) {

            if (collection == "clima") {
                let collectionClima = data.filter(function (element) {
                    return (element.collection == "clima");
                });
                newProductData = [...collectionClima];
                showProducts(collectionClima);
            }

            if (collection == "adicolor") {
                let collectionAdicolor = data.filter(function (element) {
                    return (element.collection == "adicolor");
                });
                newProductData = [...collectionAdicolor];
                showProducts(collectionAdicolor);
            }

            if (collection == "ultraBoost") {
                let collectionUltraBoost = data.filter(function (element) {
                    return (element.collection == "ultraBoost");
                });
                newProductData = [...collectionUltraBoost];
                showProducts(collectionUltraBoost);
            }

            if (collection == "superNova") {
                let collectionSuperNova = data.filter(function (element) {
                    return (element.collection == "superNova");
                });
                newProductData = [...collectionSuperNova];
                showProducts(collectionSuperNova);
            }

        } else if (newProductData.length > 0) {

            if (collection == "clima") {
                let collectionClima = newProductData.filter(function (element) {
                    return (element.collection == "clima");
                });
                showProducts(collectionClima);
            }

            if (collection == "adicolor") {
                let collectionAdicolor = newProductData.filter(function (element) {
                    return (element.collection == "adicolor");
                });
                showProducts(collectionAdicolor);
            }

            if (collection == "ultraBoost") {
                let collectionUltraBoost = newProductData.filter(function (element) {
                    return (element.collection == "ultraBoost");
                });
                showProducts(collectionUltraBoost);
            }

            if (collection == "superNova") {
                let collectionSuperNova = newProductData.filter(function (element) {
                    return (element.collection == "superNova");
                });
                showProducts(collectionSuperNova);
            }
        }
    }
}

//Sustainability Filter Function
function showSustainability() {

    var sustainability = document.getElementById("sustainability").value;

    for (let i = 0; i < sustainability.length; i++) {

        if (newProductData.length === 0) {

            if (sustainability == "sustainable") {
                let sustainabilitySustainable = data.filter(function (element) {
                    return (element.sustainability == "sustainable");
                });
                newProductData = [...sustainabilitySustainable];
                showProducts(sustainabilitySustainable);
            }

            if (sustainability == "vegan") {
                let sustainabilityVegan = data.filter(function (element) {
                    return (element.sustainability == "vegan");
                });
                newProductData = [...sustainabilityVegan];
                showProducts(sustainabilityVegan);
            }

            if (sustainability == "organicCotton") {
                let sustainabilityOrganicCotton = data.filter(function (element) {
                    return (element.sustainability == "organicCotton");
                });
                newProductData = [...sustainabilityOrganicCotton];
                showProducts(sustainabilityOrganicCotton);
            }

            if (sustainability == "colorWithCare") {
                let sustainabilityColorWithCare = data.filter(function (element) {
                    return (element.sustainability == "colorWithCare");
                });
                newProductData = [...sustainabilityColorWithCare];
                showProducts(sustainabilityColorWithCare);
            }

        } else if (newProductData.length > 0) {

            if (sustainability == "sustainable") {
                let sustainabilitySustainable = newProductData.filter(function (element) {
                    return (element.sustainability == "sustainable");
                });
                showProducts(sustainabilitySustainable);
            }

            if (sustainability == "vegan") {
                let sustainabilityVegan = newProductData.filter(function (element) {
                    return (element.sustainability == "vegan");
                });
                showProducts(sustainabilityVegan);
            }

            if (sustainability == "organicCotton") {
                let sustainabilityOrganicCotton = newProductData.filter(function (element) {
                    return (element.sustainability == "organicCotton");
                });
                showProducts(sustainabilityOrganicCotton);
            }

            if (sustainability == "colorWithCare") {
                let sustainabilityColorWithCare = newProductData.filter(function (element) {
                    return (element.sustainability == "colorWithCare");
                });
                showProducts(sustainabilityColorWithCare);
            }
        }
    }
}

//Top Header slide show function
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