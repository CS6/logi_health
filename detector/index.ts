import ioHook from "iohook";
import { browse } from "./process-viewer";
const { writeLog } = require("./writeLog");

ioHook.on("mousemove", ({ x, y }) => {
    let time = new Date().getTime();
    writeLog("mousemove.json", JSON.stringify([time, x, y]) + ",");
});

ioHook.on("mousedown", ({ x, y }) => {
    let time = new Date().getTime();
    writeLog("mousedown.json", JSON.stringify([time, x, y]) + ",");
});

ioHook.on("mouseup", ({ x, y }) => {
    let time = new Date().getTime();
    writeLog("mouseup.json", JSON.stringify([time, x, y]) + ",");
});

ioHook.on("mousewheel", ({ x, y, direction: d, rotation: r }) => {
    let time = new Date().getTime();
    writeLog("mousewheel.json", JSON.stringify([time, x, y, d, r]) + ",");
});

ioHook.on("keydown", ({ rawcode: k }) => {
    let time = new Date().getTime();
    writeLog("keydown.json", JSON.stringify([time, k]) + ",");
});

ioHook.on("keyup", ({ rawcode: k }) => {
    let time = new Date().getTime();
    writeLog("keyup.json", JSON.stringify([time, k]) + ",");
});

ioHook.start(false);

export var detector = ioHook;
export var browseProcess = browse;