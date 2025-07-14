const express= require('express');
const app = express();
const port = 3000;
const path = require('path')


app.listen(port,()=>{
    console.log(`localhost running at http://localhost:${port}`);
})

app.use(express.static(path.join(__dirname,'public')));

//Configura express para interpretar dados de formulário
app.use(express.urlencoded({ extended: true }));

//motor ejs usado para rederizar arquivos de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));


//endpoint para processar informações do formulário e encaminhar para tela de resposta
app.post('/processar',(req,res)=>{
    const {nome,idade} = req.body
    const mensagem = `Olá ${nome}! Você tem ${idade} anos. Daqui a 20 anos você terá ${idade+20}`;

    res.render('answer', {mensagem}) 
})

//endpoint para receber um json estático
app.get('/dados',(req,res)=>{
    res.json({
        nome: 'Rafael',
        email:'rafael@gmail.com'
    })
})