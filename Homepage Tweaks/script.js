document.addEventListener('DOMContentLoaded', function() {
    var locationsMenu = document.getElementById('locations-menu');
    var heroSection = document.querySelector('.hero');
    var formHeading = document.querySelector('#form-prenotazione h3');
    var heroText = heroSection.querySelector('.hero__txt');
    
    if (locationsMenu) {
        var listItems = locationsMenu.getElementsByTagName('li');
        for (var i = 0; i < listItems.length; i++) {
            var anchorTag = listItems[i].getElementsByTagName('a')[0];
            if (anchorTag) {
                anchorTag.removeAttribute('href');
            }
        }
    }

    heroText.innerHTML='<div id="Lampo_Vairant_Desktop"> <h1>Trova la tua casa per le vacanze nell’Alto Adriatico, senza stress.</h1> <p>Siamo scelti da +130.000 clienti ogni anno per:</p> <ul class="Variant_ul"> <li> <span class="span_bold">Prezzi convenienti</span> e senza intermediari </li> <li><span class="span_bold">Ampia scelta</span> di strutture e servizi</li> <li> <span class="span_bold">Staff</span> in loco <span class="span_bold">gentile e professionale</span> </li> </ul> </div> <div id="Lampo_Vairant_Mobile"> <h1>Trova la tua casa per le vacanze nell’Alto Adriatico, senza stress.</h1> <p>Ti aspettiamo a <a href="https://www.lampo.it/bibione/strutture/">Bibione</a>, <a href="https://www.lampo.it/caorle/strutture/">Caorle</a>,<a href="https://www.lampo.it/jesolo/strutture/">Jesolo</a>, <a href="https://www.lampo.it/altanea/strutture/">Lido Altanea</a> e <a href="https://www.lampo.it/p-s-margherita/strutture/">P.S.Margherita</a></p> <ul class="Variant_ul_Mobile" style="list-style-type: disc;"><p style="padding:0px;">Oltre 130.000 clienti ci scelgono ogni anno per:</p><li> <span class="span_bold">Prezzi convenienti</span> e senza intermediari </li> <li><span class="span_bold">Ampia scelta</span> di strutture e servizi</li> <li> <span class="span_bold">Staff</span> in loco <span class="span_bold">gentile e professionale</span> </li> </ul> </div>';

    formHeading.textContent = "Cerca tra +3000 strutture";
});