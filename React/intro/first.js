//Create element through JS

// const header1 = document.createElement('h1');
// header1.innerText = "Hii";
// header1.style.backgroundColor = "#D5B8FF";
// header1.style.fontSize = "20px";
// header1.style.color = "grey";

// const header2 = document.createElement('h1');
// header2.innerText = "Hello";
// header2.style.backgroundColor = "#B5EAD7";
// header2.style.fontSize = "20px";
// header2.style.color = "grey";

// const root = document.getElementById('root');
// root.append(header1);

// root.append(header2);

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);


const react = {
    createElement: function(tag, styles, child){
        const ele = document.createElement(tag);

        if(typeof(child) == 'object'){
            for(let val of child){
                ele.append(val);
            }
        }
        else
            ele.innerText = child;

        for(let key in styles){
            //Bracket as it is a JS variable
            ele.style[key] = styles[key];
        }
        return ele;
    }
};

const header1 = react.createElement('h1', {fontSize: "30px", backgroundColor: "#D5B8FF", color:"grey"}, "hii");
const header2 = react.createElement('h1', {fontSize: "30px", backgroundColor: "#B5EAD7", color:"grey"}, "hello");

//Creating an unordered list
const li1 = react.createElement('li', {}, "HTML");
const li2 = react.createElement('li', {}, "CSS");
const li3 = react.createElement('li', {}, "JS");
const li4 = react.createElement('li', {}, "GitHub");


const ul = react.createElement('ul', {fontSize: "30px", color:"#A7C7E7"}, [li1, li2, li3, li4]);


const reactDOM = {
    render: function(element, root){
        root.append(element);
    }
}

const root = document.getElementById('root');
reactDOM.render(header1, root);
reactDOM.render(header2, root);
reactDOM.render(ul, root);