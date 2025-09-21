
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
            <div class="card shadow-sm">
                <div class="card-body p-4">
                    <h4 class="card-title mb-3">สร้างบัญชีของคุณ</h4>
                    <p class="text-muted mb-4">โปรดใส่รายละเอียดเพื่อสร้างบัญชีของคุณ</p>

                    @if(session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('news.news_register') }}" novalidate>
                        @csrf

                        <div class="mb-3">
                            <label for="name" class="form-label">ชื่อ</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value="{{ old('name') }}"
                                required
                                autofocus
                                autocomplete="name"
                                class="form-control @error('name') is-invalid @enderror"
                                placeholder="Full name"
                            >
                            @error('name')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">อีเมล</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value="{{ old('email') }}"
                                required
                                autocomplete="email"
                                class="form-control @error('email') is-invalid @enderror"
                                placeholder="email@example.com"
                            >
                            @error('email')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">รหัสผ่าน</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                required
                                autocomplete="new-password"
                                class="form-control @error('password') is-invalid @enderror"
                                placeholder="Password"
                            >
                            @error('password')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="password_confirmation" class="form-label">ยืนยันรหัสผ่าน</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                required
                                autocomplete="new-password"
                                class="form-control @error('password_confirmation') is-invalid @enderror"
                                placeholder="Confirm password"
                            >
                            @error('password_confirmation')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <button type="submit" class="btn btn-danger w-100">สร้างบัญชี</button>
                    </form>

                    <div class="text-center text-muted mt-3 small">
                        มีบัญชีอยู่แล้ว?
                        @if(Route::has('login'))
                            <a href="{{ route('news.news_login') }}">เข้าสู่ระบบ</a>
                        @else
                            เข้าสู่ระบบ
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection