angular.module('starter.controllers', ['filters'])

	.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $http, $ionicSideMenuDelegate, $ionicHistory, $ionicPopup, $rootScope, $location, $ionicPlatform, $window) {


		$scope.logout = function () {

			var login_id = localStorage.getItem("userid");
			var apst = localStorage.getItem("appstatus");

			$http.get("http://api.hauduai.com.ng/logout?type=" + apst + "&id=" + login_id)
			localStorage.setItem("appstatus", '');
			localStorage.setItem("popup_status", '');
			window.location.href = '#/front_page';
			window.location.reload(true);

		}

		$scope.openpage = function(){
			window.location.href = '#/lecturer_register';
			window.location.reload(true);
		}

		$scope.openpagee = function(){
			window.location.href = '#/student_register';
			window.location.reload(true);
		}

		$scope.openregister = function(){
			window.location.href = '#/registerspecial';
			window.location.reload(true);
		}

		$scope.openregisterr = function(){
			window.location.href = '#/register';
			window.location.reload(true);
		}

		$scope.refreshing = function(){
			window.location.reload(true);
		}
		$ionicSideMenuDelegate.canDragContent(false)

		$http.get("http://api.hauduai.com.ng/header_text_with_image/")
			.success(function (response) {
				$scope.header_text_with = response;

			})
		$http.get("http://api.hauduai.com.ng/header_text/")
			.success(function (response) {
				$scope.header_text = response;

			})

		$http.get("http://api.hauduai.com.ng/stu_header_text/")
			.success(function (response) {
				$scope.stu_headertext = response;

			})

		$scope.start = function () {
			window.location.reload(true);

		}

		$scope.loginData = {};
		$scope.downbutton = true;
		$scope.closebutton = false;
		$scope.showdr = false;

		$scope.downbuttonnn = true;
		$scope.closebuttonnn = false;
		$scope.showdrr = false;

		$scope.downbtn = true;
		$scope.closebtn = false;
		$scope.showdrroo = false;

		$scope.dowwwnbtn = true;
		$scope.closebtnnnn = false;
		$scope.shwdrroo = false;


		$scope.showdroop = function () {
			if ($scope.shwdrroo == false) {
				$scope.shwdrroo = true;
				$scope.dowwwnbtn = false;
				$scope.closebtnnnn = true;
			} else {
				$scope.shwdrroo = false;
				$scope.dowwwnbtn = true;
				$scope.closebtnnnn = false;
			}
		}

		$scope.showdrroop = function () {
			if ($scope.showdrroo == false) {
				$scope.showdrroo = true;
				$scope.downbtn = false;
				$scope.closebtn = true;
			} else {
				$scope.showdrroo = false;
				$scope.downbtn = true;
				$scope.closebtn = false;
			}
		}

		$scope.menu_status = localStorage.getItem("appstatus");
		$scope.usrtype = localStorage.getItem("usr_type");
		$scope.student_login_id = localStorage.getItem("userid");

		$scope.reladPagee = function () {

			location.href = '#/app/askforexp';
			window.location.reload(true);

		}
		$scope.reloadPgee = function () {

			location.href = '#/app/askforcomm';
			window.location.reload(true);

		}

		$scope.showdrop = function () {

			if ($scope.showdr == false) {
				$scope.showdr = true;
				$scope.downbutton = false;
				$scope.closebutton = true;
			} else {
				$scope.showdr = false;
				$scope.downbutton = true;
				$scope.closebutton = false;
			}
		}

		$scope.quesid = localStorage.getItem("stuans_id");
		$scope.qlecid = localStorage.getItem("lecans_id");
		$scope.qexpid = localStorage.getItem("expans_id");
		$scope.qcomid = localStorage.getItem("comans_id");

		$scope.reloadPagee = function () {

			location.href = '#/app/questions_to_expert';
			window.location.reload(true);

		}
		$scope.relodPagee = function () {

			location.href = '#/app/questions_to_community';
			window.location.reload(true);

		}

		$scope.open = function () {

			localStorage.setItem('status_noti', 'undefined');
			localStorage.setItem('status_noti_sub', 'undefined');
			$scope.status_noti = localStorage.getItem('status_noti');
			$scope.status_noti_sub = localStorage.getItem('status_noti_sub');
			//var ert = localStorage.setItem("stuans_id", id);
		
		}

		$scope.menuclick = function () {
			$scope.status_noti = localStorage.getItem("status_noti");
			$scope.status_noti_sub = localStorage.getItem("status_noti_sub");


		}

		$scope.showdro = function () {
			if ($scope.showdrr == false) {
				$scope.showdrr = true;
				$scope.downbuttonnn = false;
				$scope.closebuttonnn = true;
			} else {
				$scope.showdrr = false;
				$scope.downbuttonnn = true;
				$scope.closebuttonnn = false;
			}
		}

		$scope.reloadPag = function () {

			location.href = '#/app/expquestion';
			window.location.reload(true);

		}
		$scope.rloadPagee = function () {

			location.href = '#/app/communityans';
			window.location.reload(true);

		}

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;

			// Triggered in the login modal to close it
			$scope.closeLogin = function () {
				$scope.modal.hide();
				$scope.loginData.username = "";
				$scope.loginData.password = "";
			};

			$scope.myreload = function () {
				$location.path('/app/forgotpass');
			}

			// Open the login modal
			$scope.login = function () {
				$scope.modal.show();
				$scope.loginData.username = "";
				$scope.loginData.password = "";

			};

			// Perform the login action when the user submits the login form
			$scope.doLogin = function () {

				var name = $scope.loginData.username;
				var password = $scope.loginData.password;
				if (typeof ($scope.loginData.username) == "undefined") {
					var alertPopup = $ionicPopup.alert({
						title: 'Please type email then Try.',
						template: 'Fill Email id'
					});

				}
				else if (typeof ($scope.loginData.password) == "undefined") {
					var alertPopup = $ionicPopup.alert({
						title: 'Please type Password.',
						template: 'Fill Password'
					});

				}

				else {

					$http.get("http://api.hauduai.com.ng/hauduailogin?username=" + name + "&password=" + password)

						.success(function (response) {

							localStorage.setItem("appstatus", 'profession');

							localStorage.setItem("userid", response.id);
							var usr_id = localStorage.getItem("userid");

							var p_id = window.localStorage.getItem("did");

							$http.get("http://api.hauduai.com.ng/player_notification?id=" + usr_id + "&player_id=" + p_id);

							window.location.href = '#/app/browse';
							$scope.loginData.username = "";
							$scope.loginData.password = "";

							console.log(response);
							localStorage.setItem("signed", true);
							localStorage.setItem("loggedin", response.first_name);
							localStorage.setItem("usr_type", response.type);
							localStorage.setItem("userid", response.id);
							localStorage.setItem("useremail", response.email);
							localStorage.setItem("popupstatus", response.statuss);
							$scope.CurrentDate = new Date();
							localStorage.setItem("date", $scope.CurrentDate);
							$scope.closeLogin();
							if (response.statuss == 0) {

								var confirmPopup = $ionicPopup.confirm({
									title: 'You are yet to complete section 2 of the registration requirement',
									cancelText: 'Complete Later',
									cancelType: 'button-dark',
									okText: 'Complete Now',

								});

								confirmPopup.then(function (res) {

									if (res) {

										//console.log('You clicked on "Now" button');
										window.open("http://www.hauduai.com.ng/index/stepp2/" + response.id + "/" + response.type);return false;
									} else {

										console.log('You clicked on "Later" button');

									}
									window.location.reload(true);

								});

							}

							else {
								var alertPopup = $ionicPopup.alert({
									title: 'You Have Successfully Login.',
									template: 'Successfully Login',
								});
								alertPopup.then(function (res) {
									if (res == true) {
										window.location.reload(true);
									}
								});
							}
							
						})
						.error(function () {
							var alertPopup = $ionicPopup.alert({
								title: 'Please Check Your E-mail or Password then Try Again.',
								template: ' Check E-mail or Password'
							});
							$scope.loginData.password = "";
						})
				}

			};

		});
		$ionicModal.fromTemplateUrl('templates/stu_login.html', {
			scope: $scope
		}).then(function (stumodal) {
			$scope.stumodal = stumodal;

			// Triggered in the login modal to close it
			$scope.close_Login = function () {
				$scope.stumodal.hide();
				$scope.loginData.stu_username = "";
				$scope.loginData.stu_password = "";
			};

			$scope.myreload = function () {
				$location.path('/app/stu_forgetpass');

			}
			// Open the student login modal
			$scope.stulogin = function () {
				$scope.stumodal.show();
				$scope.loginData.stu_username = "";
				$scope.loginData.stu_password = "";
			};

			// Perform the login action when the student submits the login form
			$scope.stuLogin = function () {

				var name = $scope.loginData.stu_username;
				var password = $scope.loginData.stu_password;
				if (typeof ($scope.loginData.stu_username) == "undefined") {
					var alertPopup = $ionicPopup.alert({
						title: 'Please type email then Try.',
						template: 'Fill Email id'
					});

				}
				else if (typeof ($scope.loginData.stu_password) == "undefined") {
					var alertPopup = $ionicPopup.alert({
						title: 'Please type Password.',
						template: 'Fill Password'
					});

				}

				else {


					$http.get("http://api.hauduai.com.ng/student_login?username=" + name + "&password=" + password)

						.success(function (response1) {
							
							localStorage.setItem("appstatus", 'student');
							localStorage.setItem("userid", response1.id);
							
							var usr_id = localStorage.getItem("userid");

							var p_id = window.localStorage.getItem("did");

							$http.get("http://api.hauduai.com.ng/stu_player_notification?id=" + usr_id + "&player_id=" + p_id);
							window.location.href = '#/app/stu_browse';

							$scope.loginData.stu_username = "";
							$scope.loginData.stu_password = "";
							console.log(response1);
							localStorage.setItem("signed", true);
							localStorage.setItem("loggedin", response1.first_name);
							localStorage.setItem("usr_type", response1.type);
							localStorage.setItem("userid", response1.id);
							localStorage.setItem("useremail", response1.email);
							localStorage.setItem("points", response1.points);
							localStorage.setItem("popupstatus", response1.statuss);
							localStorage.setItem("popup_status", response1.popup_status);
							localStorage.setItem("status", response1.status);
							localStorage.setItem("created", response1.pop_up);
							localStorage.setItem("ace_month", response1.academic_year);
							localStorage.setItem("year_level", response1.year);
							localStorage.setItem("course_duration", response1.course_duration);


							// current date variables 
							$scope.CurrentDate = new Date();
							localStorage.setItem("date", $scope.CurrentDate);
							$scope.month = $scope.CurrentDate.getMonth() + 1;
							localStorage.setItem("month", $scope.month);
							$scope.day = $scope.CurrentDate.getDate();
							localStorage.setItem("day", $scope.day);
							$scope.year = $scope.CurrentDate.getFullYear();
							localStorage.setItem("year", $scope.year);
							// end current date variables
							localStorage.setItem("Date", response1.date);
							localStorage.setItem("passdate", response1.pass_date);
							localStorage.setItem("pass_status", response1.pass_status);

							// pass date variables
							$scope.pass_Date = new Date(response1.pass_date);
							$scope.pass_month = $scope.pass_Date.getMonth() + 1;
							$scope.pass_month = $scope.pass_month - 1;
							if ($scope.pass_month == 0) {
								$scope.pass_month = 12;
							}
							localStorage.setItem("pasmonth", $scope.pass_month);
							$scope.pass_day = $scope.pass_Date.getDate();
							localStorage.setItem("pasday", $scope.pass_day);
							$scope.pass_year = $scope.pass_Date.getFullYear();
							localStorage.setItem("pasyear", $scope.pass_year);
							// end pass date variables

							// created date variables
							$scope.create_Date = new Date(response1.created);
							$scope.create_month = $scope.create_Date.getMonth() + 1;
							$scope.create_month = $scope.create_month - 1;
							if ($scope.create_month == 0) {
								$scope.create_month = 12;
							}
							localStorage.setItem("c_month", $scope.create_month);
							$scope.create_day = $scope.create_Date.getDate();
							localStorage.setItem("c_day", $scope.create_day);
							$scope.create_year = $scope.create_Date.getFullYear() + 1;
							localStorage.setItem("c_year", $scope.create_year);
							// end created date variables

							var p_status = localStorage.getItem("pass_status");
							var c_year = localStorage.getItem("year");
							var c_month = localStorage.getItem("month");
							var c_day = localStorage.getItem("day");
							var m_year = localStorage.getItem("c_year");
							var m_month = localStorage.getItem("c_month");
							var m_day = localStorage.getItem("c_day");
							var duration = localStorage.getItem("course_duration");
							var year_level = localStorage.getItem("year_level");

							var ace_month = localStorage.getItem("ace_month");
							var popup_status = localStorage.getItem("popup_status");
							$scope.close_Login();
							var alertPopup = $ionicPopup.alert({
								title: 'You Have Successfully Login.'

							});
							alertPopup.then(function (res) {
								if (res == true) {
									// if (p_status == '1') {
										

									// }

									if (p_status == '0') {
										//alert(p_status);
										var upcomng_y= parseInt(year_level) + 1;

										if ((c_month == 3 || c_month > ace_month) && (duration > year_level)) {

											if (c_day == "1" || c_day == "31" || c_day == "20" || c_day == "21") {
												if(popup_status =='' || popup_status == undefined || popup_status == 'yes'){
													var confirmPopup = $ionicPopup.confirm({
													title: 'Based on the information provided during your registration, you should be in '+upcomng_y+'00 level (year '+upcomng_y+') by now, please confirm by clicking yes so that we can automatically move you to '+upcomng_y+'00 level (year '+upcomng_y+').',
													cancelText: 'No',
													cancelType: 'button-dark',
													okText: 'Yes',

												});

												confirmPopup.then(function (result) {
													if (result == true) {
													var confirmPopup = $ionicPopup.confirm({
													title: 'Please confirm that you are in '+upcomng_y+'00 level (year '+upcomng_y+') now',
													cancelText: 'No',
													cancelType: 'button-dark',
													okText: 'Yes',

												});
												confirmPopup.then(function (result2) {
													if (result2 == true) {
														$http.get("http://api.hauduai.com.ng/check_pass_status?id=" + response1.id + "&zero=0")
															.success(function (response2) {
																$scope.pass_Date = new Date(response2.date);
																$scope.pass_month = $scope.pass_Date.getMonth() + 1;
																$scope.pass_month = $scope.pass_month - 1;
																if ($scope.pass_month == 0) {
																	$scope.pass_month = 12;
																}
																localStorage.setItem("pasmonth", $scope.pass_month);
																$scope.pass_day = $scope.pass_Date.getDate();
																localStorage.setItem("pasday", $scope.pass_day);
																$scope.pass_year = $scope.pass_Date.getFullYear();
																localStorage.setItem("pasyear", $scope.pass_year);
																localStorage.setItem("pass_status", '1');
																window.location.reload(true);
															})
															
													}
													else {
														window.location.reload(true);
														//window.location.href = '#/app/stu_browse';
													}
												})

													} else {
														window.location.reload(true);
														//window.location.href = '#/app/stu_browse';
													}

												});
												}
											
											}
											else {
												window.location.href = '#/app/stu_browse';

											}
										}
										else {
											window.location.href = '#/app/stu_browse';

										}

									}
									else {
										
										if (duration == year_level) {
											if (c_day == "2" ||  c_day == "1" || c_day == "20") {
											$http.get("http://api.hauduai.com.ng/delete_popupstatus?id="+ response1.id)
											
										}
											
											var p_year = localStorage.getItem("pasyear");
											var p_day = localStorage.getItem("pasday");
											var p_month = localStorage.getItem("pasmonth");											

												if (c_month == 3 || c_month > ace_month) {

													if (c_day == "1" || c_day == "31" || c_day == "20") {

														var confirmPopup = $ionicPopup.confirm({
															title: 'Based on the information provided during registration, you should have completed your '+year_level+'-year degree program, please confirm by clicking yes',
															cancelText: 'No',
															cancelType: 'button-dark',
															okText: 'Yes',

														});
														confirmPopup.then(function (result) {
															if (result == true) {
																var confirmPopup = $ionicPopup.confirm({
																	title: 'Please confirm that you have completed your degree program',
																	cancelText: 'No',
																	cancelType: 'button-dark',
																	okText: 'Yes',

																});
																confirmPopup.then(function (result) {
																	if (result == true) {
																		$http.get("http://api.hauduai.com.ng/delte_user?id=" + response1.id)
																			.success(function (response2) {

																				localStorage.setItem("appstatus", '');
																				localStorage.setItem("userid", '');
																				localStorage.setItem("signed", false);
																				localStorage.setItem("loggedin", '');
																				localStorage.setItem("usr_type", '');
																				localStorage.setItem("userid", '');
																				localStorage.setItem("useremail", '');
																				localStorage.setItem("points", '');
																				localStorage.setItem("popupstatus", '');
																				localStorage.setItem("status", '');
																				localStorage.setItem("created", '');
																				localStorage.setItem("ace_month", '');
																				localStorage.setItem("year_level", '');
																				localStorage.setItem("course_duration", '');

																				window.location.href = '#/app/stu_register';
																				window.location.reload(true);
																			})
																	} else {
																		window.location.reload(true);
																		//window.location.href = '#/app/stu_browse';

																	}
																});


															} else {
																window.location.reload(true);
																//window.location.href = '#/app/stu_browse';
																
															}
														});
													}
													else {
														window.location.href = '#/app/stu_browse';

													}
												}
												else {
													window.location.href = '#/app/stu_browse';

												}
											
										}else{
										if (c_day == "2" ||  c_day == "1" || c_day == "20") {
											$http.get("http://api.hauduai.com.ng/delete_popupstatus?id="+ response1.id)
											
										}
										var p_year = localStorage.getItem("pasyear");
										var p_day = localStorage.getItem("pasday");
										var p_month = localStorage.getItem("pasmonth");
										
											if ((c_month == 3 || c_month > ace_month) && (duration > year_level)) {
											var upcomng_y= parseInt(year_level) + 1;
												if (c_day == "1" || c_day == "31" || c_day == "20") {
													if(popup_status =='' || popup_status == undefined || popup_status == 'yes'){
													var confirmPopup = $ionicPopup.confirm({
														title: 'Please confirm that you are in '+upcomng_y+'00 level (year '+upcomng_y+') now',
														cancelText: 'No',
														cancelType: 'button-dark',
														okText: 'Yes',

													});

													confirmPopup.then(function (result) {
														if (result == true) {

															$http.get("http://api.hauduai.com.ng/check_pass_status?id=" + response1.id + "&zero=0")
																.success(function (response2) {
																	$scope.pass_Date = new Date(response2.date);
																	$scope.pass_month = $scope.pass_Date.getMonth() + 1;
																	$scope.pass_month = $scope.pass_month - 1;
																	if ($scope.pass_month == 0) {
																		$scope.pass_month = 12;
																	}
																	localStorage.setItem("pasmonth", $scope.pass_month);
																	$scope.pass_year = $scope.pass_Date.getFullYear();
																	localStorage.setItem("pasyear", $scope.pass_year);
																	window.location.reload(true);
																})
														} else {
															window.location.reload(true);
															//window.location.href = '#/app/stu_browse';
														}

													});
												}
												}
												else {
													window.location.href = '#/app/stu_browse';

												}
											}
											else {
												window.location.href = '#/app/stu_browse';

											}
									}
									}
								}
								window.location.reload(true);

							});
						})
						.error(function () {
							var alertPopup = $ionicPopup.alert({
								title: 'Please Check Your E-mail or Password then Try Again.',
								template: ' Check E-mail or Password'
							});
							$scope.loginData.username = "";
							$scope.loginData.password = "";
						})
				}

			};

		})

	})

	.controller('forgot_passctrl', function ($scope, $location, $ionicPopup, $http) {
		if ($location.search().hasOwnProperty('mail')) {
			$scope.my_value = $location.search()['mail'];
		}

		$scope.forpas = function () {
			$scope.ff = $scope.loginData.username;
			$scope.modal.hide();
			window.location.href = '#/app/forgotpass/?mail=' + $scope.ff;
			window.location.reload(true);
		}
		$scope.submitforpass = function () {

			var usremail = $scope.my_value;


			$http.get("http://api.hauduai.com.ng/forgot_password?email=" + usremail)
				.success(function (response) {
					if (response.status == "success") {
						var alertPopup = $ionicPopup.alert({
							title: 'Please check your email and reset your password from the link.',
							template: 'Successfully Reset.'
						});

						window.location.href = '#/app/stu_plylist';
						$scope.usersemail = "";
					} else {
						var alertPopup = $ionicPopup.alert({
							title: 'This Email Id is not exist',
							template: 'Not Exist.'
						});

					}
				})
		}
	})

	.controller('stu_forgtpasctrl', function ($scope, $location, $ionicPopup, $http) {
		if ($location.search().hasOwnProperty('mail')) {
			$scope.myvalue = $location.search()['mail'];
		}

		$scope.for_pass = function () {

			$scope.uu = $scope.loginData.stu_username;
			$scope.modal.hide();

			window.location.href = '#/app/stu_forgetpass/?mail=' + $scope.uu;

			window.location.reload(true);
		}
		$scope.submitpass = function () {

			var useremail = $scope.myvalue;


			$http.get("http://api.hauduai.com.ng/stu_forgot_password?email=" + useremail)
				.success(function (response) {
					var alertPopup = $ionicPopup.alert({
						title: 'Please check your email and reset your password from the link.',
						template: 'Successfully Reset.'
					});
					window.location.href = '#/app/stu_register';
					$scope.useremail = "";
				})

		}
	})



	.controller('referanexpertctrl', function ($scope, $location, $ionicPopup, $http) {

		$scope.submitt = function () {
			var mobileph = $scope.numberr;
			var email = $scope.temail;
			var name = $scope.namee;
			if (typeof ($scope.temail) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type email then Try.',
					template: 'Fill Email id'
				});

			}
			else if (typeof ($scope.namee) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type Expert Name.',
					template: 'Fill Name'
				});

			}

			else {
				//var username=localStorage.getItem("loggedin");
				//var email=localStorage.getItem("email");
				var userid = localStorage.getItem("userid");
				var useremail = localStorage.getItem("useremail");
				//var mobileph=localStorage.getItem("number");

				$http.get("http://api.hauduai.com.ng/referanexpert?name=" + name + "&id=" + userid + "&email=" + email + "&phone=" + mobileph + "&uemail=" + useremail)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'You have Successfully Referred An Expert.Thanks',

							template: 'Successfully Refer'
						});

						$location.path('/#/app/browse');
						$scope.temail = "";
						$scope.namee = "";
						$scope.numberr = "";


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Referred This Expert Thanks.',
							template: 'Registered Already.'
						});
						$scope.temail = "";
						$scope.namee = "";
						$scope.numberr = "";
					})
			}
		}

	})

	.controller('stu_invitelecctrl', function ($scope, $location, $ionicPopup, $http) {

		$scope.submitt = function () {
			var mobileph = $scope.numberr;
			var email = $scope.temail;
			var name = $scope.namee;
			if (typeof ($scope.temail) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type email then Try.',
					template: 'Fill Email id'
				});

			}
			else if (typeof ($scope.namee) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type Expert Name.',
					template: 'Fill Name'
				});

			}

			else {
				//var username=localStorage.getItem("loggedin");
				//var email=localStorage.getItem("email");
				var userid = localStorage.getItem("userid");
				var useremail = localStorage.getItem("useremail");
				//var mobileph=localStorage.getItem("number");

				$http.get("http://api.hauduai.com.ng/referanexpert?name=" + name + "&id=" + userid + "&email=" + email + "&phone=" + mobileph + "&uemail=" + useremail + "&type=student")
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'You have Successfully Referred A Friend.Thanks',

							template: 'Successfully Refer'
						});

						window.location.reload(true);
						$scope.temail = "";
						$scope.namee = "";
						$scope.numberr = "";


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have already invited this friend.',
							template: 'Registered Already.'
						});
						$scope.temail = "";
						$scope.namee = "";
						$scope.numberr = "";

					})
			}
		}

	})


	.controller('courseformCtrl', function ($scope, $location, $ionicPopup, $http) {

		$scope.submitt = function () {

			var stuemail = $scope.email;
			var stufaculty = $scope.faculty;
			var stucourse = $scope.course;
			$http.get("http://api.hauduai.com.ng/new_faculty_course?email=" + stuemail + "&faculty=" + stufaculty + "&course=" + stucourse)
				.success(function (response) {

					if (response.status == "Success") {

						var alertPopup = $ionicPopup.alert({
							title: 'You have successfully submitted your message, thank you.',
							template: 'submit.'
						});
						window.location.reload(true);

					}
					else {
						var alertPopup = $ionicPopup.alert({
							title: 'You have not submit Successfully',
							template: 'Not submit.'
						});
					}
				})

		}

	})

	.controller('dropdown', function ($scope, $stateParams, $ionicModal, $http, $ionicLoading, $timeout, $location, $ionicPopup) {

		$scope.shownto = true;
		$scope.hidet = false;
		//$scope.change_input=true;

		$scope.change_input = function () {
			if ($scope.shownto == true) {

				$scope.hidet = true;
				$scope.shownto = false;
			}
			else if ($scope.shownto == false) {
				$scope.shownto = true;
				$scope.hidet = false;
			}

		}
		$http.get("http://api.hauduai.com.ng/suffix")
			.success(function (response) {
				$scope.suffix = response;

			})



		$http.get("http://api.hauduai.com.ng/employment_status")
			.success(function (response) {
				$scope.employment_status = response;
			})

		/* $scope.subsector="Bussiness Sector"; */
		//$scope.emp_status="Employment Status";
		/*$scope.subsubsector="Bussiness Sub Sector";
		$scope.subproffession="Profession";
		$scope.prof_affi="Profession Affiliation";
		$scope.prof_sub="Profession Sub Category"; */

		$http.get("http://api.hauduai.com.ng/sector")
			.success(function (response) {
				$scope.sector = response;



			})
		$http.get("http://api.hauduai.com.ng/profession")
			.success(function (response) {
				$scope.profession = response;



			})
		$scope.getsubprofession = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});
			$timeout(function () {


				$http.get("http://api.hauduai.com.ng/profession_subcategory?id=" + $scope.subprofession)
					.success(function (response) {
						$scope.profession_subcategory = response;

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

		$scope.afflicap = true;
		$scope.ends = false;
		//$scope.change_input=true;

		$scope.chang_inputt = function () {
			if ($scope.afflicap == true) {

				$scope.ends = true;
				$scope.afflicap = false;
			}
			else if ($scope.afflicap == false) {
				$scope.afflicap = true;
				$scope.ends = false;

			}

		}


		$http.get("http://api.hauduai.com.ng/profession_affi")
			.success(function (response) {
				$scope.profession_affi = response;
				//console.log(response);
			})



		$scope.getsubsector = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});
			$timeout(function () {

				$http.get("http://api.hauduai.com.ng/sector_subcategories?id=" + $scope.subsector)
					.success(function (response) {
						$scope.sector_subcategories = response;

						$ionicLoading.hide();

					})

			}, 2000);
		}


		$http.get("http://api.hauduai.com.ng/know_about_hauduai")
			.success(function (response) {
				$scope.know_about_hauduai = response;
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





		$scope.Submit = function () {

			//($scope.cpassword==$scope.password)
			var error = false;
			var erroorr = true;
			var cpass = $scope.cpassword;
			var fname = $scope.fname;
			if (fname == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the First Name.',
					template: 'Fill First Name.'
				});
			}

			var type = "user";

			var lname = $scope.lname;
			if (lname == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Last Name.',
					template: 'Fill Last Name.'
				});
			}

			var fullname = fname + " " + lname;
			var qualified = $scope.qualified;
			if (qualified == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Suffix.',
					template: 'Select Suffix.'
				});
			}
			//var quali=$scope.quali;
			var emp_status = $scope.emp_status;
			if (emp_status == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Employee Status.',
					template: 'Select Employee Status.'
				});
			}
			var proaffi = $scope.proaffi;
			var proafffi = $scope.proafffi;

			var sector = $scope.subsector;
			if (sector == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Business Sector.',
					template: 'Select Bussiness Sector.'
				});
			}
			var subsector = $scope.subsubsector;
			if (subsector == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Business Sub Sector.',
					template: 'Select Bussiness Sub Sector.'
				});
			}
			var profession = $scope.subprofession;
			if (profession == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Profession.',
					template: 'Select Profession.'
				});
			}
			var sub_profession = $scope.prof_sub;
			if (sub_profession == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Profession Sub Category.',
					template: 'Select Profession Sub Sector.'
				});
			}
			var email = $scope.email;
			if (email == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Email ID.',
					template: 'Fill Emaild-id.'
				});
			}
			var pass = $scope.password;
			if (pass == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Password.',
					template: 'Fill Password.'
				});
			}

			var pass = $scope.password;
			if (!(pass == cpass)) {
				erroorr = false;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Enter the Correct Password.',
					template: 'Check Password.'
				});
			}

			var gettoknow = $scope.gettoknow;
			if (gettoknow == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select How did You Know about Hauduai?',
					template: 'How did You Know about Hauduai?'
				});
			}
			var chk = $scope.filter;
			if (chk == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Accept the terms and Conditions.',
					template: 'Accept terms and Conditions.'
				});
			}

			if (error == false && (erroorr == true || erroorr == true)) {



				$http.get("http://api.hauduai.com.ng/hauduai_signup?type=" + type + "&first_name=" + fname + "&last_name=" + lname + "&full_name=" + fullname + "&Suffix=" + qualified + "&employment_status=" + emp_status + "&bussiness_sector=" + sector + "&bussiness_sector_sub=" + subsector + "&profession=" + profession + "&profession_sub=" + sub_profession + "&email=" + email + "&password=" + pass + "&know_hauduai=" + gettoknow + "&proaffi=" + proaffi + "&proafffi=" + proafffi)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Successfully Signed Up on Hauduai, Please Check Your Email to Activate Your Account and Login on the App After Activation.',
							template: 'Successfully Signup'
						});

						location.href = "#/app/stu_plylist";
			
						$scope.fname = "";
						$scope.lname = "";
						$scope.qualified = "";
						$scope.emp_status = "";
						$scope.sector = "";
						$scope.subsector = "";
						$scope.profession = "";
						$scope.sub_profession = "";
						$scope.email = "";
						$scope.pass = "";
						$scope.cpassword = "";
						$scope.gettoknow = "";
						$scope.proaffi = "";

					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Registered Already.',
							template: 'Registered Already.'
						});
					})
			}



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

	.controller('registerspecialist', function ($scope, $stateParams, $http, $ionicLoading, $timeout, $location, $ionicPopup) {
		/* $scope.show=true;
		$scope.hideme=false;
		$scope.change_input=function(){
				$scope.hideme=true;
			$scope.show=false;
			
		} */

		$scope.show = true;
		$scope.hideme = false;
		//$scope.change_input=true;

		$scope.change_input = function () {
			if ($scope.show == true) {

				$scope.hideme = true;
				$scope.show = false;

			}
			else if ($scope.show == false) {
				$scope.show = true;
				$scope.hideme = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/suffix")
			.success(function (response) {
				$scope.suffix = response;

			})


		$http.get("http://api.hauduai.com.ng/employment_status")
			.success(function (response) {
				$scope.employment_status = response;
			})
		/*  $scope.showmee=true;
	$scope.hide=false;
	$scope.chang_inputt=function(){
	$scope.hide=true;
	    $scope.showmee=false;
		
	} */

		$scope.showmee = true;
		$scope.hide = false;
		$scope.chang_inputt = function () {
			if ($scope.showmee == true) {

				$scope.hide = true;
				$scope.showmee = false;
				//$scope.pro_affi='';
			}
			else if ($scope.showmee == false) {
				$scope.showmee = true;
				$scope.hide = false;

			}

		}
		$http.get("http://api.hauduai.com.ng/profession_affi")
			.success(function (response) {
				$scope.profession_affi = response;

			})
		$http.get("http://api.hauduai.com.ng/spec_area")
			.success(function (response) {
				$scope.spec_area = response;

			})

		$scope.getsubspe_area = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {


				$http.get("http://api.hauduai.com.ng/spec_sub_area?id=" + $scope.spe_area)
					.success(function (response) {
						$scope.spec_sub_area = response;

						$ionicLoading.hide();

					})

			}, 2000);
		}
		$scope.getsubspe_area2 = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {



				$http.get("http://api.hauduai.com.ng/spec_sub_area?id=" + $scope.spe_area2)
					.success(function (response) {
						$scope.spec_sub_area2 = response;

						$ionicLoading.hide();

					})

			}, 2000);
		}

		$http.get("http://api.hauduai.com.ng/know_about_hauduai")
			.success(function (response) {
				$scope.know_about_hauduai = response;
			})
		//localStorage.setItem("qulsufx",response.qulaity);
		//localStorage.setItem("emplst",response.emp_status);

		$scope.doSubmit = function () {
			//if($scope.cpassword==$scope.password){
			var cpass = $scope.cpassword;
			var eror = false;
			var eeroorr = true;
			var fname = $scope.fname;
			if (fname == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the First Name.',
					template: 'Fill First Name.'
				});
			}

			var type = "specialist";
			var lname = $scope.lname;
			if (lname == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Last Name.',
					template: 'Fill Last Name.'
				});
			}
			var fullname = fname + " " + lname;

			var qulaity = $scope.qulaity;

			if (qulaity == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Suffix.',
					template: 'Select Suffix.'
				});
			}

			var emp_status = $scope.emp_status;

			if (emp_status == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Employment Status.',
					template: 'Select Employee Status.'
				});
			}

			var spe_area1 = $scope.spe_area;

			if (spe_area1 == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Expertise Field1.',
					template: 'Select Expert Field1'
				});
			}

			var spe_subarea1 = $scope.spe_area_sub;
			if (spe_subarea1 == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Expertise Sub Field1.',
					template: 'Select Expert Sub Field1'
				});
			}

			var spe_area2 = $scope.spe_area2;
			var spe_subarea2 = $scope.spe_area_sub2;
			var pro_aff = $scope.pro_affi;
			var pro_afff = $scope.pro_afffi;

			var email = $scope.email;
			if (email == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Email-ID.',
					template: 'Fill Email.'
				});
			}
			var pass = $scope.password;
			if (pass == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Password.',
					template: 'Fill Password.'
				});
			}

			var pass = $scope.password;
			if (!(pass == cpass)) {
				eeroorr = false;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Check the Password.',
					template: 'Check Password.'
				});
			}
			var gettoknow = $scope.gettoknow;
			if (gettoknow == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the How did You Know about Hauduai?',
					template: 'How did You Know about Hauduai?'
				});
			}
			var chk = $scope.filter;
			if (chk == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please accept the terms and conditions.',
					template: 'Select Terms and Conditions'
				});
			}

			if (eror == false && (eeroorr == true || eeroorr == true)) {

				$http.get("http://api.hauduai.com.ng/hauduaispecialist_signup?type=" + type + "&first_name=" + fname + "&last_name=" + lname + "&full_name=" + fullname + "&qualified=" + qulaity + "&employment_status=" + emp_status + "&selection_area1=" + spe_area1 + "&sub_category1=" + spe_subarea1 + "&selection_area2=" + spe_area2 + "&sub_category2=" + spe_subarea2 + "&email=" + email + "&password=" + pass + "&know_hauduai=" + gettoknow + "&pro_aff=" + pro_aff + "&pro_afff=" + pro_afff)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'You Have Successfully Signed Up on Hauduai, Please Check Your Email to Activate your Account and Login on the App after Activation.',
							template: 'Successfully Signup'
						});
						location.href= "#/app/stu_plylist";
						$scope.fname = "";
						$scope.lname = "";
						$scope.qulaity = "";
						$scope.emp_status = "";
						$scope.spe_area1 = "";
						$scope.spe_subarea1 = "";
						$scope.spe_area2 = "";
						$scope.spe_subarea2 = "";
						$scope.email = "";
						$scope.pass = "";
						$scope.gettoknow = "";
						$scope.pro_aff = "";

						$scope.filter = "";
					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Already Signed Up',
							template: 'Failed.'
						});
					})

			}

		}

	})


	.controller('editspecialistCtrl', function ($scope, $stateParams, $http, $ionicLoading, $timeout, $location, $ionicPopup) {

		$scope.show = true;
		$scope.hideme = false;
		$scope.change_inputt = function () {
			$scope.hideme = true;
			$scope.show = false;

		}
		$scope.show = true;
		$scope.hideme = false;
		//$scope.change_input=true;

		$scope.change_inputt = function () {
			if ($scope.show == true) {

				$scope.hideme = true;
				$scope.show = false;

			}
			else if ($scope.show == false) {
				$scope.show = true;
				$scope.hideme = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/suffix")
			.success(function (response) {
				$scope.suffix = response;
			})


		$http.get("http://api.hauduai.com.ng/employment_status")
			.success(function (response) {
				$scope.employment_status = response;
			})
		$scope.showmee = true;
		$scope.hide = false;
		$scope.chang_inputtt = function () {
			$scope.hide = true;
			$scope.showmee = false;

		}

		$scope.showmee = true;
		$scope.hide = false;
		$scope.chang_inputtt = function () {
			if ($scope.showmee == true) {

				$scope.hide = true;
				$scope.showmee = false;
			}
			else if ($scope.showmee == false) {
				$scope.showmee = true;
				$scope.hide = false;

			}

		}
		$http.get("http://api.hauduai.com.ng/profession_affi")
			.success(function (response) {
				$scope.profession_affi = response;

			})
		$http.get("http://api.hauduai.com.ng/spec_area")
			.success(function (response) {
				$scope.spec_area = response;

			})

		$scope.getexpertarea1 = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {


				$http.get("http://api.hauduai.com.ng/spec_sub_area?id=" + $scope.expsectorarea1)

					.success(function (response) {
						$scope.spec_sub_area = response;
						//alert($scope.spe_area);
						$ionicLoading.hide();

					})

			}, 2000);
		}
		$scope.getexpert2area = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {



				$http.get("http://api.hauduai.com.ng/spec_sub_area?id=" + $scope.expertarea2)
					.success(function (response) {
						$scope.spec_sub_area2 = response;

						$ionicLoading.hide();

					})

			}, 2000);
		}

		/*  $http.get("http://api.hauduai.com.ng/know_about_hauduai")
		.success(function(response){
			$scope.know_about_hauduai=response;
		})  */



		var type = "specialist";

		var suffix = $scope.suffixqual;
		var empstat = $scope.emplstatus;
		var expone = $scope.expsectorarea1;
		var exponesub = $scope.subsectorarea;
		var exptwo = $scope.expertarea2;
		var exptwosub = $scope.expertareasub2;
		var proffaff = $scope.proaffiliation;

		var id = localStorage.getItem("userid");

		$http.get("http://api.hauduai.com.ng/get_all_profile?id=" + id)
			.success(function (response) {
				$scope.get_all = response;
			})
		$scope.shownto = true;
		$scope.hidet = false;
		//$scope.change_input=true;

		$scope.change_input = function () {
			if ($scope.shownto == true) {

				$scope.hidet = true;
				$scope.shownto = false;
			}
			else if ($scope.shownto == false) {
				$scope.shownto = true;
				$scope.hidet = false;
			}

		}


		/* $scope.change_input=function(){
				$scope.hidet=false;
			$scope.shownto=true;
		} */


		$http.get("http://api.hauduai.com.ng/suffix")
			.success(function (response) {
				$scope.suffix = response;

			})


		$http.get("http://api.hauduai.com.ng/employment_status")
			.success(function (response) {
				$scope.employment_status = response;
			})

		/* $scope.subsector="Bussiness Sector"; */
		//$scope.emp_status="Employment Status";
		/*$scope.subsubsector="Bussiness Sub Sector";
		$scope.subproffession="Profession";
		$scope.prof_affi="Profession Affiliation";
		$scope.prof_sub="Profession Sub Category"; */

		$http.get("http://api.hauduai.com.ng/sector")
			.success(function (response) {
				$scope.sector = response;



			})
		$http.get("http://api.hauduai.com.ng/profession")
			.success(function (response) {
				$scope.profession = response;



			})
		$scope.getsubprofession = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});
			$timeout(function () {


				$http.get("http://api.hauduai.com.ng/profession_subcategory?id=" + $scope.subprofession)
					.success(function (response) {
						$scope.profession_subcategory = response;

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

		$scope.afflicap = true;
		$scope.ends = false;
		//$scope.change_input=true;

		$scope.chang_inputt = function () {
			if ($scope.afflicap == true) {

				$scope.ends = true;
				$scope.afflicap = false;
			}
			else if ($scope.afflicap == false) {
				$scope.afflicap = true;
				$scope.ends = false;

			}

		}


		$http.get("http://api.hauduai.com.ng/profession_affi")
			.success(function (response) {
				$scope.profession_affi = response;
			})



		$scope.getsubsector = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});
			$timeout(function () {

				$http.get("http://api.hauduai.com.ng/sector_subcategories?id=" + $scope.subsector)
					.success(function (response) {
						$scope.sector_subcategories = response;


						$ionicLoading.hide();

					})

			}, 2000);
		}

		var type = "user";
		var suffixx = $scope.qualified;
		var empstatus = $scope.emp_status;
		var busssector = $scope.subsector;
		var subbusssector = $scope.subsubsector;
		var proffession = $scope.subprofession;
		var subprofs = $scope.prof_sub;
		var profaffila = $scope.proaffi;

		var id = localStorage.getItem("userid");

		$http.get("http://api.hauduai.com.ng/get_all_profile?id=" + id)
			.success(function (response) {
				$scope.get_all_profile = response;
			})
	})

	.controller('newsCtrl', function ($scope, $stateParams, $http, $window) {

		$http.get("http://api.hauduai.com.ng/hauduai_news")
			.success(function (response) {

				$scope.news = response;
					var url = $scope.news;
			})
			$scope.opennews = function(url){
				window.open(url);
			}

	})


	.controller('stu_newCtrl', function ($scope, $stateParams, $http) {

		$http.get("http://api.hauduai.com.ng/student_news")
			.success(function (response) {

				$scope.studentnews = response;
				var url = $scope.news;
			})
			$scope.opennewsurl = function(url){
				window.open(url);
			}

	})

	.controller('pollsCtrl', function ($scope, $stateParams, $http, $ionicPopup, $location, $window) {

		$http.get("http://api.hauduai.com.ng/hauduaiopen_polls")
			.success(function (response) {
				$scope.openpoll = response;

			})

		$scope.noMoreItemsAvailable = false;
		$scope.loadMore = function () {

			$scope.serverSideChange = function (item) {

				var ans_id = item.ans_id;
				var queid = item.id;
				var username = localStorage.getItem("loggedin");
				var email = localStorage.getItem("useremail");
				var userid = localStorage.getItem("userid");
				$scope.vote = function (item) {

					$http.get("http://api.hauduai.com.ng/rate_polls?question_id=" + queid + "&name=" + username + "&email=" + email + "&user_id=" + userid + "&answer=" + ans_id)
						.success(function (response) {

							if (response.status == 'Success') {
								var alertPopup = $ionicPopup.alert({
									title: 'Your vote has been successfully submitted',
									template: 'success'
								});
								window.location.reload(true);
							}

						})
						.error(function (response) {
							var alertPopup = $ionicPopup.alert({
								title: 'You have already Voted for this Question.Your Vote will not Count.',
								template: 'Already Voted'
							});
							window.location.reload(true);
							$scope.data.serverSide = "";
						})



				}
				/*$http.get("http://api.hauduai.com.ng/hauduaipollsubmit_answer?queid=" + queid + "&username=" + username + "&email=" + email + "&userid=" + userid + "&ans_id=" + ans_id)
					.success(function (response) {
						if (response.status == 'success') {
							var alertPopup = $ionicPopup.alert({
								title: 'Your vote has been successfully submitted',
								template: 'success'
							});
						}
						
					})
					.error(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'You have already Voted for this Question.Your Vote will not Count.',
							template: 'Already Voted'
						});
						//alert("You have already voted for this qusetion.Your vote not going to be count.");
						$scope.data.serverSide = "";
					})*/


			};
			$scope.$broadcast('scroll.infiniteScrollComplete');
		}

		$http.get("http://api.hauduai.com.ng/hauduai_polls")
			.success(function (response) {
				$scope.polls = response;

			})

			$scope.refreshreslt = function(){
				window.location.reload(true);
			}

	})

	.controller('stu_pollsCtrl', function ($scope, $stateParams, $http, $ionicPopup, $location) {

		$http.get("http://api.hauduai.com.ng/stu_hauduaiopen_polls")
			.success(function (response) {

				$scope.openpoll = response;

			})

		$scope.noMoreItemsAvailable = false;
		$scope.loadMore = function () {
			$scope.serverSideChange = function (item) {

				var ans_id = item.ans_id;
				var que_id = item.id;

				var username = localStorage.getItem("loggedin");
				var email = localStorage.getItem("useremail");
				var userid = localStorage.getItem("userid");

				$scope.myvote = function (item) {
					$http.get("http://api.hauduai.com.ng/stu_rate_polls?question_id=" + que_id + "&name=" + username + "&email=" + email + "&user_id=" + userid + "&answer=" + ans_id)
						.success(function (response) {
							if (response.status == 'Success') {
								var alertPopup = $ionicPopup.alert({
									title: 'Your vote has been successfully submitted',
									template: 'success'
								});
								window.location.reload(true);
							}

						})
						.error(function (response) {
							var alertPopup = $ionicPopup.alert({
								title: 'You have already Voted for this Question.Your Vote will not Count.',
								template: 'Already Voted'
							});
							$scope.data.serverSide = "";

						})
				}
			};

			$scope.$broadcast('scroll.infiniteScrollComplete');
		}
		$http.get("http://api.hauduai.com.ng/stu_hauduai_polls")
			.success(function (response) {

				$scope.polls = response;
			})
	})


	.controller('pollsresultsCtrl', function ($scope, $stateParams, $http, $ionicPopup) {

		var id = $stateParams.id;
		var userid = localStorage.getItem("userid");
		$scope.submitt = function () {
			var writecomment = $scope.writecomment;
			if (typeof (writecomment) == "undefined") {

				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Comment.',
					template: 'Fill Last Name.'
				});
			}
			else {
				$http.get("http://api.hauduai.com.ng/hauduaipolls_writecomment?userid=" + userid + "&id=" + id + "&comment=" + writecomment)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Successfully Submitted a comment.',
							template: 'Already Voted.'
						});
						//$scope.comment_que=response;
						window.location.reload(true);
						$scope.writecomment = "";
						$scope.again();

						window.location.href = '#/app/search';
						$scope.writecomment = "";
					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Vote this Poll Question.',
							template: 'Already Voted.'
						});
						window.location.reload(true);
						$scope.writecomment = "";

					});
			}
		}
		$http.get("http://api.hauduai.com.ng/hauduaipollsque_id?id=" + id)
			.success(function (response) {
				$scope.comment_que = response;

			})
		$http.get("http://api.hauduai.com.ng/hauduaipolls_comment?id=" + id)
			.success(function (response) {
				$scope.comment = response;

			})
		$scope.again = function () {
			$http.get("http://api.hauduai.com.ng/hauduaipolls_comment?id=" + id)
				.success(function (response) {
					$scope.comment = response;

				})
		}

	})


	.controller('stu_pollsresultsCtrl', function ($scope, $stateParams, $http, $ionicPopup) {

		var id = $stateParams.id;
		var userid = localStorage.getItem("userid");
		$scope.submitt = function () {
			var writecomment = $scope.writecomment;
			if (typeof (writecomment) == "undefined") {

				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Comment.',
					template: 'Fill Last Name.'
				});
			}
			else {
				$http.get("http://api.hauduai.com.ng/stu_hauduaipolls_writecomment?userid=" + userid + "&id=" + id + "&comment=" + writecomment)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Successfully Submitted a comment.',
							template: 'Already Voted.'
						});
						//$scope.comment_que=response;
						$scope.writecomment = "";
						$scope.again();

						$scope.writecomment = "";
						window.location.href = '#/app/stu_search';
					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Vote this Poll Question.',
							template: 'Already Voted.'
						});
						$scope.writecomment = "";

					});
			}
		}
		$http.get("http://api.hauduai.com.ng/stu_hauduaipollsque_id?id=" + id)
			.success(function (response) {
				$scope.comment_que = response;

			})
		$http.get("http://api.hauduai.com.ng/stu_hauduaipolls_comment?id=" + id)
			.success(function (response) {
				$scope.comment = response;

			})
		$scope.again = function () {
			$http.get("http://api.hauduai.com.ng/stu_hauduaipolls_comment?id=" + id)
				.success(function (response) {
					$scope.comment = response;

				})
		}

	})


	.controller('resultpieCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		var id = $stateParams.id;

		$http.get("http://api.hauduai.com.ng/totalvotecount?id=" + id)
			.success(function (response) {
				$scope.totalcount = response[0].count;


			})
		$http.get("http://api.hauduai.com.ng/hauduaipollsque_id?id=" + id)
			.success(function (response) {
				$scope.comment_que = response;

			})
		$http.get("http://api.hauduai.com.ng/getvoteanswerjoin?id=" + id)
			.success(function (response) {

				$scope.jointanswer = response;

				$scope.getTotal = function () {
					var arr = [];
					for (var x = 0; x < response.length; x++) {
						arr.push(response[x].count);


					}
					var count = 0;

					for (var i = 0; i < arr.length; i++) {
						count += parseFloat(arr[i]);
					}
					$scope.totalvote = count;
					//alert($scope.totalvote);
				}
			})
		$http.get("http://api.hauduai.com.ng/getvote?id=" + id)
			.success(function (response) {


				var arr = [];
				for (var x = 0; x < response.length; x++) {
					arr.push(response[x].countspe);

				}

				var i;
				var g = [];
				for (i = 0; i < arr.length; ++i) {
					g.push(parseFloat((parseFloat(arr[i]) / $scope.totalvote) * 100).toFixed(1));
					//console.log(g);

				}

				$scope.data = g;
				//console.log($scope.data);


			})
		$http.get("http://api.hauduai.com.ng/getvoteanswer?id=" + id)
			.success(function (response) {


				var arr = [];
				for (var x = 0; x < response.length; x++) {
					arr.push(response[x].answer);


				}

				$scope.labels = arr;
			})

	})

	.controller('stu_resultpieCtrl', function ($scope, $ionicHistory, $stateParams, $http, $window, $location) {
		$scope.mstar = function () {
			window.location.reload(true);
		}
		var id = $stateParams.id;

		$http.get("http://api.hauduai.com.ng/stu_totalvotecount?id=" + id)
			.success(function (response) {

				$scope.totalcount = response[0].count;


			})
		$http.get("http://api.hauduai.com.ng/stu_hauduaipollsque_id?id=" + id)
			.success(function (response) {
				$scope.comment_que = response;


			})

		$http.get("http://api.hauduai.com.ng/stu_getvoteanswerjoin?id=" + id)
			.success(function (response) {

				$scope.jointanswer = response;


				$scope.total = function () {
					var arr = [];
					for (var x = 0; x < response.length; x++) {
						arr.push(response[x].count);


					}
					var count = 0;

					for (var i = 0; i < arr.length; i++) {
						count += parseFloat(arr[i]);
					}
					$scope.totalvote = count;

				}
			})

		$http.get("http://api.hauduai.com.ng/stu_getvote?id=" + id)
			.success(function (response) {

				var arr = [];
				for (var x = 0; x < response.length; x++) {
					arr.push(response[x].countspe);

				}

				var i;
				var g = [];
				for (i = 0; i < arr.length; ++i) {
					g.push(parseFloat((parseFloat(arr[i]) / $scope.totalvote) * 100).toFixed(1));

				}

				$scope.data = g;


			})
		$http.get("http://api.hauduai.com.ng/stu_getvoteanswer?id=" + id)
			.success(function (response) {


				var arr = [];
				for (var x = 0; x < response.length; x++) {
					arr.push(response[x].answer);
				}

				$scope.labels = arr;
			})

	})


	.controller('eventsCtrl', function ($scope, $ionicHistory, $http, $state) {

		$scope.upcoming = function () {
			$http.get("http://api.hauduai.com.ng/hauduai_events_upcoming")
				.success(function (response) {
					$scope.events = response;

				})
		}
		$scope.current = function () {
			$http.get("http://api.hauduai.com.ng/hauduai_events_current")
				.success(function (response) {
					$scope.events = response;

				})
		}
		$scope.past = function () {
			$http.get("http://api.hauduai.com.ng/hauduai_events_past")
				.success(function (response) {
					$scope.events = response;

				})
		}
	})

	.controller('stu_eventCtrl', function ($scope, $ionicHistory, $http, $state) {

		$scope.stu_upcoming = function () {
			$http.get("http://api.hauduai.com.ng/student_events_upcoming")
				.success(function (response) {
					$scope.stuevents = response;

				})
		}
		$scope.stu_current = function () {
			$http.get("http://api.hauduai.com.ng/student_events_current")
				.success(function (response) {
					$scope.stuevents = response;

				})
		}
		$scope.stu_past = function () {
			$http.get("http://api.hauduai.com.ng/student_events_past")
				.success(function (response) {
					$scope.stuevents = response;

				})
		}
	})

	///////****************TO Expert***********
	.controller('AllquestionCtrl', function ($scope, $http, $ionicHistory, $state, $ionicPopup, $stateParams) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityasked = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.communityasked.length > 0) {
				var valuetoexpert = $scope.communityasked.length;

			} else {
				var valuetoexpert = 0;
			}


			$scope.appstatus = localStorage.getItem('appstatus');
			$scope.user_type = localStorage.getItem('usr_type');
			if ($scope.appstatus == 'student') {

				$http.get("http://api.hauduai.com.ng/getaskedquestionsexp?id=" + id + "&type=lecturer&offset=" + valuetoexpert)
					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Avalible.',
								template: 'No Questions.'
							});

						} else {

							$scope.answer_avail = true;
							angular.forEach(response, function (child) {
								$scope.communityasked.push({
									question: child.question,
									user_name: child.user_name,
									course: child.course_name,
									qualification: child.qualification,
									specialization: child.specialization,
									id: child.id,
									year: child.year_level_name,
									university: child.university_name,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');



					});
			}
			else {

				$http.get("http://api.hauduai.com.ng/getaskedquestionsexp?id=" + id + "&offset=" + valuetoexpert)
					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Avalible.',
								template: 'No Questions.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.communityasked.push({
									question: child.question,
									user_name: child.user_name,
									suffix: child.suffix,
									id: child.id,
									profession: child.profession,
									profession_specialist_name: child.profession_specialist_name,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');



					});

			}

			/*$scope.report = function (id) {

			var re_id= localStorage.getItem('userid');
			//$scope.Name = localStorage.getItem('loggedin');
			//$scope.Email = localStorage.getItem('email');
			
			var report_id = id;
			//alert($scope.name);
			
			$http.get("http://api.hauduai.com.ng/get_report_question?qid=" + report_id + "&type=lecturer & usr_id=" + re_id)
					.success(function (response) {
						//alert(response[1].first_name);
						$scope.ques= response[0];
						$scope.repo= response[1];
						
		})
			}*/

		};

	})


	.controller('rate_AllquestionCtrl', function ($scope, $http, $ionicHistory, $state, $ionicPopup, $stateParams) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityasked = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.communityasked.length > 0) {
				var valuetoexpert = $scope.communityasked.length;

			} else {
				var valuetoexpert = 0;
			}



			$http.get("http://api.hauduai.com.ng/waiting_for_rate_specialist?id=" + id + "&offset=" + valuetoexpert)
				.success(function (response) {

					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Questions Avalible.',
							template: 'No Questions.'
						});

					} else {

						$scope.answer_avail = true;

						angular.forEach(response, function (child) {
							$scope.communityasked.push({
								question: child.question,
								answer: child.answer,
								name: child.name,
								suffix: child.suffix,
								id: child.id,
								profession: child.profession,
								profession_specialist_name: child.profession_specialist_name,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');

				});
		};

	})


	.controller('rate_lecanswerCtrl', function ($scope, $http, $ionicHistory, $state, $ionicPopup, $stateParams) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityasked = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.communityasked.length > 0) {
				var valuetoexpert = $scope.communityasked.length;

			} else {
				var valuetoexpert = 0;
			}



			$http.get("http://api.hauduai.com.ng/waiting_for_rate_lecturer?id=" + id + "&offset=" + valuetoexpert)
				.success(function (response) {

					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Questions Avalible.',
							template: 'No Questions.'
						});

					} else {

						$scope.answer_avail = true;

						angular.forEach(response, function (child) {
							$scope.communityasked.push({
								question: child.question,
								answer: child.answer,
								name: child.name,
								specialization: child.specialization,
								id: child.id,


							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');



				});
		};

	})


	//*********Waiting To Expert*************	//
	.controller('askingforexCtrl', function ($scope, $http, $ionicHistory, $ionicPopup, $stateParams, $ionicScrollDelegate) {

	$scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  	};


		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.specialistans = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.specialistans.length > 0) {
				var valuefromexpert = $scope.specialistans.length;

			} else {
				var valuefromexpert = 0;
			}

			$scope.appstatus = localStorage.getItem('appstatus');
			$scope.user_type = localStorage.getItem('usr_type');
			if ($scope.appstatus == 'student') {

				$http.get("http://api.hauduai.com.ng/ques_wating_lecturer?id=" + id + "&offset=" + valuefromexpert)
					.success(function (response) {
						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions to Available.',
								template: 'No Answer.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.specialistans.push({
									question: child.question,
									user_name: child.user_name,
									course: child.course_name,
									qualification: child.qualification,
									specialization: child.specialization,
									id: child.id,
									year: child.year_level_name,
									university: child.university_name,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');

					});
			}
			else {

				$http.get("http://api.hauduai.com.ng/specialistansbyme?id=" + id + "&offset=" + valuefromexpert)
					.success(function (response) {
						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions to Available.',
								template: 'No Answer.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.specialistans.push({
									question: child.question,
									user_name: child.user_name,
									suffix: child.suffix,
									id: child.id,
									profession: child.SubSector,
									profession_specialist_name: child.profession_specialist_name,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');

					});
			}

		};


	})


	//*******Waiting To Community************//	
	.controller('askingforcommunCtrl', function ($scope, $http, $ionicHistory, $state, $ionicPopup, $stateParams) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityans = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.communityans.length > 0) {
				var valuefromcomm = $scope.communityans.length;

			} else {
				var valuefromcomm = 0;
			}

			$scope.appstatus = localStorage.getItem('appstatus');
			$scope.user_type = localStorage.getItem('usr_type');
			if ($scope.appstatus == 'student') {

				$http.get("http://api.hauduai.com.ng/ques_wating_student?id=" + id + "&offset=" + valuefromcomm)
					.success(function (response) {


						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions to Available.',
								template: 'No Questions.'
							});

						} else {


							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.communityans.push({
									question: child.question,
									user_name: child.user_name,
									course: child.course_name,
									qualification: child.qualification,
									specialization: child.specialization,
									id: child.id,
									year: child.year_level_name,
									university: child.university_name,

								});

							})

						}

						$scope.$broadcast('scroll.infiniteScrollComplete');


					});
			}
			else {
				$http.get("http://api.hauduai.com.ng/communityansbyme?id=" + id + "&offset=" + valuefromcomm)
					.success(function (response) {


						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions to Available.',
								template: 'No Questions.'
							});

						} else {


							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.communityans.push({
									question: child.question,
									user_name: child.user_name,
									suffix: child.suffix,
									id: child.id,
									SubProfession: child.SubProfession,
									SubSector: child.SubSector,
									profession: child.profession,
									profession_specialist_name: child.profession_specialist_name,

								});

							})



						}

						$scope.$broadcast('scroll.infiniteScrollComplete');


					});
			}


		};

	})

	.controller('proCtrl', function ($scope, $http, $ionicHistory, $state, $window) {

		var id = localStorage.getItem("userid");
		$scope.triggerCall = function (id) {
			$window.open("http://www.hauduai.com.ng/index/stepp3/" + id);
		}

		$http.get("http://api.hauduai.com.ng/get_all_profile?id=" + id)
			.success(function (response) {

				$scope.uid = localStorage.getItem("userid");

				$scope.prof = response;

			})

		$scope.edit = function () {
			$scope.suffi = 'value';

			window.location.href = '/#/app/profileedit';


		}

	})

	.controller('AllquestCtrl', function ($scope, $http, $ionicHistory, $state, $stateParams, $ionicPopup) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityask = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {
			var params = {};
			if ($scope.communityask.length > 0) {
				var valuetocomm = $scope.communityask.length;

			} else {
				var valuetocomm = 0;
			}
			$scope.appstatus = localStorage.getItem('appstatus');
			$scope.user_type = localStorage.getItem('usr_type');
			if ($scope.appstatus == 'student') {
				$http.get("http://api.hauduai.com.ng/getaskedquestions?id=" + id + "&type=student&offset=" + valuetocomm)
					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Available .',
								template: 'No Questions.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.communityask.push({
									question: child.question,
									user_name: child.user_name,
									course: child.course_name,
									qualification: child.qualification,
									specialization: child.specialization,
									id: child.id,
									year: child.year_level_name,
									university: child.university_name,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');



					});
			} else {

				$http.get("http://api.hauduai.com.ng/getaskedquestions?id=" + id + "&offset=" + valuetocomm)
					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Available .'
								//template: 'No Questions.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.communityask.push({
									question: child.question,
									user_name: child.user_name,
									suffix: child.suffix,
									id: child.id,
									profession: child.profession,
									sector: child.sector,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');



					});
			}


		};


		$http.get("http://api.hauduai.com.ng/get_ratings?id=" + id)
			.success(function (response) {

				$scope.get_ratings = response;

			})


	})

	.controller('rate_AllquestCtrl', function ($scope, $http, $ionicHistory, $state, $stateParams, $ionicPopup) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityask = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {
			var params = {};
			if ($scope.communityask.length > 0) {
				var valuetocomm = $scope.communityask.length;

			} else {
				var valuetocomm = 0;
			}
			$http.get("http://api.hauduai.com.ng/waiting_for_rate_comm?id=" + id + "&offset=" + valuetocomm)
				.success(function (response) {

					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Questions Available .',
							template: 'No Questions.'
						});

					} else {

						$scope.answer_avail = true;

						angular.forEach(response, function (child) {
							$scope.communityask.push({
								question: child.question,
								answer: child.answer,
								name: child.name,
								suffix: child.suffix,
								id: child.id,
								profession: child.profession,
								sector: child.sector,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');

				});

		};


		$http.get("http://api.hauduai.com.ng/get_ratings?id=" + id)
			.success(function (response) {

				$scope.get_ratings = response;

			})


	})


	.controller('rate_stuanswerCtrl', function ($scope, $http, $ionicHistory, $state, $stateParams, $ionicPopup) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.communityask = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {
			var params = {};
			if ($scope.communityask.length > 0) {
				var valuetocomm = $scope.communityask.length;

			} else {
				var valuetocomm = 0;
			}
			$http.get("http://api.hauduai.com.ng/waiting_for_rate_student?id=" + id + "&offset=" + valuetocomm)
				.success(function (response) {

					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Questions Available .',
							template: 'No Questions.'
						});

					} else {

						$scope.answer_avail = true;

						angular.forEach(response, function (child) {
							$scope.communityask.push({
								question: child.question,
								answer: child.answer,
								name: child.name,
								course: child.course,
								id: child.id,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');

				});

		};


		$http.get("http://api.hauduai.com.ng/get_ratings?id=" + id)
			.success(function (response) {

				$scope.get_ratings = response;

			})


	})

	.controller('commntyCtrl', function ($scope, $ionicHistory, $stateParams, $http, $ionicPopup) {

		var id = localStorage.getItem("userid");
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.comans = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.comans.length > 0) {
				var valuebycomm = $scope.comans.length;

			} else {
				var valuebycomm = 0;
			}

			$scope.appstatus = localStorage.getItem('appstatus');
			$scope.user_type = localStorage.getItem('usr_type');
			if ($scope.appstatus == 'student') {


				$http.get("http://api.hauduai.com.ng/getaskquestions_lecturer?id=" + id + "&offset=" + valuebycomm)

					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Available.',
								template: 'No Questions.'
							});

						} else {
							$scope.answer_avail = true;


							angular.forEach(response, function (child) {
								$scope.comans.push({
									value: child.value,
									answer: child.answer,
									user_name: child.user_name,
									course: child.course_name,
									id: child.id,
									question: child.question,
									year: child.year_level_name,
									user_type: child.type,
									university: child.university_name,
									qualification: child.qualification,
									specialization: child.specialization,
								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');

					});
			} else {

				$http.get("http://api.hauduai.com.ng/getaskquestions?id=" + id + "&offset=" + valuebycomm)

					.success(function (response) {
						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Available.',
								template: 'No Questions.'
							});

						} else {
							$scope.answer_avail = true;


							angular.forEach(response, function (child) {
								$scope.comans.push({
									question: child.question,
									answer: child.answer,
									user_name: child.user_name,
									suffix: child.suffix,
									id: child.idd,
									value: child.rate,
									qid: child.id,
									profession: child.SubProfession,
									SubSector: child.SubSector,
									profession_specialist_name: child.profession_specialist_name,
									type: child.type,
									main_type: child.main_type
								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');

					});
			}

		};

	})
	.controller('exqusCtrl', function ($scope, $ionicHistory, $stateParams, $http, $ionicPopup) {

		var id = localStorage.getItem("userid");

		$scope.id = $stateParams.id;

		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.expqus = [];

		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.expqus.length > 0) {
				var valuebyexpert = $scope.expqus.length;


			} else {
				var valuebyexpert = 0;
			}

			$scope.appstatus = localStorage.getItem('appstatus');
			$scope.user_type = localStorage.getItem('usr_type');
			if ($scope.appstatus == 'student') {
				$http.get("http://api.hauduai.com.ng/getaskquestions_lec?id=" + id + "&offset=" + valuebyexpert)
					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Available.',
								template: 'No Questions.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.expqus.push({
									value: child.value,
									question: child.question,
									answer: child.answer,
									user_name: child.user_name,
									course: child.course_name,
									id: child.id,
									user_type: child.type,
									year: child.year_level_name,
									university: child.university_name,
									qualification: child.qualification,
									specialization: child.specialization,

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');
					});
			}
			else {
				$http.get("http://api.hauduai.com.ng/getaskquestionsexp?id=" + id + "&offset=" + valuebyexpert)
					.success(function (response) {

						if (response.status == "Failed") {
							$scope.answer_notavail = true;

							$scope.noMoreItemsAvailable = false;
							var alertPopup = $ionicPopup.alert({
								title: 'No More Questions Available.',
								template: 'No Questions.'
							});

						} else {

							$scope.answer_avail = true;

							angular.forEach(response, function (child) {
								$scope.expqus.push({
									question: child.question,
									answer: child.answer,
									user_name: child.user_name,
									suffix: child.suffix,
									id: child.idd,
									value: child.rate,
									qid: child.id,
									profession: child.SubSector,
									profession_specialist_name: child.profession_specialist_name

								});

							})
						}
						$scope.$broadcast('scroll.infiniteScrollComplete');
					});
			}
		};
	})


	//---------------------------POPUP for Expert page--------------//	
	.controller('termsandcond', function ($scope, $ionicHistory, $stateParams, $http, $ionicPopup) {

	
		$scope.dosubmitqueez = function () {

			var user_id = localStorage.getItem("userid");
			var email = localStorage.getItem("useremail");
			var loginDataexp = $scope.loginData.exp;
			var checkkk = false;

			if (typeof (loginDataexp) == "undefined") {
				checkkk = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Expert.',
					template: ' Select the Expert'
				});
			}


			if (checkkk == false) {

				var type = localStorage.getItem("usr_type");

				$http.get("http://api.hauduai.com.ng/submit_question_to_specialist?user_id=" + user_id + "&que=" + $scope.loginData.ques + "&exp_field=" + $scope.loginData.fieldd + "&username=" + $scope.loginData.username + "&email=" + $scope.loginData.email + "&expert=" + loginDataexp + "&chkkk=" + $scope.termacond + "&user_email=" + email + "&type=" + type)

					.success(function (response) {
						if (response.status == "Success") {
							$scope.modal.hide();
							$scope.quali = "";
							$scope.que = "";

							$scope.sub_field = "";
							var alertPopup = $ionicPopup.alert({
								title: 'Your Question Has Been Submitted.',
								template: ' Question Submitted.'
							});

							//window.location.reload(true);
							$scope.speci_profile = "";
							$scope.count = "";
							$scope.loginData.exp = "";
							$scope.sub_field = "";
							$scope.que = "";
							$scope.quali = "";
						}
						else {
							var alertPopup = $ionicPopup.alert({
								title: 'Your Question Has Not Been Submitted.',
								template: ' Question not Submitted.'
							});
							$scope.que = "";
							$scope.quali = "";
							$scope.loginData.exp = "";

						}

					});

			}

		}
	})
	//-----------------------------Finish-----------------------//
	.controller('ask_specialistCtrl', function ($scope, $ionicModal, $ionicHistory, $http, $location, $ionicPopup) {
		$scope.hello = false;
		$scope.note = false;
		$scope.que = "";
		//$scope.quali="";
		//$scope.loginData.exp="";
		$http.get("http://api.hauduai.com.ng/spec_area")
			.success(function (response) {
				$scope.specialareamajaor = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function (response) {

				$scope.question = response.setting_value;
				var b = $scope.question.split("<p>")[1];
				var a = b.split("</p>")[0];

				$scope.qu = parseInt(a);
			})
		$scope.changed = function () {
			var id = $scope.quali;

			$http.get("http://api.hauduai.com.ng/df?id=" + id)
				.success(function (response) {

					$scope.qualii = response;
					$scope.note = true;
				})
		}

		$scope.submitt = function () {

			//$scope.modal.show();
			$scope.loginData.ques = $scope.que;

			var quali = $scope.quali;
			var que = $scope.que;

			var sub_field = $scope.sub_field;

			$scope.loginData.username = localStorage.getItem("loggedin");
			$scope.loginData.email = localStorage.getItem("useremail");

			//localStorage.setItem("userid",response.id);
			$scope.email = localStorage.getItem("useremail");

			if (typeof (sub_field) != "undefined") {
				$scope.loginData.fieldd = $scope.sub_field;
			}
			else {
				$scope.loginData.fieldd = $scope.quali;
			}

			if (sub_field) {
				$http.get("http://api.hauduai.com.ng/user_listby_fieldd?field=" + $scope.sub_field)
					.success(function (response) {
						$scope.specialist_user = response;

					})
			}

			else if (quali) {

				$http.get("http://api.hauduai.com.ng/user_listby_field?field=" + quali)
					.success(function (response) {
						$scope.specialist_user = response;

					})
			}
			if (typeof (que) == "undefined" || que == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Type the Question.',
					template: 'Type the Question.'
				});

			}

			else if (typeof (quali) == "undefined" || quali == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Subject Matter Field.',
					template: ' Subject Matter Field.'
				});

			}
			else {
				$scope.modal.show();
				$scope.que = "";

			}

			$scope.dosubmitquee = function () {
				var name = localStorage.getItem("loggedin");
				var user_id = localStorage.getItem("userid");

				var loginDataexp = $scope.loginData.exp;
				var checkkk = false;
				if (typeof (loginDataexp) == "undefined") {
					checkkk = true;

					var alertPopup = $ionicPopup.alert({
						title: 'Please Select the Expert.',
						template: ' Select the Expert',

					});
				}
				/*var chkkk = $scope.termacond;


				if (typeof (chkkk) == "undefined") {

					checkkk = true;
					var alertPopup = $ionicPopup.alert({
						title: 'Please Select the terms and conditions.',
						template: ' Terms and Conditions.'
					});
				}
				if (checkkk == false) {

					var type = localStorage.getItem("type");

					$http.get("http://api.hauduai.com.ng/submit_question_to_specialist?user_id=" + user_id + "&que=" + $scope.loginData.ques + "&exp_field=" + $scope.loginData.fieldd + "&username=" + $scope.loginData.username + "&email=" + $scope.loginData.email + "&expert=" + loginDataexp + "&chkkk=" + $scope.termacond + "&type=" + type)

						.success(function (response) {
							if (response.status == "Success") {
								$scope.modal.hide();
								$scope.quali = "";
								$scope.que = "";


								$scope.sub_field = "";
								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has Been Submitted.',
									template: ' Question Submitted.'
								});

							}

							else {
								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has Not Been Submitted.',
									template: ' Question not Submitted.'
								});
								$scope.que = "";
								$scope.quali = "";
								$scope.loginData.exp = "";

							}
						});
				}*/

			}
			$scope.get_speci_profile = function () {
			var user_id = localStorage.getItem("userid");
				$http.get("http://api.hauduai.com.ng/get_spec_profile?id=" + $scope.loginData.exp)
					.success(function (response) {
						$scope.hello = true;
						$scope.speci_profile = response[0];

					})
				$http.get("http://api.hauduai.com.ng/countt?id=" + $scope.loginData.exp)
					.success(function (response) {

						if (response[0].c > 3) {
							$scope.count = "The chosen expert has 3 questions on his queue, if you are willing to wait your question will be submitted after he answers at least one of the questions or else choose another specialist";
						}
						else {
							$scope.count = response[0].c;
						}
					})

				$http.get("http://api.hauduai.com.ng/get_spec_info_to_show?id=" + $scope.loginData.exp)
					.success(function (response) {

						$scope.infoto = response[0];	
					})
				// $http.get("http://api.hauduai.com.ng/get_ratings?id=" + $scope.loginData.exp)
				// 	.success(function (response) {
				// 		$scope.hello = true;
				// 		$scope.get_ratings = response;

				// 		var userrating = parseFloat(response.ratings).toFixed(2);

				// 		$scope.userrate = response.ratings;

				// 	})

					$http.get("http://api.hauduai.com.ng/user_rating?user_id="+$scope.loginData.exp)
					.success(function (response) {

						$scope.userate = response.result;
						var userrating = parseFloat($scope.userate).toFixed(2);
						$scope.userrate = userrating;
					})
			}
		}
		$ionicModal.fromTemplateUrl('templates/popupForque.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.closepop = function () {

			$scope.modal.hide();
			$scope.speci_profile = "";
			$scope.count = "";
			$scope.loginData.exp = "";
			$scope.sub_field = "";
			$scope.que = "";
			$scope.quali = "";

		}


	})

	///*************        *********//
	//-----------------Popup For Community Page---------------------//
	.controller('termsandcondCtrl', function ($scope, $ionicHistory, $stateParams, $http, $ionicPopup) {

		$scope.comsubmitque = function () {
			var user_id = localStorage.getItem("userid");
			var error = false;
			
			if (error == false) {

				var utype = localStorage.getItem("usr_type");
				$http.get("http://api.hauduai.com.ng/ask_question?user_id=" + user_id + "&question=" + $scope.loginData.ques + "&username=" + $scope.loginData.username + "&useremail=" + $scope.loginData.email + "&profession=" + $scope.loginData.professionfieldd + "&type=" + utype + "&sector=" + $scope.loginData.sectorfieldd)
					.success(function (response) {
						if (response.status == "success") {
							$scope.modal.hide();

							var alertPopup = $ionicPopup.alert({
								title: 'Your Question Has Been Submitted.',
								template: 'question Submit'
							});
							window.location.reload(true);
							window.location.href = '#/app/ask_community';
							$scope.que = "";
							$scope.quali = "";
							$scope.subprofession = "";
							$scope.sectorfieldd = "";
							$scope.sub_field = "";
							$scope.sub_sector_field = ""
						}
						else {
							var alertPopup = $ionicPopup.alert({
								title: 'Your question Has not Been Submitted.',
								template: 'question Not Submit.'
							});
							$scope.que = "";
							$scope.quali = "";
							$scope.subprofession = "";
							$scope.sectorfieldd = "";
							$scope.sub_field = "";
							$scope.sub_sector_field = "";

						}

					});
			}
		}


	})

	//-------------------Finish---------------------//


	.controller('ask_communityCtrl', function ($scope, $ionicModal, $ionicHistory, $http, $location, $ionicPopup) {

		$http.get("http://api.hauduai.com.ng/profession")
			.success(function (response) {
				$scope.profession = response;

			})

		$http.get("http://api.hauduai.com.ng/sector")
			.success(function (response) {
				$scope.sector_community = response;

			})
		$http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function (response) {

				$scope.question = response.setting_value;
				var b = $scope.question.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);
			})

		$scope.changed = function () {
			var id = $scope.subprofession;
			$scope.sub_pro_show = true;
			$http.get("http://api.hauduai.com.ng/profession_subcategory_name?id=" + id)
				.success(function (response) {

					$scope.qualii = response;

				})
		}
		$scope.changedsector = function () {
			var id = $scope.sub_sector_field;
			$scope.sub_sec_show = true;
			$http.get("http://api.hauduai.com.ng/sector_subcategories_name?id=" + id)
				.success(function (response) {

					$scope.s = response;

				})
		}


		$scope.submitt_community_question = function () {
			//$scope.modal.show();

			$scope.loginData.ques = $scope.que;

			var quali = $scope.quali;
			var que = $scope.que;
			var subprofession = $scope.subprofession;
			var sectorfieldd = $scope.sectorfieldd;
			var allvalues = Array();
			var sub_field = $scope.sub_field;
			//var check=true;

			$scope.loginData.username = localStorage.getItem("loggedin");
			$scope.loginData.email = localStorage.getItem("useremail");

			$scope.email = localStorage.getItem("useremail");



			if (typeof ($scope.sub_p_field) != "undefined") {


				$scope.loginData.professionfieldd = $scope.sub_p_field;
			} else {
				$scope.loginData.professionfieldd = $scope.subprofession;
			}

			if (typeof ($scope.ss) != "undefined") {

				$scope.loginData.sectorfieldd = $scope.ss;
			} else {
				$scope.loginData.sectorfieldd = $scope.sub_sector_field;
			}



			if (typeof (que) == "undefined") {
				check = false;
				allvalues[0] = "que1";

			}

			if (typeof ($scope.ss) == "undefined") {
				check = false;
				allvalues[1] = "que2";
			}

			if (typeof ($scope.sub_p_field) == "undefined") {
				check = false;
				allvalues[2] = "que3";
			}

			if (typeof ($scope.subprofession) == "undefined") {
				check = false;
				allvalues[3] = "que4";
			}
			if (typeof ($scope.sub_sector_field) == "undefined") {
				check = false;
				allvalues[4] = "que5";
			}


			if (typeof (allvalues[0]) !== "string") {


				if (typeof (allvalues[3]) == "undefined" || typeof (allvalues[4]) == "undefined") {
					$scope.modal.show();
					$scope.que = "";
					$scope.quali = "";
					//var que=$scope.que;
					$scope.subprofession = "";
					$scope.sectorfieldd = "";
					$scope.sub_field = "";
					$scope.sub_sector_field = ""
				} else {
					var alertPopup = $ionicPopup.alert({
						title: 'Please Select Any Field.',
						template: ' Select Any Field.'
					});
				}

			}
			else {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Question.',
					template: ' Type Question.'
				});
				$scope.quali = "";

			} /*$scope.comsubmitque = function () {
				var user_id = localStorage.getItem("userid");
				var error = false;
				var chk = $scope.tac;
				if (typeof (chk) == "undefined") {

					error = true;
					var alertPopup = $ionicPopup.alert({
						title: 'Please select the  terms and conditions.',
						template: 'Select terms and Conditions.'
					});
				}
				if (error == false) {

					$http.get("http://api.hauduai.com.ng/ask_question?user_id=" + user_id + "&question=" + $scope.loginData.ques + "&username=" + $scope.loginData.username + "&useremail=" + $scope.loginData.email + "&profession=" + $scope.loginData.professionfieldd + "&type= community" + "&sector=" + $scope.loginData.sectorfieldd + "&chk=" + $scope.tac)
						.success(function (response) {
							if (response.status == "success") {
								$scope.modal.hide();
								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has Been Submitted.',
									template: 'Answer Submit'
								});
								window.location.href = '#/app/ask_community';
								$scope.que = "";
								$scope.quali = "";
								$scope.subprofession = "";
								$scope.sectorfieldd = "";
								$scope.sub_field = "";
								$scope.sub_sector_field = ""
							}
							else {
								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has not Been Submitted.',
									template: 'Question Not Submit.'
								});
								$scope.que = "";
								$scope.quali = "";
								$scope.subprofession = "";
								$scope.sectorfieldd = "";
								$scope.sub_field = "";
								$scope.sub_sector_field = "";
							}

						});
				}*/




		}

		$ionicModal.fromTemplateUrl('templates/popupforcomque.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.closepop = function () {

			$scope.modal.hide();
			$scope.ss = "";
			$scope.sub_p_field = "";
			$scope.que = "";
			$scope.subprofession = "";
			$scope.sectorfieldd = "";
			$scope.sub_field = "";
			$scope.sub_sector_field = ""
		}

	})

	.controller('contactCtrl', function ($scope, $ionicModal, $ionicHistory, $ionicPopup, $http, $location) {
		var id = localStorage.getItem("userid");



		$http.get("http://api.hauduai.com.ng/get_all_profile?id=" + id)
			.success(function (response) {

				$scope.profuser = response;


			})

		$scope.Submit = function () {

			var emailidd = localStorage.getItem("useremail");
			var username = localStorage.getItem("loggedin");

			var subject = $scope.subject;
			var answertyped = $scope.answertyped;


			$scope.subject = "";
			if (typeof (subject) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Subject.',
					template: 'Type Subject.'
				});

			}
			else if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Message.',
					template: 'Type Message.'
				});

			}

			else {
				$http.get("http://api.hauduai.com.ng/contact_us?contact_msg=" + answertyped + "&contact_name=" + username + "&contact_subject=" + subject + "&contact_email=" + emailidd)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Message Has Been Sent.',
							template: 'Message Sent.'
						});

						//$location.path('#/app/browse');
						$scope.answertyped = "";
						$scope.subject = "";
						window.location.reload(true);

					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Please Check your Message Status.',
							template: 'Message Not Sent.'
						});
						$scope.answertyped = "";
						$scope.subject = "";

					})
			}



		}
	})



	//-------------for student contact----------////

	.controller('stucontactCtrl', function ($scope, $ionicModal, $ionicHistory, $ionicPopup, $http, $location) {
		var id = localStorage.getItem("userid");



		$http.get("http://api.hauduai.com.ng/get_all_stuprofile?id=" + id)
			.success(function (response) {

				$scope.profuser = response;


			})

		$scope.Submit = function () {

			var emailidd = localStorage.getItem("useremail");
			var username = localStorage.getItem("loggedin");

			var subject = $scope.subject;
			var answertyped = $scope.answertyped;


			$scope.subject = "";
			if (typeof (subject) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Subject.',
					template: 'Type Subject.'
				});

			}
			else if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Message.',
					template: 'Type Message.'
				});

			}

			else {
				$http.get("http://api.hauduai.com.ng/stu_contact_us?contact_msg=" + answertyped + "&contact_name=" + username + "&contact_subject=" + subject + "&contact_email=" + emailidd)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Message Has Been Sent.',
							template: 'Message Sent.'
						});

						//$location.path('#/app/stu_browse');
						$scope.answertyped = "";
						$scope.subject = "";
						window.location.reload(true);

					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Please Check your Message Status.',
							template: 'Message Not Sent.'
						});
						$scope.answertyped = "";
						$scope.subject = "";

					})
			}

		}
	})



	.controller('que_ansCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alter = false;
		$scope.alter1 = true;
		var id = $stateParams.id;


		// Generated by CoffeeScript 1.9.1

		$http.get("http://api.hauduai.com.ng/que_ans?id=" + id)
			.success(function (response) {

				if (response.length > 0) {

					$scope.qu_an = response;
					localStorage.setItem("answer", response[0].typee);


				}

				else {

					$scope.alter = true;
					$scope.alter1 = false;


				}


			})

		$scope.go_back = function () {
			$ionicHistory.goBack();
		}


	})

	.controller('stu_que_ansCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alter = false;
		$scope.alter1 = true;
		var id = $stateParams.id;


		// Generated by CoffeeScript 1.9.1

		$http.get("http://api.hauduai.com.ng/que_ans_student?id=" + id)
			.success(function (response) {
				if (response.length > 0) {

					$scope.qu_an = response;
					localStorage.setItem("answer", response[0].type);

				}
				else {

					$scope.alter = true;
					$scope.alter1 = false;
				}

			})

		$scope.go_back = function () {
			$ionicHistory.goBack();
		}


	})

	.controller('commanswerCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alterer = false;
		$scope.alterr = true;
		var id = $stateParams.id;
		var idd = localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/que_anss?id=" + id + "&uid=" + idd)
			.success(function (response) {

				if (response.length > 0) {

					$scope.commanswer = response;

				}
				else {

					$scope.alterer = true;
					$scope.alterr = false;


				}


			})

		$scope.gooback = function () {
			$ionicHistory.goBack();
		}


	})

	.controller('stu_commanswerCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alterer = false;
		$scope.alterr = true;
		var id = $stateParams.id;
		var idd = localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/que_anss_studentapp?id=" + id + "&uid=" + idd)
			.success(function (response) {

				if (response.length > 0) {

					$scope.commanswer = response;

				}
				else {

					$scope.alterer = true;
					$scope.alterr = false;


				}


			})

		$scope.gooback = function () {
			$ionicHistory.goBack();
		}


	})

	.controller('fromcommunCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alterer = false;
		$scope.alterr = true;
		var id = $stateParams.id;
		//var idd= localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/que_ans?id=" + id)
			.success(function (response) {

				if (response.length > 0) {

					$scope.commanswerss = response;

				}
				else {

					$scope.alterer = true;
					$scope.alterr = false;


				}


			})

		$scope.gooback = function () {
			$ionicHistory.goBack();
		}


	})
	.controller('toexptanswerCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alltterer = false;
		$scope.alltterr = true;
		var id = $stateParams.id;

		var idd = localStorage.getItem("userid");

		$http.get("http://api.hauduai.com.ng/que_anss?id=" + id + "&uid=" + idd)
			.success(function (response) {

				if (response.length > 0) {

					$scope.toexprtanswer = response;

				}

				else {

					$scope.alltterer = true;
					$scope.alltterr = false;

				}
			})

		$scope.gobaacck = function () {
			$ionicHistory.goBack();
		}


	})

	.controller('stu_toexptanswerCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alltterer = false;
		$scope.alltterr = true;
		var id = $stateParams.id;

		var idd = localStorage.getItem("userid");



		$http.get("http://api.hauduai.com.ng/que_anss_studentapp?id=" + id + "&uid=" + idd)
			.success(function (response) {

				if (response.length > 0) {

					$scope.toexprtanswer = response;

				}

				else {

					$scope.alltterer = true;
					$scope.alltterr = false;

				}
			})

		$scope.gobaacck = function () {
			$ionicHistory.goBack();
		}


	})

	//**********To Expert Answer**********
	.controller('exptanswerCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alltterer = false;
		$scope.alltterr = true;
		var id = $stateParams.id;

		//var idd= localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/que_ans_Exp?id=" + id)
			.success(function (response) {

				if (response.length > 0) {

					$scope.exprtanswer = response;
					localStorage.setItem("expans", response[0].type);

				}
				else {

					$scope.alltterer = true;
					$scope.alltterr = false;


				}


			})

		$scope.gobaacck = function () {
			$ionicHistory.goBack();
		}


	})

	.controller('stu_exptanswerCtrl', function ($scope, $ionicHistory, $stateParams, $http) {
		$scope.alltterer = false;
		$scope.alltterr = true;
		var id = $stateParams.id;

		//var idd= localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/que_ans_lec?id=" + id)
			.success(function (response) {

				if (response.length > 0) {

					$scope.exprtanswer = response;
					localStorage.setItem("expans", response[0].type);

				}
				else {

					$scope.alltterer = true;
					$scope.alltterr = false;


				}


			})

		$scope.gobaacck = function () {
			$ionicHistory.goBack();
		}


	})

	//-----report abuse for to lecturer----///////
	.controller('lec_reportCtrl', function ($scope, $ionicHistory, $stateParams, $http, $location, $ionicPopup) {

		var id = $stateParams.id;
		var re_id = localStorage.getItem('userid');

		var report_id = id;

		$http.get("http://api.hauduai.com.ng/get_report_question?qid=" + report_id + "&type=lecturer&usr_id=" + re_id)
			.success(function (response) {

				$scope.abuse_ques = response[0];
				$scope.repot = response[1];

			})

		$scope.Submittol = function () {

			var emailidd = localStorage.getItem("useremail");

			var qwe = $scope.abuse_ques.question;

			var answertyped = $scope.answertyped;

			$scope.answertyped = "";
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Message.',
					template: 'Type Message.'
				});
				$scope.answertyped = "";
			}
			else {

				$http.get("http://api.hauduai.com.ng/report_mail?question=" + qwe + "&email=" + emailidd + "&messge=" + answertyped)

					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Message Has Been Sent.',
							template: 'Message Sent.'
						});

					})

					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Please Check your Message Status.',
							template: 'Message Not Sent.'
						});
						$scope.answertyped = "";
						$scope.subject = "";

					})

			}

		}

	})

	//-----------report abuse from lecturer qwestion waiting---------//
	.controller('qwait_abusreportCtrl', function ($scope, $ionicHistory, $stateParams, $http, $location, $ionicPopup) {

		var id = $stateParams.id;
		var re_id = localStorage.getItem('userid');

		var report_id = id;

		$http.get("http://api.hauduai.com.ng/get_report_question?qid=" + report_id + "&type=student&usr_id=" + re_id)
			.success(function (response) {

				$scope.abuse_ques = response[0];
				$scope.repot = response[1];

			})

		$scope.Submittol = function () {

			var emailidd = localStorage.getItem("useremail");
			//var username = localStorage.getItem("loggedin");
			var qwe = $scope.abuse_ques.question;

			var answertyped = $scope.answertyped;

			$scope.answertyped = "";
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Message.',
					template: 'Type Message.'
				});
				$scope.answertyped = "";
			}
			else {

				$http.get("http://api.hauduai.com.ng/report_mail?question=" + qwe + "&email=" + emailidd + "&messge=" + answertyped)

					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Message Has Been Sent.',
							template: 'Message Sent.'
						});

					})

					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Please Check your Message Status.',
							template: 'Message Not Sent.'
						});
						$scope.answertyped = "";
						$scope.qwe = "";

					})

			}

		}
	})

	//-----------report abuse from student qwestion waiting---------//

	.controller('qwaitstu_abusreportCtrl', function ($scope, $ionicHistory, $stateParams, $http, $location, $ionicPopup) {

		var id = $stateParams.id;
		var re_id = localStorage.getItem('userid');

		var report_id = id;
		var answertyped = $scope.answertyped;


		$http.get("http://api.hauduai.com.ng/get_report_question?qid=" + report_id + "&type=student&usr_id=" + re_id)
			.success(function (response) {

				$scope.abuse_ques = response[0];
				$scope.repot = response[1];

			})


		$scope.Submitqw = function () {

			var emailidd = localStorage.getItem("useremail");
			//var username = localStorage.getItem("loggedin");
			var qwe = $scope.abuse_ques.question;

			var answertyped = $scope.answertyped;

			$scope.answertyped = "";
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Message.',
					template: 'Type Message.'
				});
				$scope.answertyped = "";
			}
			else {

				$http.get("http://api.hauduai.com.ng/report_mail?question=" + qwe + "&email=" + emailidd + "&messge=" + answertyped)

					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Message Has Been Sent.',
							template: 'Message Sent.'
						});

					})

					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Please Check your Message Status.',
							template: 'Message Not Sent.'
						});
						$scope.answertyped = "";
						$scope.qwe = "";

					})

			}

		}
	})

	.controller('sturepoCtrl', function ($scope, $ionicHistory, $stateParams, $http, $location, $ionicPopup) {

		var id = $stateParams.id;
		var re_id = localStorage.getItem('userid');

		var report_id = id;

		$http.get("http://api.hauduai.com.ng/get_report_question?qid=" + report_id + "&type=student&usr_id=" + re_id)
			.success(function (response) {

				$scope.abuse_ques = response[0];
				$scope.repot = response[1];

			})

		$scope.Submitqtos = function () {

			var emailidd = localStorage.getItem("useremail");
			//var username = localStorage.getItem("loggedin");
			var qwe = $scope.abuse_ques.question;

			var answertyped = $scope.answertyped;

			$scope.answertyped = "";
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Message.',
					template: 'Type Message.'
				});
				$scope.answertyped = "";
			}
			else {

				$http.get("http://api.hauduai.com.ng/report_mail?question=" + qwe + "&email=" + emailidd + "&messge=" + answertyped)

					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Message Has Been Sent.',
							template: 'Message Sent.'
						});

					})

					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Please Check your Message Status.',
							template: 'Message Not Sent.'
						});
						$scope.answertyped = "";
						$scope.qwe = "";

					})

			}

		}

	})

	//****************Recent Question*******************//
	.controller('newCtrl', function ($scope, $ionicHistory, $http, $ionicPopup, $stateParams) {

		$scope.openFB = function (id) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng/single_question/' + id + '/community&t=Hauduai'); return false;
		};

		$scope.opentwittr = function (id) {
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};

		$scope.openlinked = function (id) {
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};

		//window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng/single_question/1279/community'); return false;

		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.livelinks = [];
		$scope.ofsset = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.ofsset.length > 0) {
				var val = parseInt($scope.ofsset) + 1;

			} else {
				var val = 1;
			}



			$http.get("http://api.hauduai.com.ng/Recentquestion?offset=" + val)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {

						$scope.answer_avail = true;
						$scope.ofsset = response.offset;

						angular.forEach(response, function (child) {
							$scope.livelinks.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});

		};


	})

	/* for(var i=0;i<=response.length-1;i++){
		   //console.log(response[i]);
   } 
 
 $scope.listque=response;
 
	
   	
})
 */


	.controller('new_Ctrl', function ($scope, $ionicHistory, $http, $ionicPopup, $stateParams) {


		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.livelinks = [];
		$scope.offfst = [];
		$scope.noMoreItemsAvailable = true;
		$scope.myfacebook = function (id) {

			var usrid = localStorage.getItem("userid");
			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=facebook &user_id=" + usrid)
			window.open('http://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng'); return false;

		}

		$scope.mytweet = function (id) {
			var usrid = localStorage.getItem("userid");
			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=twitter &user_id=" + usrid)
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng'); return false;
		}

		$scope.mylinked = function (id) {
			var usrid = localStorage.getItem("userid");
			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=linkedin &user_id=" + usrid)
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng'); return false;
		}

		$scope.loadolder = function () {

			var params = {};
			if ($scope.offfst.length > 0) {
				var value = parseInt($scope.offfst) + 1;

			} else {
				var value = 1;
			}



			$http.get("http://api.hauduai.com.ng/Recentquestion_studentapp?offset=" + value)
				.success(function (response) {

					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Questions.',
							template: 'No Answer.'
						});
						
					} else {

						$scope.answer_avail = true;
						$scope.offfst = response.offset;

						angular.forEach(response, function (child) {
							$scope.livelinks.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,
								facebook_share: child.facebook_share,
								linkedin_share: child.linkedin_share,
								twitter_share: child.twitter_share,


							});

						})
					}
					
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});
				

		};


	})



	.controller('answeresctrl', function ($scope, $ionicHistory, $http, $stateParams, $ionicPopup) {
		var a = $stateParams.id;
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;

		$http.get("http://api.hauduai.com.ng/incview?id=" + a)
			.success(function (response) {



			})
		//For fetch Who ask Question
		$http.get("http://api.hauduai.com.ng/answeres?id=" + a)
			.success(function (response) {

				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;
			})

		//For fetch Who answer a Question

		$http.get("http://api.hauduai.com.ng/answeres_exp?id=" + a)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.quexp = response;

			})
		$scope.livenks = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};

			if ($scope.livenks.length > 0) {
				var val = $scope.livenks.length;

			} else {
				var val = 0;


			}

			$http.get("http://api.hauduai.com.ng/answeress?id=" + a + "&offset=" + val)
				.success(function (response) {

					if (response.status == "Failed") {

						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {
						$scope.answer_avail = true;

						angular.forEach(response, function (child) {
							$scope.livenks.push({
								ans: child.answer,
								name: child.user_name,
								suffix: child.suffix,
								SubSector: child.SubSector,
								SubProfession: child.SubProfession,
								selection_area2: child.selection_area2,
								selection_area2_sub: child.selection_area2_sub,
								type: child.type,
								id: child.id,
								value: child.rate,
								main_profession: child.main_profession,
								main_sector: child.main_sector,
								expert_area1: child.expert_area1,
								expert_area2: child.expert_area2
							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});


		};

	})


	.controller('stu_answeresctrl', function ($scope, $ionicHistory, $http, $stateParams, $ionicPopup) {
		var a = $stateParams.id;
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;

		$http.get("http://api.hauduai.com.ng/incview?id=" + a)
			.success(function (response) {

			})
		//For fetch Who ask Question

		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a)
			.success(function (response) {

				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;


			})


		$scope.livenks = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};

			if ($scope.livenks.length > 0) {
				var val = $scope.livenks.length;

			} else {
				var val = 0;


			}

			$http.get("http://api.hauduai.com.ng/answeress_studentapp?id=" + a + "&offset=" + val)
				.success(function (response) {

					if (response.status == "Failed") {

						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {
						$scope.answer_avail = true;

						angular.forEach(response, function (child) {
							$scope.livenks.push({
								ans: child.answer,
								first_name: child.user_name,
								course: child.course_name,
								year: child.year_level_name,
								university: child.university_name,
								specialization: child.specialization,
								count: child.count,
								qualification: child.qualification,
								type: child.typee,
								id: child.id,

								value: child.rate,
								main_profession: child.main_profession,
								main_sector: child.main_sector,
								expert_area1: child.expert_area1,
								expert_area2: child.expert_area2
							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});


		};

	})

	/* .controller('AnsweresCtrl', function($scope, $ionicHistory,$http,$stateParams,$ionicPopup) {
		
		var a =$stateParams.id;
		$scope.id =$stateParams.id;
		$scope.answer_notavail=false;
		$scope.answer_avail=false;
		
		/* $http.get("http://api.hauduai.com.ng/incview?id="+a)
				.success(function(response){
					 
					
						
				}) 
				
		$http.get("http://api.hauduai.com.ng/answeres_exp?id="+a)
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
						 //alert(val);
						
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
						  var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
							});
						  //alert("No More Answers");
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
		
	}) */

	.controller('answeresssctrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;

		var chkans = $scope.answertyped;
		$scope.aa = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$http.get("http://api.hauduai.com.ng/answeres?id=" + a)
			.success(function (response) {

				for (var i = 0; i <= response.length - 1; i++) {

				}
				$scope.ques = response;
			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.answerbox = response.setting_value;
				var b = $scope.answerbox.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);



			})
		$http.get("http://api.hauduai.com.ng/answeress?id=" + a)
			.success(function (response) {


				if (response == "") {
					$scope.totalans = 0;
				} else {
					$scope.answer_avail = true;
					$scope.totalans = response.length;
				}


			})
		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;
				$location.href = "#/app/questioncomm";



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.doSubmit = function () {
			var answertyped = $scope.answertyped;
			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
			}
			else {
				$http.get("http://api.hauduai.com.ng/writeans?ans=" + answertyped + "&uid=" + uid + "&email=" + email + "&uname=" + uname + "&qid=" + a)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});
						window.location.reload(true);
						$scope.answertyped = "";

						window.location.href = '#/app/noans';


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Registered Already.'
						});
					})
			}
		}



	})

	.controller('stu_answeresssctrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;
		var chkans = $scope.answertyped;
		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;


			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.answerbox = response.setting_value;
				var b = $scope.answerbox.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);



			})
		$http.get("http://api.hauduai.com.ng/answeress?id=" + a)
			.success(function (response) {


				if (response == "") {
					$scope.totalans = 0;
				} else {
					$scope.answer_avail = true;
					$scope.totalans = response.length;
				}


			})
		$http.get("http://api.hauduai.com.ng/count_answeres_studentapp?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;
				$location.href = "#/app/questioncomm";



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.doSubmit = function () {
			var answertyped = $scope.answertyped;
			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
			}
			else {
				$http.get("http://api.hauduai.com.ng/writeans_studentapp?ans=" + answertyped + "&uid=" + uid + "&email=" + email + "&uname=" + uname + "&qid=" + a)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});
						$scope.answertyped = "";
						window.location.href = '#/app/stu_noans';
						window.location.reload(true);


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Registered Already.'
						});

					})
			}
		}



	})

	.controller('ansctrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;
		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$http.get("http://api.hauduai.com.ng/answeres?id=" + a)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.answer = response.setting_value;

				var b = $scope.answer.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.answerqu = parseInt(a);



			})
		$http.get("http://api.hauduai.com.ng/answeress?id=" + a)
			.success(function (response) {


				if (response == "") {
					$scope.totalans = 0;
				} else {
					$scope.answer_avail = true;
					$scope.totalans = response.length;
				}


			})
		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;
				//alert($scope.count_answeres);
				//$location.href="#/app/new";



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.doSubmit = function () {
			var answertyped = $scope.answertyped;
			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
			}
			else {

				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/writeans?ans=" + answertyped + "&uid=" + uid + "&email=" + email + "&uname=" + uname + "&qid=" + a + "&type=" + type)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.',

						});

						$scope.answertyped = "";
						window.location.reload(true);
					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Registered Already.'
						});
						$scope.answertyped = "";
					});

			}
		}



	})

	//-----------for student provide answer----------//

	.controller('stu_ansctrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;
		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.answer = response.setting_value;

				var b = $scope.answer.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.answerqu = parseInt(a);



			})
		$http.get("http://api.hauduai.com.ng/answeress?id=" + a)
			.success(function (response) {


				if (response == "") {
					$scope.totalans = 0;
				} else {
					$scope.answer_avail = true;
					$scope.totalans = response.length;
				}


			})
		$http.get("http://api.hauduai.com.ng/count_answeres_studentapp?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.doSubmit = function () {
			var answertyped = $scope.answertyped;
			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
			}
			else {

				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/writeans_studentapp?ans=" + answertyped + "&uid=" + uid + "&email=" + email + "&uname=" + uname + "&qid=" + a + "&type=" + type)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});
						$scope.answertyped = "";
						window.location.href = '#/app/student_new';
					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Registered Already.'
						});
						$scope.answertyped = "";
					});

			}
		}



	})



	.controller('ProvideAnsCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;
		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		//$scope.answer_notavail=false;
		//$scope.answer_avail=false;
		var iid = localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/get_questionnn?id=" + a + "&uid=" + iid)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.get_questionnn_expert = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.expanswer = response.setting_value;
				var b = $scope.expanswer.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);



			})
		/* $http.get("http://api.hauduai.com.ng/answeress?id="+a)
		.success(function(response){
			  

			 if(response==""){
				 $scope.totalans=0;
			 }else{
				 $scope.answer_avail=true;
				$scope.totalans=response.length;
			 }
			
				
		}) */
		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.dooSubmit = function () {
			var answerty = $scope.answerty;
			var username = localStorage.getItem('loggedin');
			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');
			/* if(typeof(answertyped)==undefined){
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
					});
					$scope.answertyped="";
			}  */


			//	throw new Error("Something went badly wrong!");

			if (typeof (answerty) == undefined) {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.answerty = "";

			}
			else {
				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/writeans_expp?ans=" + answerty + "&uid=" + userid + "&qid=" + a + "&email=" + emaill + "&uname=" + username + "&utype=" + type)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});


						$scope.answerty = "";
						window.location.reload(true);

					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.answerty = "";
					});
			}
		}



	})
	///////**********From comm Answer***************************///
	.controller('ProvidecommunAnsCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {
		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;

		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		//$scope.answer_notavail=false;
		//$scope.answer_avail=false;
		var iid = localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/get_questionnn?id=" + a + "&uid=" + iid)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.get_questionnn = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.commanswers = response.setting_value;
				var b = $scope.commanswers.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);



			})
		/* $http.get("http://api.hauduai.com.ng/answeress?id="+a)
		.success(function(response){
			  

			 if(response==""){
				 $scope.totalans=0;
			 }else{
				 $scope.answer_avail=true;
				$scope.totalans=response.length;
			 }
			
				
		}) */
		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.Submittcomm = function () {
			var anstyped = $scope.anstyped;

			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (anstyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.anstyped = "";
			}
			/* else if(typeof(anstyped)==undefined){
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
					});
					$scope.anstyped="";
			} */
			else {

				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/writeans_expp?ans=" + anstyped + "&uid=" + uid + "&qid=" + a + "&email=" + email + "&uname=" + uname + "&utype=" + type)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});
						$scope.anstyped = "";
						window.location.reload(true);



					})
					.error(function () {

						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.anstyped = "";
					});
			}
		}



	})
	.controller('faqCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup, $timeout) {


		$timeout(function () {

			$http.get("http://api.hauduai.com.ng/faq_page/")
				.success(function (response) {

					$scope.faqpage = response;
				})
		}, 2000);

	})

	.controller('stu_faqCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup, $timeout) {


		$timeout(function () {

			$http.get("http://api.hauduai.com.ng/stu_faq_page/")
				.success(function (response) {

					$scope.faqpage = response;
				})
		}, 2000);

	})


	.controller('stu_earnpCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup, $timeout) {


		$timeout(function () {

			$http.get("http://api.hauduai.com.ng/how_earn_points/")
				.success(function (response) {

					$scope.faqpage = response;
				})
		}, 2000);

	})

	.controller('anserCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {


		var a = $stateParams.id;
		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$http.get("http://api.hauduai.com.ng/answeres?id=" + a)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.questionans = response.setting_value;
				var b = $scope.questionans.split("<p>")[1];
				var a = b.split("</p>")[0];

				$scope.qu = parseInt(a);

			})
		$http.get("http://api.hauduai.com.ng/answeress?id=" + a)
			.success(function (response) {


				if (response == "") {
					$scope.totalans = 0;
				} else {
					$scope.answer_avail = true;
					$scope.totalans = response.length;
				}


			})
		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

				$scope.count_answeres = response.length;

			})

		$scope.doSubmit = function () {
			var answertyped = $scope.answertyped;

			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
			}
			else {
				$http.get("http://api.hauduai.com.ng/writeans?ans=" + answertyped + "&uid=" + uid + "&email=" + email + "&uname=" + uname + "&qid=" + a)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit'
						});
						$scope.answertyped = "";


						window.location.href = '#/app/mostresponse';


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.answertyped = "";

					});

			}
		}


	})

	.controller('stu_anserCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		var a = $stateParams.id;
		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.que = response;

			})


		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.questionans = response.setting_value;
				var b = $scope.questionans.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);


			})
		$http.get("http://api.hauduai.com.ng/answeress?id=" + a)
			.success(function (response) {


				if (response == "") {
					$scope.totalans = 0;
				} else {
					$scope.answer_avail = true;
					$scope.totalans = response.length;
				}


			})
		$http.get("http://api.hauduai.com.ng/count_answeres_studentapp?id=" + a)

			.success(function (response) {

				$scope.count_answeres = response.length;


			})

		$scope.doSubmit = function () {
			var answertyped = $scope.answertyped;

			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (answertyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
			}
			else {
				$http.get("http://api.hauduai.com.ng/writeans_studentapp?ans=" + answertyped + "&uid=" + uid + "&email=" + email + "&uname=" + uname + "&qid=" + a)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit'
						});
						$scope.answertyped = "";


						window.location.href = '#/app/stu_mostresponse';


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.answertyped = "";

					});
			}
		}

	})


	//***********MOST RESPONSE*********************//
	.controller('mostrespCtrl', function ($scope, $ionicHistory, $http, $stateParams, $ionicPopup) {

		$scope.openmostFB = function (id) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng/single_question/' + id + '/community&t=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};
		$scope.openmosttweet = function (id) {
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};
		$scope.openmostlinked = function (id) {
			window.open('http://www.linkedin.com/shareArticle?url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};

		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.listquee = [];
		$scope.offst = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.offst.length > 0) {
				var v = parseInt($scope.offst) + 1;


			} else {
				var v = 1;

			}
			$http.get("http://api.hauduai.com.ng/MostAnswer?offset=" + v)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {

						$scope.answer_avail = true;
						$scope.offst = response.offset;

						angular.forEach(response, function (child) {
							$scope.listquee.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');

				});
		};
	})

	//---------student mostresponse ctrl-------------////
	.controller('stu_mostrespCtrl', function ($scope, $ionicHistory, $http, $stateParams, $ionicPopup) {
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.listquee = [];
		$scope.ofst = [];
		$scope.noMoreItemsAvailable = true;

		$scope.myfacebook = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=facebook")
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng'); return false;

		}
		$scope.mytweet = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=twitter")
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng'); return false;

		}
		$scope.mylinked = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=linkedin")
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng'); return false;

		}

		$scope.loadolder = function () {

			var params = {};
			if ($scope.ofst.length > 0) {
				var vallue = parseInt($scope.ofst) + 1;

			} else {
				var vallue = 1;

			}
			$http.get("http://api.hauduai.com.ng/MostAnswer_studentapp?offset=" + vallue)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {

						$scope.answer_avail = true;
						$scope.ofst = response.offset;
						angular.forEach(response, function (child) {
							$scope.listquee.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,
								facebook_share: child.facebook_share,
								linkedin_share: child.linkedin_share,
								twitter_share: child.twitter_share,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');
				});
		};
	})


	.controller('noansCtrl', function ($scope, $ionicHistory, $http, $timeout, $stateParams, $ionicPopup) {

		$scope.opennoFB = function (id) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng/single_question/' + id + '/community&t=Hauduai'); return false;
		};
		$scope.opennotwee = function (id) {
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};
		$scope.opennolinked = function (id) {
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=Hauduai'); return false;
		};

		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.listtquee = [];
		$scope.ofsettt = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.ofsettt.length > 0) {
				var valllue = parseInt($scope.ofsettt) + 1;

			} else {
				var valllue = 1;
			}
			$http.get("http://api.hauduai.com.ng/noAnswer?offset=" + valllue)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});
					} else {

						$scope.answer_avail = true;
						$scope.ofsettt = response.offset;

						angular.forEach(response, function (child) {
							$scope.listtquee.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								user_id: child.user_id,
								question: child.question,
								user_image: child.user_image,
								id: child.q_id,
							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});



		};
	
	})

	.controller('stu_noansCtrl', function ($scope, $ionicHistory, $http, $timeout, $stateParams, $ionicPopup) {
		/* $timeout(function () {
		var valllue=0;  */
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.listtquee = [];
		$scope.ofsett = [];
		$scope.noMoreItemsAvailable = true;

		$scope.myfacebook = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=facebook")
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng'); return false;

		}
		$scope.mytweet = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=twitter")
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng'); return false;

		}
		$scope.mylinked = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=linkedin")
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng'); return false;

		}

		$scope.loadolder = function () {

			var params = {};
			if ($scope.ofsett.length > 0) {
				var valllue = parseInt($scope.ofsett) + 1;

			} else {
				var valllue = 1;
			}
			$http.get("http://api.hauduai.com.ng/noAnswer_studentapp?offset=" + valllue)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More questions.',
							template: 'No Answer.'
						});
					} else {

						$scope.answer_avail = true;
						$scope.ofsett = response.offset;

						angular.forEach(response, function (child) {
							$scope.listtquee.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,
								facebook_share: child.facebook_share,
								linkedin_share: child.linkedin_share,
								twitter_share: child.twitter_share,
							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});



		};

	})


	.controller('recentansCtrl', function ($scope, $ionicHistory, $http, $ionicPopup, $stateParams) {

		$scope.openrecentFB = function (id) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng/single_question/' + id + '/community&t=Hauduai'); return false;
		};
		$scope.openrecenttwee = function (id) {
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=http://www.hauduai.com.ng/single_question/' + id + '/community'); return false;
		};
		$scope.openrecentlinked = function (id) {
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng/single_question/' + id + '/community&t=Hauduai'); return false;
		};

		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.answerquee = [];
		$scope.ofst = [];
		$scope.noMoreItemsAvailable = true;
		$scope.loadolder = function () {

			var params = {};
			if ($scope.ofst.length > 0) {
				var vvalue = parseInt($scope.ofst) + 1;

			} else {
				var vvalue = 1;
			}

			$http.get("http://api.hauduai.com.ng/RecentAnswered?offset=" + vvalue)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {

						$scope.answer_avail = true;
						$scope.ofst = response.offset;

						angular.forEach(response, function (child) {
							$scope.answerquee.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,

							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});



		};
		/* for(var i=0;i<=response.length-1;i++){
				//console.log(response[i]);
		}
	  
	  $scope.listque=response;
		
			
	}) */


	})

	.controller('stu_recentansCtrl', function ($scope, $ionicHistory, $http, $ionicPopup, $stateParams) {
		$scope.id = $stateParams.id;
		$scope.answer_notavail = false;
		$scope.answer_avail = false;
		$scope.answerquee = [];
		$scope.offset = [];
		$scope.noMoreItemsAvailable = true;

		$scope.myfacebook = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=facebook")
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.hauduai.com.ng'); return false;
		}
		$scope.mytweet = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=twitter")
			window.open('https://twitter.com/intent/tweet?url=http://www.hauduai.com.ng'); return false;

		}
		$scope.mylinked = function (id) {

			$http.get("http://api.hauduai.com.ng/stu_post_share?ans_id=" + id + "&type=linkedin")
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.hauduai.com.ng'); return false;

		}

		$scope.loadolder = function () {

			var params = {};
			if ($scope.offset.length > 0) {
				var value = parseInt($scope.offset) + 1;

			} else {
				var value = 1;
			}

			$http.get("http://api.hauduai.com.ng/RecentAnswered_studentapp?offset=" + value)
				.success(function (response) {
					if (response.status == "Failed") {
						$scope.answer_notavail = true;

						$scope.noMoreItemsAvailable = false;
						var alertPopup = $ionicPopup.alert({
							title: 'No More Answers.',
							template: 'No Answer.'
						});

					} else {
						$scope.answer_avail = true;
						$scope.offset = response.offset;
						angular.forEach(response, function (child) {

							$scope.answerquee.push({
								created: child.created,
								user_name: child.user_name,
								views: child.views,
								id: child.id,
								question: child.question,
								user_image: child.user_image,
								facebook_share: child.facebook_share,
								linkedin_share: child.linkedin_share,
								twitter_share: child.twitter_share,
							});

						})
					}
					$scope.$broadcast('scroll.infiniteScrollComplete');


				});



		};
		/* for(var i=0;i<=response.length-1;i++){
				//console.log(response[i]);
		}
	  
	  $scope.listque=response;
		
			
	}) */


	})


	.controller('starCtrl', function ($scope, $http) {
		$scope.mystar = function (qid, rate) {
			var email = localStorage.getItem("useremail");

			var userid = localStorage.getItem("userid");

			//var rate=localStorage.getItem("rate");
			$http.get("http://api.hauduai.com.ng/rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=community")
				.success(function (response) {
					if (response.status == 'Failed') {

						alert("You have already submitted ratings for this answer.");
						window.location.reload(true);

					}
					else {

						var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
						if (r == true) {

							$http.get("http://api.hauduai.com.ng/rate?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=community")
								.success(function (response) {
									if (response.status == 'Failed') {

										alert("You have already submitted ratings for this answer.");
										window.location.reload(true);
									}
									else {
										alert("You have submitted ratings Successfully.");
										window.location.reload(true);
									}

								})
						}
						else {
							window.location.reload(true);
						}

					}
					console.log(response);
				})
		}

	})

	.controller('stu_starCtrl', function ($scope, $http) {
		$scope.mystar = function (qid, rate) {
			var email = localStorage.getItem("useremail");

			var userid = localStorage.getItem("userid");

			//var rate=localStorage.getItem("rate");
			$http.get("http://api.hauduai.com.ng/stu_rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=student")
				.success(function (response) {
					if (response.status == 'Failed') {

						alert("You have already submitted ratings for this answer.");
						window.location.reload(true);

					}
					else {

						var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
						if (r == true) {

							$http.get("http://api.hauduai.com.ng/stu_rate?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=student")
								.success(function (response) {
									if (response.status == 'Failed') {

										alert("You have already submitted ratings for this answer.");
										window.location.reload(true);
									}
									else {
										alert("You have submitted ratings Successfully.");
										window.location.reload(true);
									}

								})
						}
						else {
							window.location.reload(true);
						}

					}
					console.log(response);
				})
		}

	})

	.controller('expCtrl', function ($scope, $http) {
		$scope.mystar = function (qid, rate) {

			var email = localStorage.getItem("useremail");

			var userid = localStorage.getItem("userid");
			//var rate=localStorage.getItem("rate");
			var exp = localStorage.getItem("expans");


			$http.get("http://api.hauduai.com.ng/rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=specialist")
				.success(function (response) {
					if (response.status == 'Failed') {

						alert("You have already submitted ratings for this answer.");
						window.location.reload(true);

					}
					else {

						var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
						if (r == true) {

							$http.get("http://api.hauduai.com.ng/rate?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=specialist")
								.success(function (response) {

									if (response.status == 'Failed') {

										alert("You have already submitted ratings for this answer.");
										window.location.reload(true);
									}
									else {
										alert("You have submitted ratings Successfully.");
										window.location.reload(true);
									}

								})
						}
						else {
							window.location.reload(true);
						}

					}
					console.log(response);
				})
		}

	})

	.controller('stu_lecCtrl', function ($scope, $http) {
		$scope.mystar = function (qid, rate) {

			var email = localStorage.getItem("useremail");

			var userid = localStorage.getItem("userid");
			//var rate=localStorage.getItem("rate");
			var exp = localStorage.getItem("expans");

			$http.get("http://api.hauduai.com.ng/stu_rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=lecturer")
				.success(function (response) {
					if (response.status == 'Failed') {

						alert("You have already submitted ratings for this answer.");
						window.location.reload(true);

					}
					else {

						var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
						if (r == true) {

							$http.get("http://api.hauduai.com.ng/stu_rate?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=lecturer")
								.success(function (response) {
									if (response.status == 'Failed') {

										alert("You have already submitted ratings for this answer.");
										window.location.reload(true);
									}
									else {
										alert("You have submitted ratings Successfully.");
										window.location.reload(true);
									}

								})
						}
						else {
							window.location.reload(true);
						}

					}
					console.log(response);
				})
		}

	})

	.controller('MostResCtrl', function ($scope, $http) {
		$scope.mystar = function (qid, uid, rate) {

			var email = localStorage.getItem("useremail");

			var userid = localStorage.getItem("userid");
			//var rate=localStorage.getItem("rate");
			var exp = localStorage.getItem("expans");
			if (userid == uid) {


				$http.get("http://api.hauduai.com.ng/rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=community")
					.success(function (response) {
						if (response.status == 'Failed') {

							alert("You can not rate this");
							window.location.reload(true);

						}
						else {

							var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
							if (r == true) {

								$http.get("http://api.hauduai.com.ng/rate?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=community")
									.success(function (response) {
										if (response.status == 'Failed') {

											alert("You have already submitted ratings for this answer.");
											window.location.reload(true);
										}
										else {
											alert("You have submitted ratings Successfully.");
											window.location.reload(true);
										}

									})
							}
							else {
								window.location.reload(true);
							}

						}


						console.log(response);
					})
			}
			else {
				alert("You can not rate this");
				window.location.reload(true);

			}
		}

	})

	.controller('stu_MostResCtrl', function ($scope, $http) {
		$scope.mystar = function (qid, uid, rate) {

			var email = localStorage.getItem("useremail");
			var loggedin = localStorage.getItem("loggedin");
			var userid = localStorage.getItem("userid");
			//var rate=localStorage.getItem("rate");
			var exp = localStorage.getItem("expans");

			if (loggedin == uid) {


				$http.get("http://api.hauduai.com.ng/stu_rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=student")
					.success(function (response) {
						if (response.status == 'Failed') {

							alert("You can not rate this");
							window.location.reload(true);

						}
						else {

							var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
							if (r == true) {

								$http.get("http://api.hauduai.com.ng/stu_rate?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=student")
									.success(function (response) {
										if (response.status == 'Failed') {

											alert("You have already submitted ratings for this answer.");
											window.location.reload(true);
										}
										else {
											alert("You have submitted ratings Successfully.");
											window.location.reload(true);
										}

									})
							}
							else {
								window.location.reload(true);
							}

						}


						console.log(response);
					})
			}
			else {
				alert("You can not rate this");
				window.location.reload(true);

			}
		}

	})

	.controller('MyCtrl', function ($scope, $http, $stateParams) {

		$scope.mystar = function (qid, rate) {

			var email = localStorage.getItem("useremail");
			var gtype = localStorage.getItem("usr_type");

			var userid = localStorage.getItem("userid");

			alert("You can not rate this!!");
			window.location.reload(true);
			//var rate = localStorage.getItem("rate");
			/*$http.get("http://api.hauduai.com.ng/rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=" + type)
				.success(function (response) {
					alert(response);
					if (response.status == 'Failed') {

						alert("You have already submitted ratings for this answer.");
						window.location.reload(true);

					}
					else {

						var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
						if (r == true) {
							$http.get("http://api.hauduai.com.ng/rate?answer_id=" + qid + "&user_id=" + userid + "&user_email=" + email + "&rate=" + rate + "&type=" + type)
								.success(function (response) {
									if (response.status == 'Failed') {

										alert("You have already submitted ratings for this answer.");
										window.location.reload(true);
									}
									else {
										alert("You have submitted ratings Successfully.");
										window.location.reload(true);
									}

								})
						}
						else {
							window.location.reload(true);
						}

					}
					console.log(response);
				})*/
		}

	})

	.controller('stuCtrl', function ($scope, $http, $stateParams) {

		$scope.mystar = function (qid, rate) {

			var email = localStorage.getItem("useremail");
			var gtype = localStorage.getItem("usr_type");

			var userid = localStorage.getItem("userid");

			alert("You can not rate this!!");
			window.location.reload(true);
			//var rate = localStorage.getItem("rate");
			/*$http.get("http://api.hauduai.com.ng/rate_check?answer_id=" + qid + "&user_id=" + userid + "&email_id=" + email + "&rate=" + rate + "&type=" + type)
				.success(function (response) {
					alert(response);
					if (response.status == 'Failed') {

						alert("You have already submitted ratings for this answer.");
						window.location.reload(true);

					}
					else {

						var r = confirm("You have rated this answer " + rate + " stars, please confirm by clicking OK or CANCEL to do another rating");
						if (r == true) {
							$http.get("http://api.hauduai.com.ng/rate?answer_id=" + qid + "&user_id=" + userid + "&user_email=" + email + "&rate=" + rate + "&type=" + type)
								.success(function (response) {
									if (response.status == 'Failed') {

										alert("You have already submitted ratings for this answer.");
										window.location.reload(true);
									}
									else {
										alert("You have submitted ratings Successfully.");
										window.location.reload(true);
									}

								})
						}
						else {
							window.location.reload(true);
						}

					}
					console.log(response);
				})*/
		}

	})

	.controller('rateCtrl', function ($scope, $http, $ionicHistory, $state) {

		var id = localStorage.getItem("userid");

		$http.get("http://api.hauduai.com.ng/user_rating?user_id=" + id)
			.success(function (response) {

				$scope.uid = localStorage.getItem("userid");

				$scope.prof = response;

			})


	})

	.controller('stu_rateCtrl', function ($scope, $http, $ionicHistory, $state) {

		var id = localStorage.getItem("userid");

		$http.get("http://api.hauduai.com.ng/stu_user_rating?user_id=" + id)
			.success(function (response) {

				$scope.uid = localStorage.getItem("userid");

				$scope.prof = response;


			})


	})

	.controller('lectregisterCtrl', function ($scope, $stateParams, $http, $ionicLoading, $timeout, $location, $ionicPopup, $window) {

		/*  For lecture qualification */

		$scope.show = true;
		$scope.hideme = false;

		$scope.change_input = function () {
			if ($scope.show == true) {

				$scope.hideme = true;
				$scope.show = false;

			}
			else if ($scope.show == false) {
				$scope.show = true;
				$scope.hideme = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/qualification")
			.success(function (response) {
				$scope.qualification = response;

			})

		$http.get("http://api.hauduai.com.ng/appellation")
			.success(function (response) {
				$scope.appellation = response;
			})

		/*  Lecturer Add Name university*/

		$scope.Show = true;
		$scope.Hideme = false;

		$scope.Change_Input = function () {
			if ($scope.Show == true) {

				$scope.Hideme = true;
				$scope.Show = false;

			}
			else if ($scope.Show == false) {
				$scope.Show = true;
				$scope.Hideme = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/university")
			.success(function (response) {
				$scope.Name_uni = response;

			})

		/*  Lecturer Add Faculty*/

		$scope.SHow = true;
		$scope.HIdeme = false;
		//$scope.change_input=true;

		$scope.CHange_INput = function () {
			if ($scope.SHow == true) {

				$scope.HIdeme = true;
				$scope.SHow = false;

			}
			else if ($scope.SHow == false) {
				$scope.SHow = true;
				$scope.HIdeme = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/faculty")
			.success(function (response) {
				$scope.faculty = response;

			})

		$scope.getsubsector = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {

				$http.get("http://api.hauduai.com.ng/course?faculty=" + $scope.spe_faculty)
					.success(function (response) {
						$scope.department = response;

						$ionicLoading.hide();

					})

			}, 2000);
		}

		/*  Lecturer Add Department*/

		$scope.SHOw = true;
		$scope.HIDeme = false;
		//$scope.change_input=true;

		$scope.CHAnge_INPut = function () {
			if ($scope.SHOw == true) {

				$scope.HIDeme = true;
				$scope.SHOw = false;

			}
			else if ($scope.SHOw == false) {
				$scope.SHOw = true;
				$scope.HIDeme = false;
			}

		}

		$scope.getsubspe_area2 = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {

				$http.get("http://api.hauduai.com.ng/lecturar_specialization?course=" + $scope.lec_Dep)
					.success(function (response) {
						if (response[0] != undefined) {
							$scope.specaliztion = response;

						}
						$ionicLoading.hide();

					})

			}, 2000);
		}


		/*  Lecturer Add Specialization*/

		$scope.SHOW = true;
		$scope.HIDEme = false;
		//$scope.change_input=true;

		$scope.CHANge_INPUt = function () {
			if ($scope.SHOW == true) {

				$scope.HIDEme = true;
				$scope.SHOW = false;

			}
			else if ($scope.SHOW == false) {
				$scope.SHOW = true;
				$scope.HIDEme = false;
			}

		}



		$http.get("http://api.hauduai.com.ng/profession_affi")
			.success(function (response) {
				$scope.phoneNo = response;

			})


		$http.get("http://api.hauduai.com.ng/know_about_hauduai")
			.success(function (response) {
				$scope.know_about_hauduai = response;
			})
		//localStorage.setItem("qulsufx",response.qulaity);
		//localStorage.setItem("emplst",response.emp_status);

		$scope.doSubmittt = function () {
			//if($scope.cpassword==$scope.password){
			var cpass = $scope.cpassword;
			var eror = false;
			var eeroorr = true;
			var fname = $scope.fname;
			if (fname == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the First Name.',
					template: 'Fill First Name.'
				});
			}


			var lname = $scope.lname;
			if (lname == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Last Name.',
					template: 'Fill Last Name.'
				});
			}
			var fullname = fname + " " + lname;

			var qulaity = $scope.qulaity;

			if (qulaity == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Qualification.',
					template: 'Select Qualification.'
				});
			}

			var lec_appell = $scope.lec_appell;

			if (lec_appell == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Appellation.',
					template: 'Select Appellation.'
				});
			}

			var lec_uni = $scope.lec_area;

			if (lec_uni == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select University.',
					template: 'Select University'
				});
			}

			var lec_fac = $scope.spe_faculty;
			if (lec_fac == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Faculty.',
					template: 'Select Faculty'
				});
			}

			var lec_departmnt = $scope.lec_Dep;
			if (lec_departmnt == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Department.',
					template: 'Select Department'
				});
			}

			var lec_spec = $scope.lec_special;
			if (lec_spec == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Specialization.',
					template: 'Select Specialization'
				});
			}

			var lec_num = $scope.phone_no;
			if (lec_num == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Phone Number.',
					template: 'Select Phone Number'
				});
			}

			var email = $scope.email;
			if (email == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Email-ID.',
					template: 'Fill Email.'
				});
			}
			var pass = $scope.password;
			if (pass == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Password.',
					template: 'Fill Password.'
				});
			}

			var pass = $scope.password;
			if (!(pass == cpass)) {
				eeroorr = false;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Check the Password.',
					template: 'Check Password.'
				});
			}
			var gettoknow = $scope.gettoknow;
			if (gettoknow == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the How did You Know about Hauduai?',
					template: 'How did You Know about Hauduai?'
				});
			}
			var chk = $scope.filter;
			if (chk == undefined) {
				eror = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please accept the terms and conditions.',
					template: 'Select Terms and Conditions'
				});
			}

			if (eror == false && (eeroorr == true || eeroorr == true)) {
				//var type = "specialist";
				$http.get("http://api.hauduai.com.ng/student_signup?type=lecturer&first_name=" + fname + "&last_name=" + lname + "&qualified=" + qulaity + "&appellation=" + lec_appell + "&stu_university=" + lec_uni + "&stu_faculty=" + lec_fac + "&stu_course=" + lec_departmnt + "&lecSpec=" + lec_spec + "&stu_phone=" + lec_num + "&email=" + email + "&password=" + pass + "&know_hauduai=" + gettoknow)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'You Have Successfully Signed Up on Hauduai, Please Check Your Email to Activate your Account and Login on the App after Activation.',
							template: 'Successfully Signup'				                                                  
						})
						location.href= "#/app/stu_register";
						$scope.fname = "";
						$scope.lname = "";
						$scope.qulaity = "";
						$scope.lec_appell = "";
						$scope.lec_uni = "";
						$scope.lec_fac = "";
						$scope.lec_departmnt = "";
						$scope.lec_spec = "";
						$scope.lec_num = "";
						$scope.email = "";
						$scope.pass = "";
						$scope.gettoknow = "";
						$scope.filter = "";
					})
					
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'Already Signed Up',
							template: 'Failed.'
						});
					})

			}

		}



	})

	.controller('studentregCtrl', function ($scope, $stateParams, $ionicModal, $http, $ionicLoading, $timeout, $location, $ionicPopup, $window) {


		var month = ["January", "February", "March", "April", "May", "June", "July",
			"August", "September", "October", "November", "December"];
		$scope.playlists = month;

		var day = [];
		for (var i = 1; i <= 31; i++) {
			day.push(i);
		}
		$scope.monthday = day;

		var yyy = [];
		var year = 1950;
		var till = 2016;

		for (var y = year; y <= till; y++) {
			yyy.push(y);
		}
		$scope.yearmn = yyy;



		$http.get("http://api.hauduai.com.ng/course_duration")
			.success(function (response) {
				$scope.suffix = response;

			})

		$http.get("http://api.hauduai.com.ng/academic_year")
			.success(function (response) {
				$scope.employment_status = response;
			})




		$scope.shownto = true;
		$scope.hidet = false;
		//$scope.change_input=true;

		$scope.change_input = function () {

			if ($scope.shownto == true) {

				$scope.hidet = true;
				$scope.shownto = false;
			}
			else if ($scope.shownto == false) {
				$scope.shownto = true;
				$scope.hidet = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/university")
			.success(function (response) {
				$scope.N_university = response;

			})


		/* Add Student faculty  */

		$scope.SHOWNto = true;
		$scope.HIDET = false;
		//$scope.change_input=true;

		$scope.CHANGE_input = function () {
			if ($scope.SHOWNto == true) {

				$scope.HIDET = true;
				$scope.SHOWNto = false;
			}
			else if ($scope.SHOWNto == false) {
				$scope.SHOWNto = true;
				$scope.HIDET = false;
			}

		}

		$http.get("http://api.hauduai.com.ng/faculty")
			.success(function (response) {
				$scope.Faculty = response;

			})


		$scope.getsubsubsector = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {

				$http.get("http://api.hauduai.com.ng/course?faculty=" + $scope.stu_faculty)
					.success(function (response) {
						$scope.course = response;
						$ionicLoading.hide();

					})

			}, 2000);
		}


		$scope.ShownTO = true;
		$scope.Hidet = false;
		//$scope.change_input=true;

		$scope.CHANGE_INPUT = function () {
			if ($scope.ShownTO == true) {

				$scope.Hidet = true;
				$scope.ShownTO = false;
			}
			else if ($scope.ShownTO == false) {
				$scope.ShownTO = true;
				$scope.Hidet = false;
			}

		}


		$scope.getsubyearlevel = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,

			});

			$timeout(function () {

				$http.get("http://api.hauduai.com.ng/year?course=" + $scope.stu_course)
					.success(function (response) {
						$scope.year_level = response;
						$ionicLoading.hide();

					})

			}, 2000);
		}


		$http.get("http://api.hauduai.com.ng/know_about_hauduai")
			.success(function (response) {
				$scope.know_about_hauduai = response;
			})

		$scope.Submit = function () {

			//($scope.cpassword==$scope.password)
			var error = false;
			var erroorr = true;
			var cpass = $scope.cpassword;
			var fname = $scope.fname;
			if (fname == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the First Name.',
					template: 'Fill First Name.'
				});
			}

			var lname = $scope.lname;
			if (lname == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Last Name.',
					template: 'Fill Last Name.'
				});
			}

			var fullname = fname + " " + lname;

			var qualified = $scope.qualified;
			if (qualified == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Course Duration.',
					template: 'Select Course Duration.'
				});
			}
			var emp_status = $scope.emp_status;
			if (emp_status == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Academic year.',
					template: 'Select Academic year.'
				});
			}

			var university = $scope.stu_uni;
			if (university == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the University.',
					template: 'Select University.'
				});
			}
			var faculty = $scope.stu_faculty;
			if (faculty == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Faculty.',
					template: 'Select Faculty.'
				});
			}
			var course = $scope.stu_course;
			if (course == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Course.',
					template: 'Select Course.'
				});
			}
			var sub_ylevel = $scope.stu_ylevel;
			if (sub_ylevel == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Year Level.',
					template: 'Select Year Level.'
				});
			}

			var stu_phno = $scope.phone_no;
			if (stu_phno == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Phone Number.',
					template: 'Select Phone Number.'
				});
			}



			var stu_mon = $scope.birthmonth;
			var stu_day = $scope.daybirth;
			var stu_year = $scope.b_year;

			if (stu_mon == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Month.',
					template: 'Select Month.'
				});
			}
			else if (stu_day == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Day.',
					template: 'Select Day.'
				});
			}
			else if (stu_year == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Year.',
					template: 'Select Year.'
				});
			}
			var stu_birth_date = stu_mon + '/' + stu_day + '/' + stu_year;
			if (stu_birth_date == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Date of Birth.',
					template: 'Select Date of Birth.'
				});
			}

			var email = $scope.email;
			if (email == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Email ID.',
					template: 'Fill Emaild-id.'
				});
			}
			var pass = $scope.password;
			if (pass == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Fill the Password.',
					template: 'Fill Password.'
				});
			}

			var cpass = $scope.cpassword;
			if (!(pass == cpass)) {
				erroorr = false;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Enter the Correct Password.',
					template: 'Check Password.'
				});
				$scope.password = "";
				$scope.cpassword = "";
			}

			var gettoknow = $scope.gettoknow;
			if (gettoknow == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select How did You Know about Hauduai?',
					template: 'How did You Know about Hauduai?'
				});
			}
			var chk = $scope.filter;
			if (chk == undefined) {
				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please Accept the terms and Conditions.',
					template: 'Accept terms and Conditions.'
				});
			}

			if (error == false && (erroorr == true || erroorr == true)) {


				$http.get("http://api.hauduai.com.ng/student_signup?type=student&first_name=" + fname + "&last_name=" + lname + "&full_name=" + fullname + "&Suffix=" + qualified + "&employment_status=" + emp_status + "&stu_university=" + university + "&stu_faculty=" + faculty + "&stu_course=" + course + "&stu_ylevel=" + sub_ylevel + "&stu_phone=" + stu_phno + "&stu_birth=" + stu_birth_date + "&email=" + email + "&password=" + pass + "&know_hauduai=" + gettoknow)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'You have Successfully Signed Up on Hauduai, Please Check Your Email to Activate Your Account and Login on the App After Activation.',
							template: 'Successfully Signup'
						});
						
						location.href= "#/app/stu_register";
						$scope.fname = "";
						$scope.lname = "";
						$scope.qualified = "";
						$scope.emp_status = "";
						$scope.university = "";
						$scope.faculty = "";
						$scope.course = "";
						$scope.sub_ylevel = "";
						$scope.stu_phno = "";
						$scope.stu_birth_date = "";
						$scope.email = "";
						$scope.pass = "";
						$scope.cpass = "";
						$scope.gettoknow = "";


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Registered Already.',
							template: 'Registered Already.'
						});

					})
			}


		}


	})


	.controller('stuask_commCtrl', function ($scope, $ionicModal, $ionicHistory, $http, $location, $ionicPopup) {

		$http.get("http://api.hauduai.com.ng/faculty")
			.success(function (response) {
				$scope.faculty = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ques_limit?type=student")
			.success(function (response) {

				$scope.question = response.setting_value;
				var b = $scope.question.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);
			})



		$scope.changed = function () {
			var id = $scope.studentfac;

			$scope.stu_fac_show = true;
			$http.get("http://api.hauduai.com.ng/course?faculty=" + id)
				.success(function (response) {

					$scope.couurse = response;

				})
		}

		$scope.changged = function () {
			var id = $scope.stu_f_field;
			//$scope.stu_facu_show = true;
			$http.get("http://api.hauduai.com.ng/year?course=" + id)
				.success(function (response) {
					$scope.level_y = response;

				})
		}

		$scope.changedsector = function () {
			var id = $scope.stu_level_field;
			var usrid = localStorage.getItem("userid");
			$scope.stu_facu_show = true;
			$http.get("http://api.hauduai.com.ng/university")
				.success(function (response) {
					$scope.uni = response;
					$http.get("http://api.hauduai.com.ng/get_points?id=" + usrid)
						.success(function (response) {
							$scope.point_stu = response[0];


						})


				})
		}



		$scope.submitt_stucomm_que = function () {
			//$scope.modal.show();

			$scope.loginData.ques = $scope.que;

			var faculty = $scope.studentfac;
			var que = $scope.que;
			var course = $scope.stu_f_field;
			var yearlevel = $scope.stu_level_field;
			var university = $scope.sf;
			var allvalues = Array();

			//var check=true;
			$scope.loginData.stu_username = localStorage.getItem("loggedin");
			$scope.loginData.email = localStorage.getItem("useremail");
			$scope.email = localStorage.getItem("useremail");
			$scope.points = localStorage.getItem("points");


			if (typeof ($scope.studentfac) != "undefined") {
				var select = document.getElementById('facultyName');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.studentfac = selectedString;
				$scope.loginData.studentfacValue = $scope.studentfac;
			}
			/*if (typeof ($scope.points) != "undefined") {
				var select = document.getElementById('points');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.points = selectedString;
				$scope.loginData.pointsValue = $scope.points;
			}*/

			if (typeof ($scope.stu_f_field) != "undefined") {
				var select = document.getElementById('courseName');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.stu_f_field = selectedString;
				$scope.loginData.stu_f_fieldValue = $scope.stu_f_field;
			}
			if (typeof ($scope.stu_level_field) != "undefined") {
				var select = document.getElementById('yearName');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.stu_level_field = selectedString;
				$scope.loginData.stu_level_fieldValue = $scope.stu_level_field;
			}
			if (typeof ($scope.sf) != "undefined") {

				$scope.loginData.sfValue = $scope.sf;
			}

			if (typeof (que) == "undefined") {
				check = false;
				allvalues[0] = "que1";
			}

			if (typeof (faculty) == "undefined") {
				check = false;
				allvalues[1] = "que2";
			}

			if (typeof (course) == "undefined") {
				check = false;
				allvalues[2] = "que3";
			}

			if (typeof (yearlevel) == "undefined") {
				check = false;
				allvalues[3] = "que4";
			}


			if (typeof (allvalues[0]) !== "string") {


				if (typeof (allvalues[2]) == "undefined" && typeof (allvalues[3]) == "undefined") {
					$scope.modal.show();
					$scope.que = "";
					$scope.studentfac = "";
					$scope.stu_f_field = "";
					$scope.stu_level_field = "";
					$scope.sf = "";



				} else {
					var alertPopup = $ionicPopup.alert({
						title: 'Please Select Any Field.',
						template: ' Select Any Field.'
					});
				}

			}
			else {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Question.',
					template: ' Type Question.'
				});
				$scope.studentfac = "";

			}



			/*$scope.stu_comsubmitque = function () {
			   var user_id = localStorage.getItem("userid");
			   var error = false;
			   var chk = $scope.tac;
			   if (typeof (chk) == "undefined") {
				   error = true;
				   var alertPopup = $ionicPopup.alert({
					   title: 'Please select the  terms and conditions.',
					   template: 'Select terms and Conditions.'
				   });
			   }
			   if (error == false) {
			   	
				   $http.get("http://api.hauduai.com.ng/ask_question?user_id=" + user_id + "&question=" + $scope.loginData.ques + "&username=" + $scope.loginData.username + "&useremail=" + $scope.loginData.email + "&profession=" + $scope.loginData.professionfieldd + "&type= community" + "&sector=" + $scope.loginData.sectorfieldd + "&chk=" + $scope.tac)
					   .success(function (response) {
						   if (response.status == "success") {
							   $scope.modal.hide();
							   var alertPopup = $ionicPopup.alert({
								   title: 'Your Question Has Been Submitted.',
								   template: 'Answer Submit'
							   });
							   window.location.href = '#/app/ask_community';
							   $scope.que = "";
							   $scope.quali = "";
							   $scope.subprofession = "";
							   $scope.sectorfieldd = "";
							   $scope.sub_field = "";
							   $scope.sub_sector_field = ""
						   }
						   else {
							   var alertPopup = $ionicPopup.alert({
								   title: 'Your Question Has not Been Submitted.',
								   template: 'Question Not Submit.'
							   });
							   $scope.que = "";
							   $scope.quali = "";
							   $scope.subprofession = "";
							   $scope.sectorfieldd = "";
							   $scope.sub_field = "";
							   $scope.sub_sector_field = "";
						   }

					   });
			   }
		   }*/



		}


		$ionicModal.fromTemplateUrl('templates/stu_popupforcomque.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.closepop = function () {

			$scope.modal.hide();
			$scope.ss = "";
			$scope.sub_p_field = "";
			$scope.que = "";
			$scope.subprofession = "";
			$scope.sectorfieldd = "";
			$scope.sub_field = "";
			$scope.sub_sector_field = ""
		}

	})


	.controller('stu_termsandcondCtrl', function ($scope, $ionicHistory, $stateParams, $http, $ionicPopup) {

		$http.get("http://api.hauduai.com.ng/ask_points?type=student")
			.success(function (response) {

				$scope.askpoints = response;

			})

		$scope.stu_comsubmitque = function () {
			var user_id = localStorage.getItem("userid");
			var error = false;
			//var loginData.sectorfieldd=$scope.loginData.sectorfieldd;

			var chk = $scope.tac;

			//$scope.filter=false;

			/*if (typeof (chk) == "undefined") {

				error = true;
				var alertPopup = $ionicPopup.alert({
					title: 'Please select the  terms and conditions.',
					template: 'Select terms and Conditions.'
				});
			}*/

			if (error == false) {
				var status = localStorage.getItem("status");
				var utype = localStorage.getItem("usr_type");
				if (status == '0') {
					var alertPopup = $ionicPopup.alert({
						title: 'You can only receive or submit a question after approval by the administrator, please try again later',
						template: ' Question not Submitted.'
					});
				}
				else {
					$http.get("http://api.hauduai.com.ng/ask_student_question?user_id=" + user_id + "&question=" + $scope.loginData.ques + "&username=" + $scope.loginData.stu_username + "&email=" + $scope.loginData.email + "&faculty=" + $scope.loginData.studentfacValue + "&type=" + utype + "&course=" + $scope.loginData.stu_f_fieldValue + "&year=" + $scope.loginData.stu_level_fieldValue + "&university=" + $scope.loginData.sfValue)

						.success(function (response) {


							if (response.status == "success") {
								$scope.modal.hide();

								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has Been Submitted.',
									template: 'question Submit'
								});
								$scope.que = "";
								$scope.quali = "";
								//var que=$scope.que;
								$scope.subprofession = "";
								$scope.sectorfieldd = "";
								$scope.sub_field = "";
								$scope.sub_sector_field = ""
							}
							else if (response.status == "Failed") {
								var alertPopup = $ionicPopup.alert({
									title: 'You do not have enough points to ask this question. To earn points please read how to earn points under Point Balance in your App menu',
									template: 'question not Submit'
								});
							}
							else {
								var alertPopup = $ionicPopup.alert({
									title: 'Your question Has not Been Submitted.',
									template: 'question Not Submit.'
								});
								$scope.que = "";
								$scope.quali = "";
								//var que=$scope.que;
								$scope.subprofession = "";
								$scope.sectorfieldd = "";
								$scope.sub_field = "";
								$scope.sub_sector_field = "";

							}

						});
				}
			}
		}


	})

	//----------------------lecturer terms and condition popup-----------------//

	.controller('lec_termsandcondCtrl', function ($scope, $ionicHistory, $stateParams, $http, $ionicPopup, $timeout) {

		$http.get("http://api.hauduai.com.ng/ask_points?type=lecturer")
			.success(function (response) {

				$scope.ask_points = response;

			})

		$scope.lec_dosubmitqueez = function () {
			var user_id = localStorage.getItem("userid");
			var email = localStorage.getItem("useremail");
			var point = localStorage.getItem("points");
			var loginDataexp = $scope.loginData.exp;

			/*var myPopup = $ionicPopup.alert({
				title: 'Point Information',
    			template: '<p style="color:black;font-size:16px;">i. Current Point Balance: </p><p style="color:black;font-size:16px;">ii. Cost of This Question: </p><p style="color:black;font-size:16px;">iii. Balance after this Question is Submitted: </p>',
    
    });*/

			var checkkk = false;
			if (checkkk == false) {

				var type = localStorage.getItem("usr_type");

				var stats = localStorage.getItem("status");
				
				if (stats == '0') {
					var alertPopup = $ionicPopup.alert({

						title: 'You can only receive or submit a question after approval by the administrator, please try again later',
						template: ' Question not Submitted.'
					});

				}
				else {
					$http.get("http://api.hauduai.com.ng/ask_lecturer_question?user_id=" + user_id + "&que=" + $scope.loginData.ques + "&course=" + $scope.loginData.lecturer_deptValue + "&specialization=" + $scope.loginData.lecturer_specValue + "&username=" + $scope.loginData.stu_username + "&email=" + $scope.loginData.email + "&expert=" + loginDataexp + "&chkkk=" + $scope.termacond + "&type=" + type)

						.success(function (response) {

							if (response.status == "Success") {
								$scope.modal.hide();
								$scope.quali = "";
								$scope.que = "";


								$scope.sub_field = "";
								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has Been Submitted.',
									template: ' Question Submitted.'
								});

								//window.location.reload(true);
								window.location.href = '#/app/lecturer_ask';
								$scope.speci_profile = "";
								$scope.count = "";
								$scope.loginData.exp = "";
								$scope.sub_field = "";
								$scope.que = "";
								$scope.quali = "";

							}
							else if (response.status == "Failed") {

								$scope.sub_field = "";
								var alertPopup = $ionicPopup.alert({
									title: 'You do not have enough points to ask this question...Please visit how to earn points under your app menu',
									template: ' Question Not Submitted.'
								});

							}

							else {
								var alertPopup = $ionicPopup.alert({
									title: 'Your Question Has Not Been Submitted.',
									template: ' Question not Submitted.'
								});
								$scope.que = "";
								$scope.quali = "";
								$scope.loginData.exp = "";

							}
						});
				}
			}

		}
	})
	//-----------------------------Finish-----------------------//
	.controller('stu_ask_lectCtrl', function ($scope, $ionicModal, $ionicHistory, $http, $location, $ionicPopup) {
		$scope.hello = false;
		$scope.note = false;
		$scope.que = "";
		//$scope.quali="";
		//$scope.loginData.exp="";
		$http.get("http://api.hauduai.com.ng/faculty")
			.success(function (response) {
				$scope.lecfaculty = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ques_limit")
			.success(function (response) {

				$scope.question = response.setting_value;
				var b = $scope.question.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);


			})
		$scope.changed = function () {
			var id = $scope.lec_fac;

			$http.get("http://api.hauduai.com.ng/course?faculty=" + id)
				.success(function (response) {

					$scope.depart = response;
					$scope.note = true;
				})
		}

		$scope.changd = function () {
			var id = $scope.lec_dept;

			$http.get("http://api.hauduai.com.ng/lecturar_specialization?course=" + id)
				.success(function (response) {
					if (response[0] != undefined) {
						$scope.special = response;
					}


				})
		}


		$scope.lec_submitt = function () {

			//$scope.modal.show();
			$scope.loginData.ques = $scope.que;

			var lecfac = $scope.lec_fac;

			var que = $scope.que;
			var lecdepartmnt = $scope.lec_dept;

			var specialzation = $scope.lec_specal;

			$scope.loginData.stu_username = localStorage.getItem("loggedin");
			$scope.loginData.email = localStorage.getItem("useremail");


			$scope.email = localStorage.getItem("useremail");
			if (typeof ($scope.lec_fac) != "undefined") {


				var select = document.getElementById('facName');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.lecturer_fac = selectedString;
				$scope.loginData.lecturer_facValue = $scope.lec_fac;
			}
			if (typeof ($scope.lec_dept) != "undefined") {


				var select = document.getElementById('DeptName');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.lecturer_dept = selectedString;
				$scope.loginData.lecturer_deptValue = $scope.lec_dept;
			}

			if (typeof ($scope.lec_specal) != "undefined") {


				var select = document.getElementById('specName');
				var selectedString = select.options[select.selectedIndex].text;
				$scope.loginData.lecturer_spec = selectedString;
				$scope.loginData.lecturer_specValue = $scope.lec_specal;
			}


			if ($scope.lec_dept) {
				var user_id = localStorage.getItem("userid");
				$http.get("http://api.hauduai.com.ng/user_listby_fieldd_student?course=" + $scope.lec_dept + "&specialization=" + $scope.lec_specal + "&id=" + user_id)

					.success(function (response) {

						$scope.lecspecialist_user = response[0];

						$scope.leclength = response.length;
					})

			}

			/*if (typeof ($scope.que) == "undefined" || $scope.que == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Type the Question.',
					template: ' Type the Question.'
				});
				//alert("Please type the Question.");

			}*/

			if (typeof ($scope.que) == "undefined" || $scope.que == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Type the Question.',
					template: ' Type the Question.'
				});

			}
			else if (typeof ($scope.lec_fac) == "undefined" || $scope.lec_fac == "" && typeof ($scope.lec_dept) == "undefined" || $scope.lec_dept == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Any Field.',
					template: ' Select Any Field.'
				});
			}
			else if (typeof ($scope.lec_dept) == "undefined" || $scope.lec_dept == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select Any Field.',
					template: ' Select Any Field.'
				});
			}


			/* else
			{
				$scope.modal.show();
			} */
			/*else if (typeof ($scope.lec_fac) == "undefined" || $scope.lec_fac == "") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please Select the Subject Matter Field.',
					template: ' Subject Matter Field.'
				});

			}*/
			else {
				$scope.modal.show();
				$scope.que = "";
			}


			$scope.lec_dosubmitqueez = function () {
				var name = localStorage.getItem("loggedin");
				var user_id = localStorage.getItem("userid");

				var loginDataexp = $scope.loginData.exp;
				var checkkk = false;


				if (typeof (loginDataexp) == "undefined") {
					checkkk = true;

					var alertPopup = $ionicPopup.alert({
						title: 'Please Select the Expert.',
						template: ' Select the Expert',


					});
				}


				/*var chkkk = $scope.termacond;


				if (typeof (chkkk) == "undefined") {

					checkkk = true;
					var alertPopup = $ionicPopup.alert({
						title: 'Please Select the terms and conditions.',
						template: ' Terms and Conditions.'
					});
				}*/




				/*	if (checkkk == false) {
	
						var type = localStorage.getItem("type");
	
						$http.get("http://api.hauduai.com.ng/ask_lecturer_question?user_id=" + user_id + "&que=" + $scope.loginData.ques + "&course=" + $scope.loginData.lecturer_deptValue + "&specialization=" + $scope.loginData.lecturer_specValue +"&username=" + $scope.loginData.stu_username + "&email=" + $scope.loginData.email + "&expert=" + loginDataexp + "&chkkk=" + $scope.termacond + "&type=" + type)
	
							.success(function (response) {
								if (response.status == "Success") {
									$scope.modal.hide();
									$scope.quali = "";
									$scope.que = "";
	
	
									$scope.sub_field = "";
									var alertPopup = $ionicPopup.alert({
										title: 'Your Question Has Been Submitted.',
										template: ' Question Submitted.'
									});
	
								}
	
								else {
									var alertPopup = $ionicPopup.alert({
										title: 'Your Question Has Not Been Submitted.',
										template: ' Question not Submitted.'
									});
									$scope.que = "";
									$scope.quali = "";
									$scope.loginData.exp = "";
	
								}
							});
					}*/

			}



			/*$scope.get_speci_profile = function () {

				$http.get("http://api.hauduai.com.ng/get_spec_profile?id=" + $scope.loginData.exp + "&type=lecturer" )
					.success(function (response) {
						$scope.hello = true;
						$scope.speci_profile = response[0];
						$scope.speci_profilee = response[1];

					})
				$http.get("http://api.hauduai.com.ng/countt?id=" + $scope.loginData.exp + "&type=lecturer"  )
					.success(function (response) {


						if (response[0].c > 3) {
							$scope.count = "The chosen expert has 3 questions on his queue, if you are willing to wait your question will be submitted after he answers at least one of the questions or else choose another specialist";
						}
						else {
							$scope.count = response[0].c;
						}

					})


				/*$http.get("http://api.hauduai.com.ng/get_spec_info_to_show?id=" + $scope.loginData.exp)
					.success(function (response) {


						$scope.infoto = response[0];
					})
				$http.get("http://api.hauduai.com.ng/get_ratings?id=" + $scope.loginData.exp)
					.success(function (response) {
						$scope.hello = true;
						$scope.get_ratings = response;



						var userrating = parseFloat(response.ratings).toFixed(2);

						$scope.userrate = response.ratings;


					})
			}*/



		}
		$ionicModal.fromTemplateUrl('templates/lec_popupForque.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		$scope.closepop = function () {

			$scope.modal.hide();
			$scope.speci_profile = "";
			$scope.count = "";
			$scope.loginData.exp = "";
			$scope.sub_field = "";
			$scope.que = "";
			$scope.quali = "";

		}


	})


	.controller('stu_proCtrl', function ($scope, $http, $ionicHistory, $state) {

		var id = localStorage.getItem("userid");
		$scope.appstatus = localStorage.getItem('appstatus');
		$scope.user_type = localStorage.getItem('usr_type');

		$http.get("http://api.hauduai.com.ng/get_all_stuprofile?id=" + id)
			.success(function (response) {

				$scope.uid = localStorage.getItem("userid");

				$scope.prof = response;

			})


		$scope.edit = function () {
			$scope.suffi = 'value';

			window.location.href = '/#/app/profileedit';


		}

	})

	// for title controller----------/////


	.controller('titleCtrl', function ($scope, $http, $ionicHistory, $state) {

		var id = localStorage.getItem("userid");
		$scope.appstatus = localStorage.getItem('appstatus');
		$scope.user_type = localStorage.getItem('usr_type');
		

	})

	///////**********From comm Answer***************************///
	.controller('stuProvidecomAnsCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {
		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;

		//var que=$scope.que;
		$scope.aa = $stateParams.id;
		//$scope.answer_notavail=false;
		//$scope.answer_avail=false;
		var iid = localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/get_question_studentapp?id=" + a + "&uid=" + iid)
			.success(function (response) {

				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.get_qustionnn = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit")
			.success(function (response) {

				$scope.commanswers = response.setting_value;
				var b = $scope.commanswers.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);



			})
		/* $http.get("http://api.hauduai.com.ng/answeress?id="+a)
		.success(function(response){
			  

			 if(response==""){
				 $scope.totalans=0;
			 }else{
				 $scope.answer_avail=true;
				$scope.totalans=response.length;
			 }
			
				
		}) */
		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

			/* $scope.count_answer=response;
				 if(response=="0"){
					 $scope.count_answer="";
				 }else{
					 $scope.answer_avail=true;
			 */		$scope.count_answeres = response.length;



			})
		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.stu_Submittcomm = function () {
			var anstyped = $scope.anstyped;

			var uname = localStorage.getItem('loggedin');
			var uid = localStorage.getItem('userid');
			var email = localStorage.getItem('useremail');
			if (typeof (anstyped) == "undefined") {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.anstyped = "";
			}
			/* else if(typeof(anstyped)==undefined){
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
					});
					$scope.anstyped="";
			} */
			else {

				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/answer_stulct?ans=" + anstyped + "&uid=" + uid + "&qid=" + a + "&email=" + email + "&uname=" + uname + "&utype=" + type)
					.success(function (response) {
						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});
						$scope.anstyped = "";
						window.location.reload(true);



					})
					.error(function () {

						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.anstyped = "";
					});
			}
		}



	})

	.controller('lecProvideAnsCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		var a = $stateParams.id;

		$scope.aa = $stateParams.id;
		var iid = localStorage.getItem("userid");
		$http.get("http://api.hauduai.com.ng/get_question_studentapp?id=" + a + "&uid=" + iid)
			.success(function (response) {
				for (var i = 0; i <= response.length - 1; i++) {
				}

				$scope.get_questionnn_expert = response;

			})

		$http.get("http://api.hauduai.com.ng/count_ans_limit?type=student")
			.success(function (response) {

				$scope.expanswer = response.setting_value;
				var b = $scope.expanswer.split("<p>")[1];
				var a = b.split("</p>")[0];


				$scope.qu = parseInt(a);

			})

		$http.get("http://api.hauduai.com.ng/count_answeres?id=" + a)

			.success(function (response) {

				$scope.count_answeres = response.length;

			})

		$scope.lec_dooSubmit = function () {
			var answerty = $scope.answerty;
			var username = localStorage.getItem('loggedin');
			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');

			if (typeof (answerty) == undefined) {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.answerty = "";

			}
			else {
				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/answer_stulct?ans=" + answerty + "&uid=" + userid + "&qid=" + a + "&email=" + emaill + "&uname=" + username + "&utype=" + type)
					.success(function (response) {


						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});
						window.location.reload(true);
						$scope.answerty = "";


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.answerty = "";
					});
			}
		}



	})

	.controller('ComentansssCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		var a = $stateParams.id;

		var b = $stateParams.fid;

		$scope.answer_notavail = false;
		$scope.answer_avail = false;

		var iid = localStorage.getItem("userid");
		var type = localStorage.getItem("usr_type");
		var username = localStorage.getItem('loggedin');

		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a + "&user_id=" + iid + "&type=student")
			.success(function (response) {


				$scope.que = response;
				$scope.usr_nme = username;


			})
		$http.get("http://api.hauduai.com.ng/get_answer_comments?ans_id=" + b + "&type=student")
			.success(function (res) {

				//$scope.length = res;
				//for (var i = 0; i <= res.length -1 ; i++) {
				$scope.quesss = res;
				//}
			})


		$scope.doooSubmit = function () {
			var anss = $scope.comments;

			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');


			if (typeof (anss) == 'undefined') {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.anss = "";
			}
			else {
				//var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/answer_comments?ans_id=" + b + "&user_id=" + iid + "&comment=" + anss + "&type=student")
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Comment Has Been Submitted.',
							template: 'Comment Submit.'
						});
						$scope.anss = "";
						window.location.reload(true);


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Comment this Question.',
							template: 'Already Commented.'
						});
						$scope.anss = "";
					});
			}
		}

	})

	//--------------from lecturer-----------------//

	.controller('ComentfrmlecCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		var a = $stateParams.id;

		var b = $stateParams.fid;

		$scope.answer_notavail = false;
		$scope.answer_avail = false;

		var iid = localStorage.getItem("userid");
		var type = localStorage.getItem("usr_type");
		var username = localStorage.getItem('loggedin');

		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a + "&user_id=" + iid)
			.success(function (response) {


				$scope.que = response;
				$scope.usr_nme = username;


			})
		$http.get("http://api.hauduai.com.ng/get_answer_comments?ans_id=" + b + "&user_id=" + iid)
			.success(function (res) {

				//$scope.length = res;
				//for (var i = 0; i <= res.length -1 ; i++) {
				$scope.quesss = res;
				//}
			})


		$scope.doooSubmit = function () {
			var anss = $scope.comments;

			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');


			if (typeof (anss) == 'undefined') {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.anss = "";
			}
			else {
				var type = localStorage.getItem('usr_type');

				$http.get("http://api.hauduai.com.ng/answer_comments?ans_id=" + b + "&user_id=" + iid + "&comment=" + anss + "&type=" + type)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Comment Has Been Submitted.',
							template: 'Comment Submit.'
						});
						$scope.anss = "";
						window.location.reload(true);


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Comment this Question.',
							template: 'Already Commented.'
						});
						$scope.anss = "";
					});
			}
		}

	})

	.controller('ComentfrmstuCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		var a = $stateParams.id;

		var b = $stateParams.fid;

		$scope.answer_notavail = false;
		$scope.answer_avail = false;

		var iid = localStorage.getItem("userid");
		var type = localStorage.getItem("usr_type");
		var username = localStorage.getItem('loggedin');

		$http.get("http://api.hauduai.com.ng/answeres_studentapp?id=" + a + "&user_id=" + iid)
			.success(function (response) {


				$scope.que = response;
				$scope.usr_nme = username;


			})
		$http.get("http://api.hauduai.com.ng/get_answer_comments?ans_id=" + b + "&user_id=" + iid)
			.success(function (res) {

				//$scope.length = res;
				//for (var i = 0; i <= res.length -1 ; i++) {
				$scope.quesss = res;
				//}
			})


		$scope.doooSubmit = function () {
			var anss = $scope.comments;

			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');


			if (typeof (anss) == 'undefined') {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.anss = "";
			}
			else {
				var type = localStorage.getItem('usr_type');

				$http.get("http://api.hauduai.com.ng/answer_comments?ans_id=" + b + "&user_id=" + iid + "&comment=" + anss + "&type=" + type)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Comment Has Been Submitted.',
							template: 'Comment Submit.'
						});
						$scope.anss = "";
						window.location.reload(true);


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Comment this Question.',
							template: 'Already Commented.'
						});
						$scope.anss = "";
					});
			}
		}

	})


	.controller('ComentlecansCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		var a = $stateParams.id;

		var b = $stateParams.fid;

		$scope.answer_notavail = false;
		$scope.answer_avail = false;

		var iid = localStorage.getItem("userid");
		var type = localStorage.getItem("usr_type");
		var username = localStorage.getItem('loggedin');

		$http.get("http://api.hauduai.com.ng/que_ans_lec?id=" + a + "&user_id=" + iid + "&type=lecturer")
			.success(function (response) {


				$scope.que = response[0];
				$scope.usr_nme = username;


			})
		$http.get("http://api.hauduai.com.ng/get_answer_comments?ans_id=" + b + "&type=lecturer")
			.success(function (res) {

				//$scope.length = res;
				//for (var i = 0; i <= res.length -1 ; i++) {
				$scope.quesss = res;
				//}
			})


		$scope.doooSubmit = function () {
			var anss = $scope.comments;

			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');


			if (typeof (anss) == 'undefined') {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.anss = "";
			}
			else {
				var type = localStorage.getItem('usr_type');

				$http.get("http://api.hauduai.com.ng/answer_comments?ans_id=" + b + "&user_id=" + iid + "&comment=" + anss + "&type=lecturer")
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Comment Has Been Submitted.',
							template: 'Comment Submit.'
						});
						$scope.anss = "";
						window.location.reload(true);


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Comment this Question.',
							template: 'Already Commented.'
						});
						$scope.anss = "";
					});
			}
		}

	})



	.controller('quiz_stuProvideAnsCtrl', function ($scope, $ionicHistory, $http, $stateParams, $location, $ionicPopup) {

		/* var value;
	localStorage.setItem('key', value); */
		var a = $stateParams.id;

		//var que=$scope.que;
		$scope.aa = $stateParams.id;

		//$scope.answer_notavail=false;
		//$scope.answer_avail=false;
		var iid = localStorage.getItem("userid");
		var type = localStorage.getItem("usr_type");
		$http.get("http://api.hauduai.com.ng/get_question_quizprize?id=" + a)
			.success(function (response) {
				$scope.get_questionnn_expert = response;
				$scope.user = type;
			})

		$http.get("http://api.hauduai.com.ng/quizprize_comments?qid=" + a)
			.success(function (response) {

				for (var i = 0; i <= response.length - 1; i++) {

					$scope.quesss = response;


				}

			})

		//var s = '"something"';
		//var result = JSON.parse(s);
		$scope.dooSubmit = function () {
			var ansswer = $scope.quiz_answer;
			var username = localStorage.getItem('loggedin');
			var userid = localStorage.getItem('userid');
			var emaill = localStorage.getItem('useremail');
			/* if(typeof(answertyped)==undefined){
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
					});
					$scope.answertyped="";
			}  */


			//	throw new Error("Something went badly wrong!");

			if (typeof (ansswer) == 'undefined') {
				var alertPopup = $ionicPopup.alert({
					title: 'Please type the Answer.',
					template: 'Type Answer.'
				});
				$scope.ansswer = "";

			}
			else {
				var type = localStorage.getItem('usr_type');
				$http.get("http://api.hauduai.com.ng/answer_quizprize?ans=" + ansswer + "&uid=" + userid + "&qid=" + a + "&email=" + emaill + "&uname=" + username + "&utype=" + type)
					.success(function (response) {

						var alertPopup = $ionicPopup.alert({
							title: 'Your Answer Has Been Submitted.',
							template: 'Answer Submit.'
						});

						$scope.ansswer = "";
						window.location.reload(true);


					})
					.error(function () {
						var alertPopup = $ionicPopup.alert({
							title: 'You have Already Answered this Question.',
							template: 'Already Answered.'
						});
						$scope.ansswer = "";
						window.location.reload(true);
					});
			}
		}

	})

	.controller('quizCtrl', function ($scope, $http, $ionicHistory, $state, $window, $location, $ionicPopup) {

		$scope.start = function () {
			window.location.reload(true);

		}
		var id = localStorage.getItem("userid");

		$http.get("http://api.hauduai.com.ng/quiz_prize?user=" + id)
			.success(function (response) {

				for (var i = 0; i <= response.length; i++) {
					$scope.quest = response;
					$scope.date = new Date();
				}
			})

	})


	.controller('quizres_ponseCtrl', function ($scope, $location, $http, $state, $window, $ionicPopup) {
		$scope.start = function () {
			window.location.reload(true);
		}

		if ($location.search().hasOwnProperty('id')) {
			var myvalue = $location.search()['id'];
		}

		$http.get("http://api.hauduai.com.ng/quiz_prize_response?id=" + myvalue)
			.success(function (response) {
				if (response.status == "Failed") {
					var alertPopup = $ionicPopup.alert({
						title: 'There are no responses to this quiz',
						template: 'No Response.'
					})

				}

				else {
					for (var i = 0; i <= response.length - 1; i++) {

						$scope.answeyyr_value = response;
					}

				}

			})


	})

	.controller('quiz_winners_Ctrl', function ($scope, $location, $http, $state, $window, $ionicPopup) {

		$scope.start = function () {
			window.location.reload(true);

		}


		if ($location.search().hasOwnProperty('id')) {
			var myvalue = $location.search()['id'];
		}
		$http.get("http://api.hauduai.com.ng/quiz_winners?id=" + myvalue)
			.success(function (response) {
				if (response.status == "Failed") {

					var alertPopup = $ionicPopup.alert({
						title: 'There are no winners for this quiz',
						template: 'No Winners.'
					})
				} else {
					for (var i = 0; i <= response.length - 1; i++) {

						$scope.winners_value = response;
					}
				}
			})

	})


	.controller('dateCtrl', function ($scope) {
		//var no = String(20);
		//var no2 = String(40);
		//var nn = no + '/' + no2;
		//alert(nn);


		var month = ["January", "February", "March", "April", "May", "June", "July",
			"August", "September", "October", "November", "December"];
		$scope.playlists = month;

		var day = [];
		for (var i = 0; i <= 31; i++) {
			day.push(i);
		}
		$scope.monthday = day;

		var yyy = [];
		var year = 1950;
		var till = 2016;

		for (var y = year; y <= till; y++) {
			yyy.push(y);
		}
		$scope.yearmn = yyy;

	})


.controller('BrowseCtrl', function ($scope, $ionicHistory, $http, $ionicPopup) {

$scope.refresh = function(){
	window.location.reload(true);
}
		var firstDate = localStorage.getItem("date");
		var userid = localStorage.getItem("userid");
		//var ddd = new Date("11/2/2016");
		var dd = new Date(firstDate);
		var date2 = new Date();
		var daydiff = date2.getDate() - dd.getDate();
		if (daydiff != 0 && daydiff % 7 == 0) {
			$http.get("http://api.hauduai.com.ng/hauduailoginn?username=" + userid)
				.success(function (response) {
					if (response.statuss == 0) {
						var confirmPopup = $ionicPopup.confirm({
							title: 'You are yet to complete section 2 of the registration requirement',
							cancelText: 'Complete Later',
							cancelType: 'button-dark',
							okText: 'Complete Now',

						});
						confirmPopup.then(function (res) {

							if (res) {

								console.log('You clicked on "Now" button');
								window.open("http://www.hauduai.com.ng/index/stepp2/" + response.id + "/" + response.type);
							} else {

								console.log('You clicked on "Later" button');
							}

						});
					}
				})
		}


		//var dateString = date2.getMonth() + 1 + "/" + date2.getDate() + "/" + date2.getFullYear().toString().substr(2,2);
		//$ionicHistory.clearHistory();
		$scope.name = localStorage.getItem("loggedin");
		$scope.userid = localStorage.getItem("userid");
	});










