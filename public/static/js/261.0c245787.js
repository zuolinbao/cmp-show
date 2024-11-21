"use strict";(self["webpackChunkcmp"]=self["webpackChunkcmp"]||[]).push([[261],{709:function(t,e,a){a.d(e,{Z:function(){return c}});var l=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:t.$t("ann.detail"),visible:t.v,"close-on-click-modal":!1,width:"840px",top:"6%","append-to-body":""},on:{"update:visible":function(e){t.v=e}}},[e("div",{staticClass:"ann-title"},[t._v(t._s(t.detail.bulletinTitle))]),e("div",{staticClass:"ann-time"},[e("span",[t._v(t._s(t.$t("ann.createDate")+t.detail.publishDate))]),e("span",[t._v(t._s(t.$t("ann.updateDate")+t.detail.updateTime))])]),e("div",{staticClass:"ann-content",domProps:{innerHTML:t._s(t.detail.bulletinContent)}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.clickOk}},[t._v(t._s(t.$t("ann.back")))])],1)])],1)},i=[],n=a(45101),s={components:{},props:{visible:{type:Boolean,default:!1},bulletinId:{type:[Number,String],default:""},readIt:{type:Boolean,default:!1}},data(){return{detail:{}}},computed:{v:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},watch:{async visible(t){t||(this.detail={},this.readIt&&this.read()),this.detail=await(0,n.Z)("/bulletin/queryBulletinInfo",{bulletinId:this.bulletinId},{method:"get"})}},methods:{clickOk(){this.v=!1},async read(){await(0,n.Z)("/bulletinRcvObjRel/updateBulletinRcvObjStatus",[this.bulletinId],{method:"post"})}}},o=s,r=a(43736),u=(0,r.Z)(o,l,i,!1,null,"1824ab12",null),c=u.exports},15261:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container-form"},[e("el-form",{ref:"qryParamRef",attrs:{model:t.qryParam,size:"small"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("ann.bulletinType"),prop:"bulletinType"}},[e("ct-select",{attrs:{placeholder:t.selectPh("ann.bulletinType"),options:t.bulletinTypes,disabled:""},model:{value:t.qryParam.busiType,callback:function(e){t.$set(t.qryParam,"busiType",e)},expression:"qryParam.busiType"}})],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("ann.type"),prop:"type"}},[e("ct-select",{attrs:{placeholder:t.selectPh("ann.type"),options:t.statusCds},model:{value:t.qryParam.type,callback:function(e){t.$set(t.qryParam,"type",e)},expression:"qryParam.type"}})],1)],1),e("el-col",{attrs:{span:14}},[e("el-form-item",{attrs:{"label-width":"0"}},[e("div",{staticClass:"search-button-group"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.qryCmpParamPage(!1)}}},[t._v(t._s(t.$t("common.query")))]),e("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:t.reset}},[t._v(t._s(t.$t("common.reset")))])],1)])],1)],1),e("div",{staticClass:"tool-button-group"},[e("el-button",{attrs:{disabled:0==t.multipleSelection.length,icon:"el-icon-collection"},on:{click:t.read}},[t._v(t._s(t.$t("ann.markRead")))]),e("el-button",{attrs:{icon:"el-icon-brush"},on:{click:t.readAll}},[t._v(t._s(t.$t("ann.markAllRead")))])],1)],1),e("ct-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{"show-select":"",data:t.tableData,border:!0,pagination:t.pagination,total:t.total},on:{"table-change":t.tableChange,"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{prop:"bulletinTitle",label:t.$t("ann.bulletinTitle")},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{staticClass:"cor-blue",on:{click:function(e){return t.toDetail(a.row)}}},[t._v(t._s(a.row.bulletinTitle))])]}}])}),e("el-table-column",{attrs:{prop:"bulletinType",label:t.$t("ann.bulletinTitle"),formatter:t.formatBulletinType,"show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"type",label:t.$t("ann.type"),"show-overflow-tooltip":"",formatter:t.formatType}}),e("el-table-column",{attrs:{prop:"publishDate",label:t.$t("ann.publishDate"),"show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"expDate",label:t.$t("ann.expDate"),"show-overflow-tooltip":""}})],1)],1),e("DetailDialog",{attrs:{visible:t.dialogVisible,"modify-form":t.modifyForm,"bulletin-id":t.bulletinId},on:{"update:visible":function(e){t.dialogVisible=e}}})],1)},i=[],n=a(41090),s=a(45101),o=a(709),r={components:{DetailDialog:o.Z},filters:{formatStatusCd:function(t){switch(t){case"his":return this.$t("ann.read");case"now":return this.$t("ann.unread");default:return this.$t("ann.unknown")}}},mixins:[n.Z],data(){return{powerSearch:!1,loading:!1,modifyForm:{},dialogVisible:!1,bulletinId:"",tableData:[],typeOptions:[],qryParam:{type:"",busiType:0},pagination:{pageIndex:1,pageSize:10},total:0,multipleSelection:[]}},computed:{statusCds(){return[{value:"his",label:this.$t("ann.read")},{value:"now",label:this.$t("ann.unread")}]},bulletinTypes(){return[{value:0,label:this.$t("ann.bulletinTypeDefault")}]}},mounted(){this.qryCmpParamPage(!1)},methods:{async qryCmpParamPage(t){t||(this.pagination.pageIndex=1,this.pagination.pageSize=10);const e={...this.qryParam,...this.pagination};this.loading=!0;const a=await(0,s.Z)("/bulletin/queryBulletinPageListByType",e,{method:"post"}).finally((()=>{this.loading=!1}));this.tableData=a.list,this.page.total=a.total},tableChange(t){this.pagination=t,this.qryCmpParamPage(!1)},toDetail(t){this.dialogVisible=!0,this.modifyForm=t,this.bulletinId=t.bulletinId},modify(t){if(3!==t.taskStatus)this.$message({type:"warning",message:"此任务未处理完成，无法下载！"});else{const e=t.fileName,a=t.resultFile;window.open("/batch/downloadFile?filePath="+a+"&fileName="+e,"_self")}},handleSelectionChange(t){this.multipleSelection=t},async read(){const t=this.multipleSelection.map((t=>t.bulletinId));0!==t.length&&(await(0,s.Z)("/bulletinRcvObjRel/updateBulletinRcvObjStatus",t,{method:"post"}),this.$message.success(this.$t("ann.setSuccess")),this.qryCmpParamPage(!1))},async readAll(){await(0,s.Z)("/bulletinRcvObjRel/updateAllBulletinRcvObjStatus",{},{method:"post"}),this.$message.success(this.$t("ann.setSuccess")),this.qryCmpParamPage(!1)},reset(){this.$refs.qryParamRef.resetFields(),this.qryCmpParamPage(!1)},formatBulletinType(t,e){return this.bulletinTypes.find((e=>e.value===t.bulletinType)).label},formatType(t,e){return"1100"===t.brorStatusCd?this.$t("ann.read"):this.$t("ann.unread")}}},u=r,c=a(43736),p=(0,c.Z)(u,l,i,!1,null,"51f847bb",null),d=p.exports}}]);
//# sourceMappingURL=261.0c245787.js.map