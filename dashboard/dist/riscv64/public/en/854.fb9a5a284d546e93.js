"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[854],{6854:(G,m,o)=>{o.r(m),o.d(m,{DaemonSetModule:()=>b});var E=o(1028),u=o(6042),r=o(4793),v=o(3621),D=o(3456),f=o(7238),O=o(6758),R=o(2722),p=o(1495),N=o(5387),d=o(7575),T=o(5467),e=o(4650),_=o(958),C=o(7347),M=o(6895),c=o(1576),g=o(7623),I=o(1677),A=o(8701),h=o(9791),y=o(8190),L=o(2958);function P(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property",10)(1,"div",11),e.\u0275\u0275i18n(2,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",13),e.\u0275\u0275element(4,"kd-chips",14),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",n.daemonSet.labelSelector.matchLabels)("displayAll",!0)}}function $(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",11),e.\u0275\u0275i18n(2,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",13),e.\u0275\u0275element(4,"kd-chips",14),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",n.daemonSet.containerImages)("displayAll",!0)}}function z(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",11),e.\u0275\u0275i18n(2,16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",13),e.\u0275\u0275element(4,"kd-chips",14),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",n.daemonSet.initContainerImages)("displayAll",!0)}}function x(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,P,5,2,"kd-property",8),e.\u0275\u0275template(2,$,5,2,"kd-property",9),e.\u0275\u0275template(3,z,5,2,"kd-property",9),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.daemonSet?null:n.daemonSet.labelSelector),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.daemonSet?null:n.daemonSet.containerImages),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.daemonSet?null:n.daemonSet.initContainerImages)}}let F=(()=>{class t{constructor(n,i,s,l){this.daemonSet_=n,this.actionbar_=i,this.activatedRoute_=s,this.notifications_=l,this.endpoint_=d.wE.resource(d._z.daemonSet,!0),this.unsubscribe_=new O.x,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName,i=this.activatedRoute_.snapshot.params.resourceNamespace;this.eventListEndpoint=this.endpoint_.child(n,d._z.event,i),this.podListEndpoint=this.endpoint_.child(n,d._z.pod,i),this.serviceListEndpoint=this.endpoint_.child(n,d._z.service,i),this.daemonSet_.get(this.endpoint_.detail(),n,i).pipe((0,R.R)(this.unsubscribe_)).subscribe(s=>{this.daemonSet=s,this.notifications_.pushErrors(s.errors),this.actionbar_.onInit.emit(new p.N("Daemon Set",s.objectMeta,s.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(T.p),e.\u0275\u0275directiveInject(p.b),e.\u0275\u0275directiveInject(r.ActivatedRoute),e.\u0275\u0275directiveInject(N.TF))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-daemon-set-detail"]],decls:9,vars:9,consts:function(){let a,n,i,s;return a="Resource information",n="Selector",i="Images",s="Init images",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],a,["content","","fxLayout","row wrap",4,"ngIf"],[3,"podInfo","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngIf"],["fxFlex","100"],["key",""],n,["value",""],[3,"map","displayAll"],i,s]},template:function(n,i){1&n&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,x,4,3,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-pod-status-card",5)(6,"kd-pod-list",6)(7,"kd-service-list",6)(8,"kd-event-list",6)),2&n&&(e.\u0275\u0275property("initialized",i.isInitialized)("objectMeta",null==i.daemonSet?null:i.daemonSet.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",i.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("podInfo",null==i.daemonSet?null:i.daemonSet.podInfo)("initialized",i.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",i.podListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",i.serviceListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",i.eventListEndpoint))},directives:[_.A,C.A,M.NgIf,c.xw,g.s,c.yH,I.k,A.G,h.x,y.$,L.X],encapsulation:2}),t})();var j=o(1187);const S={path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-daemon-set-list-state"]],decls:1,vars:1,consts:[[3,"showMetrics"]],template:function(n,i){1&n&&e.\u0275\u0275element(0,"kd-daemon-set-list",0),2&n&&e.\u0275\u0275property("showMetrics",!0)},directives:[j.w],encapsulation:2}),t})(),data:{breadcrumb:D.SX.DaemonSets,parent:f.t}},U={path:":resourceNamespace/:resourceName",component:F,data:{breadcrumb:"{{ resourceName }}",parent:S}};let X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[r.RouterModule.forChild([S,U,v._Q])],r.RouterModule]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.m,E.K,X]]}),t})()}}]);