"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[510],{9510:(P,h,o)=>{o.r(h),o.d(h,{ProductsComponent:()=>M});var u=o(6814),p=o(1120),g=o(8129),d=o(6472),_=o(95),t=o(4769),m=o(0),a=o(6286),l=o(2425),f=o(8806);function x(s,n){if(1&s&&t._UZ(0,"i",21),2&s){const r=n.$implicit,e=t.oxw().$implicit;t.ekj("rating-color",e.ratingsAverage>=r)}}function E(s,n){if(1&s){const r=t.EpF();t.TgZ(0,"i",22),t.NdJ("click",function(){t.CHM(r);const i=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.addFav(i._id))}),t.qZA()}}function T(s,n){if(1&s){const r=t.EpF();t.TgZ(0,"i",23),t.NdJ("click",function(){t.CHM(r);const i=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.removeFav(i._id))}),t.qZA()}}const L=function(s){return["/productdetails",s]},D=function(){return[1,2,3,4,5]};function A(s,n){if(1&s){const r=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"header",9),t._UZ(3,"img",10),t.TgZ(4,"h3",11),t._uU(5),t.ALo(6,"cuttext"),t.qZA(),t.TgZ(7,"h4",12),t._uU(8),t.qZA(),t.TgZ(9,"div",13)(10,"span"),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"p",14),t.YNc(14,x,1,2,"i",15),t.TgZ(15,"span",16),t._uU(16),t.qZA()()()(),t.YNc(17,E,1,0,"i",17),t.YNc(18,T,1,0,"i",18),t.TgZ(19,"footer")(20,"button",19,20),t.NdJ("click",function(){const c=t.CHM(r).$implicit,v=t.MAs(21),C=t.oxw(2);return t.KtG(C.addProduct(c._id,v))}),t._uU(22,"+Add To Cart"),t.qZA()()()()}if(2&s){const r=n.$implicit,e=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(17,L,r._id)),t.xp6(1),t.Q6J("src",r.imageCover,t.LSH)("title",r.title)("alt",r.title),t.xp6(2),t.Oqu(t.xi3(6,11,r.title,2)),t.xp6(3),t.Oqu(r.category.name),t.xp6(3),t.hij(" ",t.xi3(12,14,r.price,"e\xa3")," "),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,D)),t.xp6(2),t.hij(" ",r.ratingsAverage," "),t.xp6(1),t.Q6J("ngIf",!e.whishListData.includes(r._id)),t.xp6(1),t.Q6J("ngIf",e.whishListData.includes(r._id))}}const b=function(s,n,r){return{id:"productPaginate",itemsPerPage:s,currentPage:n,totalItems:r}};function O(s,n){if(1&s){const r=t.EpF();t.TgZ(0,"section",1)(1,"h2",2),t._uU(2,"All Products"),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,A,23,20,"div",4),t.ALo(5,"paginate"),t.qZA(),t.TgZ(6,"div",5)(7,"pagination-controls",6),t.NdJ("pageChange",function(i){t.CHM(r);const c=t.oxw();return t.KtG(c.pageChanged(i))})("pageBoundsCorrection",function(i){t.CHM(r);const c=t.oxw();return t.KtG(c.pageChanged(i))}),t.qZA()()()}if(2&s){const r=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.xi3(5,5,r.products,t.kEZ(8,b,r.pageSize,r.curentPage,r.total))),t.xp6(3),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let M=(()=>{var s;class n{constructor(e,i,c,v,C){this._ProductService=e,this._CartService=i,this._ToastrService=c,this._Renderer2=v,this._WishListService=C,this.products=[],this.pageSize=0,this.curentPage=1,this.total=0,this.whishListData=[],this.whishItemNumber=0}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{console.log("products",e.data),this.products=e.data,this.pageSize=e.metadata.limit,this.curentPage=e.metadata.currentPage,this.total=e.results;const i=e.data.map(c=>c._id);this.whishListData=i}}),this._WishListService.getWishList().subscribe({next:e=>{const i=e.data.map(c=>c._id);this.whishListData=i}}),this._WishListService.whishNumber.subscribe({next:e=>{console.log("wish-list",e),this.whishItemNumber=e}})}addProduct(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(e).subscribe({next:c=>{console.log(c),console.log(c.message),this._ToastrService.success(c.message),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(c.numOfCartItems)},error:c=>{this._Renderer2.removeAttribute(i,"disabled")}})}pageChanged(e){this._ProductService.getProducts(e).subscribe({next:i=>{console.log("products",i.data),this.products=i.data,this.pageSize=i.metadata.limit,this.curentPage=i.metadata.currentPage,this.total=i.results}})}addFav(e){this._WishListService.addToWishList(e).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this.whishListData=i.data}})}removeFav(e){this._WishListService.removetWishList(e).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this.whishListData=i.data}})}}return(s=n).\u0275fac=function(e){return new(e||s)(t.Y36(m.M),t.Y36(a.N),t.Y36(l._W),t.Y36(t.Qsj),t.Y36(f.i))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4 ",4,"ngIf"],[1,"py-4"],[1,"text-main","text-center","fw-bolder","mt-3","mb-5"],[1,"row","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-3","justify-content-center"],["class","col",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-4"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"mb-0"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart1",3,"click",4,"ngIf"],[1,"main-btn","w-75","py-2",3,"click"],["btnAdd",""],[1,"fas","fa-star"],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart1",3,"click"]],template:function(e,i){1&e&&t.YNc(0,O,8,12,"section",0),2&e&&t.Q6J("ngIf",i.products.length>0)},dependencies:[u.ez,u.sg,u.O5,u.H9,p.rH,g.r,d.JX,d._s,d.LS,_.u5]}),n})()},6286:(P,h,o)=>{o.d(h,{N:()=>d});var u=o(5619),p=o(4769),g=o(9862);let d=(()=>{var _;class t{constructor(a){this._HttpClient=a,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new u.X(0)}addToCart(a){return this._HttpClient.post(this.baseUrl+"cart",{productId:a})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(a){return this._HttpClient.delete(this.baseUrl+`cart/${a}`)}updateCartCount(a,l){return this._HttpClient.put(this.baseUrl+`cart/${a}`,{count:l})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(a,l){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${a}?url=https://github.com/Dalia-Ezzat`,{shippingAddress:l})}}return(_=t).\u0275fac=function(a){return new(a||_)(p.LFG(g.eN))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),t})()}}]);