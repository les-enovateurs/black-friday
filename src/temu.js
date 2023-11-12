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
        {title: "Avant d'acheter, comparez bien nos prix avec d'autres sites... et vérifiez les prix des derniers mois",
            message: "Régulièrement, les sites e-commerce gonflent leurs prix quelques semaines avant de vous proposer des \"promotions\"..."
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
            "Nos produits sont de très mauvaise qualité (et parfois non-conformes), mais vous aimez tellement acheter des objets à petits prix : ça nous fait plaisir !",
            "Nos produits ne respectent pas les standards de qualité de l’Union européenne. Mais vous les achetez toujours, merci à vous !",
            "Aux Etats-Unis, nous sommes accusés de ne rien faire pour empêcher le travail forcé.",
            "On perd en moyenne 30€ par commande mais on adore aspirer vos données personnelles 😉",
            "Surprise ! N'oubliez pas de payer les frais de douane supplémentaires en récupérant vos colis.",
            "Un problème avec votre commande ? il faudra patienter : nous ne sommes pas faciles à contacter..."
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
        const titleParagraph = document.createElement('div');
        titleParagraph.classList.add('_1zYTUuvV', '_3xkxWP5c');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('_2KKJM5DO');

        const pImageC = document.createElement('div');
        pImageC.classList.add('_3Pw1pBZP');

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('_1FTV-YvS');

        const separatorDiv = document.createElement('div');
        separatorDiv.classList.add('_1y7qebj5');

        const inSepDiv = document.createElement('div');
        inSepDiv.classList.add('_2xDbifG1');

        separatorDiv.appendChild(inSepDiv)

        const containImg = document.createElement('div');
        containImg.classList.add('_1bAz04FF');

        const imgElement = document.createElement('img');
        imgElement.setAttribute('data-cui-image', '1');
        imgElement.setAttribute('data-state', 'succ');
        imgElement.classList.add('eIhG16Mc');
        imgElement.setAttribute('src', 'https://aimg.kwcdn.com/upload_aimg/temu/be808b00-7243-47ec-83a0-41014f0a9720.png.slim.png?imageView2/2/w/800/q/70');
        imgElement.setAttribute('alt', '');
        imgElement.setAttribute('style', 'height:22px;width:22px');
        imgElement.setAttribute('aria-hidden', 'true');
        imgElement.setAttribute('data-did-mount', '1');

        containImg.appendChild(imgElement);

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('_3SEPECJN');

        const spanElement = document.createElement('span');
        spanElement.setAttribute('style', 'font-weight:500;color:#000000;font-size:16px');
        spanElement.setAttribute('tabindex', '0');
        spanElement.innerText = 'Avez-vous vraiment besoin de ces objets qui vont faire le tour du monde juste pour vous ?';

        pImageC.appendChild(spanElement);
        titleContainer.appendChild(pImageC);

        containerDiv.appendChild(containImg);
        containerDiv.appendChild(separatorDiv);
        containerDiv.appendChild(titleContainer);

        imageContainer.appendChild(containerDiv);

        titleParagraph.appendChild(imageContainer);

        basketDiv.previousSibling.appendChild(titleParagraph);

        const btnBuy = document.getElementsByClassName("_3fKiu5wx _3zN5SumS _253TaDHo checkoutButton");
        if(btnBuy.length < 1) {
            console.error("cannot add a checkout message");
            return;
        }
        const btnBuyDiv = btnBuy[0];
        const textBtn = document.createElement('p')
        const divM = document.createElement('div')
        textBtn.textContent = 'Encore un peu de place chez vous ? Remplissez, remplissez votre panier et vos placards !';
        const textBtnP = document.createElement('p')
        textBtnP.textContent = 'Plus de place chez vous ? Remplissez la niche du chien, le garage, la boîte aux lettres...';

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

