new (function () {
    var ext = this
    var connected = false
    const io = require('socket.io-client');
    console.log(io)
    const socket = io.connect('scratch.denmarkcommunityschool.xyz/socket');

    socket.on('connect', () => {
        console.log('Successfully connected!');
        connected = true;
    });
    // Cleanup function when the extension is unloaded
    ext._shutdown = function () { };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    ext.connected = function () {
        // Code that gets executed when the block is run
        return connected
    };
    ext.getUserData = function () {

    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['h', 'Starts when connected to socket', 'connected'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('ApiLoader', descriptor, ext);
})({});