const axios = require('axios');
const express = require('express');
const app = express();
const port = 5050;

const JsonResponse = {
    "quotes": [
            {
            "quote" : "Don't let past mistakes make you lose hope of achieving good. Some of those with the worst past have made a great future for themselves.",
            "author" :"Ibrahim Menk"
           },
          {
            "quote": "Obstacles on our path are some of the tests of life. They make us stronger, better people and open up doors we had never imagined.",
            "author": "Mufti Menk"
          },
          {
            "quote": "Every time things become difficult for you, wait for the relief.",
            "author": "Shaykh Ibn Uthaym"
          },
          {
            "quote": "What really counts are good endings, not flawed beginnings",
            "author": "Ibn Taymiyyah"
          },
          {
            "quote" :"The worst colonization is not the colonization of your lands, it is the colonization of your minds",
            "author" : "Abdu Raheem Green"
          },
          {
            "quote" :"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
            "author" :"Mohammed Ali"
          },
          {
            "quote" :"Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance next time",
            "author" : "Malcolm X"
          },
          {
            "quote" : "Everyone has a plan until they get punched in the mouth",
             "author" : "Mike Tyson"
          }
        ]
    };

app.get('/quotes.json', (req, res) => {
  res.json(JsonResponse);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Make Express pass '2' as the 3rd argument to `JSON.stringify()`
app.set('json spaces', 2);

app.get('*', function(req, res) {
  res.json({ answer: 42, hello: 'world' });
});

const server = app.listen(port);

const response = axios.get(`http://localhost:${port}`, {
  transformResponse: res => res // Disable automatic JSON parsing
});
// {
//   "answer": 42,
//   "hello": "world"
// }
response.data;