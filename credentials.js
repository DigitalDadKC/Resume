
		function openCred(evt, credName) {
			var i, credtabcontent, credtablinks;
			credtabcontent = document.getElementsByClassName("credtabcontent");
			for (i = 0; i < credtabcontent.length; i++) {
				credtabcontent[i].style.display = "none";
			}
			credtablinks = document.getElementsByClassName("credtablinks");
			for (i = 0; i < credtablinks.length; i++) {
				credtablinks[i].className = credtablinks[i].className.replace(" active", "");
			}
			document.getElementById(credName).style.display = "block";
			evt.currentTarget.className += " active";
			}
			document.getElementById("creddefault").click();
