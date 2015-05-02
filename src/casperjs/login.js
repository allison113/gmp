var system = require('system');
var username = system.env.GMP_USERNAME;
var password = system.env.GMP_PASSWORD;

casper.test.begin("log into gmp account", function(test) {
    casper.start('https://wss.greenmountainpower.com/customers/my-account/login/').viewport(1600,1000)
        .waitForUrl('https://wss.greenmountainpower.com/customers/my-account/login/', function(){
            test.assertUrlMatch('https://wss.greenmountainpower.com/customers/my-account/login/','');
        })


        .then(function () {
            this.sendKeys('#ctl00_ContentPlaceHolder1_ucLoginControl_LoginView1_Login1_UserName', username);
            this.sendKeys('#ctl00_ContentPlaceHolder1_ucLoginControl_LoginView1_Login1_Password', password);
            this.click('#ctl00_ContentPlaceHolder1_ucLoginControl_LoginView1_Login1_PreLoginButton');
            this.echo('URL= '+ this.getCurrentUrl());
            this.waitForUrl('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx', function() {
                test.assertUrlMatch('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx', '');
                this.echo('ULR 2= '+ this.getCurrentUrl());
            });
        })

        .then(function(){
                this.waitForSelector('.af_commandLink');
                test.assertExists('.af_commandLink');
                this.clickLabel('View History', 'a');
                //this.waitForText('Generated Total');
                this.wait(20000);

        })

        .then(function(){
            var date = new Date();
            this.capture('stats/StatsFor-'+ date.getMonth()+'-'+date.getDay()+'-'+date.getFullYear() + '.png', {
                top: 100,
                left: 200,
                width: 1200,
                height: 800
            });
        })


        .run(function () {
            test.done();
        });
});


