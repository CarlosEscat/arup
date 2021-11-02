const { Router } = require("express");
const router = new Router();

const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// The database to use
const dbName = "sample";

client.connect((err) => {
  const collection = client.db(dbName).collection("sampledata");
  console.log("Connected correctly to database");

  //*** Fetch data ***
  router.get("/", async (req, res) => {
    const page = 1;
    const limit = 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    try {
      await collection.find({}).toArray(function (err, result) {
        res.json(result.slice(startIndex, endIndex));
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //*** Fetch data pagination***
  router.get("/lista", async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    try {
      await collection.find({}).toArray(function (err, result) {
        res.json(result.slice(startIndex, endIndex));
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //*** Fetch one item ***
  router.get("/consumo/:Id", getRow, (req, res) => {
    try {
      res.json(res.message);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //*** Posting new item ***
  router.post("/consumo", async (req, res, next) => {
    const newMsg = {
      fecha: 0,
      hora: 0,
      consumo: 0,
      precio: 0,
      coste: 0,
    };
    console.log(req.body);
    try {
      if (req.body.fecha != null) {
        newMsg.fecha = req.body.fecha;
      }
      if (req.body.hora != null) {
        newMsg.hora = parseFloat(req.body.hora);
      }
      if (req.body.consumo != null) {
        newMsg.consumo = req.body.consumo;
      }
      if (req.body.precio != null) {
        newMsg.precio = parseFloat(req.body.precio);
      }
      if (req.body.coste != null) {
        newMsg.coste = req.body.coste;
      }

      await collection.insertOne(newMsg);
      res.json({ message: "Nuevo elemento añadido con éxito" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    next();
  });

  //*** Update item by id ***
  router.put("/consumo/:Id", getRow, async (req, res) => {
    console.log(req.body);
    try {
      const newMsg = {
        fecha: res.message.fecha,
        hora: res.message.hora,
        consumo: res.message.consumo,
        precio: res.message.precio,
        coste: res.message.coste,
      };
      if (req.body.fecha != null) {
        newMsg.fecha = req.body.fecha;
      }
      if (req.body.hora != null) {
        newMsg.hora = parseInt(req.body.hora);
      }
      if (req.body.consumo != null) {
        newMsg.consumo = parseFloat(req.body.consumo);
      }
      if (req.body.precio != null) {
        newMsg.precio = req.body.precio;
      }
      if (req.body.coste != null) {
        newMsg.coste = parseFloat(req.body.coste);
      }

      await collection.updateOne(
        { _id: res.message._id },
        {
          $set: {
            fecha: newMsg.fecha,
            hora: newMsg.hora,
            consumo: newMsg.consumo,
            precio: newMsg.precio,
            coste: newMsg.coste,
          },
        }
      );
      res.json({ message: "Elemento actualizado con éxito" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //*** Delete message by id ***
  router.delete("/consumo/:Id", async (req, res) => {
    const msgId = req.body.id;
    try {
      await collection.deleteOne({ _id: ObjectId(`${msgId}`) });
      res.json({
        message: "Elemento con Id: " + msgId + " eliminado con éxito.",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //Middleware function to find object by id
  async function getRow(req, res, next) {
    const msgId = req.params.Id;

    try {
      const message = await collection.findOne({ _id: ObjectId(`${msgId}`) });
      res.message = message;
      //console.log(message);
      if (message == null) {
        return res.status(404).json({ message: "Cant find message" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    next();
  }
});

module.exports = router;
