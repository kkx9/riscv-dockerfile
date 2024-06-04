"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[576],{8576:(z,l,s)=>{s.r(l),s.d(l,{IngressClassModule:()=>j});var p=s(1028),u=s(6042),r=s(4793),S=s(3456),I=s(3621),E=s(686),f=s(6758),R=s(2722),d=s(1495),v=s(5387),c=s(7575),N=s(5467),e=s(4650),T=s(958),M=s(7347),C=s(6895),m=s(1576),O=s(7623),h=s(7392),x=s(266);function y(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property",8)(1,"div",9),e.\u0275\u0275i18n(2,10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",11),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==n.ingressClass?null:n.ingressClass.controller)}}function A(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",12),e.\u0275\u0275text(2),e.\u0275\u0275elementStart(3,"mat-icon",13),e.\u0275\u0275text(4,"tune"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"div",11),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()()),2&t){const n=a.$implicit,o=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",n," "),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==o.ingressClass?null:o.ingressClass.parameters[n])}}function L(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",5),e.\u0275\u0275template(1,y,5,1,"kd-property",6),e.\u0275\u0275template(2,A,7,2,"kd-property",7),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.ingressClass?null:n.ingressClass.controller),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.getParameterNames())}}let D=(()=>{class t{constructor(n,o,i,$){this.ingressClass_=n,this.actionbar_=o,this.activatedRoute_=i,this.notifications_=$,this.endpoint_=c.wE.resource(c._z.ingressClass),this.unsubscribe_=new f.x,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName;this.ingressClass_.get(this.endpoint_.detail(),n).pipe((0,R.R)(this.unsubscribe_)).subscribe(o=>{this.ingressClass=o,this.notifications_.pushErrors(o.errors),this.actionbar_.onInit.emit(new d.N("Ingress Class",o.objectMeta,o.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}getParameterNames(){return this.ingressClass.parameters?Object.keys(this.ingressClass.parameters):[]}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(N.z),e.\u0275\u0275directiveInject(d.b),e.\u0275\u0275directiveInject(r.ActivatedRoute),e.\u0275\u0275directiveInject(v.TF))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-ingress-class-detail"]],decls:5,vars:4,consts:function(){let a,n,o;return a="Resource information",n="Controller",o="\u53C3\u6578",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],a,["content","","fxLayout","row wrap",4,"ngIf"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngFor","ngForOf"],["fxFlex","100"],["key",""],n,["value",""],["key","","fxLayout",""],["matTooltip",o,1,"kd-ingress-class-parameter-icon"]]},template:function(n,o){1&n&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,L,3,2,"div",4),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("initialized",o.isInitialized)("objectMeta",null==o.ingressClass?null:o.ingressClass.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",o.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",o.isInitialized))},directives:[T.A,M.A,C.NgIf,m.xw,O.s,m.yH,C.NgForOf,h.Hw,x.gM],styles:[".kd-ingress-class-parameter-icon[_ngcontent-%COMP%]{font-size:12px;height:12px;max-height:12px;max-width:12px;width:12px;align-self:center;margin-left:4px}"]}),t})();var _=s(8608);const g={path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-ingress-class-list-state"]],decls:1,vars:0,template:function(n,o){1&n&&e.\u0275\u0275element(0,"kd-ingress-class-list")},directives:[_.j],encapsulation:2}),t})(),data:{breadcrumb:S.SX.IngressClasses,parent:E.X}},P={path:":resourceName",component:D,data:{breadcrumb:"{{ resourceName }}",parent:g}};let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[r.RouterModule.forChild([g,P,I.aA])],r.RouterModule]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.m,p.K,F]]}),t})()}}]);