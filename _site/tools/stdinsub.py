import fileinput
import re
import sys
 
for line in fileinput.input():
    #line = re.sub(r'\[!.*\((.+)\).*\]\(.*\)', r'![](\1){: .align-center}', line.rstrip())
    #line = re.sub(r'^(link.*)', r'# \1', line.rstrip())
    #line = re.sub(r'-[0-9]*x[0-9]*.jpg', r'.jpg', line.rstrip())
    line = re.sub(r'(.*)', r'![](/assets/images/2004/05/\1){: .align-center}', line.rstrip())

    print(line)
