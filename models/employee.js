// let employee = mongoose => {
//     let schema = mongoose.schema({
//         name: String,
//         email: String,
//         mobile: int,
//         department: String
//     });

//     return  Employee;
// }
// module.exports = employee;

let mongoose= require('mongoose');
let Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    department: String
});

const Employee = mongoose.model('employee', EmployeeSchema);
module.exports = Employee;
    
