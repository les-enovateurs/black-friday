function randomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getpWarningMessage() {
    var messageParagraph = document.createElement('p');
    // messageParagraph.className = 'a-spacing-none a-spacing-top-mini';
    return messageParagraph;
}


function getpWithSource(message, linkSource = '', nameSource = '') {

    let messageW = message;
    if ('' !== linkSource) {
        messageW += ' (Source : ' + nameSource + ')';
    }

    return messageW;
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
    if (possibleBaskets.length !== 1) {
        console.error("cannot add a checkout message");
        return;
    }
    const basketDiv = possibleBaskets[0];
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("bProductLine", "jsbProductLine", "jsbProductExpressAction");

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

    if (possibleBanners && possibleBanners.childNodes.length > 0) {
        const bannerMessages = [
            "En moyenne, vos colis contiennent 50% de vide 😲 ! Résultat : un suremballage complètement inutile. (source : ADEME)",
            "30% des articles réexpédiés par les clients finissent à la poubelle. Un gâchis monumental ! (source : RTBF)",
            "1/3 des retraits de colis sont spécialement réalisés en voiture 🌪️ (source : ADEME)",
            "2,5 tonnes : poids total des objets accumulés chez nous. Et si on mettait notre logement au régime ? (source : ADEME)"
        ]
        const randomBannerMessagesIndex = randomIndex(bannerMessages.length);

        const titleParagraph = document.createElement("p");
        titleParagraph.id = 'tessst'
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

function cart() {
    const possibleBaskets = document.getElementsByClassName("_3ErQlFp_ _2lHq6MJZ");
    if (possibleBaskets.length !== 1) {
        console.error("cannot add a checkout message");
        return;
    } else {
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
        spanElement.innerText = 'Avez-vous vraiment besoin de ces objets qui vont faire le tour du monde pour arriver jusqu\'à vous ?';

        pImageC.appendChild(spanElement);
        titleContainer.appendChild(pImageC);

        containerDiv.appendChild(containImg);
        containerDiv.appendChild(separatorDiv);
        containerDiv.appendChild(titleContainer);

        imageContainer.appendChild(containerDiv);

        titleParagraph.appendChild(imageContainer);

        basketDiv.previousSibling.appendChild(titleParagraph);

        const btnBuy = document.getElementsByClassName("_3fKiu5wx _3zN5SumS _253TaDHo checkoutButton");
        if (btnBuy.length < 1) {
            console.error("cannot add a checkout message");
            return;
        }

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


        const choosenOne = randomIndex(messagesPossible.length);

        const btnBuyDiv = btnBuy[0];
        const textBtn = document.createElement('div')
        const divM = document.createElement('div')
        textBtn.textContent = messagesPossible[choosenOne].title;
        const textBtnP = document.createElement('div')
        const textBtnPP = document.createElement('p')
        textBtnPP.textContent ='Avec ce geste, vous ne compenserez pas votre achat, ' +
            'mais c\'est une première action.';
        textBtnP.appendChild(messagesPossible[choosenOne].message)
        textBtnP.appendChild(textBtnPP)


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

function init() {
    generateBannerMessage();
    cart();
}

sleep(2000).then(() => init());

