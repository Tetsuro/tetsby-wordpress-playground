(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);a(161);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(149),l=a(156),d=(a(172),a(162)),u=a.n(d),c=a(154),f=a(173),p=a.n(f),m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.nodes,a=e.defaultThumbnail,r=e.currentPage,n=r===e.numberOfPages,i=r-1==1?"/":"/page/"+(r-1),l="/page/"+(r+1),d=1===r?null:s.a.createElement(o.a,{to:i,rel:"prev"},"← Previous Page"),c=n?null:s.a.createElement(o.a,{to:l,rel:"next"},"Next Page →"),f=t.map(function(e){var t=e.title,r=e.id,n=e.slug,i=e.featured_media?e.featured_media.localFile:null,l=i?i.childImageSharp.fixed:a,d=s.a.createElement(u.a,{fixed:l,className:p.a.PostListThumbnail});return s.a.createElement("li",{key:r,className:p.a.PostList},d,s.a.createElement(o.a,{to:"/"+n},s.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}})))});return s.a.createElement("div",null,s.a.createElement("ul",null,f),s.a.createElement("div",{className:p.a.Pagination},d,c))},t}(i.Component);a.d(t,"query",function(){return g});var h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.allWordpressPost.edges,t=this.props.pageContext,a=t.currentPage,r=t.numberOfPages,n=this.props.data.allImageSharp.edges[0].node.fixed,i=e.map(function(e){return e.node});return s.a.createElement(l.a,null,s.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),s.a.createElement(m,{nodes:i,defaultThumbnail:n,currentPage:a,numberOfPages:r}))},t}(i.Component),g="629794244";t.default=h},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(150);var d=n.a.createContext({}),u=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},151:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Tetchi x Wordpress"}}}}},153:function(e){e.exports={data:{wordpressWpApiMenusMenusItems:{items:[{title:"Home",url:"/",wordpress_id:8098},{title:"Works",url:"/works",wordpress_id:8101},{title:"About Me",url:"/about-me",wordpress_id:8102}]}}}},154:function(e,t,a){"use strict";var r=a(155),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(159),d=a.n(l);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title,l=r.data.site,u=t||l.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u},{name:"robots",content:"noindex"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Tetchi x Wordpress",description:"Playing around with WP and Gatsby",author:"@tetchi"}}}}},156:function(e,t,a){"use strict";var r=a(152),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(149),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,textAlign:"center"}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var u=d,c=a(7),f=a.n(c),p=a(153),m=a(157),h=a.n(m),g=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.links.map(function(e){return i.a.createElement(l.a,{to:e.url,key:e.wordpress_id},e.title)});return i.a.createElement("nav",{className:h.a.MainMenu},e)},t}(n.Component),y=function(){return i.a.createElement(l.b,{query:"3226569543",render:function(e){return i.a.createElement(g,{links:e.wordpressWpApiMenusMenusItems.items})},data:p})},b=(a(158),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(y,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:r})});b.propTypes={children:o.a.node.isRequired};t.a=b},161:function(e,t,a){"use strict";a(171)("fixed",function(e){return function(){return e(this,"tt","","")}})},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),d=r(a(0)),u=r(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,u=e.onError,c=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},c,{onLoad:s,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,w=e.Tag,S=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:E?1:0,transition:L?"opacity "+v+"ms":"none"},o),R="boolean"==typeof b?"lightgray":b,x={transitionDelay:v+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&x,o,f),P={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(m){var O=m;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),R&&d.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&x)}),O.base64&&d.default.createElement(y,(0,l.default)({src:O.base64},P)),O.tracedSVG&&d.default.createElement(y,(0,l.default)({src:O.tracedSVG},P)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}if(h){var k=h,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},R&&d.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:R,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},L&&x)}),k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},P)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},P)),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},k))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=b;t.default=S},171:function(e,t,a){var r=a(11),n=a(18),i=a(19),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},172:function(e){e.exports={data:{placeholderImage:null}}}}]);
//# sourceMappingURL=component---src-templates-post-listing-jsx-947a86816d5517590681.js.map