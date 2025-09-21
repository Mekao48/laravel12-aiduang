<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Database\Seeders\NewsSeeder;

class NewsController extends Controller
{
    /**
     * Display a listing of all news items.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $allNews = News::all();
        return view('news', ['newsList' => $allNews]);
    }
    // this is new 2
    public function list()
    {
        $allNews = News::all();
        return view('news.list', ['newsList' => $allNews]);
    }
    public function create()
    {
        return view('news.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'required|string',
            'source_url' => 'required|url',
        ]);

        News::create($request->all());

        return redirect()->route('news')->with('success', 'News created successfully!');
    }

    public function edit($id)
    {
        $news = News::findOrFail($id);
        return view('news.edit', compact('news'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'required|string',
            'source_url' => 'required|url',
        ]);

        $news = News::findOrFail($id);
        $news->update($request->all());

        return redirect()->route('news.index')->with('success', 'News updated successfully!');
    }

    public function destroy($id)
    {
        $news = News::findOrFail($id);
        $news->delete();

        return redirect()->route('news.index')->with('success', 'News deleted successfully!');
    }
    // end this line
    /**
     * Display the specified news item.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $newsItem = News::findOrFail($id);
        return view('news_detail', ['news' => $newsItem]);
    }
}
