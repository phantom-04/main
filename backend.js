const http = require('http');


const server = http.createServer(route);
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver;


server.listen(3000);



function route(req, res) {

    if(req.url == '/') {
        res.write('<h1>Ivan ist krass</h1>');
    }
    else if(req.url == '/test1') {
        res.write('<h1>test1</h1>');
    }
    else if(req.url == '/test2') {
        res.write('<h1>test2</h1>');
    }
    else {
        //res.write('<h1>404</h1>');
        res.write('<h1>' + req.url.slice(1) + '</h1>')
    }

    res.end();
}

