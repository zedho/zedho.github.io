(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"D+Wb":function(t,s,o){"use strict";o.r(s),o.d(s,"ShopModule",(function(){return N}));var i=o("PCNd"),n=o("ofXK"),c=o("tyNb"),e=o("mrSG"),a=o("lJxs"),l=o("fXoL"),b=o("h5Rr"),r=o("gren"),u=o("I/3d"),f=o("/t3+"),d=o("bTqV"),p=o("NFeN");let h=(()=>{class t{constructor(t,s){this.ss=t,this.router=s}ngOnInit(){}logout(){return Object(e.a)(this,void 0,void 0,(function*(){"signout"==(yield this.ss.logOutUser())&&this.router.navigate(["login"])}))}}return t.\u0275fac=function(s){return new(s||t)(l.Lb(b.a),l.Lb(c.h))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-nav-side-bar"]],decls:10,vars:0,consts:[["mat-icon-button","","aria-label","Menu_Icon",1,"example-icon"],[1,"example-spacer"],["mat-icon-button","","aria-label","LogOut",1,"example-icon",3,"click"]],template:function(t,s){1&t&&(l.Rb(0,"mat-toolbar"),l.Rb(1,"button",0),l.Rb(2,"mat-icon"),l.oc(3,"menu"),l.Qb(),l.Qb(),l.Rb(4,"span"),l.oc(5,"Zedho"),l.Qb(),l.Mb(6,"span",1),l.Rb(7,"button",2),l.Yb("click",(function(){return s.logout()})),l.Rb(8,"mat-icon"),l.oc(9,"exit_to_app"),l.Qb(),l.Qb(),l.Qb())},directives:[f.a,d.a,p.a],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{padding:0 2px}"]}),t})();var m=o("Vaw3");function g(t,s){if(1&t&&(l.Rb(0,"span"),l.Rb(1,"div"),l.Mb(2,"img",1),l.Qb(),l.Qb()),2&t){const t=s.$implicit;l.Ab(2),l.dc("src",t,l.hc)}}let v=(()=>{class t{constructor(t,s){this.storage=t,this.spin=s,this.folder="",this.photoList=[]}set setFolder(t){this.folder=t,this.listAllFiles()}ngOnInit(){}listAllFiles(){return Object(e.a)(this,void 0,void 0,(function*(){this.photoList=[],this.storage.ref(this.folder+"/photos").listAll().subscribe(t=>Object(e.a)(this,void 0,void 0,(function*(){let s=t.items;for(let t=0;t<s.length;t++){let o=yield s[t].getDownloadURL();this.photoList.push(o)}console.log("photoList",this.photoList),this.spin.stop()})))}))}}return t.\u0275fac=function(s){return new(s||t)(l.Lb(m.a),l.Lb(r.b))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-photo-list"]],inputs:{setFolder:["folderName","setFolder"]},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"src"]],template:function(t,s){1&t&&l.mc(0,g,3,1,"span",0),2&t&&l.dc("ngForOf",s.photoList)},directives:[n.i],styles:[""]}),t})();function F(t,s){if(1&t){const t=l.Sb();l.Rb(0,"a",3),l.Yb("click",(function(){return l.gc(t),l.ac().back()})),l.oc(1,"back"),l.Qb()}}function y(t,s){if(1&t){const t=l.Sb();l.Rb(0,"div"),l.Rb(1,"span",7),l.Yb("click",(function(){l.gc(t);const o=s.$implicit;return l.ac(3).albumClicked(o.foldername,o.name)})),l.oc(2),l.Qb(),l.Mb(3,"hr"),l.Qb()}if(2&t){const t=s.$implicit;l.Ab(2),l.pc(t.name)}}function I(t,s){if(1&t&&(l.Rb(0,"div"),l.mc(1,y,4,1,"div",6),l.Qb()),2&t){const t=l.ac(2);l.Ab(1),l.dc("ngForOf",t.albumsData)}}function k(t,s){1&t&&(l.Rb(0,"p"),l.oc(1,"No Focused albums available..."),l.Qb())}function R(t,s){if(1&t&&(l.Rb(0,"div"),l.Rb(1,"h1"),l.oc(2,"Your focused albums"),l.Qb(),l.mc(3,I,2,1,"div",4),l.mc(4,k,2,0,"ng-template",null,5,l.nc),l.Qb()),2&t){const t=l.fc(5),s=l.ac();l.Ab(3),l.dc("ngIf",s.albumsData&&s.albumsData.length>0)("ngIfElse",t)}}function A(t,s){if(1&t&&(l.Rb(0,"div",10),l.Mb(1,"app-photo-list",11),l.Qb()),2&t){const t=l.ac(2);l.Ab(1),l.dc("folderName",t.folder)}}function L(t,s){1&t&&l.oc(0,"No Folder Content....")}function Q(t,s){if(1&t&&(l.Rb(0,"div"),l.Rb(1,"h1"),l.oc(2),l.Qb(),l.mc(3,A,2,1,"div",8),l.mc(4,L,1,0,"ng-template",null,9,l.nc),l.Qb()),2&t){const t=l.fc(5),s=l.ac();l.Ab(2),l.qc("",s.clickedAlbumName," Album"),l.Ab(1),l.dc("ngIf",""!=s.folder)("ngIfElse",t)}}const O=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,s,o){this.ss=t,this.spin=s,this.afs=o,this.albumsData=[],this.folder="",this.u={},this.focusFlag=1,this.clickedAlbumName="",this.f()}ngOnInit(){}ngAfterViewInit(){}f(){return Object(e.a)(this,void 0,void 0,(function*(){this.u=yield this.ss.getUser(),console.log([this.ss.shopId,this.u]);let t=yield this.afs.collection("albums",t=>t.where("viewers","array-contains",this.u.phoneNumber));yield t.snapshotChanges().pipe(Object(a.a)(t=>t.map(t=>Object.assign({key:t.payload.doc.id},t.payload.doc.data())))).subscribe(t=>{this.albumsData=t,console.log("albumsData",this.albumsData),this.spin.stop()})}))}albumClicked(t,s){this.spin.start(),this.folder=t,this.clickedAlbumName=s,this.focusFlag=2,console.log("albumClicked",t,this.focusFlag,this.folder)}back(){this.focusFlag=this.focusFlag-1}}return t.\u0275fac=function(s){return new(s||t)(l.Lb(b.a),l.Lb(r.b),l.Lb(u.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-products"]],decls:8,vars:4,consts:[[1,"btn","btn-primary",3,"routerLink"],["class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-primary",3,"click"],[4,"ngIf","ngIfElse"],["noAlbum",""],[4,"ngFor","ngForOf"],[3,"click"],["class","picList",4,"ngIf","ngIfElse"],["noFolderContent",""],[1,"picList"],[3,"folderName"]],template:function(t,s){1&t&&(l.Mb(0,"app-nav-side-bar"),l.Rb(1,"a",0),l.oc(2,"login"),l.Qb(),l.Mb(3,"br"),l.mc(4,F,2,0,"a",1),l.Mb(5,"br"),l.mc(6,R,6,2,"div",2),l.mc(7,Q,6,3,"div",2)),2&t&&(l.Ab(1),l.dc("routerLink","/login"),l.Ab(3),l.dc("ngIf",s.focusFlag>1),l.Ab(2),l.dc("ngIf",1==s.focusFlag),l.Ab(1),l.dc("ngIf",2==s.focusFlag))},directives:[h,c.i,n.j,n.i,v],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(s){return new(s||t)},imports:[[c.j.forChild(O)],c.j]}),t})(),N=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(s){return new(s||t)},imports:[[n.b,w,i.a]]}),t})()}}]);