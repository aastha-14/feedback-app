const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "inr",
      description: "₹5 for 5 credits",
      source: req.body.id,
      // billing_details: {
      //   address: {
      //     city: req.body.card.address_city,
      //     line1: req.body.card.address_line1,
      //     line2: req.body.card.address_line2,
      //     state: req.body.card.address_state,
      //     postal_code: req.body.card.address_zip,
      //     country: req.body.card.country,
      //   },
      //   name: req.body.card.name,
      // },
      // shipping: {
      //   address: {
      //     line1: req.body.card.address_line1,
      //     city: req.body.card.address_city,
      //     country: req.body.card.country,
      //     postal_code: req.body.card.address_zip,
      //     state: req.body.card.address_state,
      //   },
      //   name: req.body.card.name,
      // },
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
