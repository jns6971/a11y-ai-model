// customTestRunner.js
const fs = require('fs');

module.exports = {
  async runTests(tests, watcher, onStart, onResult, onFailure, options) {
    const filteredTests = tests.filter(test => {
      try {
        const content = fs.readFileSync(test.path, 'utf8');
        return content.trim() !== ''; // Only keep non-empty files
      } catch (error) {
        return true; // If there's an error reading, assume non-empty
      }
    });

    // Here, we're assuming `options.testRunner` is the actual Jest test runner
    return options.testRunner.runTests(filteredTests, watcher, onStart, onResult, onFailure, options);
  }
};