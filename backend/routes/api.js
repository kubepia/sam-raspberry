var express = require("express");
var router = express.Router();

movies = [
  { id:"1",image: "2.jpg", title:"Mon titre 1" },
  { id:"2",image: "3.jpg", title:"Mon titre 1" },
  { id:"3",image: "4.jpg", title:"Mon titre 1" },
  { id:"4",image: "5.jpg", title:"Mon titre 1" },
  { id:"5",image: "6.jpg", title:"Mon titre 1" },
  { id:"6",image: "7.jpg", title:"Mon titre 1" },
  { id:"7",image: "8.jpg", title:"Mon titre 1" },
  { id:"8",image: "9.jpg", title:"Mon titre 1" },
  { id:"9",image: "10.jpg", title:"Mon titre 1" }
];
/* POST home page. */
router.get("/movies/:genre", function(req, res, next) {
    console.log("called get movies");
    res.json(movies);
});

module.exports = router;
