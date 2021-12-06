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
				href: '/img/linktolink.png',//图片放在public文件夹下
			},
		],
	],
	// 主题配置
	themeConfig: {
		//   头部导航
		nav: [
			{ text: '首页', link: '/' },
			{ text: '关于', link: '/about/' },
		],
		//   侧边导航
		sidebar: [
			{
				text: 'Vue',
				link: '/vue/',
				children: [
					{ text: 'Vue组件间传值(上)', link: '/vue/PROP1' },
					{ text: 'Vue组件间传值(下)', link: '/vue/PROP2' },
					{ text: '页面间传值', link: '/vue/PAGE' },
				]
			},
			{
				text: 'JS',
				link: '/js/BASE',
				children: [
					{ text: 'Map', link: '/js/Map' },
					{ text: '手写代码', link: '/js/Code' },
					{ text: '性能优化', link: '/js/Performance' },
					{ text: '浏览器原理', link: '/js/Brower' },
					{ text: '浏览器缓存', link: '/js/Http304' },
					{ text: '面试', link: '/js/Interview' },
				]
			},
			{
				text: 'Head First Design',
				link: '/design/index',
				children: [
					{ text: '策略模式', link: '/design/chapter01' },
					{ text: '观察者模式', link: '/design/chapter02' },
					{ text: '装饰者模式', link: '/design/chapter03' },
					{ text: '简单工厂', link: '/design/chapter04' },
					{ text: '抽象工厂模式', link: '/design/chapter05' },
					{ text: '命令模式', link: '/design/chapter06' },
				]
			}
		]
	}
}