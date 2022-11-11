<header>
    <div class="emoji">{{ $page->emoji }}</div>
    <h1>{{ $page->title }}</h1>
    <ul class="flex">
        @foreach($page->tags as $tag)
            <li><span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">{{ $tag }}</span>
            </li>
        @endforeach
    </ul>
</header>