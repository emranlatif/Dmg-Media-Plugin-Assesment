<?php

if (defined('WP_CLI') && WP_CLI) {

    class DMGReadMoreCommand
    {

        public function search($args, $perms)
        {
            // Parse date arguments
            $date_before = isset($perms['date-before']) ? strtotime($perms['date-before']) : strtotime('-30 days');
            $date_after  = isset($perms['date-after']) ? strtotime($perms['date-after']) : strtotime('-30 days');

            // Perform WP_Query to find posts
            $query_args = array(
                'post_type'      => 'post',
                'posts_per_page' => -1,
                'date_query'     => array(
                    'after'     => date('Y-m-d', $date_after),
                    'before'    => date('Y-m-d', $date_before),
                    'inclusive' => true,
                ),
                's'             => '[blocks name="my-custom-block/extended-paragraph"]', // Replace with your actual Gutenberg block name
                'fields'        => 'ids',
            );

            $query = new WP_Query($query_args);

            // Check if any posts were found
            if ($query->have_posts()) {
                $post_ids = $query->posts;
                WP_CLI::line('Matching posts found. IDs: ' . implode(', ', $post_ids));
            } else {
                WP_CLI::line('No matching posts found.');
            }

            // Log any errors encountered during WP_Query
            if ($query->get('error')) {
                WP_CLI::warning('Error encountered during query: ' . $query->get('error'));
            }

            // Reset post data
            wp_reset_postdata();
        }
    }

    // Register the WP-CLI command
    WP_CLI::add_command('dmg-read-more search', 'DMGReadMoreCommand');
}
