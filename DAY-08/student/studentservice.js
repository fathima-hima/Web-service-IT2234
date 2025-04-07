const students =require('./studentdb')  //import student data

//function to get all the students
function getstudents() {
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regno==id)
}

function getByGender(gend){
    return students.filter((student)=>student.gender==gend)
}

function getCourse(cou)
{
    return students.filter((student)=> student.course==cou)
}

module.exports={getStudent,getstudents,getByGender,getCourse}