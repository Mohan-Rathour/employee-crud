let EmployeeService = require('../services/employeeService');
const request = require('request');

module.exports =  {
    getEmployees: (req, res) => {
        return EmployeeService.getEmployees().then((err, resData) => {
            if(err) {
                return res.send(err);
            }
            // console.log(resData._id);
            // return request.get('http://localhost:8080/getOrderById/'+resData._id, function(err, data){
            //     if(err) return err;
            //     console.log("In employee_crud controller");
            //     console.log(data.body);
            //     deffer.resolve(data.body);
            //     return res.send(data.body);
            // });
            return res.send(data);
        });
    },

    getEmployeeById: (req, res) => {
        if(req.params.id) {
            return EmployeeService.getEmployeeById(req.params.id).then((resData, err) => {
                if(err) {
                    console.log(err);
                    res.send(err);
                }
                return request.get('http://localhost:8080/getOrderById/'+resData._id, function(err, data){
                    if(err) return err;
                    return res.send(data.body);
                });
            });
        }else {
            res.send({
                message: 'Id missing',
                status: 400
            });
        }
        
    }, 
    createEmployee:  (req, res) => {
        if(req.body.email && req.body.name) {
            return EmployeeService.createEmployee(req.body).then((err, data) => {
                if(err) {
                    res.send(err);
                }
                res.send(data);
            });
        }else {
            res.send({
                message: 'Body is missing'
            });
        }
    },
    updateEmployee:  (req, res) => {
        return EmployeeService.updateEmployee(req.params.id, req.body).then((err, data) => {
            if(err) {
                res.send(err);
            }
            res.send(data);
        });
        
    }
}