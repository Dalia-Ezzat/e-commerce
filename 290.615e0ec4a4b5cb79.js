"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[290],{5290:(x,C,o)=>{o.r(C),o.d(C,{CartComponent:()=>m});var l=o(6814),p=o(1120),t=o(4769),b=o(6286);function _(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.MAs(11),u=t.oxw(2);return t.KtG(u.removeItem(n.product._id,a))}),t._UZ(12,"i",18),t._uU(13," Remove "),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.MAs(16),u=t.MAs(21),v=t.oxw(2);return t.KtG(v.changeCount(n.count-1,n.product._id,a,u))}),t._uU(17," - "),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",19,21),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.MAs(16),u=t.MAs(21),v=t.oxw(2);return t.KtG(v.changeCount(n.count+1,n.product._id,a,u))}),t._uU(22," + "),t.qZA()()()()}if(2&s){const r=d.$implicit;t.xp6(2),t.Q6J("src",r.product.imageCover,t.LSH)("alt",r.product.title),t.xp6(4),t.Oqu(r.product.title),t.xp6(2),t.hij(" Price: ",t.xi3(9,5,r.price,"EGP ")," "),t.xp6(11),t.hij(" ",r.count," ")}}const h=function(s){return["/payment",s]};function g(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(r);const i=t.oxw();return t.KtG(i.clear())}),t._uU(5," Clear Cart "),t.qZA()(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,_,23,8,"div",7),t.TgZ(10,"button",8),t._uU(11," Online Payment "),t._UZ(12,"img",9),t.qZA()()}if(2&s){const r=t.oxw();t.xp6(7),t.hij(" Total Price: ",t.xi3(8,3,r.cartDetails.totalCartPrice,"EGP ")," "),t.xp6(2),t.Q6J("ngForOf",r.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,h,r.cartDetails._id))}}function c(s,d){1&s&&(t.TgZ(0,"h2",22),t._uU(1,"Your Cart Is Empty..."),t.qZA())}let m=(()=>{var s;class d{constructor(e,i){this._CartService=e,this._Renderer2=i,this.cartDetails=null}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{console.log("getcart",e),this.cartDetails=e.data}})}removeItem(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:n=>{console.log("remove",n),this.cartDetails=n.data,this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(n.numOfCartItems)},error:n=>{this._Renderer2.removeAttribute(i,"disabled")}})}changeCount(e,i,n,a){e>=1&&(this._Renderer2.setAttribute(n,"disabled","true"),this._Renderer2.setAttribute(a,"disabled","true"),this._CartService.updateCartCount(i,e).subscribe({next:u=>{this.cartDetails=u.data,this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(a,"disabled")},error:u=>{this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(a,"disabled")}}))}clear(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0))}})}}return(s=d).\u0275fac=function(e){return new(e||s)(t.Y36(b.N),t.Y36(t.Qsj))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-3",3,"routerLink"],["src","./assets/images/visa-1.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],["btn2",""],[1,"text-center"]],template:function(e,i){if(1&e&&(t.YNc(0,g,13,8,"section",0),t.YNc(1,c,2,0,"ng-template",null,1,t.W1O)),2&e){const n=t.MAs(2);t.Q6J("ngIf",i.cartDetails)("ngIfElse",n)}},dependencies:[l.ez,l.sg,l.O5,l.H9,p.rH]}),d})()},6286:(x,C,o)=>{o.d(C,{N:()=>b});var l=o(5619),p=o(4769),t=o(9862);let b=(()=>{var _;class h{constructor(c){this._HttpClient=c,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new l.X(0)}addToCart(c){return this._HttpClient.post(this.baseUrl+"cart",{productId:c})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(c){return this._HttpClient.delete(this.baseUrl+`cart/${c}`)}updateCartCount(c,m){return this._HttpClient.put(this.baseUrl+`cart/${c}`,{count:m})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(c,m){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${c}?url=https://github.com/Dalia-Ezzat`,{shippingAddress:m})}}return(_=h).\u0275fac=function(c){return new(c||_)(p.LFG(t.eN))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),h})()}}]);