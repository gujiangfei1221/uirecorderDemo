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

    callSpec('commons/common.spec.js');

    it('switchFrame: #tab-content-102100010004 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100010004 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建项目 ( #btnAdd span, 50, 13, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(50, 13).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: 新增招标人 ( #btnAddRecord span, 54, 2, 0 )', function(){
        return driver.sleep(300).wait('#btnAddRecord span', 30000)
               .sleep(300).mouseMove(54, 2).click(0);
    });

    it('click: #mini-190 span, 19, 22, 0', function(){
        return driver.sleep(300).wait('#mini-190 span', 30000)
               .sleep(300).mouseMove(19, 22).click(0);
    });

    it('click: 新增招标代理 ( #btnAddRecord2 span, 43, 16, 0 )', function(){
        return driver.sleep(300).wait('#btnAddRecord2 span', 30000)
               .sleep(300).mouseMove(43, 16).click(0);
    });

    it('click: #mini-192 span, 4, 20, 0', function(){
        return driver.sleep(300).wait('#mini-192 span', 30000)
               .sleep(300).mouseMove(4, 20).click(0);
    });

    it('click: 电子件管理 ( #ywscanfilelist1_ywscanfilelist tr:nth-child(2) > td:nth-child(4) > div.mini-grid-cell-nowrap > a, 22, 3, 0 )', function(){
        return driver.sleep(300).wait('#ywscanfilelist1_ywscanfilelist tr:nth-child(2) > td:nth-child(4) > div.mini-grid-cell-nowrap > a', 30000)
               .sleep(300).mouseMove(22, 3).click(0);
    });

    it('sleep', function(){
        return driver.sleep(3000);
    });

    it('click: #mini-194 span, 11, 20, 0', function(){
        return driver.sleep(300).wait('#mini-194 span', 30000)
               .sleep(300).mouseMove(11, 20).click(0);
    });

    it('switchFrame: null', function(){
        return driver.switchFrame(null);
    });

    it('click: #mini-51 span, 16, 27, 0', function(){
        return driver.sleep(300).wait('#mini-51 span', 30000)
               .sleep(300).mouseMove(16, 27).click(0);
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
