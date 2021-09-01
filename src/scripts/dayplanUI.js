const table = document.querySelector("table").firstElementChild;

export const generateTable = async (hours, plan) => {
  const timeTable = await plan;
  hours.forEach((element, index) => {
    const row = document.createElement("tr");
    const hours = document.createElement("td");
    const subject = document.createElement("td");

    hours.innerText = element;
    subject.innerText = timeTable.data[index]
      ? timeTable.data[index].title.replace(/\n/g, "")
      : "";

    row.appendChild(hours);
    row.appendChild(subject);

    table.appendChild(row);
  });
};
