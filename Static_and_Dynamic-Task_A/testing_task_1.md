### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
/// should be def func1(val)
def func1 val
  if val = 1
  return true
  else
  return false
  end
end

/// spelling mistake dif should be def. need to return b. should be def max(a, b). There's an extra end statement.
dif max a b
  if a > b
      return a
  else
  b
  end
end
end

/// should return i after the for loop. 1..10 should be in brackets.
def looper
  for i in 1..10
  puts i
  end
end

failures = 0

/// no end statement. not testing the whole range
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

/// spelling mistake failrues
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

/// if failures > 0
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

```
