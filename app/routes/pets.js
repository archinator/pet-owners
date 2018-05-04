module.exports = function(app) {

    var pets = require('../controllers/pet.controller.js');

    app.post('/pets', pets.create);

    app.get('/pets', pets.findAll);

    app.get('/pets/:petId', pets.findOne);

    app.put('/pets/:petId', pets.update);

    app.delete('/pets/:petId', pets.delete);
}