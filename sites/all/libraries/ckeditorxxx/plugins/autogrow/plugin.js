﻿/*

Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.

For licensing, see LICENSE.html or http://ckeditor.com/license

*/



(function(){function a(d){var e=d.getStyle('overflow-y'),f=d.getDocument(),g=CKEDITOR.dom.element.createFromHtml('<span style="margin:0;padding:0;border:0;clear:both;width:1px;height:1px;display:block;">'+(CKEDITOR.env.webkit?'&nbsp;':'')+'</span>',f);f[CKEDITOR.env.ie?'getBody':'getDocumentElement']().append(g);var h=g.getDocumentPosition(f).y+g.$.offsetHeight;g.remove();d.setStyle('overflow-y',e);return h;};function b(d){var e=d.document,f=e.getBody(),g=e.getDocumentElement();return e.$.compatMode=='BackCompat'?f:g;};var c=function(d){if(!d.window)return;var e=b(d),f=d.window.getViewPaneSize().height,g=a(e);g+=d.config.autoGrow_bottomSpace||0;var h=d.config.autoGrow_minHeight!=undefined?d.config.autoGrow_minHeight:200,i=d.config.autoGrow_maxHeight||Infinity;g=Math.max(g,h);g=Math.min(g,i);if(g!=f){g=d.fire('autoGrow',{currentHeight:f,newHeight:g}).newHeight;d.resize(d.container.getStyle('width'),g,true);}if(e.$.scrollHeight>e.$.clientHeight&&g<i)e.setStyle('overflow-y','hidden');else e.removeStyle('overflow-y');};CKEDITOR.plugins.add('autogrow',{init:function(d){d.addCommand('autogrow',{exec:c,modes:{wysiwyg:1},readOnly:1,canUndo:false,editorFocus:false});var e={contentDom:1,key:1,selectionChange:1,insertElement:1,mode:1};d.config.autoGrow_onStartup&&(e.instanceReady=1);for(var f in e)d.on(f,function(g){var h=d.getCommand('maximize');if(g.editor.mode=='wysiwyg'&&(!h||h.state!=CKEDITOR.TRISTATE_ON))setTimeout(function(){c(g.editor);c(g.editor);},100);});d.on('beforeCommandExec',function(g){if(g.data.name=='maximize'&&g.editor.mode=='wysiwyg')if(g.data.command.state==CKEDITOR.TRISTATE_OFF){var h=b(d);h.removeStyle('overflow');}else c(d);});}});})();

