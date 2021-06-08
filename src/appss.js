const path=require('path')
const express = require('express')
const hbs=require('hbs')


const app=express()
const port = process.env.PORT || 3000


const directorypath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

app.use(express.static(directorypath))

app.get('',(req,res)=>{
    res.render('index',{
        title : "what's my name",
        name : "Deepanshu Rajput"
    })
})



app.get('/help',(req,res)=>{
    res.render("help",{
        title:'help',
        age:34

    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title: "my fav bike"
    })
})
app.get('/weather',(req,res)=>{
   
    if(!req.query.address)
        return res.send("ERROR: address is not given") 
    
        
    
        console.log(req.query.address)
        res.send({
            forecast:'it is snowing',
            location:req.query.address
        })
    })

app.listen(port , ()=>{
    console.log("server is up for start"+ port)
})