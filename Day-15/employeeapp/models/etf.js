const mongoose=require('mongoose')
const etfSchema = new mongoose.Schema({
    employeeID: { type: mongoose.Schema.Types.String, ref: 'employees', required: true ,unique: true },
    monthlyContribution: { type: Number, min: 0 }, 
    totalContribution: { type: Number, min: 0 }, 
    lastUpdated: { type: Date, default: Date.now } 
});
const Etf=mongoose.model('Etf',etfSchema) 

const newETF = new Etf({
    employeeID: 'EMP1',
    monthlyContribution: 6500, 
    totalContribution: 60000, 
    lastUpdated: new Date() 
});
 
//newETF.save()

module.exports=Etf