const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
}

function generateRandomString() {
  
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
//  console.log(generateRandomString())



app.get("/", (req,res) => {
res.send("Hello");

});

app.listen(PORT, () => {
  console.log(`Wangjiadan app listening on port ${PORT}`)
});

// app.get("/urls.json", (req, res) => {
//   res.json(urlDatabase);
// });

// app.get("/hello", (req, res) => {
//   let templateVars = {greeting:'Hello World 777'};
//   res.render("hello_world", templateVars);
// });

// app.get("/set",(req, res) => {
//   const a = 1;
//   res.send(`a = ${a}`)
// })

// app.get("/fetch", (req, res) => {
//   res.send(`a = ${a}`);
//  });

app.get("/urls",(req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});
app.get("/urls/:shortURL",(req, res) => {
  let templateVars = {shortURL : req.params.shortURL, longURL: urlDatabase[req.params.shortURL]}
  res.render("urls_show", templateVars);
})


app.get("/u/:shortURL", (req, res) => {
  const longURL = urlDatabase[req.params.shortURL]
  res.redirect(longURL);
});


// post

app.post("/urls", (req, res) => {
  console.log(req.body);  
  res.send("Ok");         
});

