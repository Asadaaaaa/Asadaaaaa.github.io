import data from "./Portfolio.js";

let listItems = document.getElementById("listItems");
let items = "";

const subStrDesc = (description) => {
  let desc = ""

  if(description.length > 62) {
    desc = description.substring(0, 59) + "..."
  } else {
    desc = description
  }

  return desc;
}

data.forEach((val) => {
  let item = `
    <a class="Container" href="${val.redirect}">
      <img id="logo" src="${val.img}" alt="">
  
      <div class="Details">
        <p id="title">${val.title}</p>
        <p id="description">
          ${subStrDesc(val.desc)}
        </p>
      </div>
    </a>
  `
  items += item;
});

listItems.innerHTML = items;

