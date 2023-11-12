// const productTitleElement = document.querySelector("#fpBulletPointReadMore");
//
// if (productTitleElement) {
//     // console.log(productTitleElement, 'ssd')
//     //identifier l'appareil
//     let product = '';
//     let bestPoint = '';
//     switch (product){
//         case "pc":
//             bestPoint = 'Ce magnifique ordinateur contient des minéraux rares polluants et non-utilisable par la suite '
//             break;
//         default:
//             bestPoint = "Un produit qui vous rendra heureux quelques minutes";
//             break;
//     }
//     const additionalInfo = document.createElement("div");
//     additionalInfo.textContent = bestPoint;
//     productTitleElement.insertBefore(additionalInfo, productTitleElement.firstChild);
// }

function randomIndex(max){
    return Math.floor(Math.random() * max);
}

function messageBeforeCheckout() {

    const message = [
        {
            title : "Des promotions exclusives ? Entre nous, c'est juste que nous avons besoin de vider nos vieux stocks.",
            message : "Avez-vous vraiment besoin de ces objets ?"
        },
        {
            title : "Des économies pour votre compte en banque, et une planète préservée : pour vos achats, pensez au reconditionné et à l'occasion",
            message: "Moins de déchets, moins de pollution, plus d'économies !"
        },
        {
            title: "Avant d'acheter, comparez bien nos prix avec d'autres sites... et vérifiez les prix des derniers mois",
            message: "Régulièrement, les sites e-commerce gonflent leurs prix quelques semaines avant de vous proposer des \"promotions\"..."
            //https://www.radiofrance.fr/franceinter/fausses-reductions-produits-plus-chers-le-black-friday-jour-des-fausses-bonnes-affaires-selon-une-etude-2398468
        }
    ]

    const choosenOne = randomIndex(message.length);

    const possibleBaskets = document.getElementsByClassName("l-basket-content u-mb-xl");
    if(possibleBaskets.length !== 1) {
        console.error("cannot add a checkout message");
        return;
    }
    const basketDiv = possibleBaskets[0];
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("bProductLine", "jsbProductLine",  "jsbProductExpressAction");

    const titleParagraph = document.createElement("p");
    titleParagraph.classList.add("bProductLineDescTitle");
    titleParagraph.textContent = message[choosenOne].title;

    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message[choosenOne].message;

    cardDiv.appendChild(titleParagraph);
    cardDiv.appendChild(messageParagraph);

    basketDiv.insertBefore(cardDiv, basketDiv.firstChild);
}

function generateBannerMessage() {
    const possibleBanners = document.getElementsByClassName("overPa1600 c-banner js-banner");

    const bannerMessages = [
        "Un peu d'argent sur votre compte ? On vous aide à le dépenser rapidement !",
        "Besoin d'un objet inutile ? On a la solution pour vous !",
        "Des livraisons quasiment gratuites pour vous. Les gaz à effet de serre sont offerts."
    ]
    const randomBannerMessagesIndex = Math.floor(Math.random() * bannerMessages.length);

    if(possibleBanners.length !== 1) {
        console.error("cannot add a banner message");
        return;
    }
    
    const banner = possibleBanners[0];
    const titleDiv = document.createElement("div");
    titleDiv.style.fontSize = "20px";
    titleDiv.style.fontWeight = "600";
    titleDiv.style.color = "black";
    titleDiv.style.textAlign = 'center'

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = bannerMessages[randomBannerMessagesIndex];

    titleDiv.appendChild(titleParagraph);
    banner.appendChild(titleDiv);


}

generateBannerMessage();
messageBeforeCheckout();
