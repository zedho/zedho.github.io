(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"D+Wb":function(t,i,n){"use strict";n.r(i),n.d(i,"ShopModule",(function(){return E}));var e=n("PCNd"),o=n("ofXK"),s=n("tyNb"),c=n("mrSG"),l=n("IzEk"),r=n("lJxs"),b=n("fXoL"),a=n("h5Rr"),u=n("gren"),d=n("I/3d"),h=n("jhN1"),g=n("hqRG"),f=n("NFeN"),p=n("Vaw3");function m(t,i){if(1&t&&(b.Tb(0,"span",6),b.Ob(1,"div",7),b.Tb(2,"div",8),b.Ob(3,"img",9),b.Ob(4,"hr"),b.Sb(),b.Ob(5,"div",7),b.Sb()),2&t){const t=i.$implicit,n=b.cc();b.Ab(3),b.fc("src",n.sanitize(t),b.jc)}}let O=(()=>{class t{constructor(t,i,n){this.storage=t,this.spin=i,this.sanitizer=n,this.folder="",this.photoList=[],this.pagePicList=[],this.i=0}set setFolder(t){this.folder=t,this.listAllFiles()}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe(),console.log("PIC unsub")}listAllFiles(){return Object(c.a)(this,void 0,void 0,(function*(){this.photoList=[];const t=this.storage.ref(this.folder+"/photos");this.sub=t.listAll().pipe(Object(l.a)(1)).subscribe(t=>Object(c.a)(this,void 0,void 0,(function*(){let i=t.items;for(let t=0;t<i.length;t++){let n=yield i[t].getDownloadURL();this.photoList.push(n)}console.log("photoList",this.photoList),this.pagePicList=[];let n=[];this.photoList.forEach((t,i)=>{i%3==0?(0!=i&&this.pagePicList.push(n),n=[],n.push(t)):(n.push(t),i+1==this.photoList.length&&this.pagePicList.push(n))}),console.log(this.pagePicList),this.spin.stop()})))}))}sanitize(t){return this.sanitizer.bypassSecurityTrustUrl(t)}nextBtn(){this.i=this.i+1,window.scrollTo(0,0)}backBtn(){this.i=this.i-1,window.scrollTo(0,0)}}return t.\u0275fac=function(i){return new(i||t)(b.Nb(p.a),b.Nb(u.b),b.Nb(h.b))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-photo-list"]],inputs:{setFolder:["folderName","setFolder"]},decls:10,vars:3,consts:[[1,"holderRow"],["ee",""],["class","row",4,"ngFor","ngForOf"],[1,"ui-group-buttons",2,"width","80%","margin","0 10% 10px 10%"],["type","button","type","button",1,"btn","btn-info","btn-lg",2,"width","48%",3,"disabled","click"],[1,"or","or-lg"],[1,"row"],[1,"col-md-3"],[1,"col-md-6",2,"text-align","center"],["alt","loading",1,"imgBigScreen",3,"src"]],template:function(t,i){1&t&&(b.Tb(0,"div",0,1),b.Ob(2,"hr"),b.oc(3,m,6,1,"span",2),b.Tb(4,"div",3),b.Tb(5,"button",4),b.ac("click",(function(){return i.backBtn()})),b.qc(6,"Back"),b.Sb(),b.Ob(7,"div",5),b.Tb(8,"button",4),b.ac("click",(function(){return i.nextBtn()})),b.qc(9,"Next"),b.Sb(),b.Sb(),b.Sb()),2&t&&(b.Ab(3),b.fc("ngForOf",i.pagePicList[i.i]),b.Ab(2),b.fc("disabled",0==i.i),b.Ab(3),b.fc("disabled",i.pagePicList.length-1==i.i))},directives:[o.i],styles:['.marzero[_ngcontent-%COMP%]{margin:15px 0 0}.marzero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.holderRow[_ngcontent-%COMP%]{padding:0 20px}@media (min-width:500px){.imgBigScreen[_ngcontent-%COMP%]{min-height:50vh;max-height:85vh;max-width:95vw}}@media (max-width:500px){.imgBigScreen[_ngcontent-%COMP%]{width:100%}}.ui-group-buttons[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%]{position:relative;float:left;width:.3em;height:1.3em;z-index:3;font-size:12px}.ui-group-buttons[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%]:before{position:absolute;top:50%;left:50%;content:"or";background-color:#5a5a5a;margin-top:-.1em;margin-left:-.9em;width:1.8em;height:1.8em;line-height:1.55;color:#fff;font-style:normal;font-weight:400;text-align:center;border-radius:500px;box-shadow:0 0 0 1px rgba(0,0,0,.1);-ms-box-sizing:border-box;box-sizing:border-box}.ui-group-buttons[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;content:" ";width:.3em;height:2.84em;background-color:transparent;border-top:.6em solid #5a5a5a;border-bottom:.6em solid #5a5a5a}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-lg[_ngcontent-%COMP%]{height:1.3em;font-size:16px}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-lg[_ngcontent-%COMP%]:after{height:3em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-sm[_ngcontent-%COMP%]{height:1em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-sm[_ngcontent-%COMP%]:after{height:2.5em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-xs[_ngcontent-%COMP%]{height:.25em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-xs[_ngcontent-%COMP%]:after{height:1.84em;z-index:-1000}.ui-group-buttons[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ui-group-buttons[_ngcontent-%COMP%]:after{content:".";display:block;height:0;clear:both;visibility:hidden}.ui-group-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{float:left;border-radius:0}.ui-group-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child{margin-left:0;border-top-left-radius:.25em;border-bottom-left-radius:.25em;padding-right:15px}.ui-group-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child{border-top-right-radius:.25em;border-bottom-right-radius:.25em;padding-left:15px}']}),t})(),v=(()=>{class t{constructor(){}onRightClick(t){console.log("EVENT"),t.preventDefault()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=b.Ib({type:t,selectors:[["","appNoRightClick",""]],hostBindings:function(t,i){1&t&&b.ac("contextmenu",(function(t){return i.onRightClick(t)}))}}),t})();var w=n("3Pt+"),C=n("kmnG"),A=n("qFsG");function P(t,i){1&t&&(b.Tb(0,"a",3),b.qc(1,"Platform"),b.Sb()),2&t&&b.fc("routerLink","/platformadmin")}function k(t,i){if(1&t){const t=b.Ub();b.Tb(0,"a",4),b.ac("click",(function(){return b.ic(t),b.cc().back()})),b.Tb(1,"mat-icon"),b.qc(2,"backspace"),b.Sb(),b.Sb()}}function T(t,i){if(1&t){const t=b.Ub();b.Tb(0,"span"),b.Tb(1,"button",18),b.ac("click",(function(){b.ic(t);const i=b.cc().$implicit;return b.cc(3).viewerOpen(i)})),b.qc(2,"viewers"),b.Sb(),b.qc(3," \xa0 "),b.Tb(4,"a",19),b.qc(5,"whatsapp"),b.Sb(),b.Sb()}if(2&t){const t=b.cc().$implicit,i=b.cc(3);b.Ab(4),b.fc("href",i.sanitize("whatsapp://send?text=Hi, Hope you would be amazed to view the "+t.name+" photos.\n                \n                click this url below \n                https://zedho.github.io/?s="+i.ss.shopId),b.jc)}}function S(t,i){if(1&t){const t=b.Ub();b.Tb(0,"div",12),b.Ob(1,"div",13),b.Tb(2,"div",14),b.Tb(3,"span",15),b.ac("click",(function(){b.ic(t);const n=i.$implicit;return b.cc(3).albumClicked(n.foldername,n)})),b.Tb(4,"span",16),b.qc(5),b.Sb(),b.Ob(6,"br"),b.Tb(7,"a",17),b.qc(8,"open"),b.Sb(),b.Sb(),b.qc(9," \xa0 "),b.oc(10,T,6,1,"span",2),b.Ob(11,"hr"),b.Sb(),b.Ob(12,"div",13),b.Sb()}if(2&t){const t=i.$implicit,n=b.cc(3);b.Ab(5),b.rc(t.name),b.Ab(5),b.fc("ngIf",t.ownernum==n.u.phoneNumber)}}function x(t,i){if(1&t&&(b.Tb(0,"span"),b.oc(1,S,13,2,"div",11),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("ngForOf",t.albumsData)}}function M(t,i){1&t&&(b.Tb(0,"p"),b.qc(1,"No Focused albums available..."),b.Sb())}function N(t,i){if(1&t){const t=b.Ub();b.Tb(0,"div"),b.Tb(1,"div",5),b.Tb(2,"h1",6),b.qc(3,"Your focused albums"),b.Sb(),b.Tb(4,"span",7),b.Tb(5,"a",8),b.ac("click",(function(){return b.ic(t),b.cc().refreshAll()})),b.Tb(6,"mat-icon"),b.qc(7,"autorenew"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.oc(8,x,2,1,"span",9),b.oc(9,M,2,0,"ng-template",null,10,b.pc),b.Sb()}if(2&t){const t=b.hc(10),i=b.cc();b.Ab(8),b.fc("ngIf",i.albumsData&&i.albumsData.length>0)("ngIfElse",t)}}function _(t,i){if(1&t&&(b.Tb(0,"div",24),b.Ob(1,"app-photo-list",25),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("folderName",t.folder)}}function y(t,i){1&t&&b.qc(0,"No Folder Content....")}function I(t,i){if(1&t&&(b.Tb(0,"div",26),b.Ob(1,"img",27),b.Ob(2,"img",27),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("src",t.studioData.simg1,b.jc),b.Ab(1),b.fc("src",t.studioData.simg2,b.jc)}}function F(t,i){if(1&t&&(b.Tb(0,"div"),b.Tb(1,"h1",20),b.qc(2),b.Sb(),b.oc(3,_,2,1,"div",21),b.oc(4,y,1,0,"ng-template",null,22,b.pc),b.oc(6,I,3,2,"div",23),b.Sb()),2&t){const t=b.hc(5),i=b.cc();b.Ab(2),b.sc("",i.clickedAlbumName," Album"),b.Ab(1),b.fc("ngIf",""!=i.folder)("ngIfElse",t),b.Ab(3),b.fc("ngIf",i.studioData&&i.studioData.simg1&&i.studioData.simg2)}}function q(t,i){if(1&t){const t=b.Ub();b.Tb(0,"p",43),b.qc(1),b.Tb(2,"button",44),b.ac("click",(function(){b.ic(t);const i=b.cc().$implicit;return b.cc(3).removeViewer(i)})),b.qc(3,"Remove"),b.Sb(),b.Sb()}if(2&t){const t=b.cc().$implicit;b.Ab(1),b.sc("",t," \xa0")}}function L(t,i){if(1&t&&(b.Tb(0,"div"),b.oc(1,q,4,1,"p",41),b.Ob(2,"hr",42),b.Sb()),2&t){const t=i.$implicit,n=b.cc(3);b.Ab(1),b.fc("ngIf",t!=n.selectedAlbum.ownernum)}}function z(t,i){if(1&t&&(b.Tb(0,"div",39),b.oc(1,L,3,1,"div",40),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("ngForOf",t.selectedAlbum.viewers)}}function D(t,i){1&t&&b.qc(0,"No viewers added yet...")}function j(t,i){if(1&t){const t=b.Ub();b.Tb(0,"div"),b.Tb(1,"h1",28),b.qc(2),b.Sb(),b.Tb(3,"div",29),b.Tb(4,"div",30),b.oc(5,z,2,1,"div",31),b.oc(6,D,1,0,"ng-template",null,32,b.pc),b.Tb(8,"form",33),b.Tb(9,"mat-form-field",33),b.Tb(10,"mat-label"),b.qc(11,"Add Viewer's Phone Number"),b.Sb(),b.Tb(12,"span",34),b.qc(13,"+91 \xa0"),b.Sb(),b.Tb(14,"input",35),b.ac("ngModelChange",(function(i){return b.ic(t),b.cc().adNum=i})),b.Sb(),b.Tb(15,"mat-icon",36),b.qc(16,"mode_edit"),b.Sb(),b.Sb(),b.Sb(),b.Tb(17,"button",37),b.ac("click",(function(){return b.ic(t),b.cc().addViewerModal()})),b.qc(18,"Add"),b.Sb(),b.Ob(19,"hr"),b.Tb(20,"h3",38),b.qc(21,"Configurations -"),b.Sb(),b.Tb(22,"h4"),b.qc(23),b.Sb(),b.Ob(24,"hr"),b.Tb(25,"h4"),b.qc(26),b.Sb(),b.Ob(27,"hr"),b.Tb(28,"h4"),b.qc(29),b.Sb(),b.Ob(30,"hr"),b.Sb(),b.Sb(),b.Sb()}if(2&t){const t=b.hc(7),i=b.cc();b.Ab(2),b.sc("",i.clickedAlbumName," Album Viewers List"),b.Ab(3),b.fc("ngIf",i.selectedAlbum&&i.selectedAlbum.viewers&&i.selectedAlbum.viewers.length>0)("ngIfElse",t),b.Ab(9),b.fc("ngModel",i.adNum),b.Ab(9),b.sc("Owner - ",i.selectedAlbum.ownernum,""),b.Ab(3),b.sc("Invite ID - ",i.selectedAlbum.inviteid,""),b.Ab(3),b.sc("Invite Pass - ",i.selectedAlbum.invitepass,"")}}const B=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,i,n,e){this.ss=t,this.spin=i,this.afs=n,this.sanitizer=e,this.albumsData=[],this.folder="",this.u={},this.focusFlag=1,this.clickedAlbumName="",this.studioData={},this.f(),this.userNum=t.userPhone}ngOnInit(){this.studioData=this.ss.shopDetails}ngAfterViewInit(){}ngOnDestroy(){this.sub.unsubscribe(),console.log("Prod unsub")}refreshAll(){return Object(c.a)(this,void 0,void 0,(function*(){this.spin.start(),yield this.f()}))}f(){return Object(c.a)(this,void 0,void 0,(function*(){this.u=yield this.ss.getUser(),console.log([this.ss.shopId,this.u]),this.albumCol=yield this.afs.collection("albums",t=>t.where("viewers","array-contains",this.u.phoneNumber)),this.sub=this.albumCol.snapshotChanges().pipe(Object(l.a)(1)).pipe(Object(r.a)(t=>t.map(t=>Object.assign({key:t.payload.doc.id},t.payload.doc.data())))).subscribe(t=>{this.albumsData=t,console.log("albumsData",this.albumsData),this.spin.stop()})}))}albumClicked(t,i){this.spin.start(),this.folder=t,this.clickedAlbumName=i.name,this.focusFlag=2,this.selectedAlbum=i,console.log("albumClicked",t,this.focusFlag,this.folder)}back(){2==this.focusFlag&&(this.focusFlag=this.focusFlag-1),3==this.focusFlag&&(this.focusFlag=this.focusFlag-2)}viewerOpen(t){this.spin.start(),this.focusFlag=3,this.selectedAlbum=t,this.clickedAlbumName=t.name,this.spin.stop()}removeViewer(t){return Object(c.a)(this,void 0,void 0,(function*(){this.selectedAlbum.viewers.splice(this.selectedAlbum.viewers.indexOf(t),1),console.log(this.selectedAlbum),null!=(yield this.albumCol.doc(this.selectedAlbum.key).update({viewers:this.selectedAlbum.viewers}))&&alert("Remove failed..")}))}addViewerModal(){return Object(c.a)(this,void 0,void 0,(function*(){if(console.log("open clicked",this.adNum),this.adNum&&10!=this.adNum.length)alert("Please Check the Phone Number");else{this.adNum="+91"+this.adNum;let t=this.selectedAlbum.viewers;if(t.includes(this.adNum))alert("Number already exist..");else{t.push(this.adNum);let i=yield this.albumCol.doc(this.selectedAlbum.key).update({viewers:t});console.log(i)}this.adNum=""}}))}sanitize(t){return this.sanitizer.bypassSecurityTrustUrl(t)}}return t.\u0275fac=function(i){return new(i||t)(b.Nb(a.a),b.Nb(u.b),b.Nb(d.a),b.Nb(h.b))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-products"]],decls:7,vars:5,consts:[["class","btn btn-success",3,"routerLink",4,"ngIf"],["class","backbtn",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-success",3,"routerLink"],[1,"backbtn",3,"click"],[1,"headCont"],[1,"focusTitle",2,"font-size","1.8em"],[1,"refreshBtn"],[1,"refreshBtnTxt",3,"click"],[4,"ngIf","ngIfElse"],["noAlbum",""],["class","row","style","width: 100%; margin: 0px;",4,"ngFor","ngForOf"],[1,"row",2,"width","100%","margin","0px"],[1,"col-sm-1","col-md-2"],[1,"col-sm-10","col-md-8"],[3,"click"],[2,"font-size","1.5em"],[1,"btn","btn-success"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary",3,"href"],[1,"spacetitle"],["class","picList",4,"ngIf","ngIfElse"],["noFolderContent",""],["class","bottomAdDiv",4,"ngIf"],[1,"picList"],["appNoRightClick","",3,"folderName"],[1,"bottomAdDiv"],[1,"bottomAd",3,"src"],[1,"focusTitle"],[1,"row",2,"margin","10px"],[1,"col-12"],["class","viewList",4,"ngIf","ngIfElse"],["noViewerContent",""],[1,"fullwidth"],["matPrefix",""],["type","tel","matInput","","placeholder","9499030204","name","phoneNum",3,"ngModel","ngModelChange"],["matSuffix",""],[1,"btn","btn-success","fullwidth",3,"click"],[2,"margin-left","-5px"],[1,"viewList"],[4,"ngFor","ngForOf"],["style","font-size: 20px;",4,"ngIf"],[2,"color","#333"],[2,"font-size","20px"],[1,"btn","btn-danger",3,"click"]],template:function(t,i){1&t&&(b.Ob(0,"app-nav-side-bar"),b.oc(1,P,2,1,"a",0),b.oc(2,k,3,0,"a",1),b.Ob(3,"br"),b.oc(4,N,11,2,"div",2),b.oc(5,F,7,4,"div",2),b.oc(6,j,31,7,"div",2)),2&t&&(b.Ab(1),b.fc("ngIf","+919499030204"==i.userNum),b.Ab(1),b.fc("ngIf",i.focusFlag>1),b.Ab(2),b.fc("ngIf",1==i.focusFlag),b.Ab(1),b.fc("ngIf",2==i.focusFlag),b.Ab(1),b.fc("ngIf",3==i.focusFlag))},directives:[g.a,o.j,s.k,f.a,o.i,O,v,w.j,w.f,w.g,C.b,C.e,C.f,A.a,w.a,w.e,w.h,C.g],styles:[".fullwidth[_ngcontent-%COMP%]{width:90%;margin:5px 5%}.refreshBtn[_ngcontent-%COMP%]{position:absolute;right:4px;margin-right:6px}.focusTitle[_ngcontent-%COMP%]{margin-left:10px;margin-right:60px}.headCont[_ngcontent-%COMP%]{position:relative}.headCont[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block}.bottomAdDiv[_ngcontent-%COMP%]{margin-top:10px}.bottomAd[_ngcontent-%COMP%]{margin:10px 25%;width:50%}.backbtn[_ngcontent-%COMP%]{position:absolute;padding-top:15px;right:10px}.backbtn[_ngcontent-%COMP%]     .mat-icon{height:32px!important;width:32px!important;font-size:32px!important}.spacetitle[_ngcontent-%COMP%]{margin-left:10px}"]}),t})()}];let R=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(i){return new(i||t)},imports:[[s.l.forChild(B)],s.l]}),t})(),E=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(i){return new(i||t)},imports:[[o.b,R,e.a]]}),t})()}}]);