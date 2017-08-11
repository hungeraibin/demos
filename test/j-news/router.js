/**
 * Created by lenovo on 2017/8/10.
 */

app.get('/getNews', function (req, res) {
    var news = [
        {
            link: 'http://tech.qq.com/a/20170810/047128.htm',
            img: 'http://inews.gtimg.com/newsapp_bt/0/1902535373/641',
            title: '业内预测华为手机第三季度将超苹果 成全球第二',
            brif: '华为手机业务负责人余承东，去年曾经做出大胆预言...'
        },
        {
            link: 'http://tech.qq.com/a/20170810/044094.htm',
            img: 'http://inews.gtimg.com/newsapp_ls/0/1902113428_150120/0',
            title: '乐视发薪日：乐视体育发了6月份薪资，还欠7月的',
            brif: '今日是乐视体系员工发薪日，继上月10日发生大规模非上市体系公司员工欠薪...'
        },
        {
            link: 'http://tech.qq.com/a/20170810/030034.htm',
            img: 'http://inews.gtimg.com/newsapp_bt/0/1900977221/641',
            title: '中国移动上半年净利润627亿元 4G用户逼近6亿',
            brif: '中国移动(微博)发布2017年中期报告...'
        },
        {
            link: 'http://tech.qq.com/a/20170810/043594.htm',
            img: 'http://inews.gtimg.com/newsapp_bt/0/1902045156/641',
            title: '百度京东达成京度计划 手机百度为京东提供一级入口',
            brif: '数据合作是“京度计划”的最核心部分...'
        },
        {
            link: 'http://tech.qq.com/a/20170810/035009.htm',
            img: 'http://inews.gtimg.com/newsapp_bt/0/1901297422/641',
            title: '部分员工对苹果新总部设计不满 甚至考虑离职',
            brif: ' 据国外媒体报道称，备受关注的苹果太空船新园区...'
        }
        ];

    var pageIndex = req.query.page;
    var len = 2;
    var retNews = news.slice(pageIndex*len, pageIndex*len+len)
    res.send({
        status: 0,
        data: retNews
    });
});
