console.log(document.body.children)
let h1Js = document.createElement("h1");
h1Js.innerHTML = "i am h1 from js";
document.body.append(h1Js);
let newButton = document.createElement("button");
newButton.innerHTML = "clek";
document.body.append(newButton)