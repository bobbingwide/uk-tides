=== uk-tides ===
Contributors: bobbingwide, vsgloik
Donate link: http://www.oik-plugins.com/oik/oik-donate/
Tags: shortcode, tides, UK, heights and times, [bw_tides], saltwater
Requires at least: 3.9
Tested up to: 4.1
Stable tag: 1.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Tide heights and times for UK ports and harbours

== Description ==
uk-tides displays tide times and heights for a particular location in the UK. 
The information that is displayed is obtained from the RSS feed for tidetimes.org.uk (e.g. http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss )
or tidetimes.co.uk ( e.g http://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times ). 
The data is cached until midnight. This plugin implements a lazy smart shortcode using the API provided by the oik plugin. 

You implement this on your website using the [bw_tides] shortcode.

The syntax is:
  
[bw_tides
tideurl="http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss|other - RSS feed URL for location"
store="1|store key - unique key for caching result"]


Examples:
 [bw_tides] with no parameters will display the tide times and heights for Chichester Harbour Entrance. The information will be cached in store=1 until midnight.
 
 [bw_tides store=bw_tides_pompey tideurl="http://www.tidetimes.org.uk/portsmouth"] will display the tide times and heights obtained from
 http://www.tidetimes.org.uk/portsmouth-tide-times.rss and cache the result in a store named 'bw_tides_pompey'
 
 Note: Using the store parameter allows you to display tide time and height information for more than one location.
 
Examples:
 If you prefer you can use tidetimes.co.uk as the source for tidal information.
 
 [bw_tides tideurl="http://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times"]
 

== Installation ==
1. Upload the contents of the uk-tides plugin to the `/wp-content/plugins/uk-tides' directory
1. Activate the uk-tides plugin through the 'Plugins' menu in WordPress
1. Whenever you want to produce some 'uk-tides'ed text use the [uk-tides] shortcode.

Note: uk-tides is dependent upon the oik plugin. You can activate it but it will not work unless oik is also activated.
Download oik from 
[oik download](http://wordpress.org/extend/plugins/oik/)

== Frequently Asked Questions ==
= How do I find the value for tideurl? =

* Visit www.tidetimes.org.uk, 
* click on the location of your choice, 
* click on the RSS feed icon, 
* copy the URL from the feed

e.g. for Brighton Marina the value for tideurl is http://www.tidetimes.org.uk/brighton-marina-tide-times.rss

OR
* Visit www.tidetimes.co.uk, 
* click on the location of your choice,
* click on the RSS feed icon, 
* copy the URL from the feed


= Doesn't [bw_tides] already exist in oik? =
Not anymore. It was disabled in oik version 1.11

= What if I don't live in the UK? =
uk-tides currently only works for the UK and Ireland since the information is obtained from http://www.tidetimes.org.uk
If you can point us to a resource for other locations then it should be possible to develop a very similar solution.

For saltwater tide times and heights for the US see [US-tides WordPress plugin](http://www.oik-plugins.com/oik-plugins/us-tides)

= Isn't there some JavaScript that does something similar? =
YES. See http://www.tidetimes.org.uk/widgets
But you may find the output harder to (re)style.


== Screenshots ==
1. sample output for Portsmouth, Hants - from tidetimes.org.uk
2. sample output for Portsmouth, Hants - from tidetimes.co.uk

== Upgrade Notice ==
= 1.6 =
Improved support for styling with CSS

= 1.5 = 
Now works with tidetimes.co.uk. Now dependent upon oik v2.3 or higher.

= 1.4 =
Now dependent upon oik v2.2 or higher. Tested with WordPress 4.0 

= 1.3 = 
Now dependent upon oik v2.1 or higher. Tested with WordPress 3.9

= 1.2 =
Still dependent upon oik v1.17 or higher

= 1.1 =
Now dependent upon oik v1.17 or higher

== Changelog ==
= 1.6 = 
* Added: force=true parameter to force data refresh
* Changed: Improved support for styling with CSS
* Changed: better support for tidetimes.co.uk feed
* Changed: store= parameter now also used as a CSS class for the outer span
* Tested: With WordPress 4.1 and WordPress Multi Site

= 1.5 = 
* Changed: Added initial support for tidetimes.co.uk - slightly different output
* Tested: With WordPress 4.1-beta2 and WordPress Multi Site

= 1.4 =
* Changed: Now dependent upon oik v2.2 or higher
* Tested: With WordPress 4.0 and WordPress Multi Site

= 1.3 =
* Tested: With WordPress 3.8.1 
* Changed: Plugin dependency checking

= 1.2 =
* Tested: With WordPress 3.8
* Changed: Minor changes for improved API documentation

= 1.1 =
* Changed: The generated output is formatted with divs and spans to enable styling with CSS

= 1.0 =
* initial version. Works with oik version 1.11 


== Further reading ==
If you want to read more about the oik plugins then please visit the
[oik plugin](http://www.oik-plugins.com/oik) 
**"OIK - OIK Information Kit"**






