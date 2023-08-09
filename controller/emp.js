const Emp = require('../models/emp')
const mongoose = require('mongoose')


/// For Create API
function create(req,res,next){
  let empName = req.body.empName;
  let empEmail = req.body.empEmail;
  let empMobile = req.body.empMobile;
  let emp = new Emp({
    empName,
    empEmail,
    empMobile
  })
  emp.save().then((data)=>{
    res.send(data)
  })
}
module.exports.create = create

/// For Read API
function view(req,res,next){
  Emp.find({}).then((data)=>{
    res.send(data)
  })
}
module.exports.view = view

/// For Update

function update(req, res, next) {
  const id = req.params.id; // Assuming the ID is part of the URL parameters
  const updateData = req.body; // Assuming the update data is sent in the request body

  Emp.findByIdAndUpdate(id, updateData, { new: true })
    .then(updatedEmp => {
      if (!updatedEmp) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json(updatedEmp);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Error updating employee' });
    });
}
module.exports.update = update

/// For Delete

function remove(req, res) {
  const id = req.params.id; // Assuming the ID is part of the URL parameters

  Emp.findByIdAndDelete(id)
    .then(deletedEmployee => {
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json({ message: 'Employee deleted successfully' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Error deleting employee' });
    });
}

module.exports.remove = remove