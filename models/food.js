const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
food_type: String,
food_size: String,
food_price: Number
})
module.exports = mongoose.model("food",
foodSchema)