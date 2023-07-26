const http = require("http");

const PORT = 3000;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", " text/html");
      res.end(
        "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
      );
    } catch (error) {
      console.error("Error : ", error);
    }
  }
});

server.listen(PORT, () => {
  console.log(`server Running at ${HOSTNAME}:${PORT}`);
});