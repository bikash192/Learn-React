
const express=require('express');// Importing the express module
const app=express(); // Creating an instance of express
const authRoutes=require('./src/routes/authRoutes');
const cors=require('cors');

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser());
app.use('/auth',authRoutes);
const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));

const PORT=5000;
app.get('/',(req,res)=>{
    res.send('Hello Word')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})