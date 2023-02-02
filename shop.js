// filter
let filter = document.getElementById("filter");
let result = document.getElementById("result");
let listItems = [];
let wtf = [];


var apikey="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

let asyncFunction = async () => {
  let response = await fetch(apikey);
  if (response.status !== 200) {
    throw response.status;
  }
  let responseData = await response.json();
  return responseData;
};

asyncFunction()
  .then((responseData) => {
    responseData.forEach((element) => {
      let li = document.createElement("li");
      let h4 = document.createElement("h4");
      let img = document.createElement("img");
      let prc =document.createElement("prc");
      let p = document.createElement('p');
      let e= document.createElement('i');
      prc.textContent = `${element.price}$`;
      img.src = element.image_link;
      h4.textContent = `${element.name} `;
      p.textContent = `Description: ${element.description}`;
      e.innerHTML = `<i class="fa-sharp fa-solid fa-angle-down"></i>`;
      li.appendChild(h4);
      li.appendChild(e);
      li.appendChild(p);
      li.appendChild(img);
      li.appendChild(prc);
      listItems.push(h4);
      result.appendChild(li);
      li.classList.add("accor");
      h4.classList.add("name");
      p.classList.add("descr");
      img.classList.add("image");
      prc.classList.add("price");
    });
    // accordion
    let accordion = document.querySelectorAll(".accor");
    accordion.forEach(function (element) {
      element.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  })
  .catch((error) => console.log("rejected", error));

// filter
function filterData(searchSymbol) {
  listItems.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(searchSymbol.toLowerCase())) {
      item.parentElement.classList.remove("hide");
    } else {
      item.parentElement.classList.add("hide");
    }
  });
}
filter.addEventListener("keyup", function (event) {
  filterData(event.target.value);
});