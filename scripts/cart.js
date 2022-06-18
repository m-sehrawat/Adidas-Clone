
//Top Header slide show function


// -------- Main Body part -----

let data = JSON.parse(localStorage.getItem("adidasCart"))


let PromoCode = [{ pc: "masai30", discount: "30" }, { pc: "fw12", discount: "20" }]

let parent = document.getElementById("display")
var tp = 0;
var ti = 0;
var dl = null;
//   ------ Appending items From Bag -----

function showProducts(d) {

    parent.innerHTML = null

    d.forEach(function (product) {

        let div = document.createElement("div")
        div.setAttribute("id", "Boxdiv")
        div.style = "display : flex ; gap : 3%;border:1px solid rgb(80, 80, 80) ;height :218px; border-radius: 2px;width:100%"


        let div1 = document.createElement("div")
        div1.setAttribute("id", "Imgdiv")
        div1.style = "box-sizing: border-box;width:300px;height:auto;border:1px "

        let div2 = document.createElement("div")
        div2.style = "box-sizing: border-box;width:100%;display:grid;overflow:hidden;padding-bottom: 30px;"

        div2.setAttribute("id", "descip")
        let div3 = document.createElement("div")
        div3.style = "display : flex; gap :5px;box-sizing: border-box;width : 100%; border:1px "
        let div4 = document.createElement("div")

        div4.setAttribute("id", "quantityBox")
        let div5 = document.createElement("div")
        div5.style = "box-sizing: border-box"
        let div6 = document.createElement("div")

        let div7 = document.createElement("div")
        let div8 = document.createElement("div")
        let btn = document.createElement("p")
        btn.textContent = "×";
        btn.setAttribute("class", "btnr");
        // btn.style = "text-align:center;font-size : 40px ; height:35px ;border:1px solid white;margin-top:0px;border-radius:5px"



        div6.style = " box-sizing: border-box; display:flex;gap:3%;flex-grow: 1;margin-right:10px ;margin :10px"
        div7.style = "box-sizing: border-box;border:1px;margin-right:2%"
        div8.style = "font-size:20px;border:1px ;flex-grow: 3;text-align: right;margin-right:4%"


        let image = document.createElement("img")
        image.src = product.img[0]
        image.setAttribute("id", "imageProduct")
        image.style = "height:100%;width:100% "

        div1.append(image)

        let name = document.createElement("p")
        let color = document.createElement("p")
        let size = document.createElement("p")
        let stock = document.createElement("p")
        let price = document.createElement("p")
        price.setAttribute("id", "div8pp")

        let totalPrice1 = document.getElementById("totalPrice1")
        stock.style = "font-weight: bold;font-size:20px"


        let icon2 = document.createElement("p")

        icon2.style = "text-align:center;font-size : 35px ; height:40px ;border:1px ;margin-top:-25px;"
        icon2.textContent = "♡"


        name.textContent = product.name
        name.style = "font-weight:bold"
        color.textContent = product.color
        size.textContent = "SIZE :" + product.size
        stock.textContent = product.stock
        price.textContent = "₹" + product.price + ".00"


        tp = tp + Number(product.price)
        ti = data.length

        totalPrice1.textContent = " ₹" + tp + ".00"


        div4.style = "width:50%;border:1px;margin-bottom :30px"
        let quan = document.createElement("input")
        let quantityText = document.createElement("p")
        quantityText.textContent = "QUANTITY : 1"

        div4.append(quantityText)


        if (tp <= 100 && tp > 0) {

            let delivery = document.getElementById("delivery")

            delivery.textContent = "₹" + 50 + ".00"
            dl = "50"
            tp = tp + 50


            let totalItem = document.getElementById("totalItem")
            let totalPrice = document.getElementById("totalPrice")

            let totalPrice2 = document.getElementById("totalPrice2")

            totalPrice1.style = "font-weight: bold;"
            totalPrice2.style = "font-weight: bold;"

            totalPrice.textContent = "TOTAL (" + ti + "item) " + "₹" + tp + ".00"
            totalItem.textContent = ti + " Items"

            totalPrice2.textContent = " ₹" + tp + ".00"



        }

        else {

            let delivery = document.getElementById("delivery")

            delivery.textContent = "Free"
            dl = "Free"


            let totalItem = document.getElementById("totalItem")
            let totalPrice = document.getElementById("totalPrice")
            let totalPrice1 = document.getElementById("totalPrice1")
            let totalPrice2 = document.getElementById("totalPrice2")

            totalPrice1.style = "font-weight: bold;"
            totalPrice2.style = "font-weight: bold;"

            totalPrice.textContent = "TOTAL (" + ti + "item) " + "₹" + tp + ".00"
            totalItem.textContent = ti + " Items"
            totalPrice1.textContent = tp + ".00"
            totalPrice2.textContent = tp + ".00"

        }



        btn.onclick = function () {
            remove1(product)
        }


        div8.append(price)
        div7.append(btn, icon2)
        div5.append(name, color, size, stock)
        div6.append(div8, div7)
        div3.append(div5, div6)
        div2.append(div3, div4)

        div.append(div1, div2)

        parent.append(div)

    })
}

showProducts(data)



//  ------ Promocode Function ----
let count = 0;
let tp2 = tp;
function promo(e) {
    e.preventDefault()


    if (data.length > 0) {


        let promocodeForm = document.getElementById("promocodeForm")
        let promocode = promocodeForm.promoCodebtn.value


        PromoCode.forEach(function (p) {

            if (count == 0) {

                if (p.pc === promocode) {

                    count++

                    let tp1 = tp - tp * Number(p.discount) / 100

                    let totalPrice = document.getElementById("totalPrice")
                    let totalPrice1 = document.getElementById("totalPrice1")
                    let totalPrice2 = document.getElementById("totalPrice2")

                    totalPrice.textContent = "TOTAL (" + ti + "item) " + "₹" + tp1


                    if (tp >= 3050) {

                        totalPrice1.textContent = " ₹" + tp
                    }

                    else {


                        totalPrice1.textContent = " ₹" + tp
                    }
                    totalPrice1.textContent = " ₹" + tp
                    totalPrice2.textContent = "(Promo Code Applied)" + " ₹" + tp1

                    if (count == 1) {
                        alert("Promo Code Applied Successfully!")
                    }

                    else {

                    }


                    tp2 = tp1
                    return

                }
            }
        })


        if (count == 0) {
            alert("Invalid promocode or Already applied")

        }

        else if (count > 1) {
            alert("Promo Code Already Applied ")
        }

    }

    else {
        alert("No item In Bag")
    }

}

// ---- On checkout click ----
function checkOut() {


    if (JSON.parse(localStorage.getItem("checkout") === null)) {

        localStorage.setItem("checkout", JSON.stringify([]))
    }

    let arr = JSON.parse(localStorage.getItem("checkout"))



    let checkoutData = { totalPrice: tp2, totalItem: ti, delivery: dl }

    if (data.length != 0) {
        arr.push(checkoutData)

        localStorage.setItem("checkout", JSON.stringify(arr))

        window.location.href = "adidas_checkOutPage.html"

    }

    else {
        alert("Add Something to Bag!")
    }



    let DataAfterRemove = []

    for (j = 0; j < data.length; j++) {


        DataAfterRemove.push(data[j])

    }

    localStorage.setItem("DAR", JSON.stringify(DataAfterRemove))

}

// ---- On Removing item -----


function remove1(p) {


    for (i = 0; i < data.length; i++) {
        if (data[i].name === p.name) {
            data.splice(i, 1)
            localStorage.setItem("adidasCart", JSON.stringify(data))
            window.location.reload()

            let DataAfterRemove = []

            for (j = 0; j < data.length; j++) {


                DataAfterRemove.push(data[j])

            }

            localStorage.setItem("DAR", JSON.stringify(DataAfterRemove))


            ti = 0;
            tp = 0;
            console.log("NewData after remove ", data)


            return
        }
    }

}

if (data.length == 0) {

    parent.style = "font-weight: bold;box-shadow: 10px 5px 5px grey;"

    parent.textContent = "YOUR BAG IS EMPTY!"
}




function freeDelivery() {
    alert("FREE DELIVERYEnjoy free delivery with no minimum spend.")
}

function returns() {
    alert("30 DAY FREE RETURNSNot the right size or colour? No problem! Returns are free & easy within 30 days of receiving your order.Check out our Return Policy for more details.")
}

function safeSecure() {
    alert("SAFE & SECURE PAYMENT OPTIONSPay with confidence - we use an advanced payment security method to ensure maximum safety. We accept the following payment methods in the online shop: Visa, Mastercard, RuPay, Cash on delivery. ")
}


function deliveryonRight() {
    alert("DELIVERYadidas.co.in can only ship to India.Standard deliveryCost = For all orders, shipping is offered for free.Delivery time = 3 - 4 business daysPublic holidaysOrders placed on or 1 day before a public holiday may take longer to be delivered.So, please expect additional delivery time.")
}

function returnonRight() {
    alert("RETURN INFORMATIONJust in case you change your mind once your order arrives, we’ve got your back.It’s easy to return all standard items for a full refund within 30 days of delivery. Please note – Personalised products are unique to you, and therefore cannot be returned.")
}

function orderonRight() {
    alert("ORDERING & PAYMENT INFORMATIONWe accept the following payment methods:You don't need to have an account to place an order. Having an account can save you time during checkout as it saves your address details, but it’s not necessary if you want to place an order.You can cancel online orders, entirely or partially, within 15 minutes of placing it.")
}

function promotiononRight() {
    alert(" PROMOTION & VOUCHER INFORMATION  HOW DO I USE MY VOUCHER?Here's how to claim your discount: Pick a product (one that's applicable for a voucher discount) from our online store.   Go to your shopping bag by clicking the ‘shopping bag’ button at the top of the screen.   Click ‘Enter promo code’ under your order summary.   A voucher field will appear. Type your voucher code into the field and hit ‘Apply'.  Keep in mind the voucher: Is only valid for a limited time.   Might contain product exclusions and exceptions.  Cannot be applied after you've placed an order.  Cannot be combined with other promotions, offers or discounts. If more than one promotion or discount offer applies to your order, we'll use the one with the greatest discount.          WHAT SHOULD I DO IF MY VOUCHER CODE ISN'T WORKING?  It’s easy to make mistakes if you enter the code manually. Some common mistakes are:Check spacing, character errors and/or spelling mistakes.  The voucher code field is case-sensitive. Check that ‘Caps Lock’ button is not on and use upper case where necessary.  Check you’re not mixing up the numbers 0/1 and the letters O/I.  Please read the specific Terms and Conditions in the source of your voucher to make sure that your voucher applies to your order. If you are sure your voucher is valid for your order but it still doesn’t work, pleasecontact us.")
}