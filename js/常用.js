//时间戳为10位需*1000，时间戳为13位的话不需乘1000
function formateDate(str) {
    const myDate=new Date(str);
    const year=myDate.getFullYear()+'-';
    const month=(myDate.getMonth()+1 < 10 ? '0'+(myDate.getMonth()+1) : myDate.getMonth()+1) + '-';
    const day=myDate.getDate()+' ';
    const hour=myDate.getHours()+':';
	const minutes=myDate.getMinutes()+':';
	const s = date.getSeconds();
    return year+month+day+hour+minutes+s;
}

//深拷贝
function deepClone(source){
	const targetObj= source.constructor ===Array?[]:{};
	for(let keys in source){
		if(source.hasOwnProperty(keys)){
			if(source[keys]&&typeof source[keys]==='object'){
				targetObj[keys]=source[keys].constructor === Array?[]:{};
				targetObj[keys]=deepClone(source[keys])
			}else{
				targetObj[keys]=source[keys];
			}
		}
	}
	return targetObj;
}

//数组去重
function unique(arr){
	return Array.from(new Set(arr))
}
function unique1(arr){
	if(!Array.isArray(arr)){
		console.log('不是数组')
	}
	var array=[];
	for(var i=0;i<arr.length;i++){
		if(array.indexOf(arr[i])===-1){
			array.push(arr[i]);
		}
	}
	return array;
}

//正则手机号
function phone(phone){
	var reg=/^1[3|5|7|8|4]\d{9}$/;
	return reg.test(phone)
}
