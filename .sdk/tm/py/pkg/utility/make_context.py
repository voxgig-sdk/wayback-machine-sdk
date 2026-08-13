# WaybackMachine SDK utility: make_context

from projectname_sdk.core.context import WaybackMachineContext


def make_context_util(ctxmap, basectx):
    return WaybackMachineContext(ctxmap, basectx)
