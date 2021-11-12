const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const list = [];

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { list });
});

app.post('/short-url', (req, res) => {
  const { url, shortlink } = req.body;
  //   const id = shortid.generate();
  //   const shortUrl = {
  //     url,
  //     id,
  //   };
  //   list.push(shortUrl);
  //   console.log(list);
  //   res.redirect('/');
  axios
    .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(function (response) {
      const shortUrl = {
        url: url,
        shortlink: response.data.result[shortlink],
      };
      list.push(shortUrl);
      res.redirect('/');
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`server on port ${PORT}`));
