fetch('https://bible-api.com/galatians%206:09?translation=oeb-us')
  .then((response) => response.json())
  .then((data) => console.log(`${data.text} ${data.verses[0].book_name} ${data.verses[0].chapter}:${data.verses[0].verse} `));