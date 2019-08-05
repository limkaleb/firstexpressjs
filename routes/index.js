var express = require("express");
var router = express.Router();

const userArr = [
  {
    name: "Ades",
    email: "ades@gmail.com"
  },

  {
    name: "Aqua",
    email: "aqua@gmail.com"
  }
];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/test", function(req, res) {
  res.send("Test berhasil!!!!!");
});

router.get("/user/:username", (req, res) => {
  let username = req.params.username;
  res.send(`username nya adalah ${username} !!!!`);
});

router.get("/tambah/", (req, res) => {
  let angka1 = parseInt(req.query.angka1);
  let angka2 = parseInt(req.query.angka2);
  res.send(`Hasilnya adalah ${angka1 + angka2}`);
});

router.get("/kurang/:angka1/:angka2/", (req, res) => {
  let angka1 = parseInt(req.params.angka1);
  let angka2 = parseInt(req.params.angka2);
  res.send(`Hasilnya adalah ${angka1 - angka2}`);
});

router.post("/body", (req, res) => {
  console.log(req.body);
  let data = req.body;
  res.json({
    message: `Nama adalah ${data.name}, umurnya adalah ${
      data.age
    }, alamatnya adalah ${data.address}`
  });
});

router.put("/coba", (req, res) => {
  console.log(req.body);
  let data = req.body;
  res.json(data);
});

router.delete("/del", (req, res) => {
  console.log(req.body);
  let data = req.body;
  res.status(204).json(data);
});

// router.get("/users", (req, res, next) => {
//   res.status(200).json({ results: userArr });
// });

// router.post("/users", (req, res, next) => {
//   const newUser = {
//     name: req.body.name,
//     email: req.body.email
//   };
//   userArr.push(newUser);
//   res.status(201).json({ results: userArr });
// });

// router.get("/users/:name", (req, res, next) => {
//   let name = req.params.name;
//   let user = userArr.filter(user => user.name === name);
//   res.json({
//     results: user[0]
//   });
// });

// router.put("/users", (req, res, next) => {
//   console.log(req.body);
//   userArr.push(newUser);
//   res.status(201).json({ results: userArr });
// });

// router.delete("/users", (req, res) => {
//   console.log(req.body);
//   userArr.splice(userArr.indexOf(req.body), 1);
//   res.json(userArr);
// });

module.exports = router;
