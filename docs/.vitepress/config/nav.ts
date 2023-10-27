import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '新人入门',
    link: 'basic/01-新人入门/01-什么是轩辕剑',
    activeMatch: '/basic/'
  },
  {
    text: '资讯公告',
    link: '/news',
    activeMatch: '/news/'
  },
  {
    text: '游戏',
    items: [
      { text: '单机游戏', link: '/games/pc/index', activeMatch: '/games/pc/' },
      { text: '手机游戏', link: '/games/mobile/index', activeMatch: '/games/mobile/' },
      { text: '网络游戏', link: '/games/pcweb/index', activeMatch: '/games/pcweb/' },
      { text: '网页游戏', link: '/games/web/index', activeMatch: '/games/web/' },
    ],
    activeMatch: '/games/'
  },
  {
    text: '影视',
    items: [
      { text: '电视剧', link: '/movies/tvplay/index', activeMatch: '/movies/tvplay/' },
    ],
    activeMatch: '/movies/typlay/'
  },
  {
    text: '漫画动画',
    items: [
      { text: '漫画', link: '/comic_animation/comic/index', activeMatch: '/games/pcgame/' },
      { text: '动画', link: '/comic_animation/animation/index', activeMatch: '/games/mbgame/' },
    ],
    activeMatch: '/comic_animation/'
  },
  {
    text: '关于本站',
    items: [
      { text: '关于本站', link: '/about/index', activeMatch: '/about/index' },
      { text: '改版沿革', link: '/about/beta', activeMatch: '/about/beta' },
      { text: '看板娘历程', link: '/about/kanbanniang', activeMatch: '/about/kanbanniang' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
];