"use strict";(self["webpackChunkrobot_framework"]=self["webpackChunkrobot_framework"]||[]).push([[542],{3542:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var o=n(82482),r=n(66252),i=n(49963),s=n(3577),a=function(e){return(0,r.dD)("data-v-fa9aeccc"),e=e(),(0,r.Cn)(),e},c={class:"editor-container",ref:"editorContainer"},l={key:0,class:"dropdown relative mr-xsmall",ref:"fileDropdown"},u={key:0,class:"dropdown-content bg-grey-darkest absolute px-small pb-none pt-small"},d=["onClick"],m=["onClick"],f={key:0,class:"flex"},p={class:"pr-3xsmall weigh-black"},h={class:"flex"},g={class:"pr-3xsmall weigh-black"},v=["innerHTML"],w={class:"button-bar border-top-theme border-thin col-sm-12 flex height-fit p-xsmall"},b={key:0},k=a((function(){return(0,r._)("div",{class:"ml-2xsmall"}," log.html ",-1)})),x={key:0},j=a((function(){return(0,r._)("div",{class:"ml-2xsmall"}," report.html ",-1)})),y={class:"row"},C={class:"col-sm-12 flex end mb-xsmall"},S=["src"];function F(e,t,n,a,F,L){var P=(0,r.up)("chevron-icon"),_=(0,r.up)("copy-icon"),R=(0,r.up)("play-icon"),N=(0,r.up)("document-icon"),T=(0,r.up)("close-icon");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(i.uT,{name:"fade"},{default:(0,r.w5)((function(){var n;return[(0,r.wy)((0,r._)("div",null,[(0,r._)("div",{class:(0,s.C_)(["button-bar flex between bottom p-xsmall border-bottom-theme border-thin",(0,o.Z)({},"disabled",e.editorStatus.loading)])},[(0,r.Wm)(i.uT,{name:"opacity",mode:"out-in"},{default:(0,r.w5)((function(){var n,o;return[e.$store.state.isMobile||(null===(n=e.activeProject)||void 0===n?void 0:n.files.length)>2?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("button",{class:"bg-grey-darkest stroke small flex middle between",onClick:t[0]||(t[0]=function(t){return e.filesDropdownOpen=!e.filesDropdownOpen})},[(0,r.Wm)(i.uT,{name:"opacity",mode:"out-in"},{default:(0,r.w5)((function(){return[((0,r.wg)(),(0,r.iD)("div",{class:"mr-3xsmall ml-2xsmall",key:e.activeFileName},(0,s.zw)(e.activeFileName),1))]})),_:1}),(0,r.Wm)(P,{size:"1.5rem",color:"white",direction:e.filesDropdownOpen?"up":"down"},null,8,["direction"])]),(0,r.Wm)(i.uT,{name:"fade"},{default:(0,r.w5)((function(){var t;return[e.filesDropdownOpen?((0,r.wg)(),(0,r.iD)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(null===(t=e.activeProject)||void 0===t?void 0:t.files,(function(t){var n=t.fileName,o=t.hidden;return(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{key:n,class:(0,s.C_)(["block mb-xsmall color-white type-small",e.activeFileName===n?"disabled":""]),onClick:function(t){L.setActiveFile(n),e.filesDropdownOpen=!1}},(0,s.zw)(n),11,d)),[[i.F8,!o]])})),128))])):(0,r.kq)("",!0)]})),_:1})],512)):((0,r.wg)(),(0,r.iD)("div",{key:e.activeProjectName},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(null===(o=e.activeProject)||void 0===o?void 0:o.files,(function(t){var n=t.fileName,o=t.hidden;return(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{key:n,class:(0,s.C_)(["bg-grey-darkest stroke small m-2xsmall",e.activeFileName===n?"active":"primary"]),onClick:function(e){return L.setActiveFile(n)}},(0,s.zw)(n),11,m)),[[i.F8,!o]])})),128))]))]})),_:1}),e.editorStatus.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("button",{class:"stroke mr-xsmall small flex middle","aria-label":"Share code",onClick:t[1]||(t[1]=function(e){return L.copyProject()})},[(0,r.Wm)(_,{size:"1rem",color:"white"})]),(0,r._)("button",{class:(0,s.C_)(["theme flex middle",e.editorStatus.running?"disabled":"bling"]),onClick:t[2]||(t[2]=function(e){return L.runRobotTest()})},[(0,r._)("div",p,(0,s.zw)(e.editorStatus.running?"...":"Run"),1),(0,r.Wm)(R,{color:"black",size:"1.3rem"})],2)]))],2),(0,r._)("div",{id:"monaco-container",class:(0,s.C_)((n={},(0,o.Z)(n,"tab-change-animation",e.editorStatus.changingTab),(0,o.Z)(n,"disabled",e.editorStatus.loading),(0,o.Z)(n,"full-screen-editor",L.isFullEditor),n))},null,2)],512),[[i.F8,!(e.editorStatus.running||e.editorStatus.runCompleted)]])]})),_:1}),(0,r.Wm)(i.uT,{name:"fade"},{default:(0,r.w5)((function(){return[(0,r.wy)((0,r._)("div",{class:(0,s.C_)(["row between",L.isFullEditor?"px-medium pb-small":""])},[(0,r._)("div",null,[(0,r._)("div",{class:(0,s.C_)(["button-bar flex between bottom p-xsmall border-bottom-theme border-thin",(0,o.Z)({},"disabled",e.editorStatus.loading)])},[(0,r._)("h4",{class:(0,s.C_)([L.isFullEditor?"px-medium":"",e.$store.state.isMobile?"ml-2xsmall":"ml-medium"])}," Console output ",2),(0,r._)("div",h,[(0,r._)("button",{class:(0,s.C_)(["theme flex middle",e.editorStatus.running?"disabled":"bling"]),onClick:t[3]||(t[3]=function(){L.setActiveFile(e.activeFileName),e.editorStatus.runCompleted=!1})},[(0,r.Wm)(R,{color:"black",size:"1.3rem",style:{transform:"rotate(180deg)"}}),(0,r._)("div",g,(0,s.zw)(e.editorStatus.running?"...":"Back"),1)],2)])],2),(0,r._)("pre",{class:(0,s.C_)(["console p-medium",(0,o.Z)({},"running",e.editorStatus.running)]),ref:"console",id:"console"},[(0,r._)("code",{id:"output",innerHTML:e.output,class:"code-xsmall",ref:"output"},null,8,v),(0,r.Uk)("\n        ")],2)]),(0,r._)("div",w,[(0,r.Wm)(i.uT,{name:"opacity"},{default:(0,r.w5)((function(){return[e.logSrc?((0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("button",{class:"bg-grey-darkest stroke small flex mr-small middle",onClick:t[4]||(t[4]=function(t){return e.showLog=!0})},[(0,r.Wm)(N,{color:"white",size:"1.25rem"}),k])])):(0,r.kq)("",!0)]})),_:1}),(0,r.Wm)(i.uT,{name:"opacity"},{default:(0,r.w5)((function(){return[e.reportSrc?((0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("button",{class:"bg-grey-darkest stroke small flex middle",onClick:t[5]||(t[5]=function(t){return e.showReport=!0})},[(0,r.Wm)(N,{color:"white",size:"1.25rem"}),j])])):(0,r.kq)("",!0)]})),_:1})])],2),[[i.F8,e.editorStatus.running||e.editorStatus.runCompleted]])]})),_:1}),(0,r.Wm)(i.uT,{name:"opacity"},{default:(0,r.w5)((function(){return[e.showLog||e.showReport?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"log-modal",onClick:t[7]||(t[7]=function(t){e.showLog=!1,e.showReport=!1})},[(0,r._)("div",y,[(0,r._)("div",C,[(0,r._)("button",{onClick:t[6]||(t[6]=function(t){e.showLog=!1,e.showReport=!1}),class:"bg-white rounded"},[(0,r.Wm)(T,{size:"2rem",color:"black",class:"block"})])]),(0,r._)("iframe",{id:"report",src:e.showLog?e.logSrc:e.reportSrc},null,8,S)])])):(0,r.kq)("",!0)]})),_:1})],512)}var L=n(50124),P=n(48534),_=(n(68309),n(34553),n(5212),n(41539),n(57327),n(21249),n(69720),n(69826),n(38862),n(92222),n(89554),n(54747),n(52262),n(24506),n(26699),n(32023),n(78783),n(33948),n(60285),n(41637),n(32564),n(57658),n(74916),n(4723),n(30541),n(71838)),R=n(89491),N=n(96302),T=n(92039),D=n(33405),Z=n(52970),M=n(70863),E=n(90887),V=n(50303),W=n(68221),O={},z=null,A={},q={},I=[{id:"python",extensions:["py"]},{id:"robotframework",extensions:["robot","resource"]},{id:"html",extensions:["html"]},{id:"javascript",extensions:["js"]},{id:"json",extensions:["json"]},{id:"xml",extensions:["xml"]},{id:"yaml",extensions:["yml","yaml"]},{id:"markdown",extensions:["md"]}];const $={name:"Editor",components:{ChevronIcon:Z.Z,PlayIcon:M.Z,DocumentIcon:E.Z,CopyIcon:V.Z,CloseIcon:W.Z},data:function(){return{editorStatus:{loading:!0,running:!1,runCompleted:!1,projectModified:!1,changingTab:!1},projectsList:null,activeProjectName:null,activeProject:null,activeFileName:null,projectDropdownOpen:!1,filesDropdownOpen:!1,output:"",logSrc:null,reportSrc:null,showLog:!1,showReport:!1,copyMessage:null,RFVersions:[],selectedRFVersion:"",robotArgs:{},requirements:[],reinstallRF:!1,versionDropdownOpen:!1}},computed:{isFullEditor:function(){return"Code"===this.$route.name},nextProject:function(){var e=this;if(!this.projectsList||this.isFullEditor)return null;var t=this.projectsList.findIndex((function(t){var n=t.name;return n===e.activeProjectName}));return void 0===t||t===this.projectsList.length-1?null:this.projectsList[t+1]}},methods:{clickFn:function(e){this.$refs.fileDropdown&&!this.$refs.fileDropdown.contains(e.target)&&(this.filesDropdownOpen=!1)},copyProject:function(){var e=this;return(0,P.Z)((0,L.Z)().mark((function t(){var n,o;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProjectLink();case 2:if(n=t.sent,o=document.location.origin+"/embed/?codeProject="+n,console.log(o.length),!(o.length>7400)){t.next=12;break}return e.copyMessage={message:"Code to be shared is too long! ~".concat(o.length-7400," too many characters..."),success:!1},console.log(e.copyMessage.message),t.next=10,navigator.clipboard.writeText(o);case 10:t.next=16;break;case 12:return t.next=14,navigator.clipboard.writeText(o);case 14:e.copyMessage={message:"Link copied to clipboard!",success:!0},console.log(e.copyMessage.message);case 16:case"end":return t.stop()}}),t)})))()},getProjectLink:function(){var e=this;return(0,P.Z)((0,L.Z)().mark((function t(){var n,o,r,i,s;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.projectsList.some((function(t){var n=t.name;return n===e.activeProjectName})),o=Object.entries(A).map((function(t){var o=t[1].getValue(),r=e.activeProject.files.find((function(e){var n=e.fileName;return n===t[0]}));return r.content===o&&n?null:{fileName:t[0],content:t[1].getValue(),hidden:r.hidden}})).filter((function(e){return e})),r={name:e.activeProjectName,description:"",files:o.filter((function(e){var t=e.hidden;return!t})),derivedProject:n,robotVersion:e.selectedRFVersion,robotArgs:e.robotArgs,requirements:e.requirements},console.log(r),i=JSON.stringify(r),s=D.compressToEncodedURIComponent(i),console.log("Size of compressed Base 64 fileCatalog is: ".concat(s.length," (").concat(s.length/(i.length/100),"%)")),t.abrupt("return",s);case 8:case"end":return t.stop()}}),t)})))()},setProjectFromGitHub:function(e){var t=this;return(0,P.Z)((0,L.Z)().mark((function n(){var o;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,_.rQ)(e);case 2:o=n.sent,t.setProject(o,"Custom code");case 4:case"end":return n.stop()}}),n)})))()},setProjectsFromURL:function(e){var t=this;return(0,P.Z)((0,L.Z)().mark((function n(){var o,r,i;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=D.decompressFromEncodedURIComponent(e),r=JSON.parse(o),console.log(r),!r.derivedProject){n.next=13;break}return n.next=6,(0,_.sj)(t.projectsList.find((function(e){var t=e.name;return t===r.name})).dir);case 6:i=n.sent,i.files=i.files.map((function(e){var t;return{fileName:e.fileName,hidden:e.hidden,content:(null===(t=r.files.find((function(t){var n=t.fileName;return n===e.fileName})))||void 0===t?void 0:t.content)||e.content}})),i.robotVersion=r.robotVersion,console.log(i),t.setProject(i,i.name),n.next=14;break;case 13:t.setProject(r,"Custom code");case 14:case"end":return n.stop()}}),n)})))()},setProjectFromConfig:function(e,t,n,o){var r=this;return(0,P.Z)((0,L.Z)().mark((function i(){var s,a,c,l;return(0,L.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=e.name,a=e.dir,!r.editorStatus.projectModified||n||window.confirm("Your code modifications will be lost. Are you sure?")){i.next=3;break}return i.abrupt("return");case 3:return r.editorStatus.loading=!0,i.next=6,(0,_.sj)(a);case 6:if(c=i.sent,r.setProject(c,s,t),r.activeProjectName&&!o){i.next=10;break}return i.abrupt("return");case 10:l=r.isFullEditor?"".concat(window.location.href.split("?")[0],"?example=").concat(r.activeProjectName):"".concat(window.location.href.split("?")[0].split("#")[0],"?tab=0&example=").concat(r.activeProjectName,"#getting-started"),history.replaceState(null,null,l);case 12:case"end":return i.stop()}}),i)})))()},setProject:function(e,t,n){this.editorStatus.runCompleted=!1,A={},q={},e.files.forEach((function(e){var t,n=e.fileName,o=e.content,r=n.split(".").at(-1),i=null===(t=I.find((function(e){var t=e.extensions;return t.includes(r)})))||void 0===t?void 0:t.id,s=T.editor.createModel(o,i);s.name=n,s.updateOptions({tabSize:4}),A[n]=s})),this.activeProjectName=t,this.activeProject=e,e.robotVersion&&(this.selectedRFVersion=e.robotVersion),e.robotArgs&&(this.robotArgs=e.robotArgs),e.requirements&&(this.requirements=e.requirements);var o=e.files.filter((function(e){var t=e.hidden;return!t}));this.setActiveFile(n||o[0].fileName),this.editorStatus.projectModified=!1,this.copyMessage=null,this.output="",this.logSrc=null,this.reportSrc=null,this.editorStatus.loading=!1},resetProject:function(){this.reinstallRF=!0;var e=this.projectsList,t=new URL(document.location).searchParams;if(t.get("codeProject"))this.setProjectsFromURL(t.get("codeProject"));else if(t.get("code-gh-url"))this.setProjectFromGitHub(t.get("code-gh-url"));else if(t.get("example")){var n=e.find((function(e){var n=e.name;return n===t.get("example")}));this.setProjectFromConfig(n)}else this.setProjectFromConfig(e[0],null,null,!0)},setActiveFile:function(e){var t=this;q[this.activeFileName]=O.saveViewState(),this.activeFileName=e,this.editorStatus.changingTab=!0,setTimeout((function(){O.setModel(A[e]),e in q&&O.restoreViewState(q[e]),O.getModel().onDidChangeContent((function(e){t.editorStatus.projectModified=!0,t.copyMessage=null}))}),150),setTimeout((function(){t.editorStatus.changingTab=!1}),300)},runRobotTest:function(){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.plausible("Run code",{props:{projectName:"".concat(this.activeProjectName).concat(this.editorStatus.projectModified?" (modified)":"")}}),this.logSrc=null,this.reportSrc=null,this.output=" ",this.editorStatus.runCompleted=!1,this.$nextTick((function(){var n=Object.entries(A).map((function(e){return{fileName:e[0],content:e[1].getValue()}}));e.editorStatus.running=!0;var o=e.reinstallRF;setTimeout((function(){(0,R.s)(n,o,t,e.selectedRFVersion,e.robotArgs,e.requirements)}),0),e.reinstallRF=!1}))}},watch:{showLog:function(){this.showLog?document.body.style.overflow="hidden":document.body.style.overflow="visible"},showReport:function(){this.showReport?document.body.style.overflow="hidden":document.body.style.overflow="visible"},selectedRFVersion:function(){console.log(this.selectedRFVersion),this.reinstallRF=!0}},mounted:function(){var e=this,t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"rf-dark":"rf-light";O=T.editor.create(document.getElementById("monaco-container"),{language:"robotframework",theme:t,wordWrap:"off",automaticLayout:!0,minimap:{enabled:this.$store.state.isDesktop,showSlider:"always"},scrollbar:{vertical:"hidden",alwaysConsumeMouseWheel:!1},mouseWheelZoom:!0,scrollBeyondLastLine:!1,model:null,fontSize:14}),O.addCommand(T.KeyCode.Tab,(function(){O.trigger("keyboard","type",{text:"    "})}),"editorTextFocus && !editorHasSelection && !inSnippetMode && !suggestWidgetVisible"),O.addAction({id:"run_robot",label:"Run Suite in Robot",keybindings:[T.KeyMod.Shift|T.KeyCode.Enter],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:0,run:function(t){e.runRobotTest()}});var n=O.addCommand(0,(function(t,n){e.runRobotTest(!1,n)}),""),o=O.addCommand(0,(function(t,n){e.resetProject()}),"");z=T.languages.registerCodeLensProvider("robotframework",{provideCodeLenses:function(e,t){function r(e){return{range:{startLineNumber:e.nr,startColumn:1,endLineNumber:e.nr+1,endColumn:e.name.length},command:{id:n,title:"Run Test",tooltip:"Run: ".concat(e.name),arguments:[e.name]}}}var i=(0,N.c)(e),s=i.map((function(e){return r(e)}));return s.push({range:{startLineNumber:1,startColumn:1,endLineNumber:2,endColumn:1},command:{id:n,title:"Run Test Suite",tooltip:"Run Full Test Suite",arguments:[]}}),s.push({range:{startLineNumber:1,startColumn:2,endLineNumber:2,endColumn:2},command:{id:o,title:"Reset Test Suite",tooltip:"Run Full Test Suite",arguments:[]}}),{lenses:s,dispose:function(){}}},resolveCodeLens:function(e,t,n){return t}}),window.addEventListener("writeOutput",(function(t){var n=t.text;e.output+=n})),window.addEventListener("clearOutput",(function(){e.output=""})),window.addEventListener("writeLog",(function(t){var n=t.src;e.logSrc=n})),window.addEventListener("writeReport",(function(t){var n=t.src;e.reportSrc=n})),window.addEventListener("finished",(function(t){t.src;e.editorStatus.running=!1,e.editorStatus.runCompleted=!0,e.$nextTick((function(){e.$refs.console.scrollTop=e.$refs.console.scrollHeight}))})),window.addEventListener("keydown",(function(t){var n=t.key;"Escape"===n&&(e.showLog=!1,e.showReport=!1)})),window.addEventListener("click",this.clickFn),window.addEventListener("addLibdoc",(function(e){var t=e.libdoc;(0,N.W)(JSON.parse(t))})),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){T.editor.setTheme(e.matches?"rf-dark":"rf-light")})),(0,_.sE)().then((function(t){e.projectsList=t;var n=new URL(document.location).searchParams;if(n.get("codeProject"))e.setProjectsFromURL(n.get("codeProject"));else if(n.get("code-gh-url"))e.setProjectFromGitHub(n.get("code-gh-url"));else if(n.get("example")){var o=t.find((function(e){var t=e.name;return t===n.get("example")}));e.setProjectFromConfig(o)}else e.setProjectFromConfig(t[0],null,null,!0)})),(0,_.jf)().then((function(t){e.RFVersions=t.filter((function(e){return e.match(/^(3\.[12][\d.]*|[4-9][\d.]*)$/)})),e.selectedRFVersion=e.RFVersions.at(0),e.RFVersions[0]!==t[0]&&e.RFVersions.unshift(t[0])}))},beforeUnmount:function(){z&&z.dispose(),window.removeEventListener("click",this.clickFn)}};var H=n(83744);const U=(0,H.Z)($,[["render",F],["__scopeId","data-v-fa9aeccc"]]),K=U}}]);