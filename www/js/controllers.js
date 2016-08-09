angular.module('starter.controllers', ['filters'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state,$http,$ionicSideMenuDelegate,$ionicHistory,$rootScope, $location) {
		
		
		$http.get("http://api.hauduai.com.ng/header_text/")
		.success(function(response){
			$scope.header_text=response;
		 
		})
 
  $scope.loginData = {};
  $scope.downbutton=true;
  $scope.closebutton=false;
  $scope.showdr=false;
  
  
	$scope.showdrop=function(){
		if($scope.showdr==false){
			$scope.showdr=true;
			$scope.downbutton=false;
			$scope.closebutton=true;
		}else{
			$scope.showdr=false;
			$scope.downbutton=true;
			$scope.closebutton=false;
		}
	}
	$scope.showdro=function(){
		if($scope.showdrr==false){
			$scope.showdrr=true;
			$scope.downbuttonnn=false;
			$scope.closebuttonnn=true;
		}else{
			$scope.showdrr=false;
			$scope.downbuttonnn=true;
			$scope.closebuttonnn=false;
		}
	}

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
	 // console.log($scope.loginData);
    var name=$scope.loginData.username;
	var password=$scope.loginData.password;
	
    
    $http.get("http://api.hauduai.com.ng/hauduailogin?username="+name+"&password="+password)
	.success(function(response){
		alert("You have Successfully Login.");
		//$state.go('/#/app/browse');
		window.location.href='#/app/browse';
			//$location.path('/#/app/browse');
		
	localStorage.setItem("signed",true);
	localStorage.setItem("loggedin",response.first_name);
	localStorage.setItem("userid",response.id);
	localStorage.setItem("useremail",response.email);
	$scope.closeLogin();
	

	})
		.error(function(){
		alert("Please Check Your email or password then try again later.");
		})
	};
})

.controller('PlaylistsCtrl', function($scope,$state) {
  
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('dropdown', function($scope, $stateParams, $ionicModal, $http,$ionicLoading,$timeout,$location) {
	
	 $scope.shownto=true;
	$scope.hidet=false;
	//$scope.change_input=true;
	
	$scope.change_input=function(){
		//alert($scope.shownto);
		if($scope.shownto==true){
			
			$scope.hidet=true;
			$scope.shownto=false;
		}
		else if($scope.shownto==false){
		 $scope.shownto=true;
			$scope.hidet=false;
	    }
		
	}
	
	
	/* $scope.change_input=function(){
			$scope.hidet=false;
	    $scope.shownto=true;
	} */
	
	 
		$http.get("http://api.hauduai.com.ng/suffix")
		.success(function(response){
			$scope.suffix=response;
		 
		})
		
		
		$http.get ("http://api.hauduai.com.ng/employment_status")
		.success(function(response){
			$scope.employment_status=response;
		})
		
	 /* $scope.subsector="Bussiness Sector"; */
	//$scope.emp_status="Employment Status";
	/*$scope.subsubsector="Bussiness Sub Sector";
	$scope.subproffession="Profession";
	$scope.prof_affi="Profession Affiliation";
	$scope.prof_sub="Profession Sub Category"; */
	
	$http.get("http://api.hauduai.com.ng/sector")
	.success(function(response){
		$scope.sector=response;
		
		
		
	})
	$http.get("http://api.hauduai.com.ng/profession")
	.success(function(response){
		$scope.profession=response;
		
		
		
	})
	$scope.getsubprofession=function(){
		  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0,
	
  });
   $timeout(function () { 
    
  
	$http.get("http://api.hauduai.com.ng/profession_subcategory?id="+$scope.subprofession)
	.success(function(response){
		$scope.profession_subcategory=response;
		
		$ionicLoading.hide();
		
	})
	
   }, 2000);
	} 
	
	
	
	
	
	
	
	
	/*  $scope.afflicap=true;
	$scope.ends=false;
	$scope.chang_inputt=function(){
	$scope.ends=true;
	    $scope.afflicap=false;
		
	} */
	
	 $scope.afflicap=true;
	$scope.ends=false;
	//$scope.change_input=true;
	
	$scope.chang_inputt=function(){
		//alert($scope.shownto);
		if($scope.afflicap==true){
			
			$scope.ends=true;
			$scope.afflicap=false;
		}
		else if($scope.afflicap==false){
		 $scope.afflicap=true;
			$scope.ends=false;
			
	    }
		
	}
	
	
	$http.get("http://api.hauduai.com.ng/profession_affi")
	.success(function(response){
		$scope.profession_affi=response;
			//console.log(response);
	})
	
	
	
	$scope.getsubsector=function(){
		  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0,
	
  });
   $timeout(function () {
    
	$http.get("http://api.hauduai.com.ng/sector_subcategories?id="+$scope.subsector)
	.success(function(response){
		$scope.sector_subcategories=response;
		
		$ionicLoading.hide();
		
	})
	
  }, 2000);
	}
	
	
	$http.get("http://api.hauduai.com.ng/know_about_hauduai")
	.success(function(response){
		$scope.know_about_hauduai=response;
	})
	/* $scope.getsubsubsector=function(){
		  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0,
	
  });
   $timeout(function () {
    
    
	$http.get("http://api.hauduai.com.ng/sector_subsubcategories?id="+$scope.subsubsector)
	.success(function(response){
		$scope.sector_subsubcategories=response;
		
		$ionicLoading.hide();
		
	})
	
  }, 2000);
	} */
	
	
	
	
	
	$scope.Submit=function(){
		
		//($scope.cpassword==$scope.password)
		var error=false;
		var erroorr=true;
		var cpass=$scope.cpassword;
		var fname=$scope.fname;
		if(fname==undefined){
			error=true;
		//console.log(fname);
		alert("Please Fill the First Name.");
        //alert(typeof fname);				
		}	
									
			var type="user";
			
			var lname=$scope.lname;
			if(lname==undefined){
					error=true;
				alert("Please Fill the Last Name");
			}
			
			var fullname=fname+" "+lname;
			var qualified=$scope.qualified;
			if(qualified==undefined){
				error=true;
				alert("Please Select the Suffix");
			}
			//var quali=$scope.quali;
			var emp_status=$scope.emp_status;
			if(emp_status==undefined){
			     error=true;
				alert("Please select the Employee Status.");
			}
			var proaffi=$scope.proaffi;
			
			var sector=$scope.subsector;
			if(sector==undefined){
				error=true;
				alert("Please Select Bussiness Sector.");
			}
			var subsector=$scope.subsubsector;
			if(subsector==undefined){
		        error=true;
				alert("Please Select Bussiness Sub Sector.");
			}
			var profession=$scope.subprofession;
			if(profession==undefined){
				 error=true;
				alert("Please Select Profession Sector.");
			}
			var sub_profession=$scope.prof_sub;
			if(sub_profession==undefined){
				 error=true;
				alert("Please Select Profession Sub Sector.");
			}
			var email=$scope.email;
			if(email==undefined){
				error=true;
				alert("Please Fill the Email-id.");
			}
			
			var pass=$scope.password;
			 if(!(pass==cpass)) {
				erroorr=false;
				alert("Please Check the password.");
			} 
			
			var gettoknow=$scope.gettoknow;
			if(gettoknow==undefined){
				 error=true;
				alert("Please Select How did you know about Hauduai?");
			}
			 var chk=$scope.filter;
			 if(chk==undefined){
				 error=true;
				 alert("Please accept term and conditions.");
			 }
			
			if(error==false && (erroorr==true || erroorr==true)){
		
		
			
			$http.get("http://api.hauduai.com.ng/hauduai_signup?type="+type+"&first_name="+fname+"&last_name="+lname+"&full_name="+fullname+"&Suffix="+qualified+"&employment_status="+emp_status+"&bussiness_sector="+sector+"&bussiness_sector_sub="+subsector+"&profession="+profession+"&profession_sub="+sub_profession+"&email="+email+"&password="+pass+"&know_hauduai="+gettoknow+"&proaffi="+proaffi)
				.success(function(response){
					alert("You have Successfully Signed Up on Hauduai, Please Check Your Email to Activate Your Account and Login on the App After Activation.");
					$location.path('/#/playlists');
				})
				.error(function(){
						//alert("Please check and complete all compulsory fields.");
						alert("You have Registered already.");
						//$location.path('/#/playlists');
				})
			}
		
		/*else{
				alert("Please check and complete all compulsory fields.");
				//alert("Please Fill lastName");
				//alert("Please Fill suffix");
				//alert("Please Fill sector");
				//alert("Please Fill subsector");
				
				//$location.path('/#/playlists');
		}*/
			
		
	}
	/*  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
	$scope.closebtn=function(){
		$scope.modal.show();
	};  */
	
	
})

.controller('registerspecialist', function($scope, $stateParams,$http,$ionicLoading,$timeout, $location) {
	/* $scope.show=true;
	$scope.hideme=false;
	$scope.change_input=function(){
			$scope.hideme=true;
	    $scope.show=false;
		
	} */
	 $scope.show=true;
	$scope.hideme=false;
	//$scope.change_input=true;
	
	$scope.change_input=function(){
		//alert($scope.shownto);
		if($scope.show==true){
			
			$scope.hideme=true;
			$scope.show=false;
			$scope.qulaity='';
		}
		else if($scope.show==false){
		 $scope.show=true;
			$scope.hideme=false;
	    }
		
	}
	
	$http.get("http://api.hauduai.com.ng/suffix")
		.success(function(response){
			$scope.suffix=response;
		})
		
		
		$http.get ("http://api.hauduai.com.ng/employment_status")
		.success(function(response){
			$scope.employment_status=response;
		})
		/*  $scope.showmee=true;
	$scope.hide=false;
	$scope.chang_inputt=function(){
	$scope.hide=true;
	    $scope.showmee=false;
		
	} */
		$scope.showmee=true;
	    $scope.hide=false;
		$scope.chang_inputt=function(){
		//alert($scope.shownto);
		if($scope.showmee==true){
			
			$scope.hide=true;
			$scope.showmee=false;
			$scope.pro_affi='';
		}
		else if($scope.showmee==false){
		 $scope.showmee=true;
			$scope.hide=false;
			
	    }
		
	}
	$http.get("http://api.hauduai.com.ng/profession_affi")
	.success(function(response){
		$scope.profession_affi=response;
			
	})
	$http.get("http://api.hauduai.com.ng/spec_area")
	.success(function(response){
		$scope.spec_area=response;
			
	})
	
	$scope.getsubspe_area=function(){
		  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0,
	
  });
  
   $timeout(function () {
   
    
	$http.get("http://api.hauduai.com.ng/spec_sub_area?id="+$scope.spe_area)
	.success(function(response){
		$scope.spec_sub_area=response;
		
		$ionicLoading.hide();
		
	})
	
  }, 2000);
	}
	$scope.getsubspe_area2=function(){
		  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0,
	
  });
  
   $timeout(function () {
    
	  
    
	$http.get("http://api.hauduai.com.ng/spec_sub_area?id="+$scope.spe_area2)
	.success(function(response){
		$scope.spec_sub_area2=response;
		
		$ionicLoading.hide();
		
	})
	
  }, 2000);
	}
          
	$http.get("http://api.hauduai.com.ng/know_about_hauduai")
	.success(function(response){
		$scope.know_about_hauduai=response;
	})
	
	$scope.doSubmit=function(){
		//if($scope.cpassword==$scope.password){
			var cpass=$scope.cpassword;
			var eror=false;
			var eeroorr=true;
			var fname=$scope.fname;
			if(fname==undefined){
				eror=true;
				alert("Please Fill the FirstName.");
			}
			
			var type="specialist";
			var lname=$scope.lname;
			if(fname==undefined){
				eror=true;
				alert("Please Fill the LastName.");
			}
			var fullname=fname+" "+lname;
			
			var qulaity=$scope.qulaity;
			
			if(qulaity==undefined)
			{
				eror=true;
			alert("Please Select Suffix.");				
			}
			
			var emp_status=$scope.emp_status;
			
			if(emp_status==undefined)
			{
				eror=true;
			alert("Please Select Employee Status.");				
			}
			
			var spe_area1=$scope.spe_area;
			
			if(spe_area1==undefined)
			{
				eror=true;
			alert("Please Select Expertise Area1.");				
			}
			
			var spe_subarea1=$scope.spe_area_sub;
			if(spe_subarea1==undefined)
			{
				eror=true;
			alert("Please Select Expertise Sub Area1.");				
			}
			var spe_area2=$scope.spe_area2;
			var spe_subarea2=$scope.spe_area_sub2;
			var pro_aff=$scope.pro_affi;
			
			var email=$scope.email;
			if(email==undefined)
			{
				eror=true;
			alert("Please Fill email-id.");				
			}
			
			var pass=$scope.password;
			if (!(pass==cpass)){
				eeroorr=false;
				alert("Please check password");
			}
			var gettoknow=$scope.gettoknow;
			if(gettoknow==undefined)
			{
				eror=true;
			alert("Please Select How did you know about Hauduai?");				
			}
			 var chk=$scope.filter;
			 if(chk==undefined){
				 eror=true;
				 alert("Please accept term and conditions.");
			 }
			
			if(eror==false && (eeroorr==true || eeroorr==true)){
				
			$http.get("http://api.hauduai.com.ng/hauduaispecialist_signup?type="+type+"&first_name="+fname+"&last_name="+lname+"&full_name="+fullname+"&qualified="+qulaity+"&employment_status="+emp_status+"&selection_area1="+spe_area1+"&sub_category1="+spe_subarea1+"&selection_area2="+spe_area2+"&sub_category2="+spe_area2+"&email="+email+"&password="+pass+"&know_hauduai="+gettoknow+"&pro_aff="+pro_aff)
				.success(function(response){
					alert("You have Successfully Signed Up on Hauduai, Please Check Your Email to Activate Your Account And Login on the App After Activation.");
					$location.path('/#/playlists');
				})
				.error(function(){
						alert("Please check and complete all compulsory fields.");
				}) 
			
			}
		/* } else{
			alert("Please check and complete all compulsory fields.");
		}
		 */
		
	} 
	
	
	
})
.controller('newsCtrl', function($scope, $stateParams,$http) {
	$http.get("http://api.hauduai.com.ng/hauduai_news")
	.success(function(response){
		$scope.news=response;
		
	})
	
})
.controller('pollsCtrl', function($scope, $stateParams,$http) {
	
	$http.get("http://api.hauduai.com.ng/hauduaiopen_polls")
	.success(function(response){
		$scope.openpoll=response;
		//console.log(response);
		localStorage.setItem("queid",response[0].id);
		
			$http.get("http://api.hauduai.com.ng/hauduaiopenanswer_polls?id="+response[0].id)
				.success(function(response){
					$scope.openpollanswer=response;
			
			
			
			
			})
			
		
		
	})
	
	$scope.serverSideChange = function(item) {
		var ans_id=item.id;
		var queid=localStorage.getItem("queid");
		var username=localStorage.getItem("loggedin");
		var email=localStorage.getItem("email");
		var userid=localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/hauduaipollsubmit_answer?queid="+queid+"&username="+username+"&email="+email+"&userid="+userid+"&ans_id="+ans_id)
				.success(function(response){
					$scope.openpollanswer=response;
			     })
				 .error(function(response){
					 alert("You have already voted for this qusetion.Your vote not going to be count.");
					 $scope.data.serverSide="";
				 })
	
  };
	
	
	
	
	$http.get("http://api.hauduai.com.ng/hauduai_polls")
	.success(function(response){
		$scope.polls=response;
		
	})
	
})
.controller('pollsresultsCtrl', function($scope, $stateParams,$http,$stateParams) {

		var id=	$stateParams.id;
		var userid=localStorage.getItem("userid");
		$scope.submitt=function(){
			var writecomment=$scope.writecomment;
			$http.get("http://api.hauduai.com.ng/hauduaipolls_writecomment?userid="+userid+"&id="+id+"&comment="+writecomment)
			.success(function(response){
				//$scope.comment_que=response;
				$scope.writecomment="";
				$scope.again();
				
			})
		}
		    $http.get("http://api.hauduai.com.ng/hauduaipollsque_id?id="+id)
			.success(function(response){
				$scope.comment_que=response;
				
			})
			$http.get("http://api.hauduai.com.ng/hauduaipolls_comment?id="+id)
			.success(function(response){
				$scope.comment=response;
				//console.log(response);
				
			})
			$scope.again=function(){
				$http.get("http://api.hauduai.com.ng/hauduaipolls_comment?id="+id)
				.success(function(response){
					$scope.comment=response;
					//console.log(response);
					
				})
			}
	
})
/* .controller('resultpieCtrl', function($scope, $ionicHistory) {
	$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
   $scope.data = [300, 500, 100];
}) */
.controller('resultpieCtrl', function($scope, $ionicHistory,$stateParams,$http) {
	var id=$stateParams.id;
	
	$http.get("http://api.hauduai.com.ng/totalvotecount?id="+id)
	.success(function(response){
		$scope.totalcount=response[0].count;
		
		
	})
	$http.get("http://api.hauduai.com.ng/hauduaipollsque_id?id="+id)
	.success(function(response){
		$scope.comment_que=response;
		
	})
	$http.get("http://api.hauduai.com.ng/getvoteanswerjoin?id="+id)
	.success(function(response){
		//console.log(response);
		$scope.jointanswer=response;
		
			$scope.getTotal = function(){
				var arr = [];
				for (var x=0; x < response.length ;x++) {
					arr.push(response[x].count);
					
					
				}  
			 var count = 0;
				 
			   for(var i=0;  i < arr.length; i++) 
			   { 
				  count += parseInt(arr[i]); 
			   }
			   $scope.totalvote=count; 
					
			}
	})
	$http.get("http://api.hauduai.com.ng/getvote?id="+id)
	.success(function(response){
		
		
				var arr = [];
				for (var x=0; x < response.length ;x++) {
					arr.push(response[x].countspe);
					
					
				}  
				
			    var i;
			    var g=[];
				for (i = 0; i < arr.length; ++i) {
					g.push(parseInt((parseInt(arr[i])/$scope.totalvote)*100));
					//console.log(g);
					
				}
				
				$scope.data = g; 
				 
	})
	$http.get("http://api.hauduai.com.ng/getvoteanswer?id="+id)
	.success(function(response){
					
				
					var arr = [];
				for (var x=0; x < response.length ;x++) {
					arr.push(response[x].answer);
					
					
				}  
						
				$scope.labels = arr;
				
			  
	
	})
	

	
	
})
.controller('eventsCtrl', function($scope, $ionicHistory,$http,$state) {

  $scope.upcoming=function(){
		$http.get("http://api.hauduai.com.ng/hauduai_events_upcoming")
			.success(function(response){
				$scope.events=response;
		
	    })
	}
	$scope.current=function(){
		$http.get("http://api.hauduai.com.ng/hauduai_events_current")
			.success(function(response){
				$scope.events=response;
		
	    })
	}
	$scope.past=function(){
		$http.get("http://api.hauduai.com.ng/hauduai_events_past")
			.success(function(response){
			 $scope.events=response;
		
	    })
	}  
})
///////****************Expert***********
.controller('AllquestionCtrl', function($scope,$http,$ionicHistory,$state) {
	
 var id= localStorage.getItem("userid");
	
		$http.get("http://api.hauduai.com.ng/getaskedquestionsexp?id="+id)
			.success(function(response){
			  
					$scope.communityasked=response;
					
			
		    })
		
		
	
	})
.controller('proCtrl', function($scope,$http,$ionicHistory,$state) {
	
 var id= localStorage.getItem("userid");
	
	 
	
		$http.get("http://api.hauduai.com.ng/get_all_profile?id="+id)
			.success(function(response){
			 
					$scope.prof=response;
					//var abc=$scope.prof;
					//alert(abc);
					
		    }) 
	 
		
		
})
	
.controller('AllquestCtrl', function($scope,$http,$ionicHistory,$state) {
	
 var id= localStorage.getItem("userid");
	
		$http.get("http://api.hauduai.com.ng/getaskedquestions?id="+id)
			.success(function(response){
			 
					$scope.communityasked=response;
					
		    }) 
			
		
})
	
	

.controller('ask_specialistCtrl', function($scope, $ionicModal,$ionicHistory, $http, $location) {
	$scope.hello=false;
	$scope.note=false;
		
		$http.get("http://api.hauduai.com.ng/spec_area")
			.success(function(response){
				$scope.specialareamajaor=response;
		
	    })
	
	$scope.changed=function(){
		var id = $scope.quali;
		
		$http.get("http://api.hauduai.com.ng/df?id="+id)
			.success(function(response){
				
				$scope.qualii=response;
		     $scope.note=true;
	    })
	}  
	 
	$scope.submitt=function(){
		
		//$scope.modal.show();
		$scope.loginData.ques=$scope.que;
	
		
		var quali=$scope.quali;
		var que=$scope.que;
		
		var sub_field=$scope.sub_field;
		$scope.loginData.username=localStorage.getItem("loggedin");
		$scope.loginData.email=localStorage.getItem("useremail");
		
        //localStorage.setItem("userid",response.id);
        $scope.email= localStorage.getItem("useremail");            
			
			if(typeof(sub_field)!="undefined"){
				$scope.loginData.fieldd=$scope.sub_field;
			}
			else
			{
				$scope.loginData.fieldd=$scope.quali;    
			}
			
		    
			if(typeof(sub_field)!="undefined"){
				
				$http.get("http://api.hauduai.com.ng/user_listby_fieldd?field="+$scope.sub_field)
				.success(function(response){         
					$scope.specialist_user=response;
			        
				})
				  
			}
			else
			{
				
				$http.get("http://api.hauduai.com.ng/user_listby_field?field="+$scope.quali)
				.success(function(response){
				  	$scope.specialist_user=response;
			 
				})
			}
			if(typeof(que)=="undefined"){
				
				alert("Please type the Question.");
				  
			}
			/* else
			{
				$scope.modal.show();
			} */
			else if(typeof(quali)=="undefined"){
				
				alert("Please Select the Subject Matter Field.");
				  
			}
			else
			{
				$scope.modal.show();
			}
			
			
		
				//console.log("back");
				
			   	$scope.dosubmitque=function(){
					
				var user_id=localStorage.getItem("userid");
				  var loginDataexp=$scope.loginData.exp;
				  var chk=$scope.filter;
				  alert(chk);
				//console.log(loginDataexp);
				//console.log("Down");
				if(typeof(loginDataexp)=="undefined"){
					
					alert("Please Select the Expert.");
				}
				else if(loginDataexp==""){
					
					alert("Please Select the Expert.");
				}
				else if(typeof(loginDataexp)==undefined){
					
					alert("Please Select the Expert.");
				}
				 else if(typeof(chk)=="undefined"){
					
					alert("Please Select the terms and conditions.");
				}
				 else if(chk==""){
					
					alert("Please Select the terms and conditions.");
				}
				else if(typeof(chk)==undefined){
					
					alert("Please Select the terms and conditions.");
				} 
				
				
	
				//console.log($scope.loginData.exp);
				else{ 
				 
 				$http.get("http://api.hauduai.com.ng/submit_question_to_specialist?user_id="+user_id+"&que="+$scope.loginData.ques+"&exp_field="+$scope.loginData.fieldd+"&username="+$scope.loginData.username+"&email="+$scope.loginData.email+"&expert="+loginDataexp+"&chk="+$scope.filter)
				 
					.success(function(response){
						if(response.status=="Success"){
						$scope.modal.hide();
						alert("Your Question Has Been Submitted");
						}												
				      else{
					     alert("Your Question Has Not Been Submitted.");
				      }
					});
			    }
			}
				
				
					
		$scope.get_speci_profile=function(){
			
				$http.get("http://api.hauduai.com.ng/get_spec_profile?id="+$scope.loginData.exp)
				.success(function(response){
					$scope.hello=true;
					$scope.speci_profile=response[0];
				
				})
				$http.get("http://api.hauduai.com.ng/countt?id="+$scope.loginData.exp)
				.success(function(response){
					
					$scope.count=response[0].c;
				})	
				
					
				$http.get("http://api.hauduai.com.ng/get_spec_info_to_show?id="+$scope.loginData.exp)
				.success(function(response){
					
					
					$scope.infoto=response[0];
				})
		}
					          
		         

	}
	 $ionicModal.fromTemplateUrl('templates/popupForque.html', {
		scope: $scope
    }).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.closepop=function(){
	    
		$scope.modal.hide();
		$scope.speci_profile="";
		$scope.count="";
		$scope.loginData.exp="";     
		$scope.sub_field="";
		
	} 
	
	 
})
.controller('ask_communityCtrl', function($scope, $ionicModal,$ionicHistory,$http,$location) {
		
		$http.get("http://api.hauduai.com.ng/profession")
			.success(function(response){
				$scope.profession=response;
				
	    })
		
		$http.get("http://api.hauduai.com.ng/sector")
			.success(function(response){
				$scope.sector_community=response;
		      
	    })
	
	$scope.changed=function(){
		var id = $scope.subprofession;
		$scope.sub_pro_show=true; 
		$http.get("http://api.hauduai.com.ng/profession_subcategory_name?id="+id)
			.success(function(response){
				
				$scope.qualii=response;
		
	    })
	}
	$scope.changedsector=function(){
		var id = $scope.sub_sector_field;
		  $scope.sub_sec_show=true; 
		$http.get("http://api.hauduai.com.ng/sector_subcategories_name?id="+id)
			.success(function(response){
				
				$scope.s=response;
		
	    })
	}
		
	
		$scope.submitt_community_question=function(){
		//$scope.modal.show();
		$scope.loginData.ques=$scope.que;
	
		var quali=$scope.quali;
		var que=$scope.que;
		var subprofession=$scope.subprofession;
		var sectorfieldd=$scope.sectorfieldd;
		
		var sub_field=$scope.sub_field;
		
		$scope.loginData.username=localStorage.getItem("loggedin");
		$scope.loginData.email=localStorage.getItem("useremail");
		 
     $scope.email= localStorage.getItem("useremail");
	 
		if(typeof($scope.sub_p_field)!="undefined"){
			
		
			$scope.loginData.professionfieldd=$scope.sub_p_field;
		}else{
			$scope.loginData.professionfieldd=$scope.subprofession;
		}
		
		if(typeof($scope.ss)!="undefined"){
		
			$scope.loginData.sectorfieldd=$scope.ss;
		}else{
			$scope.loginData.sectorfieldd=$scope.sub_sector_field;
		}
		if(typeof(que)=="undefined"){
			
		
			alert("Please type the Question.");
		}
		 else if(typeof(subprofession)=="undefined"){
					alert("Please Select the Profession Field.");
			}
			/* else if(typeof(sectorfieldd)=="undefined"){
					alert("Please Select the Field.");
			} 			 */
			//else if(typeof(chk)==undefined){
					//alert("Please Select the Term and Conditions.");
				//}
		
		else{
			$scope.modal.show();
			}
		
		
			 
				$scope.comsubmitque=function(){
				var user_id=localStorage.getItem("userid");
				//var loginData.sectorfieldd=$scope.loginData.sectorfieldd;
				 var chk=$scope.filter;
				if(typeof(chk)==undefined){
					alert("Please Select the Term and Conditions.");
				}
				else if(chk==""){
					alert("Please Select the Term and Conditions.");
				}
					else if(typeof(chk)=="undefined"){
						alert("Please Select the Term and Conditions.");
					}
				
				else
				{
					$http.get("http://api.hauduai.com.ng/ask_question?user_id="+user_id+"&question="+$scope.loginData.ques+"&username="+$scope.loginData.username+"&useremail="+$scope.loginData.email+"&profession="+$scope.loginData.professionfieldd+"&sector="+$scope.loginData.sectorfieldd+"&chk="+$scope.filter)
					.success(function(response)
					{
						if(response.status=="success"){
						$scope.modal.hide();
						alert("Your Answer Has Been Submited");
						window.location.href='/#/app/ask_community';
					}
						else {
						  alert("Your Question not Submitted Well");
							}
			
			    });
			  }
				}
		 
		
		
	   }
		
	 $ionicModal.fromTemplateUrl('templates/popupforcomque.html', {
		scope: $scope
	  }).then(function(modal) {
		$scope.modal = modal;
	  });
	
	$scope.closepop=function(){
	
		$scope.modal.hide();
		$scope.ss="";
		$scope.sub_p_field="";
	}
	
})

 .controller('contactCtrl', function($scope, $ionicModal,$ionicHistory,$http) {
	 	$scope.Submit=function(){
		//if($scope.subject==$scope.subject){
			var name=$scope.name;
			//var type="Specialist";
			
			//var lname=$scope.lname;
			//var fullname=fname+" "+lname;
			//var qualified=$scope.qualified;
			//var quali=$scope.quali;
			//var emp_status=$scope.emp_status;
			//var proaffi=$scope.proaffi;
			
			//var sector=$scope.subsector;
			//var subsector=$scope.subsubsector;
			var email=$scope.email;
			var subject=$scope.subject;
			var answertyped=$scope.answertyped;
			
			//var pass=$scope.password;
			//var gettoknow=$scope.gettoknow;
			 if(typeof(name)=="undefined"){
				alert("Please Type your Name.");
			}
			else if(typeof(email)=="undefined"){
				alert("Please type your Email.");
			}
			else if(typeof(subject)=="undefined"){
				alert("Please type your Subject.");
			}
			else if(typeof(answertyped)=="undefined")
			 {
				 alert("PLease type your Message.");
			 }
			else{
			$http.get("http://api.hauduai.com.ng/contact_us?contact_msg="+answertyped+"&contact_name="+name+"&contact_subject="+subject+"&contact_email="+email)
				.success(function(response){
					alert("Your Message Has Been Sent");
					$location.path('/#/app/browse');
				})
				.error(function(){
						alert("Please Check your Message.");
						//alert("You have Registered already.");
						//$location.path('/#/playlists');
				})
		}	/* else{
				alert("Please Check your Message.");
				//$location.path('/#/playlists');
			} */
			
		
	}
})	
	/* $scope.Submit=function(){
	var name=$scope.name;
	var email=$scope.email;
	var subject=$scope.subject;
	var answertyped=$scope.answertyped;
	
		$http.get("http://api.hauduai.com.ng/contact_us?contact_name=&contact_email=&contact_subject=&contact_msg="+name+email+subject+answertyped)
			.success(function(response){
				if(response.status=="success"){
						$scope.modal.hide();
						alert("Your Answer Has Been  Submited");
						window.location.href='/#/app/browse';
					}
					else {
						alert("Your Question not Submitted well");
					}
			
				});
	}	 */
 
/* .controller('ask_communityCtrl', function($scope, $ionicModal,$ionicHistory,$http) {
	
		$http.get("http://api.hauduai.com.ng/profession")
			.success(function(response){
				$scope.profession=response;
				
	    })
		
		$http.get("http://api.hauduai.com.ng/sector")
			.success(function(response){
				$scope.sector_community=response;
		      
	    })
	
	$scope.changed=function(){
		var id = $scope.subprofession;
		$scope.sub_pro_show=true; 
		$http.get("http://api.hauduai.com.ng/profession_subcategory_name?id="+id)
			.success(function(response){
				
				$scope.qualii=response;
		
	    })
	}
	$scope.changedsector=function(){
		var id = $scope.sub_sector_field;
		  $scope.sub_sec_show=true; 
		$http.get("http://api.hauduai.com.ng/sector_subcategories_name?id="+id)
			.success(function(response){
				
				$scope.s=response;
		
	    })
	}
	
	$scope.submitt_community_question=function(){
		$scope.modal.show();
		$scope.loginData.que=$scope.que;
	
		
		var quali=$scope.quali;
		var que=$scope.que;
		//alert($scope.que);
		var sub_field=$scope.sub_field;
		$scope.loginData.username=localStorage.getItem("loggedin");
		$scope.loginData.email=localStorage.getItem("useremail");
		 
  
     $scope.email= localStorage.getItem("useremail");
		if(typeof($scope.sub_p_field)!="undefined"){
			
			$scope.loginData.professionfieldd=$scope.sub_p_field;
		}else{
			$scope.loginData.professionfieldd=$scope.subprofession;
		}
		
		if(typeof($scope.ss)!="undefined"){
			$scope.loginData.sectorfieldd=$scope.ss;
		}else{
			$scope.loginData.sectorfieldd=$scope.sub_sector_field;
		}
		
			
		$scope.comsubmitque=function(){
				var user_id=localStorage.getItem("userid");
				
				
				
 				$http.get("http://api.hauduai.com.ng/ask_question?user_id="+user_id+"&question="+$scope.loginData.ques+"&username="+$scope.loginData.username+"&useremail="+$scope.loginData.email+"&profession="+$scope.loginData.professionfieldd+"&sector="+$scope.loginData.sectorfieldd)
				.success(function(response){
					if(response.status=="success"){
						$scope.modal.hide();
						alert("your question Submitted well");
					}
			
				})
			
 
		}
		
		
		
		
	}
	
	 $ionicModal.fromTemplateUrl('templates/popupforcomque.html', {
		scope: $scope
	  }).then(function(modal) {
		$scope.modal = modal;
	  });
	
	$scope.closepop=function(){
	
		$scope.modal.hide();
		$scope.ss=undefined;
		$scope.sub_p_field=undefined;
	}
	
}) */

.controller('que_ansCtrl', function($scope, $ionicHistory,$stateParams,$http) {
	$scope.alter=false;
	$scope.alter1=true;
		var id=$stateParams.id;
		$http.get("http://api.hauduai.com.ng/que_ans?id="+id)
			.success(function(response){
			  
			  if(response.length > 0){
				  
				 $scope.qu_an=response; 
				 
			  }
				else{
					//alert("No Answer for this Questions");
				    //location.href="#/app/questions";
					$scope.alter=true;
					$scope.alter1=false;
					
					
				}
				
					
		    })
			
	$scope.go_back=function(){
	    $ionicHistory.goBack();
     }
	
	
})
.controller('newCtrl', function($scope, $ionicHistory,$http) {
	$http.get("http://api.hauduai.com.ng/Recentquestion")
			.success(function(response){
				 for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				} 
			  
			  $scope.listque=response;
			 
				
					
		    })
			 
	
})
.controller('answeresctrl', function($scope, $ionicHistory,$http,$stateParams) {
	var a =$stateParams.id;
	$scope.id =$stateParams.id;
	$scope.answer_notavail=false;
	$scope.answer_avail=false;
	$http.get("http://api.hauduai.com.ng/incview?id="+a)
			.success(function(response){
				 
				
					
		    })
	$http.get("http://api.hauduai.com.ng/answeres?id="+a)
			.success(function(response){
				    for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				}   
			  
			  $scope.que=response;
				
					
		    })
			$scope.livenks=[];
			$scope.noMoreItemsAvailable = true;
		$scope.loadolder=function(){	
			 var params={};
				  if( $scope.livenks.length > 0){
					 var val=$scope.livenks.length;
					 alert(val);
					
				  }else{
					var val='0';
					//alert("dfgdf"+val);
					
				  } 
		  
			$http.get("http://api.hauduai.com.ng/answeress?id="+a+"&offset="+val)
			.success(function(response){
				
				//console.log(response);
				 if(response.status!==undefined){
					 $scope.answer_notavail=true;
					
					  $scope.noMoreItemsAvailable = false;
					  alert("No More Answers");
				 }else{
					 $scope.answer_avail=true;
					
					 angular.forEach(response , function(child){
							$scope.livenks.push({ans:child.answer,
							name:child.user_name,
							
						  });
						 
					}) 
				 }
				$scope.$broadcast('scroll.infiniteScrollComplete');
				 
									
		    });
			
               
          
		};	 
	
})
.controller('answeresssctrl', function($scope, $ionicHistory,$http,$stateParams,$location) {
	
	/* var value;
localStorage.setItem('key', value); */
	var a =$stateParams.id;
	//var que=$scope.que;
	$scope.aa =$stateParams.id;
	$scope.answer_notavail=false;
	$scope.answer_avail=false;
	$http.get("http://api.hauduai.com.ng/answeres?id="+a)
			.success(function(response){
				  for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				}  
			  
			  $scope.que=response[0];
			 // alert(  $scope.que);
					
		    })
			
			 $http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function(response){
				
				$scope.question=response.setting_value ;
				 var a=$scope.question;
				 //alert(a);
				//$scope.qu= parseInt("question"); 
				//$scope.qus =qu; 
				
				
			}) 	
			$http.get("http://api.hauduai.com.ng/answeress?id="+a)
			.success(function(response){
				  

				 if(response==""){
					 $scope.totalans=0;
				 }else{
					 $scope.answer_avail=true;
					$scope.totalans=response.length;
				 }
				
					
		    })
			 $http.get("http://api.hauduai.com.ng/count_answeres?id="+a)
			
			.success(function(response){
				  
			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres=response.length;
					//alert($scope.count_answeres);
					$location.href="#/app/questioncomm";
				 
				
					
		    }) 
			//var s = '"something"';
             //var result = JSON.parse(s);
			$scope.doSubmit=function(){
				var answertyped=$scope.answertyped;
				var uname=localStorage.getItem('loggedin');
				var uid=localStorage.getItem('userid');
				var email=localStorage.getItem('useremail');
				if(typeof(answertyped)=="undefined"){
					alert("Please type the Answer.");
				}
				else{
				$http.get("http://api.hauduai.com.ng/writeans?ans="+answertyped+"&uid="+uid+"&email="+email+"&uname="+uname+"&qid="+a)
					.success(function(response){
						  
                     alert("Your Answer Has Been Submited");
					 
					window.location.href='#/app/recentans';
						
							
				 }) ;
				}
			}
			
			 
	
})

.controller('ansctrl', function($scope, $ionicHistory,$http,$stateParams,$location) {
	
	/* var value;
localStorage.setItem('key', value); */
	var a =$stateParams.id;
	//var que=$scope.que;
	$scope.aa =$stateParams.id;
	$scope.answer_notavail=false;
	$scope.answer_avail=false;
	$http.get("http://api.hauduai.com.ng/answeres?id="+a)
			.success(function(response){
				  for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				}  
			  
			  $scope.que=response;
			 // alert(  $scope.que);
					
		    })
			
			  $http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function(response){
				
				$scope.question=response.setting_value ;
				 var a=$scope.question;
				// alert(a);
				 //var word="a |htmlToPlaintext";
				//$scope.qus=a;
				//var qus;
				//$scope.qus = parseInt("a", 10); 
				//alert(word);
				
			}) 	
			$http.get("http://api.hauduai.com.ng/answeress?id="+a)
			.success(function(response){
				  

				 if(response==""){
					 $scope.totalans=0;
				 }else{
					 $scope.answer_avail=true;
					$scope.totalans=response.length;
				 }
				
					
		    })
			 $http.get("http://api.hauduai.com.ng/count_answeres?id="+a)
			
			.success(function(response){
				  
			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres=response.length;
					//alert($scope.count_answeres);
					//$location.href="#/app/new";
				 
				
					
		    }) 
			//var s = '"something"';
             //var result = JSON.parse(s);
			$scope.doSubmit=function(){
				var answertyped=$scope.answertyped;
				var uname=localStorage.getItem('loggedin');
				var uid=localStorage.getItem('userid');
				var email=localStorage.getItem('useremail');
				if(typeof(answertyped)=="undefined"){
					alert("Please type the Answer.");
				}
				else{
				$http.get("http://api.hauduai.com.ng/writeans?ans="+answertyped+"&uid="+uid+"&email="+email+"&uname="+uname+"&qid="+a)
					.success(function(response){
						  
                     alert("Your Answer Has Been  Submited");
					 
					window.location.href='#/app/new';
						
							
				 }) ;
				}
			}
			
			 
	
})

.controller('anserCtrl', function($scope, $ionicHistory,$http,$stateParams,$location) {
	
	/* var value;
localStorage.setItem('key', value); */
	var a =$stateParams.id;
	//var que=$scope.que;
	$scope.aa =$stateParams.id;
	$scope.answer_notavail=false;
	$scope.answer_avail=false;
	$http.get("http://api.hauduai.com.ng/answeres?id="+a)
			.success(function(response){
				  for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				}  
			  
			  $scope.que=response;
			 // alert(  $scope.que);
					
		    })
			
			/*  $http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function(response){
				
				$scope.question=response.setting_value ;
				var a="question |htmlToPlaintext";
				$scope.qus=a;
				
				
			}) 	 */	
			 $http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function(response){
				
				$scope.question=response.setting_value ;
				var vc=$scope.question;
				//alert(vc);
				 var a="vc |htmlToPlaintext";
				// alert(a);
				//$scope.qus=a; 
				
				//$scope.qus = parseInt(qus, 10); 
				
				
			}) 	
			$http.get("http://api.hauduai.com.ng/answeress?id="+a)
			.success(function(response){
				  

				 if(response==""){
					 $scope.totalans=0;
				 }else{
					 $scope.answer_avail=true;
					$scope.totalans=response.length;
				 }
				
					
		    })
			 $http.get("http://api.hauduai.com.ng/count_answeres?id="+a)
			
			.success(function(response){
				  
			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres=response.length;
					//alert($scope.count_answeres);
					//$location.href="#/app/new";
				 
				
					
		    }) 
			//var s = '"something"';
             //var result = JSON.parse(s);
			$scope.doSubmit=function(){
				var answertyped=$scope.answertyped;
				
				var uname=localStorage.getItem('loggedin');
				var uid=localStorage.getItem('userid');
				var email=localStorage.getItem('useremail');
				if(typeof(answertyped)=="undefined"){
					alert("Please type the Answer.");
				}
				else{
				 $http.get("http://api.hauduai.com.ng/writeans?ans="+answertyped+"&uid="+uid+"&email="+email+"&uname="+uname+"&qid="+a)
					.success(function(response){
						  
                     alert("Your Answer Has Been Submited");
					 
					window.location.href='#/app/mostresponse';
						
							
				 }) ; 
				
			}
			}	
			 
	
})
.controller('mostrespCtrl', function($scope, $ionicHistory,$http) {
	$http.get("http://api.hauduai.com.ng/MostAnswer")
			.success(function(response){
				  for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				}  
			  
			  $scope.listque=response;
				//alert( $scope.listque);
					
		    })
			 
	
})
.controller('noansCtrl', function($scope, $ionicHistory,$http,$timeout) {
	$timeout(function () {
    
	$http.get("http://api.hauduai.com.ng/noAnswer")
			.success(function(response){
				/* for(var i=0;i<=response.length-1;i++){
						console.log(response[i]);
				} */
			  
			  $scope.listque=response;
				
					
		    })
	 }, 2000);
	
	$scope.getsubspe_area2=function(){
		  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0,
	
  });
	}
})
.controller('recentansCtrl', function($scope, $ionicHistory,$http) {
	$http.get("http://api.hauduai.com.ng/RecentAnswered")
			.success(function(response){
				for(var i=0;i<=response.length-1;i++){
						//console.log(response[i]);
				}
			  
			  $scope.listque=response;
				
					
		    })
			
	
})
.controller('BrowseCtrl', function($scope, $ionicHistory) {
	//$ionicHistory.clearHistory();
	$scope.name=localStorage.getItem("loggedin");
	$scope.userid=localStorage.getItem("userid");
	
});


  

