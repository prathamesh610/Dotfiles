(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[6],{565:(n,e,t)=>{(n.exports=t(7788)(!1)).push([n.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* The full transition is in here rather than overridden because such a quick transition seems to create jank if inherited then overridden here */\n/* Also because normal fade is used inside this component as well */\n.fade-very-fast-enter-active[data-v-1f07f8e0], .fade-very-fast-leave-active[data-v-1f07f8e0] { transition: opacity 0.1s var(--a-curve);\n}\n.fade-very-fast-enter[data-v-1f07f8e0], .fade-very-fast-leave-to[data-v-1f07f8e0] { opacity: 0;\n}\n.add[data-v-1f07f8e0] { cursor: pointer;\n}\n\n",""])},6:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"focus-content"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("div",{staticClass:"focus-row has-3-col"},[t("div",{staticClass:"side-col"}),n._v(" "),t("div",{staticClass:"center-col todays-focus",attrs:{"data-test":"focus-active"},on:{mouseover:n.hoverOn,mouseleave:n.hoverOff}},[t("transition",{attrs:{name:"fade-very-fast",mode:"out-in"}},[n.showAdd?t("span",{key:"1",staticClass:"add",attrs:{"data-test":"add-focus"},on:{click:function(e){return n.$emit("add-focus")}}},[n._v("+ Add a focus")]):t("span",{key:"2"},[t("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[t("span",{key:n.message,staticClass:"default"},[n._v(n._s(n.message))])])],1)])],1),n._v(" "),t("div",{staticClass:"side-col"})])])],1)};s._withStripped=!0;const a={name:"PomodoroEmptyFocus",mixins:[t(1940).Z],props:{message:{type:String,default:"Focus"}},data:()=>({showAdd:!1}),methods:{hoverOn(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showAdd=!0}),200)},hoverOff(){clearTimeout(this.timer),this.showAdd=!1}}};t(7871);var o=(0,t(1900).Z)(a,s,[],!1,null,"1f07f8e0",null);o.options.__file="source/addins-vue/focus/pomodoro/PomodoroEmptyFocus.vue";const i=o.exports},7871:(n,e,t)=>{var s=t(565);"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),(0,t(1372).Z)("f078463e",s,!1,{ssrId:!0})}}]);