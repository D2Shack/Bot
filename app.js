const bedrock = require('bedrock-protocol');
const { ping } = require('bedrock-protocol');
const http = require("http");
const ping0 = require('node-http-ping');
const load = require('./bot').load();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

//Create server for Heroku

const server = http.createServer((req, res) => {
  console.log("On");
  res.end();
}).listen(process.env.PORT || 3000);

//Ping to the Heroku page every 20 min

function trafico(){
  ping0('https://botsito123.herokuapp.com/')
  .then(time => console.log(`Response time: ${time}ms`))
  .catch(() => console.log('Failed to ping'))
};

setInterval(trafico, 20*60*1000);

//Joining into server

ping({ 
    host: data["host"],
    port: data["port"]
}).then(res => {

    load();

}).catch(()=>{
        console.log("Processing")
    })