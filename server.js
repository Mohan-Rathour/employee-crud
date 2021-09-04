let express = require('express');
let bodyParser= require('body-parser');
const cors = require('cors');

const appServer = express();


let routes = require('./routes/routes');
let dbConnection = require('./config/dbConnection');


let corsOptions = {
    origin: "*"
};



appServer.use(cors(corsOptions));
appServer.use(bodyParser.json());

routes(appServer);
//appServer.get('/api/employees', EmployeeController.getEmployee());

appServer.get('/', function(req, res){
    res.send({"name": "MicroService appServerlication"});
});

const PORT = process.env.PORT || 4000;

appServer.listen(PORT,  () => {
    console.info("Node server is running on PORT " +PORT);
});
