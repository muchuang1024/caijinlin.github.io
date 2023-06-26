(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{375:function(t,v,_){"use strict";_.r(v);var a=_(14),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("blockquote",[v("p",[t._v("<<从0开始学架构>> 学习笔记Day06：高性能架构模式-分库分表")])]),t._v(" "),v("h1",{attrs:{id:"分库分表原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分库分表原理"}},[t._v("#")]),t._v(" 分库分表原理")]),t._v(" "),v("blockquote"),t._v(" "),v("p",[t._v("当数据量达到千万甚至上亿条的时候，单台数据库服务器的存储能力会成为系统的瓶颈，主要体现在这几个方面：")]),t._v(" "),v("ul",[v("li",[t._v("数据量太大，读写的性能会下降，即使有索引，索引也会变得很大，性能同样会下降")]),t._v(" "),v("li",[t._v("数据文件会变得很大，数据库备份和恢复需要耗费很长时间")]),t._v(" "),v("li",[t._v("数据文件越大，极端情况下丢失数据的风险越高（机房火灾导致数据库主备机都发生故障）")])]),t._v(" "),v("p",[t._v("基于上述原因，单个数据库服务器存储的数据量不能太大，需要控制在一定的范围内。为了满足业务数据存储的需求，就需要将存储分散到多台数据库服务器上。")]),t._v(" "),v("h1",{attrs:{id:"分库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分库"}},[t._v("#")]),t._v(" 分库")]),t._v(" "),v("p",[t._v("分库指的是按照业务模块将数据分散到不同的数据库服务器。例如，一个简单的电商网站，包括用户、商品、订单三个业务模块，我们可以将用户数据、商品数据、订单数据分开放到三台不同的数据库服务器上，而不是将所有数据都放在一台数据库服务器上。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/71/c9/71f41d46cc5c0405f4d4dc944b4350c9.jpg?wh=2722*1969",alt:""}})]),t._v(" "),v("p",[t._v("分库带来的问题：")]),t._v(" "),v("ol",[v("li",[t._v("join 操作问题")]),t._v(" "),v("li",[t._v("事务问题")]),t._v(" "),v("li",[t._v("备份成本问题")])]),t._v(" "),v("h1",{attrs:{id:"分表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分表"}},[t._v("#")]),t._v(" 分表")]),t._v(" "),v("p",[t._v("同一业务的单表数据也会达到单台数据库服务器的处理瓶颈。例如，淘宝的几亿用户数据，如果全部存放在一台数据库服务器的一张表中，肯定是无法满足性能要求的，此时就需要对单表数据进行拆分。")]),t._v(" "),v("p",[t._v("单表数据拆分有两种方式：垂直分表和水平分表。示意图如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static001.geekbang.org/resource/image/13/40/136bc2f01919edcb8271df6f7e71af40.jpg?wh=4603*2413",alt:""}})]),t._v(" "),v("p",[t._v("垂直分表带来的问题：")]),t._v(" "),v("ol",[v("li",[t._v("表操作的数量增加")])]),t._v(" "),v("p",[t._v("水平分表带来的问题：")]),t._v(" "),v("ol",[v("li",[t._v("路由算法")]),t._v(" "),v("li",[t._v("join 操作")]),t._v(" "),v("li",[t._v("count() 操作")]),t._v(" "),v("li",[t._v("order by 操作")])])])}),[],!1,null,null,null);v.default=r.exports}}]);