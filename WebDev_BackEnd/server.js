var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "lab_admin",
    password: "lab_admin",
    database: "mist_lab",
    multipleStatements:true
  });

const UPLOAD_PATH = 'uploads';
const upload = multer({ dest: `${UPLOAD_PATH}/` });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.post('/requestItemStudent', function (req, res) {
  var user = req.body.user;
  var item = req.body.item;
  var amount = req.body.amount;
  console.log(req);
  var sql1="INSERT INTO `requested_item`(`user_key`, `item_key`, `amount`) VALUES ('"+user+"','"+item+"','"+amount+"')";
  var sql2="; UPDATE items SET amount=amount-"+amount+" WHERE id="+item;
  var sql=sql1+sql2;
  console.log(sql);
  con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
     });
});

app.post('/getUser', function (req, res) {
  var user = req.body.user;
  var pass = req.body.pass;
  console.log(req);
  var sql="SELECT user_id,id, type FROM user_login where user_id='"+user+"' and user_pass = '"+pass+"'";
  console.log(sql);
  con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      if(result === undefined || result.length === 0)
      res.send("NOTOK");
      else
      res.send(result);
    });
});

app.post('/getRequestedItems', function (req, res) {
    //console.log(req);
    var sql="SELECT distinct user_login.user_id FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and requested_item.state=0 and items.id = requested_item.item_key";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post('/getStudentPendingItems', function (req, res) {
    console.log(req.body);
    var sql="SELECT items.title,requested_item.amount FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and items.id = requested_item.item_key and requested_item.state=0 and user_login.id='"+req.body.user_id+"'";
    //console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
    });
});


app.post('/getStudentRequestedItems', function (req, res) {
    console.log(req.body);
    var sql="SELECT items.title,requested_item.amount FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and items.id = requested_item.item_key and requested_item.state=0 and user_login.user_id='"+req.body.user_id+"'";
    //console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
    });
});

app.post('/getEditorPendingItems', function (req, res) {
    console.log(req.body);
    var sql="SELECT requested_item.id,items.title,requested_item.amount FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and items.id = requested_item.item_key and requested_item.state=1 and user_login.user_id='"+req.body.user_id+"'";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
    });
});

app.post('/getEditorPendingIds', function (req, res) {
    var sql="SELECT distinct user_login.user_id FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and requested_item.state=1 and items.id = requested_item.item_key";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post('/getStudentHistoryItems', function (req, res) {
    console.log(req.body);
    var sql="SELECT items.title,requested_item.amount FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and items.id = requested_item.item_key and requested_item.state=1 and user_login.id='"+req.body.user_id+"'";
    //console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
    });
});

app.post('/getItems', function (req, res) {
    var cat = req.body.cat;
    console.log(req);
    var sql="SELECT * FROM items where category LIKE '%"+cat+"%'";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
 });

app.post('/addItem', upload.single('photo'), (req, res) => {
    try {
        var name=req.body.itemName;
        var desc=req.body.description;
        var amount=req.body.amount;
        var category=req.body.category;
        var imgpath=req.file.filename;

        var sql="INSERT INTO `items`(`title`, `description`, `amount`, `image`, `category`) VALUES ('"+name+"','"+desc+"','"+amount+"','"+imgpath+"','"+category+"')";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.send({ filename:req.file.filename, originalName:req.file.originalname });
    } catch (err) {
        throw err;
    }
});




app.use('/uploads', express.static(__dirname + '/uploads'));

app.post('/addItemAmount', function (req, res) {

    var itemId = req.body.item;
    var amount = req.body.amount;
    console.log(req);
    var sql="UPDATE items SET `amount`=`amount` + '"+amount+"' WHERE items.id = '"+itemId+"'";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post('/approveRequest', function (req, res) {
    //console.log(req);
    //var sql="SELECT distinct user_login.user_id FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and requested_item.state=0 and items.id = requested_item.item_key";
    var sql="UPDATE requested_item SET state=1 WHERE user_key= (SELECT id from user_login where user_id='"+req.body.std_id+"') and state=0";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send("Approved")
    });
});

app.post('/returnItem', function (req, res) {
    console.log(req);
    var sql="DELETE FROM `requested_item` WHERE user_key = (SELECT id from user_login WHERE user_id='"+req.body.std_id+"') and state=1";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/returnItemAmount', function (req, res) {
    //console.log(req);
    //var sql="SELECT distinct user_login.user_id FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and requested_item.state=0 and items.id = requested_item.item_key";
    var sql1="UPDATE requested_item SET amount=amount-"+req.body.amount+" WHERE id="+req.body.item_id;
    var sql2="; UPDATE items SET amount=amount+"+req.body.amount+" WHERE id= (SELECT item_key from requested_item " +
        "WHERE id="+req.body.item_id+")";
    var sql=sql1+sql2;
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send("Approved")
    });
});

app.post('/getCategories', function (req, res) {
    //console.log(req);
    //var sql="SELECT distinct user_login.user_id FROM `requested_item`, `items`, user_login where user_login.id=requested_item.user_key and requested_item.state=0 and items.id = requested_item.item_key";
    var sql="SELECT * FROM categories";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post('/addCategory', function (req, res) {
    var cat = req.body.cat;
    console.log(req);
    var sql="INSERT INTO `categories`(`name`, `value`) VALUES ('"+cat+"','"+cat+"')";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});



app.post('/deleteCategory', function (req, res) {
    var cat = req.body.cat;
    console.log(req);
    var sql="DELETE FROM `categories` WHERE name = '"+cat+"'";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/deleteRequest', function (req, res) {
    console.log(req);
    var sql="DELETE FROM `requested_item` WHERE user_key = (SELECT id from user_login WHERE user_id='"+req.body.std_id+"') and state=0";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/clearItem', function (req, res) {
    console.log(req);
    var sql="DELETE FROM `requested_item` WHERE id = "+req.body.item_id;
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/getSiteData', function (req, res) {
    console.log(req);
    var sql="SELECT * FROM site_info";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.post('/setTopColor', function (req, res) {
    console.log(req);
    var sql="UPDATE site_info set top_color='"+req.body.topColor+"'";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Changed");
    });
});

app.post('/setBottomColor', function (req, res) {
    console.log(req);
    var sql="UPDATE site_info set bottom_color='"+req.body.bottomColor+"'";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Changed");
    });
});

app.post('/addUser', function (req, res) {
    console.log(req);
    var sql="INSERT INTO `user_login`(`user_id`, `user_pass`, `type`) VALUES ('"+req.body.username+"','"+req.body.password+"','student')";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Added");
    });
});

app.post('/changeLogo', upload.single('file'), (req, res) => {
    try {
        var imgpath=req.file.filename;
        var sql="UPDATE site_info set logo='"+imgpath+"'";
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.send({ filename:req.file.filename, originalName:req.file.originalname });
    } catch (err) {
        throw err;
    }
});

app.listen(8081, function () {
   console.log("Server started");
});
