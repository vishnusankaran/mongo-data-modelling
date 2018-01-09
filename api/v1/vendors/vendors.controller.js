const vendorService = require('./vendors.service');
const async = require('async');

const addNewVendor = function(newVendor, done) {
    vendorService.addVendor(newVendor, done);
}

const getVendor = function(vendorCode, done) {
    vendorService.getVendor(vendorCode, done);
}

const addProductToVendor = function(vendorCode, productCode, done) {
    vendorService.addProductToVendor(vendorCode, productCode, done);
}

module.exports = {
    addNewVendor,
    getVendor,
    addProductToVendor
}