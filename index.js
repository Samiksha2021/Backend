// node js file system ko access krta h or crud operation perform krta h

// let data = require('./index.js')
// console.log(data.sum(4,6));
// data.add()


/******************************We will perform crud operation by using code***************************** */

// let fs= require('fs')
// console.log(fs,"err");

// fs.writeFileSync('abc.txt',"this code will create a new file, ")

// let data= fs.readFileSync('abc.txt')
// console.log(data.toString(),"rrr");

// fs.appendFileSync('abc.txt'," It also perform read update and delete operation").

// fs.unlinkSync('abc.txt')



/*********************1*********************npm***************************************************** */
// let joke=require('give-me-a-joke')
// joke.getRandomDadJoke((data)=>{
//     console.log(data);
// })


/*******************************************server*********************************************************** */
// express node js ka framework h
// let express=  require('express')
// let app=      express()
// app.use((req,res)=>{
//     res.send('<h1>hello new server</h1>')
// })
// app.listen(3000,()=>{
//     console.log("server running on port no 3000");
// })

/************************************************************************************************************ */
// let express=  require('express')
//  let app=      express()
//  app.get('/',(req,res)=>{
//     res.send("This is home page")
//  })
//  app.get('/new',(req,res)=>{
//     res.send("This is new page")
//  })
// //  app.get('/*',(req,res)=>{
// //     res.send("Error 404")
// //  })
//  app.get('/cat',(req,res)=>{
//     res.send("meowwww")

//  })

/*******************************************dynamic routing path parameter********************************** */
// let express=  require('express')
//  let app=      express()
//  app.get('/:kuchbhi',(req,res)=>{
//     console.log(req.params,"rrr");
//     let {kuchbhi}=req.params
//     res.send(` ${kuchbhi}`)
//  })
//  app.listen(3001,()=>{
//         console.log("server running on port no 3001");
//      })

/****************************************query parameter************************************************* */
//      let express=  require('express')
//  let app=      express()
//  app.get('/search',(req,res)=>{
//     console.log(req.query,"rrr");
//     let{firstName,lastName}= req.query

//     res.send(`${firstName} ${lastName}`)
//  })
//             app.listen(3001,()=>{
//             console.log("server running on port no 3001");
//          })


/**********************************creating template****************************************************** */
// ejs is the templating library
// let express=  require('express')
//  let app=   express()

// app.set('view engine' ,'ejs')

// app.get('/',(req,res)=>{
//     let random=  Math.random()*100
//     res.render('first',{random})
//  })
// let todo =['gym','cat','dog']
//  app.get('/home',(req,res)=>{
//     res.render('home',{todo})
//  })

//  app.listen(3001,()=>{
//                 console.log("server running on port no 3001");
//             })

// get server se data fetch krne k liye hota h or post server ko data send krne  k liye
// iska reverse bhi ho skta h but ye secure ni hota h

/*******************************************form (get vs post)*************************************/
// let express=  require('express')
//  let app=   express()

// app.set('view engine' ,'ejs')

// app.get('/',(req,res)=>{
//     res.render('form')
// })

// app.get('/user',(req,res)=>{
//     let{userName,number}=req.query
//     // console.log(req.query,"rrrr");
//     // res.send("Form submitted!!!")
//     res.send(` ${userName} ${number}`)
// })

// app.post('/user',(req,res)=>{
//     res.send("Form submitted!!!")
// })

// app.listen(3001,()=>{
//     console.log("server running on port no 3001");
// })

/********************************************Restful api****************************************************8 */


let express = require('express')
let app = express()
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

let arr = [
  {
    id: 0,
    userName: "chetan",
    comment: "mai singer hu"
  },
  {
    id: 1,
    userName: "aashish",
    comment: "mai singer nhi hu"
  }, {
    id: 2,
    userName: "Ram",
    comment: "mandir whi banega"
  }, {
    id: 3,
    userName: "sanjh",
    comment: "ab se daily aaungi"
  }, {
    id: 4,
    userName: "aniket",
    comment: " sir doubt solve nii ho rhaa"
  }, {
    id: 5,
    userName: "poonam",
    comment: " mai kaha bolti hu"
  },

]



app.get('/', (req, res) => {
  res.send('this is home file')
})


app.get('/blog',(req,res)=>{
  res.render('index',{arr})

})

app.get('/blog/new',(req,res)=>{
  res.render('new')
})

app.post('/blog',(req,res)=>{
  console.log(req.body)
  let{ userName,comment}=req.body
  arr.push({userName,comment})
  res.redirect('/blog')
})

app.get('/blog/:id',(req,res)=>{

    console.log(req.params,"rrrr")
  
    let {id}=req.params
  
     let SearchC=   arr.filter((key)=>{
          return key.id==id
        })
        console.log(SearchC)
  
  
  
    // res.send('idddd')
    res.render('show',{SearchC})
  })
  

let port = 3000
app.listen(port, () => {
  console.log(`server running on port  ${port}`)
})






