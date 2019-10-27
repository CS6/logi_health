"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iohook_1 = __importDefault(require("iohook"));
var process_viewer_1 = require("./process-viewer");
var writeLog = require("./writeLog").writeLog;
iohook_1.default.on("mousemove", function (_a) {
    var x = _a.x, y = _a.y;
    var time = new Date().getTime();
    writeLog("mousemove.json", JSON.stringify([time, x, y]) + ",");
});
iohook_1.default.on("mousedown", function (_a) {
    var x = _a.x, y = _a.y;
    var time = new Date().getTime();
    writeLog("mousedown.json", JSON.stringify([time, x, y]) + ",");
});
iohook_1.default.on("mouseup", function (_a) {
    var x = _a.x, y = _a.y;
    var time = new Date().getTime();
    writeLog("mouseup.json", JSON.stringify([time, x, y]) + ",");
});
iohook_1.default.on("mousewheel", function (_a) {
    var x = _a.x, y = _a.y, d = _a.direction, r = _a.rotation;
    var time = new Date().getTime();
    writeLog("mousewheel.json", JSON.stringify([time, x, y, d, r]) + ",");
});
iohook_1.default.on("keydown", function (_a) {
    var k = _a.rawcode;
    var time = new Date().getTime();
    writeLog("keydown.json", JSON.stringify([time, k]) + ",");
});
iohook_1.default.on("keyup", function (_a) {
    var k = _a.rawcode;
    var time = new Date().getTime();
    writeLog("keyup.json", JSON.stringify([time, k]) + ",");
});
iohook_1.default.start(false);
exports.detector = iohook_1.default;
exports.browseProcess = process_viewer_1.browse;
