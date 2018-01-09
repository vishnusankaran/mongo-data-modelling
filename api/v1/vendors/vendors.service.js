const VendorModel = require('./vendors.entity');

const addVendor = function(newVendor, done) {
    let vendor = new VendorModel();

    vendor.name = newVendor.name;
    vendor.address = newVendor.address;
    vendor.email = newVendor.email;
    vendor.phone = newVendor.phone;
    vendor.code = newVendor.code;
    vendor.productsSold = 0;
    vendor.totalValue = 0;
    vendor.rank = 0;
    
    vendor.save(function(err, savedDoc) {
        if (err) {
          console.error("Error in adding new product, ERROR::", err);
          done(err);
        } else {
          done(null, savedDoc);
          return
        }
    });
}

const getVendor = function(vendorId, done) {
    let vendor = new VendorModel();
    
    vendor.find({ code: vendorId }, (err, colln) => {
        if (err) {
          console.error('Error in finding vendor, ERROR::', err, ' queries for ', query);
          done(err);
          return;
        }
        done(null, colln);
      });
}

const addProductToVendor = function(vendorId, product, done) {
    let vendor = new VendorModel();

    vendor.find({ code: vendorId });
}

module.exports = {
    addVendor,
    getVendor,
    addProductToVendor
}