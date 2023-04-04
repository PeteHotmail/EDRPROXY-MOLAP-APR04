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
/** basic point of entry for api */
router.get("/", (req, res) => {
    console_1.debug("GET / Pete");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.home);
});
exports.default = router;
//# sourceMappingURL=home.js.map