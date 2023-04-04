"use strict";
/** contains all the collection routes for api */
//  collections.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const console_1 = require("console");
const responses_1 = __importDefault(require("../responses")); // contains placeholder responses
const dotenv_1 = __importDefault(require("dotenv"));
const position_July27th_Hybrid_1 = __importDefault(require("../routes/collections/collectionId/position_July27th_Hybrid"));
const collectionsMetadata_1 = __importDefault(require("../routes/collections/collectionId/collectionsMetadata"));
const collectionIdMetadata_1 = __importDefault(require("../routes/collections/collectionId/collectionIdMetadata"));
const area_1 = __importDefault(require("../routes/collections/collectionId/area"));
// setup
const router = express_1.default.Router();
dotenv_1.default.config();
// globals 
console_1.memory;
const protocol = process.env.TARGET_PROTOCOL;
const target = process.env.TARGET_SERVER;
// construct routes
const collectionCollectionIdPosition = new position_July27th_Hybrid_1.default(protocol, target);
const collectionMetaData = new collectionsMetadata_1.default(protocol, target);
const collectionIdMetaData = new collectionIdMetadata_1.default(protocol, target);
const collectionCollectionIdArea = new area_1.default(protocol, target);
// --- ROUTES ---
/** list all requirements classes specified in a standard that the server conforms to */
/** /router.get("/", (req, res) => {
    debug("GET /collections");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections);
});
*/
let testCall = collectionMetaData.route;
console.log("testCall", testCall);
console.log("testCall", testCall);
router.use("/", collectionMetaData.route); //  This is the route for /collections
router.use("/:collectionId", collectionIdMetaData.route);
//router.get("/:collectionId", (req, res) => {
//    debug("GET /collections/{collectionsId}");
//    debug(`Request url: ${req.url}`);
//    res.status(200).json(responses.collections_collectionId);
//});
/** List available items */
router.get("/:collectionId/items", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/items");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_items);
});
/** List data instances of {collectionId} */
router.get("/:collectionId/instance", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instances);
});
/** List available location identifers for the collection  */
router.get("/:collectionId/locations", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/locations");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_locations);
});
/** List available location identifers for the instance */
router.get("/:collectionId/instance/:instanceId/locations", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/locations");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instances_instanceId_locations);
});
//  router.use('/first', router) mounts the middleware at path /first, 
//  then router.get sets the subpath accordingly. as export default Route imported
//  as collectionCollectionIdPosition really executing as Route.route
/** Query end point for position queries of collection {collectionId} */
router.use("/:collectionId/position", collectionCollectionIdPosition.routePoint);
/*
router.get("/:collectionId/position", (req, res) => {
    debug("GET /collections/{collectionsId}/position");
    debug(`Request url: ${req.url}`);
    res.status(200).json(responses.collections_collectionId_position);
});
*/
/** Query end point for radius queries of collection {collectionId} */
router.get("/:collectionId/radius", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/radius");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_radius);
});
/** Query end point for area queries of collection {collectionId} defined by a polygon */
router.use("/:collectionId/area", collectionCollectionIdPosition.routeArea);
/** Query end point for Cube queries of collection {collectionId} defined by a cube */
router.get("/:collectionId/cube", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/cube");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_cube);
});
/** Query end point for trajectory queries of collection {collectionId} defined by a wkt linestring and a iso8601 time period */
router.get("/:collectionId/trajectory", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/trajectory");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_trajectory);
});
/** Query end point for Corridor queries of collection {collectionId} defined by a polygon */
router.get("/:collectionId/corridor", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/corridor");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_corridor);
});
/** Return item {itemId} from collection {collectionId} */
router.get("/:collectionId/items/:itemId", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/items/{itemId}");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_items_itemId);
});
/** Query end point for queries of collection {collectionId} defined by a location id */
router.get("/:collectionId/locations/:locId", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/locations/{locId}");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_locations_locId);
});
/** Query end point for position queries of instance {instanceId} of collection {collectionId} */
router.get("/:collectionId/instance/:instanceId/position", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/position");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_position);
});
/** Query end point to return data within defined radius of a point for an instance {instanceId} of collection {collectionId} */
router.get("/:collectionId/instance/:instanceId/radius", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/radius");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_radius);
});
/** Query end point for area queries of instance {instanceId} of collection {collectionId} defined by a polygon */
router.get("/:collectionId/instance/:instanceId/area", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/area");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_area);
});
/** Query end point for Cube queries of instance {instanceId} of collection {collectionId} defined by a cube */
router.get("/:collectionId/instance/:instanceId/cube", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/cube");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_cube);
});
/**  Query end point for trajectory queries of instance {instanceId} of collection {collectionId} defined by a wkt linestring and a iso8601 time period */
router.get("/:collectionId/instance/:instanceId/trajectory", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/trajectory");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_trajectory);
});
/**  Query end point for Corridor queries of instance {instanceId} of collection {collectionId} defined by a polygon */
router.get("/:collectionId/instance/:instanceId/corridor", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/corridor");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_corridor);
});
/** Query end point for queries of instance {instanceId} of collection {collectionId} defined by a location id */
router.get("/:collectionId/instance/:instanceId/locations/:locId", (req, res) => {
    console_1.debug("GET /collections/{collectionsId}/instance/{instanceId}/locations/{locId}");
    console_1.debug(`Request url: ${req.url}`);
    res.status(200).json(responses_1.default.collections_collectionId_instance_instanceId_locations_locId);
});
exports.default = router;
//# sourceMappingURL=collections.js.map