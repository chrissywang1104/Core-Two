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
        data.records.forEach(christina => {
            console.log(christina); // **look in the console at each album to see what fields we can access (these are your own table headers from Airtable)

            // now add HTML to albumsContainer div
            // this is where we take our data from Airtable and put it in out html
            // think of this chunk of HTML as a component template for each entry in our database
            // backticks `` -> allows to add HTML + JS together using ${field} in a single block of code
            albumsContainer.innerHTML += `
            <div class="christina">
            <h5>${christina.fields.year}</h5>
            <h3>${christina.fields.date}</h3>
            <h4>${christina.fields.emotion}</h4>
            <img src="${christina.fields.pictures[0].thumbnails.large.url}" width='200'/>
          </div>
            `;        
        }        
    )});

