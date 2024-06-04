"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[965],{3965:(G,s,i)=>{i.r(s),i.d(s,{RoleBingingModule:()=>P});var u=i(1028),m=i(6042),a=i(4793),R=i(3621),p=i(3456),f=i(1459),d=i(1495),E=i(5387),c=i(7575),v=i(5467),I=i(6758),N=i(2722),e=i(4650),B=i(6048),C=i(958),h=i(7347),T=i(6895),L=i(1576),M=i(7623),S=i(8333);function y(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"a",12),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("routerLink",t.getRoleHref()),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.roleBinding.roleRef.name)}}function O(n,o){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"-"),e.\u0275\u0275elementEnd())}function D(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",6)(1,"kd-property")(2,"div",7),e.\u0275\u0275i18n(3,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",9),e.\u0275\u0275template(5,y,2,2,"a",10),e.\u0275\u0275template(6,O,2,0,"span",11),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",t.roleBinding.roleRef),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.roleBinding.roleRef)}}let j=(()=>{class n{constructor(t,r,l,x,U){this.roleBinding_=t,this.actionbar_=r,this.route_=l,this.notifications_=x,this.kdState_=U,this._unsubscribe=new I.x,this.endpoint_=c.wE.resource(c._z.roleBinding,!0),this.isInitialized=!1}ngOnInit(){const t=this.route_.snapshot.params.resourceName,r=this.route_.snapshot.params.resourceNamespace;this.roleBinding_.get(this.endpoint_.detail(),t,r).pipe((0,N.R)(this._unsubscribe)).subscribe(l=>{this.roleBinding=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new d.N("Role Binding",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete(),this.actionbar_.onDetailsLeave.emit()}getRoleHref(){return this.kdState_.href(this.roleBinding.roleRef.kind.toLowerCase(),this.roleBinding.roleRef.name,this.roleBinding.objectMeta.namespace)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(v.p),e.\u0275\u0275directiveInject(d.b),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(E.TF),e.\u0275\u0275directiveInject(B.b))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-role-detail"]],decls:6,vars:6,consts:function(){let o,t;return o="Ressourcen-Informationen",t="Role-Referenzen",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],[3,"subjects","initialized"],["content","","fxLayout","row wrap"],["key",""],t,["value",""],["queryParamsHandling","preserve",3,"routerLink",4,"ngIf"],[4,"ngIf"],["queryParamsHandling","preserve",3,"routerLink"]]},template:function(t,r){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,D,7,2,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-subject-list",5)),2&t&&(e.\u0275\u0275property("initialized",r.isInitialized)("objectMeta",null==r.roleBinding?null:r.roleBinding.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",r.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",r.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("subjects",null==r.roleBinding?null:r.roleBinding.subjects)("initialized",r.isInitialized))},directives:[C.A,h.A,T.NgIf,L.xw,M.s,a.RouterLinkWithHref,S.E],encapsulation:2}),n})();var b=i(5813);const g={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-role-binding-list-state"]],decls:1,vars:0,template:function(t,r){1&t&&e.\u0275\u0275element(0,"kd-role-binding-list")},directives:[b.T],encapsulation:2}),n})(),data:{breadcrumb:p.SX.RoleBindings,parent:f.a}},A={path:":resourceNamespace/:resourceName",component:j,data:{breadcrumb:"{{ resourceName }}",parent:g}};let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[a.RouterModule.forChild([g,A,R.aA])],a.RouterModule]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.m,u.K,z]]}),n})()}}]);