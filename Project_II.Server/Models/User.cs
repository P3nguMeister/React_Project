namespace Project_II.Server.Models
{
    public class User
    {
        public int id { get; set; }
        public string? username { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public string? role { get; set; } = "basic";
        public string? profile_picture { get; set; }
        public int? level { get; set; } = 0;
    }
}
