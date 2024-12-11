#!/usr/bin/env python3
"""
docstring
"""


from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ doctstring """
    return [(i, len(i)) for i in lst]
