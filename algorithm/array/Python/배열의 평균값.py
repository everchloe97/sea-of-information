numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def solution(numbers):
    hap =sum(numbers)
    return hap/len(numbers)

result = solution(numbers)
print(result)