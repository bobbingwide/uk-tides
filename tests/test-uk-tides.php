<?php // (C) Copyright Bobbing Wide 2017

/**
 * @package oik
 * 
 * Test issue #71
 */
class Tests_uk_tides extends BW_UnitTestCase {

	function setUp() {
		parent::setUp();
		oik_require( "shortcodes/uk-tides.php", "uk-tides" );
	}
	
	/**
	 * Creates stream context
	 *
	 * If running Apache locally and you don't have cacert.pem correctly configured
	 * one way of avoiding a variety of Warnings from simplexml_load_file() or file_get_contents() 
	 * is to create a stream context resource that disables SSL verification.
	 */
	function stream_context() {
		$arrContextOptions = array( "ssl" => array ( "verify_peer" => false, "verify_peer_name" => false ) );
		$context = stream_context_create( $arrContextOptions ); 
    return $context;
  }
	
	/**
	 * Tests that simplexml_load_file actually works
	 */
	function test_simplexml_load_file() {
		$url = "https://tidetimes.co.uk/rss/portsmouth-tide-times";
		$request_url = urlencode( $url );
		$response = simplexml_load_file( $url );
		//print_r( $response );
		$this->assertInstanceOf( SimpleXMLElement::class, $response );
		
	}
	
	
	function test_load_from_tidetimes_co_uk_https() {
		$url = "https://tidetimes.co.uk/rss/portsmouth-tide-times";
		$context = $this->stream_context();
		$file = file_get_contents( $url, false, $context );
		$expected = "<rss version";
		$this->assertContains( $expected, $file );
	}
	
	
	function test_load_from_tidetimes_co_uk_http() {
		$url = "http://tidetimes.co.uk/rss/portsmouth-tide-times";
		
		$context = $this->stream_context();
		$file = file_get_contents( $url, false, $context );
		$expected = "<rss version";
		$this->assertContains( $expected, $file );
	}
	
	/**
	 * 01:18 - High Tide (5.00m)
	 */
	
	function test_bw_tides_format_stuff() {
		$input = "01:18 - High Tide (5.00m)"; 
		bw_tides_format_stuff( $input );
		$output = bw_ret();
		$expected_output = '<span class="bw_tides_0">01:18</span> <span class="bw_tides_1">-</span> <span class="bw_tides_2">High</span> <span class="bw_tides_3">Tide</span> <span class="bw_tides_4">(</span> <span class="bw_tides_5">5.00m</span> <span class="bw_tides_6">)</span> ';
		$this->assertEquals( $expected_output, $output );
	
	}
	
	function test_bw_tides_format_stuff_div_0() {
		$input = '<a href="http://www.tidetimes.co.uk" title="Tide Times">Tide Times</a> &amp; Heights for ';
		$input .= '<a href="http://www.tidetimes.co.uk/portsmouth-tide-times" title="Portsmouth tide times">Portsmouth</a> on Thursday, 06 April 2017';
		bw_tides_format_stuff( $input );
		$output = bw_ret();
		$expected_output = '<a href="http://www.tidetimes.co.uk" title="Tide Times">Tide Times</a><span> &amp; Heights for ';
		$expected_output .= '</span><a href="http://www.tidetimes.co.uk/portsmouth-tide-times" title="Portsmouth tide times">Portsmouth</a><span> on Thursday, 06 April 2017</span>';
		$this->assertEquals( $expected_output, $output );
	}
	
	
}
	
/** 
	
	
	+'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>Portsmouth Tide Times</title>
+    <link>http://www.tidetimes.co.uk/portsmouth-tide-times</link>
+    <description>Portsmouth tide times</description>
+    <lastBuildDate>Thu, 06 Apr 2017 00:00:00 +0100</lastBuildDate>
+    <language>en-gb</language>
+    <atom:link href="http://www.tidetimes.co.uk/rss/portsmouth-tide-times" rel="self" type="application/rss+xml"/>
+    <item>
+      <title>Portsmouth Tide Times for Thursday, 06 April 2017</title>
+      <link>http://www.tidetimes.co.uk/portsmouth-tide-times</link>
+      <guid>http://www.tidetimes.co.uk/portsmouth-tide-times</guid>
+      <pubDate>Thu, 06 Apr 2017 00:00:00 +0100</pubDate>
+      <description>&lt;a href="http://www.tidetimes.co.uk" title="Tide Times">Tide Times&lt;/a> &amp; Heights for &lt;a href="http://www.tidetimes.co.uk/portsmouth-tid
e-times" title="Portsmouth tide times">Portsmouth&lt;/a> on Thursday, 06 April 2017&lt;br/>Low Tide: 01:32 (1.80m)&lt;br/>High Tide: 08:29 (4.00m)&lt;br/>Low Tide: 14:0
3 (1.50m)&lt;br/>High Tide: 21:13 (4.10m)&lt;br/></description>
+    </item>
+  </channel>
+</rss>'
}

*/
