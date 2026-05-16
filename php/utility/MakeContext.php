<?php
declare(strict_types=1);

// WaybackMachine SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WaybackMachineMakeContext
{
    public static function call(array $ctxmap, ?WaybackMachineContext $basectx): WaybackMachineContext
    {
        return new WaybackMachineContext($ctxmap, $basectx);
    }
}
