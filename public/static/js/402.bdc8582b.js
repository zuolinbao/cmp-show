"use strict";(self["webpackChunkcmp"]=self["webpackChunkcmp"]||[]).push([[402],{72402:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("page-top",{attrs:{"page-name":"角色信息",links:e.links,"can-back":!0}}),t("div",{staticClass:"container-content"},[t("div",{staticClass:"container-header"},[e._m(0),t("div",{staticClass:"header-info"},[t("el-row",{attrs:{gutter:20}},e._l(e.infoList,(function(a){return t("el-col",{key:a.prop,attrs:{span:6}},[t("CtTooltip",{attrs:{label:a.label,content:e.itemInfoFormatter(a)}})],1)})),1)],1)]),t("div",{staticClass:"container-bottom"},[e._m(1),t("div",{staticClass:"container-form"},[t("MenuTree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"tree-data":e.treeData}})],1)])])],1)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-title"},[t("div",{staticClass:"header-left"},[e._v("基本信息")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-header"},[t("div",{staticClass:"header-title"},[t("div",{staticClass:"header-left"},[e._v("权限信息")])])])}];function i(e){e.menuName=e.menuName||e.privName,e.children&&e.children.length>0&&e.children.forEach((e=>i(e)))}function s(e){const t=e.every((e=>!0===e.checked)),a={menuName:"全选",privId:666666,checked:t,children:e};return i(a),[a]}var l=a(45101),c=function(){var e=this,t=e._self._c;return t("el-tree",{ref:"tree",attrs:{data:e.treeData,"show-checkbox":"","node-key":"privId","check-strictly":!0,props:e.treeProps,"default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":[666666]},on:{"check-change":e.checkChange}})},o=[],h=(a(70560),a(91093)),d={props:{treeData:{type:Array,default:()=>{}}},data(){return{treeProps:{label:"menuName"},manulCheck:!0}},computed:{defaultCheckedKeys(){const e=[];function t(a){for(const r of a)r.checked&&e.push(r.privId),r.children&&r.children.length>0&&t(r.children)}return t(this.treeData??[]),e}},methods:{checkChange(e,t){if(!this.manulCheck)return;this.manulCheck=!1;const a=(e,t)=>{e?.forEach((e=>{this.$refs.tree.setChecked(e.privId,t),e?.children?.length&&a(e?.children,t)}))};a(e?.children??[],!1!==t),this.setFatherNodeStatus(),setTimeout((()=>{this.manulCheck=!0}),1)},setFatherNodeStatus(){const e=this.$refs.tree.getCheckedKeys();console.log("++++",e);const t=(0,h.I)(this.treeData);function a(t){function a(t){if(t.children&&t.children.length>0){let r=!0;t.children.forEach((t=>{a(t),e.includes(t.privId)&&(r=!1)})),r||e.push(t.privId)}}t.forEach((e=>{a(e)}))}a(t),console.log("----",e),this.$refs.tree.setCheckedKeys(e)}}},u=d,f=a(43736),p=(0,f.Z)(u,c,o,!1,null,"fb6fc0c8",null),m=p.exports,g={components:{MenuTree:m},data(){return{importTaskId:"",links:[{name:"用户管理"},{name:"角色详情"}],infoList:[{label:"角色名称",prop:"roleName"},{label:"角色类型",prop:"roleType"},{label:"企业客户",prop:"custName"},{label:"渠道商",prop:"channelName"},{label:"角色描述",prop:"remark"}],tableData:[],loading:!1,page:{pageIndex:1,pageSize:10,total:0},detailInfo:{},treeData:[],activeTab:"1",changePackageDialogVisible:!1,changeAttrDialogVisible:!1,qryParam:{accNum:""}}},created(){this.querySysRoleDetail(),this.menuAuthorization()},methods:{async querySysRoleDetail(){const e={roleId:this.$route.query.roleId},t=await(0,l.Z)("/sysrole/querySysRoleDetail",e,{method:"get"});this.detailInfo=t},async menuAuthorization(){const e={roleId:this.$route.query.roleId};this.loading=!0;const t=await(0,l.Z)("/sysrole/menuAuthorization",e,{method:"get"});this.loading=!1,this.treeData=s(t)},itemInfoFormatter(e){const t=e.formatter?e.formatter(this.detailInfo[e.prop]):this.detailInfo[e.prop]||"-";return t},changePackage(){this.changePackageDialogVisible=!0},changeAttr(){this.changeAttrDialogVisible=!0},reset(){this.$refs.qryParamRef.resetFields(),this.qryCmpParamPage(!1)},addParam(){}}},k=g,v=(0,f.Z)(k,r,n,!1,null,"b0185240",null),y=v.exports}}]);
//# sourceMappingURL=402.bdc8582b.js.map