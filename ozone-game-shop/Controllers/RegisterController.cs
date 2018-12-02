using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ozone_game_shop.Models;

namespace ozone_game_shop.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterController : ControllerBase
    {

        private GameShopContext _context;

        public RegisterController(GameShopContext context)
        {
            this._context = context;
        }

        [HttpPost]
        public IActionResult Register([FromBody]UserModel register)
        {
            IActionResult response = Unauthorized();
            if (UserExists(register))
            {
                response = Conflict(new { message = "User exists" });
                return response;
            }
            register.DateOfJoing = DateTime.Now;
            register.Role = register.Role == null ? "user" : register.Role;
            this._context.Users.Add(register);
            this._context.SaveChangesAsync();
            response = Ok(new { message = "User Registered, You have to login now!" });
            return response;
        }

        private Boolean UserExists(UserModel register)
        {
         
            DbSet<UserModel> users = _context.Users;

            foreach (UserModel currUser in users)
            {
                if(currUser.Username == register.Username)
                {
                    return true;
                }
            }
            return false;
        }
    }
}