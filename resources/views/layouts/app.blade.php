<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <title>Elon Musk News</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        
        body {
            background-color: #f8f9fa;
        }

        .navbar-brand {
            font-weight: bold;
            color: #dc3545 !important;
        }

        .news-card img {
            object-fit: cover;
            height: 200px;
        }

        footer {
            margin-top: 50px;
            padding: 20px 0;
            background: #212529;
            color: white;
            text-align: center;
        }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
        <div class="container">
            <a class="navbar-brand" href="{{ route('home') }}">กลับหน้าหลัก</a>
            <a class="navbar-brand" href="{{ route('news') }}">Elon Musk News</a>
        </div>
        <div class="d-flex align-items-center me-4">
    @auth
        @if(Auth::user()->role === 'admin')
            <div class="dropdown">
                <a class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" href="#" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="me-2">{{ Auth::user()->name }}</span>
                    <img src="https://www.gravatar.com/avatar/{{ md5(strtolower(trim(Auth::user()->email))) }}?s=28&d=identicon" alt="avatar" class="rounded-circle">
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item" href="{{ route('news.list') ?? '#' }}">News List</a></li>
                    <li><a class="dropdown-item" href="{{ route('news') }}">News</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit" class="dropdown-item">Logout</button>
                        </form>
                    </li>
                </ul>
            </div>
            @endif
        @endauth
        </div>
    </nav>

    <main>
        @yield('content')
    </main>

    <footer>
        <p>© 2025 Laravel News | Powered by Laravel 10</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>