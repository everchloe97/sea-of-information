array = [149, 180, 192, 170]
height = 167

def solution(array, height):
    
    return sum(1 for v in array if v > height)

print(solution(array, height))