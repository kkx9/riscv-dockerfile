"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[937],{1937:(X,u,o)=>{o.r(u),o.d(u,{StatefulSetModule:()=>b});var f=o(1028),m=o(6042),r=o(4793),E=o(3621),T=o(3456),v=o(7238),R=o(6758),_=o(2722),S=o(1495),C=o(5387),d=o(7575),I=o(5467),t=o(4650),g=o(958),O=o(7347),N=o(6895),p=o(1576),A=o(7623),L=o(1677),y=o(8701),M=o(9791),h=o(2958);function D(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property",10)(1,"div",11),t.\u0275\u0275i18n(2,12),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",13),t.\u0275\u0275element(4,"kd-chips",14),t.\u0275\u0275elementEnd()()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275property("map",n.statefulSet.labelSelector)("displayAll",!0)}}function P(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property")(1,"div",11),t.\u0275\u0275i18n(2,15),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",13),t.\u0275\u0275element(4,"kd-chips",14),t.\u0275\u0275elementEnd()()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275property("map",n.statefulSet.containerImages)("displayAll",!0)}}function F(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property")(1,"div",11),t.\u0275\u0275i18n(2,16),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",13),t.\u0275\u0275element(4,"kd-chips",14),t.\u0275\u0275elementEnd()()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275property("map",n.statefulSet.initContainerImages)("displayAll",!0)}}function x(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"div",7),t.\u0275\u0275template(1,D,5,2,"kd-property",8),t.\u0275\u0275template(2,P,5,2,"kd-property",9),t.\u0275\u0275template(3,F,5,2,"kd-property",9),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.statefulSet?null:n.statefulSet.labelSelector),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.statefulSet?null:n.statefulSet.containerImages),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.statefulSet?null:n.statefulSet.initContainerImages)}}let $=(()=>{class e{constructor(n,a,l,s){this.statefulSet_=n,this.actionbar_=a,this.activatedRoute_=l,this.notifications_=s,this.endpoint_=d.wE.resource(d._z.statefulSet,!0),this.unsubscribe_=new R.x,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName,a=this.activatedRoute_.snapshot.params.resourceNamespace;this.podListEndpoint=this.endpoint_.child(n,d._z.pod,a),this.eventListEndpoint=this.endpoint_.child(n,d._z.event,a),this.statefulSet_.get(this.endpoint_.detail(),n,a).pipe((0,_.R)(this.unsubscribe_)).subscribe(l=>{this.statefulSet=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new S.N("Stateful Set",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(I.p),t.\u0275\u0275directiveInject(S.b),t.\u0275\u0275directiveInject(r.ActivatedRoute),t.\u0275\u0275directiveInject(C.TF))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-stateful-set-detail"]],decls:8,vars:8,consts:function(){let i,n,a,l;return i="Informations sur la ressource",n="S\xE9lecteur d'\xE9tiquettes",a="Images",l="Images d'Init",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],i,["content","","fxLayout","row wrap",4,"ngIf"],[3,"podInfo","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngIf"],["fxFlex","100"],["key",""],n,["value",""],[3,"map","displayAll"],a,l]},template:function(n,a){1&n&&(t.\u0275\u0275element(0,"kd-object-meta",0),t.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),t.\u0275\u0275i18n(3,3),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,x,4,3,"div",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"kd-pod-status-card",5)(6,"kd-pod-list",6)(7,"kd-event-list",6)),2&n&&(t.\u0275\u0275property("initialized",a.isInitialized)("objectMeta",null==a.statefulSet?null:a.statefulSet.objectMeta),t.\u0275\u0275advance(1),t.\u0275\u0275property("initialized",a.isInitialized),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",a.isInitialized),t.\u0275\u0275advance(1),t.\u0275\u0275property("podInfo",null==a.statefulSet?null:a.statefulSet.podInfo)("initialized",a.isInitialized),t.\u0275\u0275advance(1),t.\u0275\u0275property("endpoint",a.podListEndpoint),t.\u0275\u0275advance(1),t.\u0275\u0275property("endpoint",a.eventListEndpoint))},directives:[g.A,O.A,N.NgIf,p.xw,A.s,p.yH,L.k,y.G,M.x,h.X],encapsulation:2}),e})();var z=o(2252);const c={path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-stateful-set-state"]],decls:1,vars:1,consts:[[3,"showMetrics"]],template:function(n,a){1&n&&t.\u0275\u0275element(0,"kd-stateful-set-list",0),2&n&&t.\u0275\u0275property("showMetrics",!0)},directives:[z.e],encapsulation:2}),e})(),data:{breadcrumb:T.SX.StatefulSets,parent:v.t}},U={path:":resourceNamespace/:resourceName",component:$,data:{breadcrumb:"{{ resourceName }}",parent:c}};let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[r.RouterModule.forChild([c,U,E.YH])],r.RouterModule]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[m.m,f.K,j]]}),e})()}}]);