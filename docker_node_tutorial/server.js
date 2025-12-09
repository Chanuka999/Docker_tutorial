import express, { json } from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/posts", async (req, res) => {
  try {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching post" + error);
    res.status(500), json({ ërror: "Error fetching post" });
  }
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching post" + error);
    res.status(500), json({ ërror: "Error fetching post" });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`server is rnning on ${PORT}`);
});
