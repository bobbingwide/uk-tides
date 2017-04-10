# uk-tides 
![banner](https://raw.githubusercontent.com/bobbingwide/uk-tides/master/assets/uk-tides-banner-772x250.jpg)
* Contributors: bobbingwide, vsgloik
* Donate link: https://www.oik-plugins.com/oik/oik-donate/
* Tags: shortcode, tides, UK, heights, times
* Requires at least: 3.9
* Tested up to: 4.7.3
* Stable tag: 1.6.4
* License: GPLv2 or later
* License URI: http://www.gnu.org/licenses/gpl-2.0.html

Tide heights and times for UK ports and harbours

## Description 
uk-tides displays tide times and heights for a particular location in the UK.
The information that is displayed is obtained from the RSS feed for tidetimes.org.uk (e.g. https://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss )
or tidetimes.co.uk ( e.g https://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times ).
The data is cached until midnight. This plugin implements a lazy smart shortcode using the API provided by the oik plugin.

You implement this on your website using the [bw_tides] shortcode.

The syntax is:

[bw_tides
tideurl="https://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss|other - RSS feed URL for location"
store="1|store key - unique key for caching result"]


Examples:
 [bw_tides] with no parameters will display the tide times and heights for Chichester Harbour Entrance. The information will be cached in store=1 until midnight.

 [bw_tides store=bw_tides_pompey tideurl="https://www.tidetimes.org.uk/portsmouth"] will display the tide times and heights obtained from
 https://www.tidetimes.org.uk/portsmouth-tide-times.rss and cache the result in a store named 'bw_tides_pompey'

*  Note: Using the store parameter allows you to display tide time and height information for more than one location.

Examples:
 If you prefer you can use tidetimes.co.uk as the source for tidal information.

 [bw_tides tideurl="https://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times"]


## Frequently Asked Questions 

# Installation 
1. Upload the contents of the uk-tides plugin to the `/wp-content/plugins/uk-tides' directory
1. Activate the uk-tides plugin through the 'Plugins' menu in WordPress
1. Whenever you want to produce UK Tide times and heights for the current date use the [bw_tides] shortcode.

* Note: uk-tides is dependent upon the oik plugin. You can activate it but it will not work unless oik is also activated.
Download oik from [oik download](https://wordpress.org/plugins/oik/)

# How do I find the value for tideurl? 

* Visit www.tidetimes.org.uk,
* click on the location of your choice,
* click on the RSS feed icon,
* copy the URL from the feed

e.g. for Brighton Marina the value for tideurl is https://www.tidetimes.org.uk/brighton-marina-tide-times.rss

OR

* Visit www.tidetimes.co.uk,
* click on the location of your choice,
* click on the RSS feed icon,
* copy the URL from the feed
e.g. for Brighton Marina the balue for tideurl is https://www.tidetimes.co.uk/rss/brighton-marina-tide-times


# Doesn't [bw_tides] already exist in oik? 
Not anymore. It was disabled in oik version 1.11

# What if I don't live in the UK? 

uk-tides currently only works for the UK and Ireland since the information is obtained from https://www.tidetimes.org.uk or https://www.tidetimes.co.uk
If you can point us to a resource for other locations then it should be possible to develop a very similar solution.

For saltwater tide times and heights for the US see [US-tides WordPress plugin](https://www.oik-plugins.com/oik-plugins/us-tides)

# Isn't there some JavaScript that does something similar? 
Yes. See https://www.tidetimes.org.uk/widgets or https://www.tidetimes.co.uk/widgets

You may find the output harder to (re)style.

# Further reading 
If you want to read more about the oik plugins then please visit the
[oik plugin](https://www.oik-plugins.com/oik) **"OIK - OIK Information Kit"**


## Screenshots 
1. Sample output for Portsmouth, Hants - from tidetimes.org.uk
2. Sample output for Portsmouth, Hants - from tidetimes.co.uk

## Upgrade Notice 
# 1.6.4 
Tested with WordPress 4.7.3. Tested with PHP 7.1

# 1.6.3 
Tested with WordPress 4.6.1. Should not crash if oik is not active processing 'oik_add_shortcodes'

# 1.6.2 
Tested with WordPress 4.4.2. Should not crash when tracing is active.

# 1.6.1 
Tested with WordPress 4.4. Now dependent upon oik v2.5 or higher.

# 1.6 
Improved support for styling with CSS

# 1.5 
Now works with tidetimes.co.uk. Now dependent upon oik v2.3 or higher.

# 1.4 
Now dependent upon oik v2.2 or higher. Tested with WordPress 4.0

# 1.3 
Now dependent upon oik v2.1 or higher. Tested with WordPress 3.9

# 1.2 
Still dependent upon oik v1.17 or higher

# 1.1 
Now dependent upon oik v1.17 or higher

## Changelog 
# 1.6.4 
* Changed: Further improve ability to style the output of the bw_tides shortcode,https://github.com/bobbingwide/uk-tides/issues/5
* Changed: Now depends on oik v3.1 or higher
* Tested: With WordPress 4.7.3 and WordPress Multisite
* Tested: With PHP 7.1

# 1.6.3 
* Fixed: Avoid Fatal errors when oik not activated processing 'oik_add_shortcodes' action https://github.com/bobbingwide/uk-tides/issues/2
* Tested: With WordPress 4.6.1
* Tested: Compatability with oik up to 3.0.3

# 1.6.2 
* Fixed: Uncaught exception 'Serialization of 'SimpleXMLElement' when tracing	GitHub Issue 1

# 1.6.1 
* Changed: Updated oik-activation logic
* Changed: Now dependent upon oik v2.5 or higher
* Tested: With WordPress 4.4

# 1.6 
* Added: force=true parameter to force data refresh
* Changed: Improved support for styling with CSS
* Changed: better support for tidetimes.co.uk feed
* Changed: store= parameter now also used as a CSS class for the outer span
* Tested: With WordPress 4.1 and WordPress Multi Site

# 1.5 
* Changed: Added initial support for tidetimes.co.uk - slightly different output
* Tested: With WordPress 4.1-beta2 and WordPress Multi Site

# 1.4 
* Changed: Now dependent upon oik v2.2 or higher
* Tested: With WordPress 4.0 and WordPress Multi Site

# 1.3 
* Tested: With WordPress 3.8.1
* Changed: Plugin dependency checking

# 1.2 
* Tested: With WordPress 3.8
* Changed: Minor changes for improved API documentation

# 1.1 
* Changed: The generated output is formatted with divs and spans to enable styling with CSS

# 1.0 
* initial version. Works with oik version 1.11







