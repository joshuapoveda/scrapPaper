def lovefunc(flower1 = False,flower2 = False):
     if flower1 % 2 == 0 and flower2 % 2 == 0:
        return False
     elif flower1 % 2 != 0 and flower2 % 2 != 0:
        return False
     elif flower1 == False and flower2 == False:
        return False
     else:
        return True

print(lovefunc())

#check whether both are even or odd
# if so, return False
# else return true

