const { Items, Review } = require("../models/Items");

module.exports = {
  index: (req, res) => {
    Items.find({}).then(helmets => {
      res.render("helmet/all", { helmets });
    });
  },
  show: (req, res) => {
    Items.findOne({ _id: req.params.id }).exec(function(err, helmet) {
      Review.populate(helmet.reviews, { path: "author" }, function(
        err,
        reviews
      ) {
        helmet.reviews = reviews;
        res.render("helmet/show", helmet);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Items.findOne({ _id: req.params.id }).then(helmet => {
      helmet.reviews.push({ content });
      helmet.save(err => {
        res.redirect(`/helmet/${helmet._id}`);
      });
    });
  }
};
