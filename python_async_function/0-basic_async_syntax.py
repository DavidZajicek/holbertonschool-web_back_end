#!/usr/bin/env python3
"""
docstring
"""

from asyncio import sleep
import random


async def wait_random(max_delay=10.0) -> float:
    """ docstring """
    delay = random.uniform(0, max_delay)
    sleep(delay)
    return delay