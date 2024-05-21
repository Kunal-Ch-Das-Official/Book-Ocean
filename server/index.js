/* 
Project Name : Supreme Knowledge Book Store,
 Author: Kunal Chandra Das,
 Description : Main Index file which is an entry point of the server,
 and set up of database, and curd operation algorithm for books Storage.
 Date : 05.05.2024 
 */


    // App Confegurations 
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 5000;
    const cors = require('cors');
   


    // Mongo-db-Confegurations
    const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
    const uri = "mongodb+srv://supreme-knowledge-book-store:IFsYIqQ3HiSVyUOJ@atlascluster.luqeg29.mongodb.net/?retryWrites=true&w=majority";


    // Middlewere
    app.use(cors());
    app.use(express.json());

    // Sending Response To Clients On Home Routes
    app.get('/', (req, res) => {
       res.send("Running");
    });



    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
       serverApi: {
       version: ServerApiVersion.v1,
       strict: true,
       deprecationErrors: true,
    }
    });

    async function run() {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();



    // Create a Collection Of Documents for database
    const booksCollections = client.db('BookInventory').collection('books');



    // Insert a book to the db: on post method in (upload-book) url
    app.post('/upload-book', async(req, res) => {
        const data = req.body;
        const result = await booksCollections.insertOne(data);
        res.send(result);
    });



    // Get all books from the Database, on /all-books url.
    app.get('/all-books', async(req, res) => {
        const books =  booksCollections.find();
        const result = await books.toArray();
        res.send(result);
    });



    // Update a book data : patch or update methods 
    app.patch('/book/:id', async(req, res) => {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert: true};

        const updateDoc = {
            $set: {
                ...updateBookData
            }
        }
        // To Update BookData 
        const result = await booksCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    });



    // Delete a Book From Page 
    app.delete('/book/:id', async(req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await booksCollections.deleteOne(filter);
        res.send(result);
    });



    //  Filter data by categoy 
    app.get('/all-books', async(req, res) => {
        let query = {};
        if(req.query?.category){
        query = {category : req.query.category}
    }
        const result = await booksCollections.find(query).toArray();
        res.send(result);
    });
  

    // To get single book data
    app.get('/book/:id', async (req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await booksCollections.findOne(filter);
        res.send(result);
    });
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
       console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
   }
   }
   // Call run function 
   run().catch(console.dir);


// Applications Port Setup and Listening 
app.listen(port, () => {
    console.log(`Application Is Running On http://localhost:${port}`);
});

