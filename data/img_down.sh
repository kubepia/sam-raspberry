imgdir=/Users/seungil/Workspace/project/skb-poc/sam-raspberry-bff/data
img_list=./movie_list.json
img_count=`cat ./movie_list.json | jq  . | grep -w name | wc -l`
i=0
while [ $i -lt $img_count ]
##while [ $i -le 3 ]
do
cat  movie_list.json| jq -c '[.'[$i]'.id,.'[$i]'.name,.'[$i]'.image]' | sed 's/"//g' | sed 's/,/ /g'| sed 's/\[//g'| sed 's/\]//g' | while read id name img
do
echo "============================================="
echo " $id $name $img"
echo "============================================="
wget -O $imgdir/$id.$name.jpg $img
echo "============================================="
done
i=`expr $i + 1`
sleep 1
done