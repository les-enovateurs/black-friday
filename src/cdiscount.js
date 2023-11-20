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

function getpWithSource(message, linkSource = '', nameSource = '') {

    let messageW = message;
    if ('' !== linkSource) {
        messageW += ' (Source : ' + nameSource + ')';
    }

    return messageW;
}

function randomIndex(max){
    return Math.floor(Math.random() * max);
}

function messageBeforeCheckout() {

    const message = [
        {
            'title': 'Saviez-vous que vos colis contiennent en moyenne 50% de vide 😲 ?',
            'message': getpWithSource('A la livraison, c\'est beaucoup de carburant gaspillé pour ne rien transporter...', 'https://infos.ademe.fr/article-magazine/limpact-environnemental-du-commerce-en-ligne', 'ADEME')
        },
        {
            'title': '30% des articles réexpédiés par les clients finissent à la poubelle, selon une étude menée en Allemagne.',
            'message': getpWithSource('Un gâchis monumental !', 'https://www.rtbf.be/article/black-friday-achats-impulsifs-retours-invendus-et-gros-gachis-10078688', 'RTBF')
        },
        {
            'title': 'Si j’achète neuf, j\'achète durable.',
            'message': getpWithSource('Je privilégie les appareils porteurs d\'un bon indice de réparabilité !', 'https://epargnonsnosressources.gouv.fr/indice-de-reparabilite/', 'ADEME')
        },
        {
            'title': 'Avant d\'acheter, répondez au quizz de l\'Agence pour la transition...',
            'message': getpWithSource('...pour vous assurer que vous faites le bon choix.', 'https://epargnonsnosressources.gouv.fr/evaluer-besoin-avant-achat/', 'ADEME')
        },
        {
            'title': 'Avant de remplacer mon appareil en panne',
            'message': getpWithSource('Je lance un petit diagnostic sur le site de l\'Agence de la transition', 'https://epargnonsnosressources.gouv.fr/diagnostic-pannes-appareils/', 'ADEME')
        },
        {
            'title': '1 MILLIARD DE COLIS/AN : c’est le volume d’activité estimé pour le secteur du commerce en ligne en France',
            'message': getpWithSource('1 million de tonnes équivalent CO2/an environ', 'https://infos.ademe.fr/article-magazine/limpact-environnemental-du-commerce-en-ligne/', 'ADEME')
        },
        {
            'title': '1/3 des retraits de colis sont spécialement réalisés en voiture !',
            'message': getpWithSource('Et si vous regroupiez vos déplacements, ou utilisiez un moyen de transport plus écologique ?', 'https://www.ecologie.gouv.fr/campagne-nos-objets-ont-plein-d-avenirs', 'ADEME')
        },
        {
            'title': '2,5 tonnes : c\'est le poids total de tous les objets accumulés chez nous (en moyenne). ',
            'message': getpWithSource('Et si on mettait notre logement au régime ?', 'https://www.ecologie.gouv.fr/campagne-nos-objets-ont-plein-d-avenirs', 'ADEME')
        },
        {
            'title': 'La fabrication d’un ordinateur de 2 Kg mobilise 800 Kg de matières premières et génère 124 Kg de CO2.',
            'message': getpWithSource('Prenons soin de nos appareils, et faisons-les durer !', 'https://cnm.fr/wp-content/uploads/2021/08/ademe_guide-pratique-face-cachee-numerique.pdf', 'ADEME')
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
        "En moyenne, vos colis contiennent 50% de vide 😲 ! Résultat : un suremballage complètement inutile. (source : ADEME)",
        "30% des articles réexpédiés par les clients finissent à la poubelle. Un gâchis monumental ! (source : RTBF)",
        "1/3 des retraits de colis sont spécialement réalisés en voiture 🌪️ (source : ADEME)",
        "2,5 tonnes : poids total des objets accumulés chez nous. Et si on mettait notre logement au régime ? (source : ADEME)"
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
