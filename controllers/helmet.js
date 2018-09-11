const { Helmet, Review } = require("../models/Helmet");

module.exports = {
  index: (req, res) => {
    Helmet.find({}).then(helmets => {
      res.render("index", { helmets });
    });
  },
  show: (req, res) => {
    Helmet.findOne({ _id: req.params.id }).exec(function(err, helmet) {
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
    Helmet.findOne({ _id: req.params.id }).then(helmet => {
      helmet.reviews.push({ content });
      helmet.save(err => {
        res.redirect(`/helmet/${helmet._id}`);
      });
    });
  }
};
