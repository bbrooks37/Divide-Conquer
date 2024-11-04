module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of file extensions your modules use
    moduleFileExtensions: ["js", "json"],

    // The test environment that will be used for testing
    testEnvironment: "node",

    // The glob patterns Jest uses to detect test files
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)",
    ],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ["node_modules"],

    // Indicates whether each individual test should be reported during the run
    verbose: true,
};
