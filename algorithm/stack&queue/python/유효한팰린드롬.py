'''slicing 활용'''

import re

def valid_palindrom(s:str) -> bool :
  
  s = s.lower()
  s = re.sub('[^a-z0-9]','',s)  # a-z  0-9
 
  print('original --->', s, 'reversed --->', s[::-1])
  return s == s[::-1]  # slicing (str, list를 역순으로 만든다.)

s = "level"

print(valid_palindrom(s))

'''*******************************************************************'''

'''deque 활용'''

from collections import deque

def valid_palindrome(s: str) -> bool:
    s = s.lower()
    s = ''.join(c for c in s if c.isalnum())  # 알파벳과 숫자만 남김
    char_deque = deque(s)
    
    while len(char_deque) > 1:
        if char_deque.popleft() != char_deque.pop():
            return False
    
    return True

s = "level"
result = valid_palindrome(s)
print(result)
