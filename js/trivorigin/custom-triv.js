function tabDashboardBuySell(){$(".currency-sell").hide(),$("#dashboard-sell").click(function(){console.log("work3"),$("#dashboard-sell").addClass("active"),$("#dashboard-buy").removeClass("active"),$(".currency-list").fadeOut(300,()=>{$(".currency-sell").fadeIn(300)})}),$("#dashboard-buy").click(function(){console.log("work4"),$("#dashboard-buy").addClass("active"),$("#dashboard-sell").removeClass("active"),$(".currency-sell").fadeOut(300,()=>{$(".currency-list").fadeIn(300)})})}function paginationSell(){$(".sell-page2").hide(),$("#click-sell-page2").click(function(){console.log("work8"),$(".sell-page1").fadeOut(300,()=>{$(".sell-page2").fadeIn(300)})}),$("#click-sell-page1").click(function(){console.log("work9"),$(".sell-page2").fadeOut(300,()=>{$(".sell-page1").fadeIn(300)})})}$(function(){$(".icon-burger-menu").click(function(){$(".sidebar").removeClass("hide-menu").addClass("slide-menu")})}),$(function(){$(".main-section").click(function(){$(".sidebar").removeClass("slide-menu").addClass("hide-menu")})}),$(function(){$(".menu").click(function(){$(".sidebar").removeClass("slide-menu").addClass("hide-menu")})}),$(function(){$(".brand").click(function(){$(".sidebar").removeClass("slide-menu").addClass("hide-menu")})}),$(".navbar-nav>li>a").on("click",function(){$(".navbar-collapse").collapse("hide")}),$(".navbar-nav>li>a").on("click",function(){$(".navbar-collapse").collapse("hide")}),tabDashboardBuySell(),paginationSell();