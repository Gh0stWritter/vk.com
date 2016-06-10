	
	var ahref = document.getElementsByTagName("A");
	var userId = "";
	var userCache = "";
	
	for(q = 0; q < ahref.length; q++)
	{
		var buffer = String(ahref[q].onclick);
		
		if(buffer.length > 0 && buffer.indexOf("Settings.delFromBl") >= 0)
		{
			for(i = 47; i < 56; i++)
			{
				userId += buffer.charAt(i);
			}
				
			{
				userCache += buffer.charAt(i);
			}
			
			//alert(userId + " " + userCache); debug
			
			//Settings.delFromBl(parseInt(userId), userCache, this);
			userId = "";
			userCache = "";	
		}
	}
}

iterateBlocks();

