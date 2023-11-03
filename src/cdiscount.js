const productTitleElement = document.querySelector("#fpBulletPointReadMore");

if (productTitleElement) {
    // console.log(productTitleElement, 'ssd')
    //identifier l'appareil
    let product = '';
    let bestPoint = '';
    switch (product){
        case "pc":
            bestPoint = 'Ce magnifique ordinateur contient des minéraux rares polluants et non-utilisable par la suite '
            break;
        default:
            bestPoint = "Un produit qui vous rendra heureux quelques minutes";
            break;
    }
    const additionalInfo = document.createElement("div");
    additionalInfo.textContent = bestPoint;
    productTitleElement.insertBefore(additionalInfo, productTitleElement.firstChild);
}
// else
//     console.log('ttt')

document.body.style.border = "5px solid red";