
var conn = new ActiveXObject("ADODB.connection")
var conn_str = ""
var db_Host = ""
var db_User = ""
var db_Password = ""
var db_Provider = ""
var db_Default = ""
function Show_Data() {
    db_Host = "Hari-Rama";
    db_User = "sa";
    db_Password = "harish8895";
    db_Provider = "SQLOLEDB";
    db_Default = "new";
    conn_str = Provider = "+db_Provider+"; 'Data Source' = "+db_Host+"; 'User Id' = "+db_User+"; Passsword = "+db_Password+"; 'Initial Catalog' = "+db_Default+";
    Show_Data_from_database();
}function Show_Data_from_database()
{
    try {
        conn.open(conn_str)
        var reader = new ActiveXObject("ADODB.Recordset");
        var a = "@Rollno";
        var strQuery = "select tblstudents.Rollno,tblstudents.FirstName,tblstudents.MiddleName,tblstudents.LastName,tblstudents.TeluguMarks,tblstudents.EnglishMarks,tblstudents.MobileNumber,tblstudents.Age,tblstudents.studentstatusid,tblstudents.emailid ,fulldaystudents.fulldayfee from tblstudents inner join fulldaystudents on tblstudents.Rollno=fulldaystudents.Rollno where  tblstudents.Rollno=" + a + "";
        reader.open(strQuery, conn);
        reader.MoveFirst();
        while (!reader, eof) {
            document.write(reader.fields(0) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(1) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(2) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(3) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(4) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(5) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(6) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(7) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(8) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(9) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(10) + "&nbsp;&nbsp;&nbsp");
            document.write(reader.fields(11) + "</br>");

            reader.movenext();


        }
    }
    catch (e) {
        alert("error creating connection")
    }
}
