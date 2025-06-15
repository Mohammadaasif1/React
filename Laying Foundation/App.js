import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hello Ashu By jsx in react 🐱‍🏍</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);

// function component

const Heading = () => {
  return <h1>ashu here </h1>;
};

const Title = () => <h1>Hello this is heading 🐱‍🏍</h1>

const MainHeading = () => (

   <div>
      <Title />
      <h1>Hello Ashu, functioal component 🐱‍🏍</h1>
      <Title />
  </div>
)

root.render(<MainHeading />)
