"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[621],{5592:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1597),r=function(e){return e.isCurrent?{className:"nav-link active"}:{className:"nav-link"}},c=function(e){return n.createElement(l.rU,Object.assign({getProps:r},e))},m=function(e){var t=e.siteTitle;return n.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-primary"},n.createElement("div",{className:"container-fluid"},n.createElement(l.rU,{to:"/",className:"navbar-brand",href:"#"},t),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"main-navbar"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/"},n.createElement("b",null,"Team"))),n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/subject-list"},n.createElement("b",null,"Subject"))),n.createElement("li",{className:"nav-item"},n.createElement(c,{to:"/student-list"},n.createElement("b",null,"Student")))))))};m.defaultProps={siteTitle:""};var s=m,i=function(e){var t,a=e.children,r=(0,l.K2)("3649515864");return console.log(r),n.createElement(n.Fragment,null,n.createElement(s,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},n.createElement("main",null,a)))}},7121:function(e,t,a){a.r(t),a.d(t,{SectionCard:function(){return m},default:function(){return c}});var n=a(7294),l=a(5592),r=a(1597);function c(e){e.data;var t={name:"Syedabdulrohman Alidrid",student_subject:[{subject_id:{name:"stat",teacher_name:"asis",section_id:[{day:"thu",time:"10.00 - 11.50",sec:2},{day:"sun",time:"13.00 - 14.50",sec:1}]}},{subject_id:{name:"math",teacher_name:"syed",section_id:[{day:"wed",time:"10.00 - 11.50",sec:1},{day:"mon",time:"10.00 - 11.50",sec:2}]}}]};return n.createElement(l.Z,null,n.createElement("section",{className:"py-5 container"},n.createElement("div",null,n.createElement("h2",null,t.name)),n.createElement("hr",null),n.createElement("table",{class:"table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{scope:"col"},"Subject Name"),n.createElement("th",{scope:"col"},"Teacher"),n.createElement("th",{scope:"col"}))),n.createElement("tbody",null,t.student_subject.map((function(e){var t=e.subject_id;return n.createElement("tr",null,n.createElement("td",null,t.name),n.createElement("td",null,t.teacher_name),n.createElement("td",null,n.createElement(r.rU,{to:"/subject/"+t.id,className:"btn btn-primary"},"Detail")))}))))))}function m(e){var t=e.data;return n.createElement("div",{class:"card w-100 mt-4"},n.createElement("div",{class:"card-body"},n.createElement("h5",{class:"card-title"},"Section ",t.number),t.periods.map((function(e){return n.createElement("h6",null,e.day," ",e.start," - ",e.end)})),n.createElement("hr",null),n.createElement("table",{class:"table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{scope:"col"},"Student ID"),n.createElement("th",{scope:"col"},"First Name"),n.createElement("th",{scope:"col"},"Last Name"))),n.createElement("tbody",null,t.student.map((function(e){return n.createElement("tr",null,n.createElement("th",{scope:"row"},e.Member_id.student_id),n.createElement("td",null,e.Member_id.first_name),n.createElement("td",null,e.Member_id.last_name))}))))))}}}]);
//# sourceMappingURL=component---src-pages-student-js-efd0eb74a9344be70c8f.js.map