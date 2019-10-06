//routes

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

app.get('/api/friends', function(req, res) {
    return res.json(friends);
  });