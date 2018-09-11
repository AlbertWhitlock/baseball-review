const { Bat, Review } = require("../models/Bat");

module.exports = {
  index: (req, res) => {
    Bat.find({}).then(bats => {
      res.render("index", { bats });
    });
  },
  show: (req, res) => {
    Bat.findOne({ _id: req.params.id }).exec(function(err, bat) {
      Review.populate(bat.reviews, { path: "author" }, function(err, reviews) {
        bat.reviews = reviews;
        res.render("bat/show", bat);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Bat.findOne({ _id: req.params.id }).then(bat => {
      bat.reviews.push({ content });
      bat.save(err => {
        res.redirect(`/bat/${bat._id}`);
      });
    });
  }
};
