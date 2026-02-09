# Jest Workshop Submission

## Student Details
- Name: Mahi Sawner
- Roll Number: 2024-B-20092006A
- GitHub Username: mahi656

---

## Tests Written

### 1. Test Name:
invalid subtotal throws error  
**What it protects against:**  
Prevents the function from accepting negative or invalid subtotal values and ensures proper error handling.

---

### 2. Test Name:
no coupon case (>=1000 gets 5% auto discount)  
**What it protects against:**  
Ensures that the automatic 5% discount is correctly applied when subtotal is 1000 or more and prevents regression in discount logic.

---

### 3. Test Name:
SAVE10 coupon applies 10% discount (max 100)  
**What it protects against:**  
Ensures the SAVE10 coupon applies the correct 10% discount and prevents incorrect discount calculations.

---

### 4. Test Name:
FLAT50 boundary case should not go below 0  
**What it protects against:**  
Prevents the final amount from becoming negative when a flat discount exceeds the subtotal.

---

### 5. Test Name:
example: sanity check  
**What it protects against:**  
Confirms that the testing environment is working correctly and Jest is properly configured.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: https://github.com/mahi656/jest-workshop

---

## Reflection (1–2 lines)
I understood how unit testing helps detect logical errors early and how CI automatically runs tests to prevent broken code from being merged.