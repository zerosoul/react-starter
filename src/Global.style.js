import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    position: relative;
    min-height: 100%;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
  }
  /**
 * 为了避免字体混乱的局面，统一了 font-family 的设置。
 *
 * 1. 中文字体选择如下：
 *    Windows 优先使用「微软雅黑」，如果没有则使用「中易宋体（SimSun）」。
 *    OS X 优先使用「冬青黑体简体（Hiragino Sans GB）」，如果没有则使用默认的「华文黑体」。
 *    Linux 优先使用「文泉驿微米黑」。
 *
 * 2. 西文字体选择如下：
 *    Windows 优先使用「Arial」。
 *    OS X 优先使用「Helvetica Neue」
*/

/**
 * 1. 防止元素中「font-family」不能继承
 * 2. 西文字体和 OS X 字体写在前面
 * 3. Opera 12.1 之前版本不支持中文字体的英文名称
 * 4. 微软雅黑「\5FAE\8F6F\96C5\9ED1」,中易宋体「\5B8B\4F53」
 */
body,
button, /* 1 */
input, /* 1 */
select, /* 1 */
textarea  /* 1 */
{
  font-family: 'helvetica neue',arial,'hiragino sans gb',stheiti,'wenquanyi micro hei',\5FAE\8F6F\96C5\9ED1,\5B8B\4F53,sans-serif;
}

/**
 * 注意：IE 中部分表单元素并不能识别以上 font-family 中的「微软雅黑」，会以「中易宋体（SimSun）」显示。
 */


/*********************************************************************************************/

/**
 * 1. 代码字体选择如下：
 *    Windows 优先使用 Consolas。
 *    OS X 优先使用 Monaco。
 */
code,
kbd,
pre,
samp {
    font-family: monaco, menlo, consolas, 'courier new', courier, monospace;
}

/**
 * 如果开发者对所选字体没有充分了解，不建议重新定义 font-family 。
 */
  #root{
    background:#fff;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
`;

export default GlobalStyle;
