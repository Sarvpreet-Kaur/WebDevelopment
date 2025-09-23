const element = React.createElement("h1", {}, "Hello");
const element2 = React.createElement("h1", {}, "Hello");
/*
This works only till React 17 the main disadvantage of this
is that whenever thee is a heavy website if we are on any 1 event 
and wants to 2nd event(button - click) then until the first one is
completely loaded 2nd event does not takes place 

This is because at that time root is in control under js 
which is single threaded and react 18 onwards its under react 
which gives faster responses and quick responses
 */
// ReactDOM.render(element, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

/* using render in react it replace the previous children and replaces it with the new one
*/

const div1 = React.createElement('div', {}, [element, element2]);
root.render(div1);