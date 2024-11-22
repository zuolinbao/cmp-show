"use strict";(self["webpackChunkcmp"]=self["webpackChunkcmp"]||[]).push([[206],{55206:function(e,t,a){a.r(t),a.d(t,{default:function(){return le}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"container-content"},[t("div",{staticClass:"container-header"},[t("div",{staticClass:"header-title"},[t("div",{staticClass:"header-left"},[e._v(e._s(e.$t("cardMag.basicInformation")))])]),t("div",{staticClass:"header-info"},[t("el-row",{attrs:{gutter:20}},e._l(e.infoList,(function(a){return t("el-col",{key:a.prop,attrs:{span:6}},[t("CtTooltip",{attrs:{content:e.itemInfoFormatter(a)}})],1)})),1)],1)]),t("div",{staticClass:"container-middle"},[t("div",{staticClass:"middle-title"},[t("div",{staticClass:"middle-left"},[e._v(e._s(e.$t("cardMag.superCardDetail")))])]),t("FullDetailList",{attrs:{tableData:e.tableData}})],1),t("div",{staticClass:"container-bottom"},[t("div",{staticClass:"seperator-line"}),t("el-tabs",{staticClass:"page-tabs page-cont",model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[t("el-tab-pane",{attrs:{label:e.$t("cardMag.packageInformation"),name:"1"}},[t("PackageInfo",{ref:"packageInfoRef",attrs:{fullMsisdn:e.fullMsisdn,"block-status":e.detailInfo.blockStatus},on:{changedService:e.qrySimDetail}})],1),t("el-tab-pane",{attrs:{label:e.$t("cardMag.APNstatus"),name:"2"}},[t("ApnStatus",{ref:"apnStatusRef",attrs:{fullMsisdn:e.fullMsisdn}})],1),t("el-tab-pane",{attrs:{label:e.$t("cardMag.changeLog"),name:"3"}},[t("History",{ref:"historyRef",attrs:{fullMsisdn:e.fullMsisdn}})],1)],1)],1)]),e.changePackageDialogVisible?t("ChangePackageDialog",{attrs:{visible:e.changePackageDialogVisible,"detail-info":e.detailInfo},on:{"update:visible":function(t){e.changePackageDialogVisible=t},refresh:e.refresh}}):e._e(),e.changeAttrDialogVisible?t("ChangAttrDialog",{attrs:{visible:e.changeAttrDialogVisible,"detail-info":e.detailInfo},on:{"update:visible":function(t){e.changeAttrDialogVisible=t}}}):e._e(),e.changeOrderDialogVisible?t("ChangOrderDialog",{attrs:{visible:e.changeOrderDialogVisible,"detail-info":e.detailInfo},on:{"update:visible":function(t){e.changeOrderDialogVisible=t},refresh:e.refresh}}):e._e()],1)},l=[],i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"summary"},e._l(e.summaryList,(function(a){return t("div",{key:a.title,staticClass:"summary-item"},[t("div",{staticClass:"summary-item-title"},[e._v(e._s(a.title))]),t("div",{staticClass:"summary-item-used"},[e._v(" "+e._s(a.used)+" "),t("span",{staticClass:"summary-item-unit"},[e._v("MB")])])])})),0),e.testFullOfferInst&&e.testFullOfferInst.offerName?t("el-descriptions",{attrs:{title:e.testFullOfferInst.offerName,direction:"vertical",column:4,border:""}},[t("el-descriptions-item",{attrs:{label:e.$t("cardMag.offerName")}},[e._v(e._s(e.testFullOfferInst.offerName))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.offerUsageDesc")}},[e._v(e._s(e.testFullOfferInst.offerUsageDesc?e.testFullOfferInst.offerUsageDesc+"MB":""))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.billUsageDesc")}},[e._v(e._s(e.testFullOfferInst.billUsageDesc?e.testFullOfferInst.billUsageDesc+"MB":""))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.effDate")}},[e._v(e._s(e.testFullOfferInst.effDate))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.expDate")}},[e._v(e._s(e.testFullOfferInst.expDate))])],1):e._e(),e.mainFullOfferInst&&e.mainFullOfferInst.offerName?t("el-descriptions",{attrs:{title:e.mainFullOfferInst.offerName,direction:"vertical",column:6,border:""}},[t("el-descriptions-item",{attrs:{label:e.$t("cardMag.offerName")}},[e._v(e._s(e.mainFullOfferInst.offerName))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.offerUsageDesc")}},[e._v(e._s(e.mainFullOfferInst.offerUsageDesc?e.mainFullOfferInst.offerUsageDesc+"MB":""))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.billUsageDesc")}},[e._v(e._s(e.mainFullOfferInst.billUsageDesc?e.mainFullOfferInst.billUsageDesc+"MB":""))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.flowPoolInstId")}},[e._v(e._s(e.mainFullOfferInst.flowPoolInstId))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.effDate")}},[e._v(e._s(e.mainFullOfferInst.effDate))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.expDate")}},[e._v(e._s(e.mainFullOfferInst.expDate))])],1):e._e(),t("SupplyOfferTable",{attrs:{"qry-offer-inst-by-prod-inst-res":e.queryFullOfferInstsRes}})],1)},r=[],n=function(){var e=this,t=e._self._c;return e.supplyFullOfferInstList?t("div",e._l(e.supplyFullOfferInstList,(function(a,s){return t("div",{key:s},[t("div",{staticClass:"section-title"},[e._v(e._s(a[0].offerName))]),t("el-table",{ref:"table",refInFor:!0,staticClass:"container-table",attrs:{"element-loading-text":"加载中",data:a,border:!0,height:"100%"}},[t("el-table-column",{attrs:{prop:"offerUsageDesc",label:e.$t("cardMag.offerUsageDesc"),"show-overflow-tooltip":"",resizable:"","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(e._s(t.offerUsageDesc?t.offerUsageDesc+"MB":""))]}}],null,!0)}),t("el-table-column",{attrs:{prop:"billUsageDesc",label:e.$t("cardMag.billUsageDesc"),"show-overflow-tooltip":"",resizable:"","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(e._s(t.billUsageDesc?t.billUsageDesc+"MB":""))]}}],null,!0)}),t("el-table-column",{attrs:{prop:"createTime",label:e.$t("cardMag.orderTime"),"show-overflow-tooltip":"",resizable:"","min-width":"110"}})],1)],1)})),0):e._e()},o=[],f=(a(70560),{props:{qryOfferInstByProdInstRes:{type:Object,required:!0,default:()=>{}}},computed:{supplyFullOfferInstList(){const e=this.qryOfferInstByProdInstRes.supplyFullOfferInstList;if(!e)return[];const t=this.groupByOfferId(e);return t}},methods:{groupByOfferId(e){return e.reduce(((e,t)=>(e.some((e=>e.some((e=>e.offerId===t.offerId))))?e.find((e=>e.some((e=>e.offerId===t.offerId)))).push(t):e.push([t]),e)),[])}}}),c=f,d=a(43736),u=(0,d.Z)(c,n,o,!1,null,"a23ef7e2",null),m=u.exports,p={components:{SupplyOfferTable:m},props:{fullMsisdn:{type:String,required:!0,default:()=>null},blockStatus:{type:String,default:()=>null}},data(){return{value1:!0,loading:!1,summaryList:[{title:this.$t("cardMag.planTotalUsage"),used:"",key:"planTotalUsage"},{title:this.$t("cardMag.totalBillUsage"),used:"",key:"totalBillUsage"},{title:this.$t("cardMag.totalOverUsage"),used:"",key:"totalOverUsage"}],queryFullOfferInstsRes:{},mainFullOfferInst:{},testFullOfferInst:{},planTotalUsage:"",totalBillUsage:"",totalOverUsage:"",isOpen:!1}},watch:{blockStatus(e,t){this.isOpen="1000"===e}},mounted(){this.queryFullOfferInsts()},methods:{async queryFullOfferInsts(){try{const e={fullMsisdn:this.fullMsisdn};this.$api.fullCardMag.queryFullOfferInsts(e).then((e=>{this.queryFullOfferInstsRes=e,this.mainFullOfferInst=e.mainFullOfferInst??{},this.testFullOfferInst=e.testFullOfferInst??{},this.handle(e)}))}catch(e){}},handle(e){this.summaryList.forEach((t=>{t.used=e[t.key]}))},async handleChangeStatus(e){try{const t=e?"1000":"1100",a={fullMsisdn:this.fullMsisdn,newBlockStatus:t};this.$api.fullCardMag.changeFullDataServiceStatus(a).then((e=>{this.$message.success("成功！"),this.qrySimDetail()}))}catch(t){}},async qrySimDetail(){const e={fullMsisdn:this.fullMsisdn};this.$api.fullCardMag.qryFullSimDetail(e).then((e=>{this.isOpen="1000"===e.blockStatus}))}}},h=p,g=(0,d.Z)(h,i,r,!1,null,"96d37c12",null),b=g.exports,I=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"summary"},[t("el-descriptions",{attrs:{direction:"vertical",column:5,border:""}},[t("el-descriptions-item",{attrs:{label:e.$t("cardMag.ispName")}},[e._v(e._s(e.info.ispName))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.apnName")}},[e._v(e._s(e.info.apnName))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.onlineStatus")}},[e._v(e._s(e.info.onlineStatus))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.startTime")}},[e._v(e._s(e.info.startTime))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.ipv4Address")}},[e._v(e._s(e.info.ipv4Address))]),t("el-descriptions-item",{attrs:{label:e.$t("cardMag.ipv6Address")}},[e._v(e._s(e.info.ipv6Address))])],1)],1)])},v=[],M={props:{fullMsisdn:{type:String,required:!0,default:()=>null}},data(){return{info:{}}},mounted(){this.qryFullSimCardOnlineInfo()},methods:{async qryFullSimCardOnlineInfo(){const e={fullMsisdn:this.fullMsisdn};this.$api.fullCardMag.qryFullSimCardOnlineInfo(e).then((e=>{this.info=e||{}}))}}},y=M,S=(0,d.Z)(y,I,v,!1,null,"5117a496",null),O=S.exports,F=function(){var e=this,t=e._self._c;return t("div",{staticClass:"summary"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{"element-loading-text":e.$t("cardMag.loading"),data:e.tableData,border:!0}},[t("el-table-column",{attrs:{prop:"serviceOfferDesc",label:e.$t("cardMag.serviceOfferDesc"),"show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"oldValueDec",label:e.$t("cardMag.oldValueDec"),"show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"newValueDec",label:e.$t("cardMag.newValueDec"),"show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"changeDate",label:e.$t("cardMag.changeDate"),"show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"changeStaffName",label:e.$t("cardMag.changeStaffName"),"show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"statusCdName",label:e.$t("cardMag.statusCdName"),"show-overflow-tooltip":""}})],1),t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],attrs:{background:"","current-page":e.page.pageIndex,align:"right","page-sizes":[10,20,50],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},$=[],D=a(45101),C={props:{fullMsisdn:{type:String,required:!0,default:()=>null}},data(){return{page:{pageIndex:1,pageSize:10,total:0},tableData:[],loading:!1}},mounted(){this.qryFullSimChangeHis()},methods:{async qryFullSimChangeHis(){try{this.loading=!0;const e={fullMsisdn:this.fullMsisdn,...this.page};this.$api.fullCardMag.qryFullSimChangeHis(e).then((e=>{this.tableData=e.list||[],this.page.total=e.total||0})).finally((()=>{this.loading=!1}))}catch(e){this.loading=!1}},handleSizeChange(e){this.page.pageSize=e,this.page.pageIndex=1,this.qryFullSimChangeHis()},handleCurrentChange(e){this.page.pageIndex=e,this.qryFullSimChangeHis()}}},_=C,k=(0,d.Z)(_,F,$,!1,null,"8c586b0c",null),w=k.exports,N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"summary"},[t("el-table",{ref:"table",attrs:{"element-loading-text":e.$t("cardMag.loading"),data:e.tableData,border:!0}},[t("el-table-column",{attrs:{prop:"ispName",label:e.$t("cardMag.ispName"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.custName(t.row.ispId))+" ")]}}])}),t("el-table-column",{attrs:{prop:"supplierName",label:e.$t("cardMag.supplierName"),"show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"iccid",label:"ICCID","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"msisdn",label:"MSISDN","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"imsi",label:"IMSI","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"cardOnlineStatus",label:e.$t("cardMag.cardOnlineStatus"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.imeiStatusDesc(t.row.cardOnlineNum))+" ")]}}])})],1)],1)},q=[],x={props:{tableData:{type:Array,default:()=>[]}},computed:{custName(){return e=>3==e?this.$t("cardMag.cm"):2==e?this.$t("cardMag.cu"):1==e?this.$t("cardMag.ct"):"-"},imeiStatusDesc(){return e=>"0"==e?"zh"===this.$i18n.locale?"离线":"Offline":"1"==e?"zh"===this.$i18n.locale?"在线":"Online":"-"}}},L=x,T=(0,d.Z)(L,N,q,!1,null,"ff2f4362",null),z=T.exports,U=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{title:e.modifyTitle,visible:e.v,"before-close":e.handleClose,width:"520px","close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.v=t}}},[t("el-form",{ref:"paramFormRef",staticClass:"demo-ruleForm",attrs:{model:e.paramForm,rules:e.paramRules,"label-width":"80px",size:"small"}},[t("el-form-item",{attrs:{label:"全能卡号",prop:"fullMsisdn"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.fullMsisdn,callback:function(t){e.$set(e.paramForm,"fullMsisdn",t)},expression:"paramForm.fullMsisdn"}})],1),t("el-form-item",{attrs:{label:"主套餐"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.mainOfferName,callback:function(t){e.$set(e.paramForm,"mainOfferName",t)},expression:"paramForm.mainOfferName"}})],1),t("el-form-item",{attrs:{label:"目标套餐",prop:"offerId"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.paramForm.offerId,callback:function(t){e.$set(e.paramForm,"offerId",t)},expression:"paramForm.offerId"}},e._l(e.offerOptions,(function(e){return t("el-option",{key:e.offerId,attrs:{label:e.offerName,value:e.offerId}})})),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",size:"small",loading:e.btnLoading},on:{click:e.clickOk}},[e._v("确 定")]),t("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},A=[],B={name:"ChangePackageDialog",props:{visible:{type:Boolean,default:!1},modifyTitle:{type:String,default:"套餐变更"},detailInfo:{type:Object,default:()=>{}}},data(){return{paramForm:{fullMsisdn:"",mainOfferName:"",offerId:""},statusCd:"1000",paramRules:{offerId:[{required:!0,message:"请选择目标套餐",trigger:"blur"}]},offerOptions:[],btnLoading:!1}},computed:{v:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},mounted(){const{fullMsisdn:e,mainOfferName:t}=this.detailInfo;this.paramForm.fullMsisdn=e,this.paramForm.mainOfferName=t,this.queryGeneralFullOfferListByMsisdn()},methods:{queryGeneralFullOfferListByMsisdn(){try{const e={custId:this.detailInfo.custId,fullMsisdn:this.detailInfo.fullMsisdn,offerType:"200"};this.$api.fullCardMag.queryGeneralFullOfferListByMsisdn(e).then((e=>{this.offerOptions=e?.filter((e=>e.offerId!=this.detailInfo.mainOfferId))||[]}))}catch(e){}},clickOk(){this.$refs.paramFormRef.validate((e=>{e&&this.changeMainOffer()}))},changeMainOffer(){this.btnLoading=!0;try{const{custId:e,fullMsisdn:t,offerId:a}=this.paramForm,s={custId:e,fullMsisdn:t,offerId:a};this.$api.fullCardMag.changeMainOffer(s).then((e=>{this.$message.success("变更成功！"),this.v=!1,this.$emit("refresh")})).finally((()=>{this.btnLoading=!1}))}catch(e){this.btnLoading=!1}},cancel(){this.v=!1},handleClose(){this.cancel()}}},V=B,R=(0,d.Z)(V,U,A,!1,null,"0bc9e03a",null),P=R.exports,Z=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{title:e.modifyTitle,visible:e.v,"before-close":e.handleClose,width:"520px","close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.v=t}}},[t("el-form",{ref:"paramFormRef",staticClass:"demo-ruleForm",attrs:{model:e.paramForm,rules:e.paramRules,"label-width":"110px",size:"small"}},[t("el-form-item",{attrs:{label:"全能卡号",prop:"fullMsisdn"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.fullMsisdn,callback:function(t){e.$set(e.paramForm,"fullMsisdn",t)},expression:"paramForm.fullMsisdn"}})],1),t("el-form-item",{attrs:{label:"主套餐"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.mainOfferName,callback:function(t){e.$set(e.paramForm,"mainOfferName",t)},expression:"paramForm.mainOfferName"}})],1),t("el-form-item",{attrs:{label:"号卡状态",prop:"simStatusDesc"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.simStatusDesc,callback:function(t){e.$set(e.paramForm,"simStatusDesc",t)},expression:"paramForm.simStatusDesc"}})],1),t("el-form-item",{attrs:{label:"目标号卡状态",prop:"newSimStatus"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.paramForm.newSimStatus,callback:function(t){e.$set(e.paramForm,"newSimStatus",t)},expression:"paramForm.newSimStatus"}},e._l(e.simStatusList,(function(e){return t("el-option",{key:e.simStatus,attrs:{label:e.simStatusDesc,value:e.simStatus}})})),1)],1),t("el-form-item",{attrs:{label:"渠道商",prop:"channelId"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.paramForm.channelId,callback:function(t){e.$set(e.paramForm,"channelId",t)},expression:"paramForm.channelId"}},[t("el-option",{attrs:{value:0,label:"-"}}),e._l(e.channelIdOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",size:"small",loading:e.btnLoading},on:{click:e.clickOk}},[e._v("确 定")]),t("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},H=[],G={name:"ChangAttrDialog",props:{visible:{type:Boolean,default:!1},modifyTitle:{type:String,default:"属性变更"},detailInfo:{type:Object,default:()=>{}}},data(){return{paramForm:{custId:null,fullMsisdn:"",mainOfferName:"",simStatusDesc:"",newSimStatus:"",channelId:null},simStatusList:[],paramRules:{channelId:[{required:!0,message:"请选择渠道商",trigger:"blur"}],newSimStatus:[{required:!0,message:"请选择目标号卡状态",trigger:"blur"}]},channelIdOptions:[],simStatus:null,btnLoading:!1}},computed:{v:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},mounted(){const{fullMsisdn:e,channelId:t,custId:a,mainOfferName:s,simStatusDesc:l,simStatus:i}=this.detailInfo;this.paramForm.fullMsisdn=e,this.paramForm.channelId=t,this.paramForm.custId=a,this.paramForm.mainOfferName=s,this.paramForm.simStatusDesc=l,this.simStatus=i,this.handler(this.paramForm.custId),this.getChangeSimStatusList()},methods:{async handler(e){if(!e)return;const t=await(0,D.Z)("/channel/queryChannelList",{custId:e},{method:"post"});this.channelIdOptions=t.map((e=>({value:e.channelId,label:e.channelName})))},async getChangeSimStatusList(){try{const e={simStatus:this.simStatus};this.$api.fullCardMag.getFullChangeSimStatusList(e).then((e=>{this.simStatusList=e||[]})),this.paramForm.newSimStatus=this.detailInfo.simStatus}catch(e){}},clickOk(){this.$refs.paramFormRef.validate((e=>{e&&this.changeFullSimAttr()}))},async changeFullSimAttr(){this.btnLoading=!0;try{const{fullMsisdn:e,channelId:t,newSimStatus:a}=this.paramForm,s={fullMsisdn:e,channelId:t,newSimStatus:a};this.$api.fullCardMag.changeFullSimAttr(s).then((e=>{this.$message.success("变更成功！"),this.v=!1,this.$parent.qrySimDetail()})).finally((()=>{this.btnLoading=!1}))}catch(e){this.btnLoading=!1}},cancel(){this.v=!1},handleClose(){this.cancel()}}},j=G,E=(0,d.Z)(j,Z,H,!1,null,"216c53f9",null),J=E.exports,K=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{title:e.modifyTitle,visible:e.v,"before-close":e.handleClose,width:"520px","close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.v=t}}},[t("el-form",{ref:"paramFormRef",staticClass:"demo-ruleForm",attrs:{model:e.paramForm,rules:e.paramRules,"label-width":"80px",size:"small"}},[t("el-form-item",{attrs:{label:"全能卡号",prop:"fullMsisdn"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.fullMsisdn,callback:function(t){e.$set(e.paramForm,"fullMsisdn",t)},expression:"paramForm.fullMsisdn"}})],1),t("el-form-item",{attrs:{label:"主套餐"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.paramForm.mainOfferName,callback:function(t){e.$set(e.paramForm,"mainOfferName",t)},expression:"paramForm.mainOfferName"}})],1),t("el-form-item",{attrs:{label:"加餐包",prop:"offerId"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.paramForm.offerId,callback:function(t){e.$set(e.paramForm,"offerId",t)},expression:"paramForm.offerId"}},e._l(e.offerOptions,(function(e){return t("el-option",{key:e.offerId,attrs:{label:e.offerName,value:e.offerId}})})),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",size:"small",loading:e.btnLoading},on:{click:e.clickOk}},[e._v("确 定")]),t("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},Q=[],W={name:"ChangePackageDialog",props:{visible:{type:Boolean,default:!1},modifyTitle:{type:String,default:"套餐订购"},detailInfo:{type:Object,default:()=>{}}},data(){return{paramForm:{fullMsisdn:"",offerId:null,mainOfferName:""},statusCd:"1000",paramRules:{offerId:[{required:!0,message:"请选择目标套餐",trigger:"blur"}]},offerOptions:[],btnLoading:!1}},computed:{v:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},mounted(){const{fullMsisdn:e,mainOfferName:t}=this.detailInfo;this.paramForm.fullMsisdn=e,this.paramForm.mainOfferName=t,this.queryGeneralFullOfferListByMsisdn()},methods:{async queryGeneralFullOfferListByMsisdn(){try{const e={fullMsisdn:this.detailInfo.fullMsisdn,custId:this.detailInfo.custId,offerType:"300",offerBillType:"301"};this.$api.fullCardMag.queryGeneralFullOfferListByMsisdn(e).then((e=>{this.offerOptions=e||[]}))}catch(e){}},clickOk(){this.$refs.paramFormRef.validate((e=>{e&&this.subscribeFullSingleAddPackage()}))},async subscribeFullSingleAddPackage(){this.btnLoading=!0;try{const{fullMsisdn:e,offerId:t}=this.paramForm,a={fullMsisdn:e,offerId:t,custId:this.detailInfo.custId};this.$api.fullCardMag.subscribeFullSingleAddPackage(a).then((e=>{this.$message.success("订购成功！"),this.v=!1,this.$emit("refresh")})).finally((()=>{this.btnLoading=!1}))}catch(e){this.btnLoading=!1}},cancel(){this.v=!1},handleClose(){this.cancel()}}},X=W,Y=(0,d.Z)(X,K,Q,!1,null,"639a1980",null),ee=Y.exports,te={components:{PackageInfo:b,ApnStatus:O,History:w,FullDetailList:z,ChangAttrDialog:J,ChangePackageDialog:P,ChangOrderDialog:ee},data(){return{fullMsisdn:this.$route.query.fullMsisdn,imeiStatus:this.$route.query.imeiStatus,netIspId:this.$route.query.netIspId,infoList:[{label:this.$t("cardMag.fullMsisdn"),prop:"fullMsisdn"},{label:this.$t("cardMag.equipmentSupplierId"),prop:"equipmentSupplierName"},{label:this.$t("cardMag.custId"),prop:"custId",formatter:e=>this.custName(e)},{label:this.$t("cardMag.channelId"),prop:"channelName"},{label:this.$t("cardMag.refreshTime"),prop:"refreshTime"},{label:this.$t("cardMag.importTaskId"),prop:"importTaskId"},{label:this.$t("cardMag.netIspName"),prop:"netIspId",formatter:e=>this.custName(e)},{label:"IMEI",prop:"imei"},{label:this.$t("cardMag.imeiStatusDesc"),prop:"imeiStatus",formatter:e=>this.imeiStatusDesc(e)},{label:this.$t("cardMag.initSimStatus"),prop:"initSimNum",formatter:e=>this.simStatusDesc(e)},{label:this.$t("cardMag.initValidPeriod"),prop:"initValidPeriod",formatter:e=>this.dayFormat(e)},{label:this.$t("cardMag.stepSimStatus"),prop:"stepSimStatus"},{label:this.$t("cardMag.testOfferName"),prop:"testOfferName"},{label:this.$t("cardMag.testOfferOverAction"),prop:"testOfferOverAction"},{label:this.$t("cardMag.mainOfferNameDetail"),prop:"mainOfferName"},{label:this.$t("cardMag.simStatusDesc"),prop:"simStatus",formatter:e=>this.simStatusDesc(e)},{label:this.$t("cardMag.activeTime"),prop:"activeTime"},{label:this.$t("cardMag.ispComposeType"),prop:"ispComposeType",formatter:e=>this.ispComposeTypeDesc(e)},{label:this.$t("cardMag.ispComposeValueDesc"),prop:"ispComposeValue",formatter:e=>this.ispComposeValueDesc(e)},{label:this.$t("cardMag.sdk"),prop:"sdk",formatter:e=>this.sdkDesc(e)},{label:this.$t("cardMag.strategyName"),prop:"strategyName"},{label:this.$t("cardMag.fullServMsisdn"),prop:"fullServMsisdn"}],info:{},activeTab:"1",changePackageDialogVisible:!1,changeAttrDialogVisible:!1,changeOrderDialogVisible:!1,loading:!1,detailInfo:{},tableData:[]}},created(){this.qrySimDetail()},computed:{custName(){return e=>1==e?this.$t("cardMag.cm"):2==e?this.$t("cardMag.cu"):3==e?this.$t("cardMag.ct"):"-"},fullCardSourceDesc(){return e=>"1000"==e?"zh"===this.$i18n.locale?"标准卡":"Norm card":"2000"==e?"zh"===this.$i18n.locale?"定制卡":"Custom card":"-"},ispComposeTypeDesc(){return e=>"2000"==e?"zh"===this.$i18n.locale?"双网":"Dual networks":"3000"==e?"zh"===this.$i18n.locale?"三网":"Three networks":"-"},sdkDesc(){return e=>"1"==e?"zh"===this.$i18n.locale?"SDK切换":"SDK switching":"2"==e?"zh"===this.$i18n.locale?"重启切换":"Restart switching":"3"==e?"zh"===this.$i18n.locale?"断网切换":"Off-network switching":"-"},imeiStatusDesc(){return e=>"0"==e?"zh"===this.$i18n.locale?"离线":"Offline":"1"==e?"zh"===this.$i18n.locale?"在线":"Online":"-"},simStatusDesc(){return e=>"100000"==e?"zh"===this.$i18n.locale?"在用":"In use":"130000"==e?"zh"===this.$i18n.locale?"测试激活":"Test activation":"140002"==e?"zh"===this.$i18n.locale?"可激活":"Can be activated":"-"},ispComposeValueDesc(){return e=>"12"==e?"zh"===this.$i18n.locale?"电信+联通":"Telecom + Unicom":"13"==e?"zh"===this.$i18n.locale?"电信+移动":"Telecom + Mobile":"123"==e?"zh"===this.$i18n.locale?"电信+联通+移动":"Telecom + Unicom + Mobile":"-"}},methods:{queryJTCardCurrentInfo(e){"1"==this.imeiStatus&&this.tableData.forEach((e=>{e.cardOnlineNum="0",e.cardOnlineStatus="离线"})),1==e&&(this.detailInfo.netIspId=1,this.detailInfo.netIspName="中国移动",this.tableData[1].cardOnlineNum="1",this.tableData[1].cardOnlineStatus="在线"),2==e&&(this.detailInfo.netIspId=2,this.detailInfo.netIspName="中国联通",this.tableData[0].cardOnlineNum="1",this.tableData[0].cardOnlineStatus="在线"),3==e&&(this.detailInfo.netIspId=3,this.detailInfo.netIspName="中国电信",this.tableData[2].cardOnlineNum="1",this.tableData[2].cardOnlineStatus="在线")},async qrySimDetail(){const e={fullMsisdn:this.fullMsisdn};this.$api.fullCardMag.qryFullSimDetail(e).then((e=>{this.detailInfo=e,this.tableData=this.detailInfo?.fullProdInstList,this.queryJTCardCurrentInfo(1*this.netIspId)}))},itemInfoFormatter(e){const t=e.formatter?e.formatter(this.detailInfo[e.prop]):this.detailInfo[e.prop]??"-";return`${e.label}：${t}`},refreshStatus(){this.loading=!0,this.$api.fullCardMag.updateFullSimData({fullMsisdn:this.fullMsisdn}).then((e=>{this.$message.success("状态刷新成功！"),this.qrySimDetail()})).finally((()=>{this.loading=!1}))},changePackage(){this.changePackageDialogVisible=!0},changeAttr(){this.changeAttrDialogVisible=!0},changeOrder(){this.changeOrderDialogVisible=!0},refresh(){this.qrySimDetail(),this.$refs.packageInfoRef.queryFullOfferInsts(),this.$refs.apnStatusRef.qryFullSimCardOnlineInfo(),this.$refs.historyRef.qryFullSimChangeHis()},dayFormat(e){return e>0?`${e}天`:"-"}}},ae=te,se=(0,d.Z)(ae,s,l,!1,null,"61c22284",null),le=se.exports}}]);
//# sourceMappingURL=206.cf9665a6.js.map