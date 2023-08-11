import expres from "express"
import morgan from "morgan"
import router from "./routes/notesRoute.js"
import cors from "cors"
import dotenv from 'dotenv'



dotenv.config()

// App root
const app = expres();

//

// Midelware
app.use(morgan('dev'))
app.use(expres.json())
app.use(cors({origin: ['http://localhost:3000']}))
// Routes
app.use('/api/', router)
//On Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log('Server is running in port 5000' + PORT)
})