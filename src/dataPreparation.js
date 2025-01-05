import _ from 'lodash';

let rawData = [...]; // Placeholder for your data

/**
 * Processes raw data to extract and transform necessary fields.
 * @param {Array} rawData - Array of objects containing raw data.
 * @returns {Array} processedData - Array of objects with processed data.
 */
let processedData = rawData.map(item => ({
  contrastRatio: parseFloat(item.contrastRatio),
  hasAltText: !!item.altText,
}));

export { processedData };