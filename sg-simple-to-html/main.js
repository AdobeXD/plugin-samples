/**
 * Will Ruby
 *
 * Converts the selected shapes (paths, text, rectangles) into HTML.
 * Since this version of XD doesn't let plugins save files, the resulting HTML is just printed to the console log,
 * where you can copy-paste it into a text editor - or directly into the browser URL bar, since it uses a
 * `data:text/html` prefix.
 *
 * Demo: https://adobe.enterprise.slack.com/files/W4RN61QQZ/FA8AJD135/screen_shot_2018-04-17_at_11.39.13_am.png
 */

var commands = require("commands");
var {Artboard, Rectangle, Ellipse, Path, Color, Text} = require("scenegraph");

function goGoGadget(selection){
	var selection = selection.items;
	var shard = ''

	for (var i = 0; i < selection.length; i++){
	    var object = selection[i]
	    let pageW = object.parent.width
        let pageH = object.parent.height

	    if(object instanceof Rectangle){
	        let stroke = object.stroke.toHex()
	        let fill = object.fill.toHex()

	        let strokeWidth = object.strokeWidth
	        let strokeEnabled = object.strokeEnabled

	        let corners = object.getEffectiveCornerRadii()

	        corners = corners.join("px ") + "px"


        	let x = object.topLeftInParent.x / pageW * 100
	        let y = object.topLeftInParent.y / pageH * 100
	        let w = object.width / pageW * 100
	        let h = object.height / pageH * 100

	        var el = '<div style="box-sizing: border-box;border-radius:'+corners+';background:'+ fill +';border:'+(strokeEnabled ? strokeWidth : 0)+'px solid ' +stroke+ ';position:absolute;top:' + y + 'vh;left:' + x + 'vw;width:'+ w +'vw;height:'+ h +'vh"></div>'


	        shard += el
	    }
	    if(object instanceof Text){
	        let fill = object.fill.toHex()

	        let fontFamily = object.styleRanges[0].fontFamily
	        let fontSize = object.styleRanges[0].fontSize / pageH * 100
	        let fontStyle = object.styleRanges[0].fontStyle
	        let charSpacing = object.styleRanges[0].charSpacing

	        // the right thing to do would be to iterate across style ranges and add them as spans

	        log(fontFamily)
	        log(fontSize)
	        log(fontStyle)
	        log(charSpacing)


	        let x = object.topLeftInParent.x / pageW * 100
	        let y = object.topLeftInParent.y / pageH * 100
	        let w = object.width / pageW * 100
	        let h = object.height / pageH * 100

	        var el = '<div style="letter-spacing:'+charSpacing+'pt;font-style:'+fontStyle+';font-family:'+fontFamily+';font-size:'+fontSize+'vh;color:'+ fill +';position:absolute;top:' + y + 'vh;left:' + x + 'vw;width:'+ w +'vw;height:'+ h +'vh">'+ object.text +'</div>'

	        shard += el
	    }
	    if(object instanceof Path){
	        log(object)
	        let stroke = object.stroke.toHex()
	        let fill = object.fill.toHex()

	        let strokeWidth = object.strokeWidth
	        let strokeEnabled = object.strokeEnabled
	        let fillEnabled = object.fillEnabled
	        var el = '<svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 '+pageW+' '+pageH+'" style="z-index:'+(selection.length - i)+';width:100vw;height:100vh;position:absolute;top:0;left:0;"><path stroke-width="'+(strokeEnabled?strokeWidth:0)+'" stroke="'+stroke+'" fill="'+ (fillEnabled?fill:'transparent')+'" d="'+ object.pathData +'""/></svg>'
	        shard += el
	    }
	}
	log('data:text/html,'+shard)
}


function log(str){
	console.log('#!#: '+ str)
}

module.exports = {
    commands: {
        rectsToHTML: goGoGadget
    }
};