import { rawData } from './../data/webAccessibilityData.js';

console.log('rawData:', rawData);

// Use rawData here
const processedData = rawData.map(item => ({
  contrastRatio: parseFloat(item.contrastRatio),
  hasAltText: !!item.altText,
  // ... other transformations based on your raw data structure
}));

console.log('processedData:', processedData);

export { processedData };