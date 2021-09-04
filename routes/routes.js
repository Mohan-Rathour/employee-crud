let EmployeeController =  require('../controller/employeeController');


module.exports = function(app) {
    /**
     *this API will return all the orders 
     http://localhost:3000/employees 
     
     [
         {
            name: 'Arjun',
            email: 'arjun@gmail.com',
            ...
        },
        {}
     ]
     */
    app.route('/api/employees').get(EmployeeController.getEmployees);
    
    /**
     * 
     */
    app.route('/api/employees/:id').get(EmployeeController.getEmployeeById);

    app.route('/api/employee').post(EmployeeController.createEmployee);
    
    /**
     * 
     */
    app.route('/api/employees/:id').put(EmployeeController.updateEmployee);

    /**
     * Delete
     */
    //app.route('/api/employees/:id').delete(EmployeeController.deleteEmployeeyId)

    //app.route('/api/employees/').delete(EmployeeController.deleteAllEmployee)

}