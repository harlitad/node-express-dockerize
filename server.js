let express = require("express");
let app = express();
let router = express.Router();
const port = process.env.PORT || 3000

router.get("/", function (req, res) {
  res.send("welcome!");
});

router.get("/user/:id", function (req, res) {
  res.send("hello, user!");
});

app.use(router);

app.listen(port, () => {
  console.log("server run !");
});
