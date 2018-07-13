export const date = {
	milliToDate
}

function milliToDate(time) {
	var date = new Date(time)
	return toDMY(date)
}

function toDMY(date){
	var dd = date.getDate()
	var mm = date.getMonth()+1

	var yyyy = date.getFullYear()
	if(dd<10) dd='0'+dd
	if(mm<10) mm='0'+mm

	return dd+'/'+mm+'/'+yyyy
}