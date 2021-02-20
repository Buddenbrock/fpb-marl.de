/*
 * Variablen / Konstanten
 */
var bilder = null;		// jQuery Object (enthält alle <img> innerhalb #Bild)
var aktuell = 0;		// Index auf aktuelles Bild
var PAUSE = 1000;		// Zeit in ms zwischen Überblendungen
var BLENDE = 4000;		// Zeit in ms für Überblendung (Aus-/Einblenden)
/*
 * Eventhandler: Document (DOM) vollständig vom Browser geladen
 */
$(document).ready(function() {
    bilder = $('#slideshow img');		// Bilder <img> ermitteln
    bilder.slice(1).hide();				// alle Bilder außer dem ersten ausblenden
});										// (vgl. http://api.jquery.com/slice/)
/*
 * Eventhandler: Webseite komplett inkl. aller Bilder vom Browser geladen
 */
$(window).load(function() {
    /*
     * Funktion ueberblenden
     * blendet das aktuelle Bild aus und das nächste ein
     */
    var ueberblenden = function() {
    // aktuelles Bild ausblenden (vgl. http://api.jquery.com/fadeOut/)
    $(bilder[aktuell]).fadeOut(BLENDE);
        // Index erhöhen
        aktuell++ ;
        // nach letztem Bild Index auf erstes Bild setzen
        if (aktuell >= bilder.length) {
            aktuell = 0;
        }
        // nächstes Bild einblenden (vgl. http://api.jquery.com/fadeIn/)
        $(bilder[aktuell]).fadeIn(BLENDE,function() {
            // nachdem Bild eingeblendet wurde, Timer (Pause) setzen
            // (vgl. https://developer.mozilla.org/en/DOM/window.setTimeout)
            window.setTimeout(ueberblenden,PAUSE);
        });
    };
    // Timer (Pause) für erste Überblendung setzen
    // (vgl. https://developer.mozilla.org/en/DOM/window.setTimeout)
    window.setTimeout(ueberblenden,PAUSE);
});