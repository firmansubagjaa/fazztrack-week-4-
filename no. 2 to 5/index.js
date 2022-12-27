const form = document.querySelector("form");
const tableBody = document.querySelector("#myTable tbody");

// GET
const showData = async () => {
  try {
    const dataFetch = await fetch("https://63a3d436471b38b20616e949.mockapi.io/users", {
      method: "GET",
    });
    const dataJson = await dataFetch.json();
    const dataMap = await dataJson
      .map((element) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>
        <button data-delete = "${element.id}" >Delete</button>
      </td>
      `;
        tableBody.appendChild(row);
      })
      .join("");

    //DELETE
    const dataDelete = document.querySelectorAll("[data-delete]");
    dataDelete.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const fetchDelete = await fetch(`https://63a3d436471b38b20616e949.mockapi.io/users/${e.target.dataset.delete}`, {
          method: "DELETE",
        });
        const deleteFetch = await fetchDelete.json();
        if (dataFetch) {
          location.href = "index.html";
        }
        console.log(deleteFetch);
        console.log(err);
      });
    });
    console.log(dataMap);
    document.getElementById("MyTable").innerHTML = tr;
  } catch (err) {
    console.log(err);
  }
};

console.log(showData());

//POST
form.addEventListener("submit", () => {
  const formData = new FormData(form);

  const fetchData = async () => {
    try {
      const datatest = new URLSearchParams(formData);
      const data = await fetch("https://63a3d436471b38b20616e949.mockapi.io/users", {
        method: "POST",
        body: datatest,
      });
      const dataJson = data.json();
      console.log(dataJson);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
});

//navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((element) => {
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = form.elements.name.value;
//   const email = form.elements.email.value;
//   const payload = {
//     name: name,
//     email: email,
//   };
//   console.log(payload);
// });
