function warningMessageAmazon(title, message, type='warning', customTxt='')// type warning, info, success
{
    const warningMessage = document.createElement("div");

    warningMessage.innerHTML = '<div id="sc-important-message-alert" class="a-box a-alert a-alert-'+type+' celwidget a-spacing-medium-plus" aria-live="polite" aria-atomic="true" data-csa-c-id="o3uzsn-6vtcx3-rzi58q-dylssm" data-cel-widget="sc-important-message-alert"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">' +
        title +
        '</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content">' +
        '    <div data-feature-id="imb-message-container" class="a-section a-spacing-none sc-java-remote-feature">' +
        '                <p class="a-spacing-none a-spacing-top-mini">' + message +
        '                </p>' + customTxt +
        '    </div>' +
        '                </div></div></div>';

    return warningMessage;
}

function checkBuy(message){
    return '' +
        '<div class="a-box-inner a-padding-base">' +
        '  <h6 style="color:#ba0010;">' +
        '    <b>' +
        '      X ' + message +
        '    </b>' +
        '  </h6>' +
        '</div>' +
        '';
}

function onClickBuy(event){
    const fakeBtn1 = document.getElementById("fakeBuy");
    const fakeBtn2 = document.getElementById("fakeBuyNow");

    const divControl = document.createElement("div");

    divControl.innerHTML =  '' +
        '<div class="ac-badge-wrapper">' +
        '<span class="a-size-small aok-float-left ac-badge-rectangle">' +
        '  <span class="ac-badge-text-primary ac-white">Amazon </span>' +
        '  <span class="ac-badge-text-secondary ac-orange">AntiCompulsif</span>' +
        '</span></div><br />' +
        '<p>Prenez quelques instants pour répondre à ces questions, puis cliquez sur le bouton pour continuer.</p>' +
        checkBuy('Est-ce que j\'en ai besoin ?') +
        checkBuy('Est-ce que j\'en ai vraiment besoin ?') +
        checkBuy('Est-ce que j\'en ai vraiment besoin maintenant ?')
    ;


    fakeBtn1.remove();
    fakeBtn2.remove();

    const addToCartButton = document.getElementById("atc-declarative")
    if(addToCartButton){
        addToCartButton.parentNode.insertBefore(divControl, addToCartButton.previousSibling);

        addToCartButton.style.visibility = '';
        addToCartButton.style.position = '';
    }

    const buyNowButton = document.getElementById("buyNow")
    if(buyNowButton){
        buyNowButton.style.visibility = '';
        buyNowButton.style.position = '';
    }
}

function showBanniere(){
    // Make a banner
    const bannerAmazon = document.getElementById("nav-belt")
    const bannerKickStarter = document.createElement("div");


    // const mode = 'CA_ECHO'; //CA_ECHO || Fusee
    bannerKickStarter.style.height = '33px';

    // if('CA_ECHO' === mode) {

        let messages = [
            "Notre mission, vous faire acheter toujours plus ! + 16 % de croissance annuelle grâce à vous ❤️",
            "Un peu d'argent sur votre compte ? On vous aide à le dépenser rapidement !",
            "Besoin d'un objet inutile ? On a la solution pour vous !",
            "On teste de nouveaux robots humanoïdes pour préparer vos commandes => - d'employés, + 🤑 ",
            "Des livraisons quasiment gratuites pour vous. Les gaz à effet de serre sont offerts",
            "Un emploi crée chez nous, le commerce de proximité perd 2,2 emplois"
        ]

        let positionMessage = randomIndex(messages.length);

//source : https://www.lesechos.fr/industrie-services/conso-distribution/amazon-a-depasse-les-10-milliards-deuros-de-chiffre-daffaires-en-france-1981779
//     bannerKickStarter.textContent = "+ de 10 000 000 000€ de chiffre d'affaires grâce à vos achats ! Merci pour votre confiance ❤️";
        bannerKickStarter.textContent = messages[positionMessage];

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

function displayMessagePrix(){
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

function displayDescription(){
    //description de produit
    let descriptionProduit = document.getElementById("productDescription_feature_div")
    if(!descriptionProduit)
        descriptionProduit = document.getElementById('device-dp-recommendations_feature_div')

    if(descriptionProduit){
        let divMessage = document.createElement("div");
        let imgDechet = document.createElement("img");
        let pText = document.createElement("h2");
        pText.classList.add('default');
        imgDechet.src = "https://unsplash.com/photos/7_TSzqJms4w/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZGVjaGV0fGZyfDB8fHx8MTY5OTEzNDEwMHww&force=true&w=640"


        pText.innerText = 'Contribuez à notre montagne de déchets non-recyclés en achetant nos produits 🤑';
        divMessage.appendChild(pText);

        imgDechet.style.margin = "auto"

        divMessage.appendChild(imgDechet);

        descriptionProduit.parentNode.insertBefore(divMessage, descriptionProduit.nextSibling);
    }
}

function randomIndex(max){
    return Math.floor(Math.random() * max);
}

function afterPrix(afterPricePanier){
    const messagesPossible = [
        {
            'title' : 'Faites un don à une association qui lutte chaque jour au changement climatique',
            'message': 'L\'association' +
                ' <a href="https://www.helloasso.com/associations/les-enovateurs/formulaires/1" target="_blank">Les Enovateurs</a> ' +
                ' oeuvre pour réduire l\'impact du numérique sur l\'environnement.'
        },
        {
            'title' : 'Faites un don à une association qui lutte contre l\'obsolescence programmée',
            'message': 'L\'association' +
                ' <a href="https://www.halteobsolescence.org/faire-un-don/" target="_blank">HOP</a> ' +
                ' oeuvre pour rendre nos objets plus durable et réparable.'
        },
        {
            'title' : 'Faites un don à une association qui fait reculer l\'exclusion numérique et sociale',
            'message': 'L\'association' +
                ' <a href="https://www.helloasso.com/associations/emmaus-connect/formulaires/1/" target="_blank">Emmaus connect</a> ' +
                ' oeuvre pour offrir une seconde vie à nos appareils numériques'
        },
        {
            'title' : 'Faites un don à une association qui agit pour construire une tech plus engagée et responsable',
            'message': 'L\'association' +
                ' <a href="https://www.helloasso.com/associations/latitudes-exploring-tech-for-good/formulaires/3" target="_blank">Latitudes</a> ' +
                ' anime des ateliers de sensibilisation au numérique engagé et responsable dans les établissements scolaires'
        }
    ];

    const messageCart = [
        {
            'title':'Nous misons sur des entrepôts entièrement automatisés d’ici 10 ans',
            'message':'Moins de salaire = Plus d\'argent pour nous ! (<a href="https://www.clubic.com/pro/entreprises/amazon/actualite-855999-amazon-entrepots-entierement-automatises-10-ans.html">Source: Clubic</a>'
        },
        {
            'title':'A Montélimar, nos salariés en CDI ne restent pas plus de deux ans et demi en moyenne',
            'message':'Les conditions de travail sont pénibles avec des salaires bas. (<a href="https://rmc.bfmtv.com/actualites/economie/conso/dupin-quotidien-la-face-cachee-d-amazon_AV-201908210239.html">Source : RMC </a>)'
        },
        {
            'title': 'Notre management est brutal, robotisé, nos règles de sécurité enfreintes pour tenir les objectifs, nous contrôlons les pauses toilette…',
            'message': 'C’est ce que révèlent les 256 salariés de l’entrepôt de Montélimar dans un rapport. 74% des répondants déclarent ressentir des douleurs physiques qu’ils pensent dues à leur travail <a href="https://www.capital.fr/entreprises-marches/amazon-un-rapport-alarmant-sur-les-conditions-de-travail-a-montelimar-1285393">(Source : Capital)</a>'
        },
        {
            'title': 'Nos milliers de braves livreurs pour vous servir',
            'message': 'Ils livrent entre 80 et 180 colis selon les jours. « Parfois, ça peut dépasser les 200, 220 », constate un chef de dépôt. Un autre livreur de l’est de la France décrit aussi les pressions subies : « Amazon met en place un système de ce qu’ils appellent des "concessions". (Source: <a href="https://www.liberation.fr/france/2018/10/05/dans-la-peau-d-un-forcat-d-amazon_1683525/">Libération</a>)'
        },
        {
            'title': '57% de notre chiffre d’affaires France est dissimulé dans des paradis fiscaux',
            'message': 'Ce qui nous permet de pratiquer une évasion fiscale massive en déplaçant une grande partie de ses bénéfices vers l’étranger, notamment au Luxembourg. (Source : <a href="https://france.attac.org/nos-publications/notes-et-rapports/article/nouveau-rapport-impunite-fiscale-sociale-et-environnementale-immersion-dans-le">France Attac</a>'
        }
    ]

    const choosenOneHead = randomIndex(messageCart.length);

    afterPricePanier.parentNode.insertBefore(warningMessageAmazon(messageCart[choosenOneHead].title,messageCart[choosenOneHead].message), afterPricePanier.nextSibling);

    const choosenOne = randomIndex(messagesPossible.length);

    const amountPrice = document.getElementById("gutterCartViewForm")
    amountPrice.parentNode.insertBefore(warningMessageAmazon(messagesPossible[choosenOne].title,messagesPossible[choosenOne].message, 'info',
        '<p>Avec ce geste, vous ne compenserez pas votre achat, ' +
        'mais c\'est une première action.</p>'), amountPrice.nextSibling);
}

function inProduct(){
    //pas de panier
    const titleProduct = document.getElementById("productTitle")
    if(titleProduct){//sur un article
        if(titleProduct.textContent.includes('Apple iPhone 14 (128 Go)')) //Reconditionné Apple iPhone 14 ?
        {
            const preloadLandingPage = document.getElementById("rw-preload-landing-image_div")
            if(preloadLandingPage) {
                preloadLandingPage.parentNode.insertBefore(warningMessageAmazon('-19% en reconditionné, voilà une offre qui vaut le détour !','Retrouvez l\'iPhone 14 128Go reconditionné à seulement 700€ sur différents sites Certideal, Recommerce, Rebuy, BackMarket, ...'), preloadLandingPage.nextSibling);
            }
        }
        if(titleProduct.textContent.includes('Apple iPhone 13 (128 Go)')) //Reconditionné Apple iPhone 14 ?
        {
            const preloadLandingPage = document.getElementById("rw-preload-landing-image_div")
            if(preloadLandingPage) {
                preloadLandingPage.parentNode.insertBefore(warningMessageAmazon('-26% en reconditionné, voilà une offre qui vaut le détour !','Retrouvez l\'iPhone 13 128Go reconditionné à seulement 547€ sur différents sites Certideal, Recommerce, Rebuy, BackMarket, ...'), preloadLandingPage.nextSibling);
            }
        }
    }


    //Prendre conscience de l'achat
    //Hide buttons and replace by fake button to take conscience
    const addToCartButton = document.getElementById("atc-declarative")
    if(addToCartButton){
        //copy of button
        addToCartButton.style.visibility = 'hidden';
        addToCartButton.style.position = 'absolute';
        const fakeBuy = document.createElement("div");
        fakeBuy.id = 'fakeBuy';
        fakeBuy.innerHTML =
            '  <span class="a-declarative" data-action="dp-pre-atc-declarative" id="fakeBtn1">' +
            '    <span class="a-button a-spacing-small a-button-primary a-button-icon natc-enabled">' +
            '      <span class="a-button-inner">' +
            '        <i class="a-icon a-icon-cart"></i>' +
            '        <input title="Ajouter au panier" data-hover="Sélectionnez ' +
            '					<b>__dims__</b> à gauche' +
            '					<br> pour l\'ajouter au panier d\'achat" class="a-button-input attach-dss-atc" type="button" value="Ajouter au panier">' +
            '        <span  class="a-button-text" aria-hidden="true">Ajouter au panier</span>' +
            '      </span>' +
            '    </span>' +
            '  </span>';

        fakeBuy.addEventListener("click", (event) => {
            onClickBuy(event);
        });

        addToCartButton.parentNode.insertBefore(fakeBuy, addToCartButton.nextSibling);

    }

    const buyNowButton = document.getElementById("buyNow")

    if(buyNowButton){
        //copy of button
        buyNowButton.style.visibility = 'hidden'
        buyNowButton.style.position = 'absolute';

        const fakeBuyNow = document.createElement("div");
        fakeBuyNow.id="fakeBuyNow";
        fakeBuyNow.classList.add('a-section')
        fakeBuyNow.classList.add('a-spacing-base')

        fakeBuyNow.innerHTML =
            '  <span class="a-button a-button-oneclick a-button-icon onml-buy-now-button">\n' +
            '    <span class="a-button-inner">\n' +
            '      <i class="a-icon a-icon-buynow"></i>\n' +
            '      <input title="Acheter cet article" data-hover="__dims__" class="a-button-input" >\n' +
            '      <span class="a-button-text" aria-hidden="true"> Acheter cet article </span>\n' +
            '    </span>\n' +
            '  </span>';

        fakeBuyNow.addEventListener("click", (event) => {
            onClickBuy(event);
        });

        buyNowButton.parentNode.insertBefore(fakeBuyNow, buyNowButton.nextSibling);
    }
}

showBanniere();
// displayDescription();


//Le saviez-vous panier
const afterPricePanier = document.getElementById("deselect-all")
if(afterPricePanier) {
    afterPrix(afterPricePanier);
}
else{
  inProduct();
}



