
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(400).json({ msg: "invalid authorization" });
        }

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(400).json({ msg: "authorization not valid" });
            }

            req.user = user;
            next();

        })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }


}

module.exports = auth




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU5MzFmMDBlMGY2MGQyNTk5OTIwZiIsIm5hbWUiOiJzaW5naCIsImlhdCI6MTY0MTM4ODQwMywiZXhwIjoxNjQxNDc0ODAzfQ.mDNm3a_VDGXAnVKFFYX6b9mPKzXdCVH0ScXm9UfeTpM