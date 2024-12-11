#!/usr/bin/env python3
"""
docstring
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ docstring """
    def multi(value: float):
        """ docstring """
        return multiplier * value
    return multi
