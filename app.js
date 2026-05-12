const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('This is Home Page');
});

app.get('/about',(req,res)=>{
    res.send('This is the about page');
});

app.get('/contact',(req,res)=>{
    res.send('This is the contact page');
});

app.get('/services',(req,res)=>{
    res.send('This is the services page');
});

app.get('/products',(req,res)=>{
    res.send('This is product Page');
});

app.get('/collections',(req,res)=>{
    res.send('This is the collections page');
}); 

app.listen(3000,()=>{
    console.log('Server started on port 3000');
});
