import express from 'express';

const app = express();
const fake_db = "fake db. just go with it";

app.get('/', (req, res) => {
    res.send('Hello World!');
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
