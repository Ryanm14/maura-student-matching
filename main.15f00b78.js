parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.slice(n?t.indexOf("\n")+1:0).split("\n").map(function(t){return t.split(e)})};function a(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),i=[t[n],t[e]];t[e]=i[0],t[n]=i[1]}return t}var s=function(){function e(n,i,a,s){t(this,e),this.name=n.trim(),this.min=i,this.max=a,this.ideal=s,this.students=[]}return n(e,[{key:"add_student",value:function(t){this.students.push(t)}},{key:"is_full",value:function(){return this.students.length>=this.max}},{key:"is_at_less_than_ideal",value:function(){return this.students.length<this.ideal}},{key:"list_students_with_ranking",value:function(){var t=this,e=[];return this.students.forEach(function(n){e.push([n.username,n.ranking_for_site(t.name)])}),e}}]),e}(),r=function(){function e(n,i,a,s,r){t(this,e),this.username=n,this.firstName=i,this.lastName=a,this.siteRating=this.getSiteRatings(s,r)}return n(e,[{key:"getSiteRatings",value:function(t,e){for(var n=[],i=0;i<t.length;i++){var a=t[i];if(a){var s=parseInt(e[i]);isNaN(s)&&(s=999),n.push([a,s])}}return n.sort(function(t,e){return t[1]-e[1]})}},{key:"ranking_for_site",value:function(t){for(var e=0;e<this.siteRating.length;e++){var n=this.siteRating[e],i=n[0],a=n[1];if(i===t)return a}return"-1"}}]),e}(),u=function(){function e(n,i){var a=this;t(this,e),this.studentList=n,this.siteList=i,this.siteNameToSite={},this.siteList.forEach(function(t){a.siteNameToSite[t.name]=t}),this.details={random:0}}return n(e,[{key:"match",value:function(){a(this.studentList);for(var t=[],e=0;e<this.studentList.length;e++){for(var n=this.studentList[e],i=n.siteRating,s=!1,r=0;r<i.length;r++){var u=i[r],o=u[0];u[1];if(o){var h=this.siteNameToSite[o];if(!h.is_full()){h.add_student(n),s=!0;break}}}s||t.push(n)}for(var c=0;c<t.length;c++)for(var d=0;d<this.siteList.length;d++){var l=t[c],f=this.siteList[d];if(!f.is_full()){f.add_student(l);break}}this.getSummary()}},{key:"getSummary",value:function(){var t=this,e=0;this.details={random:0},this.siteList.forEach(function(n){n.list_students_with_ranking().forEach(function(n){n[0];var i=n[1];e+=1,"-1"===i?i="random":999===i&&(i="random"),i in t.details?t.details[i]+=1:t.details[i]=1})});var n="",i=[];for(var a in this.details)"random"!==a&&i.push(parseInt(a));i.sort(function(t,e){return t-e}),i.forEach(function(e){n+="% of Students with Ranking ".concat(e,": ").concat((t.details[e]/t.studentList.length*100).toFixed(2)," %\n")}),n+="% of Students with Random Pick: ".concat((this.details.random/this.studentList.length*100).toFixed(2)," %\n"),n+="Total students matched: ".concat(e,"\n");var s=0;this.siteList.forEach(function(t){t.students.length<t.min&&(s+=1)}),n+="Number of Sites with less than min: ".concat(s,"\n");var r=0;return this.siteList.forEach(function(t){t.students.length!==t.ideal&&(r+=1)}),n+="Number of Sites not at ideal: ".concat(r,"\n")}},{key:"getTopFive",value:function(){for(var t=0,e=1;e<6;e++)t+=this.details[e];return this.siteList.forEach(function(e){e.students.length<e.min&&(t=0)}),t}},{key:"getDownloadRowsStudents",value:function(){var t=[["Student","Site","Student Ranking"]];return this.siteList.forEach(function(e){e.list_students_with_ranking().forEach(function(n){var i=n[0],a=n[1];t.push([i,e.name,a+""])})}),t}},{key:"getDownloadRowsSites",value:function(){var t=[["Site","Number of Students","Min","Max","Ideal"]];return this.siteList.forEach(function(e){t.push([e.name,e.students.length,e.min,e.max,e.ideal])}),t}}]),e}(),o=function(){function e(){t(this,e),this.rawStudentData=null,this.rawSiteData=null}return n(e,[{key:"parseStudentData",value:function(){for(var t=[],e=[],n=0;n<this.rawStudentData.length;n++){var i=this.rawStudentData[n];if(0===n)t=i;else{if(!i[0])break;e.push(i)}}var a=[];return t.slice(4).forEach(function(t){a.push(t.trim())}),this.formatStudents(e,a)}},{key:"formatStudents",value:function(t,e){var n=[];return t.forEach(function(t){var i=t[1],a=t[2],s=t[3],u=t.slice(4),o=new r(i,a,s,e,u);n.push(o)}),n}},{key:"parseSiteData",value:function(){for(var t=[],e=0;e<this.rawSiteData.length;e++){var n=this.rawSiteData[e];if(e>0){if(!n[0])break;t.push(n)}}return this.formatSiteList(t)}},{key:"formatSiteList",value:function(t){var e=[];return t.forEach(function(t){var n=t[0],i=parseInt(t[1]),a=parseInt(t[2]),r=parseInt(t[3]),u=new s(n,i,a,r);e.push(u)}),e}},{key:"run",value:function(){var t=this.parseStudentData(),e=this.parseSiteData(),n=0;this.best_match=null;for(var i=0;i<1e4;i++){var a=new u(t,e);a.match();var s=a.getTopFive();s>n&&(n=s,this.best_match=a)}var r="";r+="Total Number of Sites: ".concat(this.best_match.siteList.length,"\n"),r+="Total Number of Students: ".concat(this.best_match.studentList.length,"\n"),r+="Match Details: \n",r+=this.best_match.getSummary(),document.getElementById("output").textContent=r}},{key:"downloadStudentMatching",value:function(){var t="data:text/csv;charset=utf-8,"+this.best_match.getDownloadRowsStudents().map(function(t){return t.join(",")}).join("\n"),e=encodeURI(t),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","output-student-matching.csv"),document.body.appendChild(n),n.click()}},{key:"downloadSiteDetails",value:function(){var t="data:text/csv;charset=utf-8,"+this.best_match.getDownloadRowsSites().map(function(t){return t.join(",")}).join("\n"),e=encodeURI(t),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","output-site-details.csv"),document.body.appendChild(n),n.click()}}]),e}(),h=new o;function c(t,e){var n=t.target.files[0];if(n){var a=new FileReader;a.onload=function(t){var n=t.target.result,a=i(n);e(a)},a.readAsText(n)}e(null)}document.getElementById("student-input").addEventListener("change",function(t){c(t,function(t){h.rawStudentData=t})}),document.getElementById("sites-input").addEventListener("change",function(t){c(t,function(t){h.rawSiteData=t})});var d=document.getElementById("download-button-students");d.hidden=!0,d.onclick=function(){h.downloadStudentMatching()};var l=document.getElementById("download-button-sites");l.hidden=!0,l.onclick=function(){h.downloadSiteDetails()};var f=function(){h.rawSiteData&&h.rawStudentData?(document.getElementById("output").innerText="LOADING!",setTimeout(function(){h.run(),d.hidden=!1,l.hidden=!1},0)):alert("Both files were not selected!")};document.getElementById("generate-button").onclick=f;
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.15f00b78.js.map