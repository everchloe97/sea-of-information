def solution(n):

    prime_numbers = []
    i = 2
    while i<=n:
        if n % i == 0:
            prime_numbers.append(i)
            n = n // i # '몫'
        else :
            i = i+1

    return list(dict.fromkeys(prime_numbers))


print(solution(12))