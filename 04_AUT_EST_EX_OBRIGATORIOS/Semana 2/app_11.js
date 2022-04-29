const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title> CURRICULO</title></head> \
              <body>\
                <div id="main"> \
                       <h1> Vitor Moura de Oliveira</h1> \
                       <H2> email: vitor.oliveira@sou.inteli.edu.br</H2> \
                       <p> Tenho 17 anos e sou estudante do curso de Sistemas de Informacao no Instituto de Tecnologia e Lideranca (Inteli). </p> \
                       <p> Sempre gostei de expressar a minha criatividade atraves da arte e tecnologia, sendo assim, aprofundei os meus estudos de design e de softwares de criacao, tendo experiencia profissional: </p> \
                       <ul> \
                        <li>Photoshop</li> \
                        <li>Illustrator</li> \
                        <li>After Effects</li> \
                        <li>Premiere Pro</li> \
                        <li>Maya</li> \
                        <li>Substance Painter</li> \
                       </ul> \
                       <img src="assets/Images/Aranha_v03.png" alt="Minha imagem de teste" width="500" height="600"> \
                       <p> <a href="https://en.wikipedia.org/wiki/Shrek">Melhor filme da historia da humanidade</a> </p> \
              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});