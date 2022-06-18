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

function showMen() {
    window.location.href = "product_men.html";
}

function showWomen() {
    window.location.href = "product_women.html";
}

function showKids() {
    window.location.href = "product_kids.html";
}