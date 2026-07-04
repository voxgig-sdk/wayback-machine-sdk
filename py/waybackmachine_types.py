# Typed models for the WaybackMachine SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Availability:
    archived_snapshot: Optional[dict] = None
    url: Optional[str] = None


@dataclass
class AvailabilityLoadMatch:
    archived_snapshot: Optional[dict] = None
    url: Optional[str] = None

