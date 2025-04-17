<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class TeamUser extends Pivot
{
    protected $table = 'team_user';

    public $incrementing = true;

    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'team_id',
        'role',
    ];
}
