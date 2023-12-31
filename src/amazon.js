function getpWarningMessage() {
    var messageParagraph = document.createElement('p');
    messageParagraph.className = 'a-spacing-none a-spacing-top-mini';
    return messageParagraph;
}

function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getpWithSource(message, linkSource = '', nameSource = '') {

    const messageW = getpWarningMessage();
    part1 = document.createTextNode(message);
    if ('' !== linkSource) {
        lien = document.createElement('a');
        lien.href = linkSource;
        lien.target = '_blank';
        lien.textContent = ' (Source : ' + nameSource + ')';
    }

    messageW.appendChild(part1);
    if ('' !== linkSource) {
        messageW.appendChild(lien);
    }

    return messageW;
}

function simplePWarning(m) {
    const message = getpWarningMessage();
    message.textContent = m;
    return message;
}


function warningMessageAmazon(title, message, type = 'warning', customTxt = '')// type warning, info, success
{
    const warningMessage = document.createElement("div");

    // warningMessage.innerHTML = '<div id="sc-important-message-alert" class="a-box a-alert a-alert-'+type+' celwidget a-spacing-medium-plus" aria-live="polite" aria-atomic="true" data-csa-c-id="o3uzsn-6vtcx3-rzi58q-dylssm" data-cel-widget="sc-important-message-alert"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">' +
    //     title +
    //     '</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content">' +
    //     '    <div data-feature-id="imb-message-container" class="a-section a-spacing-none sc-java-remote-feature">' +
    //     '                <p class="a-spacing-none a-spacing-top-mini">' + message +
    //     '                </p>' + customTxt +
    //     '    </div>' +
    //     '                </div></div></div>';

    var alertDiv = document.createElement('div');
    alertDiv.id = 'sc-important-message-alert';
    alertDiv.className = 'a-box a-alert a-alert-' + type + ' celwidget a-spacing-medium-plus';
    alertDiv.setAttribute('aria-live', 'polite');
    alertDiv.setAttribute('aria-atomic', 'true');
    alertDiv.setAttribute('data-csa-c-id', 'o3uzsn-6vtcx3-rzi58q-dylssm');
    alertDiv.setAttribute('data-cel-widget', 'sc-important-message-alert');

    var innerDiv = document.createElement('div');
    innerDiv.className = 'a-box-inner a-alert-container';

    var heading = document.createElement('h4');
    heading.className = 'a-alert-heading';
    heading.textContent = title;

    var icon = document.createElement('i');
    icon.className = 'a-icon a-icon-alert';

    var contentDiv = document.createElement('div');
    contentDiv.className = 'a-alert-content';

    var customTextDiv = document.createElement('p');

    if ('' !== customTxt) {
        customTextDiv.className = 'a-section a-spacing-none sc-java-remote-feature';
        customTextDiv.textContent = customTxt;
    }

    contentDiv.appendChild(message);

    if ('' !== customTxt) {
        contentDiv.appendChild(customTextDiv);
    }

    innerDiv.appendChild(heading);
    innerDiv.appendChild(icon);
    innerDiv.appendChild(contentDiv);
    alertDiv.appendChild(innerDiv);

    // Ajoutez l'élément alertDiv en tant qu'enfant de warningMessage
    warningMessage.appendChild(alertDiv);

    return warningMessage;
}

function checkBuy(message) {
    var divElement = document.createElement('div');
    divElement.className = 'a-box-inner a-padding-base';

    var h6Element = document.createElement('h6');
    h6Element.style.color = '#ba0010';
    var boldElement = document.createElement('b');
    boldElement.textContent = 'X ' + message;
    h6Element.appendChild(boldElement);

    divElement.appendChild(h6Element);
    return divElement
}

function onClickBuy(event) {
    const fakeBtn1 = document.getElementById("fakeBuy");
    const fakeBtn2 = document.getElementById("fakeBuyNow");

    var divControl = document.createElement('div');
    divControl.className = 'ac-badge-wrapper';

    var badgeSpan = document.createElement('span');
    badgeSpan.className = 'a-size-small aok-float-left ac-badge-rectangle';

    var primarySpan = document.createElement('span');
    primarySpan.className = 'ac-badge-text-primary ac-white';
    primarySpan.textContent = 'Amazon ';

    var secondarySpan = document.createElement('span');
    secondarySpan.className = 'ac-badge-text-secondary ac-orange';
    secondarySpan.textContent = 'AntiCompulsif';

    badgeSpan.appendChild(primarySpan);
    badgeSpan.appendChild(secondarySpan);

    divControl.appendChild(badgeSpan);

    var paragraph = document.createElement('p');
    paragraph.textContent = 'Prenez quelques instants pour répondre à ces questions, puis cliquez sur le bouton pour continuer.';
    divControl.appendChild(paragraph);

    divControl.appendChild(checkBuy('Est-ce que j\'en ai besoin ?'));
    divControl.appendChild(checkBuy('Est-ce que j\'en ai vraiment besoin ?'));
    divControl.appendChild(checkBuy('Est-ce que j\'en ai vraiment besoin maintenant ?'));

    if (fakeBtn1) {
        fakeBtn1.remove();
    }

    if (fakeBtn2) {
        fakeBtn2.remove();
    }

    const addToCartButton = document.getElementById("atc-declarative")
    if (addToCartButton) {
        addToCartButton.parentNode.insertBefore(divControl, addToCartButton.previousSibling);

        addToCartButton.style.visibility = '';
        addToCartButton.style.position = '';
    }

    const buyNowButton = document.getElementById("buyNow")
    if (buyNowButton) {
        buyNowButton.style.visibility = '';
        buyNowButton.style.position = '';
    }
}

const messagesBan = [
    "En moyenne, vos colis contiennent 50% de vide 😲 ! Résultat : un suremballage complètement inutile. (source : ADEME)",
    "30% des articles réexpédiés par les clients finissent à la poubelle. Un gâchis monumental ! (source : RTBF)",
    "1/3 des retraits de colis sont spécialement réalisés en voiture 🌪️ (source : ADEME)",
    "2,5 tonnes : poids total des objets accumulés chez nous. Et si on mettait notre logement au régime ? (source : ADEME)",
]

function showBanniereMobile() {
    const bannerAmazon = document.getElementById("nav-logobar");
    if (bannerAmazon) {
        const bannerKickStarter = document.createElement("div");
        let positionMessage = randomIndex(messagesBan.length);
        bannerKickStarter.textContent = messagesBan[positionMessage];

// bannerKickStarter.style.background = '#fafafa';
        bannerKickStarter.style.textAlign = 'center';
        bannerKickStarter.style.color = '#000';
        bannerKickStarter.classList.add("a-size-large");
        bannerKickStarter.classList.add("product-title-word-break");
        bannerAmazon.parentNode.insertBefore(bannerKickStarter, bannerAmazon.nextSibling);

    }
}

function showBanniere() {
    // Make a banner
    const bannerAmazon = document.getElementById("nav-belt")
    if (bannerAmazon) {
        const bannerKickStarter = document.createElement("div");


        // const mode = 'CA_ECHO'; //CA_ECHO || Fusee
        bannerKickStarter.style.height = '33px';

        // if('CA_ECHO' === mode) {

        let positionMessage = randomIndex(messagesBan.length);

//source : https://www.lesechos.fr/industrie-services/conso-distribution/amazon-a-depasse-les-10-milliards-deuros-de-chiffre-daffaires-en-france-1981779
//     bannerKickStarter.textContent = "+ de 10 000 000 000€ de chiffre d'affaires grâce à vos achats ! Merci pour votre confiance ❤️";
        bannerKickStarter.textContent = messagesBan[positionMessage];

// bannerKickStarter.style.background = '#fafafa';
        bannerKickStarter.style.textAlign = 'center';
        bannerKickStarter.style.color = '#fafafa';
        bannerKickStarter.classList.add("a-size-large");
        bannerKickStarter.classList.add("product-title-word-break");
        // }
// else if('FUSEE' === mode){
//     let progressVal = '10%';
//     let progress = document.createElement("div");
//     progress.classList.add("ldtimercont");
//     progress.style.width= '70%';
//     progress.style.margin = 'auto';
//
//     let state = document.createElement("div");
//     state.classList.add('statebar');
//     state.style.height='25px';
//
//     progress.appendChild(state);
//
//
//     let prog = document.createElement("div");
//     prog.classList.add('progbar')
//     prog.style.width = progressVal;
//     prog.style.height='25px';
//     prog.style.backgroundColor = '#3480BF';
//
//
//     progress.appendChild(prog);
//
//     let progbartick = document.createElement("div");
//     progbartick.classList.add('progbartick')
//     progbartick.style.width = progressVal;
//     progbartick.style.height='29px';
//
//     progress.appendChild(progbartick);
//
//     bannerKickStarter.appendChild(progress);
// }

        bannerAmazon.parentNode.insertBefore(bannerKickStarter, bannerAmazon.nextSibling);
    }
}

function displayMessagePrix() {
    // console.log("jdkfdjfjdkfjdkfjdkf")
// document.body.style.border = "5px solid red";
//
// const toto = document.getElementById("corePrice_feature_div");
// console.log(toto)
    /*const iframe = document.createElement('script');

    iframe.setAttribute('src','https://impactco2.fr/iframe.js');
    iframe.setAttribute("data-type", "numerique");
    iframe.setAttribute("data-search", "?theme=night");


    console.log(iframe)*/

// const pItem = document.createElement("p")
// pItem.innerText = "La black friday c'est nuls"
//
// if(toto){
//     toto.appendChild(pItem)
// }
}

function displayDescription() {
    //description de produit
    let descriptionProduit = document.getElementById("productDescription_feature_div")
    if (!descriptionProduit)
        descriptionProduit = document.getElementById('device-dp-recommendations_feature_div')

    if (descriptionProduit) {
        let divMessage = document.createElement("div");
        let imgDechet = document.createElement("img");
        let pText = document.createElement("h2");
        pText.classList.add('default');
        imgDechet.src = "https://unsplash.com/photos/7_TSzqJms4w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZGVjaGV0fGZyfDB8fHx8MTY5OTEzNDEwMHww&force=true&w=640"


        pText.textContent = 'Contribuez à notre montagne de déchets non-recyclés en achetant nos produits 🤑';
        divMessage.appendChild(pText);

        imgDechet.style.margin = "auto"

        divMessage.appendChild(imgDechet);

        descriptionProduit.parentNode.insertBefore(divMessage, descriptionProduit.nextSibling);
    }
}

function afterPrix(afterPricePanier) {

    const MEnov = getpWarningMessage();
    let part1 = document.createTextNode('L\'association ');
    let lien = document.createElement('a');
    lien.href = 'https://www.helloasso.com/associations/les-enovateurs/formulaires/1';
    lien.target = '_blank';
    lien.textContent = 'Les Enovateurs';
    let part2 = document.createTextNode(' oeuvre pour réduire l\'impact du numérique sur la planète.');

    MEnov.appendChild(part1);
    MEnov.appendChild(lien);
    MEnov.appendChild(part2);


    const MHop = getpWarningMessage();
    part1 = document.createTextNode('L\'association ');
    lien = document.createElement('a');
    lien.href = 'https://www.halteobsolescence.org/faire-un-don/';
    lien.target = '_blank';
    lien.textContent = 'HOP';
    part2 = document.createTextNode(' oeuvre pour rendre nos objets plus durables et réparables.');

    MHop.appendChild(part1);
    MHop.appendChild(lien);
    MHop.appendChild(part2);

    const MEmmaus = getpWarningMessage();
    part1 = document.createTextNode('L\'association ');
    lien = document.createElement('a');
    lien.href = 'https://www.helloasso.com/associations/emmaus-connect/formulaires/1/';
    lien.target = '_blank';
    lien.textContent = 'Emmaus connect';
    part2 = document.createTextNode(' oeuvre pour offrir une seconde vie à nos appareils numériques');

    MEmmaus.appendChild(part1);
    MEmmaus.appendChild(lien);
    MEmmaus.appendChild(part2);

    const MLatitude = getpWarningMessage();
    part1 = document.createTextNode('L\'association ');
    lien = document.createElement('a');
    lien.href = 'https://www.helloasso.com/associations/latitudes-exploring-tech-for-good/formulaires/3';
    lien.target = '_blank';
    lien.textContent = 'Latitudes';
    part2 = document.createTextNode(' anime des ateliers de sensibilisation au numérique responsable dans les établissements scolaires');

    MLatitude.appendChild(part1);
    MLatitude.appendChild(lien);
    MLatitude.appendChild(part2);

    const TGG = getpWarningMessage();
    part1 = document.createTextNode('L\'association ');
    lien = document.createElement('a');
    lien.href = 'https://www.helloasso.com/associations/the-greener-good/formulaires/1';
    lien.target = '_blank';
    lien.textContent = 'The Greener Good';
    part2 = document.createTextNode(' sensibilise le grand public aux impacts de nos modes de vie et oeuvre pour les rendre plus soutenables');

    TGG.appendChild(part1);
    TGG.appendChild(lien);
    TGG.appendChild(part2);

    const messagesPossible = [
        {
            'title': 'Faites un don à une association qui se mobilise pour un numérique responsable, éthique et accessible',
            'message': MEnov
        },
        {
            'title': 'Faites un don à une association qui lutte contre l\'obsolescence programmée',
            'message': MHop
        },
        {
            'title': 'Faites un don à une association qui fait reculer l\'exclusion numérique et sociale',
            'message': MEmmaus
        },
        {
            'title': 'Faites un don à une association qui agit pour construire une tech plus engagée et responsable',
            'message': MLatitude
        },
        {
            'title': 'Faites un don à une association qui agit pour promouvoir un mode de vie plus durable',
            'message': TGG
        }
    ];

    const messageCart = [
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

    const choosenOneHead = randomIndex(messageCart.length);
    afterPricePanier.parentNode.insertBefore(warningMessageAmazon(messageCart[choosenOneHead].title, messageCart[choosenOneHead].message), afterPricePanier.nextSibling);

    const choosenOne = randomIndex(messagesPossible.length);
    const amountPrice = document.getElementById("gutterCartViewForm")
    if (amountPrice) {
        amountPrice.parentNode.insertBefore(warningMessageAmazon(messagesPossible[choosenOne].title, messagesPossible[choosenOne].message, 'info',
            'Avec ce geste, vous ne compenserez pas votre achat, ' +
            'mais c\'est une première action.'), amountPrice.nextSibling);
    } else {
        const BuyBox = document.getElementById("sc-mini-buy-box")
        if (BuyBox) {
            console.log(messagesPossible[choosenOne].title, messagesPossible[choosenOne].message)
            BuyBox.parentNode.insertBefore(warningMessageAmazon(messagesPossible[choosenOne].title, messagesPossible[choosenOne].message, 'info',
                'Avec ce geste, vous ne compenserez pas votre achat, ' +
                'mais c\'est une première action.'), BuyBox.nextSibling);
        }
    }


}

function inProduct() {
    //pas de panier
    const titleProduct = document.getElementById("productTitle")
    const identiPhone14 = 'Apple iPhone 14 (128 Go)';
    const identiPhone13 = 'Apple iPhone 13 (128 Go)';
    const messageiPhone14 = '-19% en reconditionné, voilà une offre qui vaut le détour !';
    const warningiPhone14 = 'Retrouvez l\'iPhone 14 128Go reconditionné à seulement 700€ sur Certideal, Recommerce, Rebuy, BackMarket, ...';
    const messageiPhone13 = '-26% en reconditionné, voilà une offre qui vaut le détour !';
    const warningiPhone13 = 'Retrouvez l\'iPhone 13 128Go reconditionné à seulement 547€ sur Certideal, Recommerce, Rebuy, BackMarket, ...';


    if (titleProduct) {//sur un article
        if (titleProduct.textContent.includes(identiPhone14)) //Reconditionné Apple iPhone 14 ?
        {
            const preloadLandingPage = document.getElementById("rw-preload-landing-image_div")
            if (preloadLandingPage) {
                preloadLandingPage.parentNode.insertBefore(warningMessageAmazon(messageiPhone14, simplePWarning(warningiPhone14)), preloadLandingPage.nextSibling);
            }
        }
        if (titleProduct.textContent.includes(identiPhone13)) //Reconditionné Apple iPhone 14 ?
        {
            const preloadLandingPage = document.getElementById("rw-preload-landing-image_div")
            if (preloadLandingPage) {
                preloadLandingPage.parentNode.insertBefore(warningMessageAmazon(messageiPhone13, simplePWarning(warningiPhone13)), preloadLandingPage.nextSibling);
            }
        }
    } else {//maybe mobile
        const titleProductMobile = document.getElementById("title")
        if (titleProductMobile) {//sur un article
            if (titleProductMobile.textContent.includes(identiPhone14)) //Reconditionné Apple iPhone 14 ?
            {
                titleProductMobile.parentNode.insertBefore(warningMessageAmazon(messageiPhone14, simplePWarning(warningiPhone14)), titleProductMobile.nextSibling);
            }
            if (titleProductMobile.textContent.includes(identiPhone13)) //Reconditionné Apple iPhone 14 ?
            {
                titleProductMobile.parentNode.insertBefore(warningMessageAmazon(messageiPhone13, simplePWarning(warningiPhone13)), titleProductMobile.nextSibling);
            }
        }
    }


    //Prendre conscience de l'achat
    //Hide buttons and replace by fake button to take conscience
    const addToCartButton = document.getElementById("atc-declarative")
    if (addToCartButton) {
        //copy of button
        addToCartButton.style.visibility = 'hidden';
        addToCartButton.style.position = 'absolute';
        const fakeBuy = document.createElement("div");
        fakeBuy.id = 'fakeBuy';

        const outerSpan = document.createElement("span");
        outerSpan.className = "a-declarative";
        outerSpan.setAttribute("data-action", "dp-pre-atc-declarative");
        outerSpan.id = "fakeBtn1";

        const innerButton = document.createElement("span");
        innerButton.className = "a-button a-spacing-small a-button-primary a-button-icon natc-enabled";

        const innerButtonInner = document.createElement("span");
        innerButtonInner.className = "a-button-inner";

        const cartIcon = document.createElement("i");
        cartIcon.className = "a-icon a-icon-cart";

        const inputButton = document.createElement("input");
        inputButton.title = "Ajouter au panier";
        inputButton.setAttribute("data-hover", "Sélectionnez <b>__dims__</b> à gauche<br> pour l'ajouter au panier d'achat");
        inputButton.className = "a-button-input attach-dss-atc";
        inputButton.type = "button";
        inputButton.value = "Ajouter au panier";

        const buttonText = document.createElement("span");
        buttonText.className = "a-button-text";
        buttonText.setAttribute("aria-hidden", "true");
        buttonText.textContent = "Ajouter au panier";

        innerButtonInner.appendChild(cartIcon);
        innerButtonInner.appendChild(inputButton);
        innerButtonInner.appendChild(buttonText);

        innerButton.appendChild(innerButtonInner);

        outerSpan.appendChild(innerButton);

        fakeBuy.appendChild(outerSpan);

        fakeBuy.addEventListener("click", (event) => {
            onClickBuy(event);
        });

        addToCartButton.parentNode.insertBefore(fakeBuy, addToCartButton.nextSibling);

    }

    const buyNowButton = document.getElementById("buyNow")

    if (buyNowButton) {
        //copy of button
        buyNowButton.style.visibility = 'hidden'
        buyNowButton.style.position = 'absolute';

        const fakeBuyNow = document.createElement("div");
        fakeBuyNow.id = "fakeBuyNow";
        fakeBuyNow.classList.add('a-section');
        fakeBuyNow.classList.add('a-spacing-base');

        const outerButton = document.createElement("span");
        outerButton.className = "a-button a-button-oneclick a-button-icon onml-buy-now-button";

        const innerButton = document.createElement("span");
        innerButton.className = "a-button-inner";

        const buyNowIcon = document.createElement("i");
        buyNowIcon.className = "a-icon a-icon-buynow";

        const inputButton = document.createElement("input");
        inputButton.title = "Acheter cet article";
        inputButton.setAttribute("data-hover", "__dims__");
        inputButton.className = "a-button-input";

        const buttonText = document.createElement("span");
        buttonText.className = "a-button-text";
        buttonText.setAttribute("aria-hidden", "true");
        buttonText.textContent = " Acheter cet article ";

        innerButton.appendChild(buyNowIcon);
        innerButton.appendChild(inputButton);
        innerButton.appendChild(buttonText);

        outerButton.appendChild(innerButton);

        fakeBuyNow.appendChild(outerButton);

        fakeBuyNow.addEventListener("click", (event) => {
            onClickBuy(event);
        });

        buyNowButton.parentNode.insertBefore(fakeBuyNow, buyNowButton.nextSibling);
    }
}

showBanniere();
showBanniereMobile();

// displayDescription();


//Le saviez-vous panier
const afterPricePanier = document.getElementById("deselect-all")
if (afterPricePanier) {
    afterPrix(afterPricePanier);
} else {
    const priceMobile = document.getElementById('sc-buy-box-ptc-button');
    if (priceMobile) {
        afterPrix(priceMobile);
    } else {
        inProduct();
    }
}


console.error('knlknkln')


// document.body.style.border = "5px solid red";