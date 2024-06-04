"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[268],{8268:(H,p,o)=>{o.r(p),o.d(p,{OverviewModule:()=>B});var m=o(1028),v=o(6042),c=o(4793),u=o(3456),s=o(1058),_=o(2654),e=o(4650),g=o(1256),h=o(6895),E=o(7118),O=o(6348),f=o(1187),C=o(1680),S=o(5526),T=o(9791),y=o(3881),N=o(6496),R=o(2252),M=o(2815),k=o(8608),L=o(8190),P=o(7243),I=o(4789),$=o(354),V=o(3660),U=o(8864),w=o(4593),A=o(7757),W=o(1433),b=o(2158),F=o(5813),G=o(5594),j=o(4834),D=o(4003);function X(l,a){if(1&l&&e.\u0275\u0275element(0,"kd-workload-statuses",10),2&l){const i=e.\u0275\u0275nextContext();e.\u0275\u0275property("resourcesRatio",i.resourcesRatio)}}const z={path:"",component:(()=>{class l extends _.v{hasCluster(){return this.isGroupVisible(s.l.cluster)}hasWorkloads(){return this.isGroupVisible(s.l.workloads)}hasDiscovery(){return this.isGroupVisible(s.l.discovery)}hasConfig(){return this.isGroupVisible(s.l.config)}showWorkloadStatuses(){return 0!==Object.values(this.resourcesRatio).reduce((i,t)=>i+t.length,0)}}return l.\u0275fac=function(){let a;return function(t){return(a||(a=e.\u0275\u0275getInheritedFactory(l)))(t||l)}}(),l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["kd-overview"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:40,vars:32,consts:function(){let a,i,t,r,n;return a="Workloads",i="Service",t="Config and Storage",r="Secrets",n="Cluster",[[1,"kd-card-group-header","kd-muted",3,"hidden"],a,[3,"metrics"],[3,"resourcesRatio",4,"ngIf"],[3,"hideable","onchange"],i,t,["title",r,3,"hideable","onchange"],[3,"hidden"],n,[3,"resourcesRatio"]]},template:function(i,t){1&i&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275i18n(1,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div"),e.\u0275\u0275element(3,"kd-graph-metrics",2),e.\u0275\u0275template(4,X,1,1,"kd-workload-statuses",3),e.\u0275\u0275elementStart(5,"kd-cron-job-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"kd-daemon-set-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"kd-deployment-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"kd-job-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"kd-pod-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"kd-replica-set-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"kd-replication-controller-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"kd-stateful-set-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"div",0),e.\u0275\u0275i18n(14,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div")(16,"kd-ingress-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"kd-ingress-class-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"kd-service-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(19,"div",0),e.\u0275\u0275i18n(20,6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div")(22,"kd-config-map-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"kd-persistent-volume-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"kd-secret-list",7),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"kd-storage-class-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(26,"div",8)(27,"div",0),e.\u0275\u0275i18n(28,9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div")(30,"kd-cluster-role-binding-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"kd-cluster-role-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"kd-namespace-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"kd-network-policy-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"kd-node-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"kd-persistent-volume-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"kd-role-binding-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"kd-role-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"kd-service-account-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(39,"kd-zero-state",8)),2&i&&(e.\u0275\u0275property("hidden",!t.hasWorkloads()),e.\u0275\u0275advance(3),e.\u0275\u0275property("metrics",t.cumulativeMetrics),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.showWorkloadStatuses()),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasDiscovery()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasConfig()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",t.shouldShowZeroState()),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasCluster()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.shouldShowZeroState()))},directives:[g.y,h.NgIf,E.H,O.z,f.w,C.M,S.Q,T.x,y.$,N._,R.e,M._,k.j,L.$,P.d,I.p,$.A,V.c,U.o,w.u,A.q,W.j,b.v,F.T,G.C,j.S,D.f],encapsulation:2}),l})(),data:{breadcrumb:u.SX.Overview}};let Z=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.RouterModule.forChild([z])],c.RouterModule]}),l})(),B=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=e.\u0275\u0275defineInjector({imports:[[v.m,m.K,Z]]}),l})()}}]);