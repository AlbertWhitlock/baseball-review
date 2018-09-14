const { Items, Review } = require("../models/Items");

module.exports = {
  index: (req, res) => {
    Items.find({ item: "bat" }).then(bats => {
      res.render("bat/all", { bats });
    });
  },
  show: (req, res) => {
    Items.findOne({ _id: req.params.id }).exec(function(err, bat) {
      Review.populate(bat.reviews, { path: "author" }, function(err, reviews) {
        bat.reviews = reviews;
        res.render("bat/show", bat);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Items.findOne({ _id: req.params.id }).then(bat => {
      bat.reviews.push({ content });
      bat.save(err => {
        res.redirect(`/bat/${bat._id}`);
      });
    });
  }
};
