# React Native FlatList: Inconsistent Key Extractor

This repository demonstrates a common issue in React Native's FlatList component: inconsistent key generation leading to rendering problems.  The `keyExtractor` function, which provides unique keys for list items, is crucial for performance and stability. If it returns duplicate or inconsistent keys, unexpected behavior can occur, like incorrect rendering, item flickering, or even crashes.

## Problem
The `bug.js` file showcases a scenario where the `keyExtractor` doesn't generate consistently unique keys, especially if the data array is modified. This can cause items to render incorrectly or disappear from the list.

## Solution
The `bugSolution.js` file demonstrates a correct implementation of the `keyExtractor` function. It uses a unique identifier from the data object to guarantee unique keys, making the FlatList render consistently and correctly, even with dynamic data changes.

This issue highlights the importance of carefully designing your `keyExtractor` function to avoid common pitfalls and ensure smooth rendering in your React Native applications.