(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),o=n(0),i=n.n(o),s=n(147),l=n(154),u=n(152),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.comments,t=e.map(function(e){return i.a.createElement("div",null,i.a.createElement("strong",null,e.author_name),i.a.createElement("p",null,e.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))}),n=e.length>0?i.a.createElement("h2",null,e.length," Comments"):null;return i.a.createElement("div",null,n,t)},t}(o.Component),d=n(168),p=n.n(d),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.newerPostSlug,n=e.olderPostSlug,r=t?i.a.createElement(s.a,{to:"/"+t},"« Newer post"):null,a=n?i.a.createElement(s.a,{to:"/"+n},"Older post »"):null;return i.a.createElement("div",{className:p.a.PostFooterLinks},r,a)},t}(o.Component);n.d(t,"query",function(){return y});var f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.wordpressPost,t=e.title,n=e.content,r=this.props.data.allWordpressWpComments.edges,a=this.props.pageContext,o=a.newerPostSlug,s=a.olderPostSlug,d=r.map(function(e){return e.node});return i.a.createElement(l.a,null,i.a.createElement(u.a,{title:t,keywords:["gatsby","application","react"]}),i.a.createElement("h1",{dangerouslySetInnerHTML:{__html:t}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),i.a.createElement(c,{comments:d}),i.a.createElement(m,{newerPostSlug:o,olderPostSlug:s}))},t}(o.Component),y=(t.default=f,"562493252")},147:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=n(33),l=n.n(s);n.d(t,"a",function(){return l.a});n(148);var u=a.a.createContext({}),c=function(e){return a.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var r;e.exports=(r=n(149))&&r.default||r},149:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=n(55),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Tetchi x Wordpress"}}}}},151:function(e){e.exports={data:{wordpressWpApiMenusMenusItems:{items:[{title:"blawg",url:"/",wordpress_id:7999},{title:"about",url:"/about-me",wordpress_id:8e3},{title:"works",url:"/works",wordpress_id:8001}]}}}},152:function(e,t,n){"use strict";var r=n(153),a=n(0),o=n.n(a),i=n(4),s=n.n(i),l=n(157),u=n.n(l);function c(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c},{name:"robots",content:"noindex"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Tetchi x Wordpress",description:"Playing around with WP and Gatsby",author:"@tetchi"}}}}},154:function(e,t,n){"use strict";var r=n(150),a=n(0),o=n.n(a),i=n(4),s=n.n(i),l=n(147),u=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0,textAlign:"center"}},o.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var c=u,d=n(7),p=n.n(d),m=n(151),f=n(155),y=n.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.links.map(function(e){return o.a.createElement(l.a,{to:e.url,key:e.wordpress_id},e.title)});return o.a.createElement("nav",{className:y.a.MainMenu},e)},t}(a.Component),h=function(){return o.a.createElement(l.b,{query:"3226569543",render:function(e){return o.a.createElement(g,{links:e.wordpressWpApiMenusMenusItems.items})},data:m})},E=(n(156),function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(h,null),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))},data:r})});E.propTypes={children:s.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-templates-post-jsx-a7ba8b6120bcfd9af465.js.map