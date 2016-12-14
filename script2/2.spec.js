var fs = require('fs');
var path = require('path');
var faker  = require('faker');
var chai = require("chai");
var should = chai.should();
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: http://www.hfggzy.com/hfzbtb/ztbzx/', function(){
        return driver.url(_('http://www.hfggzy.com/hfzbtb/ztbzx/'));
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('mouseMove: 重要通知 ( #menu_1_3 )', function(){
        return driver.sleep(300).wait('#menu_1_3', 30000)
               .sleep(300).mouseMove();
    });

    it('click: #menutab_1_3 tr:nth-child(1) > td:nth-child(2) > a > font, 232, 5, 0', function(){
        return driver.sleep(300).wait('#menutab_1_3 tr:nth-child(1) > td:nth-child(2) > a > font', 30000)
               .sleep(300).mouseMove(232, 5).click(0);
    });

    it('switchWindow: 1', function(){
        return driver.sleep(500).switchWindow(1);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('closeWindow: ', function(){
        return driver.closeWindow();
    });

    it('switchWindow: 0', function(){
        return driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 400', function(){
        return driver.scrollTo(0, 400);
    });

    it('click: txtKeys ( #txtKeys, 40, 10, 0 )', function(){
        return driver.sleep(300).wait('#txtKeys', 30000)
               .sleep(300).mouseMove(40, 10).click(0);
    });

    it('sendKeys: 11', function(){
        return driver.sendKeys('11');
    });

    it('click: #btnss, 19, 10, 0', function(){
        return driver.sleep(300).wait('#btnss', 30000)
               .sleep(300).mouseMove(19, 10).click(0);
    });

    it('switchWindow: 1', function(){
        return driver.sleep(500).switchWindow(1);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('closeWindow: ', function(){
        return driver.closeWindow();
    });

    it('switchWindow: 0', function(){
        return driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 200', function(){
        return driver.scrollTo(0, 200);
    });

    it('click: +更多 ( span.more > a, 16, 0, 0 )', function(){
        return driver.sleep(300).wait('span.more > a', 30000)
               .sleep(300).mouseMove(16, 0).click(0);
    });

    it('switchWindow: 1', function(){
        return driver.sleep(500).switchWindow(1);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('click: 中心动态 ( tr:nth-child(1) > td.LeftMenu > a, 142, 13, 0 )', function(){
        return driver.sleep(300).wait('tr:nth-child(1) > td.LeftMenu > a', 30000)
               .sleep(300).mouseMove(142, 13).click(0);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('scrollTo: 0, 600', function(){
        return driver.scrollTo(0, 600);
    });

    it('click: #MoreInfoList1_Pager a:nth-child(27) > img, 37, 12, 0', function(){
        return driver.sleep(300).wait('#MoreInfoList1_Pager a:nth-child(27) > img', 30000)
               .sleep(300).mouseMove(37, 12).click(0);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('click: 徽采商城阶段性总结暨... ( #MoreInfoList1_DataGrid1 tr:nth-child(1) > td:nth-child(2) > a, 192, 3, 0 )', function(){
        return driver.sleep(300).wait('#MoreInfoList1_DataGrid1 tr:nth-child(1) > td:nth-child(2) > a', 30000)
               .sleep(300).mouseMove(192, 3).click(0);
    });

    it('switchWindow: 2', function(){
        return driver.sleep(500).switchWindow(2);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    it('closeWindow: ', function(){
        return driver.closeWindow();
    });

    it('switchWindow: 1', function(){
        return driver.sleep(500).switchWindow(1);
    });

    it('closeWindow: ', function(){
        return driver.closeWindow();
    });

    it('switchWindow: 0', function(){
        return driver.sleep(500).switchWindow(0);
    });

    it('switchFrame: div > iframe', function(){
        return driver.switchFrame(null)
               .wait('div > iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #Image1, 29, 25, 0', function(){
        return driver.sleep(300).wait('#Image1', 30000)
               .sleep(300).mouseMove(29, 25).click(0);
    });

    it('switchFrame: null', function(){
        return driver.switchFrame(null);
    });

    it('waitBody: ', function(){
        return driver.sleep(500).wait('body', 30000);
    });

    function _(str){
        return typeof str === 'string' && str.replace(/\{\{(.+?)\}\}/g, function(all, key){
            return testVars[key] || '';
        }) || str;
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    var runtime = process.env['runtime'] || '';
    var config = require(rootPath + '/config'+(runtime?'-'+runtime:'')+'.json');
    var webdriverConfig = Object.assign({},config.webdriver);
    var host = webdriverConfig.host;
    var port = webdriverConfig.port || 4444;
    var testVars = config.vars;
    var browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.browsers;

    // read hosts
    var hostsPath = rootPath + '/hosts'+(runtime?'-'+runtime:'');
    var hosts = '';
    if(fs.existsSync(hostsPath)){
        hosts = fs.readFileSync(hostsPath).toString();
    }
    var screenshotPath = rootPath + '/screenshots';
    var doScreenshot = fs.existsSync(screenshotPath);

    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    browsers.split(/\s*,\s*/).forEach(function(browserName){
        var caseName = specName + ' : ' + browserName;

        if(doScreenshot){
            mkdirs(path.dirname(screenshotPath + '/' + caseName));
        }

        var browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        var browserVersion = browserInfo[1];

        describe(caseName, function(){

            var stepId = 1;

            this.timeout(600000);
            this.slow(1000);

            var driver;
            before(function(){
                var self = this;
                var driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                var sessionConfig = Object.assign({}, webdriverConfig, {
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true
                });
                if(hosts){
                    sessionConfig.hosts = hosts;
                }
                self.driver = driver.session(sessionConfig).maximize();
                self.testVars = testVars;
                return self.driver;
            });

            module.exports();

            afterEach(function(){
                if(doScreenshot){
                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){
                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');
                    }) + '_' + (stepId++) + '.png';
                    return this.driver.getScreenshot(filepath).catch(function(){});
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    var rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}
