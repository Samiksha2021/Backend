let express=  require('express')
let app= express()
let todo=[1,2,3,4,5]
app.use('/cat',express.static('public'))
app.use(express.urlencoded({ extended:true }));



app.get('/todo',(req, res) =>{
    res.json(todo)
})
app.post('/dog',(req, res) =>{
    // res.send('dog')
    res.send(req.body)
})

app.post('/todo',(req,res)=>{
   console.log(req.body,'hello')
   let {value} = req.body
   console.log(value)
   todo.push(value)
   res.send('hyhyh')    
})

app.listen(3000,()=>{
    console.log("server running on port no 3000");
})