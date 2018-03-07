// 'o' contains all course data

function isletter(str)
{
	if(str[0]>='a' && str[0]<='z')
		return true;
	if(str[0]>='A' && str[0]<='Z')
		return true;
	return false;
		
}
suffixdict={};
for(i in o)
{
	entry=o[i]
	if(entry.length!=4) continue;
	if(isletter(entry[1][0]) && entry[1].length>=9 && !entry[1].includes('.'))
		suffixdict[entry[1].substr(0,6)]=true;
}
console.log(suffixdict);