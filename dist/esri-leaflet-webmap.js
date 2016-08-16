/* esri-leaflet-webmap - v0.3.4 - Tue Aug 16 2016 15:26:32 GMT+0900 (東京 (標準時))
 * Copyright (c) 2016 Yusuke Nunokawa <nuno0825@gmail.com>
 * MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("leaflet")):"function"==typeof define&&define.amd?define(["exports","leaflet"],t):t((e.L=e.L||{},e.L.esri=e.L.esri||{}),e.L)}(this,function(e,t){"use strict";function i(e,t){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}function r(e){return i(e[0],e[e.length-1])||e.push(e[0]),e}function o(e){var t,i=0,r=0,o=e.length,n=e[r];for(r;r<o-1;r++)t=e[r+1],i+=(t[0]-n[0])*(t[1]+n[1]),n=t;return i>=0}function n(e,t,i,r){var o=(r[0]-i[0])*(e[1]-i[1])-(r[1]-i[1])*(e[0]-i[0]),n=(t[0]-e[0])*(e[1]-i[1])-(t[1]-e[1])*(e[0]-i[0]),s=(r[1]-i[1])*(t[0]-e[0])-(r[0]-i[0])*(t[1]-e[1]);if(0!==s){var a=o/s,l=n/s;if(a>=0&&a<=1&&l>=0&&l<=1)return!0}return!1}function s(e,t){for(var i=0;i<e.length-1;i++)for(var r=0;r<t.length-1;r++)if(n(e[i],e[i+1],t[r],t[r+1]))return!0;return!1}function a(e,t){for(var i=!1,r=-1,o=e.length,n=o-1;++r<o;n=r)(e[r][1]<=t[1]&&t[1]<e[n][1]||e[n][1]<=t[1]&&t[1]<e[r][1])&&t[0]<(e[n][0]-e[r][0])*(t[1]-e[r][1])/(e[n][1]-e[r][1])+e[r][0]&&(i=!i);return i}function l(e,t){var i=s(e,t),r=a(e,t[0]);return!(i||!r)}function u(e){for(var t,i,n,a=[],u=[],h=0;h<e.length;h++){var p=r(e[h].slice(0));if(!(p.length<4))if(o(p)){var y=[p];a.push(y)}else u.push(p)}for(var f=[];u.length;){n=u.pop();var c=!1;for(t=a.length-1;t>=0;t--)if(i=a[t][0],l(i,n)){a[t].push(n),c=!0;break}c||f.push(n)}for(;f.length;){n=f.pop();var d=!1;for(t=a.length-1;t>=0;t--)if(i=a[t][0],s(i,n)){a[t].push(n),d=!0;break}d||a.push([n.reverse()])}return 1===a.length?{type:"Polygon",coordinates:a[0]}:{type:"MultiPolygon",coordinates:a}}function h(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function p(e,t){var i={};return"number"==typeof e.x&&"number"==typeof e.y&&(i.type="Point",i.coordinates=[e.x,e.y]),e.points&&(i.type="MultiPoint",i.coordinates=e.points.slice(0)),e.paths&&(1===e.paths.length?(i.type="LineString",i.coordinates=e.paths[0].slice(0)):(i.type="MultiLineString",i.coordinates=e.paths.slice(0))),e.rings&&(i=u(e.rings.slice(0))),(e.geometry||e.attributes)&&(i.type="Feature",i.geometry=e.geometry?p(e.geometry):null,i.properties=e.attributes?h(e.attributes):null,e.attributes&&(i.id=e.attributes[t]||e.attributes.OBJECTID||e.attributes.FID)),i}function y(e,t){return new j(e,t)}function f(e,t){return new B(e,t)}function c(e,t){return new A(e,t)}function d(e,t){return new U(e,t)}function _(e,t){return new W(e,t)}function g(e,t){return new R(e,t)}function m(e,t){return new Y(e,t)}function v(e){return new X(e)}function b(e,t){return new H(e,t)}function S(e){var t={position:[],offset:[]};return t.position=e.reverse(),t.offset=[20,20],t}function x(e){var t,i={position:[],offset:[]};return t=Math.round(e.length/2),i.position=e[t].reverse(),i.offset=[0,0],i}function L(e,t){var i={position:[],offset:[]};return i.position=e.getBounds().getCenter(),i.offset=[0,0],i}function I(e,t){var i=/\{([^\]]*)\}/g,r="",o="";void 0!==e.title&&(r=e.title),r=r.replace(i,function(e){var r=i.exec(e);return t[r[1]]}),o='<div class="leaflet-popup-content-title"><h4>'+r+'</h4></div><div class="leaflet-popup-content-description" style="max-height:200px;overflow:auto;">';for(var n=0;n<e.fieldInfos.length;n++)e.fieldInfos[n].visible===!0&&(o+='<div style="font-weight:bold;color:#999;margin-top:5px;word-break:break-all;">'+e.fieldInfos[n].label+'</div><p style="margin-top:0;margin-bottom:5px;word-break:break-all;">'+t[e.fieldInfos[n].fieldName]+"</p>");return o+="</div>",e.mediaInfos.length>0,o}function w(e,t,i,r){return M(e,t,i,r)}function M(e,i,r,o){console.log("generateEsriLayer: ",e.title,e);var n,s,a=[],l=o+"-label";if(void 0!==e.featureCollection)return console.log("create FeatureCollection"),r.createPane(l),s=t.featureGroup(a),n=m([],{data:e.itemId||e.featureCollection,opacity:e.opacity,renderer:e.featureCollection.layers[0].layerDefinition.drawingInfo.renderer,pane:o,onEachFeature:function(t,i){if(void 0!==e.featureCollection.layers[0].popupInfo){var r=I(e.featureCollection.layers[0].popupInfo,t.properties);i.bindPopup(r)}if(void 0!==e.featureCollection.layers[0].layerDefinition.drawingInfo.labelingInfo){var o,n=e.featureCollection.layers[0].layerDefinition.drawingInfo.labelingInfo,a=i.feature.geometry.coordinates;o="Point"===i.feature.geometry.type?S(a):"LineString"===i.feature.geometry.type?x(a):"MultiLineString"===i.feature.geometry.type?x(a[Math.round(a.length/2)]):L(i);var u=b(o.position,{zIndexOffset:1,properties:t.properties,labelingInfo:n,offset:o.offset,pane:l});s.addLayer(u)}}}),n=t.layerGroup([n,s]),i.push({type:"FC",title:e.title||"",layer:n}),n;if("Feature Collection"===e.type)return console.log("create FeatureCollection without featureCollection property"),n=m([],{data:e.itemId,pane:o,opacity:e.opacity});if("ArcGISFeatureLayer"===e.layerType&&void 0!==e.layerDefinition){var u="1=1";if(void 0!==e.layerDefinition.drawingInfo){if("heatmap"===e.layerDefinition.drawingInfo.renderer.type){console.log("create HeatmapLayer");var h={};return e.layerDefinition.drawingInfo.renderer.colorStops.map(function(e){h[(Math.round(100*e.ratio)/100+6)/7]="rgb("+e.color[0]+","+e.color[1]+","+e.color[2]+")"}),n=t.esri.Heat.heatmapFeatureLayer({url:e.url,minOpacity:.5,max:e.layerDefinition.drawingInfo.renderer.maxPixelIntensity,blur:e.layerDefinition.drawingInfo.renderer.blurRadius,radius:1.3*e.layerDefinition.drawingInfo.renderer.blurRadius,gradient:h,pane:o}),i.push({type:"HL",title:e.title||"",layer:n}),n}console.log("create ArcGISFeatureLayer (with layerDefinition.drawingInfo)");var p=e.layerDefinition.drawingInfo;return p.transparency=100-100*e.opacity,console.log(p.transparency),void 0!==e.layerDefinition.definitionExpression&&(u=e.layerDefinition.definitionExpression),r.createPane(l),s=t.featureGroup(a),n=t.esri.featureLayer({url:e.url,where:u,drawingInfo:p,pane:o,onEachFeature:function(t,i){if(void 0!==e.popupInfo){var r=I(e.popupInfo,t.properties);i.bindPopup(r)}if(void 0!==e.layerDefinition.drawingInfo.labelingInfo){var o,n=e.layerDefinition.drawingInfo.labelingInfo,a=i.feature.geometry.coordinates;o="Point"===i.feature.geometry.type?S(a):"LineString"===i.feature.geometry.type?x(a):"MultiLineString"===i.feature.geometry.type?x(a[Math.round(a.length/2)]):L(i);var u=b(o.position,{zIndexOffset:1,properties:t.properties,labelingInfo:n,offset:o.offset,pane:l});s.addLayer(u)}}}),n=t.layerGroup([n,s]),i.push({type:"FL",title:e.title||"",layer:n}),n}return console.log("create ArcGISFeatureLayer (without layerDefinition.drawingInfo)"),void 0!==e.layerDefinition.definitionExpression&&(u=e.layerDefinition.definitionExpression),n=t.esri.featureLayer({url:e.url,where:u,pane:o,onEachFeature:function(t,i){if(void 0!==e.popupInfo){var r=I(e.popupInfo,t.properties);i.bindPopup(r)}}}),i.push({type:"FL",title:e.title||"",layer:n}),n}if("ArcGISFeatureLayer"===e.layerType)return console.log("create ArcGISFeatureLayer"),n=t.esri.featureLayer({url:e.url,pane:o,onEachFeature:function(t,i){if(void 0!==e.popupInfo){var r=I(e.popupInfo,t.properties);i.bindPopup(r)}}}),i.push({type:"FL",title:e.title||"",layer:n}),n;if("ArcGISImageServiceLayer"===e.layerType)return console.log("create ArcGISImageServiceLayer"),n=t.esri.imageMapLayer({url:e.url,pane:o,opacity:e.opacity||1}),i.push({type:"IML",title:e.title||"",layer:n}),n;if("ArcGISMapServiceLayer"===e.layerType)return n=t.esri.dynamicMapLayer({url:e.url,pane:o,opacity:e.opacity||1}),i.push({type:"DML",title:e.title||"",layer:n}),n;if("ArcGISTiledMapServiceLayer"===e.layerType){try{n=t.esri.basemapLayer(e.title)}catch(y){n=t.esri.tiledMapLayer({url:e.url}),t.esri.request(e.url,{},function(e,t){if(e)console.log(e);else{var i=r.getSize().x-55,o='<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block; max-width:'+i+'px;">'+t.copyrightText+"</span>";r.attributionControl.addAttribution(o)}})}return document.getElementsByClassName("leaflet-tile-pane")[0].style.opacity=e.opacity||1,i.push({type:"TML",title:e.title||"",layer:n}),n}if("OpenStreetMap"===e.layerType)return n=t.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),i.push({type:"TL",title:e.title||e.id||"",layer:n}),n;if("WebTiledLayer"===e.layerType){var f=k(e.templateUrl);return n=t.tileLayer(f,{attribution:e.copyright}),document.getElementsByClassName("leaflet-tile-pane")[0].style.opacity=e.opacity||1,i.push({type:"TL",title:e.title||e.id||"",layer:n}),n}return n=t.featureGroup([]),console.log("Unsupported Layer: ",e),n}function k(e){var t=e;return t=t.replace(/\{level}/g,"{z}"),t=t.replace(/\{col}/g,"{x}"),t=t.replace(/\{row}/g,"{y}")}function P(e,t){return new K(e,t)}t="default"in t?t["default"]:t;var z="0.3.4",D=t.Class.extend({initialize:function(e,t){this._symbolJson=e,this.val=null,this._styles={},this._isDefault=!1,this._layerTransparency=1,t&&t.layerTransparency&&(this._layerTransparency=1-t.layerTransparency/100)},pixelValue:function(e){return 1.333*e},colorValue:function(e){return"rgb("+e[0]+","+e[1]+","+e[2]+")"},alphaValue:function(e){var t=e[3]/255;return t*this._layerTransparency},getSize:function(e,t){var i=e.properties,r=t.field,o=0,n=null;if(r){n=i[r];var s,a=t.minSize,l=t.maxSize,u=t.minDataValue,h=t.maxDataValue,p=t.normalizationField,y=i?parseFloat(i[p]):void 0;if(null===n||p&&(isNaN(y)||0===y))return null;isNaN(y)||(n/=y),null!==a&&null!==l&&null!==u&&null!==h&&(n<=u?o=a:n>=h?o=l:(s=(n-u)/(h-u),o=a+s*(l-a))),o=isNaN(o)?0:o}return o},getColor:function(e,t){if(!(e.properties&&t&&t.field&&t.stops))return null;var i,r,o,n,s=e.properties,a=s[t.field],l=t.normalizationField,u=s?parseFloat(s[l]):void 0;if(null===a||l&&(isNaN(u)||0===u))return null;if(isNaN(u)||(a/=u),a<=t.stops[0].value)return t.stops[0].color;var h=t.stops[t.stops.length-1];if(a>=h.value)return h.color;for(var p=0;p<t.stops.length;p++){var y=t.stops[p];if(y.value<=a)i=y.color,o=y.value;else if(y.value>a){r=y.color,n=y.value;break}}if(!isNaN(o)&&!isNaN(n)){var f=n-o;if(f>0){var c=(a-o)/f;if(c){var d=(n-a)/f;if(d){for(var _=[],g=0;g<4;g++)_[g]=Math.round(i[g]*d+r[g]*c);return _}return r}return i}}return null}}),T=t.Path.extend({initialize:function(e,i,r){t.setOptions(this,r),this._size=i,this._latlng=t.latLng(e),this._svgCanvasIncludes()},toGeoJSON:function(){return t.GeoJSON.getFeature(this,{type:"Point",coordinates:t.GeoJSON.latLngToCoords(this.getLatLng())})},_svgCanvasIncludes:function(){},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_update:function(){this._map&&this._updatePath()},_updatePath:function(){},setLatLng:function(e){return this._latlng=t.latLng(e),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setSize:function(e){return this._size=e,this.redraw()},getSize:function(){return this._size}}),C=T.extend({initialize:function(e,t,i){T.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateCrossMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateCrossMarker:function(e){var t=e._point,i=e._size/2,r=this._ctx;r.beginPath(),r.moveTo(t.x,t.y+i),r.lineTo(t.x,t.y-i),this._fillStroke(r,e),r.moveTo(t.x-i,t.y),r.lineTo(t.x+i,t.y),this._fillStroke(r,e)}}),t.SVG.include({_updateCrossMarker:function(e){var i=e._point,r=e._size/2;t.Browser.vml&&(i._round(),r=Math.round(r));var o="M"+i.x+","+(i.y+r)+"L"+i.x+","+(i.y-r)+"M"+(i.x-r)+","+i.y+"L"+(i.x+r)+","+i.y;this._setPath(e,o)}})}}),J=function(e,t,i){return new C(e,t,i)},V=T.extend({initialize:function(e,t,i){T.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateXMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateXMarker:function(e){var t=e._point,i=e._size/2,r=this._ctx;r.beginPath(),r.moveTo(t.x+i,t.y+i),r.lineTo(t.x-i,t.y-i),this._fillStroke(r,e)}}),t.SVG.include({_updateXMarker:function(e){var i=e._point,r=e._size/2;t.Browser.vml&&(i._round(),r=Math.round(r));var o="M"+(i.x+r)+","+(i.y+r)+"L"+(i.x-r)+","+(i.y-r)+"M"+(i.x-r)+","+(i.y+r)+"L"+(i.x+r)+","+(i.y-r);this._setPath(e,o)}})}}),F=function(e,t,i){return new V(e,t,i)},N=T.extend({options:{fill:!0},initialize:function(e,t,i){T.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateSquareMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateSquareMarker:function(e){var t=e._point,i=e._size/2,r=this._ctx;r.beginPath(),r.moveTo(t.x+i,t.y+i),r.lineTo(t.x-i,t.y+i),r.lineTo(t.x-i,t.y-i),r.lineTo(t.x+i,t.y-i),r.closePath(),this._fillStroke(r,e)}}),t.SVG.include({_updateSquareMarker:function(e){var i=e._point,r=e._size/2;t.Browser.vml&&(i._round(),r=Math.round(r));var o="M"+(i.x+r)+","+(i.y+r)+"L"+(i.x-r)+","+(i.y+r)+"L"+(i.x-r)+","+(i.y-r)+"L"+(i.x+r)+","+(i.y-r);o+=t.Browser.svg?"z":"x",this._setPath(e,o)}})}}),O=function(e,t,i){return new N(e,t,i)},G=T.extend({options:{fill:!0},initialize:function(e,t,i){T.prototype.initialize.call(this,e,t,i)},_updatePath:function(){this._renderer._updateDiamondMarker(this)},_svgCanvasIncludes:function(){t.Canvas.include({_updateDiamondMarker:function(e){var t=e._point,i=e._size/2,r=this._ctx;r.beginPath(),r.moveTo(t.x,t.y+i),r.lineTo(t.x-i,t.y),r.lineTo(t.x,t.y-i),r.lineTo(t.x+i,t.y),r.closePath(),this._fillStroke(r,e)}}),t.SVG.include({_updateDiamondMarker:function(e){var i=e._point,r=e._size/2;t.Browser.vml&&(i._round(),r=Math.round(r));var o="M"+i.x+","+(i.y+r)+"L"+(i.x-r)+","+i.y+"L"+i.x+","+(i.y-r)+"L"+(i.x+r)+","+i.y;o+=t.Browser.svg?"z":"x",this._setPath(e,o)}})}}),E=function(e,t,i){return new G(e,t,i)},j=D.extend({statics:{MARKERTYPES:["esriSMSCircle","esriSMSCross","esriSMSDiamond","esriSMSSquare","esriSMSX","esriPMS"]},initialize:function(e,t){if(D.prototype.initialize.call(this,e,t),t&&(this.serviceUrl=t.url),e)if("esriPMS"===e.type){var i=this.serviceUrl+"images/"+this._symbolJson.url;this._iconUrl=t&&t.token?i+"?token="+t.token:i,e.imageData&&(this._iconUrl="data:"+e.contentType+";base64,"+e.imageData),this._icons={},this.icon=this._createIcon(this._symbolJson)}else this._fillStyles()},_fillStyles:function(){this._symbolJson.outline&&this._symbolJson.size>0?(this._styles.stroke=!0,this._styles.weight=this.pixelValue(this._symbolJson.outline.width),this._styles.color=this.colorValue(this._symbolJson.outline.color),this._styles.opacity=this.alphaValue(this._symbolJson.outline.color)):this._styles.stroke=!1,this._symbolJson.color?(this._styles.fillColor=this.colorValue(this._symbolJson.color),this._styles.fillOpacity=this.alphaValue(this._symbolJson.color)):this._styles.fillOpacity=0,"esriSMSCircle"===this._symbolJson.style&&(this._styles.radius=this.pixelValue(this._symbolJson.size)/2)},_createIcon:function(e){var i=this.pixelValue(e.width),r=i;e.height&&(r=this.pixelValue(e.height));var o=i/2,n=r/2;e.xoffset&&(o+=this.pixelValue(e.xoffset)),e.yoffset&&(n+=this.pixelValue(e.yoffset));var s=t.icon({iconUrl:this._iconUrl,iconSize:[i,r],iconAnchor:[o,n]});return this._icons[e.width.toString()]=s,s},_getIcon:function(e){var t=this._icons[e.toString()];return t||(t=this._createIcon({width:e})),t},pointToLayer:function(e,i,r,o){var n=this._symbolJson.size||this._symbolJson.width;if(!this._isDefault){if(r.sizeInfo){var s=this.getSize(e,r.sizeInfo);s&&(n=s)}if(r.colorInfo){var a=this.getColor(e,r.colorInfo);a&&(this._styles.fillColor=this.colorValue(a),this._styles.fillOpacity=this.alphaValue(a))}}if("esriPMS"===this._symbolJson.type){var l=t.extend({},{icon:this._getIcon(n)},o);return t.marker(i,l)}switch(n=this.pixelValue(n),this._symbolJson.style){case"esriSMSSquare":return O(i,n,t.extend({},this._styles,o));case"esriSMSDiamond":return E(i,n,t.extend({},this._styles,o));case"esriSMSCross":return J(i,n,t.extend({},this._styles,o));case"esriSMSX":return F(i,n,t.extend({},this._styles,o))}return this._styles.radius=n/2,t.circleMarker(i,t.extend({},this._styles,o))}}),B=D.extend({statics:{LINETYPES:["esriSLSDash","esriSLSDot","esriSLSDashDotDot","esriSLSDashDot","esriSLSSolid"]},initialize:function(e,t){D.prototype.initialize.call(this,e,t),this._fillStyles()},_fillStyles:function(){if(this._styles.lineCap="butt",this._styles.lineJoin="miter",this._styles.fill=!1,this._styles.weight=0,!this._symbolJson)return this._styles;if(this._symbolJson.color&&(this._styles.color=this.colorValue(this._symbolJson.color),this._styles.opacity=this.alphaValue(this._symbolJson.color)),!isNaN(this._symbolJson.width)){this._styles.weight=this.pixelValue(this._symbolJson.width);var e=[];switch(this._symbolJson.style){case"esriSLSDash":e=[4,3];break;case"esriSLSDot":e=[1,3];break;case"esriSLSDashDot":e=[8,3,1,3];break;case"esriSLSDashDotDot":e=[8,3,1,3,1,3]}if(e.length>0){for(var t=0;t<e.length;t++)e[t]*=this._styles.weight;this._styles.dashArray=e.join(",")}}},style:function(e,t){if(!this._isDefault&&t){if(t.sizeInfo){var i=this.pixelValue(this.getSize(e,t.sizeInfo));i&&(this._styles.weight=i)}if(t.colorInfo){var r=this.getColor(e,t.colorInfo);r&&(this._styles.color=this.colorValue(r),this._styles.opacity=this.alphaValue(r))}}return this._styles}}),A=D.extend({statics:{POLYGONTYPES:["esriSFSSolid"]},initialize:function(e,t){D.prototype.initialize.call(this,e,t),e&&(this._lineStyles=f(e.outline,t).style(),this._fillStyles())},_fillStyles:function(){if(this._lineStyles)if(0===this._lineStyles.weight)this._styles.stroke=!1;else for(var e in this._lineStyles)this._styles[e]=this._lineStyles[e];this._symbolJson&&(this._symbolJson.color&&A.POLYGONTYPES.indexOf(this._symbolJson.style>=0)?(this._styles.fill=!0,this._styles.fillColor=this.colorValue(this._symbolJson.color),this._styles.fillOpacity=this.alphaValue(this._symbolJson.color)):(this._styles.fill=!1,this._styles.fillOpacity=0))},style:function(e,t){if(!this._isDefault&&t&&t.colorInfo){var i=this.getColor(e,t.colorInfo);i&&(this._styles.fillColor=this.colorValue(i),this._styles.fillOpacity=this.alphaValue(i))}return this._styles}}),q=t.Class.extend({options:{proportionalPolygon:!1,clickable:!0},initialize:function(e,i){this._rendererJson=e,this._pointSymbols=!1,this._symbols=[],this._visualVariables=this._parseVisualVariables(e.visualVariables),t.Util.setOptions(this,i)},_parseVisualVariables:function(e){var t={};if(e)for(var i=0;i<e.length;i++)t[e[i].type]=e[i];return t},_createDefaultSymbol:function(){this._rendererJson.defaultSymbol&&(this._defaultSymbol=this._newSymbol(this._rendererJson.defaultSymbol),this._defaultSymbol._isDefault=!0)},_newSymbol:function(e){return"esriSMS"===e.type||"esriPMS"===e.type?(this._pointSymbols=!0,y(e,this.options)):"esriSLS"===e.type?f(e,this.options):"esriSFS"===e.type?c(e,this.options):void 0},_getSymbol:function(){},attachStylesToLayer:function(e){this._pointSymbols?e.options.pointToLayer=t.Util.bind(this.pointToLayer,this):(e.options.style=t.Util.bind(this.style,this),e._originalStyle=e.options.style)},pointToLayer:function(e,i){var r=this._getSymbol(e);return r&&r.pointToLayer?r.pointToLayer(e,i,this._visualVariables,this.options):t.circleMarker(i,{radius:0,opacity:0})},style:function(e){var t;this.options.userDefinedStyle&&(t=this.options.userDefinedStyle(e));var i=this._getSymbol(e);return i?this.mergeStyles(i.style(e,this._visualVariables),t):this.mergeStyles({opacity:0,fillOpacity:0},t)},mergeStyles:function(e,t){var i,r={};for(i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);if(t)for(i in t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r}}),U=q.extend({initialize:function(e,t){q.prototype.initialize.call(this,e,t),this._field=this._rendererJson.field,this._rendererJson.normalizationType&&"esriNormalizeByField"===this._rendererJson.normalizationType&&(this._normalizationField=this._rendererJson.normalizationField),this._createSymbols()},_createSymbols:function(){var e,t=this._rendererJson.classBreakInfos;this._symbols=[];for(var i=t.length-1;i>=0;i--)e=this.options.proportionalPolygon&&this._rendererJson.backgroundFillSymbol?this._newSymbol(this._rendererJson.backgroundFillSymbol):this._newSymbol(t[i].symbol),e.val=t[i].classMaxValue,this._symbols.push(e);this._symbols.sort(function(e,t){return e.val>t.val?1:-1}),this._createDefaultSymbol(),this._maxValue=this._symbols[this._symbols.length-1].val},_getSymbol:function(e){var t=e.properties[this._field];if(this._normalizationField){var i=e.properties[this._normalizationField];if(isNaN(i)||0===i)return this._defaultSymbol;t/=i}if(t>this._maxValue)return this._defaultSymbol;for(var r=this._symbols[0],o=this._symbols.length-1;o>=0&&!(t>this._symbols[o].val);o--)r=this._symbols[o];return r}}),W=q.extend({initialize:function(e,t){q.prototype.initialize.call(this,e,t),this._field=this._rendererJson.field1,this._createSymbols()},_createSymbols:function(){for(var e,t=this._rendererJson.uniqueValueInfos,i=t.length-1;i>=0;i--)e=this._newSymbol(t[i].symbol),e.val=t[i].value,this._symbols.push(e);this._createDefaultSymbol()},_getSymbol:function(e){var t=e.properties[this._field];if(this._rendererJson.fieldDelimiter&&this._rendererJson.field2){var i=e.properties[this._rendererJson.field2];if(i){t+=this._rendererJson.fieldDelimiter+i;var r=e.properties[this._rendererJson.field3];r&&(t+=this._rendererJson.fieldDelimiter+r)}}for(var o=this._defaultSymbol,n=this._symbols.length-1;n>=0;n--)this._symbols[n].val==t&&(o=this._symbols[n]);return o}}),R=q.extend({initialize:function(e,t){q.prototype.initialize.call(this,e,t),this._createSymbol()},_createSymbol:function(){this._rendererJson.symbol&&this._symbols.push(this._newSymbol(this._rendererJson.symbol))},_getSymbol:function(){return this._symbols[0]}}),Y=t.GeoJSON.extend({options:{data:{},opacity:1,renderer:{}},initialize:function(e,i){t.setOptions(this,i),this.data=this.options.data,this.opacity=this.options.opacity,this.renderer=this.options.renderer,this._layers={};var r,o;if(e)for(r=0,o=e.length;r<o;r++)this.addLayer(e[r]);"string"==typeof this.data?this._getFeatureCollection(this.data):this._parseFeatureCollection(this.data)},_getFeatureCollection:function(e){var i="https://www.arcgis.com/sharing/rest/content/items/"+e+"/data";t.esri.request(i,{},function(e,t){e?console.log(e):this._parseFeatureCollection(t)},this)},_parseFeatureCollection:function(e){var t=e.layers[0].featureSet.features,i=e.layers[0].layerDefinition.geometryType,r=e.layers[0].layerDefinition.objectIdField;102100===e.layers[0].layerDefinition.extent.spatialReference.wkid&&(t=this._projTo4326(t,i));var o=this._featureCollectionToGeoJSON(t,r);this._setRenderers(e.layers[0].layerDefinition),console.log(o),this.addData(o)},_projTo4326:function(e,i){console.log("_project!");var r,o,n=[];for(r=0,o=e.length;r<o;r++){var s,a,l,u=e[r];if("esriGeometryPoint"===i)s=t.Projection.SphericalMercator.unproject(t.point(u.geometry.x,u.geometry.y)),u.geometry.x=s.lng,u.geometry.y=s.lat;else if("esriGeometryMultipoint"===i){var h;for(a=0,h=u.geometry.points.length;a<h;a++)s=t.Projection.SphericalMercator.unproject(t.point(u.geometry.points[a][0],u.geometry.points[a][1])),u.geometry.points[a][0]=s.lng,u.geometry.points[a][1]=s.lat}else if("esriGeometryPolyline"===i){var p,y;for(a=0,y=u.geometry.paths.length;a<y;a++)for(l=0,p=u.geometry.paths[a].length;l<p;l++)s=t.Projection.SphericalMercator.unproject(t.point(u.geometry.paths[a][l][0],u.geometry.paths[a][l][1])),u.geometry.paths[a][l][0]=s.lng,u.geometry.paths[a][l][1]=s.lat}else if("esriGeometryPolygon"===i){var f,c;for(a=0,c=u.geometry.rings.length;a<c;a++)for(l=0,f=u.geometry.rings[a].length;l<f;l++)s=t.Projection.SphericalMercator.unproject(t.point(u.geometry.rings[a][l][0],u.geometry.rings[a][l][1])),u.geometry.rings[a][l][0]=s.lng,u.geometry.rings[a][l][1]=s.lat}n.push(u)}return n},_featureCollectionToGeoJSON:function(e,t){var i,r,o={type:"FeatureCollection",features:[]},n=[];for(i=0,r=e.length;i<r;i++){var s=p(e[i],t);n.push(s)}return o.features=n,o},_checkForProportionalSymbols:function(e,t){if(this._hasProportionalSymbols=!1,"esriGeometryPolygon"===e&&(t.backgroundFillSymbol&&(this._hasProportionalSymbols=!0),t.classBreakInfos&&t.classBreakInfos.length)){var i=t.classBreakInfos[0].symbol;!i||"esriSMS"!==i.type&&"esriPMS"!==i.type||(this._hasProportionalSymbols=!0)}},_setRenderers:function(e){var t,i=this.renderer,r={};switch(this.options.pane&&(r.pane=this.options.pane),e.drawingInfo.transparency&&(r.layerTransparency=e.drawingInfo.transparency),this.options.style&&(r.userDefinedStyle=this.options.style),i.type){case"classBreaks":if(this._checkForProportionalSymbols(e.geometryType,i),this._hasProportionalSymbols){this._createPointLayer();var o=d(i,r);o.attachStylesToLayer(this._pointLayer),r.proportionalPolygon=!0}t=d(i,r);break;case"uniqueValue":console.log(i,r),t=_(i,r);break;default:t=g(i,r)}t.attachStylesToLayer(this)}}),X=t.DivIcon.extend({options:{iconSize:null,className:"esri-leaflet-webmap-labels",text:""},createIcon:function(e){var i=e&&"DIV"===e.tagName?e:document.createElement("div"),r=this.options;if(i.innerHTML='<div style="position: relative; left: -50%; text-shadow: 1px 1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff, -1px -1px 0px #fff;">'+r.text+"</div>",i.style.fontSize="1em",i.style.fontWeight="bold",i.style.textTransform="uppercase",i.style.textAlign="center",i.style.whiteSpace="nowrap",r.bgPos){var o=t.point(r.bgPos);i.style.backgroundPosition=-o.x+"px "+-o.y+"px"}return this._setIconStyles(i,"icon"),i}}),H=t.Marker.extend({options:{properties:{},labelingInfo:{},offset:[0,0]},initialize:function(e,i){t.setOptions(this,i),this._latlng=t.latLng(e);var r=this._createLabelText(this.options.properties,this.options.labelingInfo);this._setLabelIcon(r,this.options.offset)},_createLabelText:function(e,t){var i=/\[([^\]]*)\]/g,r=t[0].labelExpression;return r=r.replace(i,function(t){var r=i.exec(t);return e[r[1]]})},_setLabelIcon:function(e,t){var i=v({text:e,iconAnchor:t});this.setIcon(i)}}),K=t.Evented.extend({options:{map:{},token:null,server:"www.arcgis.com"},initialize:function(e,i){t.setOptions(this,i),this._map=this.options.map,this._token=this.options.token,this._server=this.options.server,this._webmapId=e,this._loaded=!1,this._metadataLoaded=!1,this.layers=[],this.title="",this.bookmarks=[],this.portalItem={},this.VERSION=z,this._loadWebMapMetaData(e),this._loadWebMap(e)},_loadWebMapMetaData:function(e){var i={},r=this._map,o=this,n="https://"+this._server+"/sharing/rest/content/items/"+e;this._token&&this._token.length>0&&(i.token=this._token),t.esri.request(n,i,function(e,t){e?console.log(e):(console.log("WebMap MetaData: ",t),o.portalItem=t,o.title=t.title,o._metadataLoaded=!0,o.fire("metadataLoad"),r.fitBounds([t.extent[0].reverse(),t.extent[1].reverse()]))})},_loadWebMap:function(e){var i=this._map,r=this.layers,o={},n="https://"+this._server+"/sharing/rest/content/items/"+e+"/data";this._token&&this._token.length>0&&(o.token=this._token),t.esri.request(n,o,function(e,o){e?console.log(e):(console.log("WebMap: ",o),o.baseMap.baseMapLayers.map(function(e){var t=w(e,r,i).addTo(i);void 0!==t&&e.visibility===!0&&t.addTo(i)}),o.operationalLayers.map(function(e,t){var o="esri-webmap-layer"+t;i.createPane(o);var n=w(e,r,i,o);void 0!==n&&e.visibility===!0&&n.addTo(i)}),void 0!==o.bookmarks&&o.bookmarks.length>0&&o.bookmarks.map(function(e){var i=t.Projection.SphericalMercator.unproject(t.point(e.extent.xmax,e.extent.ymax)),r=t.Projection.SphericalMercator.unproject(t.point(e.extent.xmin,e.extent.ymin)),o=t.latLngBounds(r,i);this.bookmarks.push({name:e.name,bounds:o})}.bind(this)),this._loaded=!0,this.fire("load"))}.bind(this))}});e.WebMap=K,e.webMap=P,e.operationalLayer=w,e.FeatureCollection=Y,e.featureCollection=m,e.LabelMarker=H,e.labelMarker=b,e.LabelIcon=X,e.labelIcon=v,e.createPopupContent=I,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=esri-leaflet-webmap.js.map