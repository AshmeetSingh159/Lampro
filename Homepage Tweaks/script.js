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
	
    if (!document.querySelector('#Lampo_Homepage_Version1')) {
        const stylElement = document.createElement('style');
        stylElement.id = 'Lampo_Homepage_Version1';
        stylElement.innerHTML = `body.Lampo_Homepage_Version1 .hero{
            background-image:url('https://optiabtests.s3.eu-west-2.amazonaws.com/Lampo/header-Desktop.png') !important;  ;
        }
        
        body.Lampo_Homepage_Version1 #Lampo_Vairant_Desktop{
            display: block;
        }
        body.Lampo_Homepage_Version1 .hero__txt p{
            font-family: Yantramanav;
            font-size: 24px;
            font-weight: 400;
            line-height: 40px;
            text-align: left;
        }
        
        body.Lampo_Homepage_Version1 .Variant_ul li{
            list-style:square;
            margin-left: 25px;
        }
        
        body.Lampo_Homepage_Version1 .span_bold{
            font-weight: 700;
        }
        
        body.Lampo_Homepage_Version1 #Lampo_Vairant_Mobile{
            display:none;
        }
        
        @media (max-width: 768px) {
            
            body.Lampo_Homepage_Version1 #Lampo_Vairant_Mobile{
                display:block;
            }
            body.Lampo_Homepage_Version1 #Lampo_Vairant_Desktop{
                display: none;
            }
            
            body.Lampo_Homepage_Version1 #Lampo_Vairant_Mobile h1{
                font-family: Yantramanav;
                font-size: 30px;
                font-weight: 700;
                line-height: 36px;
                text-align: left;
            }
        
            body.Lampo_Homepage_Version1 #Lampo_Vairant_Mobile ul, body.Lampo_Homepage_Version1 #Lampo_Vairant_Mobile p{
                font-family: Yantramanav;
                font-size: 18px;
                font-weight: 400;
                line-height: 25.2px;
                text-align: left;
            }
        
            body.Lampo_Homepage_Version1 .Variant_ul_Mobile li{
                list-style:square;
                margin-left: 10px;
                padding: 4px 0px;
                text-align: left;
            }
            
            body.Lampo_Homepage_Version1 .hero{
                background-image:url('https://optiabtests.s3.eu-west-2.amazonaws.com/Lampo/hero-mob-lampo-poolMobile.png') !important;
                padding-top: 64% !important;
            }
            
        }`;
        document.querySelector('head').appendChild(stylElement);
    }

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

