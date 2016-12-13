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

    callSpec('commons/common11.spec.js');

    it('switchFrame: #tab-content-102100010004 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tab-content-102100010004 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建项目 ( #btnAdd span, 42, 0, 0 )', function(){
        return driver.sleep(300).wait('#btnAdd span', 30000)
               .sleep(300).mouseMove(42, 0).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: div.span5 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input, 10, 15, 0', function(){
        return driver.sleep(300).wait('div.span5 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(10, 15).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('mouseDown: div:nth-child(2) > div:nth-child(2) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 94.5, 16, 0', function(){
        return driver.sleep(300).wait('div:nth-child(2) > div:nth-child(2) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(94.5, 16).mouseDown(0);
    });

    it('mouseUp: #projectjiaoyitype span.mini-buttonedit-border, 101, 17, 0', function(){
        return driver.sleep(300).wait('#projectjiaoyitype span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(101, 17).mouseMove(101, 17).mouseUp(0);
    });

    it('click: 房屋建筑工程 ( #mini-7 tr:nth-child(1) > td:nth-child(2), 70, 11, 0 )', function(){
        return driver.sleep(300).wait('#mini-7 tr:nth-child(1) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(70, 11).click(0);
    });

    it('mouseDown: div:nth-child(4) > span.mini-buttonedit-noInput > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 5.515625, 11, 0', function(){
        return driver.sleep(300).wait('div:nth-child(4) > span.mini-buttonedit-noInput > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(5.515625, 11).mouseDown(0);
    });

    it('mouseUp: #hangyefenlei span.mini-buttonedit-border, 12, 12, 0', function(){
        return driver.sleep(300).wait('#hangyefenlei span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(12, 12).mouseMove(12, 12).mouseUp(0);
    });

    it('click: 房屋建筑业 ( #mini-11 tr:nth-child(1) > td:nth-child(2), 31, 13, 0 )', function(){
        return driver.sleep(300).wait('#mini-11 tr:nth-child(1) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(31, 13).click(0);
    });

    it('mouseDown: div:nth-child(2) > div:nth-child(2) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 148.5, 13, 0', function(){
        return driver.sleep(300).wait('div:nth-child(2) > div:nth-child(2) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(148.5, 13).mouseDown(0);
    });

    it('mouseUp: #projectjiaoyitype span.mini-buttonedit-border, 155, 14, 0', function(){
        return driver.sleep(300).wait('#projectjiaoyitype span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(155, 14).mouseMove(155, 14).mouseUp(0);
    });

    it('click: 交通工程 ( #mini-7 tr:nth-child(3) > td:nth-child(2), 104, 5, 0 )', function(){
        return driver.sleep(300).wait('#mini-7 tr:nth-child(3) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(104, 5).click(0);
    });

    it('mouseDown: div:nth-child(3) > div:nth-child(2) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 91.5, 12, 0', function(){
        return driver.sleep(300).wait('div:nth-child(3) > div:nth-child(2) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(91.5, 12).mouseDown(0);
    });

    it('mouseUp: #xiaqucode span.mini-buttonedit-border, 98, 13, 0', function(){
        return driver.sleep(300).wait('#xiaqucode span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(98, 13).mouseMove(98, 13).mouseUp(0);
    });

    it('click: #mini-16 a, 10, 12, 0', function(){
        return driver.sleep(300).wait('#mini-16 a', 30000)
               .sleep(300).mouseMove(10, 12).click(0);
    });

    it('click: #mini-16 div.mini-tree-nodes > table.mini-grid-table > tbody > tr:nth-child(2) > td.mini-tree-treecell > div.mini-grid-cell-nowrap > div.mini-tree-parentNode > a.mini-tree-node-ecicon, 12, 11, 0', function(){
        return driver.sleep(300).wait('#mini-16 div.mini-tree-nodes > table.mini-grid-table > tbody > tr:nth-child(2) > td.mini-tree-treecell > div.mini-grid-cell-nowrap > div.mini-tree-parentNode > a.mini-tree-node-ecicon', 30000)
               .sleep(300).mouseMove(12, 11).click(0);
    });

    it('mouseDown: 昆山市 ( #mini-16 div.mini-tree-nodes > table > tbody > tr.mini-tree-nodes-tr > td.mini-tree-nodes-td > div.mini-tree-nodes > table.mini-grid-table > tbody > tr:nth-child(2) > td.mini-tree-treecell > div.mini-grid-cell-nowrap > div.mini-tree-nodetitle > span.mini-tree-nodeshow > span.mini-tree-nodetext, 23, 8, 0 )', function(){
        return driver.sleep(300).wait('#mini-16 div.mini-tree-nodes > table > tbody > tr.mini-tree-nodes-tr > td.mini-tree-nodes-td > div.mini-tree-nodes > table.mini-grid-table > tbody > tr:nth-child(2) > td.mini-tree-treecell > div.mini-grid-cell-nowrap > div.mini-tree-nodetitle > span.mini-tree-nodeshow > span.mini-tree-nodetext', 30000)
               .sleep(300).mouseMove(23, 8).mouseDown(0);
    });

    it('mouseUp: 昆山市 ( #mini-16 div.mini-tree-nodes > table > tbody > tr.mini-tree-nodes-tr > td.mini-tree-nodes-td > div.mini-tree-nodes > table.mini-grid-table > tbody, 105, 11, 0 )', function(){
        return driver.sleep(300).wait('#mini-16 div.mini-tree-nodes > table > tbody > tr.mini-tree-nodes-tr > td.mini-tree-nodes-td > div.mini-tree-nodes > table.mini-grid-table > tbody', 30000)
               .sleep(300).mouseMove(105, 11).mouseMove(105, 11).mouseUp(0);
    });

    it('mouseDown: div:nth-child(4) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 21.515625, 7, 0', function(){
        return driver.sleep(300).wait('div:nth-child(4) > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(21.515625, 7).mouseDown(0);
    });

    it('mouseUp: #zhaobiaotype span.mini-buttonedit-border, 28, 8, 0', function(){
        return driver.sleep(300).wait('#zhaobiaotype span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(28, 8).mouseMove(28, 8).mouseUp(0);
    });

    it('click: 自行招标 ( #mini-31 tr:nth-child(2) > td:nth-child(2), 36, 7, 0 )', function(){
        return driver.sleep(300).wait('#mini-31 tr:nth-child(2) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(36, 7).click(0);
    });

    it('mouseDown: div:nth-child(4) > div.span5 > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 106.5, 16, 0', function(){
        return driver.sleep(300).wait('div:nth-child(4) > div.span5 > span.mini-required > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(106.5, 16).mouseDown(0);
    });

    it('mouseUp: #zhaobiaoqingXing span.mini-buttonedit-border, 113, 17, 0', function(){
        return driver.sleep(300).wait('#zhaobiaoqingXing span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(113, 17).mouseMove(113, 17).mouseUp(0);
    });

    it('click: 国有资金控股或占主导... ( #mini-34 tr:nth-child(1) > td:nth-child(2), 111, 14, 0 )', function(){
        return driver.sleep(300).wait('#mini-34 tr:nth-child(1) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(111, 14).click(0);
    });

    it('click: div:nth-child(1) > div.fui-acc-bd > div.fui-form > div.form-inner > div:nth-child(5) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 20, 11, 0', function(){
        return driver.sleep(300).wait('div:nth-child(1) > div.fui-acc-bd > div.fui-form > div.form-inner > div:nth-child(5) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(20, 11).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: div:nth-child(3) > div.fui-acc-bd > div.fui-form > div.form-inner > div:nth-child(1) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 40, 8, 0', function(){
        return driver.sleep(300).wait('div:nth-child(3) > div.fui-acc-bd > div.fui-form > div.form-inner > div:nth-child(1) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(40, 8).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: div:nth-child(2) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 32, 7, 0', function(){
        return driver.sleep(300).wait('div:nth-child(2) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(32, 7).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: div:nth-child(3) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 28, 9, 0', function(){
        return driver.sleep(300).wait('div:nth-child(3) > div.span5 > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(28, 9).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: #lixiangbeizhu textarea, 36, 13, 0', function(){
        return driver.sleep(300).wait('#lixiangbeizhu textarea', 30000)
               .sleep(300).mouseMove(36, 13).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('mouseDown: div:nth-child(4) > div.fui-acc-bd > div.fui-form > div.form-inner > div:nth-child(1) > div:nth-child(2) > span.mini-buttonedit-noInput > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input, 116.5, 14, 0', function(){
        return driver.sleep(300).wait('div:nth-child(4) > div.fui-acc-bd > div.fui-form > div.form-inner > div:nth-child(1) > div:nth-child(2) > span.mini-buttonedit-noInput > span.mini-buttonedit-border > input[type="text"].mini-buttonedit-input', 30000)
               .sleep(300).mouseMove(116.5, 14).mouseDown(0);
    });

    it('mouseUp: #zijinlaiyuan span.mini-buttonedit-border, 123, 15, 0', function(){
        return driver.sleep(300).wait('#zijinlaiyuan span.mini-buttonedit-border', 30000)
               .sleep(300).mouseMove(123, 15).mouseMove(123, 15).mouseUp(0);
    });

    it('click: 财政 ( #mini-67 tr:nth-child(1) > td:nth-child(2), 102, 8, 0 )', function(){
        return driver.sleep(300).wait('#mini-67 tr:nth-child(1) > td:nth-child(2)', 30000)
               .sleep(300).mouseMove(102, 8).click(0);
    });

    it('click: div.span2 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input, 43, 16, 0', function(){
        return driver.sleep(300).wait('div.span2 > span.mini-required > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(43, 16).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: div:nth-child(1) > div:nth-child(7) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input, 14, 9, 0', function(){
        return driver.sleep(300).wait('div:nth-child(1) > div:nth-child(7) > span.mini-textbox > span.mini-textbox-border > input[type="text"].mini-textbox-input', 30000)
               .sleep(300).mouseMove(14, 9).click(0);
    });

    it('sendKeys: {DELETE}{DELETE}{DELETE}{DELETE}111', function(){
        return driver.sendKeys('{DELETE}{DELETE}{DELETE}{DELETE}111');
    });

    it('click: #projectsizedetail textarea, 117, 21, 0', function(){
        return driver.sleep(300).wait('#projectsizedetail textarea', 30000)
               .sleep(300).mouseMove(117, 21).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: #projectremark textarea, 94, 16, 0', function(){
        return driver.sleep(300).wait('#projectremark textarea', 30000)
               .sleep(300).mouseMove(94, 16).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: #jianshedanweiguid span.mini-buttonedit-icon, 2, 5, 0', function(){
        return driver.sleep(300).wait('#jianshedanweiguid span.mini-buttonedit-icon', 30000)
               .sleep(300).mouseMove(2, 5).click(0);
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
        return driver.wait('/html/body/div[17]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });


    // it('switchFrame: iframe[name="mini-iframe-215"]', function(){
    //     return driver.switchFrame(null)
    //            .wait('iframe[name="mini-iframe-215"]', 30000).then(function(element){
    //                return this.switchFrame(element).wait('body');
    //            });
    // });

    it('click: #datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled, 6, 14, 0', function(){
        return driver.sleep(300).wait('#datagrid tr:nth-child(2) > td.mini-grid-rightCell > div.mini-grid-cell-nowrap > a.icon-addcirclefilled', 30000)
               .sleep(300).mouseMove(6, 14).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 提交信息 ( #btn_00f9ef76-2378-4d9c-bd4c-8f71459f26e2 span, 50, 12, 0 )', function(){
        return driver.sleep(300).wait('#btn_00f9ef76-2378-4d9c-bd4c-8f71459f26e2 span', 30000)
               .sleep(300).mouseMove(50, 12).click(0);
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
        return driver.wait('/html/body/div[17]/div/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    // it('switchFrame: iframe[name="mini-iframe-221"]', function(){
    //     return driver.switchFrame(null)
    //            .wait('iframe[name="mini-iframe-221"]', 30000).then(function(element){
    //                return this.switchFrame(element).wait('body');
    //            });
    // });

    it('click: #opinioncontent textarea, 96, 33, 0', function(){
        return driver.sleep(300).wait('#opinioncontent textarea', 30000)
               .sleep(300).mouseMove(96, 33).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: 确认提交 ( input.btnsubmit, 46, 15, 0 )', function(){
        return driver.sleep(300).wait('input.btnsubmit', 30000)
               .sleep(300).mouseMove(46, 15).click(0);
    });

    it('switchFrame: iframe[name="mini-iframe-52"]', function(){
        return driver.switchFrame(null)
               .wait('iframe[name="mini-iframe-52"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 确定 ( #mini-224 span, 26, 15, 0 )', function(){
        return driver.sleep(300).wait('#mini-224 span', 30000)
               .sleep(300).mouseMove(26, 15).click(0);
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
