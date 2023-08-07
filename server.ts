// import express, { Request, Response } from "express";
// import next from "next";

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Add your API routes here
//   server.get("/api/hello", (req: Request, res: Response) => {
//     res.json({ message: "Hello from the server!" });
//   });

//   server.all("*", (req: Request, res: Response) => {
//     return handle(req, res);
//   });

//   const PORT = process.env.PORT || 3000;
//   server.listen(PORT, (err?: any) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${PORT}`);
//   });
// });
const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
