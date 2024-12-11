#!/usr/bin/env python3
"""
docstring
"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """doctstring"""
    start_time = time.time()
    loop = asyncio.get_event_loop()
    coros = [loop.create_task(async_comprehension()) for _ in range(4)]
    await asyncio.gather(*coros)
    return time.time() - start_time
