const flushChunks = require("webpack-flush-chunks").default;

const stats = require("./stats.json");

const result = flushChunks(stats, { chunkNames: ["routeA"] });

console.log(result.scripts);
