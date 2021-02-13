const http = require('http');
const os = require('os');

const hostname = '';
const port = 80;

tag = (t, s) => { return `<${t}>${s}</${t}>`; }
html = (s) => { return tag('html', s); }
body = (s) => { return tag('body', s); }
h1 = (s) => { return tag('h1', s); }
table = (s) => { return tag('table', s); }
tr = (s) => { return tag('tr', s); }
th = (s) => { return tag('th', s); }
td = (s) => { return tag('td', s); }

const server = http.createServer((req, res) => {
	console.log(`GET ${req.url}`);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Cache-Control', 'no-store');
	res.end(
		html(
			body(
				h1("Node.js Info") + table(
					tr(th("Properties") + th("Value"))
					+ tr(td("req.url") + td(req.url))
					+ tr(td("os.arch()") + td(os.arch()))
					+ tr(td("os.endianness()") + td(os.endianness()))
					+ tr(td("os.hostname()") + td(os.hostname()))
					+ tr(td("os.type()") + td(os.type()))
					+ tr(td("os.platform()") + td(os.platform()))
					+ tr(td("os.release()") + td(os.release()))
					+ tr(td("os.EOL") + td(os.EOL))
				)
			)
		)
	);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated - SIGTERM')
  })
});
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated - SIGINT')
  })
});

server.listen(port, hostname, () => {
	console.log(`Listening http at hostname=${hostname}, port=${port}`);
});

