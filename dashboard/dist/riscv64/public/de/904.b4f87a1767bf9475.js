"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[904],{7904:(Fe,G,a)=>{a.r(G),a.d(G,{SettingsModule:()=>$e});var Q=a(1028),J=a(6042),q=a(7489),R=a.n(q),h=a(6758),e=a(4650);let O=(()=>{class n{constructor(){this.onSettingsChange=new h.x,this.settings_={}}get settings(){return this.settings_}set settings(t){this.settings_=R().extend(this.settings_,t),this.onSettingsChange.next(this.settings_)}reset(){this.settings_={},this.onSettingsChange.next(this.settings_)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var P=a(4793),ee=a(3456),te=a(9646),E=a(2722),ne=a(8505),se=a(262),A=a(5698),oe=a(5595),ie=a(7537),y=a(5467),d=a(5938),f=a(4859);let ae=(()=>{class n{constructor(t){this.dialogRef=t}onNoClick(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.so))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-settings-save-anyway-dialog"]],decls:9,vars:2,consts:function(){let o,t,s,i;return o="Einstellungen wurden seit dem letzten Neuladen ver\xE4ndert",t="Wollen Sie sie trotzdem speichern?",s="Speichern",i="Aktualisieren",[["mat-dialog-title",""],o,t,["mat-button","","color","primary",3,"mat-dialog-close"],s,i]},template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"h2",0),e.\u0275\u0275i18n(1,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"mat-dialog-content"),e.\u0275\u0275i18n(3,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-dialog-actions")(5,"button",3),e.\u0275\u0275i18n(6,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",3),e.\u0275\u0275i18n(8,5),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("mat-dialog-close",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("mat-dialog-close",!1))},directives:[d.uh,d.xY,d.H8,f.lW,d.ZT],encapsulation:2}),n})();var c=a(4006),u=a(6895),b=a(7347),S=a(1576);const le=["*"];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-settings-entry"]],inputs:{key:"key",desc:"desc"},ngContentSelectors:le,decls:6,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center none","fxFlex",""],[1,"kd-muted"]],template:function(t,s){1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",0)(1,"div"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",1),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()(),e.\u0275\u0275projection(5,0,["class","kd-settings-entry-form","fxFlex",""])),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.key),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.desc))},directives:[S.xw,S.Wh,S.yH],encapsulation:2}),n})();var C=a(9549),I=a(284),p=a(2289),re=a(4004),D=a(7575),L=a(7957),v=a(3238),$=a(8167);function _e(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",14),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275property("value",t),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}let ce=(()=>{class n{constructor(t){this.data=t}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.WI))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-settings-add-dialog"]],decls:18,vars:7,consts:function(){let o,t,s,i,l;return o="Add Namespace",t="Provide a namespace name that should be added to the namespace fallback list",s="Namespace",i=" Add ",l="Schlie\xDFen",[["fxFlex","","fxLayout","column"],["mat-dialog-title",""],o,["fxLayout","column",1,"kd-dialog-text"],t,["fxFlex",""],["name","defaultNamespace","placeholder",s,"type","text","matInput","",3,"matAutocomplete"],["namespaceInput",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close"],i,["mat-button","","color","primary",3,"mat-dialog-close"],l,[3,"value"]]},template:function(t,s){if(1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h2",1),e.\u0275\u0275i18n(2,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"mat-dialog-content",3)(4,"div"),e.\u0275\u0275i18n(5,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"mat-form-field",5),e.\u0275\u0275element(7,"input",6,7),e.\u0275\u0275elementStart(9,"mat-autocomplete",null,8),e.\u0275\u0275template(11,_e,2,2,"mat-option",9),e.\u0275\u0275pipe(12,"kdFilterBy"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"mat-dialog-actions")(14,"button",10),e.\u0275\u0275i18n(15,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"button",12),e.\u0275\u0275i18n(17,13),e.\u0275\u0275elementEnd()()()),2&t){const i=e.\u0275\u0275reference(8),l=e.\u0275\u0275reference(10);e.\u0275\u0275advance(7),e.\u0275\u0275property("matAutocomplete",l),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(12,4,s.data.namespaces,i.value)),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",0===(null==i||null==i.value?null:i.value.length))("mat-dialog-close",i.value)}},directives:[S.yH,S.xw,d.uh,d.xY,C.KE,I.Nt,L.ZL,L.XC,u.NgForOf,v.ey,d.H8,f.lW,d.ZT],pipes:[$.R],encapsulation:2}),n})();var F=a(6338),x=a(7392),de=a(4850);function ge(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-list-item")(1,"div",12),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",13),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().remove(l)})("focus",function(i){return i.stopPropagation()}),e.\u0275\u0275elementStart(4,"mat-icon"),e.\u0275\u0275text(5,"close"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(6,"mat-divider"),e.\u0275\u0275elementEnd()}if(2&n){const t=o.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t)}}function me(n,o){1&n&&(e.\u0275\u0275elementStart(0,"mat-list-item"),e.\u0275\u0275i18n(1,14),e.\u0275\u0275elementEnd())}let Se=(()=>{class n{constructor(t){this.data=t,this.namespaces=[],this.namespaces=Array.from(t.namespaces)}remove(t){this.namespaces.splice(this.namespaces.indexOf(t),1)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.WI))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-settings-edit-dialog"]],decls:14,vars:3,consts:function(){let o,t,s,i,l;return o="Edit Namespace List",t="Remove namespaces from the list and confirm to save the changes.",s="Bearbeiten",i="Schlie\xDFen",l="No namespaces selected",[["fxFlex","","fxLayout","column"],["mat-dialog-title",""],o,["fxLayout","column",1,"kd-dialog-text"],t,[4,"ngFor","ngForOf"],[4,"ngIf"],["fxLayoutAlign","space-between center",2,"padding","16px 0"],["mat-raised-button","","color","primary",3,"mat-dialog-close"],s,["mat-button","","color","primary",3,"mat-dialog-close"],i,["fxFlex","100"],["mat-icon-button","",3,"click","focus"],l]},template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h2",1),e.\u0275\u0275i18n(2,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"mat-dialog-content",3)(4,"div"),e.\u0275\u0275i18n(5,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"mat-list"),e.\u0275\u0275template(7,ge,7,1,"mat-list-item",5),e.\u0275\u0275template(8,me,2,0,"mat-list-item",6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"mat-dialog-actions",7)(10,"button",8),e.\u0275\u0275i18n(11,9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"button",10),e.\u0275\u0275i18n(13,11),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",s.namespaces),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",0===s.namespaces.length),e.\u0275\u0275advance(2),e.\u0275\u0275property("mat-dialog-close",s.namespaces))},directives:[S.yH,S.xw,d.uh,d.xY,F.i$,u.NgForOf,F.Tg,f.lW,x.Hw,de.d,u.NgIf,d.H8,S.Wh,d.ZT],encapsulation:2}),n})();var X=a(7331),Ne=a(266);function ue(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275property("value",t),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}function pe(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-chip",18),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275property("matTooltip",t)("selectable",!1)("removable",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}function Ee(n,o){1&n&&(e.\u0275\u0275elementStart(0,"mat-chip",19),e.\u0275\u0275i18n(1,20),e.\u0275\u0275elementEnd()),2&n&&e.\u0275\u0275property("disabled",!0)}function Te(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-chip",21),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("disabled",!0),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("+ ",t.invisibleCount,"")}}var T=(()=>{return(n=T||(T={}))[n.XLarge=5]="XLarge",n[n.Large=3]="Large",n[n.Medium=2]="Medium",n[n.Small=2]="Small",T;var n})(),N=(()=>{return(n=N||(N={})).DefaultNamespace="defaultNamespace",n.FallbackList="fallbackList",N;var n})();let fe=(()=>{class n{constructor(t,s,i,l,r){this.namespaceService_=t,this.settingsHelperService_=s,this.dialog_=i,this.breakpointObserver_=l,this.builder_=r,this.Controls=N,this.namespaces=[],this.visibleNamespaces=0,this.endpoint_=D.wE.resource(D._z.namespace).list(),this.unsubscribe_=new h.x,this.visibleNamespacesMap=[[p.u3.XLarge,T.XLarge],[p.u3.Large,T.Large],[p.u3.Medium,T.Medium],[p.u3.Small,T.Small]]}get namespaceFallbackList_(){return this.settings_.namespaceFallbackList?this.settings_.namespaceFallbackList.filter(t=>t):[]}get formArrayNamespaceFallbackList_(){const t=this.form.get(N.FallbackList).value;return t?t.filter(s=>s):[]}get invisibleCount(){return this.settings_.namespaceFallbackList?this.settings_.namespaceFallbackList.length-this.visibleNamespaces:0}ngOnInit(){this.settings_=this.settingsHelperService_.settings,this.form=this.builder_.group({[N.DefaultNamespace]:this.builder_.control(""),[N.FallbackList]:this.builder_.array([])}),this.namespaceService_.get(this.endpoint_).pipe((0,re.U)(t=>t.namespaces.map(s=>s.objectMeta.name))).pipe((0,E.R)(this.unsubscribe_)).subscribe(t=>this.namespaces=t),this.breakpointObserver_.observe([p.u3.Small,p.u3.Medium,p.u3.Large,p.u3.XLarge]).pipe((0,E.R)(this.unsubscribe_)).subscribe(t=>{const s=this.visibleNamespacesMap.find(i=>t.breakpoints[i[0]]);this.visibleNamespaces=s?s[1]:T.Small}),this.form.valueChanges.pipe((0,E.R)(this.unsubscribe_)).subscribe(this.onFormChange_.bind(this)),this.settingsHelperService_.onSettingsChange.pipe((0,E.R)(this.unsubscribe_)).subscribe(this.onSettingsChange_.bind(this))}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}add(){const t={data:{namespaces:this.namespaces.filter(s=>!this.settingsHelperService_.settings.namespaceFallbackList.includes(s))}};this.dialog_.open(ce,t).afterClosed().pipe((0,A.q)(1)).subscribe(s=>this.containsNamespace_(s)?null:this.addNamespace_(s))}edit(){this.dialog_.open(Se,{data:{namespaces:this.namespaceFallbackList_}}).afterClosed().pipe((0,A.q)(1)).subscribe(s=>{s&&(this.settingsHelperService_.settings={namespaceFallbackList:s})})}writeValue(t){!t||this.form.setValue(t)}registerOnChange(t){this.form.valueChanges.pipe((0,E.R)(this.unsubscribe_)).subscribe(t)}registerOnTouched(t){this.form.statusChanges.pipe((0,E.R)(this.unsubscribe_)).subscribe(t)}addNamespace_(t){this.form.get(N.FallbackList).push(this.builder_.control(t))}containsNamespace_(t){return!t||this.form.get(N.FallbackList).controls.map(s=>s.value).indexOf(t)>-1}onFormChange_(){this.settingsHelperService_.settings={defaultNamespace:this.form.get(N.DefaultNamespace).value,namespaceFallbackList:this.formArrayNamespaceFallbackList_}}onSettingsChange_(t){this.settings_=t,this.form.get(N.DefaultNamespace).setValue(this.settings_.defaultNamespace,{emitEvent:!1}),this.form.get(N.FallbackList).controls=this.namespaceFallbackList_.map(s=>this.builder_.control("")),this.form.get(N.FallbackList).reset(this.namespaceFallbackList_,{emitEvent:!1})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(y.z),e.\u0275\u0275directiveInject(O),e.\u0275\u0275directiveInject(d.uw),e.\u0275\u0275directiveInject(p.Yg),e.\u0275\u0275directiveInject(c.FormBuilder))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-settings"]],features:[e.\u0275\u0275ProvidersFeature([{provide:c.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>n),multi:!0}])],decls:24,vars:14,consts:function(){let o,t,s,i,l,r;return o="Default namespace",t="Namespace that should be selected by default after logging in.",s="Namespace",i="Namespace fallback list",l="List of namespaces that should be presented to user without namespace list privileges.",r="Add namespaces...",[[3,"formGroup"],["key",o,"desc",t],["fxFlex",""],["formControlName","defaultNamespace","name","defaultNamespace","placeholder",s,"type","text","matInput","",3,"matAutocomplete"],["namespaceInput",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["key",i,"desc",l],["fxFlex","100","fxLayout","row"],["fxFlex","80","fxLayoutAlign"," center",1,"kd-namespace-chip-list",3,"formArrayName"],["style","max-width: 100px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block",3,"matTooltip","selectable","removable",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["fxFlex","","fxLayoutAlign"," center",3,"disabled",4,"ngIf"],["fxFlex","20","fxLayoutAlign","end"],["mat-icon-button","",2,"margin-right","0",3,"click"],[2,"font-size","20px"],["mat-icon-button","",3,"click"],[3,"value"],[2,"max-width","100px","text-overflow","ellipsis","white-space","nowrap","overflow","hidden","display","block",3,"matTooltip","selectable","removable"],[3,"disabled"],r,["fxFlex","","fxLayoutAlign"," center",3,"disabled"]]},template:function(t,s){if(1&t&&(e.\u0275\u0275elementStart(0,"form",0)(1,"kd-settings-entry",1)(2,"mat-form-field",2),e.\u0275\u0275element(3,"input",3,4),e.\u0275\u0275elementStart(5,"mat-autocomplete",null,5),e.\u0275\u0275template(7,ue,2,2,"mat-option",6),e.\u0275\u0275pipe(8,"kdFilterBy"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(9,"kd-settings-entry",7)(10,"mat-form-field",2)(11,"div",8)(12,"mat-chip-list",9),e.\u0275\u0275template(13,pe,2,4,"mat-chip",10),e.\u0275\u0275pipe(14,"slice"),e.\u0275\u0275template(15,Ee,2,1,"mat-chip",11),e.\u0275\u0275template(16,Te,2,2,"mat-chip",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",13)(18,"button",14),e.\u0275\u0275listener("click",function(){return s.edit()}),e.\u0275\u0275elementStart(19,"mat-icon",15),e.\u0275\u0275text(20,"edit"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"button",16),e.\u0275\u0275listener("click",function(){return s.add()}),e.\u0275\u0275elementStart(22,"mat-icon"),e.\u0275\u0275text(23,"add"),e.\u0275\u0275elementEnd()()()()()()()),2&t){const i=e.\u0275\u0275reference(4),l=e.\u0275\u0275reference(6);e.\u0275\u0275property("formGroup",s.form),e.\u0275\u0275advance(3),e.\u0275\u0275property("matAutocomplete",l),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind2(8,7,s.namespaces,i.value)),e.\u0275\u0275advance(5),e.\u0275\u0275property("formArrayName",s.Controls.FallbackList),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind3(14,10,s.form.get(s.Controls.FallbackList).value,0,s.visibleNamespaces)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",0===s.form.get(s.Controls.FallbackList).value.length),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",s.invisibleCount>0)}},directives:[c.\u0275NgNoValidate,c.NgControlStatusGroup,c.FormGroupDirective,M,C.KE,S.yH,c.DefaultValueAccessor,I.Nt,L.ZL,c.NgControlStatus,c.FormControlName,L.XC,u.NgForOf,v.ey,S.xw,X.qn,S.Wh,c.FormArrayName,X.HS,Ne.gM,u.NgIf,f.lW,x.Hw],pipes:[$.R,u.SlicePipe],styles:["kd-settings-entry[_ngcontent-%COMP%]{min-height:56px}"]}),n})();var Ae=a(7314),Ce=a(455);function Le(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"kd-card",1)(1,"div",2),e.\u0275\u0275i18n(2,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",4)(4,"p"),e.\u0275\u0275i18n(5,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"br"),e.\u0275\u0275elementStart(7,"form",6)(8,"kd-settings-entry",7)(9,"mat-form-field",8),e.\u0275\u0275element(10,"input",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(11,"kd-namespace-settings",10),e.\u0275\u0275elementStart(12,"kd-settings-entry",11)(13,"div",8),e.\u0275\u0275element(14,"mat-slider",12),e.\u0275\u0275elementStart(15,"div",13),e.\u0275\u0275text(16),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(17,"kd-settings-entry",14)(18,"div",8),e.\u0275\u0275element(19,"mat-slider",15),e.\u0275\u0275elementStart(20,"div",13),e.\u0275\u0275text(21),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(22,"kd-settings-entry",16)(23,"div",8),e.\u0275\u0275element(24,"mat-slider",15),e.\u0275\u0275elementStart(25,"span",13),e.\u0275\u0275text(26),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(27,"kd-settings-entry",17)(28,"div",8),e.\u0275\u0275element(29,"mat-slider",18),e.\u0275\u0275elementStart(30,"span",13),e.\u0275\u0275text(31),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(32,"kd-settings-entry",19)(33,"div",20),e.\u0275\u0275element(34,"mat-slide-toggle",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(35,"br")(36,"br"),e.\u0275\u0275elementStart(37,"button",22),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().save()}),e.\u0275\u0275i18n(38,23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"button",24),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().reload()}),e.\u0275\u0275i18n(40,25),e.\u0275\u0275elementEnd()()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("initialized",t.isInitialized())("expandable",!0),e.\u0275\u0275advance(7),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControlName",t.Controls.ClusterName),e.\u0275\u0275advance(1),e.\u0275\u0275property("formControlName",t.Controls.NamespaceSettings),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControlName",t.Controls.ItemsPerPage),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.settings.itemsPerPage),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControlName",t.Controls.LabelsLimit),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.settings.labelsLimit),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControlName",t.Controls.LogsAutorefreshInterval),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.settings.logsAutoRefreshTimeInterval," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControlName",t.Controls.ResourceAutorefreshInterval),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",t.settings.resourceAutoRefreshTimeInterval," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControlName",t.Controls.DisableAccessDeniedNotification),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",!t.canSave())}}var _=(()=>{return(n=_||(_={})).ClusterName="clusterName",n.ItemsPerPage="itemsPerPage",n.LabelsLimit="labelsLimit",n.LogsAutorefreshInterval="logsAutorefreshInterval",n.ResourceAutorefreshInterval="resourceAutorefreshInterval",n.DisableAccessDeniedNotification="disableAccessDeniedNotification",n.NamespaceSettings="namespaceSettings",_;var n})();let he=(()=>{class n{constructor(t,s,i,l,r,g){this.settingsService_=t,this.settingsHelperService_=s,this.namespaceService_=i,this.dialog_=l,this.title_=r,this.builder_=g,this.Controls=_,this.settings={},this.hasLoadError=!1,this.concurrentChangeErr_="settings changed since last reload",this.unsubscribe_=new h.x}get externalSettings_(){const t={};return t.itemsPerPage=this.settingsService_.getItemsPerPage(),t.labelsLimit=this.settingsService_.getLabelsLimit(),t.clusterName=this.settingsService_.getClusterName(),t.logsAutoRefreshTimeInterval=this.settingsService_.getLogsAutoRefreshTimeInterval(),t.resourceAutoRefreshTimeInterval=this.settingsService_.getResourceAutoRefreshTimeInterval(),t.disableAccessDeniedNotifications=this.settingsService_.getDisableAccessDeniedNotifications(),t.defaultNamespace=this.settingsService_.getDefaultNamespace(),t.namespaceFallbackList=this.settingsService_.getNamespaceFallbackList(),t}ngOnInit(){this.form=this.builder_.group({[_.ClusterName]:this.builder_.control(""),[_.ItemsPerPage]:this.builder_.control(0),[_.LabelsLimit]:this.builder_.control(0),[_.LogsAutorefreshInterval]:this.builder_.control(0),[_.ResourceAutorefreshInterval]:this.builder_.control(0),[_.DisableAccessDeniedNotification]:this.builder_.control(!1),[_.NamespaceSettings]:this.builder_.control("")}),this.load_(),this.form.valueChanges.pipe((0,E.R)(this.unsubscribe_)).subscribe(this.onFormChange_.bind(this)),this.settingsHelperService_.onSettingsChange.pipe((0,E.R)(this.unsubscribe_)).subscribe(t=>this.settings=t)}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}isInitialized(){return this.settingsService_.isInitialized()}reload(){this.form.reset(),this.settingsHelperService_.reset(),this.load_()}canSave(){return!R().isEqual(this.settings,this.externalSettings_)}save(){this.settingsService_.save(this.settings).pipe((0,ne.b)(t=>{this.load_(),this.title_.update(),this.settingsService_.onSettingsUpdate.next()})).pipe((0,se.K)(this.onSaveError_.bind(this))).pipe((0,A.q)(1)).subscribe(this.onSave_.bind(this))}onSave_(t){!0===t&&this.save(),this.reload()}onSaveError_(t){return t&&-1!==t.error.indexOf(this.concurrentChangeErr_)?this.dialog_.open(ae,{width:"420px"}).afterClosed():(0,te.of)(!1)}load_(){this.settingsService_.canI().pipe((0,A.q)(1)).subscribe(t=>this.hasLoadError=!t),this.settingsService_.load(this.onLoad_.bind(this),this.onLoadError_.bind(this))}onLoad_(){this.settings=this.externalSettings_,this.settingsHelperService_.settings=this.settings,this.form.get(_.ItemsPerPage).setValue(this.settings.itemsPerPage,{emitEvent:!1}),this.form.get(_.LabelsLimit).setValue(this.settings.labelsLimit,{emitEvent:!1}),this.form.get(_.ClusterName).setValue(this.settings.clusterName,{emitEvent:!1}),this.form.get(_.LogsAutorefreshInterval).setValue(this.settings.logsAutoRefreshTimeInterval,{emitEvent:!1}),this.form.get(_.ResourceAutorefreshInterval).setValue(this.settings.resourceAutoRefreshTimeInterval,{emitEvent:!1}),this.form.get(_.DisableAccessDeniedNotification).setValue(this.settings.disableAccessDeniedNotifications,{emitEvent:!1})}onLoadError_(){this.hasLoadError=!0}onFormChange_(){this.settingsHelperService_.settings={itemsPerPage:this.form.get(_.ItemsPerPage).value,clusterName:this.form.get(_.ClusterName).value,disableAccessDeniedNotifications:this.form.get(_.DisableAccessDeniedNotification).value,labelsLimit:this.form.get(_.LabelsLimit).value,logsAutoRefreshTimeInterval:this.form.get(_.LogsAutorefreshInterval).value,resourceAutoRefreshTimeInterval:this.form.get(_.ResourceAutorefreshInterval).value}}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(oe.o),e.\u0275\u0275directiveInject(O),e.\u0275\u0275directiveInject(y.z),e.\u0275\u0275directiveInject(d.uw),e.\u0275\u0275directiveInject(ie.y),e.\u0275\u0275directiveInject(c.FormBuilder))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-global-settings"]],decls:1,vars:1,consts:function(){let o,t,s,i,l,r,g,z,w,V,H,j,Y,W,K,U,Z;return o="Global settings",t="Global settings are stored in config map, so all of them are applied for every instance of the app.",s="Name des Clusters",i="Der Name des Clusters taucht im Titel des Browser-Fensters auf, wenn er festgelegt wurde.",l="Name des Clusters",r="Elemente pro Seite",g="Maximale Anzahl an Eintr\xE4gen, die in jeder Listenansicht zeitgleich sichtbar sind.",z="Labels-Limit",w="Maximale Anzahl an Labels, die standardm\xE4\xDFig in den meisten Ansichten zu sehen sind.",V="Intervall der automatischen Aktualisierung der Logs",H="Anzahl Sekunden zwischen den automatischen Aktualisierungen der Logs.",j="Intervall der automatischen Aktualisierung von Ressourcen",Y="Anzahl Sekunden zwischen der automatischen Aktualisierung jeder Ressource. Ein Wert von 0 deaktiviert die automatische Aktualisierung.",W="Zugriff verweigert Benachrichtigungen deaktivieren",K="Verbirgt alle Zugriff verweigert Benachrichtigungen im Benachrichtigungsbereich.",U="Speichern",Z="Reload",[[3,"initialized","expandable",4,"ngIf"],[3,"initialized","expandable"],["title",""],o,["content",""],t,[3,"formGroup"],["key",s,"desc",i],["fxFlex",""],["name","clusterName","placeholder",l,"type","text","matInput","",3,"formControlName"],[3,"formControlName"],["key",r,"desc",g],["color","primary","min","5","max","50","step","5","fxFlex","",3,"formControlName"],["fxFlexAlign"," center",1,"kd-slider-value","kd-muted"],["key",z,"desc",w],["color","primary","min","1","max","10","step","1","fxFlex","",3,"formControlName"],["key",V,"desc",H],["key",j,"desc",Y],["color","primary","min","0","max","60","step","5","fxFlex","",3,"formControlName"],["key",W,"desc",K],["fxFlex","","fxLayoutAlign"," center"],["color","primary","name","disableAccessDeniedNotifications",3,"formControlName"],["color","primary","mat-raised-button","",3,"disabled","click"],U,["type","button","color","primary","mat-raised-button","",3,"click"],Z]},template:function(t,s){1&t&&e.\u0275\u0275template(0,Le,41,15,"kd-card",0),2&t&&e.\u0275\u0275property("ngIf",!s.hasLoadError)},directives:[u.NgIf,b.A,c.\u0275NgNoValidate,c.NgControlStatusGroup,c.FormGroupDirective,M,C.KE,S.yH,I.Nt,c.DefaultValueAccessor,c.NgControlStatus,c.FormControlName,fe,Ae.pH,S.XD,S.Wh,Ce.Rr,f.lW],styles:["kd-settings-entry[_ngcontent-%COMP%]{min-height:56px}"]}),n})();var k=a(4385),B=a(1324),Oe=a(3733),Me=a(833),Ie=a(4774),ve=a(5657);function Ge(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275property("value",t.name),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.displayName," ")}}function Re(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-option",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit;e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.label," ")}}function Pe(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"kd-settings-entry",11)(1,"mat-form-field",6)(2,"mat-select",12),e.\u0275\u0275listener("ngModelChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().onLanguageSelected(i)})("ngModelChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().selectedLanguage=i}),e.\u0275\u0275template(3,Re,2,2,"mat-option",9),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngModel",t.selectedLanguage),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.languages)}}let ye=(()=>{class n{constructor(t,s,i,l,r){this.settings_=t,this.theme_=s,this.cookies_=i,this.document_=l,this.appConfig_=r,this.settings={},this.languages=[]}ngOnInit(){this.settings=this.settings_.get(),this.languages=this.appConfig_.supportedLanguages,this.selectedLanguage=this.cookies_.get(this.appConfig_.languageCookieName)||this.appConfig_.defaultLanguage,this.themes=this.theme_.themes,this.selectedTheme=this.theme_.theme,this.systemTheme=B.f.SystemTheme}onThemeChange(){this.settings.theme=this.selectedTheme,this.settings_.handleThemeChange(this.settings.theme)}onLanguageSelected(t){this.cookies_.set(this.appConfig_.languageCookieName,t),this.document_.location.reload()}isProdMode(){return Oe.N.production}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(Ie.G),e.\u0275\u0275directiveInject(B.f),e.\u0275\u0275directiveInject(ve.N),e.\u0275\u0275directiveInject(u.DOCUMENT),e.\u0275\u0275directiveInject(Me.ED))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-local-settings"]],viewQuery:function(t,s){if(1&t&&e.\u0275\u0275viewQuery(k.gD,7),2&t){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(s.select_=i.first)}},decls:14,vars:5,consts:function(){let o,t,s,i,l,r;return o="Local settings",t=" Local settings are stored in the browser cookies, so they are not synchronized between multiple devices. Changes are applied automatically on every change. ",s="Theme",i="Choose color theme of the dashboard",l="Sprache",r="\xC4ndern Sie die Sprache des Dashboards",[[3,"expandable"],["title",""],o,["content",""],t,["key",s,"desc",i],["fxFlex",""],["fxFlex","",3,"value","valueChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["key",l,"desc",r,4,"ngIf"],["key",l,"desc",r],[3,"ngModel","ngModelChange"]]},template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"kd-card",0)(1,"div",1),e.\u0275\u0275i18n(2,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3)(4,"p"),e.\u0275\u0275i18n(5,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"br"),e.\u0275\u0275elementStart(7,"kd-settings-entry",5)(8,"mat-form-field",6)(9,"mat-select",7),e.\u0275\u0275listener("valueChange",function(l){return s.selectedTheme=l})("valueChange",function(){return s.onThemeChange()}),e.\u0275\u0275elementStart(10,"mat-option",8),e.\u0275\u0275text(11,"System"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(12,Ge,2,2,"mat-option",9),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(13,Pe,4,2,"kd-settings-entry",10),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275property("expandable",!0),e.\u0275\u0275advance(9),e.\u0275\u0275property("value",s.selectedTheme),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",s.systemTheme),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",s.themes),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",s.isProdMode()))},directives:[b.A,M,C.KE,S.yH,k.gD,v.ey,u.NgForOf,u.NgIf,c.NgControlStatus,c.NgModel],styles:[".mat-button-toggle-group[_ngcontent-%COMP%]{border:0}.mat-button-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]{border-radius:4px;margin-right:8px}"]}),n})();const be={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-settings"]],decls:2,vars:0,template:function(t,s){1&t&&e.\u0275\u0275element(0,"kd-global-settings")(1,"kd-local-settings")},directives:[he,ye],encapsulation:2}),n})(),data:{breadcrumb:ee.SX.Settings}};let De=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[P.RouterModule.forChild([be])],P.RouterModule]}),n})(),$e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({providers:[O],imports:[[J.m,Q.K,De]]}),n})()}}]);