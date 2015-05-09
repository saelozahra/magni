/*In the name of God
Magni:  For zoomin all HTML document not just Images
*/

(function($){
	$.fn.magni=function(scale,width,height,lensType,color,borderSize,shadow){
			//Setting type of lens, should be circle, rectangle or etc... .
			if(lensType=="circle"){
				var borderRadius=500;
			}else{
				var borderRadius=0;
			}

			//Scale:
			if(scale=='default'){
				var scale='2,2';
			}else{
				
				width=(width/scale);
				height=(height/scale);
				borderSize=(borderSize/scale);
			}


			//Color:
			if(color=='default'){
				color='black';
			}

			//borderSize
			if(borderSize=='default'){
				borderSize='1px';
			}

				
			if(shadow=='yes'){
					shadow="0px 4px 5px white inset, 0 10px 10px rgba(255,255,255,0.5) inset, 0 0 3px 5px rgba(0,0,0,0.4)";
			}

			var body_var='<div id="magni"><div id="to-move">'+this.html()+'</div></div>';
			$('body').append(body_var);
			
			$("#magni").css({
				"border-color": color, 
             	"border-width":borderSize, 
             	"border-style":"solid",
             	"borderRadius": borderRadius,
             	"margin":"auto",
             	"height":height,
             	"width":width,
             	"overflow":"hidden",
             	"position":"fixed",
             	"transform":'scale('+scale+')',
             	"z-index":'5000',
             	"box-shadow": shadow
			});

			$("#magni > #to-move").css({
				position:'absolute',
				left:0,
				top:0
			});


			$(document).mousemove(function(e){
					//X==left, Y==top

				$("#magni").css({
					left:(e.pageX-50),
					top:(e.pageY-50)	
				})

				$('#magni>#to-move').css({
					marginLeft:"-"+(e.pageX-65),
					marginTop:"-"+(e.pageY-53)
				});
				
			})


	};
}(jQuery));
