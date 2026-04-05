const express =  require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Allow requests only from your React frontend
app.use(cors({
  origin: 'http://localhost:3000'
}));


app.get('/api/message', (req, res) => {
    res.json({ message : "Hello from Express Backend via Jenkins CI/CD!"});
});

app.listen(PORT, () => {
    console.log('Backend running at http://localhost:${PORT}');
});

