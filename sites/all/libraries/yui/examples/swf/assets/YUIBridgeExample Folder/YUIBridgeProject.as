package {
	[SWF(backgroundColor="#00CC00", frameRate="31", width="400", height="200")]

	import com.yahoo.util.YUIBridge;
	
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.text.TextField;
	
	public class YUIBridgeProject extends Sprite
	{
		// An instance of TextField, to be placed on stage
		public var tf:TextField = new TextField();
		
		// An instance of YUIBridge, to communicate with JavaScript
		public var yuiBridge:YUIBridge;
		
		public function YUIBridgeProject()
		{
			// Instantiate the yuiBridge and pass a reference to the stage (to read Flashvars)
			yuiBridge = new YUIBridge(this.stage);
			
			// Size the TextField and place it on stage.
			tf.width = 400;
			tf.height = 200;
			addChild(tf);
			
			// Add a list of callbacks to the yuiBridge.
			yuiBridge.addCallbacks({addText:addText});
			
			// Display all the Flashvars in the TextField.
			tf.appendText("Flashvars: \n");
			for (var param:String in this.loaderInfo.parameters) {
				tf.appendText(param + ": " + yuiBridge.flashvars[param] + "\n");
			}

		}
		
		// Specify the addText function that is exposed for callback by the YUIBridge
		public function addText(txt:String) : void {
			tf.appendText(txt);
			
			// Send out an event to JavaScript when text is added to the Textfield.
			yuiBridge.sendEvent({type:"textAdded", text:txt});
		}
	}
}
