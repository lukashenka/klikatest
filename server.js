var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = process.env.PORT || 5000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get("/preloader/", function (req, res) {
    res.sendFile(__dirname + '/public/preloader.jpeg')
})

app.get("/api/songs", function (req, res) {
    var dataGrid = require('./server/SongRepository');
    var options = {
        pageSize: req.query.pageSize,
        page: req.query.page,
        filter: req.query.filter,
        sort: req.query.sort,
    };
    dataGrid.getData(options, function (data) {
        res.send(data);
    }, function (err) {
        res.send({error: err});
    });
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})