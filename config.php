<?php

use Illuminate\Support\Str;

return [
    'production' => false,
    // 'baseUrl' => 'https://thundersquared.github.io/apiscp-notes/',
    'baseUrl' => 'http://localhost:3000/',
    'siteName' => 'ApisCP Notes',
    'siteDescription' => 'Notes and cheats for a better ApisCP administration experience.',
    'collections' => [
        'notes' => [
            'extends' => '_layouts.note',
            'filter' => fn($item) => $item->title && $item->emoji,
        ],
    ],

    // navigation menu
    'navigation' => require_once('navigation.php'),

    // helpers
    'isActive' => fn($page, $path) => Str::endsWith(trimPath($page->getPath()), trimPath($path)),
    'isActiveParent' => function ($page, $menuItem) {
        if (is_object($menuItem) && $menuItem->children)
        {
            return $menuItem->children->contains(function ($child) use ($page) {
                return trimPath($page->getPath()) == trimPath($child);
            });
        }
    },
    'url' => fn($page, $path) => Str::startsWith($path, 'http') ? $path : '/' . trimPath($path),
];
