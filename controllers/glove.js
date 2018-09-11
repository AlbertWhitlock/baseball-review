const { Glove, Review } = require("../models/Glove");

module.exports = {
  index: (req, res) => {
    Glove.find({}).then(gloves => {
      res.render("index", { gloves });
    });
  },
  show: (req, res) => {
    Glove.findOne({ _id: req.params.id }).exec(function(err, glove) {
      Review.populate(glove.reviews, { path: "author" }, function(
        err,
        reviews
      ) {
        glove.reviews = reviews;
        res.render("glove/show", glove);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Glove.findOne({ _id: req.params.id }).then(glove => {
      glove.reviews.push({ content });
      glove.save(err => {
        res.redirect(`/glove/${glove._id}`);
      });
    });
  }
};
