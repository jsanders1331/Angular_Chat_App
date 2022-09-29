readUser = async function () {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("users");

    let collection = db.collection("data");

    let query = {};

    let res = await collection.find(query).toArray();

    //console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
  await readUser;
};

module.exports = readUser;

/*
 let results = () => {
      return new Promise((resolve,reject) => 
      dbo.collection("products").find({}).toArray(async function (err, res) {
        if (err) throw err;
        db.close();
        console.log(results);
        return results;
      }));
    }
  }
}
*/
