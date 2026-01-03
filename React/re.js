const formElement = React.createElement(
    "form",
    { onSubmit: (e) => { 
        e.preventDefault(); 
        alert("Form submitted!"); 
        } 
    },

    React.createElement("label", {}, "Name: "),
    React.createElement("input", { type: "text" }),

    React.createElement("br"),

    React.createElement("label", {}, "Email: "),
    React.createElement("input", { type: "email" }),

    React.createElement("br"),

    React.createElement("button", { type: "submit" }, "Submit")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(formElement);
