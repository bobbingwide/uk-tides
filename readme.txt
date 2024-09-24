=== uk-tides ===
Contributors: bobbingwide, vsgloik
Donate link: https://www.oik-plugins.com/oik/oik-donate/
Tags: block, shortcode, tide-times, UK, heights
Requires at least: 5.0
Tested up to: 6.6.2
Stable tag: 3.3.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Gutenberg compatible: Yes

Tide heights and times for UK ports and harbours

== Description ==
uk-tides displays tide times and heights for a particular location in the UK.
The information that is displayed is obtained from the RSS feed for tidetimes.org.uk (eg https://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss )
or tidetimes.co.uk ( eg https://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times ).
The data is cached until midnight.

This plugin implements a block called UK tides ( uk-tides/uk-tides ).

- It's much easier to use than the shortcode.
- It uses the functionality that was previously implemented as the [bw_tides] shortcode.
- The block is not dependent upon the oik plugin.


The syntax for the [bw_tides] shortcode is:

[bw_tides
tideurl="https://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss|other - RSS feed URL for location"
store="1|store key - unique key for caching result"]


Examples:
 [bw_tides] with no parameters will display the tide times and heights for Chichester Harbour Entrance. The information will be cached in store=1 until midnight.

 [bw_tides store=bw_tides_pompey tideurl="https://www.tidetimes.org.uk/portsmouth"] will display the tide times and heights obtained from
 https://www.tidetimes.org.uk/portsmouth-tide-times.rss and cache the result in a store named 'bw_tides_pompey'

 Note: Using the store parameter allows you to display tide time and height information for more than one location.

Examples:
 If you prefer you can use tidetimes.co.uk as the source for tidal information.

 [bw_tides tideurl="https://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times"]


== Frequently Asked Questions ==

= Installation =
1. Upload the contents of the uk-tides plugin to the `/wp-content/plugins/uk-tides' directory
1. Activate the uk-tides plugin through the 'Plugins' menu in WordPress
1. Whenever you want to produce UK Tide times and heights for the current date use the UK tides block.


= How do I find the value for tideurl? =
Note: This is not necessary when you use the block, the tideurl is automatically created based on your selection of Site and Port.

* Visit www.tidetimes.org.uk,
* click on the location of your choice,
* click on the RSS feed icon,
* copy the URL from the feed

eg for Brighton Marina the value for tideurl is https://www.tidetimes.org.uk/brighton-marina-tide-times.rss

OR

* Visit www.tidetimes.co.uk,
* click on the location of your choice,
* click on the RSS feed icon,
* copy the URL from the feed
eg for Brighton Marina the value for tideurl is https://www.tidetimes.co.uk/rss/brighton-marina-tide-times


= What if I don't live in the UK? =

uk-tides currently only works for the UK and Ireland since the information is obtained from https://www.tidetimes.org.uk or https://www.tidetimes.co.uk
If you can point us to a resource for other locations then it should be possible to develop a very similar solution.

= Isn't there some JavaScript that does something similar? =
Yes. See https://www.tidetimes.org.uk/widgets or https://www.tidetimes.co.uk/widgets

You may find the output harder to (re)style.

= Further reading =
If you want to read more about the oik plugins then please visit the
[oik plugin](https://www.oik-plugins.com/oik) **"OIK - OIK Information Kit"**


== Screenshots ==
1. Example UK tides block - for Chichester Harbour (Entrance) from tidetimes.org.uk
2. Sample output for Portsmouth, Hants - from tidetimes.org.uk
3. Sample output for Portsmouth, Hants - from tidetimes.co.uk

== Upgrade Notice ==
= 3.3.1 =
Update for 

== Changelog ==
= 3.3.1 =
* Changed: Updated wp-scripts #29
* Changed: Remove dependency on bobbfunc's ep() #28
* Tested: With WordPress 6.6.2 and WordPress Multisite
* Tested: With Gutenberg 19.1.0
* Tested: With PHP 8.3
* Tested: With PHPUnit 9.6
