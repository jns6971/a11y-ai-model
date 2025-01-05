import express from 'express';
import { loadModel, predictAccessibility } from './modelInference.js';

const app = express();
const port = 3000;

let model;

async function setup() {
  model = await loadModel();
}

setup().then(() => {
  app.get('/api/check', async (req, res) => {
    const url = req.query.url;
    // Here, you would implement logic to fetch data from the URL, preprocess it,
    // and then use the model for prediction. For now, using dummy data:
    const dummyInput = tf.tensor2d([[0.5, 1]]); // Example input
    const prediction = await predictAccessibility(dummyInput, model);
    res.json({ accessibilityScore: prediction.dataSync()[0] });
  });

  app.listen(port, () => console.log(`Server running on port ${port}`));
});