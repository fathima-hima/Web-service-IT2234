const mongoose=require('mongoose')

const departmentSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    head: { type: mongoose.Schema.Types.String, ref: 'employees' },
    employees: [{ type: mongoose.Schema.Types.String, ref: 'employees' }]
});
const Department=mongoose.model('Department',departmentSchema) 

const DepartmentDetails=new Department({
    _id:1,
    name:'Information Technology',
    head:'EMP1',
    employees: ['EMP1002', 'EMP1003', 'EMP1004']
})

//DepartmentDetails.save()

module.exports=Department