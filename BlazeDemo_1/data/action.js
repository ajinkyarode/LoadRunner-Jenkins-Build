//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Sat Sep 23 19:38:41 2023
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.addCookie('prodperfect_session={%22session_uuid%22:%22ef6daf03-1d3e-4a70-950b-df3c68bd22bc%22}; DOMAIN=blazedemo.com');

	web.addCookie('keen={%22uuid%22:%226a090324-ce93-4f06-9628-ee620599b472%22%2C%22initialReferrer%22:%22https://blazedemo.com/%22}; DOMAIN=blazedemo.com');

	web.url(
		{
			name : 'blazedemo.com', 
			url : 'https://blazedemo.com/', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't1.inf', 
			mode : 'HTML'
		}
	);

	web.submitForm(
		{
			name : 'reserve.php', 
			snapshot : 't2.inf', 
			itemData :  [
				{name : 'fromPort', value : 'Boston'},
				{name : 'toPort', value : 'London'}
			]
		}
	);

	web.submitForm(
		{
			name : 'purchase.php', 
			ordinal : '4', 
			snapshot : 't3.inf', 
			itemData :  [
			]
		}
	);

	web.submitForm(
		{
			name : 'confirmation.php', 
			snapshot : 't4.inf', 
			itemData :  [
				{name : 'inputName', value : 'A'},
				{name : 'address', value : '123 Main St'},
				{name : 'city', value : 'Hen'},
				{name : 'state', value : 'NY'},
				{name : 'zipCode', value : '12345'},
				{name : 'cardType', value : 'Visa'},
				{name : 'creditCardNumber', value : '1234567890'},
				{name : 'creditCardMonth', value : '11'},
				{name : 'creditCardYear', value : '2027'},
				{name : 'nameOnCard', value : 'A R'},
				{name : 'rememberMe', value : '<OFF>'}
			]
		}
	);

	web.link(
		{
			name : 'Travel The World', 
			text : 'Travel The World', 
			snapshot : 't5.inf'
		}
	);

	return 0;
}

