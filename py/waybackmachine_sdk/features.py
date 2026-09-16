# WaybackMachine SDK feature factory

from waybackmachine_sdk.feature.base_feature import WaybackMachineBaseFeature
from waybackmachine_sdk.feature.ratelimit_feature import WaybackMachineRatelimitFeature
from waybackmachine_sdk.feature.retry_feature import WaybackMachineRetryFeature
from waybackmachine_sdk.feature.test_feature import WaybackMachineTestFeature
from waybackmachine_sdk.feature.timeout_feature import WaybackMachineTimeoutFeature


_FEATURES = {
    "base": lambda: WaybackMachineBaseFeature(),
    "ratelimit": lambda: WaybackMachineRatelimitFeature(),
    "retry": lambda: WaybackMachineRetryFeature(),
    "test": lambda: WaybackMachineTestFeature(),
    "timeout": lambda: WaybackMachineTimeoutFeature(),
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
