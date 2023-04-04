"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** collective routes module */
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const strings_1 = __importDefault(require("../strings"));
const home_1 = __importDefault(require("./home"));
const conformance_1 = __importDefault(require("./conformance"));
const groups_1 = __importDefault(require("./groups"));
const collections_1 = __importDefault(require("./collections"));
const dotenv_1 = __importDefault(require("dotenv"));
//  Note that the import is acually and import of the object router for that url
dotenv_1.default.config();
// Documentation libraries
const swaggerPath = process.env.SWAGGER;
const swaggerDocument = js_yaml_1.default.safeLoad(fs_1.default.readFileSync(path_1.default.resolve(process.env.SWAGGER), "utf8"));
// Express Router
const router = express_1.default.Router();
/** EDR Routes */
router.use("/", home_1.default);
router.use("/conformance", conformance_1.default);
router.use("/groups", groups_1.default);
router.use("/collections", collections_1.default);
// Add path for swagger documentation
router.use("/doc", swagger_ui_express_1.default.serve);
router.get("/doc", swagger_ui_express_1.default.setup(swaggerDocument));
// Provide a handler for anything else such as sending a GET instead of POST to a route
router.use("*", (req, res) => {
    res.status(404).send(strings_1.default.ROUTE_NOT_FOUND);
});
exports.default = router;
//# sourceMappingURL=all.js.map