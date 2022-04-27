function fetchData(emotion) {
    fetch('https://api.airtable.com/v0/app3Okb7D9jJAXdkz/Christina',{
        headers: {
            Authorization: 'Bearer keym515eYuin1dnCw', // API key (from Airtable account)
        }
    })
    .then(response => response.json())
    .then(data => { 
        showData(data, emotion);
    });
}

 

function showData(data, emotion) {
    const albumsContainer = document.querySelector('.christina-container'); 

    var html = `<div class="row">`;
    var index = 0;
    var i;
    for (i = 0; i < data.records.length; i++) {
        if (data.records[i].fields.emotion == emotion) {
            html += `
            <div class="col">
                </br>
                <h5 style="color:white; font-family: 'Roboto Mono'; font-size: 2.1em;">${data.records[i].fields.year}${data.records[i].fields.date}</h5>
                <img src="${data.records[i].fields.pictures[0].thumbnails.large.url}" class="rounded-circle" width='200'/>
            </div>
            `;      
            if (index % 3 == 2) {
                html += `</div><div class="row">`;
            }
            index++;
        }
    }

    if (index % 3 == 1) {
        html += `<div class="col"></div><div class="col"></div>`;
    } else if (index % 3 == 2) {
        html += `<div class="col"></div>`;
    }

    html += `</div>`;
    albumsContainer.innerHTML = html;
}


// function showAll() {
//     fetchData(data.records[i].fields.emotion);
// }
function showPicturesForDrinking() {
    fetchData("drinking");
}

function showPicturesForEating() {
    fetchData("eating");
}
function showPicturesForExcited() {
    fetchData("excited");
}
function showPicturesForFrustrated() {
    fetchData("frustrated");
}
function showPicturesForFunny() {
    fetchData("funny");
}
function showPicturesForHappy() {
    fetchData("happy");
}
function showPicturesForStare() {
    fetchData("stare");
}
function showPicturesForLaugh() {
    fetchData("laugh");
}
function showPicturesForSad() {
    fetchData("sad");
}
function showPicturesForSmile() {
    fetchData("smile");
}
function showPicturesForWorried() {
    fetchData("worried");
}

















