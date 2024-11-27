"use strict";(self["webpackChunkcmp"]=self["webpackChunkcmp"]||[]).push([[610],{2610:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"container-form"},[e("el-form",{ref:"qryParamRef",attrs:{model:t.qryParam,size:"small"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("download.createTime"),prop:"startDate"}},[e("ct-date-picker",{attrs:{begin:t.qryParam.startDate,end:t.qryParam.endDate},on:{"update:begin":function(e){return t.$set(t.qryParam,"startDate",e)},"update:end":function(e){return t.$set(t.qryParam,"endDate",e)}}})],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("download.statusCd"),prop:"statusCd"}},[e("ct-select",{attrs:{placeholder:t.selectPh("download.statusCd"),options:t.statusCdOptions},model:{value:t.qryParam.statusCd,callback:function(e){t.$set(t.qryParam,"statusCd",e)},expression:"qryParam.statusCd"}})],1)],1),e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:t.$t("download.busiType"),prop:"busiType"}},[e("ct-async-select",{attrs:{url:"/batch/getBatchTaskAllBusiType",method:"get","label-key":"busiTypeName","value-key":"busiType",placeholder:t.selectPh("download.busiType")},model:{value:t.qryParam.busiType,callback:function(e){t.$set(t.qryParam,"busiType",e)},expression:"qryParam.busiType"}})],1)],1),e("el-col",{attrs:{span:9}},[e("el-form-item",{attrs:{"label-width":"0"}},[e("div",{staticClass:"search-button-group"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.qryCmpParamPage(!1)}}},[t._v(t._s(t.$t("common.query")))]),e("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:t.reset}},[t._v(t._s(t.$t("common.reset")))])],1)])],1)],1),e("div",{staticClass:"tool-button-group"},[e("el-button",{directives:[{name:"compPriv",rawName:"v-compPriv",value:57,expression:"57"}],attrs:{icon:"el-icon-delete",type:"danger",plain:""},on:{click:t.deleteBatch}},[t._v(t._s(t.$t("common.batchDelete")))])],1)],1),e("ct-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{"show-select":"",data:t.tableData,border:!0,pagination:t.pagination,total:t.total},on:{change:t.tableChange,"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{prop:"fileName",label:t.$t("download.fileName"),"min-width":"110"}}),e("el-table-column",{attrs:{prop:"taskProgress",label:t.$t("download.taskProgress"),"show-overflow-tooltip":"","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[e("span",{style:t.statusStyle(a.row.statusCd)}),e("span",[t._v(t._s(t.rowFormatter(a.row.statusCd)))])])]}}])}),e("el-table-column",{attrs:{prop:"busiTypeName",label:t.$t("download.busiType"),"show-overflow-tooltip":"","min-width":"110"}}),e("el-table-column",{attrs:{prop:"userCode",label:t.$t("download.userCode"),"show-overflow-tooltip":"","min-width":"110"}}),e("el-table-column",{attrs:{prop:"startDate",label:t.$t("download.startDate"),"show-overflow-tooltip":"","min-width":"110"}}),e("el-table-column",{attrs:{prop:"endDate",label:t.$t("download.endDate"),"show-overflow-tooltip":"","min-width":"110"}}),e("el-table-column",{attrs:{prop:"remark",label:t.$t("download.remark"),"show-overflow-tooltip":"","min-width":"110"}}),e("el-table-column",{attrs:{label:t.$t("common.action"),fixed:"right","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"action-button-group"},[e("el-button",{directives:[{name:"compPriv",rawName:"v-compPriv",value:56,expression:"56"}],attrs:{type:"text"},on:{click:function(e){return t.modify(a.row)}}},[t._v(t._s(t.$t("common.download")))]),e("el-button",{directives:[{name:"compPriv",rawName:"v-compPriv",value:57,expression:"57"}],staticClass:"cor-red",attrs:{type:"text"},on:{click:function(e){return t.deleteClick(a.row)}}},[t._v(t._s(t.$t("common.delete")))])],1)]}}])})],1)],1)])},o=[],l=(a(70560),a(23060)),i=a(88434),n={mixins:[l.Z],data(){return{powerSearch:!1,loading:!1,tableData:[],modifyTitle:"",modifyParamDialogVisible:!1,selectUserVisible:!1,selectCustomerVisible:!1,typeOptions:[],qryParam:{statusCd:"",busiType:"",startDate:"",endDate:""},pagination:{pageIndex:1,pageSize:10},saleList:[],modifyForm:{},total:0,multipleSelection:[],pickerOptions:{disabledDate(t){return t.getTime()<Date.now()-2592e6||t.getTime()>Date.now()}}}},computed:{statusCdOptions(){return[{label:this.$t("download.statusCdAll"),value:""},{label:this.$t("download.statusCd1000"),value:"1000"},{label:this.$t("download.statusCd1001"),value:"1001"},{label:this.$t("download.statusCd1002"),value:"1002"},{label:this.$t("download.statusCd9999"),value:"9999"}]}},mounted(){this.qryCmpParamPage(!1)},methods:{rowFormatter(t){return this.statusCdOptions.find((e=>e.value===t)).label},statusStyle(t){let e="#333";return"1001"===t?e="#52e539":"9999"===t&&(e="red"),{width:"6px",height:"6px",borderRadius:"50%",display:"inline-block",backgroundColor:e,marginRight:"5px"}},async qryCmpParamPage(t){this.loading=!0,t||(this.pagination.pageIndex=1,this.pagination.pageSize=10);const e={...this.qryParam,...this.pagination,rowNum:this.pagination.pageSize},a=await(0,i.Z)("/batch/qryBatchList",e,{method:"post"}).finally((()=>this.loading=!1)),s=[];if(a.list)for(const o of a.list){o.beginDate=o.createDate,"1001"===o.statusCd||"9999"===o.statusCd||"1002"===o?o.endDate=o.statusDate:o.endDate="-";const t=o.resultFile.match(".+/(.+)$");null!==t&&(o.fileName=t[1]),s.push(o)}this.tableData=s||[],this.total=a.total},tableChange(t){this.pagination=t,this.qryCmpParamPage(!0)},modify(t){if("1001"!==t.statusCd)this.$message({type:"warning",message:this.$t("download.unfinishedTip")});else{const e=t.fileName,a=t.resultFile;window.open("/api/batch/downloadFile?filePath="+a+"&fileName="+e,"_self")}},handleSelectionChange(t){this.multipleSelection=t},modifyParam(t){t&&(this.modifyForm=null,this.qryCmpParamPage(!1))},async deleteBatch(){const t=this.multipleSelection.map((t=>({queryInstId:t.queryInstId,shard:t.shard})));0!==t.length?this.$confirm(this.$t("download.batchDeleteAsk"),{confirmButtonText:this.$t("common.yes"),cancelButtonText:this.$t("common.no"),type:"warning"}).then((async()=>{await(0,i.Z)("/batch/deleteArrayLists",t,{method:"post"}),this.$message.success(this.$t("common.deleteSuccess")),this.qryCmpParamPage(!1)})):this.$message({type:"warning",message:this.$t("download.selectOne")})},deleteClick(t){this.$confirm(this.$t("download.deleteOneAsk"),{confirmButtonText:this.$t("common.yes"),cancelButtonText:this.$t("common.no"),type:"warning"}).then((async()=>{const e={queryInstId:t.queryInstId,shard:t.shard};await(0,i.Z)("/batch/deleteBatchList",e,{method:"get"}),this.$message.success(this.$t("common.deleteSuccess")),this.qryCmpParamPage(!1)}))},reset(){this.$refs.qryParamRef.resetFields(),this.$nextTick((()=>this.qryCmpParamPage(!1)))}}},r=n,d=a(1001),c=(0,d.Z)(r,s,o,!1,null,"27fcf0ff",null),m=c.exports}}]);
//# sourceMappingURL=610.91738bf3.js.map