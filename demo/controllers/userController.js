const userList = (req, res) => {
    res.send('Hello User');
}


const studentDetails = (req, res) => {
    const studentObj = {
        ID: 101,
        name : 'Aryan',
        DOB: '14/11/2000',
        city: 'kolkata',
        marks: {
            arts: 75,
            commerce : 95,
            science: 85
        }
    }

    res.send(studentObj);
}




module.exports = { userList, studentDetails }