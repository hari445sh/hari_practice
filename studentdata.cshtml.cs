using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System;
using System.ComponentModel.DataAnnotatiom;
using System.Linq;
using System.
using System.Configuration;
using System.Threading.Tasks;
using System.ComponentModel;

namespace harishpage.wwwroot
{
  
 
    public class studentdataModel : PageModel
    {

     
                public void OnGet()
                {
            [BindingProperty]

                    [Required]

                    public string Rollno { get; set; }

                }
        public void OnPost(): OnGet()
        {
            SqlConnection con = new SqlConnection("server=HARI-RAMA;Initial catalog=new;User ID=sa;Password=harish8895;");
            SqlCommand cmd = new SqlCommand("select * from tblstudents where  tblstudents.Rollno='" + Rollno + "'", con);
           con.Open();
            cmd.ExecuteNonQuery();
            SqlDataReader rdr = cmd.ExecuteReader();
            rdr.Read();
            con.Close();
            Console.ReadLine();
            return;

        }
        public async Task<IActionResult> OnPost()
        {
            if(ModelState.IsValid)
            {
                await _db.studentdataModel.AddAsync(studentdataModel);
                await _db.SaveChangesAsync();
            }
        }
            
        

    }
}
