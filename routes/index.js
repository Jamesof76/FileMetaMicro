var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();


/* GET home page. */
var fileSize = "";
router.get('/', function(req, res) {
  //res.render('index', { title: 'File Metadata Micro' });
  res.send('<form method="post" enctype="multipart/form-data" action="/size">'
			+ '<input type="file" name="myFile" /><input type="submit" value="Size" />'
			+ '</form>').end();
  
  
});

router.post('/size', upload.single('myFile'), function(req, res){
	//console.log(req.body);
	console.log(req.file);
	fileSize = req.file.size;
	res.json({"size":fileSize});
});

router.get('/size', function(req, res){
	res.json({"size":fileSize});
});



module.exports = router;
