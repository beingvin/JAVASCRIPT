///////////////////// Vareables

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "b4280a97bdmsh1955b65b09d7bd5p15056djsn5c050e5c2c96",
  },
};

///////////////////// fetch get method

fetch(
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
  options
) 
  .then((response) => response.json())
  .then((response) => {
    /////////////////////  get div id's
    var title = document.getElementById("title");
    var crypto = document.getElementById("crypto");

     ///////////////////// Insert titles to title div
    let wTitle = `<h3>Rank</h3> <h3>Name</h3>  
    <h3> Price (USD) </h3> 
    <h3> Change </h3>
    <h3> Logo </h3>
    <h3> Symbol</h3> `;

    title.innerHTML += wTitle;

    // console.log(response.data.coins[0]);

    
     ///////////////////// Get Coins Data
    let result = response.data.coins;

     ///////////////////// Loop Coins Data to get Sigle Coin Data
    for (x in result) {

      let cName = result[x].name;
      let cPrice = result[x].price;
      let cChange = result[x].change;
      let cRank = result[x].rank;
      let cSymbol = result[x].symbol;
      let cIconURL = result[x].iconUrl;
      // let cColor = result[x].color;

     
      let img = document.createElement("IMG");
      img.style.maxWidth = "50px";
      // img.setAttribute("src", cIconURL);
      img.src += cIconURL;
      let dWrite = `<h3>${cRank}</h3> <h3>${cName}</h3>  
                    <h3> $${parseFloat(cPrice).toFixed(2)} (USD) </h3> 
                    <h3> ${cChange}% </h3>
                    <img  src="${cIconURL}" alt="image">
                    <h3> ${cSymbol}</h3> `;

     ///////////////////// Insert crypto data to crypto div

      crypto.innerHTML += dWrite;

 

    }
  })
  .catch((err) => console.error(err));  ///////////////////// Log Errors

