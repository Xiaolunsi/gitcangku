      
      
      
      
      
      
    var app=angular.module("app",["ui.router"]);
        
        app.controller("mycon",function($scope,$rootScope,$timeout,$location){
        	$scope.huanying=true;
        	$rootScope.color=["color",,];
        	$rootScope.sref="shouye";
        	$rootScope.a=function(i){
        		$rootScope.color=[i==0?"color":"",i==1?"color":"",i==2?"color":""];
        		$rootScope.sref=i==0?"shouye":i==1?"zhangdan":i==2?"wode":"";
        	}
        	$timeout(function(){
        		$location.url("");
        		$scope.huanying=false;
        	},3000)
        })
        
        app.controller("mycon1",function($scope){
        	$scope.a1=function(){
        		$scope.show1=true;
        	}
        	$scope.a2=function(){
        		$scope.show1=false;
        	}
        })
        
        app.controller("mycon12",function($scope){
        	$scope.b1=function(){
        		$scope.show2=true;
        	}
        	$scope.b2=function(){
        		$scope.show2=false;
        	}
        })
        
        app.controller("mycon2",function($scope){
        	$scope.c1=function(){
        		$scope.show3=true;
        	}
        	$scope.c2=function(){
        		$scope.show3=false;
        	}
        })
        
        app.controller("mycon3",function($scope){
          var myswiper=new Swiper(".swiper2",{
          	effect:"flip",
          	keyboardControl : true,
          	mousewheelControl : true
          });
          $scope.a=["color1",,]
          $scope.swiper_qiehuan=function(index){
          	myswiper.slideTo(index);
          	$scope.a=[index==0?"color1":"",index==1?"color1":"",index==2?"color1":""]
          }
          $(".swiper2>slide").tap(function(){
        	   var a=myswiper.activeIndex;
        	   console.log(a)
          })
          
        })
        
        
        
		app.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/shouye');//重定向
			$stateProvider
			//首页
			.state('shouye',{
				url:'/shouye',
				templateUrl:'html/shouye.html',
				controller:'mycon1'
			})
			.state('shouye.sy1',{
				url:'/sy1',
				templateUrl:'html/sy1.html'
			})
			.state('shouye.sy2',{
				url:'/sy2',
				templateUrl:'html/sy2.html',
				controller:'mycon12'
			})
			//账单
			.state('zhangdan',{
				url:'/zhangdan',
				templateUrl:'html/zhangdan.html',
				controller:'mycon3'
			})
			//客服
			.state('kefu',{
				url:'/kefu',
				templateUrl:'html/kefu.html'
			})
			//我的
			.state('wode',{
				url:'/wode',
				templateUrl:'html/wode.html',
				controller:'mycon2'
			})
			.state('wode.wd1',{
				url:'/wd1',
				templateUrl:'html/wd1.html'
			})
			.state('wode.wd2',{
				url:'/wd2',
				templateUrl:'html/wd2.html'
			})
			.state('wode.wd3',{
				url:'/wd3',
				templateUrl:'html/wd3.html'
			})
		})