const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const videos = require('./data');
const courses = require('./courses_data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', function(req, res) {
  const about = {
    avatar_url: "https://avatars1.githubusercontent.com/u/6152122?s=400&v=4",
    name: "Diego Jurfest",
    role: "Desenvolvedor Front-End Jr.",
    description: `Programador front-end (Angular e ReactJS), back-end (NodeJS) e 
    mobile (React Native e Swift). Engenheiro Elétrico. Colaborador da 
    <a href = "https://www.vagas.com.br" target = "_blank">Jurfest Apps</a>.`,
    links: [
      { name: "GitHub", url: "https://github.com/jurfest" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "LinkedIn", url: "https://linkedin.com/in/diegojurfest" }
    ]
  }
  return res.render('about', { about: about });
});

server.get('/portfolio', function (req, res) {
  return res.render('portfolio', { items: videos });
});

server.get('/contents', function (req, res) {
  return res.render('contents', {items: courses });
});

server.get('/video', function( req, res) {
  const id = req.query.id;
  const video = videos.find(function(video) {
    return video.id === id
  })

  if (!video) {
    return res.send("Video not found.");
  }
  return res.render("video", { item: video });
});

// Atention: this error route must be below all other routes
server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function () {
  console.log('server is running');
});