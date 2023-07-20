// <%= EJS %>
// EJS :- Embedded Javascript Templating
// What is the "E" for? "Embedded?" Could be. How about "Effective," "Elegant," or just "Easy"? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.


const express = require('express');
var items =[];
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
   var today = new Date();
   var options ={
      weekday: "long",
      day: "numeric",
      month: "long"
   };
   var day = today.toLocaleDateString("en-US",options);
   // var cD = today.getDay();
   // var day = "";
  //  if(cD === 0 ){
  //   day = "Sunday"
  //  }
  //  else if(cD === 1){
  //   day = "Monday"
  //  }
  //  else if(cD ===2){
  //   day = "Tuesday"
  //  }
  //  else if(cD === 3){
  //   day = "Wednsday"
  //  }
  //  else if(cD === 4){
  //   day = "Thursday"
  //  }
  //  else if(cD === 5){
  //   day = "Friday"
  //  }
  //  else if(cD === 6){
  //   day = "Saturday"
  //  }

   // switch(cD){
   //  case 0:
   //    day = "Sunday"
   //    break;
   //    case 1:
   //    day = "Monday"
   //    break;
   //    case 2:
   //    day = "Tuesday"
   //    break;
   //    case 3:
   //    day = "Wednsday"
   //    break;
   //    case 4:
   //    day = "Thursday"
   //    break;
   //    case 5:
   //    day = "Friday"
   //    break;
   //    case 6:
   //    day = "Saturday"
   //    break;
   //    defalt:
   //    console.log("Error");

   // }

     // res.sendFile(__dirname + "/index2.html")
  //  }else{
  //   day = "Weekday"
  //   // res.render("list",{kindOfDay:day})
  //  }
   res.render("list",{kindOfDay: day, newlistitems: items });
})
app.get("/work",(req,res)=>{
   var today = new Date();
   var options ={
      weekday: "long",
      day: "numeric",
      month: "long"
   };
   var day = today.toLocaleDateString("en-US",options);
   res.render("work",{kindOfDay: day, newlistitems: items });
})


// app.get("/",(req,res)=>{
//     var today = new Date();
//     var cD = today.getDay();
//     if(cD == 6 || cD == 0 ){
//         res.write("<h1>Yeh!! Its Holiday</h1>")

//     }
//     else{
//         res.write("<h1>Common coolBURG, Its Working Time</h1>");
        
//     }
//     res.send();
// })
app.post("/",(req,res)=>{
 var item =  req.body.newItem;
 items.push(item);
//   console.log(item);
  res.redirect("/");
  
})

app.post("/work",(req,res)=>{
   var item =  req.body.newItem;
   items.push(item);
  //   console.log(item);
    res.redirect("/work");
    
  })

app.listen(5000,()=>{
    console.log("Server is running on 5000 port");
})

// Need of templates :-
// When we creaste  a template and then we will use it very repetative time and change the certain 
// paths and parameters in it according to our need.

//EJS

