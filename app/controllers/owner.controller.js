var Owner = require('../models/owner.js');

exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({message: "Owner can not be empty"});
    }
    var owner = new Owner({name: req.body.name || "Untitled Owner", address: req.body.address, age: req.body.age});

    owner.save((err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the owner."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    Owner.find((err, owners) => {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving owners."});
        } else {
            res.send(owners);
        }
    });
};

exports.findOne = (req, res) => {
    Owner.findById(req.params.ownerId, (err, owner) => {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Owner is not found with id " + req.params.ownerId});                
            }
            return res.status(500).send({message: "Error retrieving owner with id " + req.params.ownerId});
        } 

        if(!owner) {
            return res.status(404).send({message: "Owner is not found with id " + req.params.ownerId});            
        }

        res.send(owner);
    });
};

// exports.update = (req, res) => {
//     Pet.findById(req.params.petId, (err, pet) => {
//         if(err) {
//             console.log(err);
//             if(err.kind === 'ObjectId') {
//                 return res.status(404).send({message: "Pet not found with id " + req.params.petId});                
//             }
//             return res.status(500).send({message: "Error finding pet with id " + req.params.petId});
//         }

//         if(!pet) {
//             return res.status(404).send({message: "Pet not found with id " + req.params.petId});            
//         }

//         pet.title = req.body.title;
//         pet.content = req.body.content;

//         pet.save((err, data) => {
//             if(err) {
//                 res.status(500).send({message: "Could not update pet with id " + req.params.petId});
//             } else {
//                 res.send(data);
//             }
//         });
//     });
// };

// exports.delete = (req, res) => {
//     Pet.findByIdAndRemove(req.params.petId, (err, note) => {
//         if(err) {
//             console.log(err);
//             if(err.kind === 'ObjectId') {
//                 return res.status(404).send({message: "Pet not found with id " + req.params.petId});                
//             }
//             return res.status(500).send({message: "Could not delete pet with id " + req.params.petId});
//         }

//         if(!pet) {
//             return res.status(404).send({message: "Pet not found with id " + req.params.petId});
//         }

//         res.send({message: "Pet deleted successfully!"})
//     });
// };