// const { Items } = require("../models/Items");

module.exports = {
  index: (req, res) => {
    res.render("app/index");
    // Items.find({})
    //   .limit(10)
    //   .then(bats => {
    //     res.render("app/index", { bats });
    //   });
  }
};
