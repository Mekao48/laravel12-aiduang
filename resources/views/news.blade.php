@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="mb-4">ข่าวล่าสุด</h1>
    <div class="row">
        @foreach($newsList as $news)
        <div class="col-md-4 mb-4">
            <div class="card news-card shadow-sm h-100">
                <img src="{{ $news->image }}" class="card-img-top" alt="{{ $news->title }}">
                <div class="card-body">
                    <h5 class="card-title">{{ $news->title }}</h5>
                    <p class="card-text text-muted">{{ Str::limit($news->content, 100) }}</p>
                    <a href="{{ route('news_detail', $news->id) }}" class="btn btn-outline-danger btn-sm">อ่านต่อ</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @auth
        @if(Auth::user()->role === 'admin')
    <a href="/news/list" 
   class="btn btn-primary rounded-circle shadow-lg" 
   style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; font-size: 30px; display: flex; align-items: center; justify-content: center;">
    +
        @endif
    @endauth
</a>


</div>
@endsection