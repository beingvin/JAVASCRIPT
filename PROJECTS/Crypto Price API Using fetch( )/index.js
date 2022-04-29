///////////////////// Vareables

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "b4280a97bdmsh1955b65b09d7bd5p15056djsn5c050e5c2c96",
  },
};

///////////////////// fetch method

fetch(
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
  options
)
  .then((response) => response.json())
  .then((response) => {
    ///////////////////// Vareables
    var title = document.getElementById("title");
    var crypto = document.getElementById("crypto");
    // var cryptoRank = document.getElementById("cRank");
    // var cryptoName = document.getElementById("cName");
    // var cryptoPrice = document.getElementById("cPrice");
    // var cryptoColor = document.getElementById("cColor");
    // var cryptoChange = document.getElementById("cChange");
    // var cryptoIcon = document.getElementById("cIcon");

    let wTitle = `<h3>Rank</h3> <h3>Name</h3>  
    <h3> Price (USD) </h3> 
    <h3> Change </h3>
    <h3> Logo </h3>
    <h3> Symbol</h3> `;

    title.innerHTML += wTitle;

    console.log(response.data.coins[0]);

    let result = response.data.coins;

    for (x in result) {
      let cName = result[x].name;
      let cPrice = result[x].price;
      let cChange = result[x].change;
      let cRank = result[x].rank;
      let cSymbol = result[x].symbol;
      let cIconURL = result[x].iconUrl;
      let cColor = result[x].color;

      // console.log(cIcon);
      let img = document.createElement("IMG");
      img.style.maxWidth = "50px";
      // img.setAttribute("src", cIconURL);
      img.src += cIconURL;
      let dWrite = `<h3>${cRank}</h3> <h3>${cName}</h3>  
                    <h3> $${parseFloat(cPrice).toFixed(2)} (USD) </h3> 
                    <h3> ${cChange}% </h3>
                    <img  src="${cIconURL}" alt="image">
                    <h3> ${cSymbol}</h3> `;

      crypto.innerHTML += dWrite;

      ///////////////////// Insert HTML
      // document.write(dWrite);
      // cryptoRank.innerHTML += cRank + "<br>";
      // cryptoName.innerHTML += cName + "<br>";
      // cryptoChange.innerHTML += cChange + "<br>";
      // cryptoPrice.innerHTML += cPrice + "<br>";
      // // cryptoIcon.scr(cIconURL);
      // cryptoColor.style.backgroundColor += cColor;
      // cryptoPrice.innerHTML = x;

      // console.log(cryptoIcon.src);

      // let div = document.createElement("div");
      // document.body.append(div);

      // div.append(document.body.append(img));
    }
  })
  .catch((err) => console.error(err));

// let htmlOutput = document.querySelector(".htmlOutput");
// let img =
//   "<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fastcompany.com%2F3034007%2Fwhats-the-difference-between-a-logo-and-a-symbol&psig=AOvVaw3TD4ncAjD0oZVftfhsIopL&ust=1651312944577000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDeneWBufcCFQAAAAAdAAAAABAi' alt=''>";
// // img.src =
// //   img.src +
// //   "";

// for (i = 0; i < 5; i++) {
//   let hello = "<h1>Hello World</h1>";
//   let img = document.createElement("IMG");
//   img.setAttribute(
//     "src",
//     "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg"
//   );
//   htmlOutput.innerHTML += hello;
// }
