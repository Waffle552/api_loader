new (function() {
    var ext = this
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.connect = function() {
        // Code that gets executed when the block is run
        console.log('test')
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Api Connect', 'connect'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('ApiLoader', descriptor, ext);
})({});