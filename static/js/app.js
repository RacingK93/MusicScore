require.config({
	baseUrl: 'js/lib',
	// urlArgs:'v='+(new Date()).getTime(),//清除缓存
	paths : {
		"vue":'vue/vue.min',
		"text": "requireJS/text",
		"filters":"vue/filters",
		"zepto":"zepto/zepto",
		"async":"requireJS/async",
		"BMap":"https://api.map.baidu.com/api?v=2.0&ak=ndYEn2os3DVI5fW83tzaUkD4",
		"axios": "axios/axios",
		"http": "axios/http",
		"frozen":"frozen/frozen",
		"weui": "weui/weui.min"
	},
	map: {
		'*': {
			'css': 'requireJS/css'
		}
	},
	shim: {
		// 'jquery': ['css!../../css/widget.css','css!../../css/reset.css','css!../../css/common.css']
	}
});
