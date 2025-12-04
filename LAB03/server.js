const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res) {
    // Parse the URL query parameters
    const query = url.parse(req.url, true).query;

    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    let result;
    let symbol;

    switch (method) {
        case "add":
            result = x + y;
            symbol = "+";
            break;

        case "subtract":
            result = x - y;
            symbol = "-";
            break;

        case "multiply":
            result = x * y;
            symbol = "*";
            break;

        case "divide":
            result = x / y;
            symbol = "/";
            break;

        default:
            res.end("Error: Invalid method. Use add, subtract, multiply, or divide.");
            return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`${x} ${symbol} ${y} = ${result}`);
}

// Route for /lab2
app.use('/lab2', calculate);

// Start server
app.listen(3000);
console.log("Server running at http://localhost:3000/lab2?method=add&x=16&y=4");
