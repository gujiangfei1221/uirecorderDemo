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

    callSpec('commons/common33.spec.js');

    it('switchFrame: #tab-content-102100020001 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100020001 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新增招标公告 ( #btnAdd span, 75, 12, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(75, 12).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: div:nth-child(4) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 30, 15, 0', function(){
        return driver.sleep(300).wait('div:nth-child(4) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(30, 15).click(0);
    });

    it('sendKeys: 标段1', function(){
        return driver.sendKeys('标段1');
    });

    it('click: 搜索 ( span.cond-srh-btn-text, 24, 12, 0 )', function(){
        return driver.sleep(300).wait('span.cond-srh-btn-text', 30000)
               .sleep(300).mouseMove(24, 12).click(0);
    });

    it('click: #datagrid tr:nth-child(2) > td.mini-checkcolumn > div.mini-grid-cell-inner > span.mini-grid-checkbox, 7, 4, 0', function(){
        return driver.sleep(300).wait('#datagrid tr:nth-child(2) > td.mini-checkcolumn > div.mini-grid-cell-inner > span.mini-grid-checkbox', 30000)
               .sleep(300).mouseMove(7, 4).click(0);
    });

    it('mouseUp: 确认选择 ( #btnOk span, 29, 6, 0 )', function(){
        return driver.sleep(300).wait('#btnOk span', 30000)
               .sleep(300).mouseMove(29, 6).mouseMove(29, 6).click(0);
    });

    it('click: #baomingto span.mini-buttonedit-icon, 4, 13, 0', function(){
        return driver.sleep(300).wait('#baomingto span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(4, 13).click(0);
    });

    it('click: 27 ( #mini-19 tr:nth-child(7) > td:nth-child(4), 14, 5, 0 )', function(){
        return driver.sleep(300).wait('#mini-19 tr:nth-child(7) > td:nth-child(4)', 30000)
               .sleep(300).mouseMove(14, 5).click(0);
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: #zbfilelqdatefrom span.mini-buttonedit-icon, 12, 15, 0', function(){
        return driver.sleep(300).wait('#zbfilelqdatefrom span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(12, 15).click(0);
    });

    it('click: 13 ( #mini-19 td.mini-calendar-today, 15, 9, 0 )', function(){
        return driver.sleep(300).wait('#mini-19 td.mini-calendar-today', 30000)
               .sleep(300).mouseMove(15, 9).click(0);
    });

    it('click: #zbfilelqdateto span.mini-buttonedit-icon, 12, 14, 0', function(){
        return driver.sleep(300).wait('#zbfilelqdateto span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(12, 14).click(0);
    });

    it('click: 27 ( #mini-19 tr:nth-child(7) > td:nth-child(4), 15, 15, 0 )', function(){
        return driver.sleep(300).wait('#mini-19 tr:nth-child(7) > td:nth-child(4)', 30000)
               .sleep(300).mouseMove(15, 15).click(0);
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
        return driver.wait('/html/body/div[2]/div/div[6]/div[2]/div/div/div/div/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    //切换到第三层iframe
    it('switchFrame: div.mini-panel-body > iframe222', function(){
        return driver.wait('/html/body/div[2]/div/div[6]/div[2]/div/div/div/div/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    //切换到第四层iframe
    it('switchFrame: div.mini-panel-body > iframe222', function(){
        return driver.wait('/html/body/table/tr[2]/td/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    it('输入公告内容',function () {
        return driver.sleep(300).wait('/html/body/p').click().sendKeys('111');
    });

    it('click: 提交信息 ( #btn_3029768b-db3f-4721-8a69-81d7cdb341c8 span, 39, 4, 0 )', function(){
        return driver.sleep(300).wait('#btn_3029768b-db3f-4721-8a69-81d7cdb341c8 span', 30000)
               .sleep(300).mouseMove(39, 4).click(0);
    });

    it('click: 确定 ( #mini-179 span, 14, 20, 0 )', function(){
        return driver.sleep(300).wait('#mini-179 span', 30000)
               .sleep(300).mouseMove(14, 20).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-182"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-182"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #opinioncontent textarea, 157, 68, 0', function(){
        return driver.sleep(300).wait('#opinioncontent textarea', 30000)
               .sleep(300).mouseMove(157, 68).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: 确认提交 ( input.btnsubmit, 50, 25, 0 )', function(){
        return driver.sleep(300).wait('input.btnsubmit', 30000)
               .sleep(300).mouseMove(50, 25).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 确定 ( #mini-185 span, 2, 3, 0 )', function(){
        return driver.sleep(300).wait('#mini-185 span', 30000)
               .sleep(300).mouseMove(2, 3).click(0);
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
