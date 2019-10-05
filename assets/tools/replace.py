import fileinput
import re
 
for line in fileinput.input(inplace=1, backup='.bak'):
    #line = re.sub('wordpress_id: \d+','classes: wide', line.rstrip())
    line = re.sub('!\[(.*)\]\((.*)\)\{: .align-center\}',r'[![\1](\2){: .align-center}](\2)', line.rstrip())
    print(line)
