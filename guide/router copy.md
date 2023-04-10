# 第三方依赖库选用标准
推荐依赖库如下图所示，如需使用其他依赖库或没有推荐，请报上级
使用场景	推荐依赖库	说明
主组件库	TDesgin	-
日期时间处理	dayjs	-
富文本编辑器	wangeditor（V5）	-
xxs攻击防护	xss	一般配合富文本编辑器使用
图片云存储	qiniu-js	公司内部一般推荐客户使用七牛云
图表可视化	@antv/g2plot	按需引入
高德地图	amap-jsapi-loader	按需引入，高德地图必须以这种方式引入
动态脚本加载	load-script	按需引入，主要用于某些js需要远程加载的情况
获取/判断UA	ua-parser-js	按需引入
滚动条	perfect-scrollbar	按需引入，一般用不上，使用场景有限
二维码生成	qrcode	按需引入