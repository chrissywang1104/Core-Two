// fetch data from airtable
fetch('https://api.airtable.com/v0/app3Okb7D9jJAXdkz/Christina',{
    headers: {
        Authorization: 'Bearer keym515eYuin1dnCw', // API key (from Airtable account)
    }
})
    .then(response => response.json()) // tells JS to expect data in json format
    .then(data => {
        // all codes inside here

        console.log(data); // **log out of my data, explore in the browser console

        const albumsContainer = document.querySelector('.christina-container'); // tell JS about the div added to the HTML file - to put content inside

        // loop over each record (row) of the Airtable data
        
        albumsContainer.innerHTML += 
        
        albumsContainer.innerHTML += `
          <div class="album">
            <div class="top-band" style="width: ${(album.fields.my_rating / 5) * 100}%"></div>
            <h5>${christina.fields.release_year}</h5>  
            <h3>${christina.fields.title}</h3>
            <h4>${christina.fields.artist}</h4>
            <img src="${christina.fields.pictures[0].thumbnails.large.url}" width'200' />
          </div>
      `;      
        
    )});

  
