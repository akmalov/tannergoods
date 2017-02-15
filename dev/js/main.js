(function() {
    'use strict';

    setTimeout(function() {
        document.querySelector('.greating_picture').classList.add('m--show');
    }, 1000);
})();

var module = require('./module');

module.func1();
module.func2();