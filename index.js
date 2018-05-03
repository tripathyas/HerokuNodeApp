var app = require('express')();
var bodyParser = require('body-parser');
var qs = require('querystring');

var util = require('util');
var port = process.env.PORT || 3030;

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/*', function(req, res) {
    return res.render('home');
});

app.post('/*', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.mark);
    console.log(req.body.color);
    console.log(req.body.priority);
    // for(a in req.body){
    //     console.log(util.inspect(a));
    // }
    // var body = '';

    // req.on('data', function(data) {
    //     body += data;

    //     // Too much POST data, kill the connection!
    //     // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    //     if (body.length > 1e6)
    //         req.connection.destroy();
    // });

    // req.on('end', function() {
    //     var post = qs.parse(body);
    //     console.log(post);
    //     return res.render('success');
    //     // use post['blah'], etc.
    // });
    return res.render('success');
    // return res;
})

app.listen(port);
