let req = new XMLHttpRequest();
req.open("get", "articles.json", true);
req.send();
console.log(req);
req.onreadystatechange = function () {
  if (req.readyState == 4 && req.status == 200) {
    console.log(this.responseText);
    let Maindata = JSON.parse(req.responseText);
    for (let i = 0; i < Maindata.length; i++) {
      Maindata[i].section = "All";
    }
    console.log(Maindata);
    let updatedData = JSON.stringify(Maindata);
    console.log(updatedData);
    console.log("Data Loaded");

    // Insert data in the document
    let mainDiv = document.createElement("div");
    mainDiv.id = "data";
    document.body.appendChild(mainDiv);

    for (let i = 0; i < Maindata.length; i++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let h2Text = document.createTextNode("title " + Maindata[i].id);
      h2.appendChild(h2Text);
      let p1 = document.createElement("p");
      let p1Text = document.createTextNode(`Article Number ${i + 1} Body`);
      p1.appendChild(p1Text);

      let p2 = document.createElement("p");
      let p2Text = document.createTextNode(`Author: ${Maindata[i].name}`);
      p2.appendChild(p2Text);

      let p3 = document.createElement("p");
      let p3Text = document.createTextNode(
        `Category: ${Maindata[i].sectionName}`
      );
      p3.appendChild(p3Text);
      div.appendChild(h2);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      mainDiv.appendChild(div);
    }
  }
};
