function toFilteredUTFText(s, keepIconColors = undefined, iconJoin = undefined) {
  if (!s) return s
  function safeFilteredText(s) {
    if (!s) return s;
    let out = '';
    for (const ch of s) {
      const cp = ch.codePointAt(0);
      if (cp >= 0xE0100 && cp <= 0xE01EF) continue;
      if (cp >= 32 || cp === 9 || cp === 10 || cp === 13) {
        out += ch;
      }
    }
    return out;
  }
  const regex = new RegExp(`[\u200B-\u200C\u200E-\u200F\uFEFF\u2060-\u206F\uE000-\uF8FF\u007F-\u009F\u2028\u2029\uFE00–\uFE0D\u202A-\u202E\u2066-\u2069\u00AD\u034F\u180E\u202F\u0080-\u009F\u115F\u1160\u17B4\uFDD0-\uFDEF${keepIconColors? '' : '\uFE0E–\uFE0F'}${iconJoin? '' : '\u200D'}]`, 'g');
  return safeFilteredText(s.normalize('NFKC').replace(regex, ''));
}
