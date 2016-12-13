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

    it('mouseMove: 工程建设 ( #leftNav li:nth-child(1) > a.fui-nav-link > span.fui-nav-text )', function(){
        return driver.sleep(600).wait('#leftNav li:nth-child(1) > a.fui-nav-link > span.fui-nav-text', 30000)
               .sleep(300).mouseMove().click(0);
    });

    it('click: 招标方案 ( #leftNav ul.fui-nav-items > li:nth-child(2) > a:nth-child(1) > span.fui-nav-text, 24, 5, 0 )', function(){
        return driver.sleep(600).wait('#leftNav ul.fui-nav-items > li:nth-child(2) > a:nth-child(1) > span.fui-nav-text', 30000)
               .sleep(300).mouseMove(24, 5).click(0);
    });

    it('click: 项目注册 ( #leftNav ul.sub > li:nth-child(1) > a.fui-nav-link > span.fui-nav-text, 22, 5, 0 )', function(){
        return driver.sleep(600).wait('#leftNav ul.sub > li:nth-child(1) > a.fui-nav-link > span.fui-nav-text', 30000)
               .sleep(300).mouseMove(22, 5).click(0);
    });

    it('switchFrame: #tab-content-102100010004 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100010004 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建项目 ( #btnAdd span, 55, 9, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(55, 9).click(0);
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

    it('click: 电子件管理 ( #ywscanfilelist1_ywscanfilelist tr:nth-child(2) > td:nth-child(4) > div.mini-grid-cell-nowrap > a, 34, 6, 0 )', function(){
        return driver.sleep(300).wait('#ywscanfilelist1_ywscanfilelist tr:nth-child(2) > td:nth-child(4) > div.mini-grid-cell-nowrap > a', 30000)
               .sleep(300).mouseMove(34, 6).click(0);
    });

    //先切换到main page
    it('switchFrame: div.mini-panel-body > iframenull', function(){
        return driver.switchFrame(null);
    });

    //切换到第一层iframe
    it('switchFrame: div.mini-panel-body > iframe22', function(){
        return driver.wait('/html/body/div[5]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    //切换到第二层iframe
    it('switchFrame: div.mini-panel-body > iframe222', function(){
        return driver.wait('/html/body/div[5]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });


    // it('switchFrame: iframe[name="mini-iframe-191"]', function(){
    //     return driver.switchFrame(null)
    //            .wait('iframe[name="mini-iframe-191"]', 30000).then(function(element){
    //                return this.switchFrame(element).wait('body');
    //            });
    // });

    // it('click: #rt_rt_1b3rju453suf1qq416jm149r1fl21 label, 34, 17, 0', function(){
    //     return driver.sleep(300).wait('/html/body/div[1]/div[2]/div/div[1]/div/div[2]/label', 30000)
    //            .sleep(300).mouseMove(34, 17).click(0);
    // });

    it('uploadFile: file ( input[name="file"], grid.xlsx )', function(){
        return driver.sleep(300).wait('input[name="file"]', {timeout: 30000})
               .sleep(300).uploadFile(rootPath+'/uploadfiles/grid.xlsx');
    });

    it('sleep',function () {
        return driver.sleep(5000);
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
