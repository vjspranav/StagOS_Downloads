(this.webpackJsonpstag_downloads=this.webpackJsonpstag_downloads||[]).push([[0],{62:function(e,i,a){},63:function(e,i,a){},74:function(e){e.exports=JSON.parse('{"OnePlus":{"avicii":{"device":"OnePlus Nord","codename":"avicii","maintainer":"VJS Pranavasri"},"dumpling":{"device":"OnePlus 5T","codename":"dumpling","maintainer":"LOLAPOLA"},"cheeseburger":{"device":"OnePlus 5","codename":"cheeseburger","maintainer":"LOLAPOLA"},"enchilada":{"device":"OnePlus 6","codename":"enchilada","maintainer":"Ayan Choudhury"}},"Nokia":{"PL2":{"device":"Nokia 6.1","codename":"PL2","maintainer":"VJS Pranavasri"}},"Zuk":{"z2_plus":{"device":"Zuk Z2 Plus","codename":"z2_plus","maintainer":"Nikhil Gohil"}},"Yu":{"garlic":{"device":"Yu Yureka Black","codename":"garlic","maintainer":"VJS Pranavasri"}},"Poco":{"phoenix":{"device":"Poco X2","codename":"phoenix","maintainer":"Yashodhan Sawardekar"},"beryllium":{"device":"Poco F1","codename":"beryllium","maintainer":"Preetam Swain"},"Surya":{"device":"Poco X3","codename":"Surya","maintainer":"P Sambit Kumar"}},"Realme":{"CPH1859":{"device":"Realme 1","codename":"CPH1859","maintainer":"Debayan Kar"},"RMX1801":{"device":"Realme 2 pro","codename":"RMX1801","maintainer":"Baibhab"},"RMX1831":{"device":"Realme U1","codename":"RMX1831","maintainer":"Lokesh Vazirani"}},"Xiaomi":{"mido":{"device":"Xiaomi Redmi Note 4/4x","codename":"mido","maintainer":"Shashank S Patil"},"Begonia":{"device":"Xiaomi Redmi Note 8 pro","codename":"Begonia","maintainer":"Shekhar Behera"},"violet":{"device":"Xiaomi Redmi Note 7 Pro","codename":"violet","maintainer":"Saalim"}},"Asus":{"X00T":{"device":"Asus Zenfone Max Pro m1","codename":"X00T","maintainer":"KNdroid"}}}')},75:function(e,i,a){"use strict";a.r(i);var n=a(0),t=a.n(n),r=a(9),c=a.n(r),o=(a(62),a(12)),d=(a(63),a(110)),s=a(119),l=a(115),h=a(118),m=a(51),j=a.n(m),u=a(116),b=a(6),g=Object(d.a)((function(e){return{root:{width:"100%","&:before":{height:0},marginBottom:"15px",borderRadius:"20px",border:"2px solid rgba(0,0,0,0.14)",boxShadow:"0 0 0.5px 0.5px rgba(0,0,0,0.1)"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},gridroot:{flexGrow:1}}}));function x(e){var i,a=g(),t=Object(n.useState)(!1),r=Object(o.a)(t,2),c=r[0],d=r[1],m=e.name,x=e.codename,v=e.device;return Object(b.jsxs)(s.a,{expanded:"panel1"===c,onChange:(i="panel1",function(e,a){d(!!a&&i)}),className:a.root,elevation:0,children:[Object(b.jsx)(h.a,{expandIcon:Object(b.jsx)(j.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(b.jsxs)("div",{className:a.heading,children:[Object(b.jsx)("strong",{children:v})," (",x,")",Object(b.jsx)("div",{style:{color:"rgba(144, 148, 151, 0.8)",fontWeight:"600"},children:m})]})}),Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:a.gridroot,children:Object(b.jsxs)(u.a,{container:!0,spacing:0,children:[Object(b.jsx)(u.a,{item:!0,xs:4,children:Object(b.jsx)("div",{style:{color:"#4285f4",fontWeight:"600",textAlignLast:"left",paddingLeft:"10%"},children:"Pristine"})}),Object(b.jsx)(u.a,{item:!0,xs:4,children:Object(b.jsx)("div",{style:{color:"#4285f4",fontWeight:"600",paddingLeft:"10%",paddingRight:"20%",textAlignLast:"center"},children:"Gapps"})}),Object(b.jsx)(u.a,{item:!0,xs:4,children:Object(b.jsx)("div",{style:{textAlignLast:"right",paddingRight:"10%"},children:Object(b.jsx)("strong",{children:"Build Date"})})}),Object(b.jsx)(u.a,{item:!0,xs:4,children:Object(b.jsx)("div",{style:{color:"rgba(144, 148, 151, 0.8)",fontWeight:"600",float:"left",paddingLeft:"13%"},children:1023})}),Object(b.jsx)(u.a,{item:!0,xs:4,children:Object(b.jsx)("div",{style:{color:"rgba(144, 148, 151, 0.8)",fontWeight:"600",paddingRight:"10%",textAlignLast:"center"},children:4862})}),Object(b.jsx)(u.a,{item:!0,xs:4,children:Object(b.jsx)("div",{style:{color:"rgba(144, 148, 151, 0.8)",fontWeight:"600",float:"right",paddingRight:"13%"},children:"20-12-11"})})]})})})]})}var v=a(117),O=a(74),f=Object.keys(O).sort().reduce((function(e,i){return e[i]=O[i],e}),{});var p=function(){var e=[],i=[],a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return Object(b.jsxs)("div",{style:{position:"center",marginLeft:"10%",marginRight:"10%",marginTop:"10%"},children:[Object(b.jsx)(v.a,{id:"standard-full-width",label:"Search",style:{margin:8},placeholder:"Search for Devices",fullWidth:!0,margin:"normal",value:r,onChange:function(e){var i=e.target.value;c(i)},InputLabelProps:{shrink:!0}}),Object.keys(f).forEach((function(i){e.push(Object(b.jsx)("h1",{style:{color:"#4285f4"},children:i},i));var a=f[i],n=Object.keys(a).sort().reduce((function(e,i){return e[i]=a[i],e}),{});for(var t in n)e.push(Object(b.jsx)(x,{name:f[i][t].name,codename:t,device:f[i][t].device},t))})),r?Object.keys(f).forEach((function(e){var a=f[e],n=Object.keys(a).sort().reduce((function(e,i){return e[i]=a[i],e}),{});for(var t in n)-1===t.toLowerCase().indexOf(r.toLowerCase())&&-1===e.toLowerCase().indexOf(r.toLowerCase())&&-1===f[e][t].device.toLowerCase().indexOf(r.toLowerCase())||i.push(Object(b.jsx)(x,{name:f[e][t].name,codename:t,device:f[e][t].device},t))})):"",r?i.length<=0?Object(b.jsx)("h1",{children:"No results found"}):i:e,Object(b.jsx)("br",{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(i){var a=i.getCLS,n=i.getFID,t=i.getFCP,r=i.getLCP,c=i.getTTFB;a(e),n(e),t(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),y()}},[[75,1,2]]]);
//# sourceMappingURL=main.a9e6b7ce.chunk.js.map