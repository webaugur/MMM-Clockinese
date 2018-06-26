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
        iframe.src="http://free.timeanddate.com/clock/i6au1gvj/n105/szw600/szh600/hocfff/hbw1/cf100/hgr0/hccfff/hcw1/hcd68/fiv0/fan2/fas30/fnu2/fdi86/mqc444/mqs4/mql13/mqw4/mqd70/mhc000/mhs4/mhl13/mhw2/mhd70/mmc000/mms4/mml5/mmw1/mmd66/hwm2/hhs2/hhl60/hhb18/hhw11/hhr7/hmc666/hms2/hml65/hmb18/hmw6/hmr5/hscf09/hss1/hsl65/hsb18/hsw1/hsr3" 
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
