"use strict";(self["webpackChunkcmp"]=self["webpackChunkcmp"]||[]).push([[626],{79626:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"container-form"},[t("el-form",{ref:"qryParamRef",attrs:{model:e.qryParam,size:"small"}},[t("div",{staticClass:"row-container"},[t("div",{staticClass:"left-row"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:e.$t("rule.ruleName"),prop:"ruleName"}},[t("el-input",{attrs:{placeholder:e.$t("rule.enter")+e.$t("rule.ruleName")},model:{value:e.qryParam.ruleName,callback:function(t){e.$set(e.qryParam,"ruleName",t)},expression:"qryParam.ruleName"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:e.$t("rule.supplier"),prop:"supplierNbr"}},[t("ct-async-select",{attrs:{placeholder:e.selectPh("rule.supplier"),url:"/prodInst/getSupplierListForQuery",method:"get","label-key":"attrValueName","value-key":"attrValue"},model:{value:e.qryParam.supplierNbr,callback:function(t){e.$set(e.qryParam,"supplierNbr",t)},expression:"qryParam.supplierNbr"}})],1)],1),t("el-col",{attrs:{span:6,prop:"extCusId"}},[t("el-form-item",{attrs:{label:e.$t("rule.supplierCustName")}},[t("ct-select",{attrs:{placeholder:e.$t("rule.supplierCustName"),options:e.custOptions},model:{value:e.qryParam.extCusId,callback:function(t){e.$set(e.qryParam,"extCusId",t)},expression:"qryParam.extCusId"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:e.$t("rule.ruleType"),prop:"ruleSubType"}},[t("ct-select",{attrs:{placeholder:e.$t("rule.pleaseSelect"),options:e.subTypeOptions},model:{value:e.qryParam.ruleSubType,callback:function(t){e.$set(e.qryParam,"ruleSubType",t)},expression:"qryParam.ruleSubType"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.powerSearch,expression:"powerSearch"}],staticClass:"more-query-group"},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:e.$t("rule.createTime"),prop:"createTimeBegin"}},[t("ct-date-picker",{attrs:{begin:e.qryParam.createTimeBegin,end:e.qryParam.createTimeEnd},on:{"update:begin":function(t){return e.$set(e.qryParam,"createTimeBegin",t)},"update:end":function(t){return e.$set(e.qryParam,"createTimeEnd",t)}}})],1)],1)],1)],1)],1),t("div",{staticClass:"right-row"},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{"label-width":"0"}},[t("div",{staticClass:"search-button-group"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.qryCmpParamPage(!1)}}},[e._v(e._s(e.$t("rule.query")))]),t("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.reset}},[e._v(e._s(e.$t("rule.resetting")))]),t("show-more-button",{model:{value:e.powerSearch,callback:function(t){e.powerSearch=t},expression:"powerSearch"}})],1)])],1)],1)]),t("div",{directives:[{name:"compPriv",rawName:"v-compPriv",value:34,expression:"34"}],staticClass:"tool-button-group"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v(e._s(e.$t("rule.addRule")))])],1)]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"container-table",attrs:{"element-loading-text":e.$t("rule.loading"),data:e.tableData,border:!0,"overflow-x":"scroll",height:"100%"}},[t("el-table-column",{attrs:{prop:"ruleName",label:e.$t("rule.ruleName"),"show-overflow-tooltip":"","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("a",{staticClass:"cor-blue",on:{click:function(t){return e.goDetail(r.row)}}},[e._v(e._s(r.row.ruleName))])]}}])}),t("el-table-column",{attrs:{prop:"supplierNbrDesc",label:e.$t("rule.supplier"),"show-overflow-tooltip":"","min-width":"150"}}),t("el-table-column",{attrs:{prop:"extCustId",label:e.$t("rule.supplierCustName"),"show-overflow-tooltip":"","min-width":"150",formatter:e.rowFormatter}}),t("el-table-column",{attrs:{prop:"ruleType",label:e.$t("rule.ruleCategory"),"show-overflow-tooltip":"","min-width":"110",formatter:e.rowFormatter}}),t("el-table-column",{attrs:{prop:"ruleSubType",label:e.$t("rule.ruleType"),"show-overflow-tooltip":"","min-width":"110",formatter:e.rowFormatter}}),t("el-table-column",{attrs:{prop:"objType",label:e.$t("rule.monitorObjectType"),"show-overflow-tooltip":"","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",[e._v(e._s(1==r.row.objType?e.$t("rule.enterprise"):2==r.row.objType?e.$t("rule.package"):3==r.row.objType?e.$t("rule.simCard"):"-"))])]}}])}),t("el-table-column",{attrs:{prop:"createTime",label:e.$t("rule.createTime"),"show-overflow-tooltip":"","min-width":"130"}})],1),t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],attrs:{background:"","current-page":e.page.pageIndex,align:"right","page-sizes":[10,20,50,100],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},l=[],s=(r(70560),r(90408)),u=r(80289),i=r(41090),n=r(63438),o=r(45101),p={mixins:[i.Z,n.Z],data(){return{powerSearch:!1,loading:!1,page:{pageIndex:1,pageSize:10,total:0},tableData:[],custOptions:[],statusCd:"1000",qryParam:{ruleName:"",ruleSubType:"",supplierNbr:"",createTimeBegin:"",createTimeEnd:""},modifyForm:{}}},computed:{...(0,s.rn)("user",["user"]),statusCdOption(){return[{value:1e3,label:this.$t("rule.effective")},{value:1100,label:this.$t("rule.invalid")}]}},watch:{"qryParam.supplierNbr":{async handler(e){const t=await(0,o.Z)("/supplier/customer/qrySupplierCustomerList",{supplierId:e,custId:this.user.custId},{method:"post"});this.custOptions=t.map((e=>{const t="zh"===this.$i18n.locale?e.supplierCustChineseName:e.supplierCustEnglishName;return{label:t,value:e.extCustIdOne||0}})),1===this.custOptions.length?this.searchForm.extCustId=this.custOptions[0].value:this.searchForm.extCustId=""}}},mounted(){this.qryCmpParamPage(!1)},methods:{async del(e){const t=await this.queryRuleCanEditAndDelete(e.ruleId);t?this.$confirm(`${this.$t("rule.delectAction")}？`,this.$t("rule.delectRule"),{confirmButtonText:this.$t("rule.delete"),cancelButtonText:this.$t("rule.cancellation"),type:"success"}).then((async()=>{this.$api.rule.removeRuleStrategy({ruleId:e.ruleId}).then((()=>{this.$message.success(this.$t("rule.delectSuccess")),this.qryCmpParamPage(!1)}))})).catch((()=>{})):this.$message.error(this.$t("rule.noAction"))},goDetail(e){const{ruleId:t,supplierNbr:r,supplierNbrDesc:a,ruleSubType:l}=e;this.$router.push({path:"ruleMagDetail",query:{ruleId:t,supplierNbr:r,supplierNbrDesc:a,ruleSubType:l}})},qryCmpParamPage(e){e||(this.page.pageIndex=1,this.page.pageSize=10);const t={...this.qryParam,...this.page};this.loading=!0,this.$api.rule.qryRuleStrategyList(t).then((e=>{this.tableData=e.list,this.page.total=e.total})).finally((()=>{this.loading=!1}))},handleSizeChange(e){this.page.pageSize=e,this.page.pageIndex=1,this.qryCmpParamPage(!0)},handleCurrentChange(e){this.page.pageIndex=e,this.qryCmpParamPage(!0)},add(){this.$router.push("ruleMagAdd")},async modify(e){const t=await this.queryRuleCanEditAndDelete(e.ruleId);if(!t)return void this.$message.error(this.$t("rule.noAction"));const r=await(0,o.Z)("/ruleCommon/queryAllRuleSupplierRel",{},{method:"get"}),a=r.find((t=>t.attrValue===e.supplierNbr));this.$router.push({name:"ruleMagMod",params:{row:JSON.stringify(e),supplier:JSON.stringify(a)}})},async queryRuleCanEditAndDelete(e){const t=await(0,o.Z)("/ruleCommon/queryRuleCanEditAndDelete",{ruleId:e},{method:"get"});return t},reset(){this.$refs.qryParamRef.resetFields(),this.$nextTick((()=>this.qryCmpParamPage(!1)))},rowFormatter(e,t,r){return"ruleType"===t.property?this.$t((0,u.IC)(e.ruleType)):"ruleSubType"===t.property?this.$t((0,u.hG)(e.ruleSubType)):"extCustId"===t.property?"zh"===this.$i18n.locale?e.supplierCustChineseName:e.supplierCustEnglishName:r}}},c=p,m=r(43736),h=(0,m.Z)(c,a,l,!1,null,"d388bbb4",null),d=h.exports},80289:function(e,t,r){r.d(t,{IC:function(){return N},T8:function(){return C},X8:function(){return P},Xp:function(){return f},ZN:function(){return v},b6:function(){return q},ex:function(){return w},hG:function(){return $},hR:function(){return T},o3:function(){return S}});const a=101,l=201,s=301,u=102,i=501,n=502,o=601,p=1,c=2,m=3,h=5,d=6,g=1,y=2,b=3;function f(e){return[o,i,u,n].find((t=>t===e))}function w(e){const t={[a]:p,[l]:c,[s]:m,[u]:p,[i]:h,[n]:h,[o]:d};return t[e]}function v(e){return e===g?"rule.enterprise":e===y?"rule.package":e===b?"rule.simCard":""}const C={[a]:"rule.monthDataUsage",[l]:"rule.monthSmsUsage",[s]:"rule.monthVoiceUsage",[o]:"rule.packageExpire",[i]:"rule.simStatusChange",[n]:"rule.deviceChange",[u]:"rule.monthOverflow"};function $(e){return C[e]||""}const T={[p]:"rule.dataRuleType",[c]:"rule.smsRuleType",[m]:"rule.voiceRuleType",[h]:"rule.cardRuleType",[d]:"rule.package"};function N(e){return T[e]}function q(e){return e===a?"rule.dataUnit":e===l?"rule.smsUnit":e===s?"rule.voiceUnit":""}function P(e){return`rule.sendState${e}`}function S(e){e.objId=e.offerId,e.objDesc=e.offerName}},63438:function(e,t,r){var a=r(80289);t.Z={computed:{subTypeOptions(){return Object.entries(a.T8).map((([e,t])=>{const r=this.$t(t);return{value:Number(e),label:r}}))},ruleTypeOptions(){return Object.entries(a.hR).map((([e,t])=>{const r=this.$t(t);return{value:Number(e),label:r}}))}}}}}]);
//# sourceMappingURL=626.b9b95e9a.js.map