<?php
declare(strict_types=1);

// WaybackMachine SDK utility: feature_add

class WaybackMachineFeatureAdd
{
    public static function call(WaybackMachineContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
