number = int(input("Please enter an integer to check if it is fizzy or buzzy:"))

is_fizzy = number % 3 == 0
is_buzzy = number % 5 == 0

if is_fizzy and is_buzzy:
    print("This number is both fizzy and buzzy!")
elif is_fizzy:
    print("This number is fizzy!")
elif is_buzzy:
    print("This number is buzzy!")
else:
    print("This number is neither fizzy nor buzzy!")
