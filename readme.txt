=== uk-tides ===
Contributors: bobbingwide, vsgloik
Donate link: https://www.oik-plugins.com/oik/oik-donate/
Tags: block, shortcode, tides, UK, heights, times
Requires at least: 5.0
Tested up to: 6.0.1
Stable tag: 3.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Gutenberg compatible: Yes

Tide heights and times for UK ports and harbours

== Description ==
uk-tides displays tide times and heights for a particular location in the UK. 
The information that is displayed is obtained from the RSS feed for tidetimes.org.uk (e.g. https://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss )
or tidetimes.co.uk ( e.g https://www.tidetimes.co.uk/rss/chichester-harbour-entrance-tide-times ). 
The data is cached until midnight.

From version 2.0 this plugin implements a block called UK tides ( uk-tides/uk-tides ).

- It uses the functionality that was previously implemented as the [bw_tides] shortcode.
- The block is not dependent upon the oik plugin.

Before v2.0.0 it delivered a lazy smart shortcode using the API provided by the oik plugin.
You implement this on your website using the [bw_tides] shortcode.

The syntax for the shortcode is:
  
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

e.g. for Brighton Marina the value for tideurl is https://www.tidetimes.org.uk/brighton-marina-tide-times.rss

OR

* Visit www.tidetimes.co.uk, 
* click on the location of your choice,
* click on the RSS feed icon, 
* copy the URL from the feed
e.g. for Brighton Marina the value for tideurl is https://www.tidetimes.co.uk/rss/brighton-marina-tide-times


= Doesn't [bw_tides] already exist in oik? =
Not anymore. It was disabled in oik version 1.11

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
= 3.0.0 = 
Now supports color and typography settings. Tested with WordPress 5.8. 

= 2.1.0 = 
Tested with WordPress 5.7 & PHP 8.0

= 2.0.0 =
Update to UK Tides v2.0.0 for the new UK Tides block.

= 2.0.0-beta-20200109 = 
Now operates as a standalone plugin for both the block and the shortcode.

= 2.0.0-alpha-20200104 =
Now implemented as the UK tides block. The block is no longer dependent upon oik.

= 1.6.5 =
Upgrade for peaceful coexistence with Gutenberg / WordPress 5.0. Now depends on oik v3.2.8

= 1.6.4 = 
Tested with WordPress 4.7.3. Tested with PHP 7.1

= 1.6.3 =
Tested with WordPress 4.6.1. Should not crash if oik is not active processing 'oik_add_shortcodes'

= 1.6.2 =
Tested with WordPress 4.4.2. Should not crash when tracing is active.

= 1.6.1 = 
Tested with WordPress 4.4. Now dependent upon oik v2.5 or higher.

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
= 3.0.0 = 
* Fixed: Implement local workaround for missing space between on and Day #10
* Added: Add Server side support for rendering the block with colours and typography attributes #9
* Added: Add text align toolbar icon group; makes the block selectable #9
* Changed: Register block using block.json #9
* Changed: Move build/oik-uk-tides to src/oik-uk-tides. Refactor to import from packages #9
* Changed: Update package.json based on sb-starting-block and install @wordpress/scripts #9
* Changed: Remove files no longer needed by wp-scripts. Update .gitignore #9
* Tested: With WordPress 5.8 and WordPress Multi Site
* Tested: With Gutenberg 11.1.0
* Tested: With PHP 8.0

= 2.1.0 = 
* Changed: Updated for PHP 8.0 compatibility
* Tested: With WordPress 5.7 and WordPress Multi Site
* Tested: With PHP 8.0 and 7.4
* Tested: With Gutenberg 10.2.0
* Tested: With PHPUnit 9 

= 2.0.0 = 
* Changed: Reconcile shared libraries,[github bobbingwide uk-tides issues 7]
* Tested: With WordPress 5.3.2 and WordPress Multi Site
* Tested: With Gutenberg 7.3.0
* Tested: With PHP 7.3 and PHP 7.4
* Tested: With PHPUnit 8 

= 2.0.0-beta-20200109 = 
* Added: Add transform from oik-block/uk-tides to uk-tides/uk-tides
* Added: Add example for the uk-tides/uk-tides block
* Fixed: Default to chichester-harbour-entrance
* Changed: Remove dependency on oik for both the block and the shortcode.
* Changed: Support activation of oik v3.3.7 - pre libs/oik-shortcodes

= 2.0.0-alpha-20200104 =
* Added: uk-tides/uk-tides block,[github bobbingwide uk-tides issues 7]
* Tested: With WordPress 5.3.2 and WordPress Multi Site
* Tested: With PHP 7.3 and PHP 7.4
* Tested: With PHPUnit 8

= 1.6.5 =
* Changed: Now dependent upon oik v3.2.8, [github bobbingwide uk-tides issues 5]
* Fixed: Reduced display of PHP Warnings for invalid tideurl parameter, [github bobbingwide uk-tides issue 5] 
* Tested: With WordPress 5.0.1
* Tested: With Gutenberg 4.7.0
* Tested: With PHP 7.2

= 1.6.4 = 
* Changed: Further improve ability to style the output of the bw_tides shortcode,[github bobbingwide uk-tides issue 5]
* Changed: Now depends on oik v3.1 or higher
* Tested: With WordPress 4.7.3 and WordPress Multisite
* Tested: With PHP 7.1

= 1.6.3 = 
* Fixed: Avoid Fatal errors when oik not activated processing 'oik_add_shortcodes' action [github bobbingwide uk-tides issue 2]
* Tested: With WordPress 4.6.1
* Tested: Compatability with oik up to 3.0.3

= 1.6.2 = 
* Fixed: Uncaught exception 'Serialization of 'SimpleXMLElement' when tracing	GitHub Issue 1

= 1.6.1 =
* Changed: Updated oik-activation logic
* Changed: Now dependent upon oik v2.5 or higher
* Tested: With WordPress 4.4

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







