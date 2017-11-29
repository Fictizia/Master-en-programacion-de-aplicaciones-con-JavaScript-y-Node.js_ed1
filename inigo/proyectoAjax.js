//FUllContact
//crossorigin.me
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}


peticionAjax("https://api.fullcontact.com/v2/person.json?email=inigojorcano@gmail.com&apiKey=3bb940e8f739e0ec");
peticionAjax("https://api.fullcontact.com/v2/person.json?phone=+34699523001&apiKey=3bb940e8f739e0ec");


peticionAjax("https://api.fullcontact.com/v2/person.json?phone=+13037170414&apiKey=3bb940e8f739e0ec");
