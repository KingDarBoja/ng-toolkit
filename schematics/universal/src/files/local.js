// generated by @ng-toolkit/universal
const port = process.env.PORT || __serverPort__;

const server = require('./__distFolder__');

server.app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
