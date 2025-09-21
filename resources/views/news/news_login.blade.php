
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
            <div class="card shadow-sm">
                <div class="card-body p-4">
                    <h4 class="card-title mb-3">เข้าสู่ระบบของคุณ</h4>
                    <p class="text-muted mb-4">โปรดใส่อีเมลและรหัสผ่านของคุณด้านล่าง</p>

                    @if(session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('news.news_login') }}" novalidate>
                        @csrf

                        <div class="mb-3">
                            <label for="email" class="form-label">อีเมล</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value="{{ old('email') }}"
                                required
                                autofocus
                                autocomplete="email"
                                class="form-control @error('email') is-invalid @enderror"
                                placeholder="email@example.com"
                            >
                            @error('email')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <div class="d-flex align-items-center mb-1">
                                <label for="password" class="form-label mb-0">รหัสผ่าน</label>
                                @if(Route::has('password.request'))
                                    <a href="{{ route('password.request') }}" class="ms-auto small">ลืมรหัสผ่าน?</a>
                                @endif
                            </div>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                required
                                autocomplete="current-password"
                                class="form-control @error('password') is-invalid @enderror"
                                placeholder="Password"
                            >
                            @error('password')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label" for="remember">จดจำฉันไว้</label>
                        </div>

                        <button type="submit" class="btn btn-danger w-100">เข้าสู่ระบบ</button>
                    </form>

                    <div class="text-center text-muted mt-3 small">
                        ไม่มีบัญชี?
                        @if(Route::has('register'))
                            <a href="{{ route('news.news_register') }}">สมัครสมาชิก</a>
                        @else
                            สมัครสมาชิก
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection