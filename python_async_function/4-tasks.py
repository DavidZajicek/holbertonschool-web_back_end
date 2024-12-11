#!/usr/bin/env python3
"""
docstring
"""

import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int = 0, max_delay: int = 10) -> List[float]:
    """ docstring """
    tasks = []
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))
    results = [await result for result in asyncio.as_completed(tasks)]
    return results
