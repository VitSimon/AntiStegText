function toFilteredUTFText(s, keepIconColors = undefined, iconJoin = undefined) {
  if (!s) return s
  function safeFilteredText(s) {
    if (!s) return s;
    let out = '';
    for (const ch of s) {
      const cp = ch.codePointAt(0);
  
      // skip: SMP variation selectors
      if (cp >= 0xE0100 && cp <= 0xE01EF) continue;
  
      // keep: TAB (9), LF (10), CR (13), 32 and higher
      if (cp >= 32 || cp === 9 || cp === 10 || cp === 13) {
        out += ch;
      }
    }
    return out;
  }
  const regex = new RegExp(`[\u200B-\u200C\u200E-\u200F\uFEFF\u2060-\u206F\uE000-\uF8FF\u007F-\u009F\u2028\u2029\uFE00–\uFE0D${keepIconColors? '' : '\uFE0E–\uFE0F'}${iconJoin? '' : '\u200D'}]`, 'g');
  return safeFilteredText(s.normalize('NFC').replace(regex, ''));
  // \u200D - kept for unicode character joining
  // \u0000-\u001F (C0), \u007F-\u009F (C1)
  // \u2028 - line sep, \u2029 - par sep.
  // \u0000-\u001F ... kept unsolved because of browser loading stopped due to this!
  // \uFE00–\uFE0F - think about this - fall unicode icons to no color forms, but improves security
}
