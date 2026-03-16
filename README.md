# AntiStegText
Anti-steganography (character filtering) solution for text.

## Demo

1. [Demo implementation][Demo] is a single HTML file to show you needed configuration to make it work.

    1. Type your text to **Input:** textarea (demo text is present here)
    2. Set **Keep icon colors** checked for preserve Unicode icon color (FE0E, FE0F)
    3. Set **Keep icon joiner** checked for preserve Unicode icon joining (e.g.: 🧑‍🤝‍🧑 -> 🧑🤝🧑, 200D)
    4. Click **Convert** button.

2. You will see purified secured text in **Text** and character ordinal/integer values of the same text in **Char values** field.

## Installation

Add reference to head section:

```html
<script src="https://raw.githubusercontent.com/VitSimon/AntiStegText/refs/heads/master/antisteg.js" type="text/javascript"></script>
```

or copy this file to your local environment.

## API

Call **toFilteredUTFText** function with  
parameters:
- s - input string
- keepIconColors - keep FE0E, FE0F characters (unicode icon coloring), skip or 0/false to remove them
- iconJoin - keep 200D, skip or 0/false to remove them

to get result :
purufied and secured non-steganographic unicode text

```javascript
toFilteredUTFText('Hello ✏️🧑‍🤝‍🧑 !', 0, 1); //'Hello ✏🧑‍🤝‍🧑 !'
toFilteredUTFText('Hello ✏️🧑‍🤝‍🧑 !', 1, 0); //'Hello ✏️🧑🤝🧑 !'
toFilteredUTFText('Hello ✏️🧑‍🤝‍🧑 !'); //'Hello ✏🧑🤝🧑 !'
```

## Known limits and issues

- **Tool works for texts only (no binary data)** (not protecting against steganography in images, QR codes, or higher‑level protocol abuse)
- Steganography filters are strict and possibly very tight
- **Control characters TAB (9), LF (10), CR (13), and space (32) are retained to preserve text formatting.**
  - Note that these can still be exploited for steganography.

## Version publishing

- No managed packages or artifacts are planned to be released from this repository
- Work directly with the content of the main branch of the GitHub repository
- Repository idea is took and refactored from my other project - [HelpViewer][HelpViewer] ([src][HelpViewer2])

## Sources and news

Nowadays it seams UTF steganography is on growing trend:
- <https://www.linkedin.com/posts/advocatemack_supplychainsecurity-opensourcesecurity-npm-activity-7439310060041748480-uH4b/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABSIquoBUsK5RLc5thxVQYSzmqo9Y4xBY1Y>
- <https://socket.dev/blog/stegabin-26-malicious-npm-packages-use-pastebin-steganography>
- <https://www.veracode.com/resources/sophisticated-npm-attack-leveraging-unicode-steganography-and-google-calendar-c2-2/>
- <https://www.darkreading.com/application-security/npm-package-malware-stenographic-qr-codes>

[Demo]: https://github.com/VitSimon/AntiStegText/blob/master/index.htm "Demo"
[HelpViewer]: https://github.com/HelpViewer "HelpViewer"
[HelpViewer2]: https://github.com/HelpViewer/HelpViewer-loader/blob/5bcad543493b4dcc13f8d085ed1556e4ed6ae63f/appmain.js#L10
