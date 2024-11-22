(self["webpackChunkcmp"]=self["webpackChunkcmp"]||[]).push([[184],{51122:function(t,e,a){"use strict";a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.title,visible:t.v,"append-to-body":!0,width:"840px",top:"10vh"},on:{"update:visible":function(e){t.v=e}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":t.$t("batchUpload.uploading")}},[e("p",{staticClass:"download-tip"},[t._v(" "+t._s(t.$t("batchUpload.please"))),e("a",{staticClass:"cor-blue",attrs:{target:"_self"},on:{click:t.downloadTpl}},[t._v(t._s(t.$t("batchUpload.downloadTpl")))]),t._v(t._s(t.$t("batchUpload.please2"))+" ")]),e("div",{staticClass:"tip"},[e("i",{staticClass:"icon-zhuyi",staticStyle:{color:"orange"}}),e("p",{staticClass:"upload-tip"},[t._v(" "+t._s(t.$t("batchUpload.warmTip"))),e("br"),t._t("tip")],2)]),e("div",{staticClass:"upload-box"},[e("el-upload",{ref:"upload",staticClass:"upload-wrap",attrs:{drag:"",accept:".xls,.xlsx",action:t.action,data:t.extraParam,"show-file-list":!0,multiple:!1,"auto-upload":!1,"file-list":t.fileList,"on-change":t.handlerChange,"on-remove":t.handleRemove,"on-progress":t.handlerProgress,"on-success":t.handlerSuccess,"on-error":t.handlerError,"before-upload":t.beforeUpload}},[e("div",{staticClass:"upload_file_choose"},[e("i",{staticClass:"el-icon-upload cor-blue"}),e("div",{staticClass:"upload_file_choose_text"},[t._v(" "+t._s(t.$t("batchUpload.drag1"))),e("em",[t._v(t._s(t.$t("batchUpload.drag2")))]),e("br"),e("span",{staticClass:"support-tip"},[t._v(t._s(t.supportFormat))])])])])],1),e("div",{staticClass:"download-template"},[e("el-button",{attrs:{type:"text",icon:"icon-xiazai1"},on:{click:t.downloadTpl}},[t._v(t._s(t.$t("batchUpload.downloadTpl"))+" ")])],1)]),e("span",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary",disabled:t.disableSubmit},on:{click:t.submit}},[t._v(t._s(t.$t("batchUpload.submit")))]),e("el-button",{on:{click:function(e){t.v=!1}}},[t._v(t._s(t.$t("common.cancel")))])],1)])},r=[],i=(a(70560),{components:{},props:{visible:{type:Boolean,default:!1},queryId:{type:[String,Number],default:""},downloadUrl:{type:String,default:"/batch/downloadTpl/"},uploadUrl:{type:String,default:"/batch/import"},maxFileSize:{type:Number,default:10485760},title:{type:String,default:""},param:{type:Object,default:()=>{}},isXls:{type:Boolean,default:!1},isRuleBatch:{type:Boolean,default:!1}},data(){return{uploaded:!1,loading:!1,fileName:"",fileSize:0,fileList:[]}},computed:{v:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t),t||(this.fileList=[])}},supportFormat(){return this.$t("batchUpload.drag3")+" "+(this.isXls?".xls":".xlsx")},action(){return"/api"+this.uploadUrl},isSpecial(){return"/simCard/upload"===this.uploadUrl||"/order/upload"===this.uploadUrl},disableSubmit(){return!this.fileName||this.loading},extraParam(){return this.isSpecial||this.isRuleBatch?{templateId:this.queryId,...this.param}:{queryId:this.queryId,...this.param}},showPreview(){return!this.uploaded&&this.fileName},fileSizeFormat(){return this.fileSize>1048576?(this.fileSize/1024/1024).toFixed(2)+"MB":(this.fileSize/1024).toFixed(2)+"KB"}},methods:{downloadTpl(){window.open(this.downloadUrl+this.queryId,"_self")},handlerProgress(t,e,a){this.loading=!0,this.fileName=e.name,this.fileSize=e.size},handlerChange(t,e){console.log("handlerChange",t,e),e.length>1&&e.splice(0,1),this.uploaded||(this.fileName=t.name,this.fileSize=t.size)},handleRemove(t,e){this.resetUpload()},handlerSuccess(t,e,a){if(t.data&&t.data.length>0)return void this.errAlert(t.data);if("0"!=t.code&&t.message)return void this.errAlert(t.message);this.uploaded=!0;const s=setTimeout((()=>{this.loading=!1,clearTimeout(s)}),200);if(this.isSpecial)this.$message.success(this.$t("batchUpload.subtmitSuccess")),this.uploaded=!1,this.v=!1;else{const t=this,e=this.$createElement;this.$msgbox({title:this.$t("batchUpload.subtmitSuccess"),type:"success",center:!0,message:e("p",{class:"fs12"},[this.$t(this.isRuleBatch?"batchUpload.task2":"batchUpload.task"),e("a",{class:"cor-blue",on:{click:t.viewProgress}},this.$t("batchUpload.process"))]),showCancelButton:!1,confirmButtonText:this.$t("batchUpload.know")}).then((()=>{this.uploaded=!1,this.v=!1})).catch((()=>{}))}},resetUpload(){this.$refs.upload.clearFiles(),this.uploaded=!1,this.fileName="",this.fileSize=0},showErrMsg(t){this.$msgbox({title:this.$t("batchUpload.subtmitFail"),type:"warning",center:!0,message:t,showCancelButton:!1,confirmButtonText:this.$t("batchUpload.know")})},handlerError(t){const e=setTimeout((()=>{this.loading=!1,clearTimeout(e)}),200);let a=this.$t("batchUpload.systemError");if(t.message){const e=JSON.parse(t.message);e&&e.message&&(a+="，"+e.message)}this.showErrMsg(a),this.$nextTick(this.resetUpload)},errAlert(t){this.$nextTick(this.resetUpload);const e=setTimeout((()=>{this.loading=!1,clearTimeout(e)}),200),a=this.$createElement,s=a("div",{class:"error-msg-box"},[...function(){const e=[];return t.forEach((t=>{e.push(a("p",{class:"cor-red"},t))})),e}()]);this.showErrMsg(s)},toReload(){this.resetUpload()},submit(){this.$refs.upload.submit()},beforeUpload(t){if(this.fileSize>this.maxFileSize){let t="";return t=this.maxFileSize>1048576?this.maxFileSize/1024/1024+"MB":this.maxFileSize/1024+"KB",this.$message.error(this.$t("batchUpload.fileSize")+t),!1}return"application/vnd.ms-excel"===t.type||"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===t.type||(this.$message.error(this.$t("batchUpload.fileType")),!1)},viewProgress(){this.uploaded=!1,this.v=!1,this.$msgbox.close(),this.isRuleBatch?this.$router.push({path:"/order/orderBatch",query:{activeTab:"2"}}):this.$router.push("/common/download")}}}),l=i,o=a(43736),n=(0,o.Z)(l,s,r,!1,null,"79240383",null),d=n.exports},89184:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return O}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container-top"},[e("div",{staticClass:"seperator-line"}),e("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:t.$t("order.batchTask"),name:"1"}},[e("BatchTask")],1),e("el-tab-pane",{attrs:{label:t.$t("order.batchTaskQuery"),name:"2"}},[e("BatchTaskQuery")],1)],1)],1)])},r=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container-form"},t._l(t.types,(function(a){return e("div",{key:a.batchType},[e("ct-section-title",{attrs:{title:a.batchTypeName}}),e("div",{staticClass:"summary"},t._l(a.batTmpls,(function(a){return e("BatchTaskItem",{key:a.tmplId,attrs:{item:a},on:{upload:t.upload}})})),1)],1)})),0),e("BatchUpload",{attrs:{visible:t.showUpload,"query-id":t.queryId,"is-xls":!0,"download-url":"/order/download/","upload-url":"/order/upload","max-file-size":10485760,title:t.tmplName},on:{"update:visible":function(e){t.showUpload=e}},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v(" 1、"+t._s(t.$t("batchUpload.uploadTip1xls"))),e("br"),t._v(" 2、"+t._s(t.$t("batchUpload.uploadTip2"))),e("br"),t._v(" 3、"+t._s(t.$t("batchUpload.uploadTip3"))),e("br"),t._v(" 4、"+t._s(t.$t("batchUpload.uploadTipRule"))),e("br"),t._v(" 5、"+t._s(t.$t("batchUpload.uploadTipSimMag",{maxNum:t.maxNum}))),e("br"),t._v(" 6、"+t._s(t.$t("batchUpload.uploadTip5"))+" ")]},proxy:!0}])})],1)},l=[],o=a(45101),n=a(51122),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"summary-item",style:t.itemStyle(t.item.field1),on:{click:function(e){return t.$emit("upload",t.item)}}},[e("div",{staticClass:"summary-item-title"},[t._v(t._s(t.item.tmplName))]),e("div",{staticClass:"summary-item-des"},[t._v(" "+t._s(t.item.tmplDesc)+" ")])])},c=[],p={props:{item:{type:Object,default:()=>{}}},data(){return{}},mounted(){},methods:{itemStyle(t){const e=a(14872)("./"+t);return{backgroundImage:`url(${e})`}}}},u=p,h=a(43736),m=(0,h.Z)(u,d,c,!1,null,"77cafd17",null),b=m.exports,g={components:{BatchUpload:n.Z,BatchTaskItem:b},data(){return{showUpload:!1,powerSearch:!1,types:[],queryId:"",tmplName:"",tmplCode:"",maxNum:"_"}},mounted(){this.qryBatchTypeList()},methods:{upload(t){this.showUpload=!0,this.queryId=t.tmplId,this.tmplName=t.tmplName,this.tmplCode=t.tmplCode,this.getParamValue()},async getParamValue(){this.maxNum="_",this.maxNum=await(0,o.Z)("/user/getParamValue",{paramCode:this.tmplCode},{method:"get"})??"_"},async qryBatchTypeList(){this.types=await(0,o.Z)("/order/qryBatchTypeList",{},{method:"get"}),this.types=this.types.filter((t=>t.batTmpls&&t.batTmpls.length>0)),this.types.forEach((t=>t.batTmpls=t.batTmpls.filter((t=>1===t.displayFlag))))}}},f=g,v=(0,h.Z)(f,i,l,!1,null,"5317e741",null),y=v.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container-form"},[e("el-form",{ref:"qryParamRef",attrs:{model:t.qryParam,size:"small"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("order.createDate"),prop:"startDate"}},[e("ct-date-picker",{attrs:{begin:t.qryParam.startDate,end:t.qryParam.endDate},on:{"update:begin":function(e){return t.$set(t.qryParam,"startDate",e)},"update:end":function(e){return t.$set(t.qryParam,"endDate",e)}}})],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("order.busType"),prop:"batchType"}},[e("ct-async-select",{attrs:{multiple:"","collapse-tags":"",placeholder:t.selectPh("order.busType"),url:"/order/qryBatTemplateByCond",method:"post","label-key":"tmplName","value-key":"tmplId"},model:{value:t.qryParam.batchTypes,callback:function(e){t.$set(t.qryParam,"batchTypes",e)},expression:"qryParam.batchTypes"}})],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("order.batchStatus"),prop:"batchStatus"}},[e("ct-select",{attrs:{placeholder:t.selectPh("order.batchStatus"),options:t.batchTaskStatus},model:{value:t.qryParam.batchStatus,callback:function(e){t.$set(t.qryParam,"batchStatus",e)},expression:"qryParam.batchStatus"}})],1)],1),e("el-col",{attrs:{span:9}},[e("el-form-item",{attrs:{"label-width":"0"}},[e("div",{staticClass:"search-button-group"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.qryBatchTaskList(!1)}}},[t._v(t._s(t.$t("common.query")))]),e("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:t.reset}},[t._v(t._s(t.$t("common.reset")))])],1)])],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{height:"100%",width:"100%",data:t.tableData,border:!0}},[e("el-table-column",{attrs:{prop:"batchTaskId",label:t.$t("order.batchTaskId"),"show-overflow-tooltip":"","min-width":"70px"}}),e("el-table-column",{attrs:{prop:"batchTemplateId",label:t.$t("order.busType"),"column-key":"batchTypes","min-width":"70px","show-overflow-tooltip":"",formatter:t.rowFormatter}}),e("el-table-column",{attrs:{prop:"statusName",label:t.$t("order.batchStatus"),"column-key":"batchStatus","filter-multiple":!1,"min-width":"70px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return["1600"==a.row.statusCd?e("span",[e("i",{staticClass:"inline-block w6 h6 br3 mar-r10 vam",staticStyle:{background:"#33cc34"}}),t._v(t._s(t.formatStatusCd(a.row.statusCd)))]):"1200"==a.row.statusCd?e("span",[e("i",{staticClass:"inline-block w6 h6 br3 mar-r10 vam",staticStyle:{background:"#fb4910"}}),t._v(t._s(t.formatStatusCd(a.row.statusCd)))]):"1000"==a.row.statusCd?e("span",[e("i",{staticClass:"inline-block w6 h6 br3 mar-r10 vam",staticStyle:{background:"#ff9500"}}),t._v(t._s(t.formatStatusCd(a.row.statusCd)))]):e("span",[e("i",{staticClass:"inline-block w6 h6 br3 mar-r10 vam",staticStyle:{background:"#007aff"}}),t._v(t._s(t.formatStatusCd(a.row.statusCd)))])]}}])}),e("el-table-column",{attrs:{prop:"statusResult",label:t.$t("order.statusResult"),"min-width":"150px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){return["1200"!=a.row.statusCd?e("span",[t._v(" "+t._s(t.$t("order.success"))),e("a",{staticClass:"cor-green",on:{click:function(e){return t.showBatchDetail(a.row.batchTaskId,"S0C",a.row.uploadFileType)}}},[t._v(t._s(t._f("formatResult")(a.row.statusResult,0)))]),t._v(", "+t._s(t.$t("order.fail"))),e("a",{staticClass:"cor-red",on:{click:function(e){return t.showBatchDetail(a.row.batchTaskId,"S0E",a.row.uploadFileType)}}},[t._v(t._s(t._f("formatResult")(a.row.statusResult,1)))]),t._v(", "+t._s(t.$t("order.doing"))),e("a",{staticClass:"cor-blue",on:{click:function(e){return t.showBatchDetail(a.row.batchTaskId,"S0W",a.row.uploadFileType)}}},[t._v(t._s(t._f("formatResult")(a.row.statusResult,2)))]),t._v(", "+t._s(t.$t("order.wait"))),e("a",{staticClass:"cor-orange",on:{click:function(e){return t.showBatchDetail(a.row.batchTaskId,"S0A",a.row.uploadFileType)}}},[t._v(t._s(t._f("formatResult")(a.row.statusResult,3)))])]):e("span",[t._v(t._s(a.row.statusResult))])]}}])}),e("el-table-column",{attrs:{prop:"createDate",label:t.$t("order.createDate"),"show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"finishDate",label:t.$t("order.finishDate"),"show-overflow-tooltip":""}})],1),e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.tableData.length>0,expression:"tableData.length > 0"}],attrs:{background:"","current-page":t.page.pageIndex,align:"right","page-sizes":[10,20,50,100],"page-size":t.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),e("DetailDialog",{attrs:{visible:t.detailDialogVisible,"modify-form":t.modifyForm},on:{"update:visible":function(e){t.detailDialogVisible=e},exportDetail:t.exportDetail}})],1)},x=[],_=(a(98858),a(61318),a(33228),a(48428)),T=a.n(_),k=a(41090),$=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.$t("order.doTitle"),visible:t.v,"before-close":t.handleClose,width:"840px","close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(e){t.v=e}}},[e("el-form",{ref:"paramFormRef",attrs:{size:"small",model:t.paramForm}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("order.batchTaskId"),prop:"batchTaskId"}},[e("el-input",{attrs:{disabled:""},model:{value:t.paramForm.batchTaskId,callback:function(e){t.$set(t.paramForm,"batchTaskId",e)},expression:"paramForm.batchTaskId"}})],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("order.accNum"),prop:"accNum"}},[e("el-input",{attrs:{placeholder:t.inputPh("order.accNum")},model:{value:t.paramForm.accNum,callback:function(e){t.$set(t.paramForm,"accNum",e)},expression:"paramForm.accNum"}})],1)],1),e("el-col",{attrs:{span:14}},[e("el-form-item",{attrs:{"label-width":"0"}},[e("div",{staticClass:"search-button-group"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.qryBatchDetail(!1)}}},[t._v(t._s(t.$t("common.query")))]),e("el-button",{staticClass:"fr",attrs:{disabled:0===t.tableData.length},on:{click:function(e){return t.exportDetail()}}},[t._v(t._s(t.$t("common.export"))+" ")])],1)])],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{height:"100%",width:"100%",data:t.tableData,border:!0}},[e("el-table-column",{attrs:{prop:"listId",label:t.$t("order.listId"),"min-width":"130px","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"accNum",label:"MSISDN","min-width":"130px","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"statusResult",label:t.$t("order.statusName"),"show-overflow-tooltip":""}})],1),e("el-pagination",{attrs:{background:"","current-page":t.page.pageIndex,align:"right","page-sizes":[10,20,50,100],"page-size":t.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},S=[],C={mixins:[k.Z],props:{visible:{type:Boolean,default:!1},modifyTitle:{type:String,default:""},modifyForm:{type:Object,default:()=>{}}},data(){return{paramForm:{},loading:!1,page:{pageIndex:1,pageSize:10,total:0},tableData:[],paramRules:{userCode:[{required:!0,message:"请输入",trigger:"blur"},{validator:this.validateUserCode,trigger:"blur"}],userName:[{required:!0,message:"请输入",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur"]}],mobile:[{required:!0,message:"请输入",trigger:"blur"},{validator:this.validatePhone,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:this.validatePassword,trigger:"blur"}],passwordCheck:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:this.validatePassword2,trigger:"blur"}],custId:[{required:!0,message:"请选择",trigger:"blur"}],roleId:[{required:!0,message:"请选择",trigger:"blur"}]}}},computed:{v:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},watch:{visible(t){t&&(this.paramForm={...this.modifyForm},this.qryBatchDetail())}},methods:{exportDetail(){0!==this.tableData.length?this.$emit("exportDetail",this.paramForm.batchTaskId,this.paramForm.batchListStatus,this.paramForm.typeName):this.$message({type:"info",message:"暂无数据，无法导出"})},async qryBatchDetail(){this.loading=!0;const t={...this.paramForm,...this.page},e=await(0,o.Z)("/order/qryBatchDetail",t,{method:"post"}).finally((()=>this.loading=!1));this.tableData=e.list||[],this.page.total=e.total},handleSizeChange(t){this.page.pageSize=t,this.page.pageIndex=1,this.qryBatchDetail()},handleCurrentChange(t){this.page.pageIndex=t,this.qryBatchDetail()},cancel(){this.v=!1,this.$refs.paramFormRef.clearValidate()},handleClose(){this.cancel()},validatePhone(t,e,a){/^\d{1,20}$/.test(e)||a(new Error("手机号码格式错误")),a()},validateUserCode(t,e,a){e?e.length>20||!/^[\da-zA-Z_]+$/g.test(e)?a(new Error("请输入6位到32位字母、数字、下划线组合")):a():a(new Error("请输入账号"))},validatePassword(t,e,a){if(!e)return void a(new Error("请输入登录密码"));const s=/^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;s.test(e)?a():a(new Error("请输入8位到20位包含英文大小写,数字,特殊字符"))},validatePassword2(t,e,a){if(!e)return void a(new Error("请输入登录密码"));const s=/^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;s.test(e)?e==this.paramForm.password?a():a(new Error("密码不一致")):a(new Error("请输入8位到20位包含英文大小写,数字,特殊字符"))}}},z=C,D=(0,h.Z)(z,$,S,!1,null,"20cd2a2f",null),U=D.exports,q=a(71602),I=a.n(q),B=a(52570);const F={batchTypes:[],batchStatus:[],startDate:"",endDate:""};var N={components:{DetailDialog:U},filters:{formatResult:function(t,e){const a=t.split(",");return a[e]}},mixins:[k.Z],data(){return{detailDialogVisible:!1,modifyForm:{},showUpload:!1,powerSearch:!1,loading:!1,page:{pageIndex:1,pageSize:10,total:0},statusMap:{1e3:["1000"],1100:["1100","1300","1400","1500"],1200:["1200"],1300:["1600"]},tableData:[],modifyTitle:"新建",modifyParamDialogVisible:!1,statusCd:"1000",qryParam:{...F},querySupplierIspListRes:[],exportOrigin:"simList",pickerOptions:{disabledDate(t){return t.getTime()<Date.now()-2592e6||t.getTime()>Date.now()}}}},computed:{batchTaskStatus(){return[{value:1e3,label:this.$t("order.batchStatus1000")},{value:1100,label:this.$t("order.batchStatus1100")},{value:1200,label:this.$t("order.batchStatus1200")},{value:1300,label:this.$t("order.batchStatus1300")}]}},mounted(){this.qryBatchTaskList(!1)},methods:{rowFormatter(t,e,a){if("batchTemplateId"===e.property)return B.Z[localStorage.getItem("language")].data.find((t=>t.tmplId==a)).tmplName},formatStatusCd(t){let e=null;for(const a in this.statusMap)Object.prototype.hasOwnProperty.call(this.statusMap,a)&&this.statusMap[a].includes(t)&&(e=a);return this.batchTaskStatus.find((t=>t.value==e))?.label||t},async qryBatchTaskList(t){try{this.loading=!0,t||(this.page.pageIndex=1,this.page.pageSize=10);const e=this.statusMap[this.qryParam.batchStatus],a={...this.qryParam,...this.page,batchStatus:e},s=await(0,o.Z)("/order/qryBatchTaskList",a,{method:"post"});this.tableData=s.list||[],this.page.total=s.total,this.loading=!1}catch(e){this.loading=!1}},handleSizeChange(t){this.page.pageSize=t,this.page.pageIndex=1,this.qryBatchTaskList(!0)},handleCurrentChange(t){this.page.pageIndex=t,this.qryBatchTaskList(!0)},reset(){this.qryParam={...F},this.qryBatchTaskList(!1)},showBatchDetail(t,e,a){this.modifyForm.batchTaskId=t,this.modifyForm.batchListStatus=e,this.modifyForm.typeName=a,this.detailDialogVisible=!0},exportDetail(t,e,a){console.log(t,e,a);let s="/api/order/export",r={batchTaskId:t,batchListStatus:e};const i=this.tableData.find((e=>e.batchTaskId===t));"批量写号"===i.templateName&&(s="/order/exportESIMWriteNum",r={batchTaskId:t});const l=i.templateName;T()({url:s,method:"post",data:r,responseType:"blob"}).then((t=>{const e=new Blob([t.data],{type:"application/vnd.ms-excel;charset=UTF-8"}),s=document.createElement("a"),r=window.URL.createObjectURL(e);s.href=r,s.download=l+"_"+I()(Date()).format("YYYYMMDDHHmmss")+"."+a,document.body.appendChild(s),s.click(),setTimeout((function(){document.body.removeChild(s),window.URL.revokeObjectURL(r)}),1e3)}))}}},P=N,R=(0,h.Z)(P,w,x,!1,null,"42bb72e9",null),E=R.exports,L={components:{BatchTask:y,BatchTaskQuery:E},data(){return{activeTab:this.$route.query.activeTab??"1"}}},Z=L,M=(0,h.Z)(Z,s,r,!1,null,"2e5b412e",null),O=M.exports},14872:function(t,e,a){var s={"./dlxsyzxg.png":59472,"./dxdlyzxg.png":93613,"./kxbdg.png":2529,"./kxbtd.png":24549,"./vpndlzd.png":95248,"./zdfj.png":88725,"./zdtj.png":66005,"./zdysxsz.png":64114};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id=14872},59472:function(t,e,a){"use strict";t.exports=a.p+"static/img/dlxsyzxg.04f52d20.png"},93613:function(t,e,a){"use strict";t.exports=a.p+"static/img/dxdlyzxg.ae25007f.png"},2529:function(t,e,a){"use strict";t.exports=a.p+"static/img/kxbdg.72876d0b.png"},24549:function(t,e,a){"use strict";t.exports=a.p+"static/img/kxbtd.df0d6933.png"},95248:function(t,e,a){"use strict";t.exports=a.p+"static/img/vpndlzd.5acc84a6.png"},88725:function(t,e,a){"use strict";t.exports=a.p+"static/img/zdfj.5b7e1e67.png"},66005:function(t,e,a){"use strict";t.exports=a.p+"static/img/zdtj.48a6dd12.png"},64114:function(t,e,a){"use strict";t.exports=a.p+"static/img/zdysxsz.f015bf76.png"}}]);
//# sourceMappingURL=184.55cb1982.js.map