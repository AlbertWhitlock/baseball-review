const { Items, Review } = require("../models/Items");

module.exports = {
  index: (req, res) => {
    Items.find({ item: "ball" }).then(balls => {
      res.render("ball/all", { balls });
    });
  },
  show: (req, res) => {
    Items.findOne({ _id: req.params.id }).exec(function(err, ball) {
      Review.populate(ball.reviews, { path: "author" }, function(err, reviews) {
        ball.reviews = reviews;
        res.render("ball/show", ball);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Items.findOne({ _id: req.params.id }).then(ball => {
      ball.reviews.push({ content });
      ball.save(err => {
        res.redirect(`/ball/${ball._id}`);
      });
    });
  }
};
