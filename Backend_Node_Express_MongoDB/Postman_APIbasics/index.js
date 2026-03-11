const express = require('express');
const app = express();

//----------------------------------------------------------------

//Response stores all the data related to which method, headers etc.
// app.use("/user", (req, res)=>{
//     res.send({name: "Reet"})
// })
//------------------------------------------------------------------

//to post: we need parser 

/*
app.use(express.json());
//middleware: JSON -> JS object
app.post("/user", (req, res)=>{
    console.log(req.body)
    console.log(typeof(req.body.age))
    res.send("DATA RECEIVED")
})
*/

const bookStore = [
    {   
        "id": 1,
        "bookName": "1984",
        "author": "George Orwell"
    },
    {   
        "id": 2,
        "bookName": "To Kill a Mockingbird",
        "author": "Harper Lee"
    },
    {   
        "id": 3,
        "bookName": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
    },
    {   
        "id": 4,
        "bookName": "Pride and Prejudice",
        "author": "Jane Austen"
    },
    {   
        "id": 5,
        "bookName": "The Hobbit",
        "author": "J.R.R. Tolkien"
    },
    {   
        "id": 6,
        "bookName": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling"
    },
    {   
        "id": 7,
        "bookName": "The Alchemist",
        "author": "Paulo Coelho"
    },
    {   
        "id": 8,
        "bookName": "Crime and Punishment",
        "author": "Fyodor Dostoevsky"
    },
    {   
        "id": 9,
        "bookName": "Animal Farm",
        "author": "George Orwell"
    },
    {   
        "id": 10,
        "bookName": "The Adventures of Sherlock Holmes",
        "author": "Arthur Conan Doyle"
    },{   
        "id": 11,
        "bookName": "Harry Potter and the Deadly Hallows",
        "author": "J.K. Rowling"
    }
]
app.use(express.json());

// works differently from get, post, patch, put method

// app.use("/books", (req, res)=>{
//     res.send(bookStore)
// })

// app.use("/books/:id", (req, res)=>{
//     const id = parseInt(req.params.id);
//     // console.log(typeof req.params.id)
//     const Book = bookStore.find(info => info.id === id);
//     res.send(Book);
// })



app.get("/books", (req, res)=>{
    const query = req.query;
    console.log(query);

    let Book = bookStore
    if(query){
        if(query.id)
        Book = Book.filter(info => info.id === parseInt(query.id))

        if(query.bookName)
        Book = Book.filter(info => info.bookName === query.bookName)

        if(query.author)
        Book = Book.filter(info => info.author === query.author)
    }
    res.send(Book)
})

app.get("/books/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    // console.log(typeof req.params.id)
    const Book = bookStore.find(info => info.id === id);
    res.send(Book);
})

//currently saved in RAM: removes when server restarts
app.post("/books", (req, res)=>{
    console.log(req.body);
    bookStore.push(req.body);
    res.send("DATA SAVED")
})

app.patch("/books", (req, res)=>{
    console.log(req.body)
    const book = bookStore.find(info=> info.id===(req.body.id));
    
    if(req.body.bookName) book.bookName=req.body.bookName;
    if(req.body.author) book.author=req.body.author;

    res.send("Updated")
    
})

app.put("/books", (req, res)=>{
    const book = bookStore.find(info=> info.id===req.body.id);
    
    book.bookName=req.body.bookName;
    book.author=req.body.author;
    
    res.send("Updated")
})

app.delete("/books/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const ind = bookStore.findIndex(info=> info.id===id)
    bookStore.splice(ind, 1);
    res.send("DELETED !!")
})

app.listen(5000, ()=>{
    console.log("Listening")
})