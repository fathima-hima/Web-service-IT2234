const mongoose=require('mongoose')
const projectSchema = new mongoose.Schema({
     _id: { type: String, required: true },
    name: { type: String, required: true },
    deadline: { type: Date },
    budget: { type: Number, min: 0 },
    employees: [{ type: mongoose.Schema.Types.String, ref: 'employees' }]
});
const Project=mongoose.model('Project',projectSchema)

const projectDetails=new Project({
     _id: 'P001',
    name: 'AI Development',
    deadline: new Date('2025-12-31'),
    budget: 100000,
    employees: ['EMP1001', 'EMP1002', 'EMP1003']
})

//projectDetails.save()

module.exports=Project