const header = document.createElement("div");
header.setAttribute("class", "header");
header.innerHTML = `<h1>Let's FAQ</h1>`;
document.body.prepend(header);

function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

const accordionElement = document.querySelector(".accordion");

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((userData) => {
    //här gör vi titeln
    const userEl = document.createElement("div");
    userEl.setAttribute("class", "section");
    userEl.innerHTML = `<h3>${userData.name}</h3>`;
    userEl.addEventListener("click", toggle);
    accordionElement.appendChild(userEl);

    //Här gör vi vår description som
    const contactEl = document.createElement("div");
    contactEl.setAttribute("class", "description");
    contactEl.innerHTML = ` <p>${userData.email}, ${userData.phone}</p>`;
    userEl.appendChild(contactEl);
  });
}
getUser();
