(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function r(r){return function(t){if(Array.isArray(t))return e(t)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||t(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const n=wp.element,o=wp.blocks,l=wp.i18n,a=wp.data,i=wp.blockEditor,c=wp.components;(0,o.registerBlockType)("my-custom-block/extended-paragraph",{title:(0,l.__)("Read More Block","post-link-block"),icon:"admin-links",category:"common",attributes:{postId:{type:"number",default:0},postTitle:{type:"string",default:""},postLink:{type:"string",default:""}},edit:function(e){var o,s,u=e.attributes,p=e.setAttributes,d=u.postId,f=u.postTitle,m=u.postLink,b=(o=(0,n.useState)(""),s=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,a,i=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(o,s)||t(o,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=b[0],k=b[1],g=(0,a.useSelect)((function(e){return e("core").getEntityRecords("postType","post",{search:y,per_page:10,orderby:"date",order:"desc"})}),[y]),h=g?g.map((function(e){return{label:e.title.rendered,value:e.id}})):[];return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(c.PanelBody,{title:(0,l.__)("Post Link Settings","post-link-block")},(0,n.createElement)(c.TextControl,{label:(0,l.__)("Search Posts","post-link-block"),value:y,onChange:function(e){return k(e)}}),(0,n.createElement)(c.SelectControl,{label:(0,l.__)("Select Post","post-link-block"),value:d,options:[{label:(0,l.__)("Select a post","post-link-block"),value:0}].concat(r(h)),onChange:function(e){var t=g.find((function(t){return t.id==e}));p({postId:e,postTitle:t?t.title.rendered:"",postLink:t?t.link:""})}}))),(0,n.createElement)("p",{className:"dmg-read-more"},m?"Read More: ":"",(0,n.createElement)("a",{href:m},f)))},save:function(e){var t=e.attributes,r=t.postLink,o=t.postTitle;return(0,n.createElement)("p",{className:"dmg-read-more"},r?"Read More: ":"",(0,n.createElement)("a",{href:r},o))}})})();