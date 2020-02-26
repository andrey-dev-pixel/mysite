var current = 0;

function review_change(n) {
	var arr_1 = 
		[
			"We have worked on big project together with Stanislav during one year."
            + "He has great experience with Core Bluetooth framework and deep knowledge of Java."
            + "He can work with big projects and accomplish complicated tasks successfully and in time.",
			"Stan is a best manager I ever met in my career. Highly professional and polite. Able to organize development process in a comfortable and efficient way. It was a remarkable experience to work under his leadership.",
			"Stan is extremely patient and hardworking person who always takes full responsibility for the development process and keeps everything under control. Besides these rare skills, he has very good sense of humor. "
			+ "After almost a year I've worked together with Stan I think he is ingenious and robust iOS/Android developer.",
			"Stan was working on complex BI software for MoneyPark. He has shown that he not only can understand and integrate complex problem, but also bring his own ideas and improvements to it. "
			+ "He has also shown perseverance and determination, I can definitely recommend him!"
		];
	var arr_2 = 
		[
			"Stanislav is very professional and responsible developer. Very comfortable to work with him.",
			"Worked with Stan in same team during one year. He's an experienced iOS developer you can rely on.",
			"Stan is developer who can study new technology for one day. Working with Stan it is really easy.",
			"Stanislav is a professional at programming. He dives into the problem and quickly finds the solution. He knows a lot about iOS development and his work is a proof of his competence."
			];	
	var length = arr_1.length;				
	var from_1 = 
		[
			"Dmitry Kapshuk",
			"Jake N.",
			"Andrew Terentiev",
			"Benjamin Niyaz"
		];
	var from_2 = 
		[
			"Roman Vasylchenko",
			"Guillermo Davis",
			"Sam Farrugia",
			"Olexandr Shalakhin"
		];
	
	var pos_1 = 
		[
			"Android Developer",
			"Full Stack Engineer",
			"Chief of Business Development",
			"Chief Technical Officer"
		];
	var pos_2 = 
		[
			"Creative Director",
			"Chief Executive Officer",
			"Software Engineer",
			"Senior Python Developer"
		];
	
	if(n === 1) {
		if (current === arr_1.length - 1) {
			current = 0;
		} else {
			current++;
		}
	} else if(n === -1) {
		if (current === 0) {
			current = arr_1.length - 1;
		} else {
			current--;
		}
	}

	($("#review_txt_0").text(arr_1[current]));
	($("#review_from_0").text(from_1[current]));
	($("#review_pos_0").text(pos_1[current]));
	
	($("#review_txt_1").text(arr_2[current]));
	($("#review_from_1").text(from_2[current]));
	($("#review_pos_1").text(pos_2[current]));
}

function life_cycle(n) {
	var text1,text2,text3,text4 ;
	text1 = ($("#MobiDevsTeam_1").text(n));
	text2 = ($("#MobiDevsTeam_2").text(n));
	text3 = ($("#MobiDevsTeam_3").text(n));
	text4 = ($("#MobiDevsTeam_4").text(n));
	($("#MobiDevsTeam_1").text("hello"));
	
	switch (n) {
		case 0:
			($("#icon_0").addClass("css-1xblj4").removeClass("css-1abdb54"));
			($("#dot_0").addClass("css-1efyihz"));
			($("#under_text_0").addClass("css-1n8sbms").removeClass("css-1yzv4vw"));
			
			($("#icon_1").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_1").removeClass("css-1efyihz"));
			($("#under_text_1").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			
			($("#icon_2").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_2").removeClass("css-1efyihz"));
			($("#under_text_2").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			
			($("#icon_3").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_3").removeClass("css-1efyihz"));
			($("#under_text_3").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			
			text1.text("The discovery and research phase is critically important to the success of your product.");
			text2.text("But, It's not your job to struggle through it alone; we are there to guide you through all the unknowns.");
			text3.text("Once we've reviewed your concept, we will architech the most appropriate back and front-end stack.");
			text4.text("For this phase, be ready for suggestions; our team treats all projects as if they were their own startups!");
			break;
		case 1:
			($("#icon_1").addClass("css-1xblj4").removeClass("css-1abdb54"));
			($("#dot_1").addClass("css-1efyihz"));
			($("#under_text_1").addClass("css-1n8sbms").removeClass("css-1yzv4vw"));
			
			($("#icon_2").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_2").removeClass("css-1efyihz"));
			($("#under_text_2").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			($("#icon_0").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_0").removeClass("css-1efyihz"));
			($("#under_text_0").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			($("#icon_3").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_3").removeClass("css-1efyihz"));
			($("#under_text_3").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			text1.text("As soon as we pick the right tools for your project, we begin working on it with you.");
			text2.text("We favor strong collaboration, and making sure you know how the project works under the hood.");
			text3.text("We host our work as we code on Github, or the platform control of your choice.");
			text4.text("We can also work with another version control system besides Git if you prefer.");
			break;
		case 2:
			($("#icon_2").addClass("css-1xblj4").removeClass("css-1abdb54"));
			($("#dot_2").addClass("css-1efyihz"));
			($("#under_text_2").addClass("css-1n8sbms").removeClass("css-1yzv4vw"));
			
			
			($("#icon_0").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_0").removeClass("css-1efyihz"));
			($("#under_text_0").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			($("#icon_1").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_1").removeClass("css-1efyihz"));
			($("#under_text_1").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			($("#icon_3").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_3").removeClass("css-1efyihz"));
			($("#under_text_3").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			text1.text("We believe excellent tests are a crucial part of every project to ensure its long-term stability.");
			text2.text("That's why we constantly check with you on your specification and needs.");
			text3.text("The main phase of testing happens daily, with small unit tests on every added feature.");
			text4.text("As we approach the end of the project, we test every piece of logic inside out, along with every edge-case.");
			break;
		case 3:
			($("#icon_3").addClass("css-1xblj4").removeClass("css-1abdb54"));
			($("#dot_3").addClass("css-1efyihz"));
			($("#under_text_3").addClass("css-1n8sbms").removeClass("css-1yzv4vw"));
			
			
			($("#icon_0").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_0").removeClass("css-1efyihz"));
			($("#under_text_0").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			($("#icon_1").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_1").removeClass("css-1efyihz"));
			($("#under_text_1").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			($("#icon_2").addClass("css-1abdb54").removeClass("css-1xblj4"));
			($("#dot_2").removeClass("css-1efyihz"));
			($("#under_text_2").addClass("css-1yzv4vw").removeClass("css-1n8sbms"));
			text1.text("Once you are ready to ship your project, we will help you deploy it to your own infrastructure.");
			text2.text("If you don't have anything in place, we will suggest you best options, and set it up for you if you prefer.");
			text3.text("Thanks to Continuous Delivery, we release incremental updates in short cycles after initial development is done.");
			text4.text("For mobile apps, we can skip App Store reviews and update all clients immediately, using AppHub and CodePush.");
			break;
	}	
}

function Change(n) {
	var name, link, intro, hashtag, pic ;
	name = ($("#member_name").text(n));
	link = ($("#member_link").text(n));
	intro = ($("#member_intro").text(n));
	hashtag = ($("#member_hashtag").text(n));
	pic = $("#member_pic").attr("src","static/images/team-mike.png");
		  
	switch (n) {
		case 0:
			name.text("Mike Grabowski");
			link.text("@grabbou");
			intro.text("React/React Native developer, RNPM author, React Native core contributor, and former Este.js team member. Mike makes sure our infrastructure performs well to its limits.");
			hashtag.text("#ios #android #react #reactnative #nodejs");
			pic.attr("src","static/images/team-mike.png");
			break;
		case 1:
			name.text("Mike Chudziak");
			link.text("@mike866");
			intro.text("A full­stack JavaScript developer. Experienced in Web and Mobile development. Big fan of React Native and GraphQL.");
			hashtag.text("#reactnative #react #hapijs #graphql #apollostack #nodejs");
			pic.attr("src","static/images/team-mike2.jpg");
			break;
		case 2:
			name.text("Jakub Klobus");
			link.text("@souhe");
			intro.text("Software developer working at MobiDevsTeam since the beginning. After mastering web, he moved to React Native where he focuses on making React Native Windows next big thing.");
			hashtag.text("#nodejs #react #reactnative #csharp #windowsphone");
			pic.attr("src","static/images/team-souhe.png");
			break;
		case 3:
			name.text("Ferran Negre");
			link.text("@ferrannp");
			intro.text("Web/Mobile developer. Ferran started with React on its very early stage and he never looked back. Currently porting his broad Android experience to React Native.");
			hashtag.text("#react #reactnative #android #jest #nodejs");
			pic.attr("src","static/images/team-ferran.png");
			break;
		case 4:
			name.text("Piotr Drapich");
			link.text("@dratwas");
			intro.text("Javascript developer working with React (Native) full-time. Having worked on the backend for quite some time, he mastered building apps with REST to its limits.");
			hashtag.text("#php #api #reactnative #react");
			pic.attr("src","static/images/team-dratwa.png");
			break;
		case 5:
			name.text("Kuba Stasiak");
			link.text("@jakubsta");
			intro.text("Software developer working with React and others. Kuba is our network master, making sure all the switches and access points are still running.");
			hashtag.text("#php #api #reactnative #react #networks #rust");
			pic.attr("src","static/images/team-stasiak.png");
			break;
		case 6:
			name.text("Luke Walczak");
			link.text("@lukewalczak");
			intro.text("Fast learning intern. Luke makes his first steps in the everyday-changing Javascript world. When not working, he plays american football and learns even more Javascript.");
			hashtag.text("#javascript #es6 #webpack #development");
			pic.attr("src","static/images/team-luke.png");
			break;
		case 7:
			name.text("Krzysztof Pawlak");
			link.text("@pawlucci");
			intro.text("Project manager making sure we all do really work. He takes care of our workflow and makes sure our clients are happy. Spends his every free minute on a gym.");
			hashtag.text("#management #agile #scrum #gym #workflows");
			pic.attr("src","static/images/team-pawlak.png");
			break;
	}
}