var express = require('express');
var axios = require("axios");
var router = express.Router();
var endpoint = require("../config").endpoint;

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log("get Account Info process!");

  //post_url
  var post_url = endpoint.users + "/api/users/";
  //파라메터
  var params = new URLSearchParams();
  params.append("user_email", req.body.user_email);

  console.log("user: ", req.body.user_email);
  console.log("url: ", post_url);

  axios
    .post(post_url, params)
    .then(ret => {
      console.log("ret.status: ", ret.status);
      if (ret.status == "200") {
        if (ret.data.user_email) {
          console.log("ret.data : ", ret.data);
          console.log("ret.data.user_email : ", ret.data.user_email);
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
});

router.get('/update', function (req, res, next) {
  console.log("get Account Info process!");

  //post_url
  var post_url = endpoint.users + "/api/users/update";
  //파라메터
  var params = new URLSearchParams();
  params.append("user_email", req.body.user_email);
  params.append("user_tel", req.body.user_tel);
  params.append("user_nickname", req.body.user_nickname);


  console.log("user_email: ", req.body.user_email);
  console.log("user_tel: ", req.body.user_tel);
  console.log("user_nickname: ", req.body.user_nickname);
  console.log("url: ", post_url);

  axios
    .post(post_url, params)
    .then(ret => {
      console.log("ret.status: ", ret.status);
      if (ret.status == "200") {
        if (ret.data.user_email) {
          console.log("ret.data : ", ret.data);
          console.log("ret.data.user_email : ", ret.data.user_email);
          res.json({
            status: "ok",
            message: "update success",
            data: ret.data
          });
        } else {
          res.json({
            status: "error",
            message: "update fail"
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
});

module.exports = router;