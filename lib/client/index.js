var refresher = require('./refresher');

var io = window.browserRefreshIO;
var secure = window.browserRefreshSecure;

var hostname = window.location.hostname || 'localhost';
console.log('\x1b[36m', '===window.location.hostname ========> ' + hostname ,'\x1b[0m');
var socket = io.connect((secure ? 'https': 'http') + '://' + hostname + ':' + window.browserRefreshPort);
socket
    .on('refresh', function (data) {
        if (data.refreshPage) {
            refresher.refreshPage();
        } else {
            if (data.refreshStyles) {
                refresher.refreshAllStyleSheets();
            }

            if (data.refreshImages) {
                refresher.refreshAllImages();
            }
        }
    });