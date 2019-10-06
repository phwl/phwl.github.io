import fileinput
import re
 
for line in fileinput.input(inplace=1):
    #line = re.sub('wordpress_id: \d+','classes: wide', line.rstrip())
    line = re.sub('(.*)',r'[![](\1){: .align-center}](\1)', line.rstrip())
    print(line)
