#!/usr/bin/env python3
"""
docstring
"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int = 0, max_delay: int = 10) -> List[float]:
    """ docstring """
    loop = asyncio.get_event_loop()
    tasks = []
    for _ in range(n):
        tasks.append(loop.create_task(wait_random(max_delay)))
    results = await asyncio.gather(*tasks)
    return results
