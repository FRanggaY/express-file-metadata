const express = require('express')
const app = express()
const cors = require('cors')
const fileanalyse = require('./routes/fileanalyse');

const port = process.env.PORT || 3000

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use('/api', fileanalyse)


app.listen(port, function () {
  console.log('Listening to ' + port)
});