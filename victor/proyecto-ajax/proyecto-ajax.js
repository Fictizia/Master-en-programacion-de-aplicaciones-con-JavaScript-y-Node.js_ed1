var urlEjemplo = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2b0fc35b474248939de2d3f42afdd5a3&begin_date=19950531&end_date=19950531";

function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            //getData(JSON.parse(xmlHttp.responseText));
            console.log(xmlHttp.responseText);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

peticionAjax("https://www.nytimes.com/1995/05/31/sports/sports-people-football-steelers-foster-is-traded-to-the-carolina-panthers.html");