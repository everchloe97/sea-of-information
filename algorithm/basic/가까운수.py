array = [3, 10, 28]
n = 20

solution=lambda a,n:sorted(a,key=lambda x:(abs(x-n),x))[0]


print(solution(array,n))

# abs(x-n) > 3,10,28 에서 각각 20을 뺀 절대값
# 그리고 동일한 차이를 가진다면 원래 값 x를 기준으로 
# sorted (정렬한 것)를 list로 반환
# 마지막으로 [0] 가장 첫번째, 가장 작은 원소를 반환.