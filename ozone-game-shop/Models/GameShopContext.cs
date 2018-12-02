using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ozone_game_shop.Models
{
    public class GameShopContext : DbContext
    {
        public GameShopContext(DbContextOptions<GameShopContext> options)
            :base(options)
        {
        }

        public DbSet<Game> Games { get; set; }   

        public DbSet<UserModel> Users { get; set; }
    }
}
