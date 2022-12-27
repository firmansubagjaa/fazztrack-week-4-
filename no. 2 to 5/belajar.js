//memanggil id dan tag html dengan DOM
const tableBody = document.querySelector("#myTable");

// membuat function async await
const tableData = async () => {
  //membuat try and catch
  try {
    //memanggil API
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const json = await data.json();
    const dataMap = await json.map((element) => {
      //membuat tag tr baru
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
      `;
      tableBody.append(row);
    });
    console.log(dataMap);
  } catch (err) {
    console.log(err);
  }
};

console.log(tableData());
