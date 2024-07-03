<?php
/*
Plugin Name:  Gutenberg Block
Version:      1.0
*/


if (!class_exists("CustomGutenbergBlocks")) {

    class CustomGutenbergBlocks
    {

        function __construct()
        {
            require_once 'dmg-read-more.php';
            add_action('init', array($this, 'register_scripts'));
        }

        public function register_scripts()
        {
            wp_register_script(
                'register-custom-gutenberg-block-editor',
                plugins_url('build/index.js', __FILE__),
                array('wp-blocks', 'wp-element', 'wp-components', 'wp-data', 'wp-editor'),
                filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
            );

            register_block_type(
                'my-custom-block/extended-paragraph',
                array(
                    'editor_script' => 'register-custom-gutenberg-block-editor',
                )
            );
        }
    }

    new CustomGutenbergBlocks();
}
