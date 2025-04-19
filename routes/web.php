<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\TeamController;
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

    // teams
    Route::get('/settings/teams', [TeamController::class, 'index'])->name('settings.teams');
    Route::get('/settings/teams/{team}', [TeamController::class, 'show'])->name('settings.teams.show');
    Route::get('/settings/teams/{team}/accept', [TeamController::class, 'accept'])->name('settings.teams.accept')->middleware('signed');
    Route::post('/settings/teams/{team}/accept', [TeamController::class, 'join'])->name('settings.teams.join')->middleware('signed');
    Route::post('/settings/teams', [TeamController::class, 'store'])->name('settings.teams.store');
    Route::post('/settings/teams/{team}/invite', [TeamController::class, 'invite'])->name('settings.teams.invite');
    Route::delete('/settings/teams/{team}/invite/{invite}', [TeamController::class, 'destroyInvite'])->name('settings.teams.invite.destroy');
    Route::delete('/settings/teams/{team}/leave', [TeamController::class, 'leave'])->name('settings.teams.leave');
    Route::delete('/settings/teams/{team}/{user}', [TeamController::class, 'remove'])->name('settings.teams.remove');
    Route::put('/settings/teams/{team}', [TeamController::class, 'update'])->name('settings.teams.update');
    Route::delete('/settings/teams/{team}', [TeamController::class, 'destroy'])->name('settings.teams.destroy')->middleware('password.confirm');
    Route::post('/settings/teams/{team}/switch', [TeamController::class, 'switch'])->name('settings.teams.switch');

    Route::get('/user/confirm-password', function () {
        return Inertia::render('auth/confirm-password');
    })->name('password.confirm');
});
