(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],{46:function(e,t,a){e.exports=a(55)},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),i=(a(51),a(43)),o=a(33),m=a(34),s=a(45),u=a(41),h=a(61),d=a(60),g=a(35),p=a(63),E=function(e){return l.a.createElement("div",{style:{marginBottom:"40px"}},l.a.createElement(h.a,{bg:"dark",variant:"dark"},l.a.createElement(h.a.Brand,{href:"#home",style:{fontSize:"24px"}},"Movie Forward"),l.a.createElement(d.a,{inline:!0,className:"ml-auto",action:"",onSubmit:e.handleSubmit},l.a.createElement(g.a,{type:"text",placeholder:"Seach movie",onChange:e.handleChange,className:"mr-sm-2",id:"inputSize"}),l.a.createElement(p.a,{type:"submit",variant:"outline-info"},"Search"))))},v=a(57),f=a(58),b=a(36),y=function(e){return l.a.createElement(v.a,{id:"searchBar"},l.a.createElement(f.a,null,l.a.createElement(b.a,{md:{span:4,offset:4},className:"mt-5"},l.a.createElement(d.a,{action:"",onSubmit:e.handleSubmit},l.a.createElement(d.a.Group,null,l.a.createElement(d.a.Control,{placeholder:"Seach movie",onChange:e.handleChange}))))))},w=a(44),S=a(62),k=a(59),C=function(e){var t=e.date.substring(0,4),a=Object(n.useState)(!1),r=Object(w.a)(a,2),c=r[0],i=r[1];return l.a.createElement("div",{className:"equal-height-columns"},l.a.createElement("div",{onClick:function(){return i(!0)},className:"equal-column-content cardScale"},l.a.createElement(S.a,{style:{width:"13rem",display:"inline-block",margin:"auto",border:"none",backgroundColor:"#f5f2d0",filter:"drop-shadow(20px 12px 4px black)"},className:"cardDark"},null==e.image?l.a.createElement(S.a.Img,{src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"card image",style:{width:"100% ",height:260}}):l.a.createElement(S.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.image),alt:"card image",style:{width:"100% ",height:260,border:"none"}})),l.a.createElement("div",{style:{color:"white",width:"13rem",textAlign:"center",marginTop:"25px"}},l.a.createElement("h6",null,e.title),l.a.createElement("p",null,l.a.createElement("em",null,t)))),l.a.createElement(k.a,{show:c,onHide:function(){return i(!1)},id:"modal",style:{marginLeft:-150}},l.a.createElement(v.a,{id:"modalContainer"},l.a.createElement(S.a,{style:{border:"none"}},l.a.createElement(f.a,null,l.a.createElement(b.a,{md:6,style:{padding:"20px"}},l.a.createElement(S.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.image),alt:"card image",style:{width:"100% ",border:"none"}})),l.a.createElement(b.a,{md:6,style:{padding:"30px"}},l.a.createElement("h4",null,l.a.createElement("strong",null,e.title)),l.a.createElement("p",null,t),l.a.createElement("p",null,e.overview),l.a.createElement("p",null,l.a.createElement("strong",null,"Rating: "),e.vote,"/10")))))))},x=function(e){return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(f.a,null,e.movies.map((function(e,t){return console.log(e),l.a.createElement(b.a,{key:t},l.a.createElement(C,{key:t,image:e.poster_path,title:e.title,date:e.release_date,overview:e.overview,vote:e.vote_average}))})))))},N=function(){return console.log("none"),l.a.createElement("h2",{style:{color:"white",textAlign:"center"}},"Sorry. No results match your search. Try again!")},j=function(e){for(var t=[],a=Math.ceil(e.totalMovies/e.moviesPerPage),n=1;n<=a;n++)t.push(n);return l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination",style:{marginLeft:"48%"}},t.map((function(t){return l.a.createElement("li",{key:t,className:"page-item"},l.a.createElement("a",{onClick:function(){return e.paginate(t)},href:"!#",className:"page-link"},t))}))))},P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e.tmdbAPIKey,"&query=").concat(e.state.title)).then((function(e){return e.json()})).then((function(t){e.setState({movies:Object(i.a)(t.results)}),0===e.state.movies.length?e.setState({noResults:!0}):e.setState({noResults:!1})}))},e.handleChange=function(t){e.setState({title:t.target.value})},e.state={movies:[],title:"",noResults:!1,currentPage:1},e.tmdbAPIKey="1b52a17cebb0ea565f77b99c8fecd108",e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=8*this.state.currentPage,a=t-8,n=this.state.movies.slice(a,t);return l.a.createElement("div",{className:"App"},l.a.createElement(E,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),l.a.createElement(y,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),!0===this.state.noResults?l.a.createElement(N,null):l.a.createElement(x,{search:this.state.title,movies:n}),l.a.createElement(j,{moviesPerPage:8,totalMovies:this.state.movies.length,paginate:function(t){e.setState({currentPage:t})}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.781844ff.chunk.js.map