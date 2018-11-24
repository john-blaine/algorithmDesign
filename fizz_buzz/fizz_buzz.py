number = input("Please enter an integer to check if it is fizzy or buzzy:")

isFizzy = number % 3 == 0
isBuzzy = number % 5 == 0

if isFizzy && isBuzzy:
    print("This number is both fizzy and buzzy!")
elif isFizzy:
    print("This number is fizzy!")
elif isBuzzy:
    print("This number is buzzy!")
else:
    print("This number is neither fizzy nor buzzy!")
