
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ozone_game_shop.Models;
using System;
using System.Linq;

public class Seed
{
    public static void init(IServiceProvider serviceProvider) 
    {
        using (GameShopContext context = new GameShopContext(serviceProvider.GetRequiredService<DbContextOptions<GameShopContext>>()))
        {
            if(!context.Users.Any())
            {
                context.Users.AddAsync(
                new UserModel { EmailAddress = "admin@admin.com", Password = "123", Username = "admin", Role = "admin" });
                context.SaveChanges();
            }
            
        }
    }
}