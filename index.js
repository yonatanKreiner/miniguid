'use strict';

var base64url = require('base64url');
var guid = require('guid');

/**
 * Returns a 22 chars string GUID
 * @return {string}
 */
module.exports = function() {
    var rawGuid = guid.raw();
    var guidBytesArray = guidToBytes(rawGuid);
    return base64url.encode(guidBytesArray);
};

function guidToBytes(guid) {
    var bytes = [];
    guid.split('-').map((number, index) => {
        var bytesInChar = index < 3 ? number.match(/.{1,2}/g).reverse() :  number.match(/.{1,2}/g);
        bytesInChar.map((byte) => { bytes.push(parseInt(byte, 16));})
    });
    
    return bytes;
}