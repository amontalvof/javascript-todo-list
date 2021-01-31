(()=>{"use strict";var e={704:(e,t,n)=>{function o(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}n.d(t,{L:()=>b});var r=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.task=t,this.id=(new Date).getTime(),this.completed=!1,this.created=new Date}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,null,[{key:"fromJson",value:function(t){var n=t.id,o=t.task,r=t.completed,a=t.created,i=new e(o);return i.id=n,i.completed=r,i.created=a,i}}]),e}();function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,e},f:function e(){try{a||null==n.return||n.return()}finally{if(l)throw e}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var c=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.getLocalStorage()}return function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(e,[{key:"newTodo",value:function(e){this.todos.push(e),this.setLocalStorage()}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.setLocalStorage()}},{key:"toggleTodo",value:function(e){var t,n=a(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id==e){o.completed=!o.completed,this.setLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.setLocalStorage()}},{key:"setLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"getLocalStorage",value:function(){this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],this.todos=this.todos.map(r.fromJson)}}]),e}();function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,e},f:function e(){try{a||null==n.return||n.return()}finally{if(i)throw e}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var d=document.querySelector(".todo-list"),f=document.querySelector(".new-todo"),m=document.querySelector(".clear-completed"),v=document.querySelector(".filters"),y=document.querySelectorAll(".filter"),h=document.querySelector(".todo-count"),p=function(e){var t="\n    <li ".concat(e.completed?'class="completed"':"",' data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completed?"checked":"",">\n            <label>").concat(e.task,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=t,d.append(n.firstElementChild),n.firstElementChild};f.addEventListener("keyup",(function(e){if(13===e.keyCode&&0<f.value.length){var t=new r(f.value);b.newTodo(t),p(t),f.value=""}g()})),d.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");t.includes("input")?(b.toggleTodo(o),n.classList.toggle("completed")):t.includes("button")&&(b.deleteTodo(o),d.removeChild(n)),g()})),m.addEventListener("click",(function(){b.deleteCompleted();for(var e,t=d.children.length-1;0<=t;t--)(e=d.children[t]).classList.contains("completed")&&d.removeChild(e);g()})),v.addEventListener("click",(function(e){var t=e.target.text;if(t){y.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,o=s(d.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");switch(t){case"Active":a&&r.classList.add("hidden");break;case"Completed":a||r.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}}));var g=function(){var e=0;h.innerText="";for(var t=0;t<b.todos.length;t++)b.todos[t].completed||e++;0<=e&&1===e?h.innerText="".concat(e," item left"):0<=e&&(h.innerText="".concat(e," items left"))},b=new c;b.todos.forEach(p),g()}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(704)})();