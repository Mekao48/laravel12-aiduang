@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Edit News</h2>

    <form action="{{ route('news.update', $news->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <label>Title</label>
            <input type="text" name="title" value="{{ $news->title }}" class="form-control" required>
            @error('title') <div class="text-danger">{{ $message }}</div> @enderror
        </div>
        <div class="mb-3">
            <label>Content</label>
            <textarea name="content" class="form-control" rows="5" required>{{ $news->content }}</textarea>
            @error('content') <div class="text-danger">{{ $message }}</div> @enderror
        </div>
        <button type="submit" class="btn btn-success">Update</button>
        <a href="{{ route('news.index') }}" class="btn btn-secondary">Back</a>
    </form>
</div>
@endsection
