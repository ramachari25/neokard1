import express from 'express';
import {marked} from 'marked';
import cors from 'cors';

const app = express();
app.use(express.json());;
app.use(cors());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  const html = marked(markdown);
  res.json({ html });
});

const PORT =5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
