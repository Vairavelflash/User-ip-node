const express = require('express');


const app = express();
app.listen(3000, () => {
  // console.log('listening at 3000')
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


const { MongoClient } = require("mongodb");


// Replace the following with your Atlas connection string                                                                                                                                        
const url = "***";
const client = new MongoClient(url);
const dbName = "myFirstDatabase";

async function dbtest() {
await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);

      // Use the collection "people"
      const col = db.collection("people");                                                                                                                                                         

   await client.close();
}
dbtest();





app.get('/getcheck', (request, response) => {
 response.send("hello world hi");
});

app.post('/postapi', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  // database.insert(data);
  // console.log(data);
  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);

      // Use the collection "people"
      const col = db.collection("people");      
      await col.insertOne(data);
console.log(data);
   
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
  
  response.json(data);
});

