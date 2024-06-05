namespace Project_II.Server.Models
{
    public class Ticket
    {
        public int id { get; set; }
        public int? userid { get; set; }
        public string? title { get; set; }
        public string? data { get; set; }
        public string? status { get; set; } = "open";
        public DateTime? date_time { get; set; } = DateTime.Now;
    }
}