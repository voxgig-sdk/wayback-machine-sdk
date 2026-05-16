<?php
declare(strict_types=1);

// WaybackMachine SDK utility: prepare_body

class WaybackMachinePrepareBody
{
    public static function call(WaybackMachineContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
