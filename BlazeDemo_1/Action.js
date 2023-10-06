//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Sat Sep 23 19:38:41 2023
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{

	web.regSaveParamRegexp({paramName:'dep',regExp:'<select name=\"fromPort\" class=\"form-inline\">(\\s+)([\\w\\W]+?)(?=\\s+<\\/select>)',group:2,notFound:'error'});
	web.regSaveParamRegexp({paramName:'des',regExp:'<select name=\"toPort\" class=\"form-inline\">(\\s+)([\\w\\W]+?)(?=\\s+<\\/select>)',group:2,notFound:'error'});
	web.customRequest(
		{
			name:'loadPage',
			url:'https://blazedemo.com/',
			snapshot:'t1.inf',
			method:'GET',
			encType:'text/html',
			mode:'HTTP'
		}
	);

	var s1=lr.evalString('{dep}');
	const depCity = s1.match(/"(.*?)"/g);
	var s2=lr.evalString('{des}');
	const desCity = s2.match(/"(.*?)"/g);

	web.regSaveParamAttrib({paramName:'flight',tagName:'input',extract:'value',name:'flight',type:'hidden',ordinal:'all',notFound:'error'});
	web.regSaveParamAttrib({paramName:'price',tagName:'input',extract:'value',name:'price',type:'hidden',ordinal:'all',notFound:'error'});
	web.regSaveParamAttrib({paramName:'airline',tagName:'input',extract:'value',name:'airline',type:'hidden',ordinal:'all',notFound:'error'});
	lr.outputMessage(web.getIntProperty(web.HTTP_INFO_DOWNLOAD_SIZE));
	web.customRequest(
		{
			name:'reserve',
			url:'https://blazedemo.com/reserve.php',
			method:'POST',
			snapshot:'t2.inf',
			mode:'HTTP',
			body:'fromPort='+depCity[1]+'&toPort='+desCity[3]
		}
	);

	web.customRequest(
		{
			name:'purchase',
			url:'https://blazedemo.com/purchase.php',
			method:'POST',
			snapshot:'t3.inf',
			mode:'HTTP',
			body:'flight={flight_1}&price={price_1}&airline={airline_1}&fromPort='+depCity[1]+'&toPort='+desCity[3]
		}
	);
	
	web.customRequest(
		{
			name:'confirmation',
			url:'https://blazedemo.com/confirmation.php',
			method:'POST',
			snapshot:'t4.inf',
			mode:'HTTP',
			body:'_token=&inputName=A&address=123+Main+St&city=Hen&state=NY&zipCode=12345&cardType=visa&creditCardNumber=1234567890&creditCardMonth=11&creditCardYear=2027&nameOnCard=A+R'
		}
	);
	
	web.customRequest(
			{
				name:'index',
				url:'https://blazedemo.com/index.php',
				snapshot:'t5.inf',
				method:'GET',
				encType:'text/html',
				mode:'HTTP'
			}
		);

	return 0;
}

