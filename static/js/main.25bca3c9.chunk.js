(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{25:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(3),n=s.n(c),i=s(2),r=s(4),o=s(6),l=s(5),u=(s(25),s(0)),m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"block_main",children:Object(u.jsxs)("div",{className:"block_main_content",children:[Object(u.jsx)("p",{children:" \u0413\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u0434\u043e\u043c"}),Object(u.jsx)("p",{className:"block_main_content_title",children:'\u042d\u043b\u043b\u0438\u043d\u0433 " wwwwwww "'})]})})})},j=(s(27),s(8)),b=s.n(j),h=s(14),d=function e(){var t=this;Object(i.a)(this,e),this.apiKey="http://127.0.0.1:8081/room/all",this.getResource=function(){var e=Object(h.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((s=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));case 5:return e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRoom=function(){var e=Object(h.a)(b.a.mark((function e(s){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t.apiKey));case 2:return a=e.sent,e.abrupt("return",t._transformRoom(a[s]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformRoom=function(e){return{id:e.id,title:e.title,description:e.description,price:e.price,links:[{link:e.links[0].link},{link:e.links[1].link},{link:e.links[2].link},{link:e.links[3].link}]}}},p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).menuStatus=function(){a.setState({menuActiveStatus:!a.state.menuActiveStatus})},a.a=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},a.state={menuActiveStatus:!1},a}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"NavigationBlock",id:"Up",children:Object(u.jsx)("div",{className:"burger-btn",onClick:this.menuStatus,children:Object(u.jsx)("span",{})})}),Object(u.jsxs)("div",{className:this.state.menuActiveStatus?"menu active":"menu",children:[Object(u.jsx)("div",{className:"blur"}),Object(u.jsx)("div",{className:"menu__content",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#aboutus",className:"href",children:"\u041e \u043d\u0430\u0441"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#carousel-rooms",className:"href",children:"\u041d\u043e\u043c\u0435\u0440\u0430"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#booking",className:"href",children:"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#contacts",className:"href",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})})]}),Object(u.jsx)("button",{id:"upper",onClick:this.a,children:" "})]})}}]),s}(a.Component),x=(s(29),s.p+"static/media/a6.d5351150.jpg"),O=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"\u041e \u043d\u0430\u0441"}),Object(u.jsxs)("div",{className:"wrapper_block",children:[Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("p",{className:"one",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?"}),Object(u.jsx)("img",{className:"wrapper_img",src:x,alt:"ss"})]}),Object(u.jsxs)("div",{class:"wrapper",children:[Object(u.jsx)("img",{className:"wrapper_img sec",src:x,alt:"ss"}),Object(u.jsx)("p",{className:"one",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?"})]}),Object(u.jsxs)("div",{class:"wrapper",children:[Object(u.jsx)("p",{className:"one",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?"}),Object(u.jsx)("img",{className:"wrapper_img",src:x,alt:"ss"})]})]})]})},f=(s(30),s(41)),v=s.p+"static/media/m.795aade0.jpg",g=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={char:{}},e.hotelService=new d,e.changeState=function(t){e.setState({char:t}),console.log(e.state.char)},e.chooseRoom=function(t){console.log("id = ".concat(t)),e.hotelService.getRoom(t).then(e.changeState)},e.chooseRoomReverse=function(t){e.setState({id:--t}),e.hotelService.getRoom(t-1).then(e.changeState)},e.changeRoom=function(){4===e.state.char.id?e.chooseRoom(0):e.chooseRoom(e.state.char.id)},e.changeRoomReverse=function(){e.chooseRoomReverse(e.state.char.id)},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.chooseRoom(0)}},{key:"render",value:function(){var e=this.state.char,t=e.id,s=e.title,a=e.description,c=e.price;e.links;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("svg",{className:1===t?"changeroom_right hidden":"changeroom_right",onClick:this.changeRoomReverse,viewBox:"0 0 9 14",children:Object(u.jsx)("path",{className:"svg-arrow",d:"M6.660,8.922 L6.660,8.922 L2.350,13.408 \r L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 \r L6.660,8.922 Z"})}),Object(u.jsx)("svg",{className:4===t?"changeroom_left hidden":"changeroom_left",viewBox:"0 0 9 14",onClick:this.changeRoom,children:Object(u.jsx)("path",{className:"svg-arrow",d:"M6.660,8.922 L6.660,8.922 \r L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515\r L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"})}),Object(u.jsxs)("div",{className:"block_wr",children:[Object(u.jsx)("h5",{className:"carousel_title",id:"carousel-rooms"}),Object(u.jsxs)("div",{className:"block_rooms",children:[Object(u.jsx)("div",{className:"block_rooms_img",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(f.a.Item,{children:Object(u.jsx)("img",{className:"d-block",src:v,alt:s})}),Object(u.jsx)(f.a.Item,{children:Object(u.jsx)("img",{className:"d-block",src:v,alt:"Second slide"})}),Object(u.jsx)(f.a.Item,{children:Object(u.jsx)("img",{className:"d-block",src:v,alt:"Third slide"})})]})}),Object(u.jsxs)("div",{className:"block_rooms_text_content",children:[Object(u.jsx)("h6",{className:"title_content title",children:s}),Object(u.jsx)("p",{className:"text_content description",children:a})]}),Object(u.jsxs)("div",{className:"block_wr_prices",children:[Object(u.jsx)("div",{className:"wr_prices_text",children:Object(u.jsxs)("p",{children:[" \u0426\u0435\u043d\u0430 (\u043c\u0430\u0439 - \u0438\u044e\u043b\u044c): ",Object(u.jsx)("br",{className:"br_prices"})," ",c," \u0440\u0443\u0431\u043b\u0435\u0439 ",Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"\u0437\u0430 \u043d\u043e\u0447\u044c"})]})}),Object(u.jsx)("button",{className:"carousel_button",children:" \u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})]})]})]})}}]),s}(a.Component),N=s(10),k=(s(32),s(20)),_=s.n(k),w=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).onValueChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){console.log(a.state.firstName),e.preventDefault(),a.setState({firstName:"",lastName:"",middleName:"",phone:"",startDate:"",lastDate:""}),a.postFun()},a.state={firstName:"",lastName:"",middleName:"",phone:"",startDate:"",lastDate:""},a}return Object(r.a)(s,[{key:"postFun",value:function(){var e={method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:JSON.stringify({person:{phone_number:this.state.phone,first_name:this.state.firstName,last_name:this.state.lastName,father_name:this.state.middleName},room:2,dates:{arrive_date:"2022-08-06",leave_date:"2022-09-07"}})};console.log(e.body),fetch("https://jsonplaceholder.typicode.com/posts",{req:e}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.firstName,a=t.lastName,c=t.middleName,n=t.phone,i=t.startDate,r=t.lastDate;return Object(u.jsxs)("div",{className:"book_block",id:"booking",children:[Object(u.jsxs)("div",{className:"book_block_textcontent",children:[Object(u.jsx)("h4",{className:"textcontent_title",children:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440"}),Object(u.jsxs)("p",{className:"textcontent_text",children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,",Object(u.jsx)("br",{}),"temporibus fugit, facilis voluptas autem quia fuga impedit similique",Object(u.jsx)("br",{}),"voluptatibus quaerat fugiat quas quod reprehenderit",Object(u.jsx)("br",{})," maiores pariatur excepturi culpa, numquam tempora?"]})]}),Object(u.jsxs)("form",{className:"book_block_form",onSubmit:this.onSubmit,children:[Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("label",{children:[" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",Object(u.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",name:"firstName",value:s,onChange:this.onValueChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:[" \u0424\u0430\u043c\u0438\u043b\u0438\u044f",Object(u.jsx)("input",{type:"text",title:"esfbdsbfh",className:"form-control new-post-label",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",name:"lastName",value:a,onChange:this.onValueChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:[" \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",Object(u.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",name:"middleName",value:c,onChange:this.onValueChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:[" \u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430",Object(u.jsx)("input",{type:"date",className:"form-control",placeholder:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430",name:"startDate",value:i,onChange:this.onValueChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:[" \u0414\u0430\u0442\u0430 \u043e\u0442\u044a\u0435\u0437\u0434\u0430",Object(u.jsx)("input",{type:"date",className:"form-control new-post-label",placeholder:"\u0414\u0430\u0442\u0430 \u043e\u0442\u044a\u0435\u0437\u0434\u0430",name:"lastDate",value:r,onChange:this.onValueChange})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:[" \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",Object(u.jsx)(_.a,{mask:"(+7) 999 999-99-99",className:"form-control new-post-label",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:n,name:"phone",onChange:this.onValueChange}),Object(u.jsx)("button",{type:"submit",onClick:function(t){return e.onSubmit(t)},className:"book_block_btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]}),Object(u.jsx)("br",{})]})]})}}]),s}(a.Component),q=(s(34),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"footer_block",id:"contacts",children:[Object(u.jsx)("div",{className:"footer_block_map"}),"\u041d\u043e\u043c\u0435\u0440\u0430 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 ",Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"tel:+78142332211",children:"+7(814)-233-22-11"})," - \u0418\u0433\u043e\u0440\u044c \u0410\u0440\u0442\u0435\u043c\u043e\u0432\u0438\u0447",Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"tel:+78142332211",children:"+7(814)-233-22-11"})," - \u0418\u0433\u043e\u0440\u044c \u0410\u0440\u0442\u0435\u043c\u043e\u0432\u0438\u0447"]})]})})}),y=(s(35),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"main_img",children:[Object(u.jsx)(p,{}),Object(u.jsx)(m,{})]}),Object(u.jsx)(O,{}),Object(u.jsx)(g,{}),Object(u.jsx)(w,{}),Object(u.jsx)(q,{})]})}}]),s}(a.Component));s(36);n.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.25bca3c9.chunk.js.map