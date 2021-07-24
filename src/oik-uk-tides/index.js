/**
 * Implements UK tides as a server rendered block
 *
 * - Depends on uk-tides for server logic
 * - Supports easier to use parameter for source of tidal information ( Site )
 * - Supports easier to use parameter for specifying the location ( Port )
 * - Server side rendering when the block is not selected.
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2020
 * @author Herb Miller @bobbingwide
 */
//import './style.scss';
//import './editor.scss';

import { __ } from '@wordpress/i18n';

// Get registerBlockType from wp.blocks
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {
    Toolbar,
    PanelBody,
    PanelRow,
    FormToggle,
    TextControl,
    SelectControl } from '@wordpress/components';
import { Fragment} from '@wordpress/element';
import { map, partial } from 'lodash';

import metadata from '../../block.json';

/**
* These are the different options for the UK tides site attribute
*/
const siteOptions =
    { "org": "tidetimes.org.uk", // 709 as of Dec 2018
    "couk": "tidetimes.co.uk", //

    };
import portOptions from './tidetimes-co-uk.js';



/**
 * Register the WordPress block
 */
export default registerBlockType( metadata,
       {
		example: {
        },
        transforms: {
            from: [
                {
                    type: 'block',
                    blocks: ['oik-block/uk-tides'],
                    transform: function( attributes ) {
                        return createBlock( 'uk-tides/uk-tides', {
                            site: attributes.site,
                            port: attributes.port
                        });
                    },
                },
            ],
        },

        edit: props => {
            const onChangeSite =  ( event ) => {
                props.setAttributes( { site: event } );
            };
        /**
        * Attempt a generic function to apply a change
            * using the partial technique
            *
            * key needs to be in [] otherwise it becomes a literal
            *
            */
            //onChange={ partial( handleChange, 'someKey' ) }

            function onChangeAttr( key, value ) {
                //var nextAttributes = {};
                //nextAttributes[ key ] = value;
                //setAttributes( nextAttributes );
                props.setAttributes( { [key] : value } );
            };



            return (
                <Fragment>
                    <InspectorControls >
                        <PanelBody>
                            <PanelRow>
                                <SelectControl label="Site" value={props.attributes.site}
                                               options={ map( siteOptions, ( key, label ) => ( { value: label, label: key } ) ) }
                                               onChange={partial( onChangeAttr, 'site' )}
                                />

                            </PanelRow>

                            <PanelRow>
                                <SelectControl label="Port"
                                                   value={ props.attributes.port }
                                               options={ map( portOptions, (key, label ) => ( { value: label, label: key } ) ) }
                                             onChange={partial( onChangeAttr, 'port' )}
                                />

                            </PanelRow>
                            <PanelRow>

                            </PanelRow>
                        </PanelBody>

                    </InspectorControls>

                    <ServerSideRender
                        block="uk-tides/uk-tides" attributes={ props.attributes }
                    />
                </Fragment>

            );
        },


        save() {
            return null;
        },
    },
);
