@extends('_layouts.master')

@section('nav-toggle')
    @include('_nav.menu-toggle')
@endsection

@section('body')
    <section class="container max-w-8xl mx-auto px-6 md:px-8 py-4">
        <div class="flex flex-col lg:flex-row">
            <nav class="space-y-1" aria-label="Sidebar">
                @foreach ($notes as $note)
                    <a href="{{ $note->getUrl() }}"
                       class="{{ $page->isActive($note->getPath()) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800' }} group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                       aria-current="page">
                        <span class="{{ $page->isActive($note->getPath()) ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500' }} flex-shrink-0 -ml-1 mr-3 h-8 w-6 text-xl">{{ $note->emoji }}</span>
                        <span class="truncate">{{ $note->title }}</span>
                    </a>
                @endforeach
            </nav>

            <div class="DocSearch-content w-full lg:w-3/5 break-words pb-16 lg:pl-4" v-pre>
                @include('_partials.note.header')
                @yield('content')
            </div>
        </div>
    </section>
@endsection
