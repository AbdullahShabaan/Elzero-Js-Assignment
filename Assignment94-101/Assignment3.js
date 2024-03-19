let myP = document.querySelector("p");
myP.remove();

let ourElement = document.querySelector(".our-element");
let start = document.createElement("div");
start.className = "start";
start.title = "start element";
start.setAttribute("data-value", "Start");
start.textContent = "Start";

let end = document.createElement("div");
end.className = "end";
end.title = "end element";
end.setAttribute("data-value", "End");
end.textContent = "end";

ourElement.before(start);
ourElement.after(end);
