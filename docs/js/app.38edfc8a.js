(function(t){function a(a){for(var s,o,n=a[0],d=a[1],c=a[2],l=0,u=[];l<n.length;l++)o=n[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);p&&p(a);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var d=e[n];0!==i[d]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var p=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"13f9":function(t,a,e){},"27f8":function(t,a,e){"use strict";e("13f9")},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("1a62");var s=e("98c5"),i=(e("de6a"),e("9a63")),r=(e("0032"),e("e32c")),o=(e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("2b0e")),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},d=[],c={name:"App"},p=c,l=(e("5c0b"),e("2877")),u=Object(l["a"])(p,n,d,!1,null,null,null),v=u.exports,f=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio"},[e("div",{staticClass:"head"},[t._m(0),e("div",{attrs:{id:"stack","data-aos":"fade-up","data-aos-duration":"1500"}},[e("p",{attrs:{id:"heading"}},[t._v("TECH STACK")]),e("a-row",{attrs:{id:"category"}},[e("a-col",{attrs:{span:8}},[e("p",[t._v("LANGUAGES")])]),e("a-col",{attrs:{span:8}},[e("p",[t._v("FRAMEWORKS / LIBRARIES")])]),e("a-col",{attrs:{span:8}},[e("p",[t._v("TECHNOLOGIES")])])],1),e("a-row",{attrs:{id:"tech"}},[e("a-col",{attrs:{span:8}},[e("p",[t._v("JavaScript")]),e("p",[t._v("Python")]),e("p",[t._v("PHP")]),e("p",[t._v("Go")]),e("p",[t._v("Dart")]),e("p",[t._v("C#")]),e("p",[t._v("C / C++")]),e("p",[t._v("Java")]),e("p",[t._v("HTML & CSS")])]),e("a-col",{attrs:{span:8}},[e("p",[t._v("Vue")]),e("p",[t._v("React")]),e("p",[t._v("Express")]),e("p",[t._v("Hapi")]),e("p",[t._v("Nest")]),e("p",[t._v("Fastapi")]),e("p",[t._v("Flask")]),e("p",[t._v("Django")]),e("p",[t._v("React Native")]),e("p",[t._v("Flutter")]),e("p",[t._v("Ionic")]),e("p",[t._v("NativeScript")]),e("p",[t._v("PyTorch")]),e("p",[t._v("TensorFlow")]),e("p",[t._v("OpenCV")])]),e("a-col",{attrs:{span:8}},[e("p",[t._v("GraphQL")]),e("p",[t._v("MongoDB")]),e("p",[t._v("FaunaDB")]),e("p",[t._v("Redis")]),e("p",[t._v("PostgreSQL / MySQL / SQLite")]),e("p",[t._v("Neo4j")]),e("p",[t._v("Figma (Prototyping)")]),e("p",[t._v("Git (SCM)")]),e("p",[t._v("Unity (Game Dev)")]),e("p",[t._v("Blender (3D Modelling)")])])],1)],1)]),e("div",{staticClass:"background"},[e("p",{attrs:{id:"title","data-aos":"fade-right","data-aos-duration":"1000"}},[t._v("BACKGROUND")]),e("a-row",{attrs:{id:"section",gutter:36,"data-aos":"fade-up","data-aos-duration":"1500"}},[e("a-col",{attrs:{xs:24,lg:12,id:"topic"}},[e("p",{attrs:{id:"category"}},[t._v("EXPERIENCE")]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Bedlyft")]),e("p",{attrs:{id:"body"}},[t._v("Co-Founder, Developer (2020 - Present)")]),e("p",{attrs:{id:"subtitle"}},[t._v("Currently working on the core idea, business plan, and the technical aspects of the product/service.")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Freelancing")]),e("p",{attrs:{id:"body"}},[t._v("Software Developer (2016 - Present)")]),e("p",{attrs:{id:"subtitle"}},[t._v("Worked on several projects focusing on Internet-of-Things, robotics, web development, data processing, and scripting.")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("UltrAssist")]),e("p",{attrs:{id:"body"}},[t._v("Co-Founder, Chief Hacker (2019 - 2020)")]),e("p",{attrs:{id:"subtitle"}},[t._v("A tech startup which focused on smart driving solutions. Formerly in charge of the software development process and coordination with stakeholders.")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Commission on Population and Development")]),e("p",{attrs:{id:"body"}},[t._v("Research Collaborator (2019)")]),e("p",{attrs:{id:"subtitle"}},[t._v("Collaborated with a research focusing on mapping and visualizing data related to teenage pregnancy cases in the country.")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Arlekin Technologies")]),e("p",{attrs:{id:"body"}},[t._v("Intern - Bioinformatics (2018)")]),e("p",{attrs:{id:"subtitle"}},[t._v("Learned about genetic distance models, phylogenetic tree building methods, and tools for gene sequencing.")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("OpeniT Philippines")]),e("p",{attrs:{id:"body"}},[t._v("Intern - Software Quality Assurance (2018)")]),e("p",{attrs:{id:"subtitle"}},[t._v("Designed a PDF Crawler for detecting documentation errors in OpeniT's products.")])])]),e("a-col",{attrs:{xs:24,lg:12,id:"topic"}},[e("p",{attrs:{id:"category"}},[t._v("EDUCATION")]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Mapúa University")]),e("p",{attrs:{id:"body"}},[t._v("2018 - 2019")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Quezon Science High School")]),e("p",{attrs:{id:"body"}},[t._v("2012 - 2016; 2016 - 2018 (STEM - SHS)")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Catanauan Central School")]),e("p",{attrs:{id:"body"}},[t._v("2008 - 2012")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Malate Catholic School")]),e("p",{attrs:{id:"body"}},[t._v("2007 - 2008")])])])],1),e("a-row",{attrs:{gutter:36,"data-aos":"fade-up","data-aos-duration":"1500"}},[e("a-col",{attrs:{xs:24,lg:12,id:"topic"}},[e("p",{attrs:{id:"category"}},[t._v("ACHIEVEMENTS")]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("15"),e("sup",[t._v("th")]),t._v(" Smart Wireless Engineering Education Program")]),e("p",{attrs:{id:"body"}},[t._v("National Finalist")]),e("p",{attrs:{id:"body"}},[t._v("Smart Communications")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("The Cardinal Excellence Awards 2019")]),e("p",{attrs:{id:"body"}},[t._v("Mapúa University")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("NASA International Space Apps Challenge 2018")]),e("p",{attrs:{id:"body"}},[t._v("Global Nominee")]),e("p",{attrs:{id:"body"}},[t._v("NASA, Microsoft Philippines, Womensphere")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("StartupWeekend MNL Education 2019")]),e("p",{attrs:{id:"body"}},[t._v("1"),e("sup",[t._v("st")]),t._v(" Runner-Up")]),e("p",{attrs:{id:"body"}},[t._v("Techstars, Asian Institute of Management")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("StartupWeekend Philippines: COVID-19 Edition")]),e("p",{attrs:{id:"body"}},[t._v("National Finalist")]),e("p",{attrs:{id:"body"}},[t._v("Techstars")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("HackForGov: CERT-PH CTF Cyber Challenge")]),e("p",{attrs:{id:"body"}},[t._v("National Finalist")]),e("p",{attrs:{id:"body"}},[t._v("Dept. of Information and Communications Technology (DICT)")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Excellence in Science Research")]),e("p",{attrs:{id:"body"}},[t._v("Quezon Science High School")])])]),e("a-col",{attrs:{xs:24,lg:12,id:"topic"}},[e("p",{attrs:{id:"category"}},[t._v("AFFILIATIONS")]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("VR Philippines")]),e("p",{attrs:{id:"body"}},[t._v("Student Ambassador (2019 - 2020)")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("Junior Philippine Computer Society")]),e("p",{attrs:{id:"body"}},[t._v("Member, Project Committee (2018 - 2019)")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("QSHS - Department of Science and Technology")]),e("p",{attrs:{id:"body"}},[t._v("Department Head (2016 - 2018)")])]),e("p",{attrs:{id:"category"}},[t._v("CAPTURE THE FLAG")]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("ISSS UTCTF 2019")]),e("p",{attrs:{id:"body"}},[t._v("University of Texas at Austin - Information & Systems Security Society")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("MITRE STEM CTF Cyber Challenge 2019")]),e("p",{attrs:{id:"body"}},[t._v("MITRE Cyber Academy")])]),e("div",{attrs:{id:"item"}},[e("p",{attrs:{id:"head"}},[t._v("TAMU CTF 2019")]),e("p",{attrs:{id:"body"}},[t._v("Texas A&M University")])])])],1)],1),e("div",{staticClass:"projects"},[e("p",{attrs:{id:"projects-title","data-aos":"fade-right","data-aos-duration":"1000"}},[t._v("PROJECTS")]),e("p",{attrs:{id:"projects-category","data-aos":"fade-up","data-aos-duration":"1500"}},[t._v("Open Source (Public)")]),e("a-row",{attrs:{gutter:36,id:"projects-row","data-aos":"fade-up","data-aos-duration":"1500"}},[e("a-col",{attrs:{xs:24,lg:6}},[e("p",{attrs:{id:"title"}},[t._v("RFID Payment Module")]),e("p",{attrs:{id:"description"}},[t._v(" An affordable and lightweight Contactless Payment solution for Public Utility Jeepneys (PUJs). It uses the Raspberry Pi, reloadable RFID cards, MFRC522 RFID Module, and Smartphone GPS for automatic travel cost computation using the Haversine Formula. ")]),e("a",{attrs:{href:"https://github.com/starkfire/MFRC522-RPi3"}},[t._v("Source Code")])]),e("a-col",{attrs:{xs:24,lg:6}},[e("p",{attrs:{id:"title"}},[t._v("Mobile Tor Router")]),e("p",{attrs:{id:"description"}},[t._v(" Developed for a 2017 research paper - A plug-and-play solution for setting up an Onion WiFi hotspot which anonymizes all outbound traffic with Tor (no need for LAN clients to install Tor on their machine). ")]),e("a",{attrs:{href:"https://github.com/KEMOsabe456/Onion-Pi"}},[t._v("Source Code")])]),e("a-col",{attrs:{xs:24,lg:6}},[e("p",{attrs:{id:"title"}},[t._v("Classicrack")]),e("p",{attrs:{id:"description"}},[t._v(" A Python library for implementing and cracking classical ciphers without a secret key. ")]),e("a",{attrs:{href:"https://github.com/starkfire/classicrack"}},[t._v("Source Code (wip)")])]),e("a-col",{attrs:{xs:24,lg:6}},[e("p",{attrs:{id:"title"}},[t._v("FaunaDB ORM")]),e("p",{attrs:{id:"description"}},[t._v(" A JavaScript ORM for interacting with FaunaDB without FQL (Fauna Query Language). ")]),e("a",{attrs:{href:"https://github.com/starkfire/faun"}},[t._v("Source Code (wip)")])])],1),e("p",{attrs:{id:"projects-category","data-aos":"fade-up","data-aos-duration":"1500"}},[t._v("Closed Source (Private)")]),e("a-row",{attrs:{gutter:36,id:"projects-row","data-aos":"fade-up","data-aos-duration":"1500"}},[e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("Soteria")]),e("p",{attrs:{id:"description"}},[t._v(" Featured in "),e("a",{attrs:{href:"https://news.abs-cbn.com/focus/10/23/18/disaster-readiness-fisherfolk-apps-are-ph-entries-to-space-apps-challenge"}},[t._v("ABS-CBN")]),t._v(" and a Global Finalist during the "),e("a",{attrs:{href:"https://2018.spaceappschallenge.org/locations/makati-city-bonifacio-global-city/"}},[t._v("2018 NASA Space Apps Challenge")]),t._v(". Soteria is designed for wildfire detection, prediction, and analysis. It relies on aggregated data from IoT sensors and satellite data from NASA-FIRMS. ")])]),e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("Passcan")]),e("p",{attrs:{id:"description"}},[t._v(" An experimental travel pass alternative which also relies on QR Codes but with a different approach to tokenization. Passcan is tamper-proof and a privacy-preserving alternative to existing tools which supplement contact tracing. ")])]),e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("FishNet")]),e("p",{attrs:{id:"description"}},[t._v(" An application and a custom Raspberry Pi module designed as a better and more accessible alternative to fish finding equipments. It uses a custom-trained object detection model for fish classification and predicts their path and density in real-time. ")])])],1),e("a-row",{attrs:{gutter:36,id:"projects-row","data-aos":"fade-up","data-aos-duration":"1500"}},[e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("Optix")]),e("p",{attrs:{id:"description"}},[t._v(" Featured during the 2019 AngelHack in Makati City. Optix is a neural network for detecting and classifying eye cataracts (e.g. morgagnian, nuclear, etc.) from photographs. ")])]),e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("AI-Driven Traffic Light")]),e("p",{attrs:{id:"description"}},[t._v(" A traffic light which relies on a convolutional neural network (YOLOv3) for guiding itself based on pedestrian count and traffic density. Tested in Anyao, Catanauan, Quezon. ")])]),e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("QRPay")]),e("p",{attrs:{id:"description"}},[t._v(" A mobile app built with Ionic and an API for quick drive-thru payments. It is a secure QR Code Payment Solution built on top of the PayMongo API. ")])])],1),e("a-row",{attrs:{gutter:36,id:"projects-row","data-aos":"fade-up","data-aos-duration":"1500"}},[e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("Watchbird")]),e("p",{attrs:{id:"description"}},[t._v(" Featured during the 15"),e("sup",[t._v("th")]),t._v(" Smart SWEEP: Watchbird is an autonomous drone designed for disaster response and rescue operations. ")])]),e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("Fire Rescue Robot")]),e("p",{attrs:{id:"description"}},[t._v(" Featured during the 2016 QSHS Science Fair - a self-guided fire rescue robot using only an RC car, an ultrasonic sensor, and a hacked, on-board motor driver. ")])]),e("a-col",{attrs:{xs:24,lg:8}},[e("p",{attrs:{id:"title"}},[t._v("InceptionV3 MLaaS")]),e("p",{attrs:{id:"description"}},[t._v(" A Flask API for self-hosting the InceptionV3 image recognition model and classifying objects from uploaded images. ")])])],1)],1)])},h=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"basic","data-aos":"fade-left","data-aos-duration":"1000"}},[s("img",{attrs:{src:e("58a0")}}),s("div",{attrs:{id:"info","data-aos":"fade-left","data-aos-duration":"1500"}},[s("p",{attrs:{id:"name"}},[t._v("Pocholo L. Pantoja")]),s("p",{attrs:{id:"title"}},[t._v("Software Developer | Hobbyist")])])])}],j={name:"Portfolio"},m=j,g=(e("27f8"),Object(l["a"])(m,b,h,!1,null,"e4534cea",null)),_=g.exports;o["a"].use(f["a"]);var y=[{path:"/",name:"Resume",component:_,meta:{title:"Pocholo Pantoja | Resume"}}],S=new f["a"]({base:"",routes:y});S.beforeEach((function(t,a,e){document.title=t.meta.title,e()}));var C=S,w=e("f5af"),k=e.n(w);e("e829");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].use(i["a"]),o["a"].use(s["a"]),new o["a"]({created:function(){k.a.init()},router:C,render:function(t){return t(v)}}).$mount("#app")},"58a0":function(t,a,e){t.exports=e.p+"img/dev.1e0b86a1.jpg"},"5c0b":function(t,a,e){"use strict";e("9c0c")},"9c0c":function(t,a,e){}});
//# sourceMappingURL=app.38edfc8a.js.map