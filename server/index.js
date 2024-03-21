const express = require('express');
const cors = require('cors')

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rs57bh5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

        const database = client.db("resolute");
        const usersCollection = database.collection("users");
        const commentCollection = database.collection("comment");
       

        // users data save

        app.post('/users', async (req, res) => {
            const data = req.body
            const result = await usersCollection.insertOne(data);
            res.send(result);
        })

        // get all users

        app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result)
        })


        // user image update

        app.patch('/users/:id', async (req, res) => {
            const id = req.params.id;
            const photo = req.body.photo;
            const name = req.body.name;
            const query = { _id: new ObjectId(id) };

            if (req.body.photo) {
                const updatePhoto = {
                    $set: {
                        photo: photo
                    }
                };
                const result = await usersCollection.updateOne(query, updatePhoto);
                res.send(result);
            }
            if (req.body.name) {
                const updateName = {
                    $set: {
                        name: name
                    }
                };
                const result = await usersCollection.updateOne(query, updateName);
                res.send(result);
            }



        })


        // comment post


        app.post('/comments', async (req, res) => {
            const data = req.body
            const result = await commentCollection.insertOne(data);
            res.send(result);
        })

        app.get('/comments', async (req, res) => {
            const comments = await commentCollection.find().toArray();
            res.send(comments.reverse());
        });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})