
var o = {
    location: '',
    channels: []
};

var SelectedProductsStore = {
    save: function (state, location) {
        o.location = location;        
        o.channels = state;
    },
    get: function (location) {
        if (location !== o.location) {
            return [];
        }

        return o.channels;
    }
};

module.exports = SelectedProductsStore;