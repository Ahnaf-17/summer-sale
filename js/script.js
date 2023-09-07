function newAdded(product){
    const pName = product.querySelector("h2").innerText;
    const pPrice = product.querySelector("p");
    const price = parseFloat(pPrice.innerText);

    const totalItems = document.getElementById("total-items");
    const totalPrice = totalItems.childElementCount;

    const view = document.createElement('p');
    view.innerHTML = `${totalPrice+1}.${pName}`;
    totalItems.appendChild(view);
    FinalAmount(price,false)
}
function Item1() {
    const product = document.getElementById("i-1");
    newAdded(product);
}
function Item2() {
    const product = document.getElementById("i-2");
    newAdded(product);
}
function Item3() {
    const product = document.getElementById("i-3");
    newAdded(product);
}
function Item4() {
    const product = document.getElementById("i-4");
    newAdded(product);
}
function Item5() {
    const product = document.getElementById("i-5");
    newAdded(product);
}
function Item6() {
    const product = document.getElementById("i-6");
    newAdded(product);
}
function Item7() {
    const product = document.getElementById("i-7");
    newAdded(product);
}
function Item8() {
    const product = document.getElementById("i-8");
    newAdded(product);
}
function Item9() {
    const product = document.getElementById("i-9");
    newAdded(product);
}
function FinalAmount(price, discount){

    const tPrice = document.getElementById("t-price");
    const TotalTextPrice = tPrice.innerText;
    const priceTotal = parseFloat(TotalTextPrice);
    const dPrice = document.getElementById("d-price");
    const DiscountTextPrice = dPrice.innerText;
    const priceDiscount = parseFloat(DiscountTextPrice).toFixed(2);

    const FinalPrice = priceTotal + price;
    document.getElementById("t-price").innerText = FinalPrice;

    if(FinalPrice != 0 ){
        const purchased = document.getElementById("purchase-btn");
        purchased.removeAttribute("disabled")
    }if(priceDiscount == 0 && !discount){
        const FinalTotal = FinalPrice;
        document.getElementById("price").innerText = FinalTotal;
    }else{
        FinalDiscount = (FinalPrice*.20).toFixed(2);
        const TotalAfterDiscount = FinalPrice-FinalDiscount;
        document.getElementById("d-price").innerText = FinalDiscount;
        document.getElementById("price").innerText = TotalAfterDiscount;
    }

}

function couponApply(){
    const couponText = document.getElementById("coupon").value;
    const apply = document.getElementById("apply-btn");
    if(couponText === "SELL200"){
        apply.removeAttribute("disabled");

    } else{
        apply.setAttribute("disabled",true);
    }
}

function priceAfterCoupon(){
    const couponPriceValue = document.getElementById("t-price");
    const couponPriceValueText = couponPriceValue.innerText;
    const couponPrice = couponPriceValueText 
    const DiscountValue = document.getElementById("d-price");
    const DiscountValueText = DiscountValue.innerText;
    const DiscountPrice = DiscountValueText;
    
    if(couponPrice==0){
        alert("select product more then 200tk")
        const couponAmount = document.getElementById("coupon");
        couponAmount.value = "";
        const applyCoupon = document.getElementById("apply-btn");
        applyCoupon.setAttribute("disabled",true);return
    }if(DiscountPrice!=0){
        alert("no more discount");
        const couponAmount = document.getElementById("coupon");
        couponAmount.value = "";
        const applyCoupon = document.getElementById("apply-btn");
        applyCoupon.setAttribute("disabled",true);return 
    }
    else{
        const applyCoupon = document.getElementById("apply-btn");
        const couponAmount = document.getElementById("coupon");
        couponAmount.value = "";
        applyCoupon.setAttribute("disabled",true);
        const price =0;
        FinalAmount(price,true)
    }
}
function clearAll(){
    document.getElementById("t-price").innerText = "0.00";
    document.getElementById("d-price").innerText = "0.00";
    document.getElementById("price").innerText = "0.00";
    const item = document.getElementById("total-items");
    const coupon = document.getElementById("coupon");
    item.innerText = "";
    coupon.innerText = "";
    const applyBtn = document.getElementById("apply-btn").setAttribute("disabled", true);
    // applyBtn.setAttribute("disabled", true) 
    const pBtn = document.getElementById("purchase-btn").setAttribute("disabled", true);
    // pBtn.setAttribute("disabled", true) ;

}
