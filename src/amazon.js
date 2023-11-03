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

toto.appendChild(pItem)


// Make a banner
const bannerAmazon = document.getElementById("nav-belt")
const bannerKickStarter = document.createElement("div");


const mode = 'CA_ECHO'; //CA_ECHO || Fusee
bannerKickStarter.style.height = '33px';

if('CA_ECHO' === mode) {

    let messages = [
        "Notre mission, vous faire acheter toujours plus ! + 16 % de croissance annuelle grâce à vous ❤️",
        "Un peu d'argent sur votre compte ? On vous aide à le dépenser rapidement !",
        "Besoin d'un objet inutile ? On a la solution pour vous !"
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
