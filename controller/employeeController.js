let EmployeeService = require('../services/employeeService');


module.exports =  {
    getEmployees: (req, res) => {
        return EmployeeService.getEmployees().then((err, data) => {
            if(err) {
                return res.send(err);
            }
            return res.send(data);
        });
    },

    getEmployeeById: (req, res) => {
        if(req.params.id) {
            return EmployeeService.getEmployeeById(req.params.id).then((err, data) => {
                if(err) {
                    res.send(err);
                }
                res.send(data);
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