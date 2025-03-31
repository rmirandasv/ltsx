<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/login', fn () => Inertia::render('auth/login'))->name('login');
Route::get('/register', fn () => Inertia::render('auth/register'))->name('register');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/settings', fn () => Inertia::render('settings/index'))->name('settings');
    Route::get('/settings/profile', fn () => Inertia::render('settings/profile'))->name('settings.profile');
});
