let rURL = 'wdd330-project/json/data.json';

fetch(rURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    var firstItem = true;
    for (let i = 0; i < companies.length; i++ ) {
      console.log("card #", i,": ", companies[i].company);
      let card = document.createElement('section');//card
      let image = document.createElement('img');//logo
      let div = document.createElement('div');//company info holder
      let h1 = document.createElement('h2');//company name
      let p1 = document.createElement('p');//email
      let p2 = document.createElement('p');//phone number
      let p3 = document.createElement('p');//site reference

      image.src = String(`${companies[i].logolocation}`);
      image.alt = String(`${companies[i].company} - photo`);
      image.width = "250";
      h1.textContent = String(`${companies[i].company}`);
      console.log("companies[i].contactInfo: ", companies[i].contactInfo.telephone);
      p1.innerHTML = String(`Phone: ${companies[i].contactInfo.telephone}`);
      p2.innerHTML = String(`Address: ${companies[i].contactInfo.address}`);
      p3.innerHTML = String(`Website: ${companies[i].url}`);  

      card.appendChild(image);
      div.appendChild(h1);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      card.appendChild(div);
      card.setAttribute("dataset", companies[i].url);
      function openLink(e) {
        e.preventDefault();
        console.log("e.target: ", e.target.attributes[0]);
        window.location = e.target.attributes[0].value;
      }
      card.onclick = openLink;
      card.classList.add('article');

      document.querySelector('#card-layout').appendChild(card);
      firstItem = false;
    }
  });

function changeDisplayStyle(type) {
  console.log("type: ", type);
  document.querySelector('#card-layout').className="";
  type == "grid" ? document.querySelector('#card-layout').classList.add("card-grid") : document.querySelector('#card-layout').classList.add("card-list");
}