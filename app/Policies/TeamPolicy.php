<?php

namespace App\Policies;

use App\Models\Team;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TeamPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Team $team): bool
    {
        return $team->hasMember($user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Team $team): bool
    {
        return $team->members()
            ->where('user_id', $user->id)
            ->wherePivot('role', 'owner')
            ->exists();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Team $team): bool
    {
        return $team->members()
            ->where('user_id', $user->id)
            ->wherePivot('role', 'owner')
            ->exists();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Team $team): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Team $team): bool
    {
        return false;
    }

    public function switchTeam(User $user, Team $team): bool
    {
        return $team->hasMember($user);
    }

    public function invite(User $user, Team $team): bool
    {
        return $team->members()
            ->where('user_id', $user->id)
            ->wherePivot('role', 'owner')
            ->exists();
    }

    public function accept(User $user, Team $team): bool
    {
        return $team->invitations()
            ->where('email', $user->email)
            ->exists();
    }

    public function removeUser(User $user, Team $team): bool
    {
        return $team->members()
            ->where('user_id', $user->id)
            ->wherePivot('role', 'owner')
            ->exists();
    }

    public function leave(User $user, Team $team): bool
    {
        if ($user->id === $team->user_id) {
            return false;
        }

        return $team->members()
            ->where('user_id', $user->id)
            ->wherePivot('role', '!=', 'owner')
            ->exists();
    }
}
