const productTitleElement = document.querySelector("#fpBulletPointReadMore");

if (productTitleElement) {
    console.log(productTitleElement, 'ssd')
    const additionalInfo = document.createElement("div");
    additionalInfo.textContent = "Additional Information Here";
    productTitleElement.insertBefore(additionalInfo, productTitleElement.firstChild);
}
else
    console.log('ttt')

document.body.style.border = "5px solid red";