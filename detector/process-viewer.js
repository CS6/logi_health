"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var find_process_1 = __importDefault(require("find-process"));
var previousProcessList = [];
var processList = [];
function fetchProcessList() {
    find_process_1.default("name", /|/).then(function (list) {
        processList = list;
        previousProcessList = processList;
        for (var _i = 0, processList_1 = processList; _i < processList_1.length; _i++) {
            var process_1 = processList_1[_i];
            if (!process_1.startTime) {
                process_1.startTime = new Date().getTime();
            }
        }
        for (var _a = 0, previousProcessList_1 = previousProcessList; _a < previousProcessList_1.length; _a++) {
            var previousProcess = previousProcessList_1[_a];
            var processInfoNotMatchAll = true;
            for (var _b = 0, processList_2 = processList; _b < processList_2.length; _b++) {
                var process_2 = processList_2[_b];
                var processInfoMatched = (process_2.name == previousProcess.name &&
                    process_2.pid == previousProcess.pid &&
                    process_2.ppid == previousProcess.ppid &&
                    process_2.bin == previousProcess.bin &&
                    process_2.cmd == previousProcess.cmd);
                if (processInfoMatched) {
                    process_2.startTime = previousProcess.startTime;
                    processInfoNotMatchAll = false;
                    break;
                }
            }
            if (processInfoNotMatchAll) {
                processList.push(previousProcess);
            }
        }
    });
}
fetchProcessList();
setInterval(fetchProcessList, 60000);
function browse() {
    return processList;
}
exports.browse = browse;
;
