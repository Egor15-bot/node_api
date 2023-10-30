const express =  require("express")
const cors = require("cors"); // Подключаем cors

const userRouter = require('./routes/user_routes')
const postRouter = require('./routes/post_routes')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors());

app.use(express.json())
app.use('/api',userRouter)
app.use('/api',postRouter)

app.listen(PORT, () => console.log('SERVER STARTED ON ' + PORT))


