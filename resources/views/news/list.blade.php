@extends('layouts.app')

@section('content')
<div class="container">
    <h2>News List</h2>
    <a href="{{ route('news.create') }}" class="btn btn-primary mb-3">+ Add News</a>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <table class="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th width="200px">Action</th>
        </tr>
        @foreach ($newsList as $news)
        <tr>
            <td>{{ $news->id }}</td>
            <td>{{ $news->title }}</td>
            <td>{{ Str::limit($news->content, 50) }}</td>
            <td>
                <a href="{{ route('news.edit', $news->id) }}" class="btn btn-warning btn-sm">Edit</a>
                <form action="{{ route('news.destroy', $news->id) }}" method="POST" style="display:inline-block;">
                    @csrf
                    @method('DELETE')
                    <button type="submit" onclick="return confirm('Are you sure?')" class="btn btn-danger btn-sm">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>
</div>
@endsection
