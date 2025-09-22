const obj = fetch('http://api.weatherapi.com/v1/current.json?key=018ad09cd13c42cd806111743250709&q=London&aqi=yes');

// console.log(obj); gives output as Promise{pending}

//Time taken can be more or less - this should not be chosen
// setTimeout(()=>{
//     console.log(obj);
// }, 2000);

//Correct Way: This obj is the Promise object
/* will work when the data will be fetched

If request rejected then catch will handle
*/

// obj.then((response_from_API)=>{
//     console.log(response_from_API);
// }).catch((error) => {
//     console.log(error);
// })

// obj.then((response)=>{
//     // console.log(response.json()); //also a promise
//     const promise = response.json();

//     promise.then((data)=>{
//         console.log(data);
//     })
// })

// const promise = obj.then((response)=>{
//     // console.log(response.json()); //also a promise
//     return response.json();    
// });
// promise.then((data)=>{
//     console.log(data);
// });

//PROMISE CHAINING
// const promise = obj.then((response)=>{
//     // console.log(response.json()); //also a promise
//     return response.json();    
// }).then((data)=>{
//     console.log(data);
// });


// obj
// .then(response=> response.json())
// .then(data=>console.log(data));


fetch('http://api.weatherapi.com/v1/current.json?key=018ad09cd13c42cd806111743250709&q=London&aqi=yes')
.then(response=> response.json())
.then(data=>console.log(data.current.temp_c))
.catch(error=>console.log(error));