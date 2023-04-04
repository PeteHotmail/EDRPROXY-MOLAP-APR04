"use strict";
/** holds classes responsible for managing framework */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
/**
 * An express app instance.
 * @param {Router} router an Express router object. Ideally a route module.
 */
class ExpressApp {
    constructor(router) {
        // set up app
        this._instance = express_1.default();
        this._instance.use(cors_1.default());
        this._instance.use(helmet_1.default());
        this._instance.use(router);
    }
    get instance() {
        return this._instance;
    }
}
/** factory class to produces framework component */
class Framework {
    /**
     * create an express app
     * @param {Router} routes instance of express routes
     */
    createExpressApp(routes) {
        const app = new ExpressApp(routes);
        return app.instance;
    }
}
exports.default = Framework;
//# sourceMappingURL=framework.js.map