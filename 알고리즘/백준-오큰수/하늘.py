'''
@ 풀이
stack & index 이용
메모리 149436	시간 1452

이를테면 [3,5,2,7] 의 경우
i = 0 일때 idx_list = [0]
i =1 일때
arr[0] (stack의 top 값)에 해당하는 값보다 arr[1]이 크면 해당 값은 ans[0]에 넣는다. (오큰수로 추가됨.)
n_list = [3,5,2,7]
ans = [5,-1,-1,-1]   # 오큰수 5가 저장되고 idx_list는 [ ]로 다시 비워준다. (pop)
왜냐하면 idx_list는 오큰수를 못찾은 원소의 index 를 담은
배열이고 3은 오큰수가 존재하기 때문.
그렇게 반복문을 돌려서 최종적으로 오큰수 배열을 print한다.
'''

n=int(input())                              # 크기가 n인 수열
arr=list(map(int,input().split()))   # 입력받은 수들의 list
ans=[-1 for i in range(n)]            # 오큰수를 담아두는 배열. 초기 값은 n의 크기만큼  [n * -1]
idx_list=[]                                    # 오큰수를 찾지 못한 값의 index를 저장하는 배열. 일종의 stack

for i in range(n):
    while idx_list and arr[idx_list[-1]]<arr[i]:
        ans[idx_list.pop()]=arr[i]

    idx_list.append(i)

for i in ans:
    print(i,end=' ')



