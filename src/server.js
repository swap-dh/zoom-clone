import express from 'express';

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3001;

app.get('/', (req, res)=> {
    res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
