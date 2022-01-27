
const router = require('express').Router();
const {getExperience, addExperience, getExperienceId, updateExperience, deleteExperience} = require('../controlers/expCtrl')



//get experience user
router.get('/experience', getExperience)


//add experience user
router.post('/experience', addExperience)


//get specific experience by id
router.get('/experience/:id', getExperienceId)


//update specific experience by id
router.put('/experience/update/:id', updateExperience)


//delete specific experience by id
router.delete('/experience/:id', deleteExperience)



module.exports = router;