"use strict";
/** hold classes responsible for generating web servers */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPServer = exports.HTTPSServer = exports.Server = void 0;
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const console_1 = require("console");
/**
 * abstracting the base class. This server represents
 * a HTTP server.
 */
class HTTPServer {
    constructor(port) {
        this.port = port;
    }
    /**
     * initialise the declared framework within the server
     * @param {any} framework the framework "app" which will be applied. Typically Express
     */
    start(framework) {
        const app = framework;
        this._instance = http_1.default.createServer(app).listen(this.port, () => {
            console_1.debug(`http server started at http://localhost:${this.port}`);
        });
        return app;
    }
    /** returns the instance of the http server */
    get instance() {
        return this._instance;
    }
}
exports.HTTPServer = HTTPServer;
/**
 * This server represents a HTTPS server.
 * It requires a cert and key file.
 */
class HTTPSServer {
    constructor(port, cert, key) {
        this.port = port;
        const pathArray = [cert, key];
        this.doesExist(pathArray);
        this.cert = cert; // path to cert
        this.key = key; // path to key
    }
    /**
     * initialise the declared framework within the server
     * @param {http.RequestListener} framework the framework "app" which will be applied. Typically Express
    */
    start(framework) {
        const app = framework;
        const options = {
            key: fs_1.default.readFileSync(this.key),
            cert: fs_1.default.readFileSync(this.cert)
        };
        this._instance = https_1.default.createServer(options, app).listen(this.port, () => {
            console_1.debug(`https server started at https://localhost:${this.port}`);
        });
        return app;
    }
    /**
     * validate existence of the input paths.
     * @param path path to file that need validating
     */
    doesExist(paths) {
        for (const path of paths) {
            if (path) {
                fs_1.default.stat(path, (err) => {
                    if (err) {
                        if (err.code === "ENOENT") {
                            throw Error("file at " + path + " does not exist");
                        }
                    }
                });
            }
            else {
                throw Error("file path declared as invalid value - " + path);
            }
        }
    }
    /** returns the instance of the http server */
    get instance() {
        return this._instance;
    }
}
exports.HTTPSServer = HTTPSServer;
/** generates web servers to host framework app */
class Server {
    createHTTPServer(port = 8080) {
        return new HTTPServer(port);
    }
    createHTTPSServer(port = 8043, cert = null, key = null) {
        return new HTTPSServer(port, cert, key);
    }
}
exports.Server = Server;
exports.default = Server;
//# sourceMappingURL=server.js.map