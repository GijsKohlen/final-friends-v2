$(".cta").click(function(event) { // als op knop is geklikt laad dan wat er in het linkje staat
    event.preventDefault();
    var modal = $(this).attr('href');
});

$(document).ready(function() { //in de fist load, laat in de thumbs de content van mycontent
    $("#tumz-1 .replace").load("../mycontent1.html .tumz-wrapper");
    $("#tumz-2 .replace").load("../mycontent2.html .tumz-wrapper");
    $("#tumz-3 .replace").load("../mycontent3.html .tumz-wrapper");
});

$('.modal').on('click', '#close', function(event) { // sluit model wanneer er geklikt wordt
    event.preventDefault();
    $("#modal").remove();
    $(".modalpop-up").remove();
});

//tumz1
$('#tumz-1 .cta').click(function() {
    //Dit is een functie dat een 'click' verbindt met'cta'
    //if clicked op .cta in #tumz-1, wordt de volgende code uitgevoerd.
    if ($("#tumz-1").hasClass('open')) {
        $("#tumz-1").removeClass('open');
        $("#tumz-1").css({
            "width": "40vw", // als de cta gesloten is heeft tumz1 een vw van 40
            "position": "fixed",
        });
        $('#tumz-1 .btn-wrapper').css({
            "left": "50%",
            "position": "absolute",
        });

        $("#tumz-1 .p-tag-back").removeClass('visible'); // als er geklikt is verandert de tekst van more naar back
        $("#tumz-1 .p-tag-more").removeClass('hidden');
        $('.modalpop-up').remove(); // als de popup gesloten wordt dan wordt de content hiervan verwijderd uit de homepage
        $("#tumz-1 .replace").load("../mycontent1.html .tumz-wrapper"); //als popup gesloten is, laad mycontent1 in tumz-1


    } else {
        $("#tumz-1").addClass('open');
        $("#tumz-1").css({
            "width": "100vw", //als popup open is heeft hij een vw van 100 
            "z-index": "15",
            "position": "absolute",
        });
        $('#tumz-1 .btn-wrapper').css({ //als popup open is verplaatst de button naar rechts
            "left": "85%",
            "position": "fixed",
        });

        $("#tumz-1 .p-tag-back").addClass('visible'); // als er geklikt is verandert de tekst van more naar back
        $("#tumz-1 .p-tag-more").addClass('hidden');
        $("#tumz-content1").remove(); //als popup open is verwijder dan de content van mycontent1
        $("#tumz-1 .replace").load("../pop1.html .modalpop-up"); // als de popup open is wordt de content van mycontent1 verwijderd 
    };
});

//tumz2
$('#tumz-2 .cta').click(function() {
    if ($("#tumz-2").hasClass('open')) {
        $("#tumz-2").removeClass('open');
        $("#tumz-1").css({
            "visibility": "visible", // als popup dicht wordt dan andere tumz visable
        });
        $("#tumz-3").css({
            "visibility": "visible",
        });
        $("#tumz-2").css({
            "height": "50vh",
            "width": "59vw",
            "left": "50%",
            "transform": "translate(-15%)",
            "z-index": "0",
        });

        $("#tumz-2 .p-tag-back").removeClass('visible'); // als er geklikt is verandert de tekst van more naar back
        $("#tumz-2 .p-tag-more").removeClass('hidden');
        $('.modalpop-up').remove(); //als popup gesloten verwijder content van popup
        $("#tumz-2 .replace").load("../mycontent2.html .tumz-wrapper"); // geloten is originele homepage terug


    } else {
        $("#tumz-2").addClass('open');
        $("#tumz-1").css({
            "visibility": "hidden", // als popup open wordt dan andere tumz hidden
        });
        $("#tumz-3").css({
            "visibility": "hidden",
        });
        $("#tumz-2").css({
            "height": "100vh",
            "width": "100vw",
            "left": "0%",
            "transform": "translate(0%, 0%)",
            "z-index": "20",
        });
        $('#tumz-2 .btn-wrapper').css({
            "position": "fixed",
        });

        $("#tumz-2 .p-tag-back").addClass('visible'); //wanneer geklikt tekst veradert van more naar back
        $("#tumz-2 .p-tag-more").addClass('hidden');
        $("#tumz-2 .replace").load("../pop2.html .modalpop-up");
    };
});

//tumz3

$('#tumz-3 .cta').click(function() {
    if ($("#tumz-3").hasClass('open')) {
        $("#tumz-3").removeClass('open');
        $("#tumz-1").css({
            "visibility": "visible", // als popup gesloten wordt dan komen de andere tumz ook terug
        });
        $("#tumz-2").css({
            "visibility": "visible",
        });
        $("#tumz-3").css({
            "height": "50vh",
            "width": "59vw",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-15%)", // als de popup gesloten wordt, zorgt translate ervoor dat thumb weer op de juiste plek staat
            "z-index": "0",
        });

        $("#tumz-3 .p-tag-back").removeClass('visible'); //wanneer geklikt tekst veradert van more naar back
        $("#tumz-3 .p-tag-more").removeClass('hidden');
        $('.modalpop-up').remove();
        $("#tumz-3 .replace").load("../mycontent3.html .tumz-wrapper");

    } else {
        $("#tumz-3").addClass('open');
        $("#tumz-1").css({
            "visibility": "hidden", //als modal open is is content 1 verborgen 
        });
        $("#tumz-2").css({
            "visibility": "hidden", //als modal open is is content 2 verborgen 
        });
        $("#tumz-3").css({
            "height": "100vh",
            "width": "100vw",
            "left": "0%",
            "top": "0%",
            "transform": "translate(0%, 0%)",
            "z-index": "30",
        });


        $("#tumz-3 .p-tag-back").addClass('visible');
        $("#tumz-3 .p-tag-more").addClass('hidden');
        $('#tumz-3 .btn-wrapper').css({
            "position": "fixed",
        });

        $("#tumz-3 .replace").load("../pop3.html .modalpop-up");
    };
});