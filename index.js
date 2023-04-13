let express = require('express')
let cors = require('cors')
const port = process.env.PORT || 5000
let router_user = require('./components/user')


let app = express()
app.use(cors())
app.use(express.json())

app.use('/user', router_user)

app.listen(port,()=>{
    console.log('SERVER IS PORT 5000');
})