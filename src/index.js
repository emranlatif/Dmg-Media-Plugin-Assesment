import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';

registerBlockType('my-custom-block/extended-paragraph', {
    title: __('Read More Block', 'post-link-block'),
    icon: 'admin-links',
    category: 'common',
    attributes: {
        postId: {
            type: 'number',
            default: 0,
        },
        postTitle: {
            type: 'string',
            default: '',
        },
        postLink: {
            type: 'string',
            default: '',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { postId, postTitle, postLink } = attributes;
        const [search, setSearch] = useState('');

        const posts = useSelect((select) => {
            return select('core').getEntityRecords('postType', 'post', {
                search,
                per_page: 10,
                orderby: 'date',
                order: 'desc',
            });
        }, [search]);

        const options = posts ? posts.map((post) => ({
            label: post.title.rendered,
            value: post.id,
        })) : [];

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Post Link Settings', 'post-link-block')}>
                        <TextControl
                            label={__('Search Posts', 'post-link-block')}
                            value={search}
                            onChange={(value) => setSearch(value)}
                        />
                        <SelectControl
                            label={__('Select Post', 'post-link-block')}
                            value={postId}
                            options={[
                                { label: __('Select a post', 'post-link-block'), value: 0 },
                                ...options,
                            ]}
                            onChange={(value) => {
                                const post = posts.find((post) => post.id == value);
                                setAttributes({
                                    postId: value,
                                    postTitle: post ? post.title.rendered : '',
                                    postLink: post ? post.link : '',
                                });
                            }}
                        />
                    </PanelBody>
                </InspectorControls>
                <p className="dmg-read-more">
                    { postLink ? `Read More: ` : '' }
                    <a href={postLink}>{postTitle}</a>
                </p>
            </>
        );
    },
    save: ({ attributes }) => {
        const { postLink, postTitle } = attributes;
        return (
            <p className="dmg-read-more">
                { postLink ? `Read More: ` : '' }
                <a href={postLink}>{postTitle}</a>
            </p>
        );
    },
});
