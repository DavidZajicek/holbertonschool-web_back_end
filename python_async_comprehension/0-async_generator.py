#!/usr/bin/env python3
"""
docstring
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """doctstring"""
    for _ in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
