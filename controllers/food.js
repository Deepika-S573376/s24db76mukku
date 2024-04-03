var food = require('../models/food');
// List of all food
exports.food_list = function(req, res) {
 res.send('NOT IMPLEMENTED: food list');
};
// for a specific food.
exports.food_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};
// Handle food create on POST.
exports.food_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: food create POST');
};
// Handle food delete from on DELETE.
exports.food_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: food delete DELETE ' + req.params.id);
};
// Handle food update form on PUT.
exports.food_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: food update PUT' + req.params.id);
};


exports.food_list = async function(req, res) {
    try{
    thefood = await food.find();
    res.send(thefood);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
 
exports.food_view_all_Page = async function(req, res) {
    try{
    thefoods = await food.find();
    res.render('food', { title: 'food Search Results', results: thefoods });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    // Handle food create on POST.
exports.food_create_post = async function(req, res) {
    console.log(req.body)
    let document = new food();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.food_type = req.body.food_type;
    document.food_size = req.body.food_size;
    document.food_price = req.body.food_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    