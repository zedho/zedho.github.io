(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"D+Wb":function(t,c,i){"use strict";i.r(c),i.d(c,"ShopModule",(function(){return E}));var n=i("PCNd"),e=i("ofXK"),s=i("tyNb"),o=i("mrSG"),l=i("lJxs"),a=i("fXoL"),b=i("h5Rr"),r=i("gren"),u=i("I/3d"),d=i("/t3+"),f=i("bTqV"),m=i("NFeN");let p=(()=>{class t{constructor(t,c){this.ss=t,this.router=c}ngOnInit(){}logout(){return Object(o.a)(this,void 0,void 0,(function*(){"signout"==(yield this.ss.logOutUser())&&this.router.navigate(["login"])}))}}return t.\u0275fac=function(c){return new(c||t)(a.Lb(b.a),a.Lb(s.h))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-nav-side-bar"]],decls:10,vars:0,consts:[["mat-icon-button","","aria-label","Menu_Icon",1,"example-icon"],[1,"example-spacer"],["mat-icon-button","","aria-label","LogOut",1,"example-icon",3,"click"]],template:function(t,c){1&t&&(a.Rb(0,"mat-toolbar"),a.Rb(1,"button",0),a.Rb(2,"mat-icon"),a.oc(3,"menu"),a.Qb(),a.Qb(),a.Rb(4,"span"),a.oc(5,"Zedho"),a.Qb(),a.Mb(6,"span",1),a.Rb(7,"button",2),a.Yb("click",(function(){return c.logout()})),a.Rb(8,"mat-icon"),a.oc(9,"exit_to_app"),a.Qb(),a.Qb(),a.Qb())},directives:[d.a,f.a,m.a],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{padding:0 2px}"]}),t})();var h=i("Vaw3");function g(t,c){if(1&t&&(a.Rb(0,"span"),a.Rb(1,"div"),a.Mb(2,"img",1),a.Qb(),a.Qb()),2&t){const t=c.$implicit;a.Ab(2),a.dc("src",t,a.hc)}}let v=(()=>{class t{constructor(t,c){this.storage=t,this.spin=c,this.folder="",this.photoList=[]}set setFolder(t){this.folder=t,this.listAllFiles()}ngOnInit(){}listAllFiles(){return Object(o.a)(this,void 0,void 0,(function*(){this.photoList=[],this.storage.ref(this.folder+"/photos").listAll().subscribe(t=>Object(o.a)(this,void 0,void 0,(function*(){let c=t.items;for(let t=0;t<c.length;t++){let i=yield c[t].getDownloadURL();this.photoList.push(i)}console.log("photoList",this.photoList),this.spin.stop()})))}))}}return t.\u0275fac=function(c){return new(c||t)(a.Lb(h.a),a.Lb(r.b))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-photo-list"]],inputs:{setFolder:["folderName","setFolder"]},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[2,"width","100vw",3,"src"]],template:function(t,c){1&t&&a.mc(0,g,3,1,"span",0),2&t&&a.dc("ngForOf",c.photoList)},directives:[e.i],styles:[""]}),t})(),A=(()=>{class t{constructor(){}onRightClick(t){console.log("EVENT"),t.preventDefault()}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275dir=a.Gb({type:t,selectors:[["","appNoRightClick",""]],hostBindings:function(t,c){1&t&&a.Yb("contextmenu",(function(t){return c.onRightClick(t)}))}}),t})();function w(t,c){if(1&t){const t=a.Sb();a.Rb(0,"a",3),a.Yb("click",(function(){return a.gc(t),a.ac().back()})),a.oc(1,"back"),a.Qb()}}function R(t,c){if(1&t){const t=a.Sb();a.Rb(0,"button",3),a.Yb("click",(function(){a.gc(t);const c=a.ac().$implicit;return a.ac(3).viewerOpen(c)})),a.oc(1,"Access"),a.Qb()}}function k(t,c){if(1&t){const t=a.Sb();a.Rb(0,"div"),a.Rb(1,"span",7),a.Yb("click",(function(){a.gc(t);const i=c.$implicit;return a.ac(3).albumClicked(i.foldername,i)})),a.oc(2),a.Rb(3,"a",8),a.oc(4,"open"),a.Qb(),a.Qb(),a.mc(5,R,2,0,"button",1),a.Mb(6,"hr"),a.Qb()}if(2&t){const t=c.$implicit,i=a.ac(3);a.Ab(2),a.qc("",t.name," "),a.Ab(3),a.dc("ngIf",t.ownernum==i.u.phoneNumber)}}function F(t,c){if(1&t&&(a.Rb(0,"div"),a.mc(1,k,7,2,"div",6),a.Qb()),2&t){const t=a.ac(2);a.Ab(1),a.dc("ngForOf",t.albumsData)}}function I(t,c){1&t&&(a.Rb(0,"p"),a.oc(1,"No Focused albums available..."),a.Qb())}function Q(t,c){if(1&t&&(a.Rb(0,"div"),a.Rb(1,"h1"),a.oc(2,"Your focused albums"),a.Qb(),a.mc(3,F,2,1,"div",4),a.mc(4,I,2,0,"ng-template",null,5,a.nc),a.Qb()),2&t){const t=a.fc(5),c=a.ac();a.Ab(3),a.dc("ngIf",c.albumsData&&c.albumsData.length>0)("ngIfElse",t)}}function y(t,c){if(1&t&&(a.Rb(0,"div",11),a.Mb(1,"app-photo-list",12),a.Qb()),2&t){const t=a.ac(2);a.Ab(1),a.dc("folderName",t.folder)}}function L(t,c){1&t&&a.oc(0,"No Folder Content....")}function O(t,c){if(1&t&&(a.Rb(0,"div"),a.Rb(1,"h1"),a.oc(2),a.Qb(),a.mc(3,y,2,1,"div",9),a.mc(4,L,1,0,"ng-template",null,10,a.nc),a.Qb()),2&t){const t=a.fc(5),c=a.ac();a.Ab(2),a.qc("",c.clickedAlbumName," Album"),a.Ab(1),a.dc("ngIf",""!=c.folder)("ngIfElse",t)}}function N(t,c){if(1&t){const t=a.Sb();a.Rb(0,"h4"),a.oc(1),a.Rb(2,"button",17),a.Yb("click",(function(){a.gc(t);const c=a.ac().$implicit;return a.ac(3).removeViewer(c)})),a.oc(3,"Remove"),a.Qb(),a.Qb()}if(2&t){const t=a.ac().$implicit;a.Ab(1),a.qc("",t," ")}}function C(t,c){if(1&t&&(a.Rb(0,"div"),a.mc(1,N,4,1,"h4",2),a.Mb(2,"hr"),a.Qb()),2&t){const t=c.$implicit,i=a.ac(3);a.Ab(1),a.dc("ngIf",t!=i.selectedAlbum.ownernum)}}function M(t,c){if(1&t&&(a.Rb(0,"div",16),a.mc(1,C,3,1,"div",6),a.Qb()),2&t){const t=a.ac(2);a.Ab(1),a.dc("ngForOf",t.selectedAlbum.viewers)}}function j(t,c){1&t&&a.oc(0,"No viewers added yet...")}function x(t,c){if(1&t){const t=a.Sb();a.Rb(0,"div"),a.Rb(1,"h1"),a.oc(2),a.Qb(),a.Rb(3,"h5"),a.oc(4),a.Qb(),a.mc(5,M,2,1,"div",13),a.mc(6,j,1,0,"ng-template",null,14,a.nc),a.Rb(8,"button",15),a.Yb("click",(function(){return a.gc(t),a.ac().addViewerModal()})),a.oc(9,"Add"),a.Qb(),a.Qb()}if(2&t){const t=a.fc(7),c=a.ac();a.Ab(2),a.qc("",c.clickedAlbumName," Album Viewers List"),a.Ab(2),a.qc("Owner - ",c.selectedAlbum.ownernum,""),a.Ab(1),a.dc("ngIf",c.selectedAlbum&&c.selectedAlbum.viewers&&c.selectedAlbum.viewers.length>0)("ngIfElse",t)}}const D=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,c,i){this.ss=t,this.spin=c,this.afs=i,this.albumsData=[],this.folder="",this.u={},this.focusFlag=1,this.clickedAlbumName="",this.f()}ngOnInit(){}ngAfterViewInit(){}f(){return Object(o.a)(this,void 0,void 0,(function*(){this.u=yield this.ss.getUser(),console.log([this.ss.shopId,this.u]);let t=yield this.afs.collection("albums",t=>t.where("viewers","array-contains",this.u.phoneNumber));yield t.snapshotChanges().pipe(Object(l.a)(t=>t.map(t=>Object.assign({key:t.payload.doc.id},t.payload.doc.data())))).subscribe(t=>{this.albumsData=t,console.log("albumsData",this.albumsData),this.spin.stop()})}))}albumClicked(t,c){this.spin.start(),this.folder=t,this.clickedAlbumName=c.name,this.focusFlag=2,this.selectedAlbum=c,console.log("albumClicked",t,this.focusFlag,this.folder)}back(){2==this.focusFlag&&(this.focusFlag=this.focusFlag-1),3==this.focusFlag&&(this.focusFlag=this.focusFlag-2)}viewerOpen(t){this.spin.start(),this.focusFlag=3,this.selectedAlbum=t,this.clickedAlbumName=t.name,this.spin.stop()}removeViewer(t){this.selectedAlbum.viewers.splice(this.selectedAlbum.viewers.indexOf(t),1),console.log(this.selectedAlbum)}addViewerModal(){console.log("open clicked")}}return t.\u0275fac=function(c){return new(c||t)(a.Lb(b.a),a.Lb(r.b),a.Lb(u.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-products"]],decls:9,vars:5,consts:[[1,"btn","btn-primary",3,"routerLink"],["class","btn btn-primary",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-primary",3,"click"],[4,"ngIf","ngIfElse"],["noAlbum",""],[4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-success"],["class","picList",4,"ngIf","ngIfElse"],["noFolderContent",""],[1,"picList"],["appNoRightClick","",3,"folderName"],["class","viewList",4,"ngIf","ngIfElse"],["noViewerContent",""],[1,"btn","btn-success","fullwidth",3,"click"],[1,"viewList"],[1,"btn",3,"click"]],template:function(t,c){1&t&&(a.Mb(0,"app-nav-side-bar"),a.Rb(1,"a",0),a.oc(2,"login"),a.Qb(),a.Mb(3,"br"),a.mc(4,w,2,0,"a",1),a.Mb(5,"br"),a.mc(6,Q,6,2,"div",2),a.mc(7,O,6,3,"div",2),a.mc(8,x,10,4,"div",2)),2&t&&(a.Ab(1),a.dc("routerLink","/login"),a.Ab(3),a.dc("ngIf",c.focusFlag>1),a.Ab(2),a.dc("ngIf",1==c.focusFlag),a.Ab(1),a.dc("ngIf",2==c.focusFlag),a.Ab(1),a.dc("ngIf",3==c.focusFlag))},directives:[p,s.i,e.j,e.i,v,A],styles:[".fullwidth[_ngcontent-%COMP%]{width:90%;margin:5px 5%}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(c){return new(c||t)},imports:[[s.j.forChild(D)],s.j]}),t})(),E=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(c){return new(c||t)},imports:[[e.b,V,n.a]]}),t})()}}]);