"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[397],{3358:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(3536),o=i(3325);function a(t,e=[]){return(0,o.Z)((0,s.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},9177:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},3710:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"default-footer",color:"transparent",absolute:"",app:"",inset:""}},[t._v(" footer ")])},o=[],a={name:"DefaultFooter"},n=a,p=i(1001),r=i(3453),l=i.n(r),h=i(3385),u=i(3358),c=i(9177),d=i(3325),f=i(4589),m=(0,d.Z)(h.Z,(0,u.Z)("footer",["height","inset"]),c.Z).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...h.Z.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...h.Z.options.computed.styles.call(this),height:isNaN(t)?t:(0,f.kb)(t),left:(0,f.kb)(this.computedLeft),right:(0,f.kb)(this.computedRight),bottom:(0,f.kb)(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),v=(0,p.Z)(n,s,o,!1,null,null,null),b=v.exports;l()(v,{VFooter:m})}}]);
//# sourceMappingURL=default-footer.fd8d9c69.js.map