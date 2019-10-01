import fileinput
import re
 
for line in fileinput.input(inplace=1, backup='.bak'):
    line = re.sub('wordpress_id: \d+','classes: wide', line.rstrip())
    print(line)
