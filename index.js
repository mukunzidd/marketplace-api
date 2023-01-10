import express from 'express';

const app = express();
const PORT = 8080;

app.use('/status', (req, res) => {
  res.send({ status: 'active' });
});

app.listen(PORT, console.log(`App is listening on port: ${PORT}`));
