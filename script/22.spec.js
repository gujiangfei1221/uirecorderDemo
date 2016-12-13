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

    callSpec('commons/common22.spec.js');

    it('switchFrame: #tab-content-102100010001 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100010001 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建招标项目 ( #btnAdd span, 57, 14, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(57, 14).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: div:nth-child(6) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 18, 8, 0', function(){
        return driver.sleep(300).wait('div:nth-child(6) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(18, 8).click(0);
    });

    // it('sendKeys: 111', function(){
    //     return driver.sendKeys('1213ceshixiangmu');
    // });

    it('搜索',function () {
        return driver.sleep(300).wait('div:nth-child(6) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input').val(testVars['xiangmumingcheng']);
    });

    it('click: 搜索 ( span.cond-srh-btn-text, 29, 12, 0 )', function(){
        return driver.sleep(300).wait('span.cond-srh-btn-text', 30000)
               .sleep(300).mouseMove(29, 12).click(0);
    });

    it('click: #datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled, 7, 5, 0', function(){
        return driver.sleep(300).wait('#datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled', 30000)
               .sleep(300).mouseMove(7, 5).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-54"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-54"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #zbcontent textarea, 46, 23, 0', function(){
        return driver.sleep(300).wait('#zbcontent textarea', 30000)
               .sleep(300).mouseMove(46, 23).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: input.mini-buttonedit-input, 25, 4, 0', function(){
        return driver.sleep(300).wait('input.mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(25, 4).click(0);
    });

    it('click: 公开招标 ( #mini-14 tr:nth-child(1) > td:nth-child(2), 36, 8, 0 )', function(){
        return driver.sleep(300).wait('#mini-14 tr:nth-child(1) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(36, 8).click(0);
    });

    it('click: div.span2 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 19, 9, 0', function(){
        return driver.sleep(300).wait('div.span2 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(19, 9).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: 新增标段 ( #btnAddRecord span, 54, 10, 0 )', function(){
        return driver.sleep(300).wait('#btnAddRecord span', 30000)
               .sleep(300).mouseMove(54, 10).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-56"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-56"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: div.span5 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input, 280, 17, 0', function(){
        return driver.sleep(300).wait('div.span5 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(280, 17).click(0);
    });

    // it('sendKeys: 111', function(){
    //     return driver.sendKeys('111');
    // });

    it('',function () {
        return driver.sleep(300).wait('div.span5 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input').val(testVars['biaoduanmingcheng'])
    });

    it('click: 挑选 ( #btnSelectBD span, 21, 11, 0 )', function(){
        return driver.sleep(300).wait('#btnSelectBD span', 30000)
               .sleep(300).mouseMove(21, 11).click(0);
    });

    //先切换到main page
    it('switchFrame: div.mini-panel-body > iframenull', function(){
        return driver.switchFrame(null);
    });

    //切换到第一层iframe
    it('switchFrame: div.mini-panel-body > iframe22', function(){
        return driver.wait('/html/body/div[7]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    //切换到第二层iframe
    it('switchFrame: div.mini-panel-body > iframe222', function(){
        return driver.wait('/html/body/div[4]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });


    // it('switchFrame: iframe[name="mini-iframe-41"]', function(){
    //     return driver.switchFrame(null)
    //            .wait('iframe[name="mini-iframe-41"]', 30000).then(function(element){
    //                return this.switchFrame(element).wait('body');
    //            });
    // });

    it('click: #mini-8 a.mini-tree-node-ecicon-first, 12, 11, 0', function(){
        return driver.sleep(300).wait('#mini-8 a.mini-tree-node-ecicon-first', 30000)
               .sleep(300).mouseMove(12, 11).click(0);
    });

    it('click: #mini-8 div.mini-tree-nodes > table.mini-grid-table > tbody > tr:nth-child(2) > td.mini-tree-treecell > div.mini-grid-cell-nowrap > div.mini-tree-parentNode > a.mini-tree-node-ecicon, 9, 9, 0', function(){
        return driver.sleep(300).wait('#mini-8 div.mini-tree-nodes > table.mini-grid-table > tbody > tr:nth-child(2) > td.mini-tree-treecell > div.mini-grid-cell-nowrap > div.mini-tree-parentNode > a.mini-tree-node-ecicon', 30000)
               .sleep(300).mouseMove(9, 9).click(0);
    });

    it('click: #mini-8 span.mini-tree-checkbox, 7, 4, 0', function(){
        return driver.sleep(300).wait('#mini-8 span.mini-tree-checkbox', 30000)
               .sleep(300).mouseMove(7, 4).click(0);
    });

    it('click: 确认选择 ( #save span, 38, 5, 0 )', function(){
        return driver.sleep(300).wait('#save span', 30000)
               .sleep(300).mouseMove(38, 5).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-56"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-56"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('选择资格后审',function () {
        return driver.sleep(300).wait('/html/body/div[2]/div/div/div[2]/div[2]/div/div/div[4]/div[2]/div/table/tbody/tr/td/div[1]/div[2]/span').sleep(300).mouseMove().click();
    });

    it('click: #unitprojectdesp textarea, 31, 13, 0', function(){
        return driver.sleep(300).wait('#unitprojectdesp textarea', 30000)
               .sleep(300).mouseMove(31, 13).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: div.form-control > div > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input, 49, 9, 0', function(){
        return driver.sleep(300).wait('div.form-control > div > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(49, 9).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: #kaigongdate span.mini-buttonedit-icon, 7, 12, 0', function(){
        return driver.sleep(300).wait('#kaigongdate span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(7, 12).click(0);
    });

    it('click: 今天 ( #mini-21 span.mini-calendar-tadayButton, 34, 12, 0 )', function(){
        return driver.sleep(300).wait('#mini-21 span.mini-calendar-tadayButton', 30000)
               .sleep(300).mouseMove(34, 12).click(0);
    });

    it('click: #jungongdate span.mini-buttonedit-icon, 7, 5, 0', function(){
        return driver.sleep(300).wait('#jungongdate span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(7, 5).click(0);
    });

    it('click: 20 ( #mini-21 tr:nth-child(6) > td:nth-child(4), 14, 13, 0 )', function(){
        return driver.sleep(300).wait('#mini-21 tr:nth-child(6) > td:nth-child(4)', 30000)
               .sleep(300).mouseMove(14, 13).click(0);
    });

    it('click: #fabaodate span.mini-buttonedit-icon, 9, 7, 0', function(){
        return driver.sleep(300).wait('#fabaodate span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(9, 7).click(0);
    });

    it('click: 今天 ( #mini-21 span.mini-calendar-tadayButton, 35, 7, 0 )', function(){
        return driver.sleep(300).wait('#mini-21 span.mini-calendar-tadayButton', 30000)
               .sleep(300).mouseMove(35, 7).click(0);
    });

    it('click: div.span2 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input, 85, 8, 0', function(){
        return driver.sleep(300).wait('div.span2 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(85, 8).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: #remark textarea, 543, 13, 0', function(){
        return driver.sleep(300).wait('#remark textarea', 30000)
               .sleep(300).mouseMove(543, 13).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: 修改保存 ( #icon-save span, 35, 15, 0 )', function(){
        return driver.sleep(300).wait('#icon-save span', 30000)
               .sleep(300).mouseMove(35, 15).click(0);
    });

    it('click: 确定 ( #mini-45 span, 19, 12, 0 )', function(){
        return driver.sleep(300).wait('#mini-45 span', 30000)
               .sleep(300).mouseMove(19, 12).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-54"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-54"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 提交信息 ( #btn_4196ac09-b9b2-4cca-91b2-cb0fa97d3619 span, 49, 13, 0 )', function(){
        return driver.sleep(300).wait('#btn_4196ac09-b9b2-4cca-91b2-cb0fa97d3619 span', 30000)
               .sleep(300).mouseMove(49, 13).click(0);
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
        return driver.wait('/html/body/div[7]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });


    // it('switchFrame: iframe[name="mini-iframe-99"]', function(){
    //     return driver.switchFrame(null)
    //            .wait('iframe[name="mini-iframe-99"]', 30000).then(function(element){
    //                return this.switchFrame(element).wait('body');
    //            });
    // });

    it('click: 确认提交 ( input.btnsubmit, 50, 13, 0 )', function(){
        return driver.sleep(300).wait('input.btnsubmit', 30000)
               .sleep(300).mouseMove(50, 13).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-54"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-54"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 确定 ( #mini-102 span, 38, 13, 0 )', function(){
        return driver.sleep(300).wait('#mini-102 span', 30000)
               .sleep(300).mouseMove(38, 13).click(0);
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
