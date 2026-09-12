const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.write(`<h1>Home Page</h1>
    <p>Welcome to our simple Node.js server!</p>
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a>
    </nav>`);
    res.end();
  }else if (req.url == "/blog") {
    res.write(` <h1>Blog Page</h1>
    <p>Here you will find our latest blog posts.</p>
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a>
    </nav>`);
    res.end()
  }else if (req.url == "/contact") {
    res.write(`<h1>Contact Page</h1>
    <p>You can reach us at contact@example.com</p>
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a>
    </nav>`);
    res.end();
  }else if (req.url == "/about") {
    res.write(`<h1>About Page</h1>
    <p>This is a simple Node.js HTTP server project.</p>
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a>
    </nav>`);
    res.end()
  }
  else {
    res.write(`<h1>404 - Page Not Found</h1>`);
    res.end();
  }
});


server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
