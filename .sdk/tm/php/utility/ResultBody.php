<?php
declare(strict_types=1);

// WaybackMachine SDK utility: result_body

class WaybackMachineResultBody
{
    public static function call(WaybackMachineContext $ctx): ?WaybackMachineResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
