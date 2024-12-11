#!/usr/bin/env python3
"""
docstring
"""

import asyncio
import random
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """doctstring"""
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)
