var suffixdict={"MATE11":true,"FORE13":true,"LAWS13":true,"SOCI13":true,"NURS13":true,"COMP11":true,"MANA13":true,"CHIN11":true,"POLI11":true,"FORE11":true,"SOCI11":true,"POLI13":true,"ENVI13":true,"MATH13":true,"ECON13":true,"PHIL11":true,"HIST11":true,"LAWS11":true,"JOUR11":true,"MACR11":true,"SOFT11":true,"MATH11":true,"PHYS13":true,"PHPM13":true,"PHYS11":true,"BIOL13":true,"TOUR13":true,"ENGL11":true,"HIST13":true,"TCPH13":true,"MED130":true,"MANA11":true,"MUSE11":true,"ENVI11":true,"ICES11":true,"MECH11":true,"COMP12":true,"COMP13":true,"PHIL12":true,"SOCI16":true,"FINE11":true,"MECH13":true,"ECON11":true,"SOFT13":true,"MACR13":true,"CHEM13":true,"CHEM12":true,"PHAR11":true,"PHAR13":true,"JOUR13":true,"CHIN13":true,"INFO11":true,"INFO13":true,"MUSE13":true,"BIOL12":true,"PHYS12":true,"MATE13":true,"PEDU11":true,"BIOL11":true,"TCPH11":true,"POLI16":true,"ECON16":true,"PHIL13":true,"MANA12":true,"ECON12":true,"PTSS11":true,"SOCI12":true,"TOUR11":true,"POLI12":true,"CHIN12":true,"PHYS16":true,"PTSS13":true,"ARTS13":true,"ICES13":true,"ICES12":true,"BIOL16":true,"CHEM11":true,"JWCH11":true,"SOCI17":true,"MED119":true,"PHLI13":true,"POLI17":true,"MED116":true,"PHPM11":true,"MED110":true,"STUO11":true,"JPKC11":true,"GNUR11":true,"HIST17":true,"ECON17":true,"MANA17":true,"XDSY11":true,"JOUR17":true,"CHIN17":true,"FORE12":true,"SUSC11":true,"LAWS17":true,"ENVI17":true,"RZSY11":true,"ZDSY11":true,"KQSY11":true,"TFSY11":true,"ICES17":true,"MATH12":true,"PHIL17":true,"LAWS16":true,"GNUR13":true,"CHEM16":true,"PHIL16":true,"INFO12":true,"ILLU13":true,"LAWS12":true,"MUSE16":true,"NDEC11":true,"NURS11":true,"MUSE12":true,"FORE17":true,"EDU110":true,"FINE17":true,"SOFT12":true,"HIST16":true,"JOUR12":true,"SOSC12":true,"JOUR16":true,"ILLU11":true,"HIST12":true,"PTSS17":true,"DATA13":true,"MED115":true};

var alldata={}
function query(str)
{
	var result;
	$.ajax({
	type : "post",
	url : "http://xk.fudan.edu.cn/xk/stdElectCourse!queryLesson.action?profileId=764",
	data : { lessonNo: "", courseCode: str, courseName:"" },
	async : false,
	success : function(data){
			result=data;
		}
	});
	result=result.substr(0,result.indexOf("/*sc 当前人数, lc 人数上限*/"))
	eval(result);
	for(var i in lessonJSONs)
	{
		entry=lessonJSONs[i];
		alldata[entry.id]=entry;
	}
}
id=0
finaldata=[]
for(s in suffixdict)
{
	id+=1;
	console.log("["+id+"]"+s);
	query(s);
}
for(i in alldata)
{
	finaldata.push(alldata[i]);
}
