const express = require('express')
const app = express()
const port = 3000

app.use('/public', express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})