import findProcess from "find-process";

let previousProcessList = [];
let processList = [];

function fetchProcessList() {
    findProcess("name", /|/).then(list => {
        processList = list;
        previousProcessList = processList;

        for (let process of processList) {
            if (!process.startTime) {
                process.startTime = new Date().getTime();
            }
        }

        for (let previousProcess of previousProcessList) {
            let processInfoNotMatchAll = true;

            for (let process of processList) {
                let processInfoMatched = (
                    process.name == previousProcess.name &&
                    process.pid == previousProcess.pid &&
                    process.ppid == previousProcess.ppid &&
                    process.bin == previousProcess.bin &&
                    process.cmd == previousProcess.cmd
                );

                if (processInfoMatched) {
                    process.startTime = previousProcess.startTime;
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

export function browse() {
    return processList;
};