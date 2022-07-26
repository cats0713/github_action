"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[833],{26:function(e,t,s){s.d(t,{Z:function(){return _}});var r=s(5648),i=s(144),a=s(5827),n=s(8083),o=s(6952),l=s(3536),d=s(1431),c=s(8085),h=s(4589),u=s(3325);const v=(0,u.Z)(o.Z,(0,l.d)(["absolute","fixed","top","bottom"]),d.Z,c.Z);var g=v.extend({name:"v-progress-linear",directives:{intersect:n.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,h.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,h.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,h.kb)(this.normalizedValue,"%"),width:(0,h.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?a.Z5:a.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,h.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,h.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,s){this.isVisible=s},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,h.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=g,m=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),f=s(6505),_=(0,u.Z)(m,f.Z,r.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...f.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...r.Z.options.computed.classes.call(this)}},styles(){const e={...r.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=m.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},7118:function(e,t,s){s.d(t,{EB:function(){return l},Qq:function(){return n},ZB:function(){return o},h7:function(){return a}});var r=s(26),i=s(4589);const a=(0,i.Ji)("v-card__actions"),n=(0,i.Ji)("v-card__subtitle"),o=(0,i.Ji)("v-card__text"),l=(0,i.Ji)("v-card__title");r.Z},1431:function(e,t,s){var r=s(144);function i(e="value",t="change"){return r.Z.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const a=i();t["Z"]=a},3763:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"snsApp"},[s("v-responsive",{staticClass:"overflow-y-auto"},[s("v-responsive",{staticClass:"text-center pa-2"},[s("v-responsive",{attrs:{"min-height":"50vh"}}),s("div",{staticClass:"text-center text-body-2 mb-12"},[e._v(" The card will appear below: ")]),e._l(e.cardArray,(function(t,r){return s("v-lazy",{key:r,attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:e.isActive,callback:function(t){e.isActive=t},expression:"isActive"}},[s("v-card",{staticClass:"mx-auto text-left",attrs:{"max-width":"100vh"}},[s("v-card-title",[e._v(e._s(t.user))]),s("v-card-text",[e._v(e._s(t.contents))]),s("v-card-subtitle",{staticClass:"text-right dateDay"},[e._v(e._s(t.date))])],1)],1)}))],2)],1)],1)},i=[],a={name:"SnsView",data(){return{s:1,cardArray:[]}},methods:{test:()=>{(void 0).$axios.post("/api/data",{ok:"ok"}).then((e=>{console.log(e.data)}))}}},n=a,o=s(1001),l=s(3453),d=s.n(l),c=s(26),h=s(7118),u=s(2529),v=s(2936),g=s(8083),p=s(3325),m=s(4589),f=(0,p.Z)(u.Z,v.Z).extend({name:"VLazy",directives:{intersect:g.Z},props:{options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles(){return{...this.measurableStyles}}},methods:{genContent(){const e=this.isActive&&(0,m.z9)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},e):e},onObserve(e,t,s){this.isActive||(this.isActive=s)}},render(e){return e(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),_=s(3857),y=(0,o.Z)(n,r,i,!1,null,null,null),b=y.exports;d()(y,{VCard:c.Z,VCardSubtitle:h.Qq,VCardText:h.ZB,VCardTitle:h.EB,VLazy:f,VResponsive:_.Z})}}]);
//# sourceMappingURL=views-SnsView.0096d880.js.map