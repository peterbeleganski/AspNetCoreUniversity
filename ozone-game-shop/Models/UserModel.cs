using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ozone_game_shop.Models
{
    public class UserModel
    {
        private DateTime dateOfJoin;

        public long ID { get; set; }
        
        [Required, MinLength(3), MaxLength(50)]
        public string Username { get; set; }
        
        public string EmailAddress { get; set; }

        public DateTime DateOfJoing {get;set;}

        public string Password { get; set;}

        public string Role { get; set; }
    }
}
