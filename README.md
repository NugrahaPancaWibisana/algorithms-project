# 🎯 Roadmap Algoritma Fundamental untuk Node.js

## 📚 FASE 1: Array & String Manipulation

### Konsep yang Dipelajari:
- Loop (for, while, forEach)
- Array methods (map, filter, reduce, find, slice, splice)
- String methods (split, join, charAt, substring)
- Nested loops
- Index manipulation

### 📦 Node.js Packages: `fs/promises`, `readline`, `path`

### Project List:

1. **Todo List CLI** (Basic)
   - Algoritma: CRUD operations, array filtering, searching
   - Fitur: Add, delete, mark complete, filter by status
   - Storage: JSON file dengan `fs.writeFile/readFile`
   - Input: Interactive menu dengan `readline`

2. **Word Counter & Text Analyzer CLI**
   - Algoritma: String parsing, frequency counting, character analysis
   - Fitur: Read .txt file, count words/chars, most common words, find palindromes
   - Storage: Read from file dengan `fs.readFile`
   - Output: Write report ke file baru

3. **Simple Expense Tracker CLI**
   - Algoritma: Array manipulation, filtering by category, sum calculation
   - Fitur: Add expense, delete, filter by date/category, calculate total
   - Storage: JSON file untuk store expenses
   - Report: Generate monthly summary ke .txt file

4. **Contact Book CLI**
   - Algoritma: Searching (linear search), sorting (by name), filtering
   - Fitur: Add/delete contact, search by name, sort alphabetically
   - Storage: JSON file dengan auto-save
   - Export: Export contacts ke CSV format

5. **Password Validator & Generator CLI**
   - Algoritma: String pattern matching, conditional logic, random generation
   - Fitur: Check strength, generate secure password, history log
   - Node: `crypto.randomBytes` untuk secure random
   - Storage: Save validated passwords history

6. **Shopping Cart Calculator CLI**
   - Algoritma: Array reduce, price calculation, discount logic
   - Fitur: Add items, remove, calculate total, apply discount codes
   - Storage: JSON untuk store cart dan product catalog
   - Receipt: Generate receipt ke .txt file

---

## 📚 FASE 2: Object & Hash Map (Key-Value)

### Konsep yang Dipelajari:
- Object manipulation
- Hash map untuk lookup O(1)
- Frequency counter pattern
- Grouping data

### 📦 Node.js Packages: `fs/promises`, `readline`, Object manipulation

### Project List:

7. **Quiz App CLI with Scoring**
   - Algoritma: Object untuk store Q&A, score calculation, result grouping
   - Fitur: Load questions dari JSON, track score, show correct answers
   - Storage: Questions di JSON file, save results history
   - Interactive: `readline` untuk user input

8. **Inventory Management System CLI**
   - Algoritma: Hash map untuk quick lookup by ID, stock counting
   - Fitur: Add product, update stock, search by ID, low stock alert
   - Storage: JSON database untuk products
   - Report: Generate inventory report ke file

9. **Voting/Poll System CLI**
   - Algoritma: Frequency counter, sorting by votes, percentage calculation
   - Fitur: Cast vote, show results, winner determination
   - Storage: Votes di JSON file
   - Visualization: ASCII bar chart di terminal

10. **Student Grade Calculator CLI**
    - Algoritma: Object grouping, average calculation, grade assignment
    - Fitur: Add student, calculate GPA, rank students, find top performers
    - Import: Read student data dari CSV (manual parsing atau pakai package)
    - Export: Generate report card ke .txt

11. **Recipe Finder CLI**
    - Algoritma: Object matching, ingredient filtering, tag-based search
    - Fitur: Search by ingredient, filter by category, save favorites
    - Storage: Recipe database di JSON
    - Input: Interactive search menu

---

## 📚 FASE 3: Sorting & Searching

### Konsep yang Dipelajari:
- Bubble sort / Selection sort (pahami logika)
- Binary search (untuk sorted array)
- Custom sort dengan comparator
- Linear search vs Binary search

### 📦 Node.js Packages: `fs/promises`, custom sort comparators

### Project List:

12. **Leaderboard System CLI**
    - Algoritma: Sorting by score (descending), rank assignment
    - Fitur: Add player, update score, display top 10, search player rank
    - Storage: JSON file untuk player data
    - Output: Pretty table format di terminal

13. **Product Filter & Sort CLI (E-commerce)**
    - Algoritma: Multi-criteria sorting, range filtering, binary search
    - Fitur: Sort by price/rating, filter by price range, search product
    - Storage: Product catalog di JSON
    - Interactive: Menu untuk choose sort/filter criteria

14. **Movie/Book Database CLI**
    - Algoritma: Sorting by rating/year, binary search by title
    - Fitur: Add item, sort by various fields, search, filter by genre
    - Storage: JSON database
    - Import: Bulk import dari .txt atau CSV

15. **Event Scheduler CLI**
    - Algoritma: Sorting by date/time, conflict detection
    - Fitur: Add event, sort chronologically, find available slots
    - Storage: Events di JSON file
    - Reminder: Check upcoming events (bonus: bisa pakai `setInterval`)

---

## 📚 FASE 4: Two Pointers & Sliding Window

### Konsep yang Dipelajari:
- Two pointers technique (start-end)
- Sliding window untuk subarray problems
- Palindrome checking
- Pair finding

### 📦 Node.js Packages: String manipulation, `readline`

### Project List:

16. **Palindrome Checker CLI Tool**
    - Algoritma: Two pointers untuk check palindrome (kata, kalimat, angka)
    - Fitur: Check word/sentence, ignore spaces/punctuation, batch check dari file
    - Input: Terminal input atau read dari .txt file
    - Output: Save results ke file dengan status

17. **Duplicate Finder CLI**
    - Algoritma: Two pointers untuk find duplicates/unique elements
    - Fitur: Read array dari file, find duplicates, remove duplicates, save clean version
    - Input: Read dari .txt atau JSON array
    - Output: Write cleaned data ke new file

18. **Substring Search Tool CLI**
    - Algoritma: Sliding window untuk pattern matching
    - Fitur: Find all occurrences in file, highlight matches, count frequency
    - Input: Read large text files
    - Output: Generate report dengan line numbers

19. **Moving Average Calculator CLI**
    - Algoritma: Sliding window untuk calculate moving average
    - Fitur: Read time series data dari CSV, set window size, output trend
    - Input: CSV file dengan numerical data
    - Output: Write results ke new CSV

20. **Anagram Finder CLI**
    - Algoritma: Sorting + comparison, atau frequency counter
    - Fitur: Check if two words are anagrams, find all anagrams in word list
    - Input: Read word list dari .txt file
    - Output: Group anagrams dan save ke file

---

## 📚 FASE 5: Stack & Queue (LIFO/FIFO)

### Konsep yang Dipelajari:
- Stack (Last In First Out)
- Queue (First In First Out)
- Undo/Redo mechanism
- BFS basics (breadth-first)

### 📦 Node.js Packages: Array manipulation (built-in), `fs/promises`

### Project List:

21. **Undo/Redo Text Editor CLI**
    - Algoritma: Stack untuk undo/redo operations
    - Fitur: Type text, undo, redo, save file, history limit
    - Implementation: Array sebagai stack, `readline` untuk input
    - Storage: Auto-save ke file

22. **Browser History Simulator CLI**
    - Algoritma: Stack untuk back button, array untuk forward
    - Fitur: Visit URL, go back, go forward, show history, clear history
    - Implementation: Two stacks (back & forward)
    - Storage: Save history session ke JSON

23. **Task Queue Manager CLI**
    - Algoritma: Queue untuk FIFO task processing
    - Fitur: Add task to queue, process next, show pending tasks, priority queue
    - Implementation: Array dengan shift/push methods
    - Simulation: Process tasks dengan delay (setTimeout)

24. **Parentheses Validator CLI**
    - Algoritma: Stack untuk check balanced brackets/parentheses
    - Fitur: Read code dari file, check valid expressions, show error position
    - Input: Read .js atau .json files
    - Output: Validation report

25. **Simple Calculator CLI with History**
    - Algoritma: Stack untuk operator precedence, history storage
    - Fitur: Basic operations, parentheses support, undo calculation, history
    - Implementation: Expression evaluation dengan stack
    - Storage: Save calculation history ke file

---

## 📚 FASE 6: Recursion

### Konsep yang Dipelajari:
- Base case & recursive case
- Call stack understanding
- Factorial, Fibonacci
- Tree traversal basics

### 📦 Node.js Packages: Recursion, `fs/promises`, `path`

### Project List:

26. **Factorial & Fibonacci Calculator CLI**
    - Algoritma: Recursion implementation, memoization (optional)
    - Fitur: Calculate factorial/fib, show recursive steps, compare iterative vs recursive
    - Output: Display call stack trace
    - Performance: Time comparison antara methods

27. **File/Folder Tree Explorer CLI** ⭐ **BEST untuk Node.js!**
    - Algoritma: Recursive tree traversal dengan `fs.readdir`
    - Fitur: Display nested folders, count files, calculate total size, depth limit
    - Node APIs: `fs.statSync`, `path.join`, `fs.readdirSync`
    - Output: Pretty tree format (├── └──) di terminal

28. **Nested Comment System CLI**
    - Algoritma: Recursion untuk render nested replies
    - Fitur: Add comment, reply to comment, display thread dengan indentation
    - Storage: JSON dengan nested structure
    - Display: Recursive rendering dengan indent

29. **Power Calculator CLI**
    - Algoritma: Recursive exponentiation, fast power algorithm (divide & conquer)
    - Fitur: Calculate x^n, show recursive steps, compare methods
    - Output: Step-by-step explanation
    - Bonus: Support big numbers

30. **Permutation Generator CLI**
    - Algoritma: Recursive permutation/combination generation
    - Fitur: Generate all permutations of string/array, count possibilities
    - Input: String atau array dari user
    - Output: Save all permutations ke file (bisa banyak!)

---

## 📚 FASE 7: Basic Algorithms Problems

### Konsep yang Dipelajari:
- Problem-solving patterns
- Edge case handling
- Time/space complexity awareness
- Multiple approaches

### 📦 Node.js Packages: Pure algorithms, `readline` untuk input

### Project List:

31. **Number Pattern Generator CLI**
    - Algoritma: Nested loops, pattern logic (pyramid, diamond, etc)
    - Fitur: Generate various number/star patterns, custom size, multiple patterns
    - Input: Pattern type dan size dari user
    - Output: Display di terminal atau save ke .txt

32. **Prime Number Finder CLI**
    - Algoritma: Prime checking, Sieve of Eratosthenes
    - Fitur: Check if prime, find all primes in range, nth prime, performance test
    - Input: Number atau range dari user
    - Output: Save prime list ke file

33. **Array Rotation Tool CLI**
    - Algoritma: Array rotation (left/right), reversal algorithm
    - Fitur: Rotate by k steps, read array dari file, save rotated version
    - Input: JSON array dari file
    - Output: Visualize rotation steps

34. **Missing Number Finder CLI**
    - Algoritma: Sum formula, XOR method, hash map method
    - Fitur: Find missing number in sequence, multiple approaches, comparison
    - Input: Read sequence dari file
    - Output: Show all three methods dan time taken

35. **Two Sum / Three Sum Finder CLI**
    - Algoritma: Hash map, two pointers, find pairs that sum to target
    - Fitur: Find all pairs, three numbers, show all combinations
    - Input: Array dan target dari file atau terminal
    - Output: Save all solutions ke file

36. **Merge Intervals CLI**
    - Algoritma: Sorting + merging overlapping intervals
    - Fitur: Read time intervals dari file, merge overlaps, display result
    - Input: JSON array of intervals
    - Output: Merged intervals ke file

37. **Longest Substring Without Repeating CLI**
    - Algoritma: Sliding window + hash map
    - Fitur: Read text dari file, find longest unique substring, highlight position
    - Input: Large text files
    - Output: Report dengan substring dan position

38. **String Compression CLI**
    - Algoritma: Run-length encoding, character counting
    - Fitur: Compress string (a3b2c1), decompress, compare sizes
    - Input: Read string dari file
    - Output: Save compressed version, show compression ratio

39. **Matrix Rotation CLI**
    - Algoritma: 2D array manipulation, transpose + reverse
    - Fitur: Rotate 90°, 180°, 270°, read matrix dari file
    - Input: JSON 2D array atau CSV
    - Output: Display formatted matrix dan save

40. **Spiral Matrix Generator CLI**
    - Algoritma: Direction control, boundary tracking
    - Fitur: Generate spiral pattern, custom size, visualize di terminal
    - Input: Matrix size dari user
    - Output: Pretty formatted matrix display

---

## 🎯 Cara Menggunakan Roadmap Ini:

### Strategi Belajar:

1. **Pilih 2-3 project per fase** (jangan semua!)
2. **Kerjakan berurutan** sesuai fase (jangan loncat-loncat)
3. **Pahami algoritma dulu** sebelum coding:
   - Tulis pseudocode di kertas
   - Gambar flowchart
   - Pikirkan edge cases
4. **Implement dari nol** (jangan copy-paste)
5. **Refactor** setelah selesai (bikin lebih clean)

### Tingkat Kesulitan:

- **Fase 1-2**: Pemula (MULAI DI SINI!)
- **Fase 3-4**: Menengah Awal
- **Fase 5-6**: Menengah
- **Fase 7**: Menengah-Lanjut (problem solving)

### Timeline Realistis:

- **1 minggu intensif**: Selesaikan Fase 1-2 (pilih 4-6 project)
- **2-4 minggu**: Fase 1-4 (fondasi solid)
- **1-2 bulan**: Semua fase (comfortable dengan algoritma fundamental)

### Tips Tambahan untuk Node.js:

✅ **Gunakan `fs/promises`** untuk async file operations (lebih modern)
✅ **Buat interactive menu** dengan `readline` atau package `inquirer`
✅ **Error handling** wajib untuk file operations (try-catch)
✅ **Pretty output** dengan package `chalk` atau `cli-table3` (optional)
✅ **Gunakan `path.join()`** untuk cross-platform compatibility
✅ **Timing setiap project**: 2-4 jam untuk basic version

❌ Jangan pakai database dulu (terlalu overkill)
❌ Jangan skip error handling (file operations sering fail)
❌ Jangan pindah project kalau belum selesai
❌ Jangan langsung pakai framework (Express, dll) - fokus ke logic dulu

### Node.js Built-in APIs yang Wajib Pakai:

```javascript
// File operations
import fs from 'fs/promises';
import { readFileSync, writeFileSync } from 'fs';

// Path handling
import path from 'path';

// User input
import readline from 'readline';

// Crypto untuk random/hash
import crypto from 'crypto';

// Utilities
import util from 'util';
```

---

## 📝 Tracking Progress:

Setiap selesai project, tanya diri sendiri:
1. Apa algoritma utama yang dipakai?
2. Berapa time complexity-nya? (rough estimate ok)
3. Bisakah dibuat lebih efficient?
4. Edge case apa yang sempat ketinggalan?

**Good luck! 🚀 Mulai dari project #1 dan build momentum!**