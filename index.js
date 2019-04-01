'use strict';

var base64url = require('base64url');
var uuidv4 = require('uuid/v4');

/**
 * Returns a 22 chars string GUID
 * @return {string}
 */
module.exports = function() {
    var rawGuid = uuidv4();
    var guidBytesArray = guidToBytes(rawGuid);
    return base64url.encode(guidBytesArray);
};

function guidToBytes(uuid) {
    var bytes = [];
    uuid.split('-').map((number, index) => {
        var bytesInChar = index < 3 ? number.match(/.{1,2}/g).reverse() :  number.match(/.{1,2}/g);
        bytesInChar.map((byte) => { bytes.push(parseInt(byte, 16));})
    });
    
    return bytes;
}