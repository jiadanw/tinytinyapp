const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
}

app.get("/", (req,res) => {
res.send("Hello");

});

app.listen(PORT, () => {
  console.log(`Wangjiadan app listening on port ${PORT}`)
});

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  let templateVars = {greeting:'Hello World 777'};
  res.render("hello_world", templateVars);
});

app.get("/set",(req, res) => {
  const a = 1;
  res.send(`a = ${a}`)
})

app.get("/fetch", (req, res) => {
  res.send(`a = ${a}`);
 });

app.get("/urls",(req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

app.get("/urls/:shortURL",(req, res) => {
  let templateVars = {shortURL : req.params.shortURL, longURL: urlDatabase[req.params.shortURL]}
  res.render("urls_show", templateVars);
})

