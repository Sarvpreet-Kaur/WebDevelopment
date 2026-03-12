const {url}= require('./url')
const {MongoClient} = require('mongodb')

const client = new MongoClient(url);
const dbName = 'MongoLearning';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    //this does not checks whether a db exist or a collection exist or not
    const db = client.db(dbName);
    const collection = db.collection('user');


    //it is a cursor which points to a particular document
    //it does not calls the server
    // const findResult =  collection.find({});
    // const ans = await findResult.toArray();

    //this command does, toArray() does - operation can be dangerous as it fetches complete data 
    //that can crash the server if the ram size is not enough to handle database
    // const ans = await collection.find({}).toArray();
    // console.log(ans)

    // let balance = 0;
    // const findResult =  collection.find({});
    // //fetches document 1 by 1
    // for await (const doc of findResult){
    //     console.log(doc);
    //     balance++;
    // }
    // console.log('Found documents =>', balance);


    // const insertResult = await collection.insertOne({name:"ABCDEF", age:40});
    // console.log('Inserted documents =>', insertResult);

    const insertResult = await collection.insertMany([
        {name: "EFG", age: 30},
        {name: "HIJ", age: 30},
        {name: "KLM", age: 30},
        {name: "NOP", age: 30}
    ]);
    console.log('Inserted documents =>', insertResult);

    // const filteredDocs = await collection.find({ age: 30 }).toArray();
    // console.log('Found documents filtered by { age: 30 } =>', filteredDocs);

    // const filteredDocs = await collection.deleteOne({ name: "EFG", age: 30 })
    // console.log('Deleted documents filtered by { age: 30 } =>', filteredDocs);

    // const filteredDocs = await collection.deleteMany({  age: 30 })
    // console.log('Deleted documents filtered by { age: 30 } =>', filteredDocs);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


//If database or collection does not exist, MongoDB does not throw an error
//rather it creates the reference and physically it is created when any 
//documents are inserted