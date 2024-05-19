import express from 'express'
import con from '../utils/db.js'
import jwk from 'jsonwebtoken'
// * Router is something that help in quick page reload
const router = express.Router()
router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * from admin where email = ? and password = ?"
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({ loginStatus: false, Error: "querry fault" })

        if (result.length > 0) {
            const email = result[0].email;
            const token = jwk.sign({ role: "admin", email: email }, "jwk_secret_key", { expiresIn: "1d" });
            res.cookie('token', token)
            return res.json({ loginStatus: true })
        }
        else
        {
            return res.json({ loginStatus: false, Error: "wrong email or password" });
        }
        
    })
})

export { router as adminRouter }