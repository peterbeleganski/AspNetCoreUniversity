namespace ozone_game_shop.Models
{
    public class Game
    {
        public long ID { get; set; }

        public string Title { get; set; }

        public string ImageUrl { get; set; }
        
        public decimal Price { get; set; }

        public string Description { get; set; }
    }
}
