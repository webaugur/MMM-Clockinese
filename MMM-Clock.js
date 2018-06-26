/* Magic Mirror
 * Module: MMM-Clockinese
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-RomanAnalogClock",{
		
	defaults: {
			height:"600px",
			width:"600px"
	},
	
	getStyles: function() {
        return ["MMM-Clock.css"];
    },

    
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
        
        iframe.src="http://free.timeanddate.com/clock/i6au1gvj/n105/szw600/szh600/hocfff/hbw6/cf100/hgr0/hwcaaa/hccfff/hcw1/hcd90/fiv0/fan2/fas30/fnu2/fdi60/mqc444/mqs4/mql13/mqw4/mqd90/mhc000/mhs4/mhl13/mhw2/mhd90/mmc000/mms4/mml5/mmw1/mmd82/hwm2/hhs2/hhb18/hms2/hml80/hmb18/hmr7/hscf09/hss1/hsl90/hsr5";
		return iframe;
	},
	
	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_CLOCK') {
            this.hide(1000);
        }  else if (notification === 'SHOW_CLOCK') {
            this.show(1000);
        }
            
    },

});
