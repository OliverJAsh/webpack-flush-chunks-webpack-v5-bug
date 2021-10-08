module.exports = {
    mode: "production",
    entry: "./src/entry.js",
    optimization: {
        chunkIds: 'named',
    }
};
