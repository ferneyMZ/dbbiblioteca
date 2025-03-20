const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const libroRouter = require('./router/libroRouter');
const usuarioRouter = require('./router/usuarioRouter');
const prestamoRouter = require('./router/prestamoRouter');


dotenv.config();
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use("/api", libroRouter);
app.use('/api', usuarioRouter);
app.use('/api', prestamoRouter);


app.get('/api/prestamos',(req,res) => {
    res.json([
    
    ]);
});


app.get('/api/libros',(req,res) => {
    res.json([
    
    ]);
});
app.get('/api/usuarios',(req,res) => {
    res.json([
    
    ]);
});




const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});