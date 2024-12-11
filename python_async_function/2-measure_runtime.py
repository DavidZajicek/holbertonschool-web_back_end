#!/usr/bin/env python3
"""
docstring
"""

import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int = 0, max_delay: int = 10) -> float:
    """ docstring """
    timer = time.time()

    asyncio.run(wait_n(n, max_delay))

    return (time.time() - timer) / n
