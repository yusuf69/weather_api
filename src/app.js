const path =require("path")
const express=require("express")
const app=express()
const geocode = require('../uttils/geocode')
const forecast = require('../uttils/forecast')
const hbs=require("hbs")


const dir_path=path.join(__dirname,'../public')
app.use(express.static(dir_path))
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
 app.set('views',viewpath)
 hbs.registerPartials(partialpath)

 app.get('/',(req,res)=>{
    res.render('index',{
        title:"Weather",
        by:"shah faisal"
    })
})
app.get('/weather',(req,res)=>{
if(! req.query.address)
return res.send({error:" provide an address"})

const address= req.query.address

geocode(address, (error, { latitude, longitude, location }= { }) => {
    if (error) {
        return res.send({error})
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return res.send({error})
        }

       res.send({
           location,forecastData,address
       })
        console.log(location)
        console.log(forecastData)
    })
})


    // res.render("index",{
    //     title: "Weather ",
    //     by:"shah fasial"
    // })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        by:"shah faisal"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About  Me"
        ,by:"Shah Faisal"
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"ERROR 404"
        ,by:"Shah Faisal"
        ,error:"The requested help page doesnot exist in my app"
    })
})
app.get('/*',(req,res)=>{
    res.render('404',{
        title:"ERROR 404"
        ,by:"Shah Faisal"
        ,error:"The requested  page doesnot exist in my app"
    })
})



app.listen(3000,()=>{
    console.log("server is on port 3000")
})