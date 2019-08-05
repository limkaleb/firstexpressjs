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
  },

  {
    name: "Cleo",
    email: "cleo@gmail.com"
  }
];

router.get("/", (req, res, next) => {
  res.status(200).json({ results: userArr });
});

router.get("/:name", (req, res, next) => {
  let name = req.params.name;
  const found = userArr.some(userArr => userArr.name === name);

  if (found) {
    let user = userArr.filter(user => user.name === name);
    res.json({
      results: user[0]
    });
  } else {
    res.status(400).json({ msg: `${name} is not found!` });
  }
});

router.post("/", (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email
  };
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "Please include a name and email!" });
  }
  userArr.push(newUser);
  res.status(201).json({ results: userArr });
});

router.put("/:name", (req, res, next) => {
  let name = req.params.name;
  const found = userArr.some(userArr => userArr.name === name);

  if (found) {
    const updateUser = req.body;
    userArr.forEach(user => {
      if (user.name === name) {
        user.name = updateUser.name ? updateUser.name : user.name;
        user.email = updateUser.email ? updateUser.email : user.email;
        res.json({ msg: "User updated", user });
      }
    });
  } else {
    res.status(400).json({ msg: `${name} is not found!` });
  }
});

router.delete("/:name", (req, res, next) => {
  let name = req.params.name;
  const found = userArr.some(userArr => userArr.name === name);

  if (found) {
    let user = userArr.filter(user => user.name === name);
    res.json({
      msg: "User deleted",
      users: userArr.filter(user => user.name !== name)
    });
  } else {
    res.status(400).json({ msg: `${name} is not found!` });
  }
});

module.exports = router;
