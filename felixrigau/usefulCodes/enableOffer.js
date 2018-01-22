function enableOfferCodeMotion() {
    // Find source of the offer price - failed
    // app object - https://www.koliseo.com/codemotion/codemotion-madrid
    // var json = JSON.parse(document.scripts[6].innerText);
    // json[0].ticketTypes[0].price = 0;

    var offers = document.querySelectorAll(".ticket-type.sold-out");
    var ids = [];
    var offersText = [];
    for (var i = 0; i < offers.length; i++) {
      offersText.push("".concat("\n",i+1,". ",offers[i].getElementsByTagName("input")[0].name));
      ids.push(offers[i].getElementsByTagName("input")[0].dataset.id);
    }

    var option = prompt(offersText);

    var offer = offers[parseInt(option)-1];
    offer.className = offer.className.replace(" sold-out","") + " .active";
    var input = offer.getElementsByTagName("input")[0];
    input.disabled = false;
    input.min = 1;
    input.max = 1;
}
