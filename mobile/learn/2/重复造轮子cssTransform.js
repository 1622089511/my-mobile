function cssTransform(ele,attr,val){
    if(!ele.transform){
    	ele.transform = {}
    }
    if(arguments.length>2){
    	ele.transform[attr]=val;
    	var sVal = "";
    	for(var s in ele.transform){
    		switch(s){
    			case "rotate" :
    			case "skewX":
    			case "skewY":
    				sVal +=  s + "("+ele.transform[s]+"deg)";
    				break;
    			case "translateX":
    			case "translateY":
    			case "translate":
    				sVal += s+ "("+ele.transform[s]+"px)";
    				break;
    			case "scale":
    			case "scaleX":
    			case "scaleY":
    				sVal += s + "("+ele.transform[s]+")";
    				break;	
    		}
    	ele.style.transform = ele.style.webkitTransform = sVal;	
    	}
    }	
  else{
    	val = ele.transform[attr] ;
    	if(typeof val === "undefined"){
    		if(  attr == scale || attr ==skewX || attr ==skewY){
    			return 1;
    		}else{
    			return 0;
    		}
    	}
    	return val;
    }    
}