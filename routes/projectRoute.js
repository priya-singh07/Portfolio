const router = require('express').Router();
const projectSchema = require('../models/projectModel');


//get project 
router.get('/project', async (req, res) => {
    try {
        const project = await projectSchema.find(req.body);
        res.json(project);

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


//add project 
router.post('/project', async (req, res) => {

    const { title, product_id, description, images } = req.body;

    try {
        const project = new projectSchema({
            title,
            product_id,
            description,
            images

        })
        await project.save();
        res.json({ msg: "product added" });

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


//get specific project by id
router.get('/project/:id', async (req, res) => {
    try {
        let project = await projectSchema.findById(req.params.id);
        res.json(project);

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


//update specific project by id
router.put('/project/update/:id', async (req, res) => {
    const { title, product_id, description, images } = req.body;

    try {
        const project = await projectSchema.findByIdAndUpdate(req.params.id, {
            title,
            product_id,
            description,
            images

        })
        await project.save();
        res.json({ msg: "item updated" });

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


//delete specific project by id
router.delete('/project/:id', async (req, res) => {

    let project = await projectSchema.findByIdAndDelete(req.params.id);
    try {

    await project;
    res.json({msg: 'item deleted'});
        
    } catch (error) {
        res.status(500).json({ msg: err })
    }
})



module.exports = router;