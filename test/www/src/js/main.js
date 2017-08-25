
requirejs.config({
    baseUrl: "src/js",//路径相对加载script www
    paths: {
        'jquery': 'lib/jquery-3.2.1.min'
    }
});
// 加载入口模块
requirejs(['app/index']);