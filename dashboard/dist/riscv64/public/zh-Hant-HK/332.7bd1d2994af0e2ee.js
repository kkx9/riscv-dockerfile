"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[332],{332:(b,p,i)=>{i.r(p),i.d(p,{ServiceModule:()=>Y});var S=i(1028),m=i(6042),d=i(4793),_=i(3621),C=i(3456),R=i(686),v=i(1495),f=i(5387),l=i(7575),I=i(5467),T=i(6758),N=i(2722),e=i(4650),g=i(958),y=i(7347),O=i(6895),E=i(1576),M=i(7623),h=i(1677),D=i(7274),A=i(9791),L=i(2815),P=i(2958);function x(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",10),e.\u0275\u0275i18n(2,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.service?null:t.service.type)}}function $(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",10),e.\u0275\u0275i18n(2,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.service?null:t.service.clusterIP)}}function V(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",10),e.\u0275\u0275i18n(2,14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.service?null:t.service.sessionAffinity)}}function z(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"kd-property",15)(1,"div",10),e.\u0275\u0275i18n(2,16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275element(4,"kd-chips",17),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",null==t.service?null:t.service.selector)("displayAll",!0)}}function F(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,x,5,1,"kd-property",8),e.\u0275\u0275template(2,$,5,1,"kd-property",8),e.\u0275\u0275template(3,V,5,1,"kd-property",8),e.\u0275\u0275template(4,z,5,2,"kd-property",9),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.type),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.clusterIP),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.sessionAffinity),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.service?null:t.service.selector)}}let j=(()=>{class n{constructor(t,o,r,a){this.service_=t,this.actionbar_=o,this.activatedRoute_=r,this.notifications_=a,this.isInitialized=!1,this.endpoint_=l.wE.resource(l._z.service,!0),this.unsubscribe_=new T.x}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName,o=this.activatedRoute_.snapshot.params.resourceNamespace;this.podListEndpoint=this.endpoint_.child(t,l._z.pod,o),this.ingressListEndpoint=this.endpoint_.child(t,l._z.ingress,o),this.eventListEndpoint=this.endpoint_.child(t,l._z.event,o),this.service_.get(this.endpoint_.detail(),t,o).pipe((0,N.R)(this.unsubscribe_)).subscribe(r=>{this.service=r,this.notifications_.pushErrors(r.errors),this.actionbar_.onInit.emit(new v.N("Service",r.objectMeta,r.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(I.p),e.\u0275\u0275directiveInject(v.b),e.\u0275\u0275directiveInject(d.ActivatedRoute),e.\u0275\u0275directiveInject(f.TF))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-service-detail"]],decls:9,vars:9,consts:function(){let s,t,o,r,a;return s="Resource information",t="\u985E\u5225",o="\u96C6\u7FA4 IP",r="Session Affinity",a="Selector",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],s,["content","","fxLayout","row wrap",4,"ngIf"],[3,"endpoints","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],[4,"ngIf"],["fxFlex","100",4,"ngIf"],["key",""],t,["value",""],o,r,["fxFlex","100"],a,[3,"map","displayAll"]]},template:function(t,o){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,F,5,4,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-endpoint-card-list",5)(6,"kd-pod-list",6)(7,"kd-ingress-list",6)(8,"kd-event-list",6)),2&t&&(e.\u0275\u0275property("initialized",o.isInitialized)("objectMeta",null==o.service?null:o.service.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",o.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",o.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoints",null==o.service||null==o.service.endpointList?null:o.service.endpointList.endpoints)("initialized",o.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",o.podListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",o.ingressListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",o.eventListEndpoint))},directives:[g.A,y.A,O.NgIf,E.xw,M.s,E.yH,h.k,D.T,A.x,L._,P.X],encapsulation:2}),n})();var U=i(8190);const u={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-service-list-state"]],decls:1,vars:0,template:function(t,o){1&t&&e.\u0275\u0275element(0,"kd-service-list")},directives:[U.$],encapsulation:2}),n})(),data:{breadcrumb:C.SX.Services,parent:R.X}},X={path:":resourceNamespace/:resourceName",component:j,data:{breadcrumb:"{{ resourceName }}",parent:u}};let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.RouterModule.forChild([u,X,_.aA])],d.RouterModule]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.m,S.K,G]]}),n})()}}]);