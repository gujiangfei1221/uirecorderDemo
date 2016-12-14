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

    callSpec('commons/common44.spec.js');

    it('mouseMove: 招标方案 ( #aspnetForm div.secondmenu > div:nth-child(1) )', function(){
        return driver.sleep(300).wait('#aspnetForm div.secondmenu > div:nth-child(1)', 30000)
               .sleep(300).mouseMove();
    });

    it('click: 项目注册 ( li:nth-child(1) > div.menu-item > div, 47, 10, 0 )', function(){
        return driver.sleep(300).wait('li:nth-child(1) > div.menu-item > div', 30000)
               .sleep(300).mouseMove(47, 10).click(0);
    });

    it('switchFrame: #tabs-102100010004 iframe', function(){
        return driver.switchFrame(null)
               .wait('#tabs-102100010004 iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: 新建项目 ( #ctl00_cphToolBar_ToolBar1 div:nth-child(1), 40, 21, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphToolBar_ToolBar1 div:nth-child(1)', 30000)
               .sleep(300).mouseMove(40, 21).click(0);
    });

    it('switchFrame: #_DialogFrame_dialog1', function(){
        return driver.switchFrame(null)
               .wait('#_DialogFrame_dialog1', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: ctl00$cphContent$Pro... ( #ctl00_cphContent_ProjectName_1000, 29, 11, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_ProjectName_1000', 30000)
               .sleep(300).mouseMove(29, 11).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: #ctl00_cphContent_ProjectJiaoYiType_1000 div, 10, 5, 0', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_ProjectJiaoYiType_1000 div', 30000)
               .sleep(300).mouseMove(10, 5).click(0);
    });

    it('click: 房屋建筑工程 ( #ctl00_cphContent_tdContainer div.DropDownMainWrapper > div:nth-child(2), 62, 18, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_tdContainer div.DropDownMainWrapper > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(62, 18).click(0);
    });

    it('click: #txt_ctl00_cphContent_TextTreeView1 span.Select > div, 10, 6, 0', function(){
        return driver.sleep(300).wait('#txt_ctl00_cphContent_TextTreeView1 span.Select > div', 30000)
               .sleep(300).mouseMove(10, 6).click(0);
    });

    it('click: ctl00_cphContent_Tex... ( #ctl00_cphContent_TextTreeView1_input_768c3486-f6d3-4ec6-ac4d-e25dc8f03f22, 11, 8, 0 )', function(){
        return driver.sleep(300).wait('/html/body/form/div[4]/div[3]/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[4]/td[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[1]/span[3]/input', 30000)
               .sleep(300).mouseMove(11, 8).click(0);
    });

    it('click: ctl00$cphContent$Jia... ( #ctl00_cphContent_JianSheDiDian_1000, 27, 10, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_JianSheDiDian_1000', 30000)
               .sleep(300).mouseMove(27, 10).click(0);
    });

    it('sendKeys: 111', function(){
        return driver.sendKeys('111');
    });

    it('click: 检索 ( #ctl00_cphContent_SelectBtn, 14, 6, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_SelectBtn', 30000)
               .sleep(300).mouseMove(14, 6).click(0);
    });

    //先切换到main page
    it('switchFrame: div.mini-panel-body > iframenull', function(){
        return driver.switchFrame(null);
    });

    //切换到第一层iframe
    it('switchFrame: div.mini-panel-body > iframe22', function(){
        return driver.wait('/html/body/div[21]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    //切换到第二层iframe
    it('switchFrame: div.mini-panel-body > iframe222', function(){
        return driver.wait('/html/body/div[2]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });


    it('click: #ctl00_cphContent_DataGrid1_ctl16_btnSelect, 11, 14, 0', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_DataGrid1_ctl16_btnSelect', 30000)
               .sleep(300).mouseMove(11, 14).click(0);
    });

    //先切换到main page
    it('switchFrame: /html/body/div[21]/div[2]/iframe', function(){
        return driver.wait('/html/body/div[21]/div[2]/iframe', 30000).then(function(element){
            return this.switchFrame(element).wait('body');
        });
    });

    it('',function () {
        return driver.sleep(300).wait('/html/body/form/div[4]/div[3]/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[4]/td[4]/div/div[1]/span/div').sleep(300).click(0);
    });

    it('',function () {
        return driver.sleep(300).wait('/html/body/form/div[4]/div[3]/div/div/div[1]/div[1]/div[2]/div[2]/table/tbody/tr[4]/td[4]/div/div[2]/div/div[2]').sleep(300).click(0);
    });

    it('',function () {
        return driver.sleep(300).wait('/html/body/form/div[4]/div[3]/div/div/div[1]/div[2]/div[2]/div[2]/table/tbody/tr[3]/td[2]/div/input').sleep(300).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('{CTRL}{A}{BACK_SPACE}12312312-0');
    });

    it('scrollTo: 0, 0', function(){
        return driver.scrollTo(0, 0);
    });

    it('click: ctl00$cphContent$Bei... ( #ctl00_cphContent_BeiANWenHao_1000, 183, 0, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_BeiANWenHao_1000', 30000)
               .sleep(300).mouseMove(183, 0).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: ctl00$cphContent$Bei... ( #ctl00_cphContent_BeiAnTiTle_1000, 130, 10, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_BeiAnTiTle_1000', 30000)
               .sleep(300).mouseMove(130, 10).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: ctl00$cphContent$Yon... ( #ctl00_cphContent_YongDiNO_1000, 105, 4, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_YongDiNO_1000', 30000)
               .sleep(300).mouseMove(105, 4).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: #ctl00_cphContent_LiXiangBeiZhu_1000, 97, 30, 0', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_LiXiangBeiZhu_1000', 30000)
               .sleep(300).mouseMove(97, 30).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: ctl00$cphContent$Tou... ( #ctl00_cphContent_TouZiGuSuan_1000, 37, 17, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_TouZiGuSuan_1000', 30000)
               .sleep(300).mouseMove(37, 17).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: ctl00$cphContent$ZiJ... ( #ctl00_cphContent_ZiJinLaiYuan_SWY_1000, 18, 3, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_ZiJinLaiYuan_SWY_1000', 30000)
               .sleep(300).mouseMove(18, 3).click(0);
    });

    it('sendKeys: {DELETE}{DELETE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}1', function(){
        return driver.sendKeys('{DELETE}{DELETE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}1');
    });

    it('click: ctl00$cphContent$Jia... ( #ctl00_cphContent_JianZhuMianJi_1000, 33, 7, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_JianZhuMianJi_1000', 30000)
               .sleep(300).mouseMove(33, 7).click(0);
    });

    it('sendKeys: 11', function(){
        return driver.sendKeys('11');
    });

    it('click: #ctl00_cphContent_ProjectSizeDetail_1000, 189, 27, 0', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_ProjectSizeDetail_1000', 30000)
               .sleep(300).mouseMove(189, 27).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: #ctl00_cphContent_ProjectReMark_1000, 188, 22, 0', function(){
        return driver.sleep(300).wait('#ctl00_cphContent_ProjectReMark_1000', 30000)
               .sleep(300).mouseMove(188, 22).click(0);
    });

    it('sendKeys: 1', function(){
        return driver.sendKeys('1');
    });

    it('click: 下一步 ( #ctl00_cphToolBar_btnApply, 42, 20, 0 )', function(){
        return driver.sleep(300).wait('#ctl00_cphToolBar_btnApply', 30000)
               .sleep(300).mouseMove(42, 20).click(0);
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
