<!DOCTYPE html>
<html>
<head>
	<title>title</title>
	<meta charset="utf-8">
	<style type="text/css">
		#resultBox{
			border: 5px solid red;
			padding: 50px;
			margin: 25px;
			margin-right: 50px;
			margin-left: 50px;
			text-align: center;
		}
	</style>

		<script type="text/javascript">
		var gambling = {
			counter : 0,
			counter1 : 0,
			counter2 : 0,

			num : 0,
			num1 : 0,
			num2 : 0,

			doA: function(){
			if(this.counter != 1){
			var obj = document.getElementById('num1');
			var num = Math.floor(Math.random() * 2) + 1 ;
			obj.innerHTML = num;
			// this.counter ++;
			this.num = num;
		}
	},
	doB : function(){
			if(this.counter1 != 1){
			var obj = document.getElementById('num2');
			var num = Math.floor(Math.random() * 2) + 1 ;
			obj.innerHTML = num;
			// this.counter1 ++;
			this.num1 = num;
		}
	},
		doC : function(){
			if(this.counter2 != 1){
			var obj = document.getElementById('num3');
			var num = Math.floor(Math.random() * 2) + 1 ;
			obj.innerHTML = num;
			// this.counter2 ++;
			this.num2 = num;
		}
	},

};
</script>
</head>


<body>

	<div align="center">한자리씩 눌르자 맞으면 잭팟 !!!</div>
	<hr>

	<div style="border: 2px solid pink; padding: 5px; text-align: center; background-color: linen; color: blue; font-size: 50px;">
		<span id="num1" onclick="gambling.doA()">0 </span> <span id="num2" onclick="gambling.doB()">0 </span> <span id="num3" onclick="gambling.doC()">0 </span>
	</div>

	<div id="resultBox">
		<script type="text/javascript">
			if(gambling.num == gambling.num1 == gambling.num2){
				document.write("SUCCESS....");
			}
			else
				document.write("FAIL....");
		</script>
	</div>



</body>

</html>
