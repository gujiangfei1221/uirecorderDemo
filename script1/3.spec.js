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

    it('mouseMove: 工程建设 ( #leftNav li:nth-child(1) > a:nth-child(1) > span.fui-nav-text )', function(){
        return driver.sleep(600).wait('#leftNav li:nth-child(1) > a:nth-child(1) > span.fui-nav-text', 30000)
               .sleep(300).mouseMove().click(0);
    });

    it('click: 招标方案 ( #leftNav ul.fui-nav-items > li:nth-child(2) > a:nth-child(1) > span.fui-nav-text, 42, 12, 0 )', function(){
        return driver.sleep(600).wait('#leftNav ul.fui-nav-items > li:nth-child(2) > a:nth-child(1) > span.fui-nav-text', 30000)
            .sleep(300).mouseMove(42, 12).click(0);
    });

    it('click: 自行招标 ( #leftNav ul.sub > li:nth-child(3) > a.fui-nav-link > span.fui-nav-text, 18, 3, 0 )', function(){
        return driver.sleep(600).wait('/html/body/div[2]/div[1]/ul/li[1]/div/ul/li[2]/ul/li[3]/a/span', 30000)
               .sleep(300).mouseMove(18, 3).click(0);
    });

    it('switchFrame: #tab-content-102100010005 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100010005 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建自行招标 ( #btnAdd span, 62, 13, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(62, 13).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled, 14, 7, 0', function(){
        return driver.sleep(300).wait('#datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled', 30000)
               .sleep(300).mouseMove(14, 7).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-54"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-54"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #jsgcbdlist1_jsgcbdlist a, 12, 7, 0', function(){
        return driver.sleep(300).wait('#jsgcbdlist1_jsgcbdlist a', 30000)
               .sleep(300).mouseMove(12, 7).click(0);
    });

    it('click: #mini-87 span, 12, 23, 0', function(){
        return driver.sleep(300).wait('#mini-87 span', 30000)
               .sleep(300).mouseMove(12, 23).click(0);
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: 新增业绩 ( #btnAddRecord span, 52, 14, 0 )', function(){
        return driver.sleep(300).wait('#btnAddRecord span', 30000)
               .sleep(300).mouseMove(52, 14).click(0);
    });

    it('click: #mini-89 span, 5, 14, 0', function(){
        return driver.sleep(300).wait('#mini-89 span', 30000)
               .sleep(300).mouseMove(5, 14).click(0);
    });

    it('click: 电子件管理 ( #ywscanfilelist1_ywscanfilelist a, 46, 9, 0 )', function(){
        return driver.sleep(300).wait('#ywscanfilelist1_ywscanfilelist a', 30000)
               .sleep(300).mouseMove(46, 9).click(0);
    });

    it('click: #mini-95 span, 13, 12, 0', function(){
        return driver.sleep(300).wait('#mini-95 span', 30000)
               .sleep(300).mouseMove(13, 12).click(0);
    });

    it('switchFrame: null', function(){
        return driver.switchFrame(null);
    });

    it('click: #mini-53 span, 5, 25, 0', function(){
        return driver.sleep(300).wait('#mini-53 span', 30000)
               .sleep(300).mouseMove(5, 25).click(0);
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
