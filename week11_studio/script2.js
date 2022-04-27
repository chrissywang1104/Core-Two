
function animateDiv(){
    var newq = makeNewPosition();
    $(pictureElement.fields.pictures[0].thumbnails.large.url).animate({ top: newq[0], left: newq[1] }, function(){
        animateDiv();        
    });
};

$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}



function showData(data, emotion) {
    const albumsContainer = document.querySelector('.christina-container'); 
    albumsContainer.innerHTML = `<div class="row">`;

    var index = 0;

    data.records.forEach(pictureElement => {
        if (pictureElement.fields.emotion == emotion) {

            albumsContainer.innerHTML += `
            <div class="col">
                <h5>${pictureElement.fields.year}${pictureElement.fields.date}</h5>
                <img src="${pictureElement.fields.pictures[0].thumbnails.large.url}" width='200'/>
            </div>
            `;      
            if (index % 3 == 2) {
                albumsContainer.innerHTML += `</div><div class="row">`;
            }

            index++;
        }
    });   

    albumsContainer.innerHTML += `</div>`;
}





