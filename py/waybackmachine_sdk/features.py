# WaybackMachine SDK feature factory

from waybackmachine_sdk.feature.base_feature import WaybackMachineBaseFeature
from waybackmachine_sdk.feature.test_feature import WaybackMachineTestFeature


_FEATURES = {
    "base": lambda: WaybackMachineBaseFeature(),
    "test": lambda: WaybackMachineTestFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
