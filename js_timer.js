/*
	Script written by: Stefany Dyulgerova
	www.dyulgerova.info
	stefany.dyulgerova@gmail.com
 */
// Append 0 in front of numbers less than 10
	function prefix_zero(number){
		if(number < 10){
			number = "0" + number;
		}
			return number;
	}
// Our Unix timestamp in seconds.
// Current value is Thu, 29 Dec 2016 17:31:18 +0000	
		var timestamp = 1483032678;
// Our countdown_timer function.
	function countdown_timer(){
// Get the ID of the element you want the timer to appear.
		var js_timer = document.getElementById('js_timer');
// Fetch the  date from the timestamp suppplied and multiple it 
// by 1000 to turn it from seconds to miliseconds
// Javascript can only work with miliseconds, not seconds.
		var date_to_countdown = new Date(timestamp * 1000);
// Turn the date above into JS miliseconds 
		var unix_timestamp_from_date = date_to_countdown.getTime();
// Get the current timestamp
		var current_timestamp = new Date().getTime();
// Subtract the current timestamp from the timestamp of the chosen date in the future.
		var time_left =  unix_timestamp_from_date - current_timestamp;
// Fetch the seconds from the subtracted timestamp.
		var	seconds_left = Math.floor(time_left / 1000);	
// Make the seconds count from 60 to 0 and up again.
		var	seconds = seconds_left % 60;
// Fetch the minutes from the seconds.
		var	minutes_left = Math.floor(seconds_left / 60);
// Make the minutes count from 60 to 0 and up again.
		var	minutes = minutes_left % 60;
// Fetch the hours by dividing the minutes by 60
		var	hours_left = Math.floor(minutes_left / 60);	
// Format the time to appear like this - HH:MM:SS
// We use the prefix_zero function we defined above
// to append zeros to the hours, minutes & seconds once
// they reach a value less than 10
// Otherwise it will be like this - 4:2:9 which is unsightly.
				var show_timer = prefix_zero(hours_left) + ":" + prefix_zero(minutes) + ":" + prefix_zero(seconds);
// If the hours are less than 0, then show merely "00:00:00"
// We do check, because otherwise, when the timer runs out
// it may appear with negative values, like this  -01:-23:-23
				if(hours_left < 0){
						show_timer = "00:00:00";
					}	
// Display the countdown timer.
					js_timer.innerHTML = show_timer;
// Call the function, by itself, again every second.
						setTimeout(countdown_timer, 1000);

				}	
// Call the function initially when the page is loaded.
				window.onload = countdown_timer;

//  ♫ This is where the story ends, this is goodbye ♫ //
// EOF // 