const express = require('express');
const path = require('path');
const app = express();

// Statik dosyalar için public klasörü
app.use(express.static(path.join(__dirname, 'public')));

// Tüm rotaları public klasöründeki HTML dosyalarına yönlendir
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

// 404 sayfası için catch-all rota
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Open your browser and navigate to http://localhost:${PORT}`);
});
