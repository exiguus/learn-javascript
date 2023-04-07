"use strict";

console.time("Timeout outer");
console.log("Start");

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.time("Timeout inner");
        console.log("Timeout Start");
        for (let i = 0; i < 1_000_000_000; i++) {
            // do nothing
        }
        console.log("Timeout End");
        console.timeEnd("Timeout inner");
    }, 2_000);
}

console.log("End");
console.timeEnd("Timeout outer");

try {
    console.time("Timeout Blocking Main Thread outer");
    console.log("Start Blocking Main Thread ");

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.time("Timeout Blocking Main Thread inner");
            console.log("Timeout Blocking Main Thread Start");
            for (let i = 0; i < 1_000_000_000; i++) {
                // do nothing
            }
            console.log("Timeout Blocking Main Thread End");
            console.timeEnd("Timeout Blocking Main Thread inner");
        }, 1);
    }

    for (let i = 0; i < 10_000_000_000; i++) {
        // do nothing
    }
    console.log("End Blocking Main Thread ");
    console.timeEnd("Timeout Blocking Main Thread outer");
} catch (err) {
    console.log(err);
}
