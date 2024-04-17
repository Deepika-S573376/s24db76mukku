const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
food_type: String,
food_size: String,
food_price: {type:Number,min:0,max:10000}
})
module.exports = mongoose.model("food",
foodSchema)