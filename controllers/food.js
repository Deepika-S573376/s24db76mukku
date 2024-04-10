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

// List of all food
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

   // VIEWS
// Handle a show all view
exports.food_view_all_Page = async function(req, res) {
    try{
    thefood = await food.find();
    res.render('food', { title: 'food Search Results', results: thefood });
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
   }

   // specific food. lab-12 s-1
exports.food_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await food.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
   
   //lab-12 s-2
   exports.food_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await food.findById(req.params.id)
        // Do updates of properties
        if (req.body.food_type)
            toUpdate.food_type = req.body.food_type;
        if (req.body.food_size) toUpdate.food_size = req.body.food_size;
        if (req.body.food_price) toUpdate.food_price = req.body.food_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

// Handle food delete on DELETE.
exports.food_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await food.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };


// Handle a show one view with id specified by query
exports.food_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await food.findById( req.query.id)
    res.render('fooddetail',
    { title: 'food Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


exports.food_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('foodcreate', { title: 'food Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

exports.food_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await food.findById(req.query.id)
    res.render('foodupdate', { title: 'food Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    //s9

    exports.food_delete_Page = async function (req, res) {
        console.log("Delete view for id " + req.query.id)
        try {
            result = await food.findById(req.query.id)
            res.render('fooddelete', {
                title: 'food Delete', toShow:
                    result
            });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };