<?php
declare(strict_types=1);

// WaybackMachine SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WaybackMachineFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WaybackMachineBaseFeature();
            case "test":
                return new WaybackMachineTestFeature();
            default:
                return new WaybackMachineBaseFeature();
        }
    }
}
