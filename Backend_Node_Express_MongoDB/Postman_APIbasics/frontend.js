// How API calling and methods work in frontend

//Default method: GET
const res = await fetch('https://api.com/data');
const data = res.json();

const res2 = await fetch('https://api.com.data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John', age: 30})
})

const res3 = await fetch('https://api.com.data', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({age: 30})
})

