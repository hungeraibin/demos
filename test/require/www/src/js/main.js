/* Created by lenovo on 2017/8/24.
 */
requirejs.config({
    base: './src/js',
    path: {
        'jquery': 'lib/bower_components/jquery/dist/jquery.min'
    }
});

//加载入口模块
requirejs(['app/index']);
