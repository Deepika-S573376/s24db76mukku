var express = require('express');
const food_controlers= require('../controllers/food');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  };
/* GET food */

router.get('/', food_controlers.food_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', food_controlers.food_delete );
/* GET detail food page */
router.get('/detail', food_controlers.food_view_one_Page);
/* GET create food page */
router.get('/create',secured,food_controlers.food_create_Page);
/* GET create update page */
router.get('/update',secured, food_controlers.food_update_Page);
/* GET delete food page */
router.get('/delete',secured, food_controlers.food_delete_Page);


module.exports = router;