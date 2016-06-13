function getEmployees(){
var employees=document.getElementById("tblemplyees");
return employees;
}
function empList(){
var empList=[{
	empid=100,
	empname="suresh",
	empdepartment="TSG",
empdesignation="software Engineer"
},
	
	{
	empid=100,
	empname="suresh",
	empdepartment="TSG",
empdesignation="software Engineer"
},

{
	empid=100,
	empname="suresh",
	empdepartment="TSG",
empdesignation="software Engineer"
	
},

{
	empid=100,
	empname="suresh",
	empdepartment="TSG",
empdesignation="software Engineer"
}];
return empList;
}
function emprows(){
	
	for(var i=0;i<emplist.length;i++){
		empList.rows(empid);
		
	}
	
}
emprows();