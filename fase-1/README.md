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
