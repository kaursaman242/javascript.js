hi=0




print(f"{hi}, Sahil!")   


if hi:
    print("Hi is defined")
elif not hi:
    print("Hi is not defined")
else:
    print("Hi is 0 defined")

# add advnced for loop related string iteration
for char in "Sahil":
    print(char)

# write function to greet names in array using for each
def greet_names(names):
    data=""
    for name in names:
        data += f"Hello, {name}!\n"
    return data

names = ["Ali", "John", "Sara"]
output = greet_names(names)
print(output)