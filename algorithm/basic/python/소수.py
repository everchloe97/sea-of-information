'''1과 자기 자신으로 밖에는 더이상 나눌 수 없는 수'''

def is_prime(num):
    for i in range(2,num):
        if num% i==0 : return False
    return True

print(is_prime(100))

def is_prime_root(num):
    for i in range(2,int(num**(1/2))+1):
        if num% i==0 : return False
    return True


print(is_prime_root(100))