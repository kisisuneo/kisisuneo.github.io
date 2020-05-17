		document.write("This is hello button <br/>"); //dòng đầu tiên
		function sayBye(a, b){
            console.log (a + " is " + b + " years old.");
         } //button nhận string='Chun' vào vị trí a và number=16 vào vị trí b, in ra dưới dạng console

        function mon(a,b){
        	var c=a+b;
        	var d=50;
        	console.log(c);
        	for(c; c<d;c++){
        		console.log(c);
        	} // biến c bằng tổng của giá trị a được truyền vào là 14 và giá trị b được truyền vào là 15
        	  // sử dụng vòng lặp for,so sánh biến d với c (c bằng tổng a và b)
        	  // nếu c < d thì in ra dưới dạng console giá trị c, tiếp đó c cộng thêm 1 rồi lại so sánh 
        	  // vòng lặp kết thúc nếu c = d (vì điều kiện ban đầu c < d) 

        }
        function direct(){
        	window.location="https://kisisuneo.github.io/bai9.html";
        	alert("You will be redirected to main page in 10 sec.");
            setTimeout('Redirect()', 10000);
        } // window.location = "link trang web cần chuyển đến" có tác dụng chuyển sang trang theo link web được gán vào
          // trước đó khi nhấn vào button thì alert hiện lên
          // setTimeout('Redirect()', một số nào đó x 1000) biết 1000=1s thì sau khi nhập số nào đó sẽ thực hiện chuyển sang trang sau từng đấy giây


         function confirmAlert(){
         	var result = confirm ("Do you wanna live this page");
         	if (result == true) {
         		alert ('Thanks for visiting');
         	}
         	else {
         		alert ('Thanks for staying');
         	}
         }

         function promptBox(){
         	var user = prompt("Please enter your name");
            alert(user);
         }