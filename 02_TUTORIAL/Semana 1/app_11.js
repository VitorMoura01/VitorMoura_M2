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
                       <p> Tenho 17 anos e sou estudante do curso de Sistemas de Informacao no Instituto de Tecnologia e Lideranca. </p> \
                       <img src="Imagens/Aranha_v03" alt="Minha imagem de teste"> \
                       <p> <a href="https://en.wikipedia.org/wiki/Shrek">Clique aqui</a> </p> \
              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});