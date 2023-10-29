'''slicing 활용'''

import re

def valid_palindrom(s:str) -> bool :
  
  s = s.lower()
  s = re.sub('[^a-z0-9]','',s)
 
  print('original --->', s, 'reversed --->', s[::-1])
  return s == s[::-1]  # slicing (str, list를 역순으로 만든다.)

s = "level"

print(valid_palindrom(s))


'''regex'''
# a-z
# 0-9