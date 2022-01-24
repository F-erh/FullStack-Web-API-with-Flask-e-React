# python program to print elements
# which are greater than avg of
# array

# Print array elements greater
# than average
def printAboveAvg(arr, a):

	# Find average
	avg = 0
	for i in range(a):
		avg = avg + arr[i]
		
	avg = avg // a

	# Print elements greater than
	# average
	for i in range(a):
		if arr[i] > avg:
			print(arr[i])

# Driver Program
arr = [22, 28, 33, 54, 14, 2, 76]
a = len(arr)
printAboveAvg(arr, a)
