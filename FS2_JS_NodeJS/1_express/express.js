try {
const port = 3000;

const express = require('express')

const app = express();

app.get('/', (req, res) => {

res.send('Hello World')

});

app.listen(port, () => {

console.log('ok on' + port)
});
} catch(error){
    console.log("error occurred");
}


