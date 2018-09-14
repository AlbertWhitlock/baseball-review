const { Items, Review } = require("../models/Items");

module.exports = {
  index: (req, res) => {
    Items.find({ item: "glove" }).then(gloves => {
      res.render("glove/all", { gloves });
    });
  },
  show: (req, res) => {
    Items.findOne({ _id: req.params.id }).exec(function(err, glove) {
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
    Items.findOne({ _id: req.params.id }).then(glove => {
      glove.reviews.push({ content });
      glove.save(err => {
        res.redirect(`/glove/${glove._id}`);
      });
    });
  }
};
