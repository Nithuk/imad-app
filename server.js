var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one':{
        tilte: 'Article one|Nithya',
        heading:'Article one',
        date:'5th july' ,
        content:  
        `<p>
        This is the content of the article one.this is the content of the article one.this is the content of the article one.this is the content of the article one.this is the content of the article one.this is the content of the article one.this is the content of the article one.
        </p>
                    
                    
        <p> 
           This is the content of the article one.this is the content of the article one.this is the content of the
           article one.this is the content of the article one.this is the content of the article one.this is the content
           of the article one.this is the content of the article one.
        </p>
                    
        <p>
            This is the content of the article one.this is the content of the article one.this is the content
            of the article one.this is the content of the article one.this is the content of the article one
           .this is the content of the article one.this is the content of the article one.
        </p>`
},
    'article-two': {
         tilte: 'Article two|Nithya',
        heading:'Article two',
        date:'6th july' ,
        content:  
        `<p>
        This is the content of the article two.this is the content of the article two
        </p>`
},
    'article-three': {
        tilte: 'Article three|Nithya',
        heading:'Article three',
        date:'7th july' ,
        content:  
        `<p>
        This is the content of the article three.
        </p>`
}
};
function createTemplate (data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
       
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="view port" content="width=device-width,initial scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
     
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
               ${date}
            </div>
            <div>
              ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
    var articleName=req.params.articleName;
  res.send(createTemplate (articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
