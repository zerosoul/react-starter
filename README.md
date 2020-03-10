# React Starter

基于[create-react-app](https://create-react-app.dev/)改造，增删改了一些特性，以达到我理解的最佳实践。

## 改造了以下特性

- 抽离 [ESLint](https://eslint.org/) 配置并更新到最佳实践
- 抽离 [babel](https://babeljs.io/) 配置并更新到最佳实践

## 去掉了以下特性

- ~~TypeScript 支持~~
- ~~jest 测试支持~~
- ~~postcss 支持~~
- ~~删掉了许多用不到的 npm 包~~

## 增加了以下特性

- 新增 [prettier](https://prettier.io/) 支持，并兼容 ESLint 规则
- 新增 [husky](https://github.com/typicode/husky)+[lintstaged](https://www.npmjs.com/package/lint-staged) 支持，配合 ESLint，检查提交代码的规范性。
- 新增 [commitlint](https://github.com/conventional-changelog/commitlint)支持 ，配合 husky，让 git commit message 更规范。
- 新增 [gh-pages](https://www.npmjs.com/package/gh-pages)支持，一个命令行即可部署到[Github Pages](https://pages.github.com/)
- 推荐 css-in-js：选用 [styled-components](https://www.styled-components.com/)
- 新增路由支持：[react-router](https://reacttraining.com/)
- 新增 favicon 支持：[在线生成各种尺寸 favorite icons](https://realfavicongenerator.net/)。生成后覆盖到`public`目录即可
- 新增 splash 支持：[在线生成各种尺寸 splash](https://appsco.pe/developer/splash-screens)。生成后覆盖到`public/splash`目录即可

## 约定

- `components`/`containers`/`pages`分别对应：组件，容器和页面

## 推荐安装的 VSCode 插件

- ESLint
- prettier
- vscode-commitizen
- markdownlint

## 基于 React Starter 构建的作品

- [中国色](https://colors.ichuantong.cn/)
- [Github 仓库标星统计](https://stars.yangerxiao.com/?repo=https://github.com/zerosoul/chinese-colors)
- [土味情话生成器](https://works.yangerxiao.com/honeyed-words-generator/)
- [静心呼吸，在线调节](https://works.yangerxiao.com/breathe-relaxer/)
- [超强密码生成器](https://works.yangerxiao.com/strong-password-generator/)

更多：[http://works.yangerxiao.com/](http://works.yangerxiao.com/)
