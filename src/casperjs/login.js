/**
 * Created by ddcallisonc on 4/13/15.
 */

//casper.test.begin("log into gmp account", function(test) {
//    casper.start('https://account.greenmountainpower.com/#/login')
//        .waitForUrl('https://account.greenmountainpower.com/#/login', function() {
//            test.assertUrlMatch("https://account.greenmountainpower.com/#/login", '')
var system = require('system');
var username = system.env.GMP_USERNAME;
var password = system.env.GMP_PASSWORD;

casper.test.begin("log into gmp account", function(test) {
    casper.start('https://wss.greenmountainpower.com/customers/my-account/login/').viewport(1600,1000)
        .waitForUrl('https://wss.greenmountainpower.com/customers/my-account/login/', function(){
            test.assertUrlMatch('https://wss.greenmountainpower.com/customers/my-account/login/','');
        })
        //.waitForUrl('https://account.greenmountainpower.com/#/login', function() {
        //    test.assertUrlMatch('https://account.greenmountainpower.com/#/login', '');
        //})

        //.then(function(){
        //    this.sendKeys('form.contact input#name', 'Duke');
        //})

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
            //var viewHistory = this.evaluate(function(){
            //    return document.querySelector('#pt1:oc_7681964383region1:r5:r1:wssaspt:commandLink2').innerText;
            //});
            //this.click(viewHistory);
            //
            //this.page.switchToFrame([0]);
            //casper.withFrame([0], function(){
                this.waitForSelector('.af_commandLink');
                test.assertExists('.af_commandLink');
                this.clickLabel('View History', 'a');
                //this.waitForText('Generated Total');
                this.wait(20000);

        })

        .then(function(){
            //this.page.switchToMainFrame();
            //this.waitForSelector('#pt1:oc_7681964383region1:r1:wssmrt1:wssudi1:0:graphData');
            //test.assertExists('#pt1:oc_7681964383region1:r1:wssmrt1:wssudi1:0:graphData');
            var date = new Date();
            this.capture('StatsFor-'+ date.getMonth()+'-'+date.getDay()+'-'+date.getFullYear() + '.png', {
                top: 100,
                left: 200,
                width: 1200,
                height: 800
            });
        })

        //.then(function(){
        //    casper.open('https://webprd.gmpvt.com/applications/login', {
        //        method: 'post',
        //        data:   {
        //            'password': 'vtsuperstars1',
        //            'token': "",
        //            'username': 'laxgoalie392'
        //        },
        //        headers: {
        //            'Content-Type': 'application/json'
        //        }
        //    });
        //    this.waitForUrl('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx', function() {
        //        test.assertUrlMatch('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx', '');
        //    });
        //    this.echo('Url= '+ this.getCurrentUrl());
        //
        //})

        //.then(function () {
        //    test.assertUrlMatch('https://account.greenmountainpower.com/#/login', '');
        //    this.fill('form[name="loginForm"]', {
        //        'username': 'laxgoalie392',
        //        'password': 'vtsuperstars1'
        //    });
        //    this.click('.btn.btn-default.pull-right');
        //    this.waitForUrl('https://account.greenmountainpower.com/#/main/main', function() {
        //        test.assertUrlMatch('https://account.greenmountainpower.com/#/main/main', '');
        //    })
        //})


        //.then(function(){
        //    this.open('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx');
        //    this.waitForUrl('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx', function() {
        //        test.assertUrlMatch('https://css.greenmountainpower.com/OUCSSPortal/faces/oracle/webcenter/portalapp/pages/home.jspx', '');
        //    })
        //})

        .run(function () {
            test.done();
        });
});


//ASSERT THAT THE CURRENT PAGE URL MTCHES THE PROVIDED REGEXP PATTERNS
//casper.test.begin('assertUrlMatch() tests', 1, function(test) {
//    casper.start('http://www.google.fr/', function() {
//        test.assertUrlMatch(/^http:\/\//, 'google.fr is served in http://');
//    }).run(function() {
//        test.done();
//    });
//});


