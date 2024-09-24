/**
 * Implements UK tides as a server rendered block
 *
 * - Depends on uk-tides for server logic
 * - Supports easier to use parameter for source of tidal information ( Site )
 * - Supports easier to use parameter for specifying the location ( Port )
 * - Server side rendering when the block is not selected.
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2024
 * @author Herb Miller @bobbingwide
 */
//import './style.scss';
//import './editor.scss';

import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

// Get registerBlockType from wp.blocks
import { registerBlockType } from '@wordpress/blocks';
import {AlignmentControl, BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';
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

/**
* These are the different options for the UK tides site attribute
*/
const siteOptions =
    { "org": "tidetimes.org.uk", // 710 as of Nov 2022
    "couk": "tidetimes.co.uk", // 726 as of Nov 2022
    };
import portOptionsCoUK from './tidetimes-co-uk.js';
import portOptionsOrgUK from './tidetimes-org-uk.js';

/**
 * Register the WordPress block
 */
export default registerBlockType( 'uk-tides/uk-tides',
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
			const { textAlign, label } = props.attributes;

			const blockProps = useBlockProps( {
				className: clsx( {
					[ `has-text-align-${ textAlign }` ]: textAlign,
				} ),
			} );
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

			var portOptions = props.attributes.site == 'org' ? portOptionsOrgUK : portOptionsCoUK;

            return (
                <Fragment>
					<BlockControls group="block">
						<AlignmentControl
							value={ textAlign }
							onChange={ ( nextAlign ) => {
								props.setAttributes( { textAlign: nextAlign } );
							} }
						/>
					</BlockControls>
                    <InspectorControls >
                        <PanelBody>
                            <PanelRow>
                                <SelectControl label={ __( "Site", 'uk-tides' ) } value={props.attributes.site}
                                               options={ map( siteOptions, ( key, label ) => ( { value: label, label: key } ) ) }
                                               onChange={partial( onChangeAttr, 'site' )}
                                />

                            </PanelRow>

                            <PanelRow>
                                <SelectControl label={ __( "Port", 'uk-tides' ) }
                                                   value={ props.attributes.port }
                                               options={ map( portOptions, (key, label ) => ( { value: label, label: key } ) ) }
                                             onChange={partial( onChangeAttr, 'port' )}
                                />

                            </PanelRow>
                            <PanelRow>

                            </PanelRow>
                        </PanelBody>

                    </InspectorControls>

					<div { ...blockProps}>
                    	<ServerSideRender
                        	block="uk-tides/uk-tides" attributes={ props.attributes }
                    	/>
					</div>
                </Fragment>

            );
        },


        save() {
            return null;
        },
    },
);
