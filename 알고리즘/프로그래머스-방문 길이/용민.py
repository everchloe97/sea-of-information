def solution(dirs):
    x, y = 0, 0  # 현재 좌표
    loads = set()  # 지나간 길을 저장할 집합

    for d in dirs:
        nx, ny = x, y
        if d == "U":
            ny += 1
        elif d == "D":
            ny -= 1
        elif d == "R":
            nx += 1
        elif d == "L":
            nx -= 1

        if nx < -5 or nx > 5 or ny < -5 or ny > 5:
            continue

        loads.add((x, y, nx, ny))  # 현재 좌표 -> 다음 좌표
        loads.add((nx, ny, x, y))  # 다음 좌표 -> 현재 좌표
        x, y = nx, ny

    return len(loads) // 2


# test case
print(solution("ULURRDLLU"))
print(solution("LULLLLLLU"))