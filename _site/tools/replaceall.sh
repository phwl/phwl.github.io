for i in *.markdown
do
    sed -i .bak 's#http://phwl.org/wp-content/uploads#/assets/images#'  $i
done

