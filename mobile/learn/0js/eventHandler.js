
var  eventHandler = {
    	addEvent : function (element,type,handler){
    	    if(element.addEventListener){
    	    	element.addEventListener(type,handler,false);
    	    }
    	    else if(element.attatchEvent){
    	    	element.attachEvent('on'+type,handler);
    	    }
    	    else{
    	    	element['on'+type] = handler;
    	    }
    	},
    	removeEvent : function (element,type,handler){
    	    if(element.removeEventListener){
    	    	element.removeEventListener(type,handelr,false)
    	    }else if(element.detachEvent){
    	    	element.detachEvent('on'+type,handler)
    	    }else{
    	    	element['on'+type] = null;
    	    }
    	},
    	getEvent : function (e){
    	    return e || window.event;
    	},
    	
    	getTarget : function (e){
    	    return e.target || e.srcElement;
    	},
    	
    	preventDefault : function (e){
    	    if(e.preventDefault){
    	    	e.preventDefault();
    	    	}
    	    else { 
    	    	e.returnValue =false;
    	    }	
    	},
    	
    	stopPropagation : function (e){
    	    if(e.stopPropagation){
    	    	e.stopPropagation();
    	    }else{
    	    	e.cancelBubble = true;
    	    }
    	}
 
}