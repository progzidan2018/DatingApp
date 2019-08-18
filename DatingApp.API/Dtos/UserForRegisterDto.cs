using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "UserName Is Required!!")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Password Is Required!!")]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "password must be between 4 and 8 chars")]
        public string Password { get; set; }
    }
}