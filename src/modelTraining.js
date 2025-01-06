import * as tf from '@tensorflow/tfjs-node';
import { processedData } from './dataPreparation.js';

// Set the backend to 'tensorflow' for Node.js environment
tf.setBackend('tensorflow');

/**
 * Creates a simple neural network model for accessibility analysis.
 * @param {Array} inputShape - Shape of the input data.
 * @returns {tf.Sequential} - A Sequential model instance.
 */
function createModel(inputShape) {
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 32, activation: 'relu', inputShape: inputShape}));
  model.add(tf.layers.dense({units: 16, activation: 'relu'}));
  model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
  model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});
  return model;
}

// Extract input features and labels
const inputFeatures = processedData.map(d => [d.contrastRatio, d.hasAltText]);
const labels = processedData.map(d => [d.isAccessible ? 1 : 0]);

// Create tensors
const X = tf.tensor2d(inputFeatures, [inputFeatures.length, inputFeatures[0].length]);
const y = tf.tensor2d(labels, [labels.length, 1]);

const model = createModel([X.shape[1]]);

/**
 * Trains the model on the provided data.
 * @param {tf.LayersModel} model - The model to train.
 * @param {tf.Tensor} X - Input features tensor.
 * @param {tf.Tensor} y - Labels tensor.
 * @returns {Promise<void>}
 */
async function train(model, X, y) {
  await model.fit(X, y, {
    epochs: 100,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
      }
    }
  });
}

async function trainAndSaveModel() {
  await train(model, X, y);
  await model.save('file://../model/model.json'); // Save to the 'model' folder
}

trainAndSaveModel().catch(console.error);