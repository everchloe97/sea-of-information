numbers = [34, 5, 71, 29, 100, 34]
n=123

def solution(numbers,n):
    
    answer = 0
    i = 0
    while answer <=n:
        answer+=numbers[i]
        i+1
    return answer



print(solution(numbers, n))