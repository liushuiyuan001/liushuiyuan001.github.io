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
		// siteTitle: 'Hello World',
		logo: '/logo.png',
		//   头部导航
		nav: [
			{ text: '首页', link: '/' },
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
		sidebar: [
			{
				text: 'Vue',
				link: '/vue/',
				items: [
					{ text: 'Vue组件间传值(上)', link: '/vue/PROP1' },
					{ text: 'Vue组件间传值(下)', link: '/vue/PROP2' },
					{ text: '页面间传值', link: '/vue/PAGE' },
				]
			},
			{
				text: 'JS',
				link: '/js/BASE',
				items: [
					{ text: 'Map', link: '/js/Map' },
					{ text: '手写代码', link: '/js/Code' },
					{ text: '性能优化', link: '/js/Performance' },
					{ text: '浏览器原理', link: '/js/Brower' },
					{ text: '浏览器缓存', link: '/js/Http304' },
				]
			},
			{
				text: '面试集合',
				link: '/interview/base',
				items: [
					{ text: '面试', link: '/interview/base' },
					{ text: '面试', link: '/interview/bbj' },
					{ text: '面试', link: '/interview/dh' },
					{ text: '面试', link: '/interview/hk' },
					{ text: '面试', link: '/interview/ql' },
					{ text: '面试', link: '/interview/sy' },
					{ text: '面试', link: '/interview/wy' },
					{ text: '面试', link: '/interview/wy1' },
					{ text: '面试', link: '/interview/xf' },
					{ text: '面试', link: '/interview/yl' },
					{ text: '面试', link: '/interview/zcy' },
				]
			},
			{
				text: 'Head First Design',
				link: '/design/index',
				items: [
					{ text: '策略模式', link: '/design/chapter01' },
					{ text: '观察者模式', link: '/design/chapter02' },
					{ text: '装饰者模式', link: '/design/chapter03' },
					{ text: '简单工厂', link: '/design/chapter04' },
					{ text: '抽象工厂模式', link: '/design/chapter05' },
					{ text: '命令模式', link: '/design/chapter06' },
				]
			},
			{
				text: 'Vuejs设计与实现',
				link: '/vuejs/index',
				items: [
					{ text: '第九章', link: '/vuejs/09' },
					{ text: '第十章', link: '/vuejs/10' },
					{ text: '第十一章', link: '/vuejs/11' }
				]
			}
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-present LiuShuiyuan'
		}
	}
}