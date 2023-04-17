const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !"
);
//creates an object

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //render converts the object to h1 tag and puts it up on the DOM

// const heading = document.createElement("h1"); //h1 tag is created
// heading.innerHTML = "Hello from JS !";
// const root = document.getElementById("root");
// root.appendChild(heading);
console.log(heading);
