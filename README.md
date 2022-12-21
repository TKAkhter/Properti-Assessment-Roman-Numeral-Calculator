# Number To Roman Numeral Calculator

Convert numbers to Roman numerals.

Use this Roman numeral converter to convert numbers from 1 to 1,000 inclusive.

Roman numerals are a number system developed in ancient Rome where letters represent numbers. The modern use of Roman numerals involves the letters I, V, X, L, C, D, and M.

Roman numberal can go upto 3,999,999 but it has been currently restricted to 1,000.

*See limitation section below for instructions on removing 1,000 limitation.* 

## How to Use

In your terminal, run the following command:

```bash
git clone git@github.com:TKAkhter/Properti-Assessment-Roman-Numeral-Calculator.git
npm install
```
To start service
```bash
npm start
```
To start service in dev mode
```bash
npm run dev
```
To build service
```bash
npm run build
```
## Run Jest Tests

```bash
npm test
```
## How to remove 1,000 limitation
Got to `next.config.js` change INPUT_LIMIT to 3999999. Restart your server to get updated value. 
