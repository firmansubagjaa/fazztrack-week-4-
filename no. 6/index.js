const tableBody = document.querySelector("#myTable tbody");

const tableData = async () => {
  try {
    const dataFetch = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const dataJson = await dataFetch.json();
    const dataMap = await dataJson
      .map((element) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
      <td>${element.address.street}
      ${element.address.suite}
      ${element.address.city}
      ${element.address.zipcode}
      </td>
      <td>${element.phone}</td>
      <td>${element.website}</td>
      <td>${element.company.name}</td>
      `;
        tableBody.appendChild(row);
      })
      .join("");
    console.log(dataMap);
    // document.getElementById("MyTable").innerHTML = tr;
  } catch (err) {
    console.log(err);
  }
};

console.log(tableData());
