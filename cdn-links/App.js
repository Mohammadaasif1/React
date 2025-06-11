// const reactHeading = React.createElement("h2", {}, "Hello World from React!!");

// const root2 = ReactDOM.createRoot(document.getElementById("root"))

// root2.render(reactHeading);


// how to create Nested div with the help create React

const div = React.createElement("div", {id:"mainDiv"}, 
    [React.createElement("div", {id : "childDiv"}, 
       [ React.createElement("h1", {}, "I am h1 tag in nested div with create React"),
         React.createElement("h2", {}, "I am h2 tag in nested div with create React")
       ]
    ),
    React.createElement("div", {id : "childDiv2"}, 
       [ React.createElement("h1", {}, "I am h1 tag in nested div with create React"),
         React.createElement("h2", {}, "I am h2 tag in nested div with create React")
       ]
    )]
);

console.log(div);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);