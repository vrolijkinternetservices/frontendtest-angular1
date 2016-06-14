exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/example.spec.js'],
    jasmineNodeOpts: {
   		print: function(){},
    },
    onprepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all'}));
        browser.driver.manage().window().maximize();
    }
};