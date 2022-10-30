const express = require("express");
const app= express();

app.all("/test", (req, res) => res.send({"debugToken": process.env.token}))

app.get("/",(req,res)=>{
  res.send("hello"const express = require("express");
const app= express();

app.all("/test", (req, res) => res.send({"debugToken": process.env.token}))

app.get("/",(req,res)=>{
  res.send("hello")
})
//debug things lol
app.listen(3000, () => {
  console.log("project is running!");
})
const Discord = require("discord.js");
 const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 
client.on("ready", () => console.log("ready"))

client.on("messageCreate", message => {
  if(message.channel.id == "1034940722866049205") {
    if(message.content.toLowerCase() != "wooly") message.delete();
  }
}) 

client.login(process.env.token);