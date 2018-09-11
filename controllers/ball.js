const { Ball, Review } = require("../models/Ball");

module.exports = {
  index: (req, res) => {
    Ball.find({}).then(balls => {
      res.render("index", { balls });
    });
  },
  show: (req, res) => {
    Ball.findOne({ _id: req.params.id }).exec(function(err, ball) {
      Review.populate(ball.reviews, { path: "author" }, function(err, reviews) {
        ball.reviews = reviews;
        res.render("ball/show", ball);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Ball.findOne({ _id: req.params.id }).then(ball => {
      ball.reviews.push({ content });
      ball.save(err => {
        res.redirect(`/ball/${ball._id}`);
      });
    });
  }
};
