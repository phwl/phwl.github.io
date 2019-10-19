import fileinput
import re
 
for line in fileinput.input(inplace=1):
    #line = re.sub('wordpress_id: \d+','classes: wide', line.rstrip())
    line = re.sub('^(.*)$',r'{% include figure image_path="\1" caption="" %}', line.rstrip())
    print(line)
