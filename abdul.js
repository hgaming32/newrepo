const correctInput = document.getElementById("gIdea");
const newInputId = document.getElementById("gName");
const btnSumbit = document.getElementById("gSubmit");
const tableElement = document.getElementById("tableLine");

btnSumbit.addEventListener("click", (e) => {
    e.preventDefault();
    let tableRow = document.createElement("tr");
    let tBody = document.createElement("td");
    let newTBody = document.createElement("td");
    const newCorrectInput = correctInput.value;
    const newInputIdElement = newInputId.value;
    tBody.innerText = newCorrectInput;
    newTBody.innerText = newInputIdElement;
    tableRow.appendChild(tBody);
    tableRow.appendChild(newTBody);
    tableElement.appendChild(tableRow);
    console.log(tableRow);
});
