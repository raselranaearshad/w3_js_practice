# JavaScript Variable
## Variables are Containers for Storing Data.
### JavaScript Variables can be declared in 4 ways: 
- Automatically
- Using var
- Using let
- Using const


Note: It is considered good programming practice to always declare variables before use.

### Note: 
- The ``` var ``` keyword was used in all JavaScript code from 1995 to 2015.
- The ``` let ``` and ``` const ``` keywords were added to JavaScript in 2015.
- The ``` var ``` keyword should only be used in code written for older browsers.

### When to Use var, let, or const?
-  Always declare variables.
-  Always use ``` const ``` if the value should not be changed.
- Always use ``` const ``` if the type should not be changed (Arrays and Objects).
- Only use ``` let ``` if you can't use ``` const ```
- Only use ``` var ``` if you MUST support old browsers.

## JavaScript Identifiers

All JavaScript variables must be identified with unique names. These unique names are called identifiers. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

### The general rules for constructing names for variables (unique identifiers) are:
- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _ underscore.
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.

Note: JavaScript identifiers are case-sensitive.