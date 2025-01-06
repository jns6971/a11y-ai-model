import * as tf from '@tensorflow/tfjs-node';

/**
 * Loads the trained model for inference.
 * @returns {Promise<tf.LayersModel>} - The loaded model.
 */
export async function loadModel() {
  const model = await tf.loadLayersModel('file://../model/model.json');
  return model;
}

/**
 * Predicts accessibility from input data.
 * @param {tf.Tensor2D} inputData - The input data for prediction.
 * @param {tf.LayersModel} model - The trained model.
 * @returns {tf.Tensor} - The prediction result.
 */
export async function predictAccessibility(inputData, model) {
  return model.predict(inputData);
}

// Usage example:
loadModel().then(model => {
  const newData = tf.tensor2d([[0.5, 1]]); // Example input
  predictAccessibility(newData, model).then(prediction => {
    console.log('Prediction:', prediction.dataSync()[0]);
  });
});