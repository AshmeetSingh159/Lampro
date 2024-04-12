const LampoHomepageVersion1Config = {
	html : {
		VariationHtml : '<div id="Lampo_Vairant_Desktop"> <h1>Trova la tua casa per le vacanze nell’Alto Adriatico, senza stress.</h1> <p>Siamo scelti da +130.000 clienti ogni anno per:</p> <ul class="Variant_ul"> <li> <span class="span_bold">Prezzi convenienti</span> e senza intermediari </li> <li><span class="span_bold">Ampia scelta</span> di strutture e servizi</li> <li> <span class="span_bold">Staff</span> in loco <span class="span_bold">gentile e professionale</span> </li> </ul> </div> <div id="Lampo_Vairant_Mobile"> <h1>Trova la tua casa per le vacanze nell’Alto Adriatico, senza stress.</h1> <p>Ti aspettiamo a <a href="https://www.lampo.it/bibione/strutture/">Bibione</a>, <a href="https://www.lampo.it/caorle/strutture/">Caorle</a>, <a href="https://www.lampo.it/jesolo/strutture/">Jesolo</a>, <a href="https://www.lampo.it/altanea/strutture/">Lido Altanea</a> e <a href="https://www.lampo.it/p-s-margherita/strutture/">P.S.Margherita</a></p> <ul class="Variant_ul_Mobile" style="list-style: square;"><p style="padding:0px;">Oltre 130.000 clienti ci scelgono ogni anno per:</p><li> <span class="span_bold">Prezzi convenienti</span> e senza intermediari </li> <li><span class="span_bold">Ampia scelta</span> di strutture e servizi</li> <li> <span class="span_bold">Staff</span> in loco <span class="span_bold">gentile e professionale</span> </li> </ul> </div>',
		},
	selectors : {
		locationsMenu : '.locations-menu',
		heroSection : '.hero',
		formHeading : '#form-prenotazione h3',
		},
	} ;

function waitUntil(predicate, time = 20000) {
    return new Promise(((resolve) => {
        let int = setInterval(() => {
            if (predicate()) {
                resolve(predicate());
                clearInterval(int);
                int = null;
            }
        }, 500);
        setTimeout(() => {
            if (int !== null) {
                clearInterval(int);
                console.log('condition false');
            }
        }, time);
    }));
}

function LempoHomepageTweaks(){
	
	document.body.classList.add('Lampo_Homepage_Version1');
	
	const Menu = document.querySelector(LampoHomepageVersion1Config.selectors.locationsMenu); 
	const VariantSection = document.querySelector(LampoHomepageVersion1Config.selectors.heroSection);
    

    var listItems = Menu.getElementsByTagName('li');

    for (var i = 0; i < listItems.length; i++) {
        var anchorTag = listItems[i].getElementsByTagName('a')[0];
        if (anchorTag) {
            anchorTag.removeAttribute('href');
        }
    }
    
    const heroText = VariantSection.querySelector('.hero__txt');
    if (heroText) {
        heroText.innerHTML = LampoHomepageVersion1Config.html.VariationHtml ;
    }

    document.querySelector(LampoHomepageVersion1Config.selectors.formHeading).textContent = "Cerca tra +3000 strutture";
}

waitUntil(()=> document.querySelector(LampoHomepageVersion1Config.selectors.locationsMenu) && document.querySelector(LampoHomepageVersion1Config.selectors.heroSection) && document.querySelector(LampoHomepageVersion1Config.selectors.formHeading) ).then((locationsMenu) => {
	LempoHomepageTweaks();
});

