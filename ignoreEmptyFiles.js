import { readFileSync } from 'fs';

export function isTestFileEmpty(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    return content.trim() === '';
  } catch (error) {
    // If the file can't be read, treat it as non-empty to run tests
    return false;
  }
}