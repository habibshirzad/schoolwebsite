const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

router.get("/", async (req, res) => {
  const aboutBackend = await loadAbout();
  res.send(await aboutBackend.find({}).toArray());
});

router.delete('/:aboutId', async (req, res) => {
    console.log('>>>', req.params)
    try {
        const aboutBackend = await loadAbout();
        console.log(aboutBackend);
        const response = await aboutBackend.deleteOne({ _id: mongodb.ObjectId(req.params.aboutId) });

        res.send({ message: 'Successfully deleted!'});
    } catch (error) {
        res.status(500).send({ error })
    }
})

async function loadAbout() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://abc123:abc123@ds041546.mlab.com:41546/habib",
    {
      useNewUrlParser: true
    }
  );
  return client.db("habib").collection("about");
}

module.exports = router;