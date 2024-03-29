const router = require('express').Router();
const nodemailer = require('nodemailer');


router.get('/', (req, res)=>{
    res.send('contacted')
})


router.post('/', (req, res)=>{


    let data = req.body;

    //smtp
    let smtpTransport = nodemailer.createTransport({

        service: 'Gmail',
        // the port of connect
        port: 465,
        //for authenticate
        auth: {
            user: 'priyapragya0710@gmail.com',
            pass: 'priya'
        }
    })

    let mailOptions = {

        from: data.email,
        to: 'priyapragya0710@gmail.com',
        subject: `message from ${data.name}`,
        html: `
        <h3>Informations</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        
        `
    }


    smtpTransport.sendMail(mailOptions, (err, response)=>{

        try {
            if(err) return res.status(400).json({msg: err})

            else {
                return res.status(200).json({msg: "message was sent"})
            }

        } catch (err) {
            res.status(500).json({msg: err})
        }

    })


})




module.exports = router