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


// console.log("jdkfdjfjdkfjdkfjdkf")
document.body.style.border = "5px solid red";

const toto = document.getElementById("corePrice_feature_div");
console.log(toto)
/*const iframe = document.createElement('script');

iframe.setAttribute('src','https://impactco2.fr/iframe.js');
iframe.setAttribute("data-type", "numerique");
iframe.setAttribute("data-search", "?theme=night");


console.log(iframe)*/

const pItem = document.createElement("p")
pItem.innerText = "La black friday c'est nuls"

if(toto){
    toto.appendChild(pItem)
}


// Make a banner
const bannerAmazon = document.getElementById("nav-belt")
const bannerKickStarter = document.createElement("div");


const mode = 'CA_ECHO'; //CA_ECHO || Fusee
bannerKickStarter.style.height = '33px';

if('CA_ECHO' === mode) {

    let messages = [
        "Notre mission, vous faire acheter toujours plus ! + 16 % de croissance annuelle grâce à vous ❤️",
        "Un peu d'argent sur votre compte ? On vous aide à le dépenser rapidement !",
        "Besoin d'un objet inutile ? On a la solution pour vous !",
        "On teste de nouveaux robots humanoïdes pour préparer vos commandes => - d'employés, + 🤑 ",
        "Des livraisons quasiment gratuites pour vous. Les gaz à effet de serre sont offerts"
    ]

    let positionMessage = Math.floor(Math.random() * (messages.length - 0 + 1) + 0);

//source : https://www.lesechos.fr/industrie-services/conso-distribution/amazon-a-depasse-les-10-milliards-deuros-de-chiffre-daffaires-en-france-1981779
//     bannerKickStarter.textContent = "+ de 10 000 000 000€ de chiffre d'affaires grâce à vos achats ! Merci pour votre confiance ❤️";
    bannerKickStarter.textContent = messages[positionMessage];

// bannerKickStarter.style.background = '#fafafa';
    bannerKickStarter.style.textAlign = 'center';
    bannerKickStarter.style.color = '#fafafa';
    bannerKickStarter.classList.add("a-size-large");
    bannerKickStarter.classList.add("product-title-word-break");
}
else if('FUSEE' === mode){
    let progressVal = '10%';
    let progress = document.createElement("div");
    progress.classList.add("ldtimercont");
    progress.style.width= '70%';
    progress.style.margin = 'auto';

    let state = document.createElement("div");
    state.classList.add('statebar');
    state.style.height='25px';

    progress.appendChild(state);


    let prog = document.createElement("div");
    prog.classList.add('progbar')
    prog.style.width = progressVal;
    prog.style.height='25px';
    prog.style.backgroundColor = '#3480BF';


    progress.appendChild(prog);

    let progbartick = document.createElement("div");
    progbartick.classList.add('progbartick')
    progbartick.style.width = progressVal;
    progbartick.style.height='29px';

    progress.appendChild(progbartick);

    bannerKickStarter.appendChild(progress);
}

bannerAmazon.parentNode.insertBefore(bannerKickStarter, bannerAmazon.nextSibling);



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

//Le saviez-vous panier
const afterPricePanier = document.getElementById("deselect-all")
if(afterPricePanier) {
    afterPricePanier.parentNode.insertBefore(warningMessageAmazon('57% de notre chiffre d’affaires en France est dissimulé dans des paradis fiscaux','Selon l\'association france.attac.org'), afterPricePanier.nextSibling);

    const amountPrice = document.getElementById("gutterCartViewForm")
    amountPrice.parentNode.insertBefore(warningMessageAmazon('Faites un don à une association qui lutte chaque jour au changement climatique ','L\'association' +
        ' <a href="https://les-enovateurs.com" target="_blank">Les Enovateurs</a> ' +
        ' oeuvre pour réduire l\'impact du numérique sur l\'environnement.', 'info',
        '<p>Avec ce geste, vous ne compenserez pas votre achat, ' +
        'mais c\'est mieux que rien du tout.</p>'), amountPrice.nextSibling);
}
else{
    //pas de panier
    const titleProduct = document.getElementById("productTitle")
    if(titleProduct){//sur un article
        if(titleProduct.textContent.includes('Apple iPhone 14 (128 Go)')) //Reconditionné Apple iPhone 14 ?
        {
            const preloadLandingPage = document.getElementById("rw-preload-landing-image_div")
            if(preloadLandingPage) {
                preloadLandingPage.parentNode.insertBefore(warningMessageAmazon('-19% en reconditionné, ça c\'est une véritable offre','Retrouvez l\'iPhone 14 128Go reconditionné à seulement 700€ sur VotreReconditionnée.fr'), preloadLandingPage.nextSibling);
            }
        }
    }
}



