<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/login', fn () => Inertia::render('auth/login'))->name('login');
Route::get('/login/2fa', fn () => Inertia::render('auth/2fa'))->name('two-factor.login');
Route::get('/register', fn () => Inertia::render('auth/register'))->name('register');
Route::get('/forgot-password', fn () => Inertia::render('auth/forgot-password'))->name('password.request');
Route::get('/reset-password', fn () => Inertia::render('auth/reset-password'))->name('password.reset');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::redirect('/settings', '/settings/profile')->name('settings');
    Route::get('/settings/profile', [SettingsController::class, 'profile'])->name('settings.profile');
    Route::get('/settings/password', [SettingsController::class, 'password'])->name('settings.password');

    Route::get('/user/confirm-password', function () {
        return Inertia::render('auth/confirm-password');
    })->name('password.confirm');
});
