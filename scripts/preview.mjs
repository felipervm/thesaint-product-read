import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve("out"),
  base = "/thesaint-product-read";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
http
  .createServer((req, res) => {
    let url = new URL(req.url, "http://localhost").pathname;
    if (url === "/" || url === base) {
      res.writeHead(302, { Location: base + "/" }).end();
      return;
    }
    if (!url.startsWith(base + "/")) {
      res.writeHead(404).end();
      return;
    }
    let file = path.resolve(
      root,
      "." + decodeURIComponent(url.slice(base.length)),
    );
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      const body = fs.readFileSync(file);
      res.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      res.end(body);
    } catch {
      res.writeHead(404).end("Not found");
    }
  })
  .listen(4173, "127.0.0.1", () =>
    console.log("Local: http://127.0.0.1:4173" + base + "/"),
  );
