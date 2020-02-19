var express = require("express");
var axios = require("axios");
var router = express.Router();
var endpoint = require("../config").endpoint;

/* GET users listing. */
router.post(
  "/",
  function (req, res, next) {
    console.log("user: ", req.body.user_email);
    console.log("password: ", req.body.user_pw);

    if (!req.body.user_email) {
      res.json({
        status: "error",
        message: "no user"
      });
    }
    if (!req.body.user_pw) {
      res.json({
        status: "error",
        message: "no password"
      });
    }
    console.log("ip/pw validation OK!");
    next();
  },
  function (req, res, next) {
    console.log("Login process!");

    //post_url
    var post_url = endpoint.users + "/api/login/";
    //파라메터
    var params = new URLSearchParams();
    //params.append("user_email", req.body.user_email);
    //params.append("user_pw", req.body.user_pw);

    console.log("url: ", post_url);

    axios
      .post(post_url, params)
      .then(ret => {
        console.log("ret.status: ", ret.status);
        if (ret.status == "200") {
          if (ret.data.user_email) {
            res.json({
              status: "ok",
              message: "login success",
              data: ret.data
            });
          } else {
            res.json({
              status: "error",
              message: "login fail"
            });
          }
        } else {
          res.json({
            status: "error",
            message: "server connect error" + ret.status
          });
        }
      })
      .catch(error => {
        res.json({
          status: "error",
          message: error
        });
      });
  }
);

module.exports = router;