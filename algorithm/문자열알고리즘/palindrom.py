def is_palindrome(s1):
    if s1.lower() == s1[::-1].lower():
        return True
    return False

s1 = "racecar"
print(is_palindrome(s1))