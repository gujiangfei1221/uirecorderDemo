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

    // it('Refresh', function(){
    //     return driver.refresh();
    // });

    it('mouseMove: 工程建设 ( #leftNav li:nth-child(1) > a:nth-child(1) > span.fui-nav-text )', function(){
        return driver.sleep(600).wait('/html/body/div[2]/div[1]/ul/li[1]/a/span', 30000)
               .sleep(300).mouseMove().click(0);
    });

    it('click: 招标方案 ( #leftNav ul.fui-nav-items > li:nth-child(2) > a:nth-child(1) > span.fui-nav-text, 42, 12, 0 )', function(){
        return driver.sleep(600).wait('#leftNav ul.fui-nav-items > li:nth-child(2) > a:nth-child(1) > span.fui-nav-text', 30000)
            .sleep(300).mouseMove(42, 12).click(0);
    });

    it('click: 招标项目 ( #leftNav ul.sub > li:nth-child(2) > a.fui-nav-link > span.fui-nav-text, 13, 6, 0 )', function(){
        return driver.sleep(600).wait('#leftNav ul.sub > li:nth-child(2) > a.fui-nav-link > span.fui-nav-text', 30000)
               .sleep(300).mouseMove(13, 6).click(0);
    });

    it('switchFrame: #tab-content-102100010001 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100010001 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建招标项目 ( #btnAdd span, 43, 14, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(43, 14).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled, 6, 6, 0', function(){
        return driver.sleep(300).wait('#datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled', 30000)
               .sleep(300).mouseMove(6, 6).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-54"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-54"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: 新增标段 ( #btnAddRecord span, 52, 13, 0 )', function(){
        return driver.sleep(300).wait('#btnAddRecord span', 30000)
               .sleep(300).mouseMove(52, 13).click(0);
    });

    it('click: span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 120, 9, 0', function(){
        return driver.sleep(300).wait('span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(120, 9).click(0);
    });

    it('click: 公开招标 ( #mini-14 tr:nth-child(1) > td:nth-child(2), 92, 17, 0 )', function(){
        return driver.sleep(300).wait('#mini-14 tr:nth-child(1) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(92, 17).click(0);
    });

    it('mouseDown: div:nth-child(4) > span.mini-buttonedit-noInput > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 68.515625, 7, 0', function(){
        return driver.sleep(300).wait('div:nth-child(4) > span.mini-buttonedit-noInput > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(68.515625, 7).mouseDown(0);
    });

    it('mouseUp: #dailiguid span.mini-buttonedit-border, 75, 8, 0', function(){
        return driver.sleep(300).wait('#dailiguid span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(75, 8).mouseMove(75, 8).mouseUp(0);
    });

    it('click: 测试招标代理001aaa ( #mini-17 td, 61, 10, 0 )', function(){
        return driver.sleep(300).wait('#mini-17 td', 30000)
               .sleep(300).mouseMove(61, 10).click(0);
    });

    it('click: 新增标段 ( #btnAddRecord span, 48, 8, 0 )', function(){
        return driver.sleep(300).wait('#btnAddRecord span', 30000)
               .sleep(300).mouseMove(48, 8).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-56"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-56"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 挑选 ( #btnSelectBD span, 21, 16, 0 )', function(){
        return driver.sleep(300).wait('#btnSelectBD span', 30000)
               .sleep(300).mouseMove(21, 16).click(0);
    });

    it('click: #mini-40 span, 20, 14, 0', function(){
        return driver.sleep(300).wait('#mini-40 span', 30000)
               .sleep(300).mouseMove(20, 14).click(0);
    });

    it('switchFrame: null', function(){
        return driver.switchFrame(null);
    });

    it('click: #mini-55 span, 15, 13, 0', function(){
        return driver.sleep(300).wait('#mini-55 span', 30000)
               .sleep(300).mouseMove(15, 13).click(0);
    });

    it('click: #mini-53 span, 8, 18, 0', function(){
        return driver.sleep(300).wait('#mini-53 span', 30000)
               .sleep(300).mouseMove(8, 18).click(0);
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
