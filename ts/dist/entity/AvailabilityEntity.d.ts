import { WaybackMachineEntityBase } from '../WaybackMachineEntityBase';
import type { WaybackMachineSDK } from '../WaybackMachineSDK';
import type { Control } from '../types';
import type { Availability, AvailabilityLoadMatch } from '../WaybackMachineTypes';
declare class AvailabilityEntity extends WaybackMachineEntityBase<Availability> {
    constructor(client: WaybackMachineSDK, entopts: any);
    make(this: AvailabilityEntity): AvailabilityEntity;
    load(this: any, reqmatch?: AvailabilityLoadMatch, ctrl?: Control): Promise<AvailabilityEntity>;
}
export { AvailabilityEntity };
