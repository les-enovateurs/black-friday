function randomIndex(max){
    return Math.floor(Math.random() * max);
}

function messageBeforeCheckout() {

    const message = [
        {
            title : "Mettez de côté nos promotions un instant, nous vidons probablement nos vieux stocks",
            message : "Avez-vous vraiment besoin de ces objets ?"
        },
        {
            title : "Pour faire des économies pour le portefeuille et préserver la planète : pensez au reconditionné et/ou l'occasion",
            message: "Moins de déchets, moins de pollution et plus d'économies"
        },
        {
            title: "Avant d'acheter, comparez bien nos prix avec d'autres sites et vérifier les prix des derniers mois",
            message: "Régulièrement les sites e-commerces gonflent les prix quelques semaines avant pour proposer des \"promotions\""
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
    const possibleBanners = document.getElementById("mainHeader");

    if(possibleBanners && possibleBanners.childNodes.length > 0){
        const bannerMessages = [
            "Nos produits livrés sont de mauvaises qualités (ou non conformes) mais vous aimez tellement acheter",
            "Nos produits ne respectent pas les standards de qualité exigés par l’Union européenne mais vous achetez toujours...",
            "Aux Etats-Unis, nous sommes accusée de ne rien faire pour empêcher le travail forcé.",
            "On perd en moyenne 30€ par commande mais on aime aspirer vos données personnelles 😉",
            "Un cabinet américain nous accuse d'utiliser un logiciel malveillant, espion et dangereux",
            "Pensez bien à ajouter les frais de douane que vous aurez à payer en récupérant notre colis",
            "Un problème avec une commande, il faudra patienter : nous ne sommes pas facile à contacter"
        ]
        const randomBannerMessagesIndex = randomIndex(bannerMessages.length);

        const titleParagraph = document.createElement("p");
        titleParagraph.id='tessst'
        titleParagraph.textContent = bannerMessages[randomBannerMessagesIndex];
        titleParagraph.style.color = '#000';
        titleParagraph.style.fontSize = '25px';
        titleParagraph.style.textAlign = 'center';
        titleParagraph.style.fontWeight = '500';
        titleParagraph.style.backgroundColor = '#fff';
        //https://www.presse-citron.net/temu-3-raisons-de-ne-pas-acheter-sur-la-plateforme-chinoise/
        //https://www.test-achats.be/famille-prive/droits-des-consommateurs/news/temu-application-ecommerce-danger?updateBeanConsent=true
        possibleBanners.childNodes[0].insertBefore(titleParagraph, possibleBanners.childNodes[0].nextSibling);
    }
}

function cart(){
    const possibleBaskets = document.getElementsByClassName("_3ErQlFp_ _2lHq6MJZ");
    if(possibleBaskets.length !== 1) {
        console.error("cannot add a checkout message");
        return;
    }
    else{
        const basketDiv = possibleBaskets[0];
        const titleParagraph = document.createElement('div')
        titleParagraph.classList.add(...['_1zYTUuvV','_3xkxWP5c'])
        titleParagraph.innerHTML = '<div class="_2KKJM5DO"><div class="_1FTV-YvS"><div class="_1bAz04FF"><div><img data-cui-image="1" data-state="succ" class="eIhG16Mc " src="https://aimg.kwcdn.com/upload_aimg/temu/be808b00-7243-47ec-83a0-41014f0a9720.png.slim.png?imageView2/2/w/800/q/70" alt="" style="height:22px;width:22px" aria-hidden="true" data-did-mount="1"></div></div><div class="_1y7qebj5"><div class="_2xDbifG1"></div></div><div class="_3SEPECJN"><div class="_3Pw1pBZP"><span style="font-weight:500;color:#000000;font-size:16px" tabindex="0" class="">Avez-vous vraiment besoin de ces objets qui vont faire le tour du monde pour arriver à vous ?</span></div></div><div></div></div></div>';
        basketDiv.previousSibling.appendChild(titleParagraph)

        const btnBuy = document.getElementsByClassName("_3fKiu5wx _3zN5SumS _253TaDHo checkoutButton");
        if(btnBuy.length !== 1) {
            console.error("cannot add a checkout message");
            return;
        }
        const btnBuyDiv = btnBuy[0];
        const textBtn = document.createElement('p')
        const divM = document.createElement('div')
        textBtn.textContent = 'Les promotions, peu d\'articles disponibles, des milliers de ventes...';
        const textBtnP = document.createElement('p')
        textBtnP.textContent = 'Se sont des techniques de ventes réputés pour vous faire acheter plus et vous rendre accro. Ne tombez pas dans le piège';


        textBtn.style.color = '#910909'
        textBtn.style.fontSize = '19px';
        textBtn.style.lineHeight = '22px';

        textBtnP.style.color = '#910909'
        textBtnP.style.fontSize = '19px';
        textBtnP.style.lineHeight = '22px';

        divM.appendChild(textBtn)
        divM.appendChild(textBtnP)

        btnBuyDiv.parentElement.previousSibling.appendChild(divM)


    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init(){
    generateBannerMessage();
    cart();
}

sleep(2000).then(() => init());

