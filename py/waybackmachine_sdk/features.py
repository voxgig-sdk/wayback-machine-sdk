# WaybackMachine SDK feature factory

from waybackmachine_sdk.feature.base_feature import WaybackMachineBaseFeature
from waybackmachine_sdk.feature.test_feature import WaybackMachineTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WaybackMachineBaseFeature(),
        "test": lambda: WaybackMachineTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
