import fileinput
import re
import sys
 
for line in fileinput.input(sys.argv[1], inplace=1, backup='.bak'):
    #line = re.sub(r'\[!.*\((.+)\).*\]\(.*\)', r'![](\1){: .align-center}', line.rstrip())
    #line = re.sub(r'^(link.*)', r'# \1', line.rstrip())
    line = re.sub(r'-[0-9]*x[0-9]*.jpg', r'.jpg', line.rstrip())

    print(line)
