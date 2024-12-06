const http = require('http');
const app = require('./index');
const PORT = process.env.PORT || 4000

const server = http.createServer(app);

server.listen(PORT,()=>{
     console.log(`Server running at port ${PORT}`);
})


