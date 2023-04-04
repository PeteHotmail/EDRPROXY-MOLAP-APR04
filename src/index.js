"use strict";
/**
 * Entry point for application
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenHolder = void 0;
const server_1 = require("./server");
const all_1 = __importDefault(require("./routes/all"));
const framework_1 = __importDefault(require("./framework"));
const dotenv_1 = __importDefault(require("dotenv"));
const console_1 = require("console");
/**
 * Creates the Express framework app
 * @returns {http.RequestListener }
 */
function getFramework() {
    const frameworkFactory = new framework_1.default();
    const app = frameworkFactory.createExpressApp(all_1.default);
    return app;
}
const tokenHolder = { token: "Gill" };
exports.tokenHolder = tokenHolder;
/**
 *
 * @param {number} port the desired port for the server
 * @param {boolean} useHTTP switch for HTTP or HTTPS. Default is false
 */
function getServer(port, useHTTP, cert, key) {
    const serverFactory = new server_1.Server();
    let server;
    if (useHTTP === "http") {
        console_1.debug("using http");
        server = serverFactory.createHTTPServer(port);
    }
    else if (useHTTP === "https") {
        console_1.debug("using https");
        server = serverFactory.createHTTPSServer(port, cert, key);
    }
    else {
        throw Error("invalid protocol option, please use https or http in your environment variables");
    }
    return server;
}
/** initialise application */
function init() {
    // const port: number = parseInt(process.env.PORT) || 8043;
    const port = process.env.PORT || 8043;
    const certPath = process.env.CERT_PATH || ".\certificates\cert.pem";
    const keyPath = process.env.KEY_PATH || ".\certificates\key.pem";
    const useHTTP = process.env.TARGET_PROTOCOL || "https";
    const app = getFramework();
    const server = getServer(port, useHTTP, certPath, keyPath);
    server.start(app);
}
/** utilise .env file */
function setupEnv() {
    dotenv_1.default.config();
}
/** main */
console.log("before any calls");
setupEnv();
init();
//# sourceMappingURL=index.js.map