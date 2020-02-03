var app = require('./app');
var _a = process.env.PORT, PORT = _a === void 0 ? 9090 : _a;
app.listen(PORT, function () { return console.log("Listening on " + PORT + "..."); });
