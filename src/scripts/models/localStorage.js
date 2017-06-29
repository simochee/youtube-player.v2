const localStorage = require('localStorage');

module.exports = {
    getItem: (key) => {
        const item = localStorage.getItem(key);
        try {
            const json = JSON.parse(item);
            return json;
        } catch(e) {
            return item;
        }
    },
    setItem: (key, value) => {
        if(typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },
    removeItem: localStorage.removeItem,
};
