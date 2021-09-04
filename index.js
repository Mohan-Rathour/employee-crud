const exp = require('express');
const bodyParser = require('body-parser');
const employeeController = require('./controller/employeeController');
const dbConnection = require('./config/dbConnection');
const router = require('./routes/routes');

const app = exp();

app.use(bodyParser.json());
router(app);

app.get('/', (req, res)=>{
    res.send({status: 200, message: "OK"});
});

// app.get('/api/employees', employeeController.getEmployees);

const PORT = 3000;
app.listen(PORT, (req, res)=> {
    console.log("Application started on PORT:" + PORT);
})

