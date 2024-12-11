#!/usr/bin/env python3
"""
docstring
"""


from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ docstring """
    return (k, float(v * v))
