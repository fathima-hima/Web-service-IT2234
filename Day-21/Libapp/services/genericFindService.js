const findFun=async (res,Model)=>{
    try {
        const results = await Model.find()
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    } 
}

const filterFun=async (res,Model,filter)=>{
    try {
        const results = await Model.find(filter)
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    } 
}

module.exports={findFun,filterFun}