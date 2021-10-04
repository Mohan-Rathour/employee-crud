const Employee = require('../models/employee');
const request = require('request');


let Q = require('q');
let getEmployeeObj = (obj) => {
    let employee = {};
    employee['name']= obj.name;
    employee['email']= obj.email;
    employee['phone'] = obj.phone;
    employee['department']= obj.department;
    return employee
}
 
module.exports =  {
    
    getEmployees: () => {
        console.log(Employee);
        
        let deffer = Q.defer(); 
        
        Employee.find({}, (err, data)=>  {
            if(err) {
                deffer.reject(err)
            }
            deffer.resolve(data);
            
        });
        return deffer.promise;

    },
    getEmployeeById: (id) => {
        let deffer = Q.defer();
        Employee.find({_id: id}, (err, data)=>  {
            if(err) {
                deffer.reject(err)
            } 
            deffer.resolve(data[0]);
        });
        return deffer.promise;
        
    },
    createEmployee: (obj) => {
        let deffer = Q.defer();
        
        Employee.insertMany(getEmployeeObj(obj), (err, data)=> {
            if(err) {
                deffer.reject(err)
            }
            deffer.resolve();
        });
        
        return deffer.promise;
    },

    updateEmployee: (id, obj) => {
        let deffer = Q.defer();
        
        Employee.find({_id: id}, (err, data)=>  {
            if(err) {
                deffer.reject(err)
            }
            Employee.update(getEmployeeObj(obj), (error, responseData)=> {
                if (error) return deffer.reject(error);
                deffer.resolve(responseData); 
            });
        });
        return deffer.promise;
    },
    deleteEmployee: (req, res) => {

    },
    
}