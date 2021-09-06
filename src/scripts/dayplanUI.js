const table = document.querySelector("table").firstElementChild;

export const generateTable = async (hours, plan) => {
  const timeTable = await plan;
  const tableHead = document.createElement("tr");
  tableHead.innerHTML = `<tr>
          <th>~</th>
          <th>Dziś</th>
        </tr>`;
  table.appendChild(tableHead);

  hours.forEach((element, index) => {
    const row = document.createElement("tr");
    const hours = document.createElement("td");
    const subject = document.createElement("td");

    hours.innerText = element;
    subject.innerText = timeTable.data[index]
      ? timeTable.data[index].title.replace(/\n/g, "")
      : "";
    if (timeTable.data[index] && timeTable.data[index].flag === "odwołane") {
      subject.innerHTML = `<del>${subject.innerHTML}</del>`;
    }
    row.appendChild(hours);
    row.appendChild(subject);
    table.appendChild(row);
  });
};
