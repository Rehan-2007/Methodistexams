import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const scamDir = path.join(__dirname, 'scam');

// Serve static assets from both scam folder and root
app.use(express.static(scamDir));
app.use('/scam', express.static(scamDir));
app.use(express.static(__dirname));

// Serve index.html for all page routes
app.get('*', (req, res) => {
  res.sendFile(path.join(scamDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Methodist College Results server running at http://${HOST}:${PORT}`);
});
