const MySiderbar = require('./sidebar')
module.exports = {
	title: "liushuiyuan's Blog",// 网站标题
	description: '我的vitepress博客.', //网站描述
	base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
	// lang: 'en-US', //语言
	repo: 'vuejs/vitepress',
	head: [
		// 改变title的图标
		[
			'link',
			{
				rel: 'icon',
				href: '/logo.png',//图片放在public文件夹下
			},
		],
	],
	// 主题配置
	themeConfig: {
		siteTitle: "liushuiyuan's Blog",
		logo: '/logo.png',
		//   头部导航
		nav: [
			{ text: '首页', link: '/' },
      { text: 'js', link: '/js/' },
      { text: '面试集合', link: '/interview/' },
      { text: 'Head First Design', link: '/design/' },
      { text: 'vue设计与实现', link: '/vuejs/' },
			{ text: '关于', link: '/about/' },
		],
		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/liushuiyuan001' },
		],
		//   侧边导航
		sidebar: MySiderbar,
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-present LiuShuiyuan'
		}
	}
}