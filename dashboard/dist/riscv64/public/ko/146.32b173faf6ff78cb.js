"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[146],{1146:(H,m,i)=>{i.r(m),i.d(m,{NamespaceModule:()=>B});var C=i(1028),f=i(6042),s=i(4793),v=i(3456),M=i(1459),p=i(6758),c=i(2722),R=i(5908),e=i(4650),r=i(1495),d=i(6895),u=i(1576),T=i(4859),h=i(266),A=i(7392),I=i(4865);function S(n,o){if(1&n&&e.\u0275\u0275element(0,"kd-actionbar-detail-actions",4),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("objectMeta",t.resourceMeta.objectMeta)("typeMeta",t.resourceMeta.typeMeta)("displayName",t.resourceMeta.displayName)}}function b(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1)(1,"button",2),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().onClick()}),e.\u0275\u0275elementStart(2,"mat-icon"),e.\u0275\u0275text(3,"description"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(4,S,1,3,"kd-actionbar-detail-actions",3),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",t.isInitialized)}}let g=(()=>{class n{constructor(t,a){this.actionbar_=t,this.router_=a,this.isInitialized=!1,this.isVisible=!1,this.unsubscribe_=new p.x}ngOnInit(){this.actionbar_.onInit.pipe((0,c.R)(this.unsubscribe_)).subscribe(t=>{this.resourceMeta=t,this.isInitialized=!0,this.isVisible=!0}),this.actionbar_.onDetailsLeave.pipe((0,c.R)(this.unsubscribe_)).subscribe(()=>this.isVisible=!1)}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}onClick(){this.router_.navigate(["workloads"],{queryParamsHandling:"merge",queryParams:{[R.x]:this.resourceMeta.objectMeta.name}})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(r.b),e.\u0275\u0275directiveInject(s.Router))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:function(){let o;return o="Go to namespace",[["fxLayout","row",4,"ngIf"],["fxLayout","row"],["mat-icon-button","","color","accent","matTooltip",o,1,"kd-toolbar-action",3,"click"],[3,"objectMeta","typeMeta","displayName",4,"ngIf"],[3,"objectMeta","typeMeta","displayName"]]},template:function(t,a){1&t&&e.\u0275\u0275template(0,b,5,1,"div",0),2&t&&e.\u0275\u0275property("ngIf",a.isVisible)},directives:[d.NgIf,u.xw,T.lW,h.gM,A.Hw,I.$],encapsulation:2}),n})();var y=i(5387),l=i(7575),L=i(5467),_=i(958),O=i(7347),P=i(7623),x=i(5198),z=i(3663),D=i(2958);function j(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",10),e.\u0275\u0275i18n(2,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.namespace?null:t.namespace.phase)}}function $(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275template(1,j,5,1,"kd-property",9),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.namespace?null:t.namespace.phase)}}let U=(()=>{class n{constructor(t,a,N,k){this.namespace_=t,this.actionbar_=a,this.activatedRoute_=N,this.notifications_=k,this.endpoint_=l.wE.resource(l._z.namespace),this.unsubscribe_=new p.x,this.isInitialized=!1}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName;this.eventListEndpoint=this.endpoint_.child(t,l._z.event),this.namespace_.get(this.endpoint_.detail(),t).pipe((0,c.R)(this.unsubscribe_)).subscribe(a=>{this.namespace=a,this.notifications_.pushErrors(a.errors),this.actionbar_.onInit.emit(new r.N("Namespace",a.objectMeta,a.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(L.z),e.\u0275\u0275directiveInject(r.b),e.\u0275\u0275directiveInject(s.ActivatedRoute),e.\u0275\u0275directiveInject(y.TF))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-detail"]],decls:8,vars:9,consts:function(){let o,t;return o="Resource information",t="\uC0C1\uD0DC",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],[3,"quotas","initialized"],[3,"limits","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],[4,"ngIf"],["key",""],t,["value",""]]},template:function(t,a){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,$,2,1,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-resource-quota-list",5)(6,"kd-resource-limit-list",6)(7,"kd-event-list",7)),2&t&&(e.\u0275\u0275property("initialized",a.isInitialized)("objectMeta",null==a.namespace?null:a.namespace.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",a.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",a.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("quotas",null==a.namespace||null==a.namespace.resourceQuotaList?null:a.namespace.resourceQuotaList.items)("initialized",a.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("limits",null==a.namespace?null:a.namespace.resourceLimits)("initialized",a.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",a.eventListEndpoint))},directives:[_.A,O.A,d.NgIf,u.xw,P.s,x.R,z.i,D.X],encapsulation:2}),n})();var F=i(7757);const E={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-list-view"]],decls:1,vars:0,template:function(t,a){1&t&&e.\u0275\u0275element(0,"kd-namespace-list")},directives:[F.q],encapsulation:2}),n})(),data:{breadcrumb:v.SX.Namespaces,parent:M.a}},G={path:":resourceName",component:U,data:{breadcrumb:"{{ resourceName }}",parent:E}},X={path:"",component:g,outlet:"actionbar"};let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.RouterModule.forChild([E,G,X])],s.RouterModule]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[f.m,C.K,V]]}),n})()}}]);