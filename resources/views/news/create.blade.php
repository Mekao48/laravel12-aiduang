@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Add News</h2>
    <form action="{{ route('news.store') }}" method="POST">
        @csrf
        <div class="mb-3">
            <label>Image Link</label>
            <input type="text" name="image" class="form-control" required>
            @error('title') <div class="text-danger">{{ $message }}</div> @enderror
        </div>
        <div class="mb-3">
            <label>Title</label>
            <input type="text" name="title" class="form-control" required>
            @error('title') <div class="text-danger">{{ $message }}</div> @enderror
        </div>
        <div class="mb-3">
            <label>Content</label>
            <textarea name="content" class="form-control" rows="5" required></textarea>
            @error('content') <div class="text-danger">{{ $message }}</div> @enderror
        </div>
        <div class="mb-3">
            <label>Source</label>
            <input type="text" name="source_url" class="form-control" required>
            @error('title') <div class="text-danger">{{ $message }}</div> @enderror
        </div>
        <button type="submit" class="btn btn-success">Save</button>
        <a href="{{ route('news.list') }}" class="btn btn-secondary">Back</a>
    </form>
</div>
@endsection