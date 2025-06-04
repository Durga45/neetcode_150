function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = new Map();
  const freq2 = new Map();

  for (let char of str1) {
    freq1.set(char, (freq1.get(char) || 0) + 1);
  }

  for (let char of str2) {
    freq2.set(char, (freq2.get(char) || 0) + 1);
  }

  for (let [key, value] of freq1.entries()) {
    if (!freq2.has(key) || freq2.get(key) !== value) {
      return false;
    }
  }

  return true;
}
