
requirejs.config({
    baseUrl: "src/js",//路径www, 相对script加载
    paths: {
        'jquery': 'lib/jquery-3.2.1.min'
    }
});
// 加载入口模块
requirejs(['app/index']);