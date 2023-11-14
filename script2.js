const html = document.querySelector(".html");
html.style.fontFamily = "Impact,Charcoal,sans-serif";

const header = document.createElement("div");
header.setAttribute("class", "header");
header.innerHTML = `<h1>Let's FAQ</h1>`;
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.height = "50px";
document.body.prepend(header);

function bgColor(elements) {
  elements.forEach((element, index) => {
    if (index % 2 === 0) {
      element.style.backgroundColor = "gray";
    } else {
      element.style.backgroundColor = "lightgray";
    }
  });
}

function toggle(e) {
  const element = e.currentTarget;
  const description = element.nextElementSibling;

  element.classList.toggle("active");

  if (element.classList.contains("active")) {
    description.style.maxHeight = description.scrollHeight + "px";
  } else {
    description.style.maxHeight = null;
  }
}

const accordionElement = document.querySelector(".accordion");

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((userData) => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const userEl = document.createElement("div");
    userEl.setAttribute("class", "section");
    userEl.innerHTML = `<i class="fa-solid fa-angle-down"></i><h3>${userData.name}</h3>`;
    userEl.addEventListener("click", toggle);
    accordionElement.appendChild(container);
    container.appendChild(userEl);

    const contactEl = document.createElement("div");
    contactEl.setAttribute("class", "description");
    contactEl.innerHTML = `<p>${userData.email}, ${userData.phone}</p>`;
    container.appendChild(contactEl);
  });

  // Now call bgColor with the correct elements
  const allContainers = document.querySelectorAll(".container");
  bgColor(allContainers);
}

getUser();
