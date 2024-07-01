(()=>{"use strict";class t{constructor(t){this.data=t,this.next=null}}const e=new class{constructor(){this.head=null,this.size=0,this.tail=null}append(e){const i=new t(e);this.head?(this.tail.next=i,this.tail=i):(this.head=i,this.tail=i),this.size++}prepend(e){const i=new t(e);i.next=this.head,this.head=i,this.tail||(this.tail=i),this.size++}at(t){if(t>=this.size)return null;let e=0,i=this.head;for(;e<t;)i=i.next,e++;return i}pop(){if(!this.head)return null;if(this.head===this.tail){const t=this.head;return this.head=null,this.tail=null,this.size--,t}let t=this.head,e=this.head;for(;e.next;)t=e,e=e.next;return t.next=null,this.tail=t,this.size--,e}contains(t){let e=this.head;for(;e;){if(e.data===t)return!0;e=e.next}return!1}find(t){let e=this.head;for(;e;){if(e.data===t)return e;e=e.next}return null}toString(){let t=this.head,e="";for(;t;)e+=`(${t.data}) -> `,t=t.next;return e+"null"}insertAt(e,i){if(e>this.size)return null;if(0===e)return void this.prepend(i);if(e===this.size)return void this.append(i);let s=new t(i),n=this.at(e-1);s.next=n.next,n.next=s,this.size++}removeAt(t){if(t>=this.size)return null;if(0===t){const t=this.head;return this.head=this.head.next,this.size--,t}let e=this.at(t-1);const i=e.next;return e.next=i.next,t===this.size-1&&(this.tail=e),this.size--,i}};e.append(1),e.append(2),e.append(3),e.prepend(0),e.prepend(-1),console.log(e.toString())})();