"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** basic "home" route for api */
const express_1 = __importDefault(require("express"));
const console_1 = require("console");
const responses_1 = __importDefault(require("../responses"));
// Express Router
const router = express_1.default.Router();
/** list all requirements classes specified in a standard that the server conforms to */
router.get("/", (req, res) => {
    console_1.debug("GET /conformance petes conformance");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.conformance);
});
exports.default = router;
//# sourceMappingURL=conformance.js.map