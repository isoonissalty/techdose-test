# 1
## 1.1 code
```
  result = 0
  for ( i from 1 to 10 )
  {
    if (i % 2 == 0)
    {
      result = result + i
    }
    else
    {
      result = result + 2*i
    }
  }
```
## 1.2 end of code

> result = 80

# 2

## end of code

> ตรวจตอบค่า <strong>i</strong> ว่าเป็น <strong>"จำนวนเฉพาะ"</strong> หรือไม่

# 3

## 3.1

> Susan, Kim

## 3.2

> Laura เพราะมีชม. การทำงานต่อวันเยอะ แต่ได้เงินเดือนน้อย

## 3.3

> Susan เพราะ ทำงานน้อยชม. และจ่ายเงินเดือนน้อย แต่ได้ประสิทธิภาพเยอะ

## 3.4

`SELECT name, lastname FROM employee WHERE age>25 AND employee_id IN (SELECT employee_id FROM employee_work WHERE perf>80)`

# 4

```
  function fibo(int n) {
    if (n <= 0) return 0
    if (n == 1) return 1 + fibo(n-1)
    if (n == 2) return 1 + fibo(n-1)
    return fibo(n-1) + fibo(n-2)
  }
```

# 5

```
  funtion sumPrimeNumber(int n) {
    int sum = 0
    for i = 0 to n :
      if isPrimeNumber(i) :
        sum += i
    return sum
  }
```