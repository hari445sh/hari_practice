using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace harishpage.wwwroot
{
    public class profilepageModel : PageModel
    {
        public void validate()
        {

            string Rollno = "@Rollno";
            SqlConnection con = new SqlConnection("server=HARI-RAMA;Initial catalog=new;User ID=sa;Password=harish8895;");
            SqlCommand cmd = new SqlCommand("select tblstudents.Rollno,tblstudents.FirstName,tblstudents.MiddleName,tblstudents.LastName,tblstudents.TeluguMarks,tblstudents.EnglishMarks,tblstudents.MobileNumber,tblstudents.Age,tblstudents.studentstatusid,tblstudents.emailid ,fulldaystudents.fulldayfee from tblstudents inner join fulldaystudents on tblstudents.Rollno=fulldaystudents.Rollno where  tblstudents.Rollno='" + Rollno1 + "'", con);

            con.Open();
            cmd.ExecuteNonQuery();
            SqlDataReader rdr = cmd.ExecuteReader();
            rdr.Read();
            con.Close();
            Console.ReadLine();
            return;
        }
    }
}
