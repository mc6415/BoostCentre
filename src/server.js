import path from 'path';
import {Server} from 'http';
import Express from 'express';
import * as fs from 'fs';

const app = new Express();
const server = new Server(app);

app.use('/js', Express.static(path.join(__dirname, 'static', 'js')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if(err){return console.error(err);}

  console.info(`Server now running on port ${port}`)
});
