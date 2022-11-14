<?php
/*

    Copyright 2011 - 2017 Bobbing Wide (email : herb@bobbingwide.com )

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License version 2,
    as published by the Free Software Foundation.

    You may NOT assume that you can use any other version of the GPL.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    The license for this software can likely be found here:
    http://www.gnu.org/licenses/gpl-2.0.html

*/


/**
 * Gets tide information from the $tide_url
 *
 *
 * Note: There is limited error checking here.
 * It can fail for many reasons but it will produce messages when it happens.
 * These are suppressed by the @ but can be logged by error handlers
 * The most likely causes of failure are:
 *
 * - $tide_url is not a valid RSS feed - see bw_tideurl_namify()
 * - server is not connected to the internet
 * - https://www.tidetimes.org.uk is not responding
 * - https://www.tidetimes.co.uk is not responding
 *
 * @param string $tide_url - the RSS feed for the desired location
 * @return string | null - the response XML
 */
function bw_get_tide_info( $tide_url ) {
  //$request_url = urlencode( $tide_url );
	$request_url = $tide_url;
	$response = @file_get_contents( $request_url, false );
  bw_trace2( $response, "response" );
  if ( false === $response ){
  	$response_xml = null;
  } else {
	$response_xml = simplexml_load_string( $response );
  }
  //$response_xml = simplexml_load_file( $request_url );
	bw_trace2( (string) $response_xml, "response_xml", true, BW_TRACE_DEBUG );
  return $response_xml;
}

/**
 * Obtain tide information using the shortcode [bw_tides tide_url='tide feed xml url']
 * The format of the feed from tidetimes.org.uk is expected to be as in the following output from bw_trace


`
C:\apache\htdocs\wordpress\wp-content\plugins\oik\oik-tides.php(45:0) 2011-04-29T12:11:51+00:00 bw_get_tide_info  response_xml SimpleXMLElement Object
(
    [@attributes] => Array
        (
            [version] => 2.0
        )

    [channel] => SimpleXMLElement Object
        (
            [title] => Chichester Harbour Tide Times
            [link] => http://www.tidetimes.org.uk/Chichester_Harbour.html
            [description] => Chichester Harbour tide times.
            [lastBuildDate] => Fri, 29 Apr 2011 00:25:00 GMT
            [language] => en-gb
            [item] => SimpleXMLElement Object
                (
                    [title] => Chichester Harbour tide times for 29th April 2011
                    [link] => http://www.tidetimes.org.uk/Chichester_Harbour.html
                    [guid] => http://www.tidetimes.org.uk/Chichester_Harbour.html
                    [pubDate] => Fri, 29 Apr 2011 00:25:00 GMT
                    [description] => Tide times and height information for<br/>Chichester Harbour on 29th April 2011.<br/><br/>01:58 - Low Tide, 1.6m<br/>09:14 - High Tide, 3.9m<br/>14:17 - Low Tide, 1.5m<br/>21:36 - High Tide, 4.2m<br/><br/>
                )

        )

)
`

as of 4th May 2011 the tideinfo->channel->item->description appeared to have additional Google Ad stuff

`
C:\apache\htdocs\wordpress\wp-content\plugins\oik\oik-tides.php(45:0) 2011-05-04T03:17:51+00:00 bw_get_tide_info  response_xml SimpleXMLElement Object
(
    [@attributes] => Array
        (
            [version] => 2.0
        )

    [channel] => SimpleXMLElement Object
        (
            [title] => Chichester Harbour Tide Times
            [link] => http://www.tidetimes.org.uk/Chichester_Harbour.html
            [description] => Chichester Harbour tide times.
            [lastBuildDate] => Tue, 3 May 2011 00:08:00 GMT
            [language] => en-gb
            [item] => SimpleXMLElement Object
                (
                    [title] => Chichester Harbour Tide Times for 4th May 2011
                    [link] => http://www.tidetimes.org.uk/Chichester_Harbour.html
                    [guid] => http://www.tidetimes.org.uk/Chichester_Harbour.html
                    [pubDate] => Tue, 3 May 2011 00:08:00 GMT
                    [description] => <b>Chichester Harbour Tide Times:</b><br/>High Tides: 00:50 (4.50m), 13:13 (4.50m)<br/>Low Tides: 06:06 (1.00m), 18:18 (1.20m).<br/><a href="http://www.tidetimes.org.uk/Chichester_Harbour.html" title="Chichester Harbour Tide Times">http://www.tidetimes.org.uk/Chichester_Harbour.html</a><br/><br/><script type="text/javascript"> google_ad_client = "ca-pub-4314088479570355"; google_ad_slot = "4669933729"; google_ad_width = 234; google_ad_height = 60; </script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
                )

        )

)
`

from 28th October 2011 (first noticed) it changed again. The description was already formatted.

`
C:\apache\htdocs\wordpress\wp-content\plugins\oik\oik-tides.php(44:0) 2011-10-29T16:49:09+00:00 54 bw_get_tide_info response_xml SimpleXMLElement Object
(
    [@attributes] => Array
        (
            [version] => 2.0
        )

    [channel] => SimpleXMLElement Object
        (
            [title] => Chichester Harbour (Entrance) Tide Times
            [link] => http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times
            [description] => Chichester Harbour (Entrance) tide times.
            [lastBuildDate] => Sat, 29 Oct 2011 00:00:00 BST
            [language] => en-gb
            [item] => SimpleXMLElement Object
                (
                    [title] => Chichester Harbour (Entrance) Tide Times for 29th October 2011
                    [link] => http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times
                    [guid] => http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times
                    [pubDate] => Sat, 29 Oct 2011 00:00:00 BST
                    [description] => <a href="http://www.tidetimes.org.uk" title="Tide Times">Tide Times</a> & Heights for<br/><a href="http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times" title="Chichester Harbour (Entrance) tide times">Chichester Harbour (Entrance)</a> on 29th October 2011<br/><br/>01:18 - High Tide (5.00m)<br/>06:40 - Low Tide (0.70m)<br/>13:38 - High Tide (5.00m)<br/>19:03 - Low Tide (0.70m)<br/>
                )

        )

)
`
from Feb 2012 - I've been reliably informed that the tide_url should be hyphenated and end with -tide-times.rss
so it should be easy to construct a valid tide url if we want to


Latest version
`
bw_get_tide_info(2) response_xml SimpleXMLElement Object
(
    [@attributes] => Array
        (
            [version] => 2.0
        )

    [channel] => SimpleXMLElement Object
        (
            [title] => Portsmouth Tide Times
            [link] => http://www.tidetimes.org.uk/portsmouth-tide-times
            [description] => Portsmouth tide times.
            [lastBuildDate] => Thu, 18 Dec 2014 00:00:00 GMT
            [language] => en-gb
            [item] => SimpleXMLElement Object
                (
                    [title] => Portsmouth Tide Times for 18th December 2014
                    [link] => http://www.tidetimes.org.uk/portsmouth-tide-times
                    [guid] => http://www.tidetimes.org.uk/portsmouth-tide-times
                    [pubDate] => Thu, 18 Dec 2014 00:00:00 GMT
                    [description] => <a href="http://www.tidetimes.org.uk" title="Tide Times">Tide Times</a> & Heights for<br/><a href="http://www.tidetimes.org.uk/portsmouth-tide-times" title="Portsmouth tide times">Portsmouth</a> on 18th December 2014<br/><br/>01:06 - Low Tide (1.80m)<br/>08:25 - High Tide (4.20m)<br/>13:37 - Low Tide (1.70m)<br/>20:57 - High Tide (4.10m)<br/>
                )

        )

)
`


The content of the feed from tidetimes.co.uk is expected to be in the following format
`
bw_get_tide_info(4) response_xml SimpleXMLElement Object
(
    [@attributes] => Array
        (
            [version] => 2.0
        )

    [channel] => SimpleXMLElement Object
        (
            [title] => Portsmouth Tide Times
            [link] => http://www.tidetimes.co.uk/portsmouth-tide-times
            [description] => Portsmouth tide times
            [lastBuildDate] => Thu, 18 Dec 2014 00:00:00 +0000
            [language] => en-gb
            [item] => SimpleXMLElement Object
                (
                    [title] => Portsmouth Tide Times for Thursday, 18 December 2014
                    [link] => http://www.tidetimes.co.uk/portsmouth-tide-times
                    [guid] => http://www.tidetimes.co.uk/portsmouth-tide-times
                    [pubDate] => Thu, 18 Dec 2014 00:00:00 +0000
                    [description] => <a href="http://www.tidetimes.co.uk" title="Tide Times">Tide Times</a> & Heights for <a href="http://www.tidetimes.co.uk/portsmouth-tide-times" title="Portsmouth tide times">Portsmouth</a> on Thursday, 18 December 2014<br/>Low Tide: 01:06 (1.80m)<br/>High Tide: 08:25 (4.20m)<br/>Low Tide: 13:37 (1.70m)<br/>High Tide: 20:57 (4.10m)<br/>
                )

        )

)
`

*/

/**
 * Return the time of day in seconds
 *
 * @return $secs - time in seconds
 */
function bw_time_of_day_secs() {
  extract( localtime( time(), true ));
  $secs = ((($tm_hour * 60) + $tm_min) * 60) + $tm_sec;
  bw_trace2( $secs, 'secs', false, BW_TRACE_DEBUG );
  return( $secs );
}

/**
 * Form an URL for the given location assuming UK based
 *
 * Cater for different hosts.
 *
 * Starting with a $tideurl that is expected to contain `http://domain/port`
 * we're trying to create something like this:
 *
 * domain | format
 * ------ | -----------------------------------
 * tidetimes.org.uk | domain/port-tide-times.rss
 * tidetimes.co.uk  | domain/rss/port-tide-times
 *
 * @param string $tideurl user input
 * @return string $newurl - URL to use for the RSS feed
 */
function bw_tideurl_namify( $tideurl ) {
  $newurl = strtolower( $tideurl );
  $newurl = str_replace( "_", "-", $newurl );
  $newurl = str_replace( " ", "-", $newurl );
  $newurl = str_replace( ".rss", "", $newurl );
  if ( false === strpos( $newurl, "-tide-times" ) )  {
    $newurl .= "-tide-times";
  }
  $dotorguk = false !== strpos( $newurl, ".org.uk" );
  if ( $dotorguk ) {
    $newurl .= ".rss";
  } else {
    if ( false === strpos( $newurl, "/rss/" ) ) {
      $newurl = str_replace( ".co.uk/", ".co.uk/rss/", $newurl );
    }
  }
  return $newurl;
}

/**
 * Format the description
 *
 * The string returned from tidetimes.org IS OK but it's not easy to style the output
 * SO we'll change the <br/>s to <div>s and wrap the other stuff in spans
 * `
   <a href="http://www.tidetimes.org.uk" title="Tide Times">Tide Times</a>& Heights for
   <a href="http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times" title="Chichester Harbour (Entrance) tide times">Chichester Harbour (Entrance)</a> on 29th October 2011
   <br/>
   <br/>01:18 - High Tide (5.00m)
   <br/>06:40 - Low Tide (0.70m)
   <br/>13:38 - High Tide (5.00m)
   <br/>19:03 - Low Tide (0.70m)
   <br/>

	 `


	 `
	 <a href="http://www.tidetimes.co.uk" title="Tide Times">Tide Times</a> &amp; Heights for
	 <a href="http://www.tidetimes.co.uk/portsmouth-tide-times" title="Portsmouth tide times">Portsmouth</a> on Thursday, 06 April 2017
	 <br/>Low Tide: 01:32 (1.80m)
	 <br/>High Tide: 08:29 (4.00m)
	 <br/>Low Tide: 14:03 (1.50m)
	 <br/>High Tide: 21:13 (4.10m)
	 <br/>
	 `
 *
 * @param string $desc description
 */
function bw_tides_format_desc( $desc ) {
 $desc = wp_unslash( $desc );
 $desc = str_replace( " on", " on<br />", $desc );
  $descs = explode( "<br/>", $desc );
  bw_trace2( $descs, "descs array", false, BW_TRACE_DEBUG );
  foreach ( $descs as $key => $stuff ) {
    sdiv( "bw_tides_$key" );
    bw_tides_format_stuff( $stuff );
    ediv();
  }
}

/**
 * Reformat the content into a series of spans
 *
 * - Processing depends on the source ( tidetimes.org.uk or tidetimes.co.uk )
 * - We check the first character.
 *
 * first char | Example                  | Means
 * ---------- | ------------------------ | -------------------------------
 * numeric    | 01:06 - Low Tide (1.80m) | time and height data from .org.uk
 * L          | Low Tide: 01:06 (1.80m)  | Low tide from .co.uk
 * H          | High Tide: 08:25 (4.20m) | High tide from .co.uk
 * <          | <a ...>lt1</a> plt1      | See bw_tides_format_links()
 * other      |                          | Anything else we don't split
 *
 *
 * @param string $stuff - the next line to be reformatted
 */
function bw_tides_format_stuff( $stuff ) {
  $ch = substr( $stuff, 0, 1 );
  if ( is_numeric( $ch ) || $ch == "L" || $ch == "H" ) {
    $stuff = str_replace( "(", "( ", $stuff );
    $stuff = str_replace( ")", " )", $stuff );
    $stuffs = explode( " ", $stuff );
    foreach ( $stuffs as $key => $sp ) {
      sepan( "bw_tides_$key", $sp );
      e( " " );
    }
	} elseif ( $ch == "<" ) {
		bw_tides_format_links( $stuff );
	} else {
    e( $stuff );
  }
}

/**
 * Reformats the links line
 *
 * Puts some spans in the parts of the text which aren't inside anchor tags.
 * e.g.
 * `
 * <a ...>lt1</a> plt1 <a ...>lt2</a> plt2
 * `
 * becomes
 * `
 * <a ...>lt1</a><span> plt1 </span><a ...>lt2</a><span> plt2</span>
 * `
 *
 * This allows each span to be styled.
 *
 * @param string $stuff
 */
function bw_tides_format_links( $stuff ) {
	$stuff = str_replace( "> ", "><span> ", $stuff );
	$stuff = str_replace( " <", " </span><", $stuff );
	$stuff .= "</span>";
	e( $stuff );
}

/**
 * Return a CSS class name for the given value
 *
 * The default value for $store ( 1 ) is not a valid CSS class name
 * We prefix "bw" to any store value which doesn't start with an alpha character
 * Currently we don't care about the rest
 *
 * http://stackoverflow.com/questions/448981/what-characters-are-valid-in-css-class-selectors
 *
 * @param string $value
 * @return string - a CSS class name
 *
 */
if ( !function_exists( "bw_get_css_classname" ) ) {
function bw_get_css_classname( $value ) {
  $css_class = $value;
  $ch = substr( $css_class, 0, 1 );
  if ( !ctype_alpha( $ch ) ) {
    $css_class = "bw" . $css_class;
  }
  return( $css_class );
}
}

/**
 * Implement [bw_tides] shortcode for UK-tides
 *
 * Display information about high and low tides obtained from www.tidetimes.org.uk or www.tidetimes.co.uk
 *
 * The data is stored as transient data until midnight, after which we expect new figures for the next day.
 * If the site is going to display more than one set of tide information then you will need to indicate
 * a special code for storing the information. I would have liked to have extracted the location from the
 * tideurl but got distracted with set_transient crashing when passed a SimpleXML object.
 *
 * @param array $atts - shortcode parameters
 * @param string $content - not expected
 * @param string $tag - the shortcode
 * @return string - the generated HTML
 */
function bw_tides( $atts=null, $content=null, $tag=null ) {

  $tideurl = bw_array_get( $atts, "tideurl", "http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss" );
  $tideurl = bw_tideurl_namify( $tideurl );
  $store = bw_array_get( $atts, "store", "1" );
  $force = bw_array_get( $atts, "force", null );

  bw_trace2( $tideurl, 'tideurl', true, BW_TRACE_DEBUG );
  bw_trace2( $store, 'store', false, BW_TRACE_VERBOSE );

  $desc = get_transient( 'bw_tides_desc_'. $store );
  $title = get_transient( 'bw_tides_title_'. $store );
  $link = get_transient( 'bw_tides_link_'. $store );

  if ( $desc === FALSE || $title === FALSE || $link === FALSE || $force   ) {
    $tideinfo = bw_get_tide_info( $tideurl );

    if ( is_wp_error( $tideinfo ) || !$tideinfo ||  !$tideinfo->channel ) {
      p( "Tide times and heights not available for $tideurl" );
    } else {

      $channel = $tideinfo->channel;
      bw_trace2( (string) $channel, 'channel', false, BW_TRACE_DEBUG );
      $link = (string) $channel->link;

      /* cast to a string since otherwise there can be a problem with attempting to serialise a simpleXML element */
      $desc = (string) $channel->item->description;

      bw_trace2( $desc, 'desc', false, BW_TRACE_DEBUG );
      /* We may need to strip some unwanted advertising which appears in an anchor tag <a */
      /*
      $desc = preg_replace('/<a (.*?)<\/a>/', "\\2", $desc);
      $allowed = array( 'b' => array(),
                        'br' =>  array()
                      );
      $desc = wp_kses( $desc, $allowed );
      */
      $title = (string) $channel->item->title;
      // $title = $channel->item->title;   uncomment this to cause set_transient to fail

      $secs = bw_time_of_day_secs();
      $secs = 86400 - $secs;
      set_transient( "bw_tides_desc_" . $store, $desc, $secs);
      set_transient( "bw_tides_title_" . $store, $title, $secs);
      set_transient( "bw_tides_link_" . $store, $link, $secs);
    }
  }
  else {
     // We got all the data from the transient store
  }

  bw_trace2( $desc, 'desc', false, BW_TRACE_DEBUG );
  bw_trace2( $title, 'title', false, BW_TRACE_DEBUG );
  bw_trace2( $link, 'link', false, BW_TRACE_DEBUG );

  // Now that tidetimes.org.uk creates the links itself we only need to display the informaton in span
  // with class tides, to allow for custom CSS styling
  //alink( "tides", $link , $desc , $title );
  $css_class = bw_get_css_classname( $store );
  span( "bw_tides $css_class" );
  bw_tides_format_desc( $desc );
  epan( "bw_tides" );
  return( bw_ret());
}

function bw_tides__help( $shortcode='bw_tides' ) {
  return( "Display times and tides for a UK location" );
}

function bw_tides__syntax( $shortcode='bw_tides' ) {
  $syntax = array( "tideurl" => bw_skv( "http://www.tidetimes.org.uk/chichester-harbour-entrance-tide-times.rss", "other", "RSS feed URL for location" )
                 , "store" => bw_skv( "1", "store key", "unique key for caching result" )
                 , "force" => bw_skv( null, "true", "force loading from the feed" )
                 );
  return( $syntax );
}

function bw_tides__example( $shortcode='bw_tides' ) {
  p( "Display tide times and heights for a particular location in the UK. " );
  $atts = array( "store" => "bw_tides_pompey1"
               , "tideurl" => "http://www.tidetimes.org.uk/portsmouth" );
  e( bw_tides( $atts ) );
  $link = retlink( NULL, "http://www.tidetimes.org.uk", "Tide Times .org.uk" );
  p( "The information displayed comes from $link" );
  $atts = array( "store" => "bw_tides_pompey2"
               , "tideurl" => "http://www.tidetimes.co.uk/rss/portsmouth" );
  e( bw_tides( $atts ) );
  $link = retlink( NULL, "http://www.tidetimes.co.uk", "Tide Times .co.uk" );
  p( "The information displayed comes from $link" );
}
