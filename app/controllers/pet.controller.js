var Pet = require('../models/pet.js');

exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({message: "Pet can not be empty"});
    }
    var pet = new Pet({name: req.body.name || "Untitled Pet", description: req.body.description, age: req.body.age});

    pet.save((err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Pet."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    Pet.find((err, pets) => {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving pets."});
        } else {
            res.send(pets);
        }
    });
};

exports.findOne = (req, res) => {
    Pet.findById(req.params.petId, (err, pet) => {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Pet not found with id " + req.params.petId});                
            }
            return res.status(500).send({message: "Error retrieving pet with id " + req.params.petId});
        } 

        if(!pet) {
            return res.status(404).send({message: "Pet not found with id " + req.params.petId});            
        }

        res.send(pet);
    });
};

exports.update = (req, res) => {
    Pet.findById(req.params.petId, (err, pet) => {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Pet not found with id " + req.params.petId});                
            }
            return res.status(500).send({message: "Error finding pet with id " + req.params.petId});
        }

        if(!pet) {
            return res.status(404).send({message: "Pet not found with id " + req.params.petId});            
        }

        pet.title = req.body.title;
        pet.content = req.body.content;

        pet.save((err, data) => {
            if(err) {
                res.status(500).send({message: "Could not update pet with id " + req.params.petId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = (req, res) => {
    Pet.findByIdAndRemove(req.params.petId, (err, note) => {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Pet not found with id " + req.params.petId});                
            }
            return res.status(500).send({message: "Could not delete pet with id " + req.params.petId});
        }

        if(!pet) {
            return res.status(404).send({message: "Pet not found with id " + req.params.petId});
        }

        res.send({message: "Pet deleted successfully!"})
    });
};