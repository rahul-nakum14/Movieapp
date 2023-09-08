s = "abcdefg"
s= list(s)
k = 2

x= 0
y=1
result = ""

for i in range(0,len(s),k):
      s[x] , s[y]=  s[y] , s[x]


print(s)



# s = ["h","e","l","l","o"]

# start = 0
# last = len(s)-1

# for i in range(len(s)):
#     if start > last:
#         break
#     s[start], s[last] =s[last] ,s[start]
#     start +=1
#     last -=1 

# print(s)

# def calc(nums,val):
#     k = 0
#     for i in range(len(nums)):
#         if nums[i] != val:
#             nums[k] = nums[i]
#             k +=1 
#     return k


# nums = [3,2,2,3]
# val = 3
# print(calc(nums,val))

# n = 10
# ans = []

# def isUgly(n):
#     count = 0

#     if n == 1:
#          return True
    
#     for i in [2,3,5]:
#         while n%i==0:
#             n=n//i
#             count += 1
#     if count>0:
#         return True
#     else:
#             return False

# i = 1
# while len(ans)<n:
#     if isUgly(i):
#         ans.append(i)
#     i+=1
# print(ans[-1])



# # nums = [9,10,11,12,13,14,3,4,5]

# # low = 0
# # high = len(nums)-1

# # while low <= high:
# #     mid = (low+high)//2

# #     min = nums[low]

# #     if nums[low] > nums[mid+1]:
# #         min = nums[mid+1]
# #         low = mid + 1
# #     else:
# #         min = nums[low]
# #         high = mid -1

# # print(min)

# # def helper(x,n):

# #     if x== 0: return 0
# #     if n==1: return 1

# #     res = helper(x, n//2)
# #     res = res*res
# #     return x*res if n %2 else res

# # n = 8
# # x = 2
# # res = helper(x,abs(n))
# # print(res if n>=0 else 1/res)







# # def custom_pow(x, n):
# #     ans = 1
# #     if n > 0:
# #         for _ in range(n):
# #             ans = ans * x
# #     else:
# #         for _ in range(abs(n)):
# #             ans = 1 / ans * x
# #     return ans

# # x = 2.0
# # n = -2
# # result = custom_pow(x, n)
# # print(f"{x} raised to the power of {n} is: {result}")

# # def custom_pow(base, exponent):
# #     result = 1
# #     for _ in range(exponent):
# #         result *= base
# #     return result

# # base = 2.00000
# # exponent = 10
# # result = custom_pow(base, exponent)
# # print(f"{base} raised to the power of {exponent} is: {result}")


# # nums = [4,5,6,7,0,1,2]
# # target = 0

# # low = 0
# # high = len(nums) -1 

# # key = 0

# # while low<=high:

# #     mid = (low + high) // 2

# #     if nums[mid] == key:
# #         print("found")

# #     if nums[low]<=nums[mid]:
# #         if nums[low]<=key and key <= nums[mid]:
# #             high = mid-1
# #         else:
# #             low=  mid + 1
# #     else:
# #         if nums[mid]<=key and key<=nums[high]:
# #             low = mid + 1
# #         else:
# #             high = mid - 1




# #     if nums[mid]== key:
# #         print("Found" , mid)
# #         break

# #     if nums[mid] <key:
# #         low+=1

# #     if nums[mid] > key:
# #         high -= 1
# # else:
# #     print("not found")















# # class Solution:
# #     def isHappy(self, n: int) -> bool:
# #         def square_sum(num):
# #             return sum(int(digit) ** 2 for digit in str(num))

# #         slow = n
# #         fast = square_sum(n)
        
# #         while slow != fast:
# #             slow = square_sum(slow)
# #             fast = square_sum(square_sum(fast))
            
# #         return slow == 1

# # # Test the solution
# # solution = Solution()
# # n = 19
# # print(solution.isHappy(n))  # Output: True for n = 19

# # # n = 2


# # # def recur(data):
# # #     sum = 0
# # #     if len(str(data)) == 1:
# # #         if data != 1:
# # #             return False
# # #     else:    
# # #         for i in (str(data)):
# # #             sum = sum + int(i)*int(i)
# # #         return sum      
    
# # # ans =  recur(n)
# # # while ans:
# # #     if len(str(ans)) == 1:
# # #         if ans == 1:
# # #             print("True")
# # #             break
# # #     else:
# # #         ans = recur(ans)





