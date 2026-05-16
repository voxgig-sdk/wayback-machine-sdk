<?php
declare(strict_types=1);

// WaybackMachine SDK base feature

class WaybackMachineBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WaybackMachineContext $ctx, array $options): void {}
    public function PostConstruct(WaybackMachineContext $ctx): void {}
    public function PostConstructEntity(WaybackMachineContext $ctx): void {}
    public function SetData(WaybackMachineContext $ctx): void {}
    public function GetData(WaybackMachineContext $ctx): void {}
    public function GetMatch(WaybackMachineContext $ctx): void {}
    public function SetMatch(WaybackMachineContext $ctx): void {}
    public function PrePoint(WaybackMachineContext $ctx): void {}
    public function PreSpec(WaybackMachineContext $ctx): void {}
    public function PreRequest(WaybackMachineContext $ctx): void {}
    public function PreResponse(WaybackMachineContext $ctx): void {}
    public function PreResult(WaybackMachineContext $ctx): void {}
    public function PreDone(WaybackMachineContext $ctx): void {}
    public function PreUnexpected(WaybackMachineContext $ctx): void {}
}
