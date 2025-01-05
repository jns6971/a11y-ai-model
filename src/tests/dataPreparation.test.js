// src/__tests__/dataPreparation.test.js
import { processedData } from '../dataPreparation';
import _ from 'lodash';

describe('Data Preparation', () => {
  test('processes raw data correctly', () => {
    // Mock data
    const rawData = [{ contrastRatio: '2.0', altText: 'Test alt text' }];

    // Apply mock data to the module
    jest.mock('../dataPreparation', () => ({
      ...jest.requireActual('../dataPreparation'),
      rawData: rawData,
    }));

    // Perform the test
    const expected = [
      {
        contrastRatio: 2.0,
        hasAltText: true,
      },
    ];

    expect(processedData).toEqual(expected);
  });
});