(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"D+Wb":function(t,n,e){"use strict";e.r(n),e.d(n,"ShopModule",(function(){return $}));var i=e("PCNd"),o=e("ofXK"),c=e("tyNb"),a=e("mrSG"),r=e("IzEk"),s=e("lJxs"),b=e("fXoL"),l=e("h5Rr"),d=e("gren"),g=e("I/3d"),p=e("jhN1"),u=e("hqRG"),f=e("NFeN"),h=e("Vaw3");function m(t,n){if(1&t&&(b.Tb(0,"div",18),b.Ob(1,"img",19),b.Sb()),2&t){const t=n.$implicit,e=b.cc();b.Ab(1),b.fc("src",e.sanitize(t),b.jc)}}let x=(()=>{class t{constructor(t,n,e){this.storage=t,this.spin=n,this.sanitizer=e,this.folder="",this.userNum="",this.photoList=[],this.pagePicList=[],this.i=0}set setFolder(t){this.folder=t,this.listAllFiles()}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe(),console.log("PIC unsub")}listAllFiles(){return Object(a.a)(this,void 0,void 0,(function*(){this.photoList=[];const t=this.storage.ref(this.folder+"/photos");this.sub=t.listAll().pipe(Object(r.a)(1)).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){let n=t.items;for(let t=0;t<n.length;t++){let e=yield n[t].getDownloadURL();this.photoList.push(e)}console.log("photoList",this.photoList),this.pagePicList=[];let e=[];this.photoList.forEach((t,n)=>{n%3==0?(0!=n&&this.pagePicList.push(e),e=[],e.push(t)):(e.push(t),n+1==this.photoList.length&&this.pagePicList.push(e))}),console.log(this.pagePicList),this.spin.stop()})))}))}sanitize(t){return this.sanitizer.bypassSecurityTrustUrl(t)}nextBtn(){this.i=this.i+1,window.scrollTo(0,0)}backBtn(){this.i=this.i-1,window.scrollTo(0,0)}}return t.\u0275fac=function(n){return new(n||t)(b.Nb(h.a),b.Nb(d.b),b.Nb(p.b))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-photo-list"]],inputs:{userNum:"userNum",setFolder:["folderName","setFolder"]},decls:23,vars:4,consts:[[1,"row","py-5","px-4","picCont",2,"width","105vw","padding-bottom","3rem !important"],[1,"col-md-5","mx-auto",2,"padding-right","0px"],[1,"bg-white","shadow","rounded","overflow-hidden"],[1,"px-4","pt-0","pb-4","cover"],[1,"media","align-items-end","profile-head",2,"text-align","center"],[1,"profile","mr-3","picDiv"],["src","https://image.freepik.com/free-vector/grand-opening-background-flat-style_23-2148248684.jpg","alt","...","width","130",1,"rounded","mb-2","img-thumbnail","logoimg"],[1,"media-body","mb-5","text-white",2,"display","none"],[1,"mt-0","mb-25"],[1,"bg-light","p-4","d-flex","justify-content-end","text-center",2,"margin-top","40px"],[1,"btn","btn-outline-dark","btn-sm","btn-block","whatsapp",3,"href"],[1,"py-4","px-4",2,"padding-top","0px !important","padding-bottom","0px !important"],[1,"d-flex","align-items-center","justify-content-between"],[1,"row"],["class","col-12 mb-2 pr-lg-1","style","padding:0px 4px !important; min-height: 100px;",4,"ngFor","ngForOf"],[1,"ui-group-buttons",2,"width","80%","margin","8px 10% 10px 10%"],["type","button","type","button",1,"btn","btn-info","btn-lg",2,"width","48%",3,"disabled","click"],[1,"or","or-lg"],[1,"col-12","mb-2","pr-lg-1",2,"padding","0px 4px !important","min-height","100px"],["alt","loading",1,"imgBigScreen",3,"src"]],template:function(t,n){1&t&&(b.Tb(0,"div",0),b.Tb(1,"div",1),b.Tb(2,"div",2),b.Tb(3,"div",3),b.Tb(4,"div",4),b.Tb(5,"div",5),b.Ob(6,"img",6),b.Sb(),b.Tb(7,"div",7),b.Tb(8,"h4",8),b.qc(9,"Rk Traders"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(10,"div",9),b.Tb(11,"a",10),b.qc(12," Contact on WhatsApp "),b.Sb(),b.Sb(),b.Tb(13,"div",11),b.Ob(14,"div",12),b.Tb(15,"div",13),b.oc(16,m,2,1,"div",14),b.Sb(),b.Sb(),b.Tb(17,"div",15),b.Tb(18,"button",16),b.ac("click",(function(){return n.backBtn()})),b.qc(19,"Back"),b.Sb(),b.Ob(20,"div",17),b.Tb(21,"button",16),b.ac("click",(function(){return n.nextBtn()})),b.qc(22,"Next"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t&&(b.Ab(11),b.fc("href","https://api.whatsapp.com/send?phone="+n.userNum+"&text=Hi,Awesome pictures..",b.jc),b.Ab(5),b.fc("ngForOf",n.pagePicList[n.i]),b.Ab(2),b.fc("disabled",0==n.i),b.Ab(3),b.fc("disabled",n.pagePicList.length-1==n.i))},directives:[o.i],styles:['.marzero[_ngcontent-%COMP%]{margin:15px 0 0}.marzero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.holderRow[_ngcontent-%COMP%]{padding:0 20px}@media (min-width:500px){.imgBigScreen[_ngcontent-%COMP%]{width:100%}}@media (max-width:500px){.imgBigScreen[_ngcontent-%COMP%]{width:100%}}.ui-group-buttons[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%]{position:relative;float:left;width:.3em;height:1.3em;z-index:3;font-size:12px}.ui-group-buttons[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%]:before{position:absolute;top:50%;left:50%;content:"or";background-color:#5a5a5a;margin-top:-.04em;margin-left:-.9em;width:1.8em;line-height:1.55;color:#fff;font-style:normal;font-weight:400;text-align:center;border-radius:500px;box-shadow:0 0 0 1px rgba(0,0,0,.1);-ms-box-sizing:border-box;box-sizing:border-box}.ui-group-buttons[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;content:" ";width:.3em;height:2.84em;background-color:transparent;border-top:.6em solid #5a5a5a;border-bottom:1em solid #5a5a5a}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-lg[_ngcontent-%COMP%]{height:1.3em;font-size:16px}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-lg[_ngcontent-%COMP%]:after{height:3em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-sm[_ngcontent-%COMP%]{height:1em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-sm[_ngcontent-%COMP%]:after{height:2.5em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-xs[_ngcontent-%COMP%]{height:.25em}.ui-group-buttons[_ngcontent-%COMP%]   .or.or-xs[_ngcontent-%COMP%]:after{height:1.84em;z-index:-1000}.ui-group-buttons[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ui-group-buttons[_ngcontent-%COMP%]:after{content:".";display:block;height:0;clear:both;visibility:hidden}.ui-group-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{float:left;border-radius:0}.ui-group-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child{margin-left:0;border-top-left-radius:.25em;border-bottom-left-radius:.25em;padding-right:15px}.ui-group-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child{border-top-right-radius:.25em;border-bottom-right-radius:.25em;padding-left:15px}.profile-head[_ngcontent-%COMP%]{transform:translateY(5rem)}.cover[_ngcontent-%COMP%]{background-image:url(https://image.freepik.com/free-vector/realistic-confetti-wallpaper_23-2148444770.jpg);background-size:cover;background-repeat:no-repeat}body[_ngcontent-%COMP%]{background:#654ea3;background:linear-gradient(90deg,#e96443,#904e95);min-height:100vh}.logoimg[_ngcontent-%COMP%]{box-shadow:0 4px 15px rgba(0,0,0,.24)}.profile-card-4[_ngcontent-%COMP%]{max-width:300px;background-color:#fff;border-radius:5px;box-shadow:0 0 25px rgba(0,0,0,.1);overflow:hidden;position:relative;margin:10px auto;cursor:pointer}.profile-card-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .25s linear}.profile-card-4[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%]{position:relative;padding:15px;background-color:#fff}.profile-card-4[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%]{font-weight:700;position:absolute;left:0;right:0;top:-70px;color:#fff;font-size:17px}.profile-card-4[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:1.5px}.profile-card-4[_ngcontent-%COMP%]   .profile-description[_ngcontent-%COMP%]{color:#777;font-size:12px;padding:10px}.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]{padding:15px 0}.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;font-weight:600;color:#777}.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#273751;font-weight:700}.profile-card-4[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%]:before{content:"";position:absolute;height:20px;top:-10px;left:0;right:0;background-color:#fff;z-index:0;transform:skewY(3deg)}.profile-card-4[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:rotate(5deg) scale(1.1);filter:brightness(110%)}.placeBtn[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;display:flex;justify-content:center}.placeBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;background-color:#2ba847!important;box-shadow:0 0 10px 0 rgba(0,0,0,.54);color:#f5f5f5;position:relative}.placeBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .superTxt[_ngcontent-%COMP%]{top:10%;right:25%;font-size:14px}.placeBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .superIcon[_ngcontent-%COMP%]{position:absolute;margin-top:5px;margin-left:-35px}.placeBtn[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{box-shadow:0 0 43px 6px rgba(0,0,0,.44)}.picDiv[_ngcontent-%COMP%]{text-align:center;width:100%;margin:0!important}.carImg[_ngcontent-%COMP%]{max-height:20vh;border-radius:5px}@media (max-width:500px){.picCont[_ngcontent-%COMP%]{padding-top:.3rem!important}}']}),t})(),P=(()=>{class t{constructor(){}onRightClick(t){console.log("EVENT"),t.preventDefault()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=b.Ib({type:t,selectors:[["","appNoRightClick",""]],hostBindings:function(t,n){1&t&&b.ac("contextmenu",(function(t){return n.onRightClick(t)}))}}),t})();var O=e("3Pt+"),w=e("kmnG"),v=e("qFsG");function C(t,n){1&t&&(b.Tb(0,"a",4),b.qc(1,"Platform"),b.Sb()),2&t&&b.fc("routerLink","/platformadmin")}function S(t,n){if(1&t){const t=b.Ub();b.Tb(0,"a",5),b.ac("click",(function(){return b.ic(t),b.cc().back()})),b.Tb(1,"mat-icon"),b.qc(2,"backspace"),b.Sb(),b.Sb()}}function M(t,n){if(1&t){const t=b.Ub();b.Tb(0,"mat-card",17),b.Ob(1,"div",18),b.Tb(2,"div",19),b.Tb(3,"table",20),b.Tb(4,"tr"),b.Tb(5,"div",21),b.Ob(6,"a",22),b.Tb(7,"div"),b.Tb(8,"div",23),b.ac("click",(function(){b.ic(t);const n=b.cc().$implicit;return b.cc(3).albumClicked(n.foldername,n)})),b.Tb(9,"a",24),b.qc(10,"Open"),b.Sb(),b.Sb(),b.Tb(11,"a",25),b.Ob(12,"img",26),b.Sb(),b.Tb(13,"div",27),b.Tb(14,"div",28),b.Tb(15,"a"),b.qc(16),b.Sb(),b.Sb(),b.Tb(17,"span",29),b.Tb(18,"a"),b.Tb(19,"span"),b.qc(20,"Private Image Repository"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Ob(21,"div",18),b.Sb()}if(2&t){const t=b.cc().$implicit;b.Ab(16),b.rc(t.name)}}function T(t,n){if(1&t&&(b.Tb(0,"div",15),b.oc(1,M,22,1,"mat-card",16),b.Sb()),2&t){const t=n.$implicit,e=b.cc(3);b.Ab(1),b.fc("ngIf",t.ownernum!=e.u.phoneNumber)}}function _(t,n){if(1&t&&(b.Tb(0,"span"),b.oc(1,T,2,1,"div",14),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("ngForOf",t.albumsData)}}function k(t,n){1&t&&(b.Tb(0,"mat-card",30),b.Tb(1,"p"),b.qc(2,"No albums available..."),b.Sb(),b.Sb())}function A(t,n){if(1&t){const t=b.Ub();b.Tb(0,"mat-card",17),b.Ob(1,"div",18),b.Tb(2,"div",19),b.Tb(3,"table",20),b.Tb(4,"tr"),b.Tb(5,"div",21),b.Ob(6,"a",22),b.Tb(7,"div"),b.Tb(8,"div",23),b.ac("click",(function(){b.ic(t);const n=b.cc().$implicit;return b.cc(3).albumClicked(n.foldername,n)})),b.Tb(9,"a",24),b.qc(10,"Open"),b.Sb(),b.Sb(),b.Tb(11,"a",25),b.Ob(12,"img",26),b.Sb(),b.Tb(13,"div",31),b.Tb(14,"div",28),b.Tb(15,"a"),b.qc(16),b.Sb(),b.Sb(),b.Tb(17,"span"),b.Tb(18,"a"),b.Tb(19,"span"),b.qc(20,"Private Image Repository"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(21,"div",32),b.Tb(22,"ul",33),b.Tb(23,"li",34),b.Tb(24,"a"),b.Tb(25,"span",35),b.Tb(26,"button",36),b.ac("click",(function(){b.ic(t);const n=b.cc().$implicit;return b.cc(3).viewerOpen(n)})),b.qc(27,"VIEWERS"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(28,"li",34),b.Tb(29,"a"),b.Tb(30,"span",37),b.Tb(31,"a",38),b.qc(32,"WHATSAPP"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Ob(33,"div",18),b.Sb()}if(2&t){const t=b.cc().$implicit,n=b.cc(3);b.Ab(16),b.rc(t.name),b.Ab(15),b.fc("href",n.sanitize("whatsapp://send?text=Hi, Hope you would be amazed to view the "+t.name+" photos.\n                                \n                                                    click this url below \n                                                    https://zedho.github.io/?s="+n.ss.shopId),b.jc)}}function y(t,n){if(1&t&&(b.Tb(0,"div",15),b.oc(1,A,34,2,"mat-card",16),b.Sb()),2&t){const t=n.$implicit,e=b.cc(3);b.Ab(1),b.fc("ngIf",t.ownernum==e.u.phoneNumber)}}function N(t,n){if(1&t&&(b.Tb(0,"span"),b.oc(1,y,2,1,"div",14),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("ngForOf",t.albumsData)}}function I(t,n){1&t&&(b.Tb(0,"mat-card",30),b.Tb(1,"p"),b.qc(2,"No albums available..."),b.Sb(),b.Sb())}function z(t,n){if(1&t){const t=b.Ub();b.Tb(0,"div",6),b.Tb(1,"div",7),b.Tb(2,"h1",8),b.qc(3,"Focused albums"),b.Sb(),b.Tb(4,"span",9),b.Tb(5,"a",10),b.ac("click",(function(){return b.ic(t),b.cc().refreshAll()})),b.Tb(6,"mat-icon"),b.qc(7,"autorenew"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.oc(8,_,2,1,"span",11),b.oc(9,k,3,0,"ng-template",null,12,b.pc),b.Ob(11,"br"),b.Tb(12,"div",7),b.Tb(13,"h1",8),b.qc(14,"My albums"),b.Sb(),b.Tb(15,"span",9),b.Tb(16,"a",10),b.ac("click",(function(){return b.ic(t),b.cc().refreshAll()})),b.Tb(17,"mat-icon"),b.qc(18,"autorenew"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.oc(19,N,2,1,"span",11),b.oc(20,I,3,0,"ng-template",null,13,b.pc),b.Sb()}if(2&t){const t=b.hc(10),n=b.hc(21),e=b.cc();b.Ab(8),b.fc("ngIf",e.albumsData&&e.albumsData.length>0)("ngIfElse",t),b.Ab(11),b.fc("ngIf",e.albumsData&&e.albumsData.length>0)("ngIfElse",n)}}function q(t,n){if(1&t&&(b.Tb(0,"div",57),b.Ob(1,"app-photo-list",58),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("folderName",t.folder)("userNum",t.userNum)}}function F(t,n){1&t&&b.qc(0,"No Folder Content....")}function L(t,n){if(1&t&&(b.Tb(0,"div",39),b.Tb(1,"h1",40),b.qc(2),b.Sb(),b.oc(3,q,2,2,"div",41),b.oc(4,F,1,0,"ng-template",null,42,b.pc),b.Tb(6,"div"),b.Tb(7,"div",43),b.Tb(8,"ol",44),b.Ob(9,"li",45),b.Ob(10,"li",46),b.Sb(),b.Tb(11,"div",47),b.Tb(12,"div",48),b.Ob(13,"img",49),b.Sb(),b.Tb(14,"div",50),b.Ob(15,"img",51),b.Sb(),b.Sb(),b.Tb(16,"a",52),b.Ob(17,"span",53),b.Tb(18,"span",54),b.qc(19,"Previous"),b.Sb(),b.Sb(),b.Tb(20,"a",55),b.Ob(21,"span",56),b.Tb(22,"span",54),b.qc(23,"Next"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t){const t=b.hc(5),n=b.cc();b.Ab(2),b.sc("",n.clickedAlbumName," Album"),b.Ab(1),b.fc("ngIf",""!=n.folder)("ngIfElse",t),b.Ab(10),b.fc("src",n.studioData.simg1,b.jc),b.Ab(2),b.fc("src",n.studioData.simg2,b.jc)}}function B(t,n){if(1&t){const t=b.Ub();b.Tb(0,"p",74),b.qc(1),b.Tb(2,"button",75),b.ac("click",(function(){b.ic(t);const n=b.cc().$implicit;return b.cc(3).removeViewer(n)})),b.qc(3,"Remove"),b.Sb(),b.Sb()}if(2&t){const t=b.cc().$implicit;b.Ab(1),b.sc("",t," \xa0")}}function j(t,n){if(1&t&&(b.Tb(0,"div"),b.oc(1,B,4,1,"p",72),b.Ob(2,"hr",73),b.Sb()),2&t){const t=n.$implicit,e=b.cc(3);b.Ab(1),b.fc("ngIf",t!=e.selectedAlbum.ownernum)}}function D(t,n){if(1&t&&(b.Tb(0,"div",70),b.oc(1,j,3,1,"div",71),b.Sb()),2&t){const t=b.cc(2);b.Ab(1),b.fc("ngForOf",t.selectedAlbum.viewers)}}function E(t,n){1&t&&b.qc(0,"No viewers added yet...")}function R(t,n){if(1&t){const t=b.Ub();b.Tb(0,"div",39),b.Tb(1,"h1",59),b.qc(2),b.Sb(),b.Tb(3,"div",60),b.Tb(4,"div",61),b.oc(5,D,2,1,"div",62),b.oc(6,E,1,0,"ng-template",null,63,b.pc),b.Tb(8,"form",64),b.Tb(9,"mat-form-field",64),b.Tb(10,"mat-label"),b.qc(11,"Add Viewer's Phone Number"),b.Sb(),b.Tb(12,"span",65),b.qc(13,"+91 \xa0"),b.Sb(),b.Tb(14,"input",66),b.ac("ngModelChange",(function(n){return b.ic(t),b.cc().adNum=n})),b.Sb(),b.Tb(15,"mat-icon",67),b.qc(16,"mode_edit"),b.Sb(),b.Sb(),b.Sb(),b.Tb(17,"button",68),b.ac("click",(function(){return b.ic(t),b.cc().addViewerModal()})),b.qc(18,"Add"),b.Sb(),b.Ob(19,"hr"),b.Tb(20,"h3",69),b.qc(21,"Configurations -"),b.Sb(),b.Tb(22,"h4"),b.qc(23),b.Sb(),b.Ob(24,"hr"),b.Tb(25,"h4"),b.qc(26),b.Sb(),b.Ob(27,"hr"),b.Tb(28,"h4"),b.qc(29),b.Sb(),b.Ob(30,"hr"),b.Sb(),b.Sb(),b.Sb()}if(2&t){const t=b.hc(7),n=b.cc();b.Ab(2),b.sc("",n.clickedAlbumName," Album Viewers List"),b.Ab(3),b.fc("ngIf",n.selectedAlbum&&n.selectedAlbum.viewers&&n.selectedAlbum.viewers.length>0)("ngIfElse",t),b.Ab(9),b.fc("ngModel",n.adNum),b.Ab(9),b.sc("Owner - ",n.selectedAlbum.ownernum,""),b.Ab(3),b.sc("Invite ID - ",n.selectedAlbum.inviteid,""),b.Ab(3),b.sc("Invite Pass - ",n.selectedAlbum.invitepass,"")}}const U=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,n,e,i){this.ss=t,this.spin=n,this.afs=e,this.sanitizer=i,this.albumsData=[],this.folder="",this.u={},this.focusFlag=1,this.clickedAlbumName="",this.studioData={},this.f(),this.userNum=t.userPhone}ngOnInit(){this.studioData=this.ss.shopDetails}ngAfterViewInit(){}ngOnDestroy(){this.sub.unsubscribe(),console.log("Prod unsub")}refreshAll(){return Object(a.a)(this,void 0,void 0,(function*(){this.spin.start(),yield this.f()}))}f(){return Object(a.a)(this,void 0,void 0,(function*(){this.u=yield this.ss.getUser(),console.log([this.ss.shopId,this.u]),this.albumCol=yield this.afs.collection("albums",t=>t.where("viewers","array-contains",this.u.phoneNumber)),this.sub=this.albumCol.snapshotChanges().pipe(Object(r.a)(1)).pipe(Object(s.a)(t=>t.map(t=>Object.assign({key:t.payload.doc.id},t.payload.doc.data())))).subscribe(t=>{this.albumsData=t,console.log("albumsData",this.albumsData),this.spin.stop()})}))}albumClicked(t,n){this.spin.start(),this.folder=t,this.clickedAlbumName=n.name,this.focusFlag=2,this.selectedAlbum=n,console.log("albumClicked",t,this.focusFlag,this.folder)}back(){2==this.focusFlag&&(this.focusFlag=this.focusFlag-1),3==this.focusFlag&&(this.focusFlag=this.focusFlag-2)}viewerOpen(t){this.spin.start(),this.focusFlag=3,this.selectedAlbum=t,this.clickedAlbumName=t.name,this.spin.stop()}removeViewer(t){return Object(a.a)(this,void 0,void 0,(function*(){this.selectedAlbum.viewers.splice(this.selectedAlbum.viewers.indexOf(t),1),console.log(this.selectedAlbum),null!=(yield this.albumCol.doc(this.selectedAlbum.key).update({viewers:this.selectedAlbum.viewers}))&&alert("Remove failed..")}))}addViewerModal(){return Object(a.a)(this,void 0,void 0,(function*(){if(console.log("open clicked",this.adNum),this.adNum&&10!=this.adNum.length)alert("Please Check the Phone Number");else{this.adNum="+91"+this.adNum;let t=this.selectedAlbum.viewers;if(t.includes(this.adNum))alert("Number already exist..");else{t.push(this.adNum);let n=yield this.albumCol.doc(this.selectedAlbum.key).update({viewers:t});console.log(n)}this.adNum=""}}))}sanitize(t){return this.sanitizer.bypassSecurityTrustUrl(t)}}return t.\u0275fac=function(n){return new(n||t)(b.Nb(l.a),b.Nb(d.b),b.Nb(g.a),b.Nb(p.b))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-products"]],decls:6,vars:5,consts:[["class","btn btn-success",3,"routerLink",4,"ngIf"],["class","backbtn",3,"click",4,"ngIf"],["class","bodyContentBg",4,"ngIf"],["style","margin-top: 15px;",4,"ngIf"],[1,"btn","btn-success",3,"routerLink"],[1,"backbtn",3,"click"],[1,"bodyContentBg"],[1,"headCont"],[1,"focusTitle",2,"font-size","1.8em"],[1,"refreshBtn"],[1,"refreshBtnTxt",3,"click"],[4,"ngIf","ngIfElse"],["noAlbum",""],["noAlbum22",""],["class","row","style","width: 100%; margin: 0px;",4,"ngFor","ngForOf"],[1,"row",2,"width","100%","margin","0px"],["class","cardbox",4,"ngIf"],[1,"cardbox"],[1,"col-sm-1","col-md-2"],[1,"col-sm-10","col-md-12"],[2,"width","100%"],[1,"twPc-div"],[1,"twPc-bg","twPc-block"],[1,"twPc-button",3,"click"],[1,"btn","btn-success","openBtn",2,"width","100%","width","30%","margin-top","-20px","color","aliceblue"],[1,"twPc-avatarLink"],["src","https://image.freepik.com/free-photo/pointing-finger-vinyl-record-red-background_23-2147889855.jpg",1,"twPc-avatarImg"],[1,"twPc-divUser",2,"margin-top","20px","padding-bottom","15px"],[1,"twPc-divName"],[2,"padding-bottom","15px"],[2,"text-align","center"],[1,"twPc-divUser",2,"margin-top","20px"],[1,"twPc-divStats"],[1,"twPc-Arrange"],[1,"twPc-ArrangeSizeFit"],[1,"twPc-StatLabel","twPc-block",2,"margin-right","8px"],[1,"btn","btn-primary",2,"width","100%",3,"click"],[1,"twPc-StatLabel","twPc-block",2,"margin-left","8px","margin-right","8px"],[1,"btn","btn-primary",2,"width","100%",3,"href"],[2,"margin-top","15px"],[1,"spacetitle"],["class","picList",4,"ngIf","ngIfElse"],["noFolderContent",""],["id","carouselExampleIndicators","data-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["data-target","#carouselExampleIndicators","data-slide-to","0",1,"active"],["data-target","#carouselExampleIndicators","data-slide-to","1"],[1,"carousel-inner"],[1,"carousel-item","active"],["alt","First slide",1,"d-block","w-100","carImg",3,"src"],[1,"carousel-item"],["alt","Second slide",1,"d-block","w-100","carImg",3,"src"],["href","#carouselExampleIndicators","role","button","data-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"sr-only"],["href","#carouselExampleIndicators","role","button","data-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"picList"],["appNoRightClick","",3,"folderName","userNum"],[1,"focusTitle"],[1,"row",2,"margin","10px"],[1,"col-12"],["class","viewList",4,"ngIf","ngIfElse"],["noViewerContent",""],[1,"fullwidth"],["matPrefix",""],["type","tel","matInput","","placeholder","9499030204","name","phoneNum",3,"ngModel","ngModelChange"],["matSuffix",""],[1,"btn","btn-success","fullwidth",3,"click"],[2,"margin-left","-5px"],[1,"viewList"],[4,"ngFor","ngForOf"],["style","font-size: 20px;",4,"ngIf"],[2,"color","#333"],[2,"font-size","20px"],[1,"btn","btn-danger",3,"click"]],template:function(t,n){1&t&&(b.Ob(0,"app-nav-side-bar"),b.oc(1,C,2,1,"a",0),b.oc(2,S,3,0,"a",1),b.oc(3,z,22,4,"div",2),b.oc(4,L,24,5,"div",3),b.oc(5,R,31,7,"div",3)),2&t&&(b.Ab(1),b.fc("ngIf","+919499030204"==n.userNum),b.Ab(1),b.fc("ngIf",n.focusFlag>1),b.Ab(1),b.fc("ngIf",1==n.focusFlag),b.Ab(1),b.fc("ngIf",2==n.focusFlag),b.Ab(1),b.fc("ngIf",3==n.focusFlag))},directives:[u.a,o.j,c.k,f.a,o.i,x,P,O.j,O.f,O.g,w.b,w.e,w.f,v.a,O.a,O.e,O.h,w.g],styles:[".fullwidth[_ngcontent-%COMP%]{width:90%;margin:5px 5%}.refreshBtn[_ngcontent-%COMP%]{position:absolute;right:4px;margin-right:6px}.focusTitle[_ngcontent-%COMP%]{margin-left:10px;margin-right:60px}.headCont[_ngcontent-%COMP%]{position:relative}.headCont[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block}.bottomAdDiv[_ngcontent-%COMP%]{margin-top:10px}.bottomAd[_ngcontent-%COMP%]{margin:10px 25%;width:50%}.backbtn[_ngcontent-%COMP%]{position:absolute;padding-top:15px;right:10px}.backbtn[_ngcontent-%COMP%]     .mat-icon{height:32px!important;width:32px!important;font-size:32px!important}.spacetitle[_ngcontent-%COMP%]{margin-left:10px}.bodyContentBg[_ngcontent-%COMP%]{background-color:#f5f5f5;min-height:100vh;padding-top:10px}.bodyContentBg[_ngcontent-%COMP%]   .cardbox[_ngcontent-%COMP%]{width:100%;background-color:#fff;border-radius:10px;padding-top:10px;padding-bottom:10px;margin-bottom:10px;margin-left:5px;margin-right:5px}@media (min-width:600px){.bodyContentBg[_ngcontent-%COMP%]   .cardbox[_ngcontent-%COMP%]{width:60%;margin-left:20%}.bodyContentBg[_ngcontent-%COMP%]   .focusTitle[_ngcontent-%COMP%]{margin-left:20%}.bodyContentBg[_ngcontent-%COMP%]   .refreshBtn[_ngcontent-%COMP%]{margin-right:20%}}td[_ngcontent-%COMP%]{text-align:center!important}.twPc-div[_ngcontent-%COMP%]{background:#fff none repeat scroll 0 0;border:1px solid #e1e8ed;border-radius:6px}.twPc-bg[_ngcontent-%COMP%]{background-image:url(/assets/tileBg.jpg);background-position:0 50%;background-size:100% auto;border-bottom:1px solid #e1e8ed;border-radius:4px 4px 0 0;height:95px;width:100%}.twPc-block[_ngcontent-%COMP%]{display:block!important}.twPc-button[_ngcontent-%COMP%]{margin:-35px -10px 0;text-align:right;width:100%}.twPc-avatarLink[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;display:inline-block!important;float:left;margin:-30px 5px 0 8px;max-width:100%;padding:1px;vertical-align:bottom}.twPc-avatarImg[_ngcontent-%COMP%]{border:2px solid #fff;border-radius:7px;box-sizing:border-box;color:#fff;height:72px;width:72px}.twPc-divUser[_ngcontent-%COMP%]{margin:5px 0 0}.twPc-divName[_ngcontent-%COMP%]{font-size:18px;font-weight:700;line-height:21px}.twPc-divName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit!important}.twPc-divStats[_ngcontent-%COMP%]{margin-left:11px;padding:10px 0}.twPc-Arrange[_ngcontent-%COMP%]{box-sizing:border-box;display:table;margin:0;min-width:100%;padding:0;table-layout:auto}ul.twPc-Arrange[_ngcontent-%COMP%]{list-style:outside none none;margin:0;padding:0}.twPc-ArrangeSizeFit[_ngcontent-%COMP%]{display:table-cell;padding:0;vertical-align:top}.twPc-ArrangeSizeFit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.twPc-StatValue[_ngcontent-%COMP%]{display:block;font-size:18px;font-weight:500}.twPc-StatLabel[_ngcontent-%COMP%], .twPc-StatValue[_ngcontent-%COMP%]{transition:color .15s ease-in-out 0s}.twPc-StatLabel[_ngcontent-%COMP%]{color:#8899a6;font-size:10px;letter-spacing:.02em;overflow:hidden;text-transform:uppercase}.openBtn[_ngcontent-%COMP%]{border-radius:8px}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(n){return new(n||t)},imports:[[c.l.forChild(U)],c.l]}),t})(),$=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(n){return new(n||t)},imports:[[o.b,V,i.a]]}),t})()}}]);