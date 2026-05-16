<?php
declare(strict_types=1);

// WaybackMachine SDK utility: result_headers

class WaybackMachineResultHeaders
{
    public static function call(WaybackMachineContext $ctx): ?WaybackMachineResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
